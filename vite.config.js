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
      },
    },
  },
});
