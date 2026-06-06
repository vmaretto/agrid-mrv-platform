import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        farmer: 'farmer/index.html',
        admin: 'admin/index.html',
        stakeholder: 'stakeholder/index.html',
        calculator: 'calculator/index.html',
        join: 'join/index.html',
        guide: 'guide/index.html',
        onboarding: 'onboarding/index.html',
        newProject: 'app/new-project.html',
        appGuides: 'app/guides.html',
        crcf: 'app/crcf.html',
        map: 'app/map.html',
        carbonBalance: 'app/carbon-balance.html',
        settings: 'app/settings.html',
        contracts: 'app/contracts.html',
        wallet: 'app/wallet.html',
        coBenefits: 'app/co-benefits.html',
        dmrv: 'app/dmrv.html',
        enterprise: 'enterprise/index.html',
        partnerships: 'app/partnerships.html',
      },
    },
  },
});
