(function () {
  const roleDashboards = {
    farmer: '/farmer/',
    admin: '/admin/',
    stakeholder: '/stakeholder/'
  };

  const shellCopy = {
    it: { back: 'Indietro', dashboard: 'Dashboard', guide: 'Guida', map: 'Mappa', role: 'Cambia ruolo' },
    en: { back: 'Back', dashboard: 'Dashboard', guide: 'Guide', map: 'Map', role: 'Switch role' },
    pt: { back: 'Voltar', dashboard: 'Painel', guide: 'Guia', map: 'Mapa', role: 'Trocar função' },
    ar: { back: 'رجوع', dashboard: 'لوحة التحكم', guide: 'الدليل', map: 'الخريطة', role: 'تغيير الدور' }
  };

  const languages = {
    it: { flag: '🇮🇹', label: 'Italiano' },
    en: { flag: '🇬🇧', label: 'English' },
    pt: { flag: '🇵🇹', label: 'Português' },
    ar: { flag: '🇸🇦', label: 'العربية' }
  };

  function detectRole() {
    const path = window.location.pathname;
    if (path.startsWith('/admin')) return 'admin';
    if (path.startsWith('/stakeholder')) return 'stakeholder';
    if (path.startsWith('/farmer') || path.startsWith('/app')) return 'farmer';
    return localStorage.getItem('agridRole') || 'farmer';
  }

  function dashboardHref() {
    const role = detectRole();
    localStorage.setItem('agridRole', role);
    return roleDashboards[role] || '/';
  }

  function makeAction(kind, href) {
    const el = href ? document.createElement('a') : document.createElement('button');
    if (href) el.href = href;
    el.dataset.shellKey = kind;
    el.className = `shell-action shell-${kind}`;
    return el;
  }

  function goBack() {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }
    window.location.href = dashboardHref();
  }

  function initShell() {
    if (document.getElementById('globalShell')) return;
    const shell = document.createElement('nav');
    shell.id = 'globalShell';
    shell.className = 'global-shell';
    shell.setAttribute('aria-label', 'A-Grid global navigation');

    const back = makeAction('back');
    back.type = 'button';
    back.addEventListener('click', goBack);

    const dashboard = makeAction('dashboard', dashboardHref());
    const guide = makeAction('guide', '/guide/');
    const map = makeAction('map', '/app/map.html');
    const role = makeAction('role', '/');

    const selectWrap = document.createElement('label');
    selectWrap.className = 'language-select';
    selectWrap.innerHTML = '<span class="language-current" aria-hidden="true"></span><select aria-label="Language selector"></select>';
    const select = selectWrap.querySelector('select');
    Object.entries(languages).forEach(([code, meta]) => {
      const option = document.createElement('option');
      option.value = code;
      option.textContent = `${meta.flag} ${meta.label}`;
      select.appendChild(option);
    });
    select.addEventListener('change', () => {
      if (window.AGridI18n) window.AGridI18n.setLang(select.value);
      render();
    });

    const primary = document.createElement('div');
    primary.className = 'global-links';
    primary.append(back, dashboard, guide, map, role);
    shell.append(primary, selectWrap);
    document.body.appendChild(shell);

    function render() {
      const lang = window.AGridI18n ? window.AGridI18n.getLang() : 'it';
      const copy = shellCopy[lang] || shellCopy.it;
      dashboard.href = dashboardHref();
      shell.querySelectorAll('[data-shell-key]').forEach(item => {
        item.textContent = copy[item.dataset.shellKey] || shellCopy.it[item.dataset.shellKey];
      });
      select.value = lang;
      const meta = languages[lang] || languages.it;
      selectWrap.querySelector('.language-current').textContent = `${meta.flag} ${meta.label}`;
    }

    document.addEventListener('agrid:lang', render);
    render();
  }

  document.addEventListener('DOMContentLoaded', initShell);
})();
