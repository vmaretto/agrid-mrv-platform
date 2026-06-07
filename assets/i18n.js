(function () {
  const dictionaries = {
    en: {
      'Cambia ruolo': 'Switch role',
      'Dashboard farmer': 'Farmer dashboard',
      'Dashboard': 'Dashboard',
      'Guida': 'Guide',
      'Guida operativa': 'Operational guide',
      'Calcolatore crediti': 'Credit calculator',
      'Onboarding': 'Onboarding',
      'Mappa IoT': 'IoT map',
      'Mappa': 'Map',
      'Contratti': 'Contracts',
      'Wallet': 'Wallet',
      'CRCF': 'CRCF',
      'PDF': 'PDF',
      'Avanza step': 'Next step',
      'Seleziona vista': 'Select view',
      'Entra nel portale': 'Enter portal',
      'Vista Farmer / Cliente': 'Farmer / Client view',
      'Vigna Trebotti — Carbon Farming Pilot': 'Vigna Trebotti — Carbon Farming Pilot',
      'Registra un nuovo progetto MRV': 'Register a new MRV project',
      'Calcola i tuoi crediti carbonio': 'Calculate your carbon credits',
      'Chi sei?': 'Who are you?',
      'Compliance CRCF': 'CRCF compliance',
      'Guide e documenti': 'Guides and documents',
      'Mappa IoT live + dMRV satellite': 'Live IoT map + satellite dMRV',
      'Bilancio carbonio — Vigna Trebotti': 'Carbon balance — Vigna Trebotti',
      'Contratti self-service': 'Self-service contracts',
      'Asset Wallet': 'Asset wallet',
      'Co-benefits dashboard': 'Co-benefits dashboard',
      'dMRV automatizzato Sentinel-2': 'Automated Sentinel-2 dMRV',
      'Supply chain carbon farming': 'Supply chain carbon farming',
      'Partnership data layer': 'Partnership data layer',
      'Identità progetto': 'Project identity',
      'Baseline': 'Baseline',
      'Sensori e dati': 'Sensors and data',
      'Evidence hub': 'Evidence hub',
      'Report readiness': 'Report readiness',
      'Credito blockchain': 'Blockchain credit',
      'Exchange readiness': 'Exchange readiness',
      'Notifiche': 'Notifications',
      'Farmer': 'Farmer',
      'Superficie': 'Area',
      'Sensori attivi': 'Active sensors',
      'Readiness': 'Readiness',
      'Stato': 'Status',
      'Fonte': 'Source',
      'Progetto': 'Project',
      'Progetti': 'Projects',
      'Report': 'Reports',
      'Impatto': 'Impact',
      'Blockchain': 'Blockchain',
      'Impostazioni': 'Settings',
      'Salvato': 'Saved',
      'Indietro': 'Back',
      'Avanti': 'Next',
      'Scarica': 'Download',
      'Da leggere': 'To read',
      'Completato': 'Completed',
      'In corso': 'In progress',
      'Da fare': 'To do',
      'MRV first, blockchain from day one.': 'MRV first, blockchain from day one.',
      'Accesso demo role-based per farmer, team operativo A-Grid e stakeholder. Il login e simulato: seleziona un ruolo e apri il portale corrispondente.': 'Role-based demo access for farmers, A-Grid operations team and stakeholders. Login is simulated: select a role and open the related portal.',
      'Ogni ruolo mostra solo il livello di dati adatto: wizard cliente, command center interno o dashboard portfolio read-only.': 'Each role shows the right data level: client wizard, internal command center or read-only portfolio dashboard.',
      'Ruolo demo': 'Demo role',
      'Vista Interna A-Grid': 'A-Grid internal view',
      'Vista Stakeholder': 'Stakeholder view',
      'Wizard guidato a 6 step per il progetto Vigna Trebotti, con baseline, sensori, evidenze e readiness.': 'Six-step guided wizard for the Vigna Trebotti project, with baseline, sensors, evidence and readiness.',
      'Command center operativo per tutti i progetti, data hub, evidenze, blockchain e anagrafica farmer.': 'Operations command center for all projects, data hub, evidence, blockchain and farmer registry.',
      'Dashboard portfolio read-only con KPI aggregati, impatto, progetti e report validati.': 'Read-only portfolio dashboard with aggregate KPIs, impact, projects and validated reports.'
    },
    pt: {
      'Cambia ruolo': 'Trocar função',
      'Dashboard farmer': 'Dashboard do agricultor',
      'Dashboard': 'Dashboard',
      'Guida': 'Guia',
      'Guida operativa': 'Guia operacional',
      'Calcolatore crediti': 'Calculadora de créditos',
      'Onboarding': 'Onboarding',
      'Mappa IoT': 'Mapa IoT',
      'Mappa': 'Mapa',
      'Contratti': 'Contratos',
      'Wallet': 'Carteira',
      'CRCF': 'CRCF',
      'PDF': 'PDF',
      'Avanza step': 'Próximo passo',
      'Seleziona vista': 'Selecionar vista',
      'Entra nel portale': 'Entrar no portal',
      'Vista Farmer / Cliente': 'Vista Agricultor / Cliente',
      'Registra un nuovo progetto MRV': 'Registrar um novo projeto MRV',
      'Calcola i tuoi crediti carbonio': 'Calcule seus créditos de carbono',
      'Chi sei?': 'Quem é você?',
      'Compliance CRCF': 'Conformidade CRCF',
      'Guide e documenti': 'Guias e documentos',
      'Mappa IoT live + dMRV satellite': 'Mapa IoT ao vivo + dMRV por satélite',
      'Bilancio carbonio — Vigna Trebotti': 'Balanço de carbono — Vigna Trebotti',
      'Contratti self-service': 'Contratos self-service',
      'Asset Wallet': 'Carteira de ativos',
      'Co-benefits dashboard': 'Dashboard de co-benefícios',
      'dMRV automatizzato Sentinel-2': 'dMRV Sentinel-2 automatizado',
      'Supply chain carbon farming': 'Carbon farming na cadeia de suprimentos',
      'Partnership data layer': 'Camada de dados de parcerias',
      'Identità progetto': 'Identidade do projeto',
      'Baseline': 'Linha de base',
      'Sensori e dati': 'Sensores e dados',
      'Evidence hub': 'Hub de evidências',
      'Report readiness': 'Prontidão do relatório',
      'Credito blockchain': 'Crédito blockchain',
      'Exchange readiness': 'Prontidão para exchange',
      'Notifiche': 'Notificações',
      'Farmer': 'Agricultor',
      'Superficie': 'Área',
      'Sensori attivi': 'Sensores ativos',
      'Readiness': 'Prontidão',
      'Stato': 'Status',
      'Fonte': 'Fonte',
      'Progetto': 'Projeto',
      'Progetti': 'Projetos',
      'Report': 'Relatórios',
      'Impatto': 'Impacto',
      'Blockchain': 'Blockchain',
      'Impostazioni': 'Configurações',
      'Salvato': 'Salvo',
      'Indietro': 'Voltar',
      'Avanti': 'Avançar',
      'Scarica': 'Baixar',
      'Da leggere': 'Para ler',
      'Completato': 'Concluído',
      'In corso': 'Em andamento',
      'Da fare': 'A fazer',
      'MRV first, blockchain from day one.': 'MRV primeiro, blockchain desde o primeiro dia.',
      'Accesso demo role-based per farmer, team operativo A-Grid e stakeholder. Il login e simulato: seleziona un ruolo e apri il portale corrispondente.': 'Acesso demo baseado em função para agricultores, equipe operacional A-Grid e stakeholders. O login é simulado: selecione uma função e abra o portal correspondente.',
      'Ogni ruolo mostra solo il livello di dati adatto: wizard cliente, command center interno o dashboard portfolio read-only.': 'Cada função mostra apenas o nível de dados adequado: wizard do cliente, centro de comando interno ou dashboard de portfólio somente leitura.',
      'Ruolo demo': 'Função demo',
      'Vista Interna A-Grid': 'Vista interna A-Grid',
      'Vista Stakeholder': 'Vista de stakeholder',
      'Wizard guidato a 6 step per il progetto Vigna Trebotti, con baseline, sensori, evidenze e readiness.': 'Wizard guiado em 6 passos para o projeto Vigna Trebotti, com linha de base, sensores, evidências e prontidão.',
      'Command center operativo per tutti i progetti, data hub, evidenze, blockchain e anagrafica farmer.': 'Centro de comando operacional para todos os projetos, data hub, evidências, blockchain e cadastro de agricultores.',
      'Dashboard portfolio read-only con KPI aggregati, impatto, progetti e report validati.': 'Dashboard de portfólio somente leitura com KPIs agregados, impacto, projetos e relatórios validados.'
    },
    ar: {
      'Cambia ruolo': 'تغيير الدور',
      'Dashboard farmer': 'لوحة المزارع',
      'Dashboard': 'لوحة التحكم',
      'Guida': 'الدليل',
      'Guida operativa': 'الدليل التشغيلي',
      'Calcolatore crediti': 'حاسبة الأرصدة',
      'Onboarding': 'بدء الاستخدام',
      'Mappa IoT': 'خريطة إنترنت الأشياء',
      'Mappa': 'الخريطة',
      'Contratti': 'العقود',
      'Wallet': 'المحفظة',
      'CRCF': 'CRCF',
      'PDF': 'PDF',
      'Avanza step': 'الخطوة التالية',
      'Seleziona vista': 'اختر الواجهة',
      'Entra nel portale': 'ادخل إلى البوابة',
      'Vista Farmer / Cliente': 'واجهة المزارع / العميل',
      'Registra un nuovo progetto MRV': 'تسجيل مشروع MRV جديد',
      'Calcola i tuoi crediti carbonio': 'احسب أرصدة الكربون الخاصة بك',
      'Chi sei?': 'من أنت؟',
      'Compliance CRCF': 'امتثال CRCF',
      'Guide e documenti': 'الأدلة والمستندات',
      'Mappa IoT live + dMRV satellite': 'خريطة IoT مباشرة + dMRV بالأقمار الصناعية',
      'Bilancio carbonio — Vigna Trebotti': 'ميزان الكربون — Vigna Trebotti',
      'Contratti self-service': 'عقود الخدمة الذاتية',
      'Asset Wallet': 'محفظة الأصول',
      'Co-benefits dashboard': 'لوحة المنافع المشتركة',
      'dMRV automatizzato Sentinel-2': 'dMRV آلي Sentinel-2',
      'Supply chain carbon farming': 'زراعة الكربون في سلسلة التوريد',
      'Partnership data layer': 'طبقة بيانات الشراكات',
      'Identità progetto': 'هوية المشروع',
      'Baseline': 'خط الأساس',
      'Sensori e dati': 'المستشعرات والبيانات',
      'Evidence hub': 'مركز الأدلة',
      'Report readiness': 'جاهزية التقرير',
      'Credito blockchain': 'رصيد بلوكتشين',
      'Exchange readiness': 'جاهزية المنصة',
      'Notifiche': 'الإشعارات',
      'Farmer': 'المزارع',
      'Superficie': 'المساحة',
      'Sensori attivi': 'المستشعرات النشطة',
      'Readiness': 'الجاهزية',
      'Stato': 'الحالة',
      'Fonte': 'المصدر',
      'Progetto': 'المشروع',
      'Progetti': 'المشاريع',
      'Report': 'التقارير',
      'Impatto': 'الأثر',
      'Blockchain': 'بلوكتشين',
      'Impostazioni': 'الإعدادات',
      'Salvato': 'تم الحفظ',
      'Indietro': 'رجوع',
      'Avanti': 'التالي',
      'Scarica': 'تنزيل',
      'Da leggere': 'للقراءة',
      'Completato': 'مكتمل',
      'In corso': 'قيد التنفيذ',
      'Da fare': 'مطلوب',
      'MRV first, blockchain from day one.': 'MRV أولا، والبلوكتشين منذ اليوم الأول.',
      'Accesso demo role-based per farmer, team operativo A-Grid e stakeholder. Il login e simulato: seleziona un ruolo e apri il portale corrispondente.': 'وصول تجريبي حسب الدور للمزارعين وفريق تشغيل A-Grid وأصحاب المصلحة. تسجيل الدخول محاكى: اختر الدور وافتح البوابة المناسبة.',
      'Ogni ruolo mostra solo il livello di dati adatto: wizard cliente, command center interno o dashboard portfolio read-only.': 'يعرض كل دور مستوى البيانات المناسب فقط: معالج العميل، مركز التحكم الداخلي، أو لوحة محفظة للقراءة فقط.',
      'Ruolo demo': 'دور تجريبي',
      'Vista Interna A-Grid': 'واجهة A-Grid الداخلية',
      'Vista Stakeholder': 'واجهة أصحاب المصلحة',
      'Wizard guidato a 6 step per il progetto Vigna Trebotti, con baseline, sensori, evidenze e readiness.': 'معالج من 6 خطوات لمشروع Vigna Trebotti، مع خط الأساس والمستشعرات والأدلة والجاهزية.',
      'Command center operativo per tutti i progetti, data hub, evidenze, blockchain e anagrafica farmer.': 'مركز عمليات لكل المشاريع، مع مركز بيانات وأدلة وبلوكتشين وسجل للمزارعين.',
      'Dashboard portfolio read-only con KPI aggregati, impatto, progetti e report validati.': 'لوحة محفظة للقراءة فقط تضم مؤشرات مجمعة وأثر ومشاريع وتقارير معتمدة.'
    }
  };

  const baseTexts = new WeakMap();
  const skipTags = new Set(['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT', 'SELECT', 'OPTION', 'CODE', 'PRE']);

  function walkTextNodes(root, cb) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (node.parentElement && skipTags.has(node.parentElement.tagName)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(cb);
  }

  function translate(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body && document.body.classList.toggle('rtl', lang === 'ar');
    const dict = dictionaries[lang] || {};
    walkTextNodes(document.body, (node) => {
      if (!baseTexts.has(node)) baseTexts.set(node, node.nodeValue);
      const original = baseTexts.get(node);
      const trimmed = original.trim();
      node.nodeValue = original.replace(trimmed, dict[trimmed] || trimmed);
    });
  }

  window.AGridI18n = {
    setLang(lang) {
      localStorage.setItem('agridLang', lang);
      translate(lang);
      document.dispatchEvent(new CustomEvent('agrid:lang', { detail: { lang } }));
    },
    getLang() {
      return localStorage.getItem('agridLang') || 'it';
    },
    translate
  };

  document.addEventListener('DOMContentLoaded', () => translate(window.AGridI18n.getLang()));
})();
