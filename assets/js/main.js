/* RELICARIO — interactions + trilingual copy (ES / EN / ZH)
   ES is the source language and lives in index.html as fallback.
   To edit copy: change the string here AND the matching data-i18n
   node in index.html (or just here once JS is guaranteed to run). */

(function () {
  'use strict';

  var I18N = {
    es: {
      skip: 'Saltar a la colección',
      topbar: 'Joyería con vida anterior · Envíos a toda Europa · Recogida en Madrid',
      menu: 'Menú',
      nav_manifesto: 'Manifiesto',
      nav_collection: 'La selección',
      nav_workshop: 'El taller',
      nav_opening: 'Apertura en Madrid',
      hero_eyebrow: 'Colección inaugural — 9 piezas',
      hero_l1: 'Cada joya tuvo',
      hero_l2: 'una vida antes',
      hero_l3: 'que la tuya.',
      hero_lead: 'Piezas de segunda mano seleccionadas de una en una: firmadas, grabadas, con el desgaste justo. Cuando eliges una, continúas su historia.',
      hero_cta1: 'Ver la selección',
      hero_cta2: 'Avísame de la apertura',
      scroll: 'Sigue',
      manifesto_kicker: 'Manifiesto',
      manifesto_dropcap: 'N',
      manifesto_lead: 'o fabricamos nada. Buscamos joyas que ya existían —en cajas de reloj, en herencias, en mercados— y nos quedamos solo con las que tienen carácter: un sello gastado, una inscripción, un cierre de otra época.',
      manifesto_p2: 'Cada pieza llega con su ficha: de dónde viene, de qué década es y qué le hemos hecho para devolverla a la vida. Nada se pule hasta borrar su historia.',
      collection_title: 'La selección',
      collection_count: '9 piezas',
      collection_note: 'se renueva cada semana',
      filter_all: 'Todo',
      filter_rings: 'Anillos',
      filter_earrings: 'Pendientes',
      filter_pendants: 'Colgantes',
      filter_brooches: 'Broches',
      filter_bracelets: 'Pulseras',
      from: 'desde',
      empty: 'No hay piezas de este tipo por ahora.',
      p1_name: 'Anillo sello «Bonita»',        p1_prov: 'España, años 40 · grabado a mano',
      p2_name: 'Colgante cartucho «Amore»',    p2_prov: 'Italia, años 50 · oro laminado',
      p3_name: 'Anillo firma «Amore»',         p3_prov: 'Francia, años 60 · sello ovalado',
      p4_name: 'Pendientes «Eira»',            p4_prov: 'España, años 70 · gancho largo',
      p5_name: 'Pendiente individual «Dafne»', p5_prov: 'c. 1930 · diamante talla antigua',
      p6_name: 'Pendientes «Estrat»',          p6_prov: 'Taller de Barcelona · plata oxidada',
      p7_name: 'Broche camafeo',               p7_prov: 'Alemania, s. XIX · concha tallada',
      p8_name: 'Gargantilla de perla barroca', p8_prov: 'Años 50 · perla de río',
      p9_name: 'Pulsera esclava grabada',      p9_prov: 'España, años 40 · cierre de lengüeta',
      workshop_kicker: 'El taller',
      workshop_headline: 'Restauramos sin borrar.',
      workshop_p1: 'Trabajamos con un taller de Madrid especializado en joyería antigua: baño de oro donde hace falta, cierres nuevos, perlas reensartadas. El desgaste que cuenta algo se queda.',
      workshop_p2: 'Si buscas una pieza concreta —un sello con iniciales, un luto, un anillo de pedida de época— podemos rastrearla por ti.',
      workshop_cta: 'Escríbenos',
      workshop_caption: 'Selección de febrero · sin retocar',
      opening_kicker: 'Próximamente',
      opening_headline: 'El taller abre en Madrid',
      opening_lead: 'Estamos montando una tienda-taller en un centro de diseño de Madrid. Dirección y fecha, muy pronto. Déjanos tu correo y serás de los primeros en entrar.',
      email_label: 'Correo electrónico',
      email_ph: 'tu@correo.com',
      signup_btn: 'Avísame',
      opening_fine: 'Un solo correo cuando abramos. Sin newsletter, sin reenvíos.',
      msg_ok: 'Gracias. Te escribimos cuando abramos.',
      msg_err: 'Escribe un correo válido, por favor.',
      footer_tag: 'Joyería con vida anterior'
    },

    en: {
      skip: 'Skip to the collection',
      topbar: 'Jewellery with a past life · Shipping across Europe · Pickup in Madrid',
      menu: 'Menu',
      nav_manifesto: 'Manifesto',
      nav_collection: 'The selection',
      nav_workshop: 'The workshop',
      nav_opening: 'Opening in Madrid',
      hero_eyebrow: 'Opening collection — 9 pieces',
      hero_l1: 'Every piece had',
      hero_l2: 'a life before',
      hero_l3: 'it met you.',
      hero_lead: 'Second-hand jewellery chosen one piece at a time: signed, engraved, worn just enough. Choose one and you carry its story forward.',
      hero_cta1: 'See the selection',
      hero_cta2: 'Tell me when it opens',
      scroll: 'More',
      manifesto_kicker: 'Manifesto',
      manifesto_dropcap: 'W',
      manifesto_lead: 'e make nothing. We look for jewellery that already existed — in watch boxes, in inheritances, in flea markets — and keep only the pieces with character: a worn signet, an inscription, a clasp from another era.',
      manifesto_p2: 'Each piece arrives with its record: where it came from, which decade it is, and what we did to bring it back. Nothing is polished until its history disappears.',
      collection_title: 'The selection',
      collection_count: '9 pieces',
      collection_note: 'refreshed weekly',
      filter_all: 'All',
      filter_rings: 'Rings',
      filter_earrings: 'Earrings',
      filter_pendants: 'Pendants',
      filter_brooches: 'Brooches',
      filter_bracelets: 'Bracelets',
      from: 'from',
      empty: 'No pieces of this kind right now.',
      p1_name: '"Bonita" signet ring',       p1_prov: 'Spain, 1940s · hand-engraved',
      p2_name: '"Amore" cartouche pendant',  p2_prov: 'Italy, 1950s · rolled gold',
      p3_name: '"Amore" signature ring',     p3_prov: 'France, 1960s · oval signet',
      p4_name: '"Eira" earrings',            p4_prov: 'Spain, 1970s · long hook',
      p5_name: '"Dafne" single earring',     p5_prov: 'c. 1930 · old-cut diamond',
      p6_name: '"Estrat" earrings',          p6_prov: 'Barcelona workshop · oxidised silver',
      p7_name: 'Cameo brooch',               p7_prov: 'Germany, 19th c. · carved shell',
      p8_name: 'Baroque pearl choker',       p8_prov: '1950s · river pearl',
      p9_name: 'Engraved bangle',            p9_prov: 'Spain, 1940s · tongue clasp',
      workshop_kicker: 'The workshop',
      workshop_headline: 'We restore without erasing.',
      workshop_p1: 'We work with a Madrid workshop that specialises in antique jewellery: gold plating where needed, new clasps, re-strung pearls. Wear that means something stays.',
      workshop_p2: 'Looking for something specific — an initialled signet, a mourning piece, a period engagement ring? We can track it down for you.',
      workshop_cta: 'Write to us',
      workshop_caption: 'February selection · untouched',
      opening_kicker: 'Coming soon',
      opening_headline: 'The workshop opens in Madrid',
      opening_lead: 'We are setting up a shop-workshop inside a Madrid design centre. Address and date, very soon. Leave your email and be among the first through the door.',
      email_label: 'Email address',
      email_ph: 'you@email.com',
      signup_btn: 'Notify me',
      opening_fine: 'One email when we open. No newsletter, no forwarding.',
      msg_ok: 'Thank you. We will write when we open.',
      msg_err: 'Please enter a valid email.',
      footer_tag: 'Jewellery with a past life'
    },

    zh: {
      skip: '跳到藏品',
      topbar: '有前世的首饰 · 欧洲全境配送 · 马德里可自取',
      menu: '菜单',
      nav_manifesto: '理念',
      nav_collection: '精选',
      nav_workshop: '工作室',
      nav_opening: '马德里开幕',
      hero_eyebrow: '开幕系列 — 9 件',
      hero_l1: '每一件首饰',
      hero_l2: '在遇见你之前',
      hero_l3: '都有过一生。',
      hero_lead: '二手首饰，一件一件挑选：有落款、有刻字、有恰到好处的磨痕。你选下它，就接着写它的故事。',
      hero_cta1: '查看精选',
      hero_cta2: '开幕时通知我',
      scroll: '继续',
      manifesto_kicker: '理念',
      manifesto_dropcap: '我',
      manifesto_lead: '们不制作任何东西。我们寻找早已存在的首饰——在旧表盒里、在遗物里、在跳蚤市场里——只留下有性格的那些：磨损的印章戒面、一句刻字、来自另一个年代的扣环。',
      manifesto_p2: '每件都附一张卡片：来自何处、属于哪个年代、我们做了什么让它复活。绝不打磨到抹去它的历史。',
      collection_title: '精选',
      collection_count: '9 件',
      collection_note: '每周更新',
      filter_all: '全部',
      filter_rings: '戒指',
      filter_earrings: '耳饰',
      filter_pendants: '吊坠',
      filter_brooches: '胸针',
      filter_bracelets: '手链',
      from: '起',
      empty: '目前没有此类首饰。',
      p1_name: '「Bonita」印章戒指',   p1_prov: '西班牙，1940 年代 · 手工雕刻',
      p2_name: '「Amore」卡图什吊坠',  p2_prov: '意大利，1950 年代 · 包金',
      p3_name: '「Amore」落款戒指',    p3_prov: '法国，1960 年代 · 椭圆戒面',
      p4_name: '「Eira」耳环',         p4_prov: '西班牙，1970 年代 · 长耳钩',
      p5_name: '「Dafne」单只耳饰',    p5_prov: '约 1930 年 · 老式切工钻石',
      p6_name: '「Estrat」耳环',       p6_prov: '巴塞罗那工作室 · 氧化银',
      p7_name: '浮雕贝壳胸针',         p7_prov: '德国，19 世纪 · 手工雕贝',
      p8_name: '巴洛克珍珠短项链',     p8_prov: '1950 年代 · 河珠',
      p9_name: '刻字手镯',             p9_prov: '西班牙，1940 年代 · 舌扣',
      workshop_kicker: '工作室',
      workshop_headline: '修复，但不抹去。',
      workshop_p1: '我们与马德里一家专做古董首饰的工作室合作：需要时补镀金、换新扣环、重新串珠。有意义的磨痕会保留。',
      workshop_p2: '想找特定的一件——带姓名首字母的印章戒、一件丧礼首饰、一枚年代订婚戒——我们可以替你寻找。',
      workshop_cta: '联系我们',
      workshop_caption: '二月精选 · 未修饰',
      opening_kicker: '即将开幕',
      opening_headline: '工作室将在马德里开幕',
      opening_lead: '我们正在马德里一处设计中心筹备店铺兼工作室。地址与日期，很快公布。留下邮箱，第一批进门的人里有你。',
      email_label: '电子邮箱',
      email_ph: 'you@email.com',
      signup_btn: '通知我',
      opening_fine: '开幕时只发一封邮件。没有订阅推送，不转发。',
      msg_ok: '谢谢。开幕时我们会写信给你。',
      msg_err: '请输入有效的邮箱地址。',
      footer_tag: '有前世的首饰'
    }
  };

  var STORE_KEY = 'relicario-lang';
  var current = 'es';

  function readStored() {
    try { return localStorage.getItem(STORE_KEY); } catch (e) { return null; }
  }
  function writeStored(v) {
    try { localStorage.setItem(STORE_KEY, v); } catch (e) {}
  }

  function applyLang(lang) {
    var dict = I18N[lang];
    if (!dict) return;
    current = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-ph');
      if (dict[key] != null) el.setAttribute('placeholder', dict[key]);
    });

    document.querySelectorAll('.lang button').forEach(function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('is-active', on);
      if (on) b.setAttribute('aria-current', 'true');
      else b.removeAttribute('aria-current');
    });

    writeStored(lang);
  }

  function initLang() {
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.addEventListener('click', function () {
        applyLang(b.getAttribute('data-lang'));
      });
    });
    var stored = readStored();
    var initial = stored || (navigator.language || 'es').slice(0, 2).toLowerCase();
    if (!I18N[initial]) initial = 'es';
    applyLang(initial);
  }

  function initMenu() {
    var btn = document.querySelector('.menu-btn');
    var nav = document.getElementById('site-nav');
    if (!btn || !nav) return;
    btn.addEventListener('click', function () {
      var open = nav.hasAttribute('hidden');
      if (open) nav.removeAttribute('hidden');
      else nav.setAttribute('hidden', '');
      btn.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.setAttribute('hidden', '');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function initFilters() {
    var chips = document.querySelectorAll('.chip');
    var cards = document.querySelectorAll('#grid .card');
    var empty = document.querySelector('.grid-empty');
    if (!chips.length) return;

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var f = chip.getAttribute('data-filter');
        chips.forEach(function (c) { c.classList.toggle('is-active', c === chip); });
        var shown = 0;
        cards.forEach(function (card) {
          var match = f === 'all' || card.getAttribute('data-category') === f;
          card.hidden = !match;
          if (match) shown++;
        });
        if (empty) empty.hidden = shown !== 0;
      });
    });
  }

  function initForm() {
    var form = document.getElementById('signup');
    var input = document.getElementById('email');
    var msg = document.getElementById('formMsg');
    if (!form || !input || !msg) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
      msg.textContent = I18N[current][ok ? 'msg_ok' : 'msg_err'];
      msg.classList.toggle('is-error', !ok);
      if (ok) {
        form.reset();
        // TODO: connect to a form backend (Formspree / Buttondown / Mailchimp).
      } else {
        input.focus();
      }
    });
  }

  function initReveal() {
    if (!('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var items = document.querySelectorAll('.card, .manifesto-body, .workshop-copy, .opening-inner');
    items.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(18px)';
      el.style.transition = 'opacity .7s ease, transform .7s ease';
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.style.opacity = '1';
          en.target.style.transform = 'none';
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var y = document.getElementById('year');
    if (y) y.textContent = String(new Date().getFullYear());
    initLang();
    initMenu();
    initFilters();
    initForm();
    initReveal();
  });
})();
