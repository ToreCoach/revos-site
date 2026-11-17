/* REVOS – consenso cookie + eventi per Google Tag Manager / GA4.
   Nessun dato viene inviato e GTM non viene nemmeno caricato finché l'utente non accetta i cookie di analisi. */
(function () {
  'use strict';
  var GTM_ID = 'GTM-PNLVLXNK', KEY = 'rv-consent', KEYT = 'rv-consent-t', DURATA = 180 * 86400000;
  var L = (document.documentElement.lang || 'en').slice(0, 2);
  var TXT = {
    en: ['We use analytics cookies to understand how the site is used and improve it. You can accept or reject them at any time.', 'Accept', 'Reject', 'Privacy & cookies', 'Cookie settings'],
    it: ['Usiamo cookie di analisi per capire come viene usato il sito e migliorarlo. Puoi accettarli o rifiutarli in qualsiasi momento.', 'Accetta', 'Rifiuta', 'Privacy e cookie', 'Impostazioni cookie'],
    es: ['Usamos cookies de analítica para entender cómo se usa el sitio y mejorarlo. Puedes aceptarlas o rechazarlas en cualquier momento.', 'Aceptar', 'Rechazar', 'Privacidad y cookies', 'Configuración de cookies'],
    fr: ["Nous utilisons des cookies d'analyse pour comprendre l'usage du site et l'améliorer. Vous pouvez les accepter ou les refuser à tout moment.", 'Accepter', 'Refuser', 'Confidentialité et cookies', 'Paramètres des cookies'],
    de: ['Wir verwenden Analyse-Cookies, um zu verstehen, wie die Website genutzt wird, und sie zu verbessern. Sie können sie jederzeit akzeptieren oder ablehnen.', 'Akzeptieren', 'Ablehnen', 'Datenschutz & Cookies', 'Cookie-Einstellungen'],
    pt: ['Utilizamos cookies de análise para perceber como o site é usado e melhorá-lo. Pode aceitá-los ou recusá-los a qualquer momento.', 'Aceitar', 'Recusar', 'Privacidade e cookies', 'Definições de cookies'],
    hr: ['Koristimo analitičke kolačiće kako bismo razumjeli kako se stranica koristi i poboljšali je. Možete ih prihvatiti ili odbiti u bilo kojem trenutku.', 'Prihvati', 'Odbij', 'Privatnost i kolačići', 'Postavke kolačića'],
    pl: ['Używamy plików cookie analitycznych, aby zrozumieć, jak korzystasz ze strony, i ją ulepszać. Możesz je zaakceptować lub odrzucić w dowolnym momencie.', 'Akceptuję', 'Odrzucam', 'Prywatność i cookies', 'Ustawienia plików cookie']
  };
  var T = TXT[L] || TXT.en;
  var PRIV = (L === 'en' ? '/' : '/' + L + '/') + 'privacy/';
  var dl = window.dataLayer = window.dataLayer || [];
  function gtag() { dl.push(arguments); }
  var granted = false, gtmLoaded = false;

  function stored() {
    try {
      var v = localStorage.getItem(KEY), t = +localStorage.getItem(KEYT) || 0;
      if (v && Date.now() - t > DURATA) { localStorage.removeItem(KEY); localStorage.removeItem(KEYT); return null; }
      return v;
    } catch (e) { return null; }
  }
  function save(v) { try { localStorage.setItem(KEY, v); localStorage.setItem(KEYT, String(Date.now())); } catch (e) {} }

  function loadGtm() {
    if (gtmLoaded) return; gtmLoaded = true;
    dl.push({ page_language: L });
    dl.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    var s = document.createElement('script'); s.async = true; s.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_ID;
    document.head.appendChild(s);
  }
  function apply(v) {
    granted = v === 'granted';
    gtag('consent', 'update', { analytics_storage: granted ? 'granted' : 'denied' });
    if (granted) loadGtm();
  }
  /* evento verso il dataLayer: solo con consenso */
  function ev(name, params) {
    if (!granted) return;
    var o = { event: name, page_language: L };
    for (var k in params) if (Object.prototype.hasOwnProperty.call(params, k)) o[k] = params[k];
    dl.push(o);
  }
  window.rvEvent = ev;

  /* banner */
  var bar = null;
  function css() {
    if (document.getElementById('rv-cc-css')) return;
    var s = document.createElement('style'); s.id = 'rv-cc-css';
    s.textContent = '#rv-cc{position:fixed;z-index:2147483000;left:16px;right:16px;bottom:16px;max-width:760px;margin:0 auto;background:#0b1d3a;color:#eef3ff;border:1px solid rgba(139,252,3,.35);border-radius:16px;box-shadow:0 18px 60px rgba(0,0,0,.55);padding:18px 20px;display:flex;flex-wrap:wrap;gap:14px 18px;align-items:center;font:400 15px/1.5 Barlow,system-ui,sans-serif}' +
      '#rv-cc p{margin:0;flex:1 1 320px;color:#c9d4ee}#rv-cc a{color:#8bfc03}' +
      '#rv-cc .b{display:flex;gap:10px;flex:0 0 auto}#rv-cc button{font:700 15px "Barlow Condensed",Barlow,system-ui,sans-serif;letter-spacing:.08em;text-transform:uppercase;border-radius:10px;padding:11px 22px;cursor:pointer;min-width:112px;border:1px solid rgba(120,190,255,.4);background:transparent;color:#eef3ff}' +
      '#rv-cc button.y{background:linear-gradient(180deg,#8bfc03,#5ecb00);border-color:transparent;color:#04220f}#rv-cc button:focus-visible{outline:2px solid #22d3ee;outline-offset:2px}' +
      '@media(max-width:520px){#rv-cc .b{width:100%}#rv-cc button{flex:1}}';
    document.head.appendChild(s);
  }
  function hide() { if (bar && bar.parentNode) bar.parentNode.removeChild(bar); bar = null; }
  function show() {
    css(); hide();
    bar = document.createElement('div'); bar.id = 'rv-cc'; bar.setAttribute('role', 'dialog'); bar.setAttribute('aria-label', T[4]);
    bar.innerHTML = '<p>' + T[0] + ' <a href="' + PRIV + '">' + T[3] + '</a></p><div class="b"><button type="button" class="n">' + T[2] + '</button><button type="button" class="y">' + T[1] + '</button></div>';
    bar.querySelector('.y').onclick = function () { save('granted'); apply('granted'); hide(); ev('consent_choice', { consent: 'granted' }); };
    bar.querySelector('.n').onclick = function () { save('denied'); apply('denied'); hide(); };
    document.body.appendChild(bar);
  }
  window.rvCookieSettings = show;

  /* link Privacy / Impostazioni cookie nel footer */
  function footerLinks() {
    var f = document.querySelector('footer .fl'); if (!f || f.querySelector('[data-rv-priv]')) return;
    var a = document.createElement('a'); a.href = PRIV; a.textContent = T[3]; a.setAttribute('data-rv-priv', '1');
    var b = document.createElement('a'); b.href = '#'; b.textContent = T[4]; b.addEventListener('click', function (e) { e.preventDefault(); show(); });
    var TT = {en:'Terms of use',it:'Termini di utilizzo',es:'Términos de uso',fr:'Conditions d’utilisation',de:'Nutzungsbedingungen',pt:'Termos de utilização',hr:'Uvjeti korištenja',pl:'Warunki korzystania'};
    var c = document.createElement('a'); c.href = PRIV.replace(/privacy\/?$/, 'terms/'); c.textContent = TT[L] || TT.en; c.setAttribute('data-rv-terms', '1');
    f.appendChild(a); f.appendChild(c); f.appendChild(b);
  }

  /* click: prova gratuita / download */
  var PLAT = { dlMacArm: 'mac_arm', dlMacIntel: 'mac_intel', dlWin: 'windows', dlLinux: 'linux' };
  function where(el) {
    if (el.closest('nav')) return 'nav'; if (el.closest('.vcta')) return 'video_cta'; if (el.closest('.hero')) return 'hero';
    if (el.closest('.dl')) return 'download_section'; if (el.closest('footer')) return 'footer'; return 'page';
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a'); if (!a) return;
    if (a.id && PLAT[a.id]) { ev('download_click', { platform: PLAT[a.id], location: where(a) }); return; }
    var h = a.getAttribute('href') || '';
    if (/#download$/.test(h)) ev('trial_cta_click', { location: where(a), cta_text: (a.textContent || '').trim().slice(0, 60) });
  }, true);

  /* video YouTube: start, 25/50/75 %, fine */
  var ytState = 0, ytQ = [];
  function ytReady(fn) {
    if (window.YT && YT.Player) return fn();
    ytQ.push(fn);
    if (ytState) return; ytState = 1;
    var prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = function () { if (prev) try { prev(); } catch (e) {} ytQ.splice(0).forEach(function (f) { f(); }); };
    var s = document.createElement('script'); s.src = 'https://www.youtube.com/iframe_api'; document.head.appendChild(s);
  }
  window.rvTrackVideo = function (iframe, id, title, source) {
    if (!granted || !iframe) return;
    var base = { video_id: id, video_title: title || '', video_provider: 'youtube', video_source: source || '' };
    var started = false, done = {}, timer = null, player = null;
    function p(name, extra) { var o = {}, k; for (k in base) o[k] = base[k]; for (k in extra) o[k] = extra[k]; ev(name, o); }
    function tick() {
      if (!document.body.contains(iframe)) { clearInterval(timer); return; }
      try {
        var d = player.getDuration(), c = player.getCurrentTime(); if (!d) return;
        var pc = Math.floor(c / d * 100);
        [25, 50, 75].forEach(function (m) { if (pc >= m && !done[m]) { done[m] = 1; p('video_progress', { video_percent: m }); } });
      } catch (e) {}
    }
    function onState(st) {
      if (st === 1) { if (!started) { started = true; p('video_start', { video_percent: 0 }); } if (!timer) timer = setInterval(tick, 1000); }
      else if (st === 0) { if (!done[100]) { done[100] = 1; p('video_complete', { video_percent: 100 }); } clearInterval(timer); timer = null; }
    }
    ytReady(function () {
      player = new YT.Player(iframe, { events: {
        onReady: function () { try { if (player.getPlayerState() === 1) onState(1); } catch (e) {} },
        onStateChange: function (e) { onState(e.data); } } });
    });
  };

  function init() {
    footerLinks();
    var v = stored();
    if (v === 'granted' || v === 'denied') apply(v); else show();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
