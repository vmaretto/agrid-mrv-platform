const json = (res, status, data) => {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
};

const html = (res, body) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(body);
};

const readBody = async (req) => new Promise((resolve) => {
  let body = '';
  req.on('data', chunk => { body += chunk; });
  req.on('end', () => {
    try { resolve(body ? JSON.parse(body) : {}); } catch { resolve({}); }
  });
});

module.exports = async function handler(req, res) {
  const url = new URL(req.url, `https://${req.headers.host || 'localhost'}`);
  const path = url.pathname.replace(/^\/api/, '') || '/';

  if (path === '/public/docs') {
    return html(res, `<!doctype html><html lang="it"><head><meta charset="utf-8"><title>A-Grid API Docs</title><link rel="stylesheet" href="/assets/mrv.css"></head><body><main class="public-shell"><section class="hero-band"><div class="eyebrow">Sprint 4 · F16</div><h1>Data API pubblica</h1><p class="lead">Endpoint mock per esportare IoT, crediti e layer GeoJSON/CSV/PDF con header X-API-Key.</p></section><div class="card"><pre class="api-code">GET /api/public/data?project_id=demo&format=geojson&layer=iot
GET /api/public/data?project_id=demo&format=csv&layer=credits
GET /api/iot/sensors?project_id=demo
GET /api/satellite/ndvi?project_id=demo
POST /api/calculator/estimate</pre></div></main></body></html>`);
  }

  if (path === '/calculator/coefficients') {
    return json(res, 200, { coefficients: { seminativo: 1.33, vite: 0.62, olivo: 0.55, foraggere: 0.9 } });
  }

  if (path === '/calculator/estimate' && req.method === 'POST') {
    const body = await readBody(req);
    const hectares = Number(body.hectares || 100);
    const coefficient = body.cropType === 'vite' ? 0.62 : 1.33;
    const estimatedCredits = Math.round(hectares * coefficient);
    return json(res, 200, { estimatedCredits, estimatedRevenue: estimatedCredits * 35, standard: 'CRCF' });
  }

  if (path === '/iot/sensors') {
    return json(res, 200, { sensors: [
      { id: 'sm-01', projectId: 'demo', sensorType: 'soil_moisture', latitude: 42.362, longitude: 12.181, status: 'online' },
      { id: 'eddy-t1', projectId: 'demo', sensorType: 'co2_flux', latitude: 42.357, longitude: 12.191, status: 'online' }
    ]});
  }

  if (path === '/iot/readings') {
    return json(res, 200, { readings: [
      { sensorId: 'sm-01', timestamp: '2026-06-06T08:00:00Z', soilMoisture: 34.2, soilTemperature: 18.4, soilCo2: 412, soilPh: 6.8, blockchainTxHash: '0xa3f...42b' }
    ]});
  }

  if (path === '/satellite/ndvi') {
    return json(res, 200, { observations: [
      { projectId: 'demo', observationDate: '2026-06-06', ndviMean: 0.71, cloudCoverPct: 4.2, landUseClass: 'vineyard' }
    ]});
  }

  if (path === '/credits') {
    return json(res, 200, { credits: [
      { id: 'credit-42', projectId: 'demo', vintageYear: 2026, quantityTco2e: 1, nftTokenId: '42', status: 'minted', polygonscanUrl: 'https://polygonscan.com' }
    ]});
  }

  if (path === '/public/data') {
    const format = url.searchParams.get('format') || 'json';
    const layer = url.searchParams.get('layer') || 'iot';
    return json(res, 200, { format, layer, projectId: url.searchParams.get('project_id'), data: [{ id: 'demo', value: 42 }] });
  }

  return json(res, 404, { error: 'Not found', path });
};
