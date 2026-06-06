CREATE TABLE IF NOT EXISTS chat_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  project_id UUID REFERENCES projects(id),
  role TEXT,
  content TEXT,
  context JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS organizations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  type TEXT CHECK (type IN ('enterprise','standard')),
  subscription_plan TEXT,
  invite_code TEXT UNIQUE,
  max_invites INT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS org_memberships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id),
  user_id UUID REFERENCES users(id),
  role TEXT,
  joined_via TEXT CHECK (joined_via IN ('invite_code','direct')),
  joined_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS api_keys (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  key_hash TEXT,
  label TEXT,
  permissions TEXT[],
  rate_limit INT DEFAULT 1000,
  last_used_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS data_partnerships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  provider_name TEXT,
  api_endpoint TEXT,
  api_key_encrypted TEXT,
  data_type TEXT,
  resolution_m INT,
  coverage TEXT,
  status TEXT,
  last_sync_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);
