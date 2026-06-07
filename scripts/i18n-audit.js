const fs = require('fs');
const path = require('path');

const strict = process.argv.includes('--strict');
const root = process.cwd();
const appDir = path.join(root, 'app');
const files = [
  'index.html',
  'farmer/index.html',
  'admin/index.html',
  'stakeholder/index.html',
  'guide/index.html',
  'calculator/index.html',
  'onboarding/index.html',
  'join/index.html',
  'enterprise/index.html',
  ...fs.readdirSync(appDir).filter(file => file.endsWith('.html')).map(file => `app/${file}`)
];

const i18nSource = fs.readFileSync(path.join(root, 'assets/i18n.js'), 'utf8');

function parseRows(name) {
  const start = i18nSource.indexOf(`const ${name} = [`);
  const end = i18nSource.indexOf('];', start);
  const block = i18nSource.slice(start, end);
  const rows = [];
  const pattern = /\[\s*'((?:\\'|[^'])*)'\s*,\s*'((?:\\'|[^'])*)'\s*,\s*'((?:\\'|[^'])*)'\s*,\s*'((?:\\'|[^'])*)'\s*\]/g;
  for (const match of block.matchAll(pattern)) {
    rows.push(match.slice(1).map(value => value.replace(/\\'/g, "'")));
  }
  return rows;
}

const exactRows = parseRows('rows');
const phraseRows = parseRows('phraseRows');
const exact = new Map(exactRows.map(row => [row[0], row[1]]));
const phrases = new Map(phraseRows.map(row => [row[0], row[1]]));

function normalize(value) {
  return String(value || '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&euro;/g, '€')
    .replace(/\s+/g, ' ')
    .trim();
}

function translate(value) {
  const source = normalize(value);
  if (exact.has(source)) return exact.get(source);
  let next = source;
  [...phrases.keys()].sort((a, b) => b.length - a.length).forEach(key => {
    next = next.split(key).join(phrases.get(key));
  });
  return normalize(next);
}

function interesting(value) {
  const text = normalize(value);
  if (!text || text.length < 3) return false;
  if (/^[-+]?\d+[\d.,%]*(\s*(ha|€|EUR|tCO2e|m|gg|C|gC\/m2))?$/.test(text)) return false;
  if (/^0x[\w.]+/.test(text) || /^#[\w-]+$/.test(text)) return false;
  if (/^https?:|^\/|^\.\//.test(text)) return false;
  return /[A-Za-zÀ-ÿ]/.test(text);
}

function stripHtml(value) {
  return normalize(value.replace(/<[^>]*>/g, ' '));
}

function scriptFragments(value) {
  let text = value.replace(/\\'/g, "'").replace(/\\n/g, ' ');
  if (text.includes('<')) text = stripHtml(text);
  return text.split(/(?<=[.!?])\s+|\s*\|\s*/).map(normalize).filter(interesting);
}

const italianPattern = /\b(accettato|agricol|analisi|ancora|approvato|attiv[oaie]|azienda|bozza|caric|cliente|clienti|colleg|complet|contatto|copertura|credito|dati|dato|descrivi|documenti|documento|evidenz|filari|gestione|guida|interfilare|irrigazione|lavorazion|manca|mancano|mancanti|mappa|monitoraggio|percorso|permanenza|progetto|pratiche|profondit|qualit|registro|repliche|residui|richiesta|sensore|sensori|suolo|superficie|validazione|validato|validata|validare|vigneto|vigoria|vegetale|vendita|verific|pagamento|trasparente|certificazione|generati|avviata|registrato|permanente|ordinaria|manuale|manuali|inserisci|campionamento|umidit|meteo|confini|aziendali|particelle|storico|revisioni|calcolati|aggiuntivo|vendibile|rendimento|utente|organizzazione)\b/i;
const glossaryPattern = /\b(MRV|SOC|CRCF|NDVI|xFarm|pOsti|Polygon|Sentinel|Chart|API|KPI|BAU|NFT|IoT|dMRV)\b/;

function collectCandidates(file) {
  const raw = fs.readFileSync(path.join(root, file), 'utf8');
  const candidates = [];
  const noScript = raw.replace(/<script[\s\S]*?<\/script>/gi, ' ');
  const text = noScript.replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, '\n');

  text.split(/\n+/).forEach(line => {
    const value = normalize(line);
    if (interesting(value)) candidates.push({ kind: 'html', text: value });
  });

  for (const match of raw.matchAll(/\b(?:value|placeholder|title|aria-label)="([^"]+)"/g)) {
    const value = normalize(match[1]);
    if (interesting(value)) candidates.push({ kind: 'attr', text: value });
  }

  for (const script of raw.matchAll(/<script[\s\S]*?>([\s\S]*?)<\/script>/gi)) {
    for (const match of script[1].matchAll(/'([^'\\]*(?:\\.[^'\\]*)*)'|"([^"\\]*(?:\\.[^"\\]*)*)"/g)) {
      scriptFragments(match[1] || match[2] || '').forEach(text => candidates.push({ kind: 'script', text }));
    }
  }
  return candidates;
}

const findings = new Map();

files.forEach(file => {
  collectCandidates(file).forEach(candidate => {
    const translated = translate(candidate.text);
    if (!italianPattern.test(translated)) return;
    if (glossaryPattern.test(translated) && translated.split(/\s+/).length <= 3) return;
    const key = `${file}\t${candidate.text}`;
    if (!findings.has(key)) findings.set(key, { file, text: candidate.text, after: translated, kinds: new Set() });
    findings.get(key).kinds.add(candidate.kind);
  });
});

const grouped = {};
for (const finding of findings.values()) {
  if (!grouped[finding.file]) grouped[finding.file] = [];
  grouped[finding.file].push({
    text: finding.text,
    after: finding.after,
    kinds: [...finding.kinds].sort()
  });
}

Object.keys(grouped).sort().forEach(file => {
  grouped[file].sort((a, b) => a.text.localeCompare(b.text, 'it'));
});

const total = Object.values(grouped).reduce((sum, items) => sum + items.length, 0);
if (total === 0) {
  console.log('i18n audit: no uncovered Italian-like strings found.');
} else {
  console.log(`i18n audit: ${total} uncovered Italian-like string(s) found.`);
  console.log(JSON.stringify(grouped, null, 2));
}

if (strict && total > 0) process.exit(1);
