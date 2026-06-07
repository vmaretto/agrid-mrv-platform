(function () {
  const languages = {
    it: { dir: 'ltr', name: 'Italiano' },
    en: { dir: 'ltr', name: 'English' },
    pt: { dir: 'ltr', name: 'Português' },
    ar: { dir: 'rtl', name: 'العربية' }
  };

  const rows = [
    ['A-Grid MRV Platform — Login', 'A-Grid MRV Platform — Login', 'A-Grid MRV Platform — Login', 'منصة A-Grid MRV — الدخول'],
    ['A-Grid MRV — Farmer Portal', 'A-Grid MRV — Farmer Portal', 'A-Grid MRV — Portal do produtor', 'A-Grid MRV — بوابة المزارع'],
    ['Farmer MRV Portal', 'Farmer MRV Portal', 'Portal MRV do produtor', 'بوابة MRV للمزارع'],
    ['Carbon Farming Pilot', 'Carbon Farming Pilot', 'Piloto de Carbon Farming', 'مشروع تجريبي لزراعة الكربون'],
    ['CRCF target', 'CRCF target', 'Meta CRCF', 'هدف CRCF'],
    ['A-Grid MRV — Admin Command Center', 'A-Grid MRV — Admin Command Center', 'A-Grid MRV — Centro de comando admin', 'A-Grid MRV — مركز تحكم الإدارة'],
    ['A-Grid MRV — Stakeholder Portfolio', 'A-Grid MRV — Stakeholder Portfolio', 'A-Grid MRV — Portfólio de stakeholders', 'A-Grid MRV — محفظة أصحاب المصلحة'],
    ['MRV first, blockchain from day one.', 'MRV first, blockchain from day one.', 'MRV primeiro, blockchain desde o primeiro dia.', 'MRV أولا، والبلوكتشين منذ اليوم الأول.'],
    ['Accesso demo role-based per farmer, team operativo A-Grid e stakeholder. Il login e simulato: seleziona un ruolo e apri il portale corrispondente.', 'Role-based demo access for farmers, the A-Grid operations team and stakeholders. Login is simulated: select a role and open the related portal.', 'Acesso demo baseado em função para produtores, equipe operacional A-Grid e stakeholders. O login é simulado: selecione uma função e abra o portal correspondente.', 'وصول تجريبي حسب الدور للمزارعين وفريق تشغيل A-Grid وأصحاب المصلحة. تسجيل الدخول محاكى: اختر الدور وافتح البوابة المناسبة.'],
    ['Seleziona vista', 'Select view', 'Selecionar vista', 'اختر الواجهة'],
    ['Ogni ruolo mostra solo il livello di dati adatto: wizard cliente, command center interno o dashboard portfolio read-only.', 'Each role shows the right data level: client wizard, internal command center or read-only portfolio dashboard.', 'Cada função mostra apenas o nível de dados adequado: wizard do cliente, centro de comando interno ou dashboard de portfólio somente leitura.', 'يعرض كل دور مستوى البيانات المناسب فقط: معالج العميل، مركز التحكم الداخلي، أو لوحة محفظة للقراءة فقط.'],
    ['Ruolo demo', 'Demo role', 'Função demo', 'دور تجريبي'],
    ['Farmer / Cliente', 'Farmer / Client', 'Produtor / Cliente', 'المزارع / العميل'],
    ['Team A-Grid', 'A-Grid team', 'Equipe A-Grid', 'فريق A-Grid'],
    ['Stakeholder / Investor', 'Stakeholder / Investor', 'Stakeholder / Investidor', 'صاحب مصلحة / مستثمر'],
    ['Entra nel portale', 'Enter portal', 'Entrar no portal', 'الدخول إلى البوابة'],
    ['Guida operativa', 'Operational guide', 'Guia operacional', 'الدليل التشغيلي'],
    ['Guida', 'Guide', 'Guia', 'الدليل'],
    ['Mappa', 'Map', 'Mapa', 'الخريطة'],
    ['Calcolatore crediti', 'Credit calculator', 'Calculadora de créditos', 'حاسبة الأرصدة'],
    ['Onboarding', 'Onboarding', 'Onboarding', 'بدء الاستخدام'],
    ['Mappa IoT', 'IoT map', 'Mapa IoT', 'خريطة إنترنت الأشياء'],
    ['Cambia ruolo', 'Switch role', 'Trocar função', 'تغيير الدور'],
    ['Dashboard', 'Dashboard', 'Painel', 'لوحة التحكم'],
    ['Dashboard farmer', 'Farmer dashboard', 'Dashboard do produtor', 'لوحة المزارع'],
    ['Indietro', 'Back', 'Voltar', 'رجوع'],
    ['Avanti', 'Next', 'Avançar', 'التالي'],
    ['Avanza step', 'Next step', 'Próximo passo', 'الخطوة التالية'],
    ['Scarica', 'Download', 'Baixar', 'تنزيل'],
    ['Scarica PDF', 'Download PDF', 'Baixar PDF', 'تنزيل PDF'],
    ['Salvato', 'Saved', 'Salvo', 'تم الحفظ'],
    ['Apri step', 'Open step', 'Abrir passo', 'افتح الخطوة'],
    ['Apri report', 'Open report', 'Abrir relatório', 'افتح التقرير'],
    ['Apri preview report', 'Open report preview', 'Abrir prévia do relatório', 'افتح معاينة التقرير'],
    ['Registra progetto', 'Register project', 'Registrar projeto', 'تسجيل المشروع'],
    ['Registra un nuovo progetto MRV', 'Register a new MRV project', 'Registrar um novo projeto MRV', 'تسجيل مشروع MRV جديد'],
    ['Inizia ora', 'Start now', 'Começar agora', 'ابدأ الآن'],
    ['Leggi guida', 'Read guide', 'Ler guia', 'اقرأ الدليل'],
    ['Invia', 'Send', 'Enviar', 'إرسال'],
    ['Invita', 'Invite', 'Convidar', 'دعوة'],
    ['Genera', 'Generate', 'Gerar', 'إنشاء'],
    ['Prepara', 'Prepare', 'Preparar', 'تحضير'],
    ['Esporta', 'Export', 'Exportar', 'تصدير'],
    ['Firma', 'Sign', 'Assinar', 'توقيع'],
    ['Adotta pratica', 'Adopt practice', 'Adotar prática', 'اعتماد الممارسة'],
    ['Trigger dMRV', 'Trigger dMRV', 'Acionar dMRV', 'تشغيل dMRV'],
    ['Vista Farmer / Cliente', 'Farmer / Client view', 'Vista Produtor / Cliente', 'واجهة المزارع / العميل'],
    ['Vista Interna A-Grid', 'A-Grid internal view', 'Vista interna A-Grid', 'واجهة A-Grid الداخلية'],
    ['Vista Stakeholder', 'Stakeholder view', 'Vista de stakeholder', 'واجهة أصحاب المصلحة'],
    ['Vigna Trebotti — Carbon Farming Pilot', 'Vigna Trebotti — Carbon Farming Pilot', 'Vigna Trebotti — Piloto de Carbon Farming', 'Vigna Trebotti — مشروع تجريبي لزراعة الكربون'],
    ['Wizard guidato per completare identità progetto, baseline, dati sensori, evidenze, report, credito e readiness verso listing.', 'Guided wizard to complete project identity, baseline, sensor data, evidence, reports, credit and readiness for listing.', 'Wizard guiado para completar identidade do projeto, linha de base, dados de sensores, evidências, relatórios, crédito e prontidão para listagem.', 'معالج موجه لإكمال هوية المشروع وخط الأساس وبيانات المستشعرات والأدلة والتقارير والرصيد والجاهزية للإدراج.'],
    ['Identità progetto', 'Project identity', 'Identidade do projeto', 'هوية المشروع'],
    ['Baseline', 'Baseline', 'Linha de base', 'خط الأساس'],
    ['Sensori e dati', 'Sensors and data', 'Sensores e dados', 'المستشعرات والبيانات'],
    ['Evidence hub', 'Evidence hub', 'Hub de evidências', 'مركز الأدلة'],
    ['Report readiness', 'Report readiness', 'Prontidão do relatório', 'جاهزية التقرير'],
    ['Credito blockchain', 'Blockchain credit', 'Crédito blockchain', 'رصيد البلوكتشين'],
    ['Exchange readiness', 'Exchange readiness', 'Prontidão para exchange', 'جاهزية المنصة'],
    ['Step 1 — Identità progetto', 'Step 1 — Project identity', 'Passo 1 — Identidade do projeto', 'الخطوة 1 — هوية المشروع'],
    ['Step 2 — Baseline e addizionalità', 'Step 2 — Baseline and additionality', 'Passo 2 — Linha de base e adicionalidade', 'الخطوة 2 — خط الأساس والإضافية'],
    ['Step 3 — Sensori e acquisizione dati', 'Step 3 — Sensors and data acquisition', 'Passo 3 — Sensores e aquisição de dados', 'الخطوة 3 — المستشعرات وجمع البيانات'],
    ['Step 4 — Monitoring e evidence hub', 'Step 4 — Monitoring and evidence hub', 'Passo 4 — Monitoramento e hub de evidências', 'الخطوة 4 — المراقبة ومركز الأدلة'],
    ['Step 5 — Report e standard readiness', 'Step 5 — Report and standard readiness', 'Passo 5 — Relatório e prontidão para padrões', 'الخطوة 5 — التقرير وجاهزية المعيار'],
    ['Step 6 — Credito e blockchain', 'Step 6 — Credit and blockchain', 'Passo 6 — Crédito e blockchain', 'الخطوة 6 — الرصيد والبلوكتشين'],
    ['Step 7 — Exchange readiness', 'Step 7 — Exchange readiness', 'Passo 7 — Prontidão para exchange', 'الخطوة 7 — جاهزية المنصة'],
    ['Dati iniziali, area progetto, protocollo target e Project Anchor.', 'Initial data, project area, target protocol and Project Anchor.', 'Dados iniciais, área do projeto, protocolo alvo e Project Anchor.', 'البيانات الأولية ومنطقة المشروع والبروتوكول المستهدف ومرساة المشروع.'],
    ['Storico pratiche agricole, fonti aziendali e scenario BAU.', 'History of agricultural practices, farm sources and BAU scenario.', 'Histórico de práticas agrícolas, fontes da fazenda e cenário BAU.', 'تاريخ الممارسات الزراعية ومصادر المزرعة وسيناريو الأعمال المعتادة.'],
    ['Sensori di prima mano A-Grid, dati raw e fonti terze.', 'First-party A-Grid sensors, raw data and third-party sources.', 'Sensores próprios A-Grid, dados brutos e fontes terceiras.', 'مستشعرات A-Grid المباشرة والبيانات الخام ومصادر الطرف الثالث.'],
    ['Timeline evidenze con hash, timestamp, stato revisione e azioni di integrazione.', 'Evidence timeline with hash, timestamp, review status and integration actions.', 'Linha do tempo de evidências com hash, timestamp, status de revisão e ações de integração.', 'خط زمني للأدلة مع الهاش والطابع الزمني وحالة المراجعة وإجراءات التكامل.'],
    ['Dashboard di controllo: ogni gap rimanda allo step da completare.', 'Control dashboard: each gap links back to the step to complete.', 'Dashboard de controle: cada lacuna remete ao passo a concluir.', 'لوحة تحكم: كل فجوة تعيدك إلى الخطوة المطلوب إكمالها.'],
    ['Preparazione credito dopo readiness MRV >= 80%. Exchange separato nello Step 7.', 'Credit preparation after MRV readiness >= 80%. Exchange is separated in Step 7.', 'Preparação do crédito após prontidão MRV >= 80%. Exchange separado no Passo 7.', 'تحضير الرصيد بعد جاهزية MRV بنسبة 80% أو أكثر. المنصة منفصلة في الخطوة 7.'],
    ['Checklist separata per capire se un credito validato può essere listato o scambiato.', 'Separate checklist to understand whether a validated credit can be listed or traded.', 'Checklist separada para entender se um crédito validado pode ser listado ou negociado.', 'قائمة تحقق منفصلة لمعرفة ما إذا كان الرصيد المعتمد قابلا للإدراج أو التداول.'],
    ['Project Anchor', 'Project Anchor', 'Project Anchor', 'مرساة المشروع'],
    ['Anchor creato', 'Anchor created', 'Anchor criado', 'تم إنشاء المرساة'],
    ['Project Anchor creato e documenti catastali presenti.', 'Project Anchor created and cadastral documents present.', 'Project Anchor criado e documentos cadastrais presentes.', 'تم إنشاء مرساة المشروع وتتوفر الوثائق المساحية.'],
    ['Hash e timestamp che dimostrano che il progetto esisteva in quella data con quei dati base.', 'Hash and timestamp proving that the project existed on that date with those base data.', 'Hash e timestamp que comprovam que o projeto existia naquela data com esses dados base.', 'هاش وطابع زمني يثبتان أن المشروع كان موجودا في ذلك التاريخ مع تلك البيانات الأساسية.'],
    ['Dati principali', 'Main data', 'Dados principais', 'البيانات الرئيسية'],
    ['Nome progetto', 'Project name', 'Nome do projeto', 'اسم المشروع'],
    ['Ubicazione', 'Location', 'Localização', 'الموقع'],
    ['Tipo coltura', 'Crop type', 'Tipo de cultura', 'نوع المحصول'],
    ['Superficie', 'Area', 'Área', 'المساحة'],
    ['Protocollo target', 'Target protocol', 'Protocolo alvo', 'البروتوكول المستهدف'],
    ['Documenti catastali', 'Cadastral documents', 'Documentos cadastrais', 'الوثائق المساحية'],
    ['Area progetto', 'Project area', 'Área do projeto', 'منطقة المشروع'],
    ['Farmer', 'Farmer', 'Produtor', 'المزارع'],
    ['Sensori attivi', 'Active sensors', 'Sensores ativos', 'المستشعرات النشطة'],
    ['Readiness', 'Readiness', 'Prontidão', 'الجاهزية'],
    ['Notifiche', 'Notifications', 'Notificações', 'الإشعارات'],
    ['Hai 2 evidenze da caricare.', 'You have 2 evidence items to upload.', 'Você tem 2 evidências para carregar.', 'لديك عنصران من الأدلة للتحميل.'],
    ['Baseline incompleta: mancano dati suolo SOC 2023.', 'Incomplete baseline: 2023 SOC soil data are missing.', 'Linha de base incompleta: faltam dados de solo SOC 2023.', 'خط الأساس غير مكتمل: بيانات SOC للتربة لعام 2023 مفقودة.'],
    ['Checklist addizionalità', 'Additionality checklist', 'Checklist de adicionalidade', 'قائمة تحقق الإضافية'],
    ['Campi completati: 7/10.', 'Fields completed: 7/10.', 'Campos concluídos: 7/10.', 'الحقول المكتملة: 7/10.'],
    ['Dati suolo esistenti', 'Existing soil data', 'Dados de solo existentes', 'بيانات التربة الحالية'],
    ['Quaderno di campagna', 'Field notebook', 'Caderno de campo', 'دفتر الحقل'],
    ['Connessione mock xFarm attiva.', 'Mock xFarm connection active.', 'Conexão mock xFarm ativa.', 'اتصال xFarm التجريبي نشط.'],
    ['Dati live mock', 'Live mock data', 'Dados live mock', 'بيانات مباشرة تجريبية'],
    ['IoT + satellite + meteo. Il satellite completa i sensori, non li sostituisce.', 'IoT + satellite + weather. Satellite complements sensors; it does not replace them.', 'IoT + satélite + meteorologia. O satélite complementa os sensores, não os substitui.', 'إنترنت الأشياء + الأقمار الصناعية + الطقس. القمر الصناعي يكمل المستشعرات ولا يستبدلها.'],
    ['Calendario monitoraggio', 'Monitoring calendar', 'Calendário de monitoramento', 'تقويم المراقبة'],
    ['Carica nuova evidenza', 'Upload new evidence', 'Carregar nova evidência', 'تحميل دليل جديد'],
    ['Readiness protocollo', 'Protocol readiness', 'Prontidão do protocolo', 'جاهزية البروتوكول'],
    ['Stima crediti preliminare', 'Preliminary credit estimate', 'Estimativa preliminar de créditos', 'تقدير أولي للأرصدة'],
    ['Stato credito', 'Credit status', 'Status do crédito', 'حالة الرصيد'],
    ['Contratto blockchain', 'Blockchain contract', 'Contrato blockchain', 'عقد البلوكتشين'],
    ['Stato listing', 'Listing status', 'Status de listagem', 'حالة الإدراج'],
    ['Non exchange ready', 'Not exchange ready', 'Não pronto para exchange', 'غير جاهز للمنصة'],
    ['Risolvi gap report', 'Resolve report gaps', 'Resolver lacunas do relatório', 'حل فجوات التقرير'],
    ['Vai al credito', 'Go to credit', 'Ir para crédito', 'اذهب إلى الرصيد'],
    ['Guadagni trasparenti', 'Transparent earnings', 'Ganhos transparentes', 'أرباح شفافة'],
    ['Crediti verificati', 'Verified credits', 'Créditos verificados', 'أرصدة معتمدة'],
    ['Prezzo mercato', 'Market price', 'Preço de mercado', 'سعر السوق'],
    ['A te (70%)', 'To you (70%)', 'Para você (70%)', 'لك (70%)'],
    ['Piattaforma (15%)', 'Platform (15%)', 'Plataforma (15%)', 'المنصة (15%)'],
    ['Buffer pool (10%)', 'Buffer pool (10%)', 'Pool de reserva (10%)', 'مجمع الاحتياطي (10%)'],
    ['Verifica (5%)', 'Verification (5%)', 'Verificação (5%)', 'التحقق (5%)'],
    ['Co-benefits', 'Co-benefits', 'Co-benefícios', 'المنافع المشتركة'],
    ['Carbonio', 'Carbon', 'Carbono', 'الكربون'],
    ['Acqua', 'Water', 'Água', 'المياه'],
    ['Biodiversità', 'Biodiversity', 'Biodiversidade', 'التنوع الحيوي'],
    ['Salute suolo', 'Soil health', 'Saúde do solo', 'صحة التربة'],
    ['What-if cover crop', 'What-if cover crop', 'What-if cover crop', 'ماذا لو: محصول تغطية'],
    ['dMRV satellite', 'Satellite dMRV', 'dMRV por satélite', 'dMRV بالأقمار الصناعية'],
    ['Mappa IoT live + dMRV satellite', 'Live IoT map + satellite dMRV', 'Mapa IoT ao vivo + dMRV por satélite', 'خريطة IoT مباشرة + dMRV بالأقمار الصناعية'],
    ['Bilancio carbonio — Vigna Trebotti', 'Carbon balance — Vigna Trebotti', 'Balanço de carbono — Vigna Trebotti', 'ميزان الكربون — Vigna Trebotti'],
    ['Contratti', 'Contracts', 'Contratos', 'العقود'],
    ['Asset Wallet', 'Asset wallet', 'Carteira de ativos', 'محفظة الأصول'],
    ['Compliance CRCF', 'CRCF compliance', 'Conformidade CRCF', 'امتثال CRCF'],
    ['Guide e documenti', 'Guides and documents', 'Guias e documentos', 'الأدلة والمستندات'],
    ['Supply chain carbon farming', 'Supply chain carbon farming', 'Carbon farming na cadeia de suprimentos', 'زراعة الكربون في سلسلة التوريد'],
    ['Partnership data layer', 'Partnership data layer', 'Camada de dados de parcerias', 'طبقة بيانات الشراكات'],
    ['Calcola i tuoi crediti carbonio', 'Calculate your carbon credits', 'Calcule seus créditos de carbono', 'احسب أرصدة الكربون الخاصة بك'],
    ['Chi sei?', 'Who are you?', 'Quem é você?', 'من أنت؟'],
    ['Scegli come entrare nella rete A-Grid', 'Choose how to join the A-Grid network', 'Escolha como entrar na rede A-Grid', 'اختر كيفية الانضمام إلى شبكة A-Grid'],
    ['Agricoltore', 'Farmer', 'Agricultor', 'مزارع'],
    ['Partner tecnico', 'Technical partner', 'Parceiro técnico', 'شريك تقني'],
    ['Acquirente crediti', 'Credit buyer', 'Comprador de créditos', 'مشتري الأرصدة'],
    ['Ente pubblico', 'Public body', 'Entidade pública', 'جهة عامة'],
    ['Inizia', 'Start', 'Começar', 'ابدأ'],
    ['Diventa partner', 'Become a partner', 'Tornar-se parceiro', 'كن شريكا'],
    ['Esplora mercato', 'Explore market', 'Explorar mercado', 'استكشف السوق'],
    ['Richiedi accesso', 'Request access', 'Solicitar acesso', 'اطلب الوصول'],
    ['Guida utente', 'User guide', 'Guia do usuário', 'دليل المستخدم'],
    ['Come usare A-Grid MRV passo dopo passo', 'How to use A-Grid MRV step by step', 'Como usar A-Grid MRV passo a passo', 'كيفية استخدام A-Grid MRV خطوة بخطوة'],
    ['Logica del processo', 'Process logic', 'Lógica do processo', 'منطق العملية'],
    ['Glossario rapido', 'Quick glossary', 'Glossário rápido', 'مسرد سريع'],
    ['Command center operativo per MRV, dati e audit trail', 'Operational command center for MRV, data and audit trail', 'Centro de comando operacional para MRV, dados e trilha de auditoria', 'مركز تحكم تشغيلي لـ MRV والبيانات ومسار التدقيق'],
    ['Workflow integrato', 'Integrated workflow', 'Workflow integrado', 'سير عمل متكامل'],
    ['Mappa appezzamenti', 'Plot map', 'Mapa de parcelas', 'خريطة القطع'],
    ['Nuovo progetto', 'New project', 'Novo projeto', 'مشروع جديد'],
    ['Progetti', 'Projects', 'Projetos', 'المشاريع'],
    ['Data hub', 'Data hub', 'Data hub', 'مركز البيانات'],
    ['Qualità dati', 'Data quality', 'Qualidade dos dados', 'جودة البيانات'],
    ['Evidence hub globale', 'Global evidence hub', 'Hub global de evidências', 'مركز الأدلة العالمي'],
    ['Standard readiness', 'Standard readiness', 'Prontidão para padrões', 'جاهزية المعايير'],
    ['Blockchain / pOsti', 'Blockchain / pOsti', 'Blockchain / pOsti', 'بلوكتشين / pOsti'],
    ['Clienti/Farmer', 'Clients/Farmers', 'Clientes/Produtores', 'العملاء/المزارعون'],
    ['Cliente', 'Client', 'Cliente', 'العميل'],
    ['Portfolio MRV read-only per investitori e partner', 'Read-only MRV portfolio for investors and partners', 'Portfólio MRV somente leitura para investidores e parceiros', 'محفظة MRV للقراءة فقط للمستثمرين والشركاء'],
    ['Portfolio', 'Portfolio', 'Portfólio', 'محفظة'],
    ['Per standard', 'By standard', 'Por padrão', 'حسب المعيار'],
    ['Impatto', 'Impact', 'Impacto', 'الأثر'],
    ['Impostazioni', 'Settings', 'Configurações', 'الإعدادات'],
    ['Report', 'Reports', 'Relatórios', 'التقارير'],
    ['Stato', 'Status', 'Status', 'الحالة'],
    ['Fonte', 'Source', 'Fonte', 'المصدر'],
    ['Tipo', 'Type', 'Tipo', 'النوع'],
    ['Ultimo dato', 'Last data point', 'Último dado', 'آخر بيان'],
    ['Owner', 'Owner', 'Proprietário', 'المالك'],
    ['Azione', 'Action', 'Ação', 'الإجراء'],
    ['Valore', 'Value', 'Valor', 'القيمة'],
    ['Elemento', 'Item', 'Item', 'العنصر'],
    ['Domanda', 'Question', 'Pergunta', 'السؤال'],
    ['Risultato live', 'Live result', 'Resultado ao vivo', 'نتيجة مباشرة'],
    ['Dati azienda', 'Farm data', 'Dados da fazenda', 'بيانات المزرعة'],
    ['Pratiche attuali', 'Current practices', 'Práticas atuais', 'الممارسات الحالية'],
    ['Pratiche future', 'Future practices', 'Práticas futuras', 'الممارسات المستقبلية'],
    ['Come viene calcolato', 'How it is calculated', 'Como é calculado', 'كيف يتم الحساب'],
    ['Summary', 'Summary', 'Resumo', 'ملخص'],
    ['Riepilogo live', 'Live summary', 'Resumo ao vivo', 'ملخص مباشر'],
    ['Accesso delegato al progetto', 'Delegated project access', 'Acesso delegado ao projeto', 'وصول مفوض إلى المشروع'],
    ['Invita utente', 'Invite user', 'Convidar usuário', 'دعوة مستخدم'],
    ['Accessi attivi', 'Active accesses', 'Acessos ativos', 'الوصولات النشطة'],
    ['Cartelle condivise', 'Shared folders', 'Pastas compartilhadas', 'المجلدات المشتركة'],
    ['Contratti self-service', 'Self-service contracts', 'Contratos self-service', 'عقود الخدمة الذاتية'],
    ['Contratto MRV', 'MRV contract', 'Contrato MRV', 'عقد MRV'],
    ['Contratto Broker', 'Broker contract', 'Contrato de broker', 'عقد الوسيط'],
    ['Vendita diretta', 'Direct sale', 'Venda direta', 'بيع مباشر'],
    ['Emissioni (-)', 'Emissions (-)', 'Emissões (-)', 'الانبعاثات (-)'],
    ['Sequestro (+)', 'Sequestration (+)', 'Sequestro (+)', 'العزل (+)'],
    ['Bilancio netto', 'Net balance', 'Balanço líquido', 'الرصيد الصافي'],
    ['Voce emissione', 'Emission item', 'Item de emissão', 'بند انبعاث'],
    ['Voce sequestro', 'Sequestration item', 'Item de sequestro', 'بند عزل'],
    ['Radar baseline vs attuale', 'Baseline vs current radar', 'Radar linha de base vs atual', 'رادار خط الأساس مقابل الحالي'],
    ['What-if', 'What-if', 'What-if', 'ماذا لو'],
    ['I 4 approcci A-Grid', 'The 4 A-Grid approaches', 'As 4 abordagens A-Grid', 'مناهج A-Grid الأربعة'],
    ['Job mock', 'Mock job', 'Job mock', 'مهمة تجريبية'],
    ['Codice organizzazione', 'Organization code', 'Código da organização', 'رمز المؤسسة'],
    ['KPI enterprise', 'Enterprise KPIs', 'KPIs enterprise', 'مؤشرات المؤسسة'],
    ['Genera codice', 'Generate code', 'Gerar código', 'إنشاء رمز'],
    ['Wizard guidato a 6 step per il progetto Vigna Trebotti, con baseline, sensori, evidenze e readiness.', 'Six-step guided wizard for the Vigna Trebotti project, with baseline, sensors, evidence and readiness.', 'Wizard guiado em 6 passos para o projeto Vigna Trebotti, com linha de base, sensores, evidências e prontidão.', 'معالج موجه من 6 خطوات لمشروع Vigna Trebotti، مع خط الأساس والمستشعرات والأدلة والجاهزية.'],
    ['Command center operativo per tutti i progetti, data hub, evidenze, blockchain e anagrafica farmer.', 'Operations command center for all projects, data hub, evidence, blockchain and farmer registry.', 'Centro de comando operacional para todos os projetos, data hub, evidências, blockchain e cadastro de produtores.', 'مركز عمليات لكل المشاريع، مع مركز بيانات وأدلة وبلوكتشين وسجل للمزارعين.'],
    ['Dashboard portfolio read-only con KPI aggregati, impatto, progetti e report validati.', 'Read-only portfolio dashboard with aggregate KPIs, impact, projects and validated reports.', 'Dashboard de portfólio somente leitura com KPIs agregados, impacto, projetos e relatórios validados.', 'لوحة محفظة للقراءة فقط تضم مؤشرات مجمعة وأثر ومشاريع وتقارير معتمدة.'],
    ['Demo routing', 'Demo routing', 'Roteamento demo', 'توجيه تجريبي'],
    ['Farmer → /farmer/', 'Farmer → /farmer/', 'Produtor → /farmer/', 'المزارع → /farmer/'],
    ['Admin → /admin/', 'Admin → /admin/', 'Admin → /admin/', 'الإدارة → /admin/'],
    ['Stakeholder → /stakeholder/', 'Stakeholder → /stakeholder/', 'Stakeholder → /stakeholder/', 'صاحب المصلحة → /stakeholder/'],
    ['Workflow progetto', 'Project workflow', 'Workflow do projeto', 'سير عمل المشروع'],
    ['Scenario BAU', 'BAU scenario', 'Cenário BAU', 'سيناريو الأعمال المعتادة'],
    ['Editor guidato per descrivere la gestione ordinaria senza progetto e validare addizionalità.', 'Guided editor to describe ordinary management without the project and validate additionality.', 'Editor guiado para descrever a gestão ordinária sem projeto e validar adicionalidade.', 'محرر موجه لوصف الإدارة العادية دون المشروع والتحقق من الإضافية.'],
    ['Mock interattivo', 'Interactive mock', 'Mock interativo', 'نموذج تفاعلي'],
    ['Hash quando il dato entra in audit trail', 'Hash when the data enters the audit trail', 'Hash quando o dado entra na trilha de auditoria', 'هاش عند دخول البيانات في مسار التدقيق'],
    ['Salva bozza', 'Save draft', 'Salvar rascunho', 'حفظ المسودة'],
    ['Importa dato', 'Import data', 'Importar dado', 'استيراد البيانات'],
    ['Genera hash', 'Generate hash', 'Gerar hash', 'إنشاء هاش'],
    ['Dettaglio evidenza', 'Evidence detail', 'Detalhe da evidência', 'تفاصيل الدليل'],
    ['Carica file', 'Upload file', 'Carregar arquivo', 'تحميل ملف'],
    ['Importa da xFarm', 'Import from xFarm', 'Importar do xFarm', 'استيراد من xFarm'],
    ['Collega sensore', 'Connect sensor', 'Conectar sensor', 'ربط المستشعر'],
    ['Gestione convenzionale del vigneto con lavorazione interfilare periodica, residui parzialmente rimossi e copertura vegetale non permanente.', 'Conventional vineyard management with periodic inter-row tillage, partially removed residues and non-permanent vegetation cover.', 'Gestão convencional do vinhedo com manejo periódico entre linhas, resíduos parcialmente removidos e cobertura vegetal não permanente.', 'إدارة تقليدية للكرم مع حراثة دورية بين الصفوف، وإزالة جزئية للمخلفات، وغطاء نباتي غير دائم.'],
    ['Placeholder API collegata', 'Connected API placeholder', 'Placeholder de API conectado', 'عنصر API تجريبي متصل'],
    ['visura_catastale_demo.pdf caricato', 'visura_catastale_demo.pdf uploaded', 'visura_catastale_demo.pdf carregado', 'تم تحميل visura_catastale_demo.pdf'],
    ['Parziale', 'Partial', 'Parcial', 'جزئي'],
    ['Non ready', 'Not ready', 'Não pronto', 'غير جاهز'],
    ['Active installation', 'Active installation', 'Instalação ativa', 'تركيب نشط'],
    ['Anchor created', 'Anchor created', 'Anchor criado', 'تم إنشاء المرساة'],
    ['Blocked', 'Blocked', 'Bloqueado', 'محجوب'],
    ['In preparation', 'In preparation', 'Em preparação', 'قيد التحضير'],
    ['Farmer / Client view', 'Farmer / Client view', 'Vista Produtor / Cliente', 'واجهة المزارع / العميل']
  ];

  const phraseRows = [
    ['completamento globale', 'global completion', 'conclusão global', 'إكمال عام'],
    ['azienda vitivinicola demo', 'demo wine farm', 'empresa vitivinícola demo', 'مزرعة كروم تجريبية'],
    ['azienda vitivinicola', 'wine farm', 'empresa vitivinícola', 'مزرعة كروم'],
    ['vigneto Sangiovese', 'Sangiovese vineyard', 'vinhedo Sangiovese', 'كرم سانجيوفيزي'],
    ['baseline parziale', 'partial baseline', 'linha de base parcial', 'خط أساس جزئي'],
    ['Installazione attiva', 'Active installation', 'Instalação ativa', 'تركيب نشط'],
    ['In preparazione', 'In preparation', 'Em preparação', 'قيد التحضير'],
    ['Bloccato', 'Blocked', 'Bloqueado', 'محجوب'],
    ['Validata', 'Validated', 'Validada', 'تم التحقق'],
    ['validata', 'validated', 'validada', 'تم التحقق'],
    ['Review', 'Review', 'Revisão', 'مراجعة'],
    ['review', 'review', 'revisão', 'مراجعة'],
    ['Da integrare', 'To integrate', 'A integrar', 'يحتاج تكاملا'],
    ['da integrare', 'to integrate', 'a integrar', 'يحتاج تكاملا'],
    ['Da leggere', 'To read', 'Para ler', 'للقراءة'],
    ['Completato', 'Completed', 'Concluído', 'مكتمل'],
    ['In corso', 'In progress', 'Em andamento', 'قيد التنفيذ'],
    ['Da fare', 'To do', 'A fazer', 'مطلوب'],
    ['online', 'online', 'online', 'متصل'],
    ['delay', 'delay', 'atraso', 'تأخير'],
    ['mock', 'mock', 'mock', 'تجريبي'],
    ['pending', 'pending', 'pendente', 'معلق'],
    ['collegato', 'connected', 'conectado', 'متصل'],
    ['mancante', 'missing', 'ausente', 'مفقود'],
    ['incompleta', 'incomplete', 'incompleta', 'غير مكتمل'],
    ['in attesa validazione', 'awaiting validation', 'aguardando validação', 'بانتظار التحقق'],
    ['campione suolo', 'soil sample', 'amostra de solo', 'عينة تربة'],
    ['prima mano', 'first-party', 'fonte primária', 'مصدر مباشر'],
    ['terza parte', 'third-party', 'terceiro', 'طرف ثالث'],
    ['goccia', 'drip', 'gotejamento', 'تنقيط'],
    ['input medi', 'medium inputs', 'insumos médios', 'مدخلات متوسطة'],
    ['ridotti', 'reduced', 'reduzidos', 'مخفضة'],
    ['rame + zolfo', 'copper + sulfur', 'cobre + enxofre', 'نحاس + كبريت'],
    ['Lavorazioni', 'Operations', 'Operações', 'العمليات'],
    ['Irrigazione', 'Irrigation', 'Irrigação', 'الري'],
    ['Coltura', 'Crop', 'Cultura', 'المحصول'],
    ['Anno', 'Year', 'Ano', 'السنة'],
    ['Input', 'Input', 'Insumos', 'المدخلات'],
    ['Vigneto', 'Vineyard', 'Vinhedo', 'كرم'],
    ['Seminativo', 'Arable land', 'Cultivo anual', 'أرض زراعية'],
    ['Oliveto', 'Olive grove', 'Olivar', 'بستان زيتون'],
    ['Noccioleto', 'Hazelnut grove', 'Pomar de avelãs', 'بستان بندق'],
    ['No-till', 'No-till', 'Plantio direto', 'بدون حراثة'],
    ['Cover crops', 'Cover crops', 'Culturas de cobertura', 'محاصيل تغطية'],
    ['Agroforestry', 'Agroforestry', 'Agrofloresta', 'الحراجة الزراعية'],
    ['Compost/Biochar', 'Compost/Biochar', 'Composto/Biochar', 'كمبوست/فحم حيوي'],
    ['Gestione residui', 'Residue management', 'Gestão de resíduos', 'إدارة المخلفات'],
    ['Nome azienda', 'Farm name', 'Nome da fazenda', 'اسم المزرعة'],
    ['Titolare', 'Owner', 'Titular', 'المالك'],
    ['Regione', 'Region', 'Região', 'المنطقة'],
    ['Superficie totale', 'Total area', 'Área total', 'المساحة الإجمالية'],
    ['Descrizione', 'Description', 'Descrição', 'الوصف'],
    ['Coordinate centro azienda', 'Farm center coordinates', 'Coordenadas do centro da fazenda', 'إحداثيات مركز المزرعة'],
    ['Quanti sensori', 'Number of sensors', 'Quantos sensores', 'عدد المستشعرات'],
    ['Tipi sensore', 'Sensor types', 'Tipos de sensor', 'أنواع المستشعرات'],
    ['Richiedi installazione A-Grid', 'Request A-Grid installation', 'Solicitar instalação A-Grid', 'طلب تركيب A-Grid'],
    ['Accetto termini e condizioni', 'I accept terms and conditions', 'Aceito termos e condições', 'أوافق على الشروط والأحكام'],
    ['passaggi', 'passes', 'passagens', 'مرات مرور'],
    ['passaggio', 'pass', 'passagem', 'مرة مرور'],
    ['Parziale', 'Partial', 'Parcial', 'جزئي'],
    ['Non ready', 'Not ready', 'Não pronto', 'غير جاهز'],
    ['Lazio, Italia', 'Lazio, Italy', 'Lazio, Itália', 'لاتسيو، إيطاليا'],
    ['Italia', 'Italy', 'Itália', 'إيطاليا'],
    ['Hash', 'Hash', 'Hash', 'هاش'],
    ['timestamp', 'timestamp', 'timestamp', 'طابع زمني'],
    ['caricato', 'uploaded', 'carregado', 'تم التحميل'],
    ['Fonte xFarm', 'xFarm source', 'Fonte xFarm', 'مصدر xFarm'],
    ['SOC iniziale', 'Initial SOC', 'SOC inicial', 'SOC الأولي'],
    ['Sangiovese', 'Sangiovese', 'Sangiovese', 'سانجيوفيزي'],
    ['copper + sulfur', 'copper + sulfur', 'cobre + enxofre', 'نحاس + كبريت'],
    ['medium inputs', 'medium inputs', 'insumos médios', 'مدخلات متوسطة'],
    ['reduced', 'reduced', 'reduzidos', 'مخفضة'],
    ['drip', 'drip', 'gotejamento', 'تنقيط'],
    ['Project identity', 'Project identity', 'Identidade do projeto', 'هوية المشروع'],
    ['Sensors and data', 'Sensors and data', 'Sensores e dados', 'المستشعرات والبيانات'],
    ['Blockchain credit', 'Blockchain credit', 'Crédito blockchain', 'رصيد البلوكتشين'],
    ['global completion', 'global completion', 'conclusão global', 'إكمال عام'],
    ['demo wine farm', 'demo wine farm', 'empresa vitivinícola demo', 'مزرعة كروم تجريبية'],
    ['Sangiovese vineyard', 'Sangiovese vineyard', 'vinhedo Sangiovese', 'كرم سانجيوفيزي'],
    ['partial baseline', 'partial baseline', 'linha de base parcial', 'خط أساس جزئي'],
    ['mancano', 'are missing', 'faltam', 'مفقودة'],
    ['ancora', 'still', 'ainda', 'ما زال'],
    ['non ancora', 'not yet', 'ainda não', 'ليس بعد'],
    ['credito', 'credit', 'crédito', 'رصيد'],
    ['Credito', 'Credit', 'Crédito', 'رصيد'],
    ['crediti', 'credits', 'créditos', 'أرصدة'],
    ['evidenze', 'evidence', 'evidências', 'أدلة'],
    ['Evidenze', 'Evidence', 'Evidências', 'أدلة'],
    ['dati', 'data', 'dados', 'بيانات'],
    ['Dati', 'Data', 'Dados', 'بيانات'],
    ['dato', 'data', 'dado', 'بيان'],
    ['Dato', 'Data', 'Dado', 'بيان'],
    ['suolo', 'soil', 'solo', 'تربة'],
    ['Suolo', 'Soil', 'Solo', 'تربة'],
    ['sensore', 'sensor', 'sensor', 'مستشعر'],
    ['Sensore', 'Sensor', 'Sensor', 'مستشعر'],
    ['sensori', 'sensors', 'sensores', 'مستشعرات'],
    ['Sensori', 'Sensors', 'Sensores', 'مستشعرات'],
    ['progetto', 'project', 'projeto', 'مشروع'],
    ['Progetto', 'Project', 'Projeto', 'مشروع'],
    ['azienda', 'farm', 'fazenda', 'مزرعة'],
    ['Azienda', 'Farm', 'Fazenda', 'مزرعة'],
    ['lavorazioni', 'operations', 'operações', 'عمليات'],
    ['Lavorazioni', 'Operations', 'Operações', 'عمليات'],
    ['irrigazione', 'irrigation', 'irrigação', 'ري'],
    ['Irrigazione', 'Irrigation', 'Irrigação', 'ري'],
    ['pratiche', 'practices', 'práticas', 'ممارسات'],
    ['Pratiche', 'Practices', 'Práticas', 'ممارسات'],
    ['residui', 'residues', 'resíduos', 'مخلفات'],
    ['residuo', 'residue', 'resíduo', 'مخلف'],
    ['copertura vegetale', 'vegetation cover', 'cobertura vegetal', 'غطاء نباتي'],
    ['monitoraggio', 'monitoring', 'monitoramento', 'مراقبة'],
    ['Monitoraggio', 'Monitoring', 'Monitoramento', 'مراقبة'],
    ['validazione', 'validation', 'validação', 'تحقق'],
    ['validato', 'validated', 'validado', 'معتمد'],
    ['validate', 'validated', 'validadas', 'معتمدة'],
    ['mancanti', 'missing', 'ausentes', 'مفقودة'],
    ['mancante', 'missing', 'ausente', 'مفقود'],
    ['caricare', 'upload', 'carregar', 'تحميل'],
    ['carica', 'upload', 'carrega', 'تحميل'],
    ['Carica', 'Upload', 'Carregar', 'تحميل'],
    ['caricato', 'uploaded', 'carregado', 'تم التحميل'],
    ['inserire', 'enter', 'inserir', 'إدخال'],
    ['inserimento', 'entry', 'inserção', 'إدخال'],
    ['collegare', 'connect', 'conectar', 'ربط'],
    ['collegamento', 'connection', 'conexão', 'ربط'],
    ['collegato', 'connected', 'conectado', 'متصل'],
    ['fonte esterna', 'external source', 'fonte externa', 'مصدر خارجي'],
    ['fonte', 'source', 'fonte', 'مصدر'],
    ['Fonte', 'Source', 'Fonte', 'مصدر'],
    ['manuale', 'manual', 'manual', 'يدوي'],
    ['storico', 'history', 'histórico', 'سجل'],
    ['Storico', 'History', 'Histórico', 'سجل'],
    ['parziale', 'partial', 'parcial', 'جزئي'],
    ['Parziale', 'Partial', 'Parcial', 'جزئي'],
    ['permanenza', 'permanence', 'permanência', 'دوام'],
    ['Permanenza', 'Permanence', 'Permanência', 'دوام'],
    ['vendita', 'sale', 'venda', 'بيع'],
    ['Vendita', 'Sale', 'Venda', 'بيع'],
    ['verificato', 'verified', 'verificado', 'متحقق منه'],
    ['verificare', 'verify', 'verificar', 'تحقق'],
    ['qualità', 'quality', 'qualidade', 'جودة'],
    ['qualita', 'quality', 'qualidade', 'جودة'],
    ['Qualità', 'Quality', 'Qualidade', 'جودة'],
    ['Qualita', 'Quality', 'Qualidade', 'جودة'],
    ['profondità', 'depth', 'profundidade', 'عمق'],
    ['Profondità', 'Depth', 'Profundidade', 'عمق'],
    ['campionamento', 'sampling', 'amostragem', 'أخذ عينات'],
    ['filari', 'rows', 'fileiras', 'صفوف'],
    ['umidità', 'moisture', 'umidade', 'رطوبة'],
    ['Umidità', 'Moisture', 'Umidade', 'رطوبة'],
    ['meteo', 'weather', 'meteorologia', 'طقس'],
    ['Meteo', 'Weather', 'Meteorologia', 'طقس'],
    ['registro', 'record', 'registro', 'سجل'],
    ['Registro', 'Record', 'Registro', 'سجل'],
    ['organizzazione', 'organization', 'organização', 'مؤسسة'],
    ['Organizzazione', 'Organization', 'Organização', 'مؤسسة'],
    ['richiesta', 'request', 'solicitação', 'طلب'],
    ['Richiesta', 'Request', 'Solicitação', 'طلب'],
    ['percorso', 'path', 'percurso', 'مسار'],
    ['Percorso', 'Path', 'Percurso', 'مسار'],
    ['attivo', 'active', 'ativo', 'نشط'],
    ['attivi', 'active', 'ativos', 'نشطة'],
    ['attività', 'activities', 'atividades', 'أنشطة'],
    ['certificazione', 'certification', 'certificação', 'شهادة'],
    ['Certificazione', 'Certification', 'Certificação', 'شهادة'],
    ['pagamento', 'payment', 'pagamento', 'دفع'],
    ['Pagamento', 'Payment', 'Pagamento', 'دفع'],
    ['trasparente', 'transparent', 'transparente', 'شفاف'],
    ['Trasparente', 'Transparent', 'Transparente', 'شفاف'],
    ['Nuovo progetto', 'New project', 'Novo projeto', 'مشروع جديد'],
    ['Dati progetto', 'Project data', 'Dados do projeto', 'بيانات المشروع'],
    ['Pratiche', 'Practices', 'Práticas', 'الممارسات'],
    ['Pratiche rigenerative', 'Regenerative practices', 'Práticas regenerativas', 'ممارسات تجديدية'],
    ['Riepilogo & conferma', 'Summary & confirmation', 'Resumo e confirmação', 'ملخص وتأكيد'],
    ['Azienda', 'Farm', 'Fazenda', 'المزرعة'],
    ['Centro azienda', 'Farm center', 'Centro da fazenda', 'مركز المزرعة'],
    ['Progetto demo registrato', 'Demo project registered', 'Projeto demo registrado', 'تم تسجيل المشروع التجريبي'],
    ['Pagamento trasparente', 'Transparent payment', 'Pagamento transparente', 'دفع شفاف'],
    ['Attivo', 'Active', 'Ativo', 'نشط'],
    ['Bozza', 'Draft', 'Rascunho', 'مسودة'],
    ['accettato', 'accepted', 'aceito', 'مقبول'],
    ['invitato', 'invited', 'convidado', 'مدعو'],
    ['Letto', 'Read', 'Lido', 'تمت القراءة'],
    ['Registro pubblico crediti', 'Public credit registry', 'Registro público de créditos', 'السجل العام للأرصدة'],
    ['Piano di monitoraggio approvato', 'Approved monitoring plan', 'Plano de monitoramento aprovado', 'خطة مراقبة معتمدة'],
    ['Quantificazione baseline emissioni/rimozioni', 'Baseline emissions/removals quantification', 'Quantificação baseline de emissões/remoções', 'قياس خط الأساس للانبعاثات/الإزالات'],
    ['Rapporto di monitoraggio periodico', 'Periodic monitoring report', 'Relatório periódico de monitoramento', 'تقرير مراقبة دوري'],
    ['Metodo di permanenza / buffer pool', 'Permanence method / buffer pool', 'Método de permanência / pool de reserva', 'منهجية الدوام / مجمع الاحتياطي'],
    ['Registro irrigazione', 'Irrigation record', 'Registro de irrigação', 'سجل الري'],
    ['Piano permanenza', 'Permanence plan', 'Plano de permanência', 'خطة الدوام'],
    ['Credito generato', 'Credit generated', 'Crédito gerado', 'تم إنشاء الرصيد'],
    ['Certificazione non ancora pronta.', 'Certification is not ready yet.', 'Certificação ainda não pronta.', 'الشهادة ليست جاهزة بعد.'],
    ['Analisi suolo SOC 0-30 cm', 'SOC soil analysis 0-30 cm', 'Análise de solo SOC 0-30 cm', 'تحليل تربة SOC من 0 إلى 30 سم'],
    ['NDVI vigneto maggio', 'May vineyard NDVI', 'NDVI do vinhedo em maio', 'NDVI للكرم في مايو'],
    ['Stazione meteo', 'Weather station', 'Estação meteorológica', 'محطة الطقس'],
    ['Meteo WS-01', 'Weather WS-01', 'Meteo WS-01', 'محطة الطقس WS-01'],
    ['Drill-down sensore', 'Sensor drill-down', 'Drill-down do sensor', 'تفصيل المستشعر'],
    ['Dati suolo e SOC', 'Soil data and SOC', 'Dados de solo e SOC', 'بيانات التربة و SOC'],
    ['Fonte dati', 'Data source', 'Fonte de dados', 'مصدر البيانات'],
    ['Storico pratiche', 'Practice history', 'Histórico de práticas', 'سجل الممارسات'],
    ['Attività giugno', 'June activities', 'Atividades de junho', 'أنشطة يونيو'],
    ['Caricamento documenti catastali', 'Cadastral document upload', 'Carregamento de documentos cadastrais', 'تحميل الوثائق المساحية'],
    ['Aggiungi parcella', 'Add parcel', 'Adicionar parcela', 'إضافة قطعة'],
    ['Maschera dati progetto', 'Project data form', 'Formulário de dados do projeto', 'نموذج بيانات المشروع'],
    ['Quaderno di campagna xFarm', 'xFarm field notebook', 'Caderno de campo xFarm', 'دفتر الحقل xFarm'],
    ['Stima crediti', 'Credit estimate', 'Estimativa de créditos', 'تقدير الأرصدة'],
    ['Preview report', 'Report preview', 'Prévia do relatório', 'معاينة التقرير'],
    ['Dettaglio co-benefits', 'Co-benefits detail', 'Detalhe dos co-benefícios', 'تفاصيل المنافع المشتركة'],
    ['What-if simulator', 'What-if simulator', 'Simulador what-if', 'محاكي ماذا لو'],
    ['Dettaglio', 'Detail', 'Detalhe', 'تفاصيل'],
    ['Contenuto mock.', 'Mock content.', 'Conteúdo mock.', 'محتوى تجريبي.'],
    ['Lun', 'Mon', 'Seg', 'الاثنين'],
    ['Mar', 'Tue', 'Ter', 'الثلاثاء'],
    ['Mer', 'Wed', 'Qua', 'الأربعاء'],
    ['Gio', 'Thu', 'Qui', 'الخميس'],
    ['Ven', 'Fri', 'Sex', 'الجمعة'],
    ['Sab', 'Sat', 'Sáb', 'السبت'],
    ['Dom', 'Sun', 'Dom', 'الأحد'],
    ['Attuale', 'Current', 'Atual', 'الحالي'],
    ['Suolo', 'Soil', 'Solo', 'التربة'],
    ['Agroforestale', 'Agroforestry', 'Agrofloresta', 'الحراجة الزراعية'],
    ['tCO2e stimati', 'Estimated tCO2e', 'tCO2e estimadas', 'طن CO2e مقدرة'],
    ['12 ha x coefficiente vigneto x pratiche conservative: 38 tCO2e potenziali, alta incertezza.', '12 ha x vineyard coefficient x conservative practices: 38 potential tCO2e, high uncertainty.', '12 ha x coeficiente de vinhedo x práticas conservadoras: 38 tCO2e potenciais, alta incerteza.', '12 هكتارا × معامل الكرم × ممارسات محافظة: 38 طن CO2e محتملة مع عدم يقين عال.'],
    ['Carbonio, acqua, biodiversità e salute suolo calcolati dagli stessi input MRV senza data entry aggiuntivo.', 'Carbon, water, biodiversity and soil health calculated from the same MRV inputs without extra data entry.', 'Carbono, água, biodiversidade e saúde do solo calculados a partir dos mesmos inputs MRV sem entrada adicional de dados.', 'الكربون والمياه والتنوع الحيوي وصحة التربة محسوبة من نفس مدخلات MRV دون إدخال بيانات إضافي.'],
    ['Caricamento analisi suolo, profondità, repliche per filare e collegamento a evidenze validate.', 'Soil analysis upload, depth, row replicates and connection to validated evidence.', 'Carregamento de análise de solo, profundidade, réplicas por fileira e conexão com evidências validadas.', 'تحميل تحليل التربة والعمق والتكرارات حسب الصف وربطها بالأدلة المعتمدة.'],
    ['Caricata analisi 2024. Mancano profondità replicate per alcuni filari.', '2024 analysis uploaded. Replicated depths are missing for some rows.', 'Análise 2024 carregada. Faltam profundidades replicadas para algumas fileiras.', 'تم تحميل تحليل 2024. الأعماق المكررة مفقودة لبعض الصفوف.'],
    ['Cosa manca per completare la baseline?', 'What is missing to complete the baseline?', 'O que falta para completar a linha de base?', 'ما المطلوب لإكمال خط الأساس؟'],
    ['Dettaglio calcolo: 12 ha x coefficiente vigneto x pratiche conservative.', 'Calculation detail: 12 ha x vineyard coefficient x conservative practices.', 'Detalhe do cálculo: 12 ha x coeficiente de vinhedo x práticas conservadoras.', 'تفاصيل الحساب: 12 هكتارا × معامل الكرم × ممارسات محافظة.'],
    ['Hash 0xa91f...c21d, timestamp 24/05/2026, geotag presente.', 'Hash 0xa91f...c21d, timestamp 24/05/2026, geotag present.', 'Hash 0xa91f...c21d, timestamp 24/05/2026, geotag presente.', 'هاش 0xa91f...c21d، طابع زمني 24/05/2026، تحديد جغرافي موجود.'],
    ['Indicatori extra calcolati dagli stessi dati MRV.', 'Additional indicators calculated from the same MRV data.', 'Indicadores adicionais calculados a partir dos mesmos dados MRV.', 'مؤشرات إضافية محسوبة من نفس بيانات MRV.'],
    ['Interfaccia futura per inserire/modificare nome progetto, azienda, localizzazione, coltura, superficie e protocollo target prima della conferma anchor.', 'Future interface to enter/edit project name, farm, location, crop, area and target protocol before anchor confirmation.', 'Interface futura para inserir/editar nome do projeto, fazenda, localização, cultura, área e protocolo alvo antes da confirmação do anchor.', 'واجهة مستقبلية لإدخال/تعديل اسم المشروع والمزرعة والموقع والمحصول والمساحة والبروتوكول المستهدف قبل تأكيد المرساة.'],
    ['Layer Sentinel usato come supporto, non sostituisce analisi suolo.', 'Sentinel layer used as support; it does not replace soil analysis.', 'Camada Sentinel usada como suporte; não substitui a análise de solo.', 'طبقة Sentinel مستخدمة كدعم ولا تستبدل تحليل التربة.'],
    ['Layer Sentinel-2 per vigoria vegetativa, copertura suolo e supporto al monitoraggio.', 'Sentinel-2 layer for vegetation vigor, soil cover and monitoring support.', 'Camada Sentinel-2 para vigor vegetativo, cobertura do solo e suporte ao monitoramento.', 'طبقة Sentinel-2 لقوة الغطاء النباتي وغطاء التربة ودعم المراقبة.'],
    ['Manca upload: carica file, importa da xFarm o inserisci manualmente.', 'Upload missing: upload a file, import from xFarm or enter manually.', 'Upload ausente: carregue um arquivo, importe do xFarm ou insira manualmente.', 'التحميل مفقود: حمّل ملفا أو استورد من xFarm أو أدخل يدويا.'],
    ['Mancano SOC replicato e dati 2023.', 'Replicated SOC and 2023 data are missing.', 'Faltam SOC replicado e dados de 2023.', 'بيانات SOC المكررة وبيانات 2023 مفقودة.'],
    ['Profondità parziale: caricare repliche o collegare nuovo campionamento.', 'Partial depth: upload replicates or connect a new sampling round.', 'Profundidade parcial: carregue réplicas ou conecte nova amostragem.', 'عمق جزئي: حمّل التكرارات أو اربط جولة أخذ عينات جديدة.'],
    ['Stato Mock interattivo Blockchain Hash quando il dato entra in audit trail Salva bozza Importa dato Genera hash', 'Status Interactive mock Blockchain Hash when the data enters the audit trail Save draft Import data Generate hash', 'Status Mock interativo Blockchain Hash quando o dado entra na trilha de auditoria Salvar rascunho Importar dado Gerar hash', 'الحالة نموذج تفاعلي بلوكتشين هاش عند دخول البيانات في مسار التدقيق حفظ المسودة استيراد البيانات إنشاء هاش'],
    ['Upload .geojson/.shp per importare confini aziendali già disponibili.', 'Upload .geojson/.shp to import already available farm boundaries.', 'Faça upload de .geojson/.shp para importar limites da fazenda já disponíveis.', 'حمّل .geojson/.shp لاستيراد حدود المزرعة المتاحة مسبقا.'],
    ['Upload documenti, validazione formato, collegamento a particelle e storico revisioni dopo Project Anchor.', 'Document upload, format validation, parcel connection and revision history after Project Anchor.', 'Upload de documentos, validação de formato, conexão a parcelas e histórico de revisões após o Project Anchor.', 'تحميل الوثائق والتحقق من الصيغة وربط القطع وسجل المراجعات بعد مرساة المشروع.'],
    ['Upload file, inserimento dati, geotag, associazione a plot/pratica, generazione hash e invio in review.', 'File upload, data entry, geotag, plot/practice association, hash generation and review submission.', 'Upload de arquivo, entrada de dados, geotag, associação a parcela/prática, geração de hash e envio para revisão.', 'تحميل الملف وإدخال البيانات والتحديد الجغرافي وربط القطعة/الممارسة وإنشاء الهاش والإرسال للمراجعة.'],
    ['Usato per vigoria vegetativa e copertura suolo.', 'Used for vegetation vigor and soil cover.', 'Usado para vigor vegetativo e cobertura do solo.', 'يستخدم لقوة الغطاء النباتي وغطاء التربة.'],
    ['1 sensore offline, 2 evidenze senza geotag.', '1 sensor offline, 2 evidence items without geotag.', '1 sensor offline, 2 evidências sem geotag.', 'مستشعر واحد غير متصل وعنصرا دليل دون تحديد جغرافي.'],
    ['Accesso completo a progetti, dati raw, qualità dati, revisioni e report per certificatori.', 'Full access to projects, raw data, data quality, reviews and reports for certifiers.', 'Acesso completo a projetos, dados brutos, qualidade dos dados, revisões e relatórios para certificadores.', 'وصول كامل إلى المشاريع والبيانات الخام وجودة البيانات والمراجعات والتقارير للجهات المصدقة.'],
    ['Appezzamenti, particelle, storico pratiche, BAU e dati suolo.', 'Plots, parcels, practice history, BAU and soil data.', 'Talhões, parcelas, histórico de práticas, BAU e dados de solo.', 'الحقول والقطع وسجل الممارسات وBAU وبيانات التربة.'],
    ['Copertura sensori', 'Sensor coverage', 'Cobertura de sensores', 'تغطية المستشعرات'],
    ['Gestione multi-progetto con evidenze, sensoristica, fonti terze, readiness standard e registro blockchain/pOsti.', 'Multi-project management with evidence, sensors, third-party sources, standard readiness and blockchain/pOsti registry.', 'Gestão multi-projeto com evidências, sensores, fontes terceiras, prontidão para padrões e registro blockchain/pOsti.', 'إدارة متعددة المشاريع مع أدلة ومستشعرات ومصادر طرف ثالث وجاهزية للمعايير وسجل blockchain/pOsti.'],
    ['Ultimi eventi: Farmer Trebotti ha caricato analisi suolo; UAE Demo ha raggiunto readiness 68%; sensore WS-01 in delay.', 'Latest events: Farmer Trebotti uploaded soil analysis; UAE Demo reached 68% readiness; sensor WS-01 is delayed.', 'Últimos eventos: Farmer Trebotti carregou análise de solo; UAE Demo atingiu readiness de 68%; sensor WS-01 em atraso.', 'آخر الأحداث: حمّل Farmer Trebotti تحليل التربة؛ وصل UAE Demo إلى جاهزية 68%؛ المستشعر WS-01 متأخر.'],
    ['Gestione accessi stakeholder in sola lettura.', 'Read-only stakeholder access management.', 'Gestão de acessos stakeholder somente leitura.', 'إدارة وصول أصحاب المصلحة للقراءة فقط.'],
    ['Mancano dati storici e piano permanenza.', 'Historical data and permanence plan are missing.', 'Faltam dados históricos e plano de permanência.', 'البيانات التاريخية وخطة الدوام مفقودة.'],
    ['Superficie gestita', 'Managed area', 'Área gerida', 'المساحة المدارة'],
    ['Azioni utente', 'User actions', 'Ações do usuário', 'إجراءات المستخدم'],
    ['Caricare analisi.', 'Upload analysis.', 'Carregar análise.', 'تحميل التحليل.'],
    ['Con readiness 42% il credito resta in attesa. Nessun token, nessun seriale e nessun credito vendibile.', 'With 42% readiness, the credit remains pending. No token, no serial and no sellable credit.', 'Com readiness de 42%, o crédito permanece pendente. Nenhum token, nenhum serial e nenhum crédito vendável.', 'مع جاهزية 42% يبقى الرصيد معلقا. لا يوجد رمز ولا رقم تسلسلي ولا رصيد قابل للبيع.'],
    ['Evidence hub significa archivio operativo delle prove MRV: foto, documenti, analisi, NDVI, registri, dati sensore e attivita di monitoraggio.', 'Evidence hub means the operational archive of MRV proof: photos, documents, analyses, NDVI, records, sensor data and monitoring activities.', 'Evidence hub significa arquivo operacional das provas MRV: fotos, documentos, análises, NDVI, registros, dados de sensores e atividades de monitoramento.', 'مركز الأدلة يعني الأرشيف التشغيلي لإثباتات MRV: الصور والوثائق والتحليلات وNDVI والسجلات وبيانات المستشعر وأنشطة المراقبة.'],
    ['Gestione ordinaria senza progetto.', 'Ordinary management without the project.', 'Gestão ordinária sem projeto.', 'إدارة عادية دون المشروع.'],
    ['Inserimento manuale.', 'Manual entry.', 'Inserção manual.', 'إدخال يدوي.'],
    ['La piattaforma mostra cosa e pronto e cosa manca.', 'The platform shows what is ready and what is missing.', 'A plataforma mostra o que está pronto e o que falta.', 'تعرض المنصة ما هو جاهز وما هو مفقود.'],
    ['Manca upload, dato, geotag, fonte esterna o revisione.', 'Upload, data, geotag, external source or review is missing.', 'Falta upload, dado, geotag, fonte externa ou revisão.', 'ينقص تحميل أو بيان أو تحديد جغرافي أو مصدر خارجي أو مراجعة.'],
    ['Nome progetto, ubicazione, coltura, superficie, protocollo target, documenti catastali.', 'Project name, location, crop, area, target protocol, cadastral documents.', 'Nome do projeto, localização, cultura, área, protocolo alvo, documentos cadastrais.', 'اسم المشروع والموقع والمحصول والمساحة والبروتوكول المستهدف والوثائق المساحية.'],
    ['Ogni evidenza deve essere cliccabile. Le evidenze mancanti devono permettere upload, inserimento manuale o import da xFarm, sensore o satellite.', 'Every evidence item must be clickable. Missing evidence must allow upload, manual entry or import from xFarm, sensor or satellite.', 'Cada evidência deve ser clicável. Evidências ausentes devem permitir upload, inserção manual ou importação do xFarm, sensor ou satélite.', 'يجب أن يكون كل دليل قابلا للنقر. يجب أن تسمح الأدلة المفقودة بالتحميل أو الإدخال اليدوي أو الاستيراد من xFarm أو المستشعر أو القمر الصناعي.'],
    ['Ogni sezione spiega cosa supporta lo step, quali dati mostra, cosa deve fare l\'utente e dove cliccare nella demo.', 'Each section explains what the step supports, which data it shows, what the user must do and where to click in the demo.', 'Cada seção explica o que o passo suporta, quais dados mostra, o que o usuário deve fazer e onde clicar na demo.', 'يوضح كل قسم ما تدعمه الخطوة والبيانات المعروضة وما يجب على المستخدم فعله وأين ينقر في العرض التجريبي.'],
    ['Se manca', 'If missing', 'Se faltar', 'إذا كان مفقودا'],
    ['Nessuna promessa di credito o rendimento. Serve progetto MRV completo.', 'No promise of credit or return. A complete MRV project is required.', 'Nenhuma promessa de crédito ou rendimento. É necessário um projeto MRV completo.', 'لا يوجد وعد برصيد أو عائد. يلزم مشروع MRV كامل.'],
    ['Residui in campo', 'Residues in field', 'Resíduos no campo', 'مخلفات في الحقل'],
    ['Form contatto mock per raccogliere dati, obiettivo e prossimo step commerciale/operativo.', 'Mock contact form to collect data, objective and next commercial/operational step.', 'Formulário de contato mock para coletar dados, objetivo e próximo passo comercial/operacional.', 'نموذج اتصال تجريبي لجمع البيانات والهدف والخطوة التجارية/التشغيلية التالية.'],
    ['Nome organizzazione Email Note Descrivi superficie, ruolo e interesse per A-Grid MRV.', 'Organization name Email Notes Describe area, role and interest in A-Grid MRV.', 'Nome da organização Email Notas Descreva área, função e interesse por A-Grid MRV.', 'اسم المؤسسة البريد الإلكتروني ملاحظات صف المساحة والدور والاهتمام بـ A-Grid MRV.'],
    ['Documento necessario per spiegare come il carbonio verrà mantenuto nel tempo.', 'Document required to explain how carbon will be maintained over time.', 'Documento necessário para explicar como o carbono será mantido ao longo do tempo.', 'وثيقة مطلوبة لشرح كيفية الحفاظ على الكربون بمرور الوقت.'],
    ['Documento per durata pratiche, rischi reversal, monitoraggio pluriennale e responsabilità.', 'Document for practice duration, reversal risks, multi-year monitoring and responsibilities.', 'Documento para duração das práticas, riscos de reversão, monitoramento plurianual e responsabilidades.', 'وثيقة لمدة الممارسات ومخاطر الانعكاس والمراقبة متعددة السنوات والمسؤوليات.'],
    ['Maschera futura per inserire anni, colture, lavorazioni, input, irrigazione e documenti di supporto.', 'Future form to enter years, crops, operations, inputs, irrigation and supporting documents.', 'Formulário futuro para inserir anos, culturas, operações, insumos, irrigação e documentos de suporte.', 'نموذج مستقبلي لإدخال السنوات والمحاصيل والعمليات والمدخلات والري والوثائق الداعمة.'],
    ['Mappa satellitare con parcelle, sensori e stato dati.', 'Satellite map with parcels, sensors and data status.', 'Mapa de satélite com parcelas, sensores e status dos dados.', 'خريطة أقمار صناعية للقطع والمستشعرات وحالة البيانات.'],
    ['Principio guida', 'Guiding principle', 'Princípio orientador', 'المبدأ التوجيهي'],
    ['KPI aggregati, mappa, stime crediti e readiness.', 'Aggregated KPIs, map, credit estimates and readiness.', 'KPIs agregados, mapa, estimativas de crédito e readiness.', 'مؤشرات مجمعة وخريطة وتقديرات أرصدة وجاهزية.'],
    ['Mappa portfolio', 'Portfolio map', 'Mapa do portfólio', 'خريطة المحفظة'],
    ['A-Grid MRV — Guida operativa', 'A-Grid MRV — Operational guide', 'A-Grid MRV — Guia operacional', 'A-Grid MRV — الدليل التشغيلي'],
    ['Guida operativa MRV', 'MRV operational guide', 'Guia operacional MRV', 'دليل MRV التشغيلي'],
    ['Guida operativa per farmer e team demo: dal Project Anchor alla baseline, dai sensori alle evidenze, fino a readiness, credito ed exchange readiness.', 'Operational guide for farmers and demo teams: from Project Anchor to baseline, from sensors to evidence, through readiness, credit and exchange readiness.', 'Guia operacional para produtores e equipes demo: do Project Anchor à linha de base, dos sensores às evidências, até readiness, crédito e exchange readiness.', 'دليل تشغيلي للمزارعين وفرق العرض: من مرساة المشروع إلى خط الأساس، ومن المستشعرات إلى الأدلة، وصولا إلى الجاهزية والرصيد وجاهزية المنصة.'],
    ['Guida alle pratiche rigenerative', 'Guide to regenerative practices', 'Guia de práticas regenerativas', 'دليل الممارسات التجديدية'],
    ['A-Grid — Mappa IoT live', 'A-Grid — Live IoT map', 'A-Grid — Mapa IoT ao vivo', 'A-Grid — خريطة إنترنت الأشياء المباشرة'],
    ['Mappa interattiva', 'Interactive map', 'Mapa interativo', 'خريطة تفاعلية'],
    ['0 generati', '0 generated', '0 gerados', '0 منشأة'],
    ['Analisi SOC — UAE Date Farms', 'SOC analysis — UAE Date Farms', 'Análise SOC — UAE Date Farms', 'تحليل SOC — UAE Date Farms'],
    ['Documenti catastali — Agroforestry', 'Cadastral documents — Agroforestry', 'Documentos cadastrais — Agroforestry', 'الوثائق المساحية — Agroforestry'],
    ['Documento tecnico · timestamp creato', 'Technical document · timestamp created', 'Documento técnico · timestamp criado', 'وثيقة فنية · تم إنشاء الطابع الزمني'],
    ['Documenti stakeholder approvati, senza allegati raw o dati sensore live.', 'Approved stakeholder documents, with no raw attachments or live sensor data.', 'Documentos de stakeholder aprovados, sem anexos brutos ou dados de sensor ao vivo.', 'وثائق أصحاب المصلحة المعتمدة دون مرفقات خام أو بيانات مستشعر مباشرة.'],
    ['KPI aggregati, progetti, impatto e report validati, con tracciabilità blockchain delle evidenze chiave.', 'Aggregated KPIs, projects, impact and validated reports, with blockchain traceability for key evidence.', 'KPIs agregados, projetos, impacto e relatórios validados, com rastreabilidade blockchain das evidências-chave.', 'مؤشرات مجمعة ومشاريع وأثر وتقارير معتمدة مع تتبع بلوكتشين للأدلة الرئيسية.'],
    ['PDF ed Excel aggregati per due diligence, senza documenti interni del farmer.', 'Aggregated PDF and Excel exports for due diligence, without internal farmer documents.', 'PDF e Excel agregados para due diligence, sem documentos internos do produtor.', 'ملفات PDF وExcel مجمعة للعناية الواجبة دون وثائق داخلية للمزارع.'],
    ['Solo KPI aggregati, timeline MRV, evidenze validate e report approvati. Nessun dato raw, documento interno o sensore live.', 'Only aggregated KPIs, MRV timeline, validated evidence and approved reports. No raw data, internal document or live sensor.', 'Somente KPIs agregados, timeline MRV, evidências validadas e relatórios aprovados. Nenhum dado bruto, documento interno ou sensor ao vivo.', 'مؤشرات مجمعة فقط وجدول MRV زمني وأدلة معتمدة وتقارير موافق عليها. لا توجد بيانات خام أو وثيقة داخلية أو مستشعر مباشر.'],
    ['Caricare o validare le evidenze mancanti.', 'Upload or validate the missing evidence.', 'Carregar ou validar as evidências ausentes.', 'حمّل الأدلة المفقودة أو تحقق منها.'],
    ['Dato o documento', 'Data or document', 'Dado ou documento', 'بيان أو وثيقة'],
    ['Validare testo.', 'Validate text.', 'Validar texto.', 'تحقق من النص.'],
    ['Verificare dati, caricare documenti, controllare mappa e confermare anchor.', 'Check data, upload documents, review the map and confirm the anchor.', 'Verificar dados, carregar documentos, revisar o mapa e confirmar o anchor.', 'تحقق من البيانات وحمّل الوثائق وراجع الخريطة وأكد المرساة.'],
    ['Genera documenti per certificazione', 'Generate certification documents', 'Gerar documentos para certificação', 'إنشاء وثائق الاعتماد'],
    ['A-Grid — Guide e documenti', 'A-Grid — Guides and documents', 'A-Grid — Guias e documentos', 'A-Grid — الأدلة والوثائق'],
    ['Risorse scaricabili e documenti da leggere prima di completare onboarding e compliance.', 'Downloadable resources and documents to read before completing onboarding and compliance.', 'Recursos baixáveis e documentos para ler antes de concluir onboarding e compliance.', 'موارد قابلة للتنزيل ووثائق يجب قراءتها قبل إكمال الإعداد والامتثال.'],
    ['Campionamento fisico annuale.', 'Annual physical sampling.', 'Amostragem física anual.', 'أخذ عينات ميدانية سنوي.'],
    ['Nome organizzazione', 'Organization name', 'Nome da organização', 'اسم المؤسسة'],
    ['Note', 'Notes', 'Notas', 'ملاحظات'],
    ['Email', 'Email', 'Email', 'البريد الإلكتروني'],
    ['Ruolo', 'Role', 'Função', 'الدور'],
    ['viewer', 'viewer', 'visualizador', 'مشاهد'],
    ['editor', 'editor', 'editor', 'محرر']
  ];

  const dictionaries = { it: {}, en: {}, pt: {}, ar: {} };
  const phraseDictionaries = { it: {}, en: {}, pt: {}, ar: {} };

  rows.forEach(([it, en, pt, ar]) => {
    dictionaries.en[it] = en;
    dictionaries.pt[it] = pt;
    dictionaries.ar[it] = ar;
  });
  phraseRows.forEach(([it, en, pt, ar]) => {
    phraseDictionaries.en[it] = en;
    phraseDictionaries.pt[it] = pt;
    phraseDictionaries.ar[it] = ar;
  });

  const baseTexts = new WeakMap();
  const baseAttrs = new WeakMap();
  const baseValues = new WeakMap();
  const baseOptions = new WeakMap();
  const skipTags = new Set(['SCRIPT', 'STYLE', 'CODE', 'PRE', 'NOSCRIPT', 'SELECT', 'OPTION']);
  let translating = false;
  let observer;
  const trackedCharts = new Set();

  function normalize(text) {
    return String(text || '').replace(/\s+/g, ' ').trim();
  }

  function translateString(source, lang) {
    if (lang === 'it') return source;
    const dict = dictionaries[lang] || {};
    const phrases = phraseDictionaries[lang] || {};
    const trimmed = normalize(source);
    if (!trimmed) return source;
    if (dict[trimmed]) return source.replace(trimmed, dict[trimmed]);

    let next = source;
    Object.keys(phrases)
      .sort((a, b) => b.length - a.length)
      .forEach(key => {
        next = next.split(key).join(phrases[key]);
      });
    return next;
  }

  function walkTextNodes(root, cb) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!normalize(node.nodeValue)) return NodeFilter.FILTER_REJECT;
        if (node.parentElement && skipTags.has(node.parentElement.tagName)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(cb);
  }

  function originalAttr(el, attr) {
    if (!baseAttrs.has(el)) baseAttrs.set(el, {});
    const attrs = baseAttrs.get(el);
    if (!(attr in attrs)) attrs[attr] = el.getAttribute(attr);
    return attrs[attr];
  }

  function translateAttributes(root, lang) {
    root.querySelectorAll('input, textarea, button, a, [title], [aria-label]').forEach(el => {
      ['placeholder', 'title', 'aria-label'].forEach(attr => {
        if (!el.hasAttribute(attr)) return;
        const original = originalAttr(el, attr);
        const next = translateString(original, lang);
        if (el.getAttribute(attr) !== next) el.setAttribute(attr, next);
      });
      if ((el.type === 'button' || el.type === 'submit') && el.value) {
        const original = originalAttr(el, 'value');
        const next = translateString(original, lang);
        if (el.value !== next) el.value = next;
      }
    });
  }

  function translateFormValues(root, lang) {
    root.querySelectorAll('input, textarea').forEach(el => {
      if (el.type && ['checkbox', 'radio', 'range', 'number', 'hidden'].includes(el.type)) return;
      if (document.activeElement === el) return;
      if (!baseValues.has(el)) baseValues.set(el, el.value);
      const original = baseValues.get(el);
      const next = translateString(original, lang);
      if (el.value !== next) el.value = next;
    });
  }

  function translateSelectOptions(root, lang) {
    root.querySelectorAll('select option').forEach(option => {
      const select = option.closest('select');
      if (select && /AGridI18n/.test(select.getAttribute('onchange') || '')) return;
      if (select && select.closest('.language-select')) return;
      if (select && /language/i.test(select.getAttribute('aria-label') || '')) return;
      if (!baseOptions.has(option)) baseOptions.set(option, option.textContent);
      const original = baseOptions.get(option);
      const next = translateString(original, lang);
      if (option.textContent !== next) option.textContent = next;
    });
  }

  function cloneChartSource(data) {
    return {
      labels: Array.isArray(data.labels) ? [...data.labels] : undefined,
      datasets: Array.isArray(data.datasets)
        ? data.datasets.map(ds => ({ label: ds.label }))
        : []
    };
  }

  function translateChart(chart, lang) {
    if (!chart || !chart.data) return;
    if (!chart.$agridSource) chart.$agridSource = cloneChartSource(chart.data);
    const source = chart.$agridSource;
    if (Array.isArray(source.labels) && Array.isArray(chart.data.labels)) {
      chart.data.labels = source.labels.map(label => translateString(label, lang));
    }
    if (Array.isArray(chart.data.datasets)) {
      chart.data.datasets.forEach((ds, index) => {
        const original = source.datasets[index] && source.datasets[index].label;
        if (original) ds.label = translateString(original, lang);
      });
    }
    if (typeof chart.update === 'function') chart.update('none');
  }

  function patchCharts() {
    if (!window.Chart || window.Chart.$agridPatched) return;
    const OriginalChart = window.Chart;
    function PatchedChart(ctx, config) {
      const chart = new OriginalChart(ctx, config);
      chart.$agridSource = cloneChartSource(chart.data || {});
      trackedCharts.add(chart);
      translateChart(chart, window.AGridI18n.getLang());
      return chart;
    }
    Object.keys(OriginalChart).forEach(key => { PatchedChart[key] = OriginalChart[key]; });
    PatchedChart.prototype = OriginalChart.prototype;
    PatchedChart.$agridPatched = true;
    window.Chart = PatchedChart;
  }

  function installChartHook() {
    if (window.Chart) {
      patchCharts();
      return;
    }
    let chartValue;
    try {
      Object.defineProperty(window, 'Chart', {
        configurable: true,
        get() {
          return chartValue;
        },
        set(value) {
          chartValue = value;
          patchCharts();
        }
      });
    } catch (e) {
      // Chart translation remains optional when the browser blocks property interception.
    }
  }

  function translate(lang) {
    const meta = languages[lang] || languages.it;
    translating = true;
    document.documentElement.lang = lang;
    document.documentElement.dir = meta.dir;
    if (document.body) document.body.classList.toggle('rtl', meta.dir === 'rtl');

    document.title = translateString(baseTitle, lang);
    walkTextNodes(document.body, node => {
      if (!baseTexts.has(node)) baseTexts.set(node, node.nodeValue);
      const original = baseTexts.get(node);
      const next = translateString(original, lang);
      if (node.nodeValue !== next) node.nodeValue = next;
    });
    translateAttributes(document.body, lang);
    translateFormValues(document.body, lang);
    translateSelectOptions(document.body, lang);
    trackedCharts.forEach(chart => translateChart(chart, lang));
    translating = false;
  }

  const baseTitle = document.title;

  window.AGridI18n = {
    setLang(lang) {
      const next = languages[lang] ? lang : 'it';
      localStorage.setItem('agridLang', next);
      translate(next);
      document.dispatchEvent(new CustomEvent('agrid:lang', { detail: { lang: next } }));
    },
    getLang() {
      return localStorage.getItem('agridLang') || 'it';
    },
    translate,
    t(text, lang) {
      return translateString(text, lang || this.getLang());
    }
  };

  installChartHook();

  document.addEventListener('DOMContentLoaded', () => {
    patchCharts();
    translate(window.AGridI18n.getLang());
    observer = new MutationObserver(() => {
      if (translating) return;
      window.requestAnimationFrame(() => translate(window.AGridI18n.getLang()));
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  });
  document.addEventListener('agrid:lang', () => trackedCharts.forEach(chart => translateChart(chart, window.AGridI18n.getLang())));
})();
