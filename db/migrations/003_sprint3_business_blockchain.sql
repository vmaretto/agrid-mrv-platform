CREATE TABLE IF NOT EXISTS contracts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id),
  farmer_id UUID REFERENCES users(id),
  buyer_id UUID REFERENCES users(id),
  contract_type TEXT CHECK (contract_type IN ('mrv','broker','direct_sale')),
  status TEXT,
  terms JSONB,
  value_eur FLOAT,
  credits_amount FLOAT,
  nft_token_ids TEXT[],
  start_date DATE,
  end_date DATE,
  signed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS blockchain_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id),
  tx_type TEXT,
  tx_hash TEXT,
  block_number BIGINT,
  data_hash TEXT,
  metadata JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS carbon_credits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id),
  vintage_year INT,
  quantity_tco2e FLOAT,
  nft_token_id TEXT,
  nft_contract_address TEXT,
  status TEXT,
  issuance_date DATE,
  retirement_date DATE,
  buyer_address TEXT,
  polygonscan_url TEXT,
  ipfs_metadata_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS buffer_pool (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id),
  credit_id UUID REFERENCES carbon_credits(id),
  amount_tco2e FLOAT,
  escrow_contract_address TEXT,
  lock_start_date DATE,
  lock_end_date DATE,
  release_schedule JSONB,
  status TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS wallet_addresses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  address TEXT,
  label TEXT,
  is_primary BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS payment_schedules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id),
  credit_id UUID REFERENCES carbon_credits(id),
  total_amount FLOAT,
  farmer_share FLOAT,
  platform_fee FLOAT,
  buffer_pool_amount FLOAT,
  buffer_release_schedule JSONB,
  status TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS co_benefits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id),
  assessment_date DATE,
  biodiversity_score INT,
  water_quality_score INT,
  soil_health_score INT,
  climate_resilience_score INT,
  carbon_score INT,
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
