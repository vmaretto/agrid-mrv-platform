# A-Grid MRV Platform

Mockup frontend della piattaforma **A-Grid Carbon Farming MRV**, integrato con elementi della precedente `carbon-credit-dashboard`.

## Posizionamento

**MRV first, blockchain from day one.**

La piattaforma non promette subito emissione/vendita di crediti. La componente blockchain entra già dal primo step come layer di fiducia per:

- identificativo progetto / Project Anchor;
- hash delle evidenze;
- timestamp;
- audit trail;
- integrazione pOsti;
- readiness verso certificazione futura.

## Schermate incluse

- Dashboard MRV
- Wizard nuovo progetto MRV
- Step 1 con blockchain / pOsti anchor
- Progetti
- Evidenze
- Standard readiness
- Blockchain / pOsti layer
- MRV Readiness Report

## Cosa è stato integrato dalla vecchia carbon-credit-dashboard

- Logica wizard multi-step
- Fasi carbon farming / baseline / monitoring / report
- Concetto di certificato, trasformato in **MRV Readiness Report**
- Componente blockchain mantenuta ma riposizionata: da token/marketplace a tracciabilità evidenze e audit trail

## Deploy Vercel

Il progetto è pronto per Vercel.

Impostazioni:

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

## Locale

```bash
npm install
npm run dev
```

Oppure apri direttamente:

```bash
open /Users/virgiliomaretto/Desktop/A-Grid_MRV_Mockup/index.html
```
