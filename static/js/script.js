

  const buttons = document.querySelectorAll('.lang-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });



  // ==========================
  // Traduções
  // ==========================
  const translations = {
    pt: {
      banner_title: 'Seu parceiro confiável em <span>comércio internacional</span>',
      banner_subtitle: 'Conectando mercados globais com eficiência, qualidade e confiança.',
      menu_inicio: 'Início',
      menu_produtos: 'Produtos',
      menu_catalogos: 'Catálogos',
      produtos_nacionais: 'Produtos somente nacionais',
      produtos_internacionais: 'Produtos internacionais',
      ver_tudo: 'Ver tudo',
      sobre_texto: 'A BRIMAC é uma empresa líder no comércio internacional, especializada na exportação de produtos de alta qualidade para diversos mercados ao redor do mundo. Com uma equipe dedicada e uma rede global de parceiros, estamos comprometidos em oferecer soluções eficientes e personalizadas para atender às necessidades dos nossos clientes.',
      map_title: 'PRESENÇA <span>GLOBAL</span>',
      map_text:
        'Nosso alcance internacional mostra os países onde a BRIMAC já vendeu seus produtos. ' +
        'Aqui você pode acompanhar nosso crescimento e presença mundial.',
  
      produtos_nacionais: 'Produtos somente nacionais',
      produtos_internacionais: 'Produtos internacionais',
      ver_tudo: 'Ver tudo',
  
      sobre_texto:
        'A BRIMAC é uma empresa líder no comércio internacional, especializada na exportação ' +
        'de produtos de alta qualidade para diversos mercados ao redor do mundo. ' +
        'Com uma equipe dedicada e uma rede global de parceiros, estamos comprometidos em ' +
        'oferecer soluções eficientes e personalizadas para atender às necessidades dos nossos clientes.',
  
      footer_localizacao: 'Localização',
      footer_contato: 'Contato',
      footer_redes: 'Redes Sociais',
      footer_direitos: '© 2025 BRIMAC. Todos os direitos reservados.'
    },
    es: {
      banner_title: 'Su socio confiable en <span>comercio internacional</span>',
      banner_subtitle: 'Conectando mercados globales con eficiencia, calidad y confianza.',
      menu_inicio: 'Inicio',
      menu_produtos: 'Productos',
      menu_catalogos: 'Catálogos',
      produtos_nacionais: 'Productos solo nacionales',
      produtos_internacionais: 'Productos internacionales',
      ver_tudo: 'Ver todo',
      map_title: 'PRESENCIA <span>GLOBAL</span>',
      map_text:
        'Nuestro alcance internacional muestra los países donde BRIMAC ya ha vendido sus productos. ' +
        'Aquí puede seguir nuestro crecimiento y presencia mundial.',

      produtos_nacionais: 'Productos nacionales',
      produtos_internacionais: 'Productos internacionales',
      ver_tudo: 'Ver todo',

      sobre_texto:
        'BRIMAC es una empresa líder en el comercio internacional, especializada en la exportación ' +
        'de productos de alta calidad a diversos mercados en todo el mundo. ' +
        'Con un equipo dedicado y una red global de socios, estamos comprometidos a ' +
        'ofrecer soluciones eficientes y personalizadas para satisfacer las necesidades de nuestros clientes.',

      footer_localizacao: 'Ubicación',
      footer_contato: 'Contacto',
      footer_redes: 'Redes Sociales',
      footer_direitos: '© 2025 BRIMAC. Todos los derechos reservados.',
  
      sobre_texto: 'BRIMAC es una empresa líder en comercio internacional, especializada en la exportación de productos de alta calidad a diversos mercados alrededor del mundo. Con un equipo dedicado y una red global de socios, estamos comprometidos a ofrecer soluciones eficientes y personalizadas para satisfacer las necesidades de nuestros clientes.'
    }
  };
  
// =============================
// FUNÇÃO DE TROCA DE IDIOMA
// =============================
function setLanguage(lang) {
  if (!translations[lang]) return;

  // salva idioma no cache
  localStorage.setItem('lang', lang);

  // traduz textos
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // botão ativo
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  const activeBtn = document.querySelector(`.lang-btn[onclick*="${lang}"]`);
  if (activeBtn) activeBtn.classList.add('active');
}

// =============================
// CARREGA IDIOMA SALVO
// =============================
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'pt';
  setLanguage(savedLang);
});

document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;

  document.querySelectorAll('.menu-center a').forEach(link => {
    const linkHref = link.getAttribute('href');

    // Página inicial
    if (
      (linkHref === '/' && (currentPath === '/' || currentPath.endsWith('index.html'))) ||
      currentPath.endsWith(linkHref)
    ) {
      link.classList.add('active');
    }
  });
});
