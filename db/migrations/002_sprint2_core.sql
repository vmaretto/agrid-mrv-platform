CREATE TABLE IF NOT EXISTS parcels (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id),
  name TEXT NOT NULL,
  geometry JSONB,
  area_ha FLOAT,
  crop_type TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS iot_sensors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id),
  parcel_id UUID REFERENCES parcels(id),
  sensor_type TEXT,
  latitude FLOAT,
  longitude FLOAT,
  installation_date DATE,
  status TEXT,
  firmware_version TEXT
);

CREATE TABLE IF NOT EXISTS iot_readings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sensor_id UUID REFERENCES iot_sensors(id),
  project_id UUID REFERENCES projects(id),
  timestamp TIMESTAMP,
  soil_moisture FLOAT,
  soil_temperature FLOAT,
  soil_co2 FLOAT,
  soil_ph FLOAT,
  battery_level FLOAT,
  blockchain_tx_hash TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS satellite_observations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id),
  parcel_id UUID REFERENCES parcels(id),
  observation_date DATE,
  ndvi_mean FLOAT,
  ndvi_min FLOAT,
  ndvi_max FLOAT,
  evi_mean FLOAT,
  cloud_cover_pct FLOAT,
  land_use_class TEXT,
  image_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS carbon_balance_entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id),
  entry_type TEXT CHECK (entry_type IN ('emission','sequestration')),
  category TEXT,
  subcategory TEXT,
  amount_tco2e FLOAT,
  period_start DATE,
  period_end DATE,
  source TEXT,
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS project_shares (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id),
  owner_id UUID REFERENCES users(id),
  shared_with_email TEXT,
  shared_with_user_id UUID REFERENCES users(id),
  role TEXT CHECK (role IN ('viewer','editor')),
  accepted BOOLEAN DEFAULT false,
  invited_at TIMESTAMP DEFAULT NOW(),
  accepted_at TIMESTAMP
);
