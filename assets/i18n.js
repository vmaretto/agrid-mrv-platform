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
    ['Genera codice', 'Generate code', 'Gerar código', 'إنشاء رمز']
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
  const skipTags = new Set(['SCRIPT', 'STYLE', 'CODE', 'PRE', 'NOSCRIPT']);
  let translating = false;
  let observer;

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

  document.addEventListener('DOMContentLoaded', () => {
    translate(window.AGridI18n.getLang());
    observer = new MutationObserver(() => {
      if (translating) return;
      window.requestAnimationFrame(() => translate(window.AGridI18n.getLang()));
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  });
})();
