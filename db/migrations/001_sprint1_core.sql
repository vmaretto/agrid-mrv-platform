CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT,
  full_name TEXT,
  role TEXT DEFAULT 'farmer',
  organization_id UUID,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS earnings_coefficients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  crop_type TEXT NOT NULL,
  practice_code TEXT NOT NULL,
  coefficient_tco2e_ha_year FLOAT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE (crop_type, practice_code)
);

CREATE TABLE IF NOT EXISTS earnings_estimates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  hectares FLOAT NOT NULL,
  crop_type TEXT NOT NULL,
  current_practices JSONB DEFAULT '{}'::jsonb,
  future_practices JSONB DEFAULT '{}'::jsonb,
  estimated_credits FLOAT NOT NULL,
  estimated_revenue FLOAT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  name TEXT NOT NULL,
  description TEXT,
  target_standard TEXT,
  monitoring_period TEXT,
  farm_name TEXT,
  farm_owner TEXT,
  total_area_ha FLOAT,
  main_crops TEXT[],
  region TEXT,
  center_lat FLOAT,
  center_lng FLOAT,
  practices JSONB DEFAULT '{}'::jsonb,
  iot_config JSONB DEFAULT '{}'::jsonb,
  status TEXT DEFAULT 'draft',
  estimated_credits FLOAT,
  step_completed INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS guide_documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  file_url TEXT NOT NULL,
  is_important BOOLEAN DEFAULT false,
  category TEXT,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS guide_reads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  document_id UUID REFERENCES guide_documents(id),
  read_at TIMESTAMP DEFAULT NOW(),
  UNIQUE (user_id, document_id)
);

CREATE TABLE IF NOT EXISTS crcf_compliance (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id),
  requirement_code TEXT NOT NULL,
  requirement_name TEXT NOT NULL,
  status TEXT CHECK (status IN ('pending', 'in_progress', 'completed')) DEFAULT 'pending',
  evidence_urls TEXT[],
  notes TEXT,
  completed_at TIMESTAMP,
  reviewed_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW()
);
