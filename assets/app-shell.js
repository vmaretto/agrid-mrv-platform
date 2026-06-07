(function () {
  const labels = {
    it: { dashboard: 'Dashboard', farmer: 'Farmer', guide: 'Guida', map: 'Mappa' },
    en: { dashboard: 'Dashboard', farmer: 'Farmer', guide: 'Guide', map: 'Map' },
    pt: { dashboard: 'Painel', farmer: 'Produtor', guide: 'Guia', map: 'Mapa' },
    ar: { dashboard: 'لوحة التحكم', farmer: 'المزارع', guide: 'الدليل', map: 'الخريطة' }
  };

  function makeLink(href, key) {
    const a = document.createElement('a');
    a.href = href;
    a.dataset.shellKey = key;
    return a;
  }

  function initShell() {
    if (document.getElementById('globalShell')) return;
    const shell = document.createElement('div');
    shell.id = 'globalShell';
    shell.className = 'global-shell';
    shell.innerHTML = '<div class="global-links"></div><div class="lang-switch"><button data-lang="it">IT</button><button data-lang="en">EN</button><button data-lang="pt">PT</button><button data-lang="ar">AR</button></div>';
    const links = shell.querySelector('.global-links');
    links.appendChild(makeLink('/', 'dashboard'));
    links.appendChild(makeLink('/farmer/', 'farmer'));
    links.appendChild(makeLink('/guide/', 'guide'));
    links.appendChild(makeLink('/app/map.html', 'map'));
    document.body.appendChild(shell);

    const setActive = () => {
      const lang = window.AGridI18n ? window.AGridI18n.getLang() : 'it';
      const copy = labels[lang] || labels.it;
      shell.querySelectorAll('[data-shell-key]').forEach(link => {
        link.textContent = copy[link.dataset.shellKey] || labels.it[link.dataset.shellKey];
      });
      shell.querySelectorAll('[data-lang]').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
    };
    shell.querySelectorAll('[data-lang]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (window.AGridI18n) window.AGridI18n.setLang(btn.dataset.lang);
        setActive();
      });
    });
    document.addEventListener('agrid:lang', setActive);
    setActive();
  }

  document.addEventListener('DOMContentLoaded', initShell);
})();
