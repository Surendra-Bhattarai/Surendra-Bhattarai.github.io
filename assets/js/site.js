/* Site behaviour: theme, nav, hero animations, content rendering, lightbox. */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var SITE = window.SITE || { fieldNotes: [], conversations: [], gallery: [] };

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function slug(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-'); }
  // Optimized photos in assets/img/web/ have a smaller "-sm" copy for grids.
  function small(src) { return /assets\/img\/web\/[^/]+\.jpg$/.test(src) && !/-sm\.jpg$/.test(src) ? src.replace(/\.jpg$/, '-sm.jpg') : src; }

  /* ---------------- theme ---------------- */
  function currentTheme() {
    var t = root.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  $('#theme-toggle').addEventListener('click', function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  /* ---------------- nav ---------------- */
  var nav = $('#nav');
  var links = $('#nav-links');
  var menuBtn = $('#menu-btn');
  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  menuBtn.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
  });
  links.addEventListener('click', function (e) {
    if (e.target.closest('a')) { links.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
  });

  if ('IntersectionObserver' in window) {
    var navMap = {};
    links.querySelectorAll('a').forEach(function (a) { navMap[a.getAttribute('href').slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.querySelectorAll('a').forEach(function (a) { a.classList.remove('active'); });
        if (navMap[en.target.id]) navMap[en.target.id].classList.add('active');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { spy.observe(s); });
  }

  /* ---------------- lightbox ---------------- */
  var lb = $('#lightbox'), lbImg = $('img', lb), lbCap = $('figcaption', lb);
  var lbList = [], lbIdx = 0, lastFocus = null;
  function lbShow(i) {
    lbIdx = (i + lbList.length) % lbList.length;
    lbImg.src = lbList[lbIdx].src;
    lbImg.alt = lbList[lbIdx].caption || '';
    lbCap.textContent = lbList[lbIdx].caption || '';
    var multi = lbList.length > 1;
    $('.lb-prev', lb).hidden = !multi;
    $('.lb-next', lb).hidden = !multi;
  }
  function openLightbox(list, i) {
    lbList = list; lastFocus = document.activeElement;
    lbShow(i); lb.hidden = false; document.body.style.overflow = 'hidden';
    $('.lb-close', lb).focus();
  }
  function closeLightbox() {
    lb.hidden = true; document.body.style.overflow = ''; lbImg.removeAttribute('src');
    if (lastFocus) lastFocus.focus();
  }
  $('.lb-close', lb).addEventListener('click', closeLightbox);
  $('.lb-prev', lb).addEventListener('click', function () { lbShow(lbIdx - 1); });
  $('.lb-next', lb).addEventListener('click', function () { lbShow(lbIdx + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) closeLightbox(); });
  document.addEventListener('keydown', function (e) {
    if (lb.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lbShow(lbIdx - 1);
    if (e.key === 'ArrowRight') lbShow(lbIdx + 1);
  });

  /* ---------------- filters (shared) ---------------- */
  function buildFilters(container, items, key, onChange) {
    var counts = {};
    items.forEach(function (it) { counts[it[key]] = (counts[it[key]] || 0) + 1; });
    var tags = Object.keys(counts);
    if (tags.length < 2) { container.hidden = true; return; }
    var html = '<button type="button" aria-pressed="true" data-f="*">All<span class="count">' + items.length + '</span></button>';
    tags.forEach(function (t) {
      html += '<button type="button" aria-pressed="false" data-f="' + esc(t) + '">' + esc(t) + '<span class="count">' + counts[t] + '</span></button>';
    });
    container.innerHTML = html;
    container.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      container.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
      onChange(b.getAttribute('data-f'));
    });
  }

  /* ---------------- field notes ---------------- */
  var notesEl = $('#notes');
  if (notesEl) {
    notesEl.innerHTML = SITE.fieldNotes.map(function (n, i) {
      var imgs = n.images || [];
      var first = imgs[0] || { src: '', caption: '' };
      var thumbs = imgs.length > 1 ? '<div class="note-thumbs">' + imgs.map(function (im, j) {
        return '<button type="button" data-j="' + j + '" aria-current="' + (j === 0) + '" aria-label="Show photo ' + (j + 1) + '"><img src="' + esc(small(im.src)) + '" alt="" loading="lazy"></button>';
      }).join('') + '</div>' : '';
      var linksHtml = (n.links || []).length ? '<div class="note-links">' + n.links.map(function (l) {
        return '<a class="btn" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + ' <i class="bx bx-link-external"></i></a>';
      }).join('') + '</div>' : '';
      return '<article class="note reveal" data-i="' + i + '">' +
        '<div class="note-media">' +
          '<button type="button" class="note-main" aria-label="Enlarge photo"><img src="' + esc(small(first.src)) + '" alt="' + esc(first.caption) + '" loading="lazy"><span class="zoom"><i class="bx bx-expand-alt"></i></span></button>' +
          thumbs +
        '</div>' +
        '<div class="note-text">' +
          '<div class="note-meta"><span class="type-chip t-' + slug(n.type) + '">' + esc(n.type) + '</span><span class="note-date">' + esc(n.date) + '</span></div>' +
          '<h3>' + esc(n.title) + '</h3>' +
          '<p class="note-place"><i class="bx bx-map"></i>' + esc(n.place) + '</p>' +
          (n.role ? '<p class="note-role"><span>Role</span>' + esc(n.role) + '</p>' : '') +
          '<p class="note-body">' + esc(n.body) + '</p>' +
          linksHtml +
        '</div>' +
      '</article>';
    }).join('');

    notesEl.addEventListener('click', function (e) {
      var art = e.target.closest('.note'); if (!art) return;
      var n = SITE.fieldNotes[+art.getAttribute('data-i')];
      var mainImg = $('.note-main img', art);
      var thumb = e.target.closest('.note-thumbs button');
      if (thumb) {
        var j = +thumb.getAttribute('data-j');
        mainImg.src = small(n.images[j].src); mainImg.alt = n.images[j].caption || '';
        art.setAttribute('data-j', j);
        art.querySelectorAll('.note-thumbs button').forEach(function (b) { b.setAttribute('aria-current', b === thumb); });
        return;
      }
      if (e.target.closest('.note-main')) openLightbox(n.images, +(art.getAttribute('data-j') || 0));
    });
  }

  /* ---------------- conversations ---------------- */
  var convosEl = $('#convos');
  function initials(name) {
    return String(name).split(/\s+/).filter(Boolean).slice(0, 2).map(function (w) { return w[0].toUpperCase(); }).join('');
  }
  var WAVE = '<svg class="wave" viewBox="0 0 400 28" preserveAspectRatio="none" aria-hidden="true"><path d="' + (function () {
    var d = 'M0 14'; for (var x = 4; x <= 400; x += 4) { var a = Math.sin(x * 0.09) * Math.sin(x * 0.013) * 11 * Math.exp(-Math.pow((x - 200) / 140, 2)); d += ' L' + x + ' ' + (14 - a).toFixed(1); }
    return d; })() + '" fill="none" stroke="#f4b860" stroke-width="1.6"/></svg>';
  if (convosEl) {
    var convos = SITE.conversations || [];
    if (!convos.length) {
      convosEl.innerHTML = '<p class="empty">Episodes coming soon.</p>';
    } else {
      convosEl.innerHTML = convos.map(function (c) {
        var media = c.image
          ? '<img src="' + esc(c.image) + '" alt="Zoom conversation with ' + esc(c.guest) + '" loading="lazy">'
          : '<div class="placeholder"><span class="initials">' + esc(initials(c.guest)) + '</span>' + WAVE + '</div>';
        var thumb = c.link
          ? '<a class="convo-thumb" href="' + esc(c.link) + '" target="_blank" rel="noopener">' + media + '<span class="play"><i class="bx bx-play"></i> Watch</span></a>'
          : '<div class="convo-thumb">' + media + '</div>';
        var topics = (c.topics || []).length ? '<ul class="chips">' + c.topics.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>' : '';
        return '<article class="convo reveal" data-sector="' + esc(c.sector) + '">' + thumb +
          '<div class="convo-body">' +
            '<div class="convo-top"><span class="sector s-' + slug(c.sector) + '">' + esc(c.sector) + '</span><span class="convo-date">' + esc(c.date) + '</span></div>' +
            '<h3>' + esc(c.guest) + '</h3>' +
            '<p class="convo-role">' + esc(c.role) + (c.org ? ' · ' + esc(c.org) : '') + '</p>' +
            '<p class="convo-summary">' + esc(c.summary) + '</p>' +
            topics +
          '</div></article>';
      }).join('');
      buildFilters($('#convo-filters'), convos, 'sector', function (f) {
        convosEl.querySelectorAll('.convo').forEach(function (el) {
          el.hidden = !(f === '*' || el.getAttribute('data-sector') === f);
        });
      });
    }
  }

  /* ---------------- gallery ---------------- */
  var galEl = $('#gallery');
  if (galEl) {
    var gal = SITE.gallery || [];
    var visible = gal.slice();
    galEl.innerHTML = gal.map(function (g, i) {
      return '<figure data-tag="' + esc(g.tag) + '" data-i="' + i + '">' +
        '<button type="button" aria-label="Enlarge: ' + esc(g.caption) + '"><img src="' + esc(small(g.src)) + '" alt="' + esc(g.caption) + '" loading="lazy"></button>' +
        '<figcaption><i class="bx bx-map"></i>' + esc(g.place || g.tag) + '</figcaption></figure>';
    }).join('');
    buildFilters($('#gallery-filters'), gal, 'tag', function (f) {
      visible = [];
      galEl.querySelectorAll('figure').forEach(function (fig) {
        var show = f === '*' || fig.getAttribute('data-tag') === f;
        fig.classList.toggle('hide', !show);
        if (show) visible.push(gal[+fig.getAttribute('data-i')]);
      });
    });
    galEl.addEventListener('click', function (e) {
      var fig = e.target.closest('figure'); if (!fig) return;
      var item = gal[+fig.getAttribute('data-i')];
      openLightbox(visible, visible.indexOf(item));
    });
  }

  /* ---------------- copy email ---------------- */
  document.querySelectorAll('[data-copy]').forEach(function (b) {
    b.addEventListener('click', function () {
      var label = $('span', b);
      function done(msg) { label.textContent = msg; setTimeout(function () { label.textContent = 'Copy'; }, 1600); }
      if (navigator.clipboard) navigator.clipboard.writeText(b.getAttribute('data-copy')).then(function () { done('Copied'); }, function () { done('Press ⌘C'); });
      else done('Press ⌘C');
    });
  });

  var yearEl = $('#year'); if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- reveal on scroll ---------------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------------- hero: starfield + power spectrum ---------------- */
  var hero = $('.hero');
  var heroVisible = true;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (en) { heroVisible = en[0].isIntersecting; }).observe(hero);
  }
  var DPR = Math.min(window.devicePixelRatio || 1, 2);

  // Starfield
  var sf = $('#starfield'), sctx = sf.getContext('2d');
  var stars = [], shooting = null, mx = 0, my = 0;
  function sizeStars() {
    var w = sf.clientWidth, h = sf.clientHeight;
    sf.width = w * DPR; sf.height = h * DPR;
    var n = Math.round(w * h / 4200);
    stars = [];
    for (var i = 0; i < n; i++) {
      var c = Math.random();
      stars.push({
        x: Math.random() * w, y: Math.random() * h,
        r: Math.random() < 0.08 ? 1.1 + Math.random() * 0.9 : 0.3 + Math.random() * 0.8,
        p: Math.random() * Math.PI * 2, s: 0.4 + Math.random() * 1.6,
        z: 0.2 + Math.random() * 0.8,
        col: c < 0.12 ? '244,184,96' : c < 0.3 ? '160,205,255' : '255,255,255'
      });
    }
  }
  function drawStars(t) {
    var w = sf.clientWidth, h = sf.clientHeight;
    sctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    sctx.clearRect(0, 0, w, h);
    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      var a = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(s.p + t * 0.001 * s.s));
      var x = s.x + mx * s.z * 12, y = s.y + my * s.z * 12;
      sctx.beginPath();
      sctx.fillStyle = 'rgba(' + s.col + ',' + (a * (0.4 + s.z * 0.6)).toFixed(3) + ')';
      sctx.arc(x, y, s.r, 0, 6.283);
      sctx.fill();
    }
    // occasional shooting star
    if (!shooting && Math.random() < 0.002) {
      shooting = { x: Math.random() * w * 0.7 + w * 0.2, y: Math.random() * h * 0.35, vx: -6 - Math.random() * 4, vy: 2.5 + Math.random() * 2, life: 1 };
    }
    if (shooting) {
      var g = sctx.createLinearGradient(shooting.x, shooting.y, shooting.x - shooting.vx * 12, shooting.y - shooting.vy * 12);
      g.addColorStop(0, 'rgba(255,255,255,' + shooting.life + ')');
      g.addColorStop(1, 'rgba(255,255,255,0)');
      sctx.strokeStyle = g; sctx.lineWidth = 1.4;
      sctx.beginPath(); sctx.moveTo(shooting.x, shooting.y); sctx.lineTo(shooting.x - shooting.vx * 12, shooting.y - shooting.vy * 12); sctx.stroke();
      shooting.x += shooting.vx; shooting.y += shooting.vy; shooting.life -= 0.018;
      if (shooting.life <= 0) shooting = null;
    }
  }
  hero.addEventListener('mousemove', function (e) {
    var r = hero.getBoundingClientRect();
    mx = (e.clientX - r.left) / r.width - 0.5; my = (e.clientY - r.top) / r.height - 0.5;
  });

  // Power spectrum: background + comb of l=0,1,2 modes under a Gaussian envelope.
  var sp = $('#spectrum'), pctx = sp.getContext('2d');
  var NB = 0, noiseA = [], noiseB = [], noiseT = 0;
  var DNU = 0.072, NUMAX = 0.56, EPS = 0.25, SIG = 0.11, GAM = 0.0035;
  var modes = [];
  (function () {
    for (var n = 0; n < 16; n++) {
      var nu0 = DNU * (n + EPS);
      modes.push({ nu: nu0, h: 1.0, l: 0 });
      modes.push({ nu: nu0 - 0.13 * DNU, h: 0.65, l: 2 });
      modes.push({ nu: nu0 + 0.5 * DNU, h: 1.35, l: 1 });
    }
  })();
  function chi2() { return (-Math.log(Math.random() + 1e-9) - Math.log(Math.random() + 1e-9)) / 2; }
  function sizeSpectrum() {
    var w = sp.clientWidth, h = sp.clientHeight;
    sp.width = w * DPR; sp.height = h * DPR;
    NB = Math.max(200, Math.round(w / 1.6));
    noiseA = []; noiseB = [];
    for (var i = 0; i < NB; i++) { noiseA.push(chi2()); noiseB.push(chi2()); }
  }
  function model(nu, t) {
    var bg = 0.42 / (1 + Math.pow(nu / 0.1, 2)) + 0.05;
    var p = 0, env = 0;
    for (var k = 0; k < modes.length; k++) {
      var m = modes[k], d = nu - m.nu;
      if (Math.abs(d) > 0.03) continue;
      env = Math.exp(-Math.pow(m.nu - NUMAX, 2) / (2 * SIG * SIG));
      var wobble = 1 + 0.25 * Math.sin(t * 0.0011 + k * 1.7);
      p += m.h * env * wobble / (1 + Math.pow(2 * d / GAM, 2));
    }
    return { bg: bg, p: p };
  }
  function drawSpectrum(t) {
    var w = sp.clientWidth, h = sp.clientHeight;
    pctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    pctx.clearRect(0, 0, w, h);
    noiseT += reduceMotion ? 0 : 0.012;
    if (noiseT >= 1) { noiseT = 0; noiseA = noiseB; noiseB = []; for (var q = 0; q < NB; q++) noiseB.push(chi2()); }
    var top = 8, base = h - 2, scale = (base - top) / 1.25;
    var pts = [];
    for (var i = 0; i < NB; i++) {
      var nu = 0.02 + 0.96 * i / (NB - 1);
      var m = model(nu, t);
      var nz = noiseA[i] * (1 - noiseT) + noiseB[i] * noiseT;
      var y = (m.bg + m.p) * (0.55 + 0.45 * nz);
      pts.push([i / (NB - 1) * w, base - Math.min(y, 1.25) * scale]);
    }
    // fill
    var fill = pctx.createLinearGradient(0, top, 0, base);
    fill.addColorStop(0, 'rgba(244,184,96,0.35)');
    fill.addColorStop(1, 'rgba(244,184,96,0)');
    pctx.beginPath(); pctx.moveTo(0, base);
    pts.forEach(function (p) { pctx.lineTo(p[0], p[1]); });
    pctx.lineTo(w, base); pctx.closePath(); pctx.fillStyle = fill; pctx.fill();
    // line
    var stroke = pctx.createLinearGradient(0, 0, w, 0);
    stroke.addColorStop(0, 'rgba(140,200,255,0.55)');
    stroke.addColorStop(0.55, 'rgba(244,184,96,0.95)');
    stroke.addColorStop(1, 'rgba(140,200,255,0.55)');
    pctx.beginPath();
    pts.forEach(function (p, j) { j ? pctx.lineTo(p[0], p[1]) : pctx.moveTo(p[0], p[1]); });
    pctx.strokeStyle = stroke; pctx.lineWidth = 1.2; pctx.stroke();
    // nu_max marker
    var xmax = (NUMAX - 0.02) / 0.96 * w;
    pctx.setLineDash([3, 4]); pctx.strokeStyle = 'rgba(232,236,246,0.35)'; pctx.lineWidth = 1;
    pctx.beginPath(); pctx.moveTo(xmax, top); pctx.lineTo(xmax, base); pctx.stroke(); pctx.setLineDash([]);
    pctx.font = '500 11px "JetBrains Mono", monospace'; pctx.fillStyle = 'rgba(232,236,246,0.7)';
    pctx.fillText('ν', xmax + 6, top + 10);
    pctx.font = '500 8px "JetBrains Mono", monospace';
    pctx.fillText('max', xmax + 14, top + 13);
    pctx.font = '500 11px "JetBrains Mono", monospace';
    // delta-nu bracket between two radial modes left of nu_max
    var n0 = Math.floor(NUMAX / DNU - EPS) - 1;
    var xa = (DNU * (n0 + EPS) - 0.02) / 0.96 * w, xb = (DNU * (n0 + 1 + EPS) - 0.02) / 0.96 * w;
    if (xb - xa > 30) {
      pctx.strokeStyle = 'rgba(140,200,255,0.7)';
      pctx.beginPath(); pctx.moveTo(xa, top + 4); pctx.lineTo(xa, top + 10); pctx.lineTo(xb, top + 10); pctx.lineTo(xb, top + 4); pctx.stroke();
      pctx.fillStyle = 'rgba(140,200,255,0.9)';
      pctx.fillText('Δν', (xa + xb) / 2 - 8, top + 24);
    }
  }

  function resize() { sizeStars(); sizeSpectrum(); drawStars(0); drawSpectrum(0); }
  var rt; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(resize, 150); });
  resize();
  if (!reduceMotion) {
    (function loop(t) {
      if (heroVisible && !document.hidden) { drawStars(t); drawSpectrum(t); }
      requestAnimationFrame(loop);
    })(0);
  }
})();
