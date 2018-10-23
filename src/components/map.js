/**
 * Created by Y on 2018/9/11.
 */
(function(config) {
  var aa = navigator.userAgent.toLowerCase(),
    ca = window,
    fa = document,
    ga = fa.documentElement;
  function ha(a) {
    return - 1 !== aa.indexOf(a)
  }
  var ia = /([a-z0-9]*\d+[a-z0-9]*)/;
  function qa() {
    var a = ra;
    if (!a) return null;
    var a = a.toLowerCase(),
      b = null;
    if (b = a.match(/angle \((.*)\)/)) a = b[1],
      a = a.replace(/\s*direct3d.*$/, "");
    a = a.replace(/\s*\([^\)]*wddm[^\)]*\)/, "");
    if (0 <= a.indexOf("intel")) {
      b = ["Intel"];
      0 <= a.indexOf("mobile") && b.push("Mobile"); (0 <= a.indexOf("gma") || 0 <= a.indexOf("graphics media accelerator")) && b.push("GMA");
      if (0 <= a.indexOf("haswell")) b.push("Haswell");
      else if (0 <= a.indexOf("ivy")) b.push("HD 4000");
      else if (0 <= a.indexOf("sandy")) b.push("HD 3000");
      else if (0 <= a.indexOf("ironlake")) b.push("HD");
      else {
        0 <= a.indexOf("hd") && b.push("HD");
        var c = a.match(ia);
        c && b.push(c[1].toUpperCase())
      }
      return b = b.join(" ")
    }
    return 0 <= a.indexOf("nvidia") || 0 <= a.indexOf("quadro") || 0 <= a.indexOf("geforce") || 0 <= a.indexOf("nvs") ? (b = ["nVidia"], 0 <= a.indexOf("geforce") && b.push("geForce"), 0 <= a.indexOf("quadro") && b.push("Quadro"), 0 <= a.indexOf("nvs") && b.push("NVS"), a.match(/\bion\b/) && b.push("ION"), a.match(/gtx\b/) ? b.push("GTX") : a.match(/gts\b/) ? b.push("GTS") : a.match(/gt\b/) ? b.push("GT") : a.match(/gs\b/) ? b.push("GS") : a.match(/ge\b/) ? b.push("GE") : a.match(/fx\b/) && b.push("FX"), (c = a.match(ia)) && b.push(c[1].toUpperCase().replace("GS", "")), 0 <= a.indexOf("titan") ? b.push("TITAN") : 0 <= a.indexOf("ti") && b.push("Ti"), b = b.join(" ")) : 0 <= a.indexOf("amd") || 0 <= a.indexOf("ati") || 0 <= a.indexOf("radeon") || 0 <= a.indexOf("firegl") || 0 <= a.indexOf("firepro") ? (b = ["AMD"], 0 <= a.indexOf("mobil") && b.push("Mobility"), c = a.indexOf("radeon"), 0 <= c && b.push("Radeon"), 0 <= a.indexOf("firepro") ? b.push("FirePro") : 0 <= a.indexOf("firegl") && b.push("FireGL"), 0 <= a.indexOf("hd") && b.push("HD"), 0 <= c && (a = a.substring(c)), (c = a.match(ia)) && b.push(c[1].toUpperCase().replace("HD", "")), b = b.join(" ")) : a.substring(0, 100)
  }
  var sa = "microsoft basic render driver;vmware svga 3d;Intel 965GM;Intel B43;Intel G41;Intel G45;Intel G965;Intel GMA 3600;Intel Mobile 4;Intel Mobile 45;Intel Mobile 965".split(";"),
    va = "ActiveXObject" in ca,
    wa = "devicePixelRatio" in ca && 1 < ca.devicePixelRatio || va && "matchMedia" in ca && ca.matchMedia("(min-resolution:144dpi)") && ca.matchMedia("(min-resolution:144dpi)").matches,
    xa = ha("windows nt"),
    ya = -1 !== aa.search(/windows nt [1-5]\./),
    Aa = -1 !== aa.search(/windows nt 5\.[12]/),
    Ca = ya && !Aa;
  ha("windows nt 10");
  var Da = ha("windows phone"),
    Ea = ha("macintosh"),
    Fa = ha("Mb2345Browser"),
    Ha = ha("ipad;") || ha("ipad "),
    Ia = Ha && wa,
    Ja = ha("ipod touch;"),
    Ka = ha("iphone;") || ha("iphone "),
    La = Ka || Ha || Ja,
    Na = La && -1 !== aa.search(/ os [456]_/);
  La && aa.search(/ os [4-8]_/);
  La && aa.search(/ os [78]_/);
  La && ha("os 8_");
  var Oa = La && ha("os 10_"),
    Pa = ha("android"),
    Qa = -1 !== aa.search(/android [123]/);
  ha("android 4");
  Pa && -1 === aa.search(/android [1-4]/) || aa.search(/android 4.4/);
  var Ra = Pa ? "android": La ? "ios": xa ? "windows": Ea ? "mac": "other",
    Ta = va && !ca.XMLHttpRequest,
    Ua = va && !fa.querySelector,
    Wa = va && !fa.addEventListener,
    Xa = va && ha("msie 9"),
    Ya = va && ha("msie 10"),
    Za = va && ha("rv:11"),
    $a = Wa || Xa,
    ab = ha("edge"),
    bb = ha("qtweb"),
    cb = ha("ucbrowser"),
    db = ha("alipay") || Pa && cb,
    eb = ha("miuibrowser"),
    fb = ha("micromessenger"),
    gb = ha("mqqbrowser"),
    hb = ha("baidubrowser"),
    chrome = (ha("chrome") || ha("crios")) && !fb && !hb && !gb && !ab && !eb,
    ib = chrome && ha("chromium"),
    jb = chrome && !ib && 30 < parseInt(aa.split("chrome/")[1]),
    kb = ha("firefox"),
    lb = kb && 27 < parseInt(aa.split("firefox/")[1]),
    mb = (Ea || La) && ha("safari") && ha("version/"),
    nb = Ea && mb && 7 < parseInt(aa.split("version/")[1]),
    ob = La && ha("aliapp"),
    pb = La && (!gb && !cb && !fb && !chrome && !kb && !mb || ob && !cb),
    qb = Pa || La || Da || ha("mobile"),
    rb = ca.navigator && ca.navigator.msPointerEnabled && !!ca.navigator.msMaxTouchPoints,
    sb = ca.navigator && ca.navigator.pointerEnabled && !!ca.navigator.maxTouchPoints,
    tb = sb || rb,
    ub = "ontouchstart" in fa || tb,
    vb = function() {
      if (!qb) return ca.devicePixelRatio || 1;
      var a = document.getElementsByTagName("meta");
      if (window.parent && window.parent !== window) try {
        if (window.parent.location.origin === window.location.origin) a = window.parent.document.getElementsByTagName("meta");
        else return 1
      } catch(b) {
        return 1
      }
      for (var c = a.length - 1; 0 <= c; c -= 1) if ("viewport" === a[c].name) {
        var c = a[c].content,
          d; - 1 !== c.indexOf("initial-scale") && (d = parseFloat(c.split("initial-scale=")[1]));
        a = -1 !== c.indexOf("minimum-scale") ? parseFloat(c.split("minimum-scale=")[1]) : 0;
        c = -1 !== c.indexOf("maximum-scale") ? parseFloat(c.split("maximum-scale=")[1]) : Infinity;
        if (d) {
          if (c >= a) return d > c ? c: d < a ? a: d
        } else if (c >= a) return 1 <= a ? 1 : Math.min(c, 1);
        console && console.log && console.log("viewport\u53c2\u6570\u4e0d\u5408\u6cd5");
        return null
      }
    } (),
    wb = wa && (!qb || !!vb && 1 <= vb),
    xb = va && "transition" in ga.style,
    yb = !!fa.createElementNS && !!fa.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
    zb = fa.createElement("canvas"),
    Ab = !(!zb || !zb.getContext),
    Bb = window.URL || window.webkitURL,
    Cb = !va && !(cb && Pa) && window.Worker && Bb && Bb.createObjectURL && window.Blob,
    Db = "",
    ra = "",
    Eb = 0,
    Fb = window.forceWebGL ? {
      alpha: !0,
      antialias: !0,
      depth: !0
    }: {
      alpha: !0,
      antialias: !0,
      depth: !0,
      failIfMajorPerformanceCaveat: !0,
      preserveDrawingBuffer: !0,
      stencil: !1
    },
    Gb = function() {
      if (!window.forceWebGL && (!Ab || !Cb || pb && ob && !cb)) return ! 1;
      for (var a = ["webgl", "experimental-webgl", "moz-webgl"], b = null, c = 0; c < a.length; c += 1) {
        try {
          b = zb.getContext(a[c], Fb)
        } catch(d) {}
        if (b) {
          if (b.drawingBufferWidth !== zb.width || b.drawingBufferHeight !== zb.height) break;
          if (window.forceWebGL) return Db = a[c],
            Eb = Infinity,
            !0;
          if (!b.getShaderPrecisionFormat || !b.getParameter || !b.getExtension) break;
          Eb = b.getParameter(b.MAX_RENDERBUFFER_SIZE);
          var e = b.getParameter(b.MAX_VIEWPORT_DIMS);
          if (!e) break;
          Eb = Math.min(Eb, e[0], e[1]);
          mb && "mac" === Ra && (Eb = Math.min(Eb, 4096));
          e = Math.max(screen.width, screen.height);
          wb && (e *= Math.min(2, window.devicePixelRatio || 1));
          if (e > Eb) break;
          if (23 > b.getShaderPrecisionFormat(35632, 36338).precision || 23 > b.getShaderPrecisionFormat(35633, 36338).precision) break;
          ra = b.getExtension("WEBGL_debug_renderer_info") ? b.getParameter(37446) : null;
          if ((b = qa()) && -1 !== sa.indexOf(b)) break;
          Db = a[c];
          return ! 0
        }
      }
      return ! 1
    } (),
    Hb = Gb && (jb || lb || nb) && ("mac" === Ra || "windows" === Ra) && !qb,
    Ib = !Ab || bb || Da || qb && kb || Xa || Na || Ia || Ja || Qa || ha("gt-n710") || Ca,
    Jb = !Ib && !Hb,
    Kb = Hb ? "vw": Ib ? "d": Jb ? "dv": "v",
    Lb = ha("webkit"),
    Mb = "WebKitCSSMatrix" in ca && "m11" in new window.WebKitCSSMatrix,
    Pb = "MozPerspective" in ga.style,
    Qb = "OTransition" in ga.style,
    Rb = xb || Mb || Pb || Qb,
    Sb = void 0 !== config[8] ? config[8] : !0,
    Tb = void 0 !== config[9] ? config[9] : !0,
    Ub = void 0 !== config[10] ? config[10] : !0,
    Vb = void 0 !== config[11] ? config[11] : !0,
    Wb = void 0 !== config[12] ? config[12] : null,
    Xb = !yb && qb && Ab,
    Yb = !0;
  try {
    if ("undefined" === typeof ca.localStorage) Yb = !1;
    else {
      var Zb = (new Date).getTime() + "";
      ca.localStorage.setItem("_test", Zb);
      ca.localStorage.getItem("_test") !== Zb && (Yb = !1);
      ca.localStorage.removeItem("_test")
    }
  } catch($b) {
    Yb = !1
  }
  var ac = parseInt(aa.split("chrome/")[1]);
  config.l = {
    Yga: Ha,
    Zga: Ka,
    size: Ka ? 100 : Pa ? 200 : 500,
    $z: Ea,
    Qna: xa,
    YE: La,
    Hra: Oa,
    sk: Pa,
    Mca: Qa,
    uX: db,
    Us: Ra,
    ED: hb,
    nka: gb,
    aG: mb,
    q2: fb,
    Zp: va,
    uh: Ta,
    $p: Ua,
    CY: Xa,
    BY: Ya,
    re: Wa,
    EY: $a,
    bha: Za,
    lfa: ab,
    eha: va && !Za,
    wia: Fa,
    Jj: Yb,
    yf: Yb && Vb && !qb && chrome,
    he: Wb,
    geolocation: qb || va && !Wa || ab,
    ina: cb,
    AG: cb && !chrome,
    chrome: chrome,
    sL: wa && chrome,
    FL: kb,
    W: qb,
    Eia: qb && Lb,
    KZ: qb && Mb,
    Dia: qb && ca.opera,
    kd: wa,
    JG: vb,
    ka: wb,
    ef: ub,
    MZ: rb,
    QN: sb,
    F_: tb,
    Hda: chrome && 57 <= ac,
    Ida: !qb && chrome && 64 <= ac,
    o2: Lb,
    cha: xb,
    p2: Mb,
    Nfa: Pb,
    sja: Qb,
    CD: Rb,
    Rm: yb,
    Hk: Ab,
    Ks: Cb,
    Hw: Ub,
    Ye: Hb,
    l2: Db,
    m2: Fb,
    sM: ra,
    uia: Eb,
    loa: !1,
    eX: Sb,
    PD: Sb && !Ib,
    ada: Sb ? Kb: "d",
    jW: Sb ? Gb: !1,
    OA: Sb && Ab,
    en: Sb && Gb,
    Lra: Sb && (!Ib || Gb),
    Sm: Tb && !!ca.WebSocket && !hb,
    ssa: Xb,
    Aja: Ab || Xb ? "c": "d"
  };
  var bc = config;
  config = void 0;
  var cc = {
    overlay: ["style"],
    "AMap.IndoorMap": ["AMap.CustomLayer", "cvector"],
    "AMap.IndoorMap3D": ["Map3D"],
    "AMap.MarkerList": ["AMap.TplUtils"],
    Map3D: ["vectorlayer", "wgl", "AMap.CustomLayer"],
    "AMap.Heatmap": ["AMap.CustomLayer"],
    "AMap.DistrictLayer": ["MVT"],
    "AMap.GltfLoader": ["AMap.CustomLayer", "Map3D"]
  };
  window.AMap ? (window.AMap.version = "1536212842341", window.AMap.EG = {
    vH: function(a) {
      a(bc)
    }
  }) : window.AMap = {
    version: "1536212842341",
    EG: {
      vH: function(a) {
        a(bc)
      }
    }
  };
  bc.oi = "1536212842341";
  bc.bs = cc;
  bc.rF = "raster";
  for (var dc = document.head || document.getElementsByTagName("head")[0], ec = ".vml{behavior:url(#default#VML);display:inline-block;position:absolute}.amap-custom{top:0;left:0;position:absolute}.amap-container img{max-width:none!important;max-height:none!important}.amap-container{touch-action:none;position:relative;overflow:hidden;background:#fcf9f2 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0AgMAAAC2uDcZAAAADFBMVEX////////////////1pQ5zAAAABHRSTlMAgP/AWuZC2AAAAVhJREFUeAFiYGAQYGDEQjAB2rcDC4BiGIqiU7abdKlO2QkeIClyPsDHweMKtOPHIJ1Op6/w7Y4fdqfT6VpndzqdrnV2p9PpWmd3Oj3qWndSoKp+2J1Op7vr7E6n07XO7nQ6XevsTqfTtc7udPo4/f787E6n0911dqfT6VpndzqdrnV2p9PpWmd3Ot27Ce8m6HS6u85dR6fTtU7r6HS61mkdnU7XOrvT6XTvJuxOp9PddXan0+laZ3c6na51dDpd67SOTqd7N+HdBJ1Od9e56+h0utZpHZ1O1zq70+l0rbM7nU73bsLudDrdXWd3Ol3rtI5Op2ud1tHpdK3TOjqd7t2EdxN0Ot1dZ3c6na51dqfT6VpndzqdrnV2p9Pp3k3Q6XR3nbuOTqdrndbR6XSt0zo6na51Wken072bsDudTnfX2Z1Op2ud3el0utbZnU7XOq2j0+t0uncTD1gO4zoT5doZAAAAAElFTkSuQmCC);-ms-touch-action:none}.amap-drags,.amap-layers{width:100%;height:100%;position:absolute;overflow:hidden}.amap-layer img{pointer-events:none}.amap-e,.amap-maps{width:100%;height:100%}.amap-maps,.amap-e,.amap-layers,.amap-tile,.amap-tile-container{position:absolute;left:0;top:0;overflow:hidden}.amap-context{position:absolute;left:0;top:0}.amap-overlays,.amap-markers,.amap-marker{position:absolute;left:0;top:0}.amap-layers{z-index:0}.amap-overlays{z-index:110;cursor:default}.amap-markers{z-index:120}.amap-controls{z-index:150}.amap-copyright{position:absolute;display:block!important;left:70px;height:16px;bottom:0;font-size:11px;line-height:16px;font-family:Arial,sans-serif;z-index:160}.amap-logo{position:absolute;bottom:0;left:0;z-index:160;height:17px;line-height:16px;margin:0 1px}.amap-logo img{width:67px!important;height:16px!important;border:0;vertical-align:baseline!important}.amap-icon{position:relative;z-index:1;overflow:hidden}.amap-icon img{position:absolute;z-index:-1}.amap-marker-label{position:absolute;z-index:2;border:1px solid blue;background-color:white;white-space:nowrap;cursor:default;padding:3px;font-size:12px;line-height:14px}.amap-info{position:absolute;left:0;z-index:140;width:320px}.amap-menu{position:absolute;z-index:140;_width:100px}.amap-info-close{position:absolute;right:5px;_right:12px;+right:11px;top:5px;_top:2px;+top:2px;color:#c3c3c3;text-decoration:none;font:bold 16px/14px Tahoma,Verdana,sans-serif;width:14px;height:14px}.amap-info-outer,.amap-menu-outer{box-shadow:0 3px 14px rgba(0,0,100,0.6);background:none repeat scroll 0 0 white;border-radius:2px;padding:1px;text-align:left;border:#c0c0c0 solid 1px}.amap-info-outer:hover,.amap-menu-outer:hover{box-shadow:0 3px 14px rgba(0,0,0,0.75)}.amap-info-content{background:#fff;border:1px solid #ccc;padding:10px 18px 10px 10px;+margin:0 10px;+padding:10px 0;line-height:1.4;overflow:auto}.amap-marker-content{position:relative}.amap-info{_width:320px}.amap-menu{_width:100px}.amap-info-sharp{height:23px;margin:0 auto;overflow:hidden;position:relative;top:-1px;width:30px;background-image:url(../../theme/v1.3/sharp.png);_background-image:url(../../theme/v1.3/sharp.gif)}.amap-menu-outer{margin:0;padding:0;list-style-type:none}ul.amap-menu-outer li{cursor:pointer;height:35px;line-height:35px;word-break:break-all;padding:0 10px;font-size:12px;white-space:nowrap}ul.amap-menu-outer li a{text-decoration:none;font-size:13px;margin:0 5px;color:#000;padding:5px 5px}ul.amap-menu-outer li:hover{background-color:#f3f3ee}.amap-overlay-text-container{display:block;width:auto;word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background:#fff;padding:2px 3px;border:1px solid #ccc;border-radius:3px}.amap-overlay-text-container.amap-overlay-text-empty{display:none}".replace(/url\((['"]?)(?:\.\.\/)+/g, "url($1" + bc[2].split(",")[0] + "/"), fc = null, gc = 0, hc = dc.childNodes.length; gc < hc; gc++) if (1 === dc.childNodes[gc].nodeType) {
    fc = dc.childNodes[gc];
    break
  }
  if (ec) if (dc) {
    var ic = document.createElement("style");
    ic.setAttribute("type", "text/css");
    ic.setAttribute("class", "AMap.style");
    ic.styleSheet ? ic.styleSheet.cssText = ec: ic.innerHTML = ec;
    fc ? dc.insertBefore(ic, fc) : dc.appendChild(ic)
  } else document.write("<style type='text/css'>" + ec + "</style>");
  var g = g || {
        Ha: {
          de: 0,
          Qo: [],
          Qj: {}
        }
      },
    y = {
      q: {},
      control: {},
      A: {}
    };
  g.Eqa = function(a) {
    var b = Function;
    return function() {
      return (new b("return " + a))()
    }
  } ();
  g.CLASS_NAME = "AMap";
  g.a = g.BuryPoint = {};
  g.a.add = g.BuryPoint.add = function(a, b, c) { ! a.NY && (a = a.CLASS_NAME) && (a = a.replace("AMap.", ""), g.Yw.bn(a, b, c))
  };
  var jc = {
    lang: 1,
    baseRender: 1,
    overlayRender: 1,
    viewMode: 1
  };
  g.a.xa = g.BuryPoint.addOptions = function(a, b) {
    if (!a.uja) if (b && (b.innerLayer || b.innerOverlay)) a.NY = !0;
    else {
      a.uja = !0;
      var c = a.CLASS_NAME;
      if (c) {
        c = c.replace("AMap.", "");
        g.Yw.bn(c);
        b = b || {};
        for (var d in b) b.hasOwnProperty(d) && ("Map" === c && d in jc ? g.Yw.bn(c, d, b[d]) : g.Yw.bn(c, d))
      }
    }
  };
  g.X = function() {};
  g.X.extend = g.X.extend = function(a) {
    function b() {}
    function c() {
      var a = this.initialize || this.r;
      a && a.apply(this, arguments);
      if (!d && this.zh) {
        a = document.createElement("style");
        a.setAttribute("type", "text/css");
        this.CLASS_NAME && a.setAttribute("class", this.CLASS_NAME);
        this.zh = this.zh.replace(/url\((['"]?)(?:\.\.\/)*/g, "url($1" + g.w.Ab + "/");
        a.styleSheet ? a.styleSheet.cssText = this.zh: a.innerHTML = this.zh;
        for (var b = document.head || document.getElementsByTagName("head")[0], c = null, e = 0, f = b.childNodes.length; e < f; e++) if (1 === b.childNodes[e].nodeType) {
          c = b.childNodes[e];
          break
        }
        c ? b.insertBefore(a, c) : b.appendChild(a)
      }
      d = !0
    }
    var d = !1;
    b.prototype = this.prototype;
    var e = new b;
    e.constructor = c;
    c.prototype = e;
    c.prototype.Vi = c.prototype["super"] = function(a) {
      return a.callee.ma.apply(this, a)
    };
    for (var f in this) this.hasOwnProperty(f) && "prototype" !== f && (c[f] = this[f]);
    a.f1 && (g.extend(c, a.f1), a.f1 = null);
    a.ea && (g.extend.apply(null, [e].concat(a.ea)), a.ea = null);
    a.B && e.B && (a.B = g.extend({},
      e.B, a.B));
    var h = e.constructor.rha,
      k = {};
    if (void 0 !== h) for (f in h) h.hasOwnProperty(f) && (k[h[f]] = f);
    for (f in a) if (Object.prototype.hasOwnProperty.call(a, f)) {
      var l = f,
        m = f;
      h && k[f] && (m = k[f]);
      "function" === typeof a[l] && "function" === typeof e[m] && (a[l].ma = e[m])
    }
    g.extend(e, a);
    a.toString && (e.toString = a.toString);
    c.Hc = this.prototype;
    return c
  };
  g.X.vb = g.X.include = function(a) {
    g.extend(this.prototype, a)
  };
  g.extend = function(a) {
    var b = Array.prototype.slice.call(arguments, 1),
      c,
      d,
      e,
      f;
    d = 0;
    for (e = b.length; d < e; d += 1) if (f = b[d] || {},
        Object.assign) Object.assign(a, f);
    else for (c in f) Object.prototype.hasOwnProperty.call(f, c) && (a[c] = f[c]);
    return a
  };
  g.X.sg = function(a) {
    for (var b in a) if (a.hasOwnProperty(b)) {
      var c = a[b];
      if ("string" === typeof c) this.prototype[b] && (this.prototype[c] = this.prototype[b]);
      else for (var d = 0,
                  e = c.length; d < e; d++) this.prototype[b] && (this.prototype[c[d]] = this.prototype[b])
    }
  };
  g.Yw = {
    Qj: {},
    getKey: function(a, b) {
      a = a || "";
      return void 0 !== b && a ? a + "@" + b: a
    },
    bn: function(a, b, c) {
      this.Qj[a] || (this.Qj[a] = {});
      b = this.getKey(b, c);
      void 0 == this.Qj[a][b] && (this.Qj[a][b] = 0)
    },
    send: function() {
      var a = [],
        b;
      for (b in this.Qj) if (this.Qj.hasOwnProperty(b)) {
        var c = this.Qj[b],
          d = [],
          e;
        for (e in c) c.hasOwnProperty(e) && 0 == c[e] && (d.push(e), c[e] = 1);
        d.length && a.push(b + "~" + d.join(","))
      }
      a.length && (a = ["type=nfl", "k=" + g.w.key, "m=" + (g.l.W ? 1 : 0), "pf=" + g.l.Us, "v=" + g.w.sp, "branch=JSAPI", "log=" + a.join("!")], a = g.w.Xb + "://webapi.amap.com/count?" + a.join("&"), new g.Wa.jb(a))
    }
  };
  setInterval(function() {
      g.Yw.send()
    },
    1E4);
  g.la = {
    g: function(a, b, c, d, e) {
      if (this.Vd(a, b, c || this)) return this;
      var f = this.Ge = this.Ge || {};
      f[a] = f[a] || [];
      e ? f[a].unshift({
        ob: b,
        Ve: c || this,
        Kk: d
      }) : f[a].push({
        ob: b,
        Ve: c || this,
        Kk: d
      });
      "complete" === a && this.pa && this.o(a);
      return this
    },
    Vd: function(a, b, c) {
      var d = this.Ge;
      if (b && c) {
        if (d && a in d && d[a]) for (var e = 0; e < d[a].length; e += 1) if (d[a][e].ob === b && d[a][e].Ve === c) return ! 0;
        return ! 1
      }
      return d && a in d && d[a] && 0 < d[a].length
    },
    H: function(a, b, c) {
      if (!this.Vd(a)) return this;
      var d = this.Ge;
      if (d && d[a]) for (var e = 0; e < d[a].length; e += 1) if (! (d[a][e].ob !== b && "mv" !== b || c && d[a][e].Ve !== c)) {
        d[a].splice(e, 1);
        d[a].length || (d[a] = null);
        break
      }
      return this
    },
    tF: function(a, b) {
      if (!this.Vd(a)) return this;
      var c = this.Ge;
      if (c && c[a]) for (var d = 0; d < c[a].length; d += 1) if (!b || c[a][d].Ve === b) {
        c[a].splice(d, 1);
        c[a].length || (c[a] = null);
        break
      }
      return this
    },
    o: function(a, b) {
      if (!this.Vd(a)) return this;
      var c = {
        type: a
      };
      b || "string" !== typeof b && "number" !== typeof b && "boolean" !== typeof b ? g.c.bF(b) ? c.value = b: c = g.extend(c, b) : c.value = b;
      for (var d = [].concat(this.Ge[a]), e = 0; e < d.length; e += 1) d[e].ob && (d[e].ob.call(d[e].Ve || this, c), d[e] && d[e].Kk && this.Ge[a] && this.Ge[a].splice(e, 1));
      return this
    },
    Bi: function(a) {
      a ? this.Ge && this.Ge[a] && (this.Ge[a] = null) : this.Ge = null;
      return this
    }
  };
  g.la.on || (g.la.on = g.la.g);
  g.la.off || (g.la.off = g.la.H);
  g.la.emit || (g.la.emit = g.la.o);
  g.Ee = {
    set: function(a, b, c) {
      var d = this.bk;
      if (d && d[a]) {
        var d = d[a],
          e = "set" + this.fY(a);
        d[e] ? (d[e](b, c), c || this.MF(a, b)) : d.set(a, b, c)
      } else(this.ue = this.ue || {})[a] = b,
      c || this.MF(a, b)
    },
    fY: function(a) {
      return a[0].toUpperCase() + a.substr(1)
    },
    get: function(a, b, c) {
      var d, e = this.bk;
      d = "get" + this.fY(a);
      if (e && e[a]) return c = e[a],
        c[d] ? c[d](b) : c.get(a, b);
      if (!c && this[d]) return this[d](b);
      if (this.ue && this.ue.hasOwnProperty(a)) return this.ue[a]
    },
    V: function(a, b, c) {
      this.bk || (this.bk = {});
      this.bk[a] !== b && (b.g(a,
        function(b) {
          this.MF(a, b)
        },
        this), this.bk[a] = b, c || this.MF(a))
    },
    ve: function(a, b, c) {
      for (var d = 0; d < a.length; d += 1) this.V(a[d], b, !c)
    },
    Vj: function(a) {
      this.bk && this.bk[a] && (this.bk[a].H(a, "mv", this), this.bk[a] = void 0)
    },
    Lo: function() {
      if (this.bk) for (var a in this.bk) this.bk.hasOwnProperty(a) && this.Vj(a)
    },
    MF: function(a, b) {
      var c = a + "Changed";
      if (this[c]) this[c](b);
      this.o(a, b)
    },
    Pra: function(a, b, c) {
      var d = new(g.X.extend({
        ea: [g.la, g.Ee]
      }));
      d.Wpa = function() {
        for (var b = !0,
               e = 0; e < a.length; e += 1) d.get(a[e]) || (b = !1);
        b && (d.Lo(), c())
      };
      for (var e = 0; e < a.length; e += 1) d.V(a[e], b)
    },
    Pf: function(a, b) {
      var c, d;
      for (c in a) a.hasOwnProperty(c) && (d = a[c], this.set(c, d, b))
    }
  };
  g.w = {
    localStorage: !0,
    BD: 500,
    Dd: !0,
    Gd: {
      dark: "#202020",
      blue_night: "#090d20",
      test: "#033447",
      mapv: "#000001",
      techblue: "#000b11",
      insight: "#19212a",
      "default": "#fcf9f2"
    },
    rsa: "dark light blue darkblue fresh grey midblue".split(" "),
    key: "bfe31f4e0fb231d29e1d3ce951e2c780",
    Xb: "http",
    Jd: [115.423412, 39.442759, 117.514625, 41.060816, 116.405285, 39.904989],
    Cd: "http://restapi.amap.com",
    Ab: "http://webapi.amap.com",
    DF: "http://gaode.com",
    Os: "http://m.amap.com",
    aA: "http://webrd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&scale=1&style=8&x=[x]&y=[y]&z=[z]",
    lF: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x=[x]&y=[y]&z=[z]&scl=1&ltype=3",
    qO: "http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?style=6&x=[x]&y=[y]&z=[z]",
    XF: "http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scale=1&style=8",
    YF: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scl=1&style=8&ltype=11",
    VA: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&style=7&x=[x]&y=[y]&z=[z]",
    HG: "http://vector.amap.com",
    Kw: "vdata.amap.com",
    vP: "ws"
  };
  function kc(a) {
    g.X.bs = a.bs;
    g.l = a.l;
    g.rF = a.rF;
    g.$ja = a[7];
    a.l = null;
    g.w.Ab = a[2].split(",")[0];
    g.w.oi = a.oi;
    g.w.Xz = a.Xz;
    var b = g.w.Xb = g.w.Ab.split(":")[0];
    "https" === b && (g.w.vP = "wss", g.w.Cd = g.w.Cd.replace("http", "https"), g.w.aA = g.w.aA.replace("http", "https"), g.w.lF = g.w.lF.replace("http", "https"), g.w.qO = g.w.qO.replace("http", "https"), g.w.XF = g.w.XF.replace("http", "https"), g.w.YF = g.w.YF.replace("http", "https"), g.w.VA = g.w.VA.replace("http", "https"), g.w.HG = g.w.HG.replace("http", "https"));
    var c = window.location.href;
    0 !== c.indexOf("http") && window.parent && window.parent !== window && (c = window.parent.location.href);
    g.w.Gqa = c;
    c = encodeURIComponent(c);
    g.w.up = c;
    g.w.wh = g.w.Ab + "/theme/v1.3/markers/" + (g.l.kd ? "b": "n");
    var d = document.createElement("style");
    d.type = "text/css";
    g.w.Eea = "url(" + b + "://webapi.amap.com/theme/v1.3/openhand.cur),default";
    var e = ".amap-container{cursor:" + g.w.Eea + ";}.amap-drag{cursor:url(" + b + "://webapi.amap.com/theme/v1.3/closedhand.cur),default;}";
    d.styleSheet ? (b = function() {
      try {
        d.styleSheet.cssText = e
      } catch(a) {}
    },
      d.styleSheet.disabled ? setTimeout(b, 10) : b()) : d.appendChild(document.createTextNode(e)); (document.head || document.getElementsByTagName("head")[0]).appendChild(d);
    g.w.mode = Number(a[3]);
    g.w.Jd = a[1];
    g.w.key = a[0];
    g.w.sp = a[4];
    g.w.Kc = a[5];
    g.w.xca = a[6]
  }
  window.AMap && window.AMap.EG && window.AMap.EG.vH && window.AMap.EG.vH(kc);
  g.al = {
    $r: Math.PI / 180,
    qka: 180 / Math.PI,
    vL: 6378137
  }; (function() {
    function a(a) {
      return "undefined" === typeof a ? "": a
    }
    g.Zg = {
      Aga: function(b) {
        b.name = a(b.name);
        var c = [b.y, b.x, b.name];
        if (g.l.W) {
          var d = [g.w.Os + "/callAPP?", "src=jsapi_q"];
          d.push("&ios=" + encodeURIComponent("viewMap?sourceApplication=jsapi_q&dev=0&poiname=" + b.name + "&lat=" + b.y + "&lon=" + b.x));
          d.push("&android=" + encodeURIComponent("androidamap?action=shorturl&q=" + c.join(",") + "&sourceApplication=jsapi_q"));
          d.push("&wp=" + encodeURIComponent("viewMap?sourceApplication=jsapi_q&dev=0&poiname=" + b.name + "&lat=" + b.y + "&lon=" + b.x));
          d.push("&mo=" + encodeURIComponent(g.w.Os + "?q=" + c.join(",") + "&callapp=0&sourceApplication=jsapi_q"));
          return d.join("")
        }
        return g.w.DF + "?q=" + c.join(",") + "&src=jsapi_q"
      },
      VX: function(b) {
        b.name = a(b.name);
        b.address = a(b.address);
        b.x = a(b.x);
        b.y = a(b.y);
        var c = [b.id, b.y, b.x, b.name, b.address];
        if (g.l.W) {
          var d = [g.w.Os + "/callAPP?", "src=jsapi_p"];
          d.push("&ios=" + encodeURIComponent("multiPointShow?sourceApplication=jsapi_p&dev=0&q=" + [b.y, b.x, b.name, b.address, b.id].join() + "&title=" + b.name));
          d.push("&android=" + encodeURIComponent("androidamap?action=shorturl&p=" + c.join(",") + "&sourceApplication=jsapi_p"));
          d.push("&wp=" + encodeURIComponent("multiPointShow?sourceApplication=jsapi_p&dev=0&q=" + [b.y, b.x, b.name, b.address, b.id].join() + "&title=" + b.name));
          return d.join("")
        }
        return g.w.DF + "?p=" + c.join(",") + "&src=jsapi_p"
      },
      TX: function(b) {
        if (g.l.W) {
          var c = [g.w.Os + "/callAPP?", "src=jsapi_detail"];
          c.push("&ios=" + encodeURIComponent("viewPOIDetail?sourceApplication=jsapi_detail&poiid=" + b.id));
          b.name = a(b.name);
          b.x = a(b.x);
          b.y = a(b.y);
          c.push("&android=" + encodeURIComponent("androidamap?action=openFeature&featureName=PoiDetail&poiid=" + b.id + "&poiname=" + b.name + "&x=" + b.x + "&y=" + b.y + "&sourceApplication=jsapi_detail"));
          c.push("&wp=" + encodeURIComponent("viewPOIDetail?sourceApplication=jsapi_detail&poiid=" + b.id));
          c.push("&mo=" + encodeURIComponent(g.w.Os + "/detail/index/poiid=" + b.id + "&sourceApplication=jsapi_detail"));
          return c.join("")
        }
        return g.w.DF + "/detail/" + b.id + "?src=jsapi_detail"
      },
      mM: function(b) {
        b.sname = a(b.sname);
        "" === b.sname && (b.sname = "\u8d77\u70b9");
        b.dname = a(b.dname);
        "" === b.dname && (b.dname = "\u7ec8\u70b9");
        b.mcount = a(b.mcount);
        b.my = a(b.my);
        b.mx = a(b.mx);
        b.mname = a(b.mname);
        var c = [b.sy, b.sx, b.sname, b.dy, b.dx, b.dname, b.m, b.t, b.mcount, b.my, b.mx, b.mname];
        if (g.l.W) {
          var d = [g.w.Os + "/callAPP?", "src=jsapi_r_" + b.t];
          d.push("&ios=" + encodeURIComponent("path?sourceApplication=jsapi_r_" + b.t + "&dev=0&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&m=" + b.m + "&t=" + b.t + "&vian=0&vialons=&vialats=&vianames="));
          var e = b.t;
          0 === b.t ? e = 2 : 2 === b.t && (e = 4);
          d.push("&android=" + encodeURIComponent("androidamap://route?sourceApplication=jsapi_r_" + b.t + "&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&dev=0&" + b.m + "&t=" + e));
          d.push("&wp=" + encodeURIComponent("path?sourceApplication=jsapi_r_" + b.t + "&dev=0&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&m=" + b.m + "&t=" + b.t + "&vian=0&vialons=&vialats=&vianames="));
          d.push("&mo=" + encodeURIComponent(g.w.Os + "/?r=" + c.join(",") + "&callapp=0&sourceApplication=jsapi_r_" + b.t));
          return d.join("")
        }
        return g.w.DF + "?r=" + c.join(",") + "src=jsapi_r_" + b.t
      },
      Iq: function(a) {
        g.l.W ? window.location.href = a: window.open(a)
      }
    }
  })();
  "function" !== typeof Object.keys && (Object.keys = function(a) {
    var b = [],
      c;
    for (c in a) a.hasOwnProperty(c) && b.push(c);
    return b
  });
  g.c = {
    CLASS_NAME: "AMap.Util",
    nG: [],
    ib: 268435456,
    uo: [215440491, 106744817],
    g2: function() {
      var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
      return function(b, c) {
        var d = [],
          e;
        c = c || a.length;
        if (b) for (e = 0; e < b; e++) d[e] = a[0 | Math.random() * c];
        else {
          var f;
          d[8] = d[13] = d[18] = d[23] = "-";
          d[14] = "4";
          for (e = 0; 36 > e; e++) d[e] || (f = 0 | 16 * Math.random(), d[e] = a[19 === e ? f & 3 | 8 : f])
        }
        return d.join("")
      }
    } (),
    wz: {
      start: function(a) {
        a.startTime = new Date;
        a.G1 = [];
        var b = (new Date).getTime();
        a.id = requestAnimationFrame(function d() {
          var e = (new Date).getTime();
          a.G1.push(e - b);
          b = e;
          a.id = requestAnimationFrame(d)
        })
      },
      cancel: function(a) {
        a.id && cancelAnimationFrame(a.id)
      },
      stop: function(a) {
        a.qea = new Date - a.startTime;
        this.cancel(a);
        a.wz = Math.round(1E3 / (a.qea / (a.G1.length + 1)))
      }
    },
    dM: function(a) {
      var b = {};
      if (g.c.Gk(a, "object")) for (var c in a) a.hasOwnProperty(c) && (b[a[c]] = c);
      return b
    },
    Nf: function(a, b) {
      for (var c = 0,
             d = b.length; c < d; c += 1) a.push(b[c])
    },
    create: "function" === typeof Object.create ? Object.create: function(a, b) {
      function c() {}
      c.prototype = a;
      var d = new c,
        e;
      for (e in b) b.hasOwnProperty(e) && (d[e] = b[e]);
      return d
    },
    ab: function(a) {
      if ("object" === typeof a && null !== a) {
        if (a.UZ || this.Gk(a, "Float32Array") || this.Gk(a, "Uint16Array")) return a;
        var b = this.isArray(a) ? [] : {},
          c;
        for (c in a) a.hasOwnProperty(c) && (b[c] = g.c.ab(a[c]));
        return b
      }
      return a
    },
    XY: function(a) {
      return (a | 0) === a
    },
    Ila: "function" === typeof Object.setPrototypeOf ? Object.setPrototypeOf: function(a, b) {
      for (var c in b) a[c] = b[c]
    },
    gi: function(a) {
      return "function" === typeof a
    },
    oq: function() {},
    keys: "function" === typeof Object.keys ? Object.keys: function(a) {
      var b = [],
        c;
      for (c in a) a.hasOwnProperty(c) && b.push(c);
      return b
    },
    map: function(a, b) {
      var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
        d = [];
      if (a && a.length) g.c.Tb(a,
        function() {
          for (var e = arguments.length,
                 f = Array(e), h = 0; h < e; h++) f[h] = arguments[h];
          d[f[1]] = b.apply(c || a, f)
        });
      else return a;
      return d
    },
    Tb: function(a, b) {
      var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (a && a.length) for (var d = 0,
                                e = a.length; d < e && !1 !== b.call(c, a[d], d, a); d++);
    },
    find: function(a, b) {
      for (var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, d = 0, e = a.length; d < e; d++) if ("function" === typeof b) {
        if (b.call(c, a[d], d, a)) return a[d]
      } else if (a[d] === b) return a[d];
      return null
    },
    bF: function(a) {
      return "object" === typeof HTMLElement ? a instanceof HTMLElement: a && "object" === typeof a && 1 === a.nodeType && "string" === typeof a.nodeName
    },
    xt: function(a, b) {
      var c = "ASDFGHJKLQWERTYUIO!sdfghjkleiu3~yr5-P&mq9`%zCN*b=8@^xpVM",
        d, e;
      "v5" < (b || "v5") ? (d = c.length, e = 512) : (d = 27, c = c.substr(0, 27), e = 333);
      var f, h, k, l, m;
      h = [];
      k = NaN;
      l = 0;
      for (m = a.length; l < m; l++) f = a[l],
        f = c.indexOf(f),
        isNaN(k) ? k = f * d: (h.push(k + f - e), k = NaN);
      return h
    },
    rla: function(a, b) {
      for (var c = 1,
             c = 512 < b.length ? Math.round(Math.pow(b.length, 0.5)) : b.length, d = Math.ceil(b.length / c), e = 0; e < d; e += 1) {
        var f = c * e,
          h = f + c;
        h > b.length && (h = b.length);
        for (; f < h; f += 1) a(b[f])
      }
    },
    eqa: function(a) {
      if (/^rgba\(/.test(a)) return this.dt(a);
      var b = a = this.TD(a);
      "#" === a[0] && (a = a.substring(1), 3 === a.length && (a = a.replace(/./g,
        function(a) {
          return a + a
        })), b = this.pg(8 === a.length ? a: "ff" + a));
      return this.dt(b)
    },
    TD: function(a) {
      g.a.add(this, "colorNameToHex");
      var b = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgrey: "#d3d3d3",
        lightgreen: "#90ee90",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370d8",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#d87093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
      };
      return "string" === typeof a ? b[a.toLowerCase()] ? b[a.toLowerCase()] : a: a
    },
    mE: function(a, b, c) {
      var d, e;
      d = Math.floor(c / 2);
      e = c - d;
      d = (1 << d) - 1 << e;
      e = (1 << e) - 1;
      return [c, a & d | b & e, b & d | a & e]
    },
    nE: function(a) {
      return a ? encodeURIComponent(a) : ""
    },
    Ad: function(a, b, c, d) {
      c = a[b].i[c];
      if ("undefined" === typeof c) return null;
      a = a[b].s;
      if ("number" === typeof c) return a[c];
      for (;
        "undefined" === typeof c[d.toString()] && !(d -= 1, 3 > d););
      d = c[d.toString()];
      return "number" === typeof d ? a[d] : null
    },
    dt: function(a) {
      a = a.split(",");
      a[0] = parseFloat(a[0].split("rgba(")[1]) / 255;
      a[1] = parseFloat(a[1]) / 255;
      a[2] = parseFloat(a[2]) / 255;
      a[3] = parseFloat(a[3]);
      return a
    },
    ela: function(a) {
      a = a.split(",");
      a[0] = parseFloat(a[0].split("rgb(")[1]) / 255;
      a[1] = parseFloat(a[1]) / 255;
      a[2] = parseFloat(a[2]) / 255;
      return a
    },
    Nn: function(a) {
      g.a.add(this, "color2RgbaArray");
      if (a instanceof Array) return 3 == a.length && a.push(1),
        a;
      a = this.TD(a);
      if (0 == a.indexOf("#")) {
        if (7 == a.length) return this.ct(a.substr(1));
        if (9 == a.length) return a = a.substr(1),
          this.rj(a.substr(6) + a.substr(0, 6))
      } else {
        if (0 == a.indexOf("rgb(")) return a = this.ela(a),
          a.push(1),
          a;
        if (0 == a.indexOf("rgba(")) return this.dt(a)
      }
    },
    t0: function(a) {
      g.a.add(this, "rgbHex2Rgba");
      return g.c.pg("ff" + a)
    },
    pg: function(a) {
      g.a.add(this, "argbHex2Rgba");
      for (var b = [], c = 0, d = a.length; c < d; c += 2) b.push(parseInt(a.substr(c, 2), 16));
      b.push((b.shift() / 255).toFixed(2));
      return "rgba(" + b.join(",") + ")"
    },
    ct: function(a) {
      return g.c.rj("ff" + a)
    },
    rj: function(a) {
      for (var b = [], c = 0, d = a.length; c < d; c += 2) b.push(parseInt(a.substr(c, 2), 16) / 255);
      b.push(b.shift());
      return b
    },
    ko: function(a) {
      g.a.add(this, "isEmpty");
      for (var b in a) if (a.hasOwnProperty(b)) return ! 1;
      return ! 0
    },
    Dm: function(a, b) {
      g.a.add(this, "deleteItemFromArrayByIndex");
      0 <= b && a.splice(b, 1);
      return a
    },
    dv: function(a, b) {
      g.a.add(this, "deleteItemFromArray");
      var c = g.c.indexOf(a, b);
      return g.c.Dm(a, c)
    },
    filter: function(a, b, c) {
      var d = [];
      g.c.Tb(a,
        function(a, f) {
          b.call(c, a, f) && d.push(a)
        });
      return d
    },
    indexOf: function(a, b) {
      g.a.add(this, "indexOf");
      if (!a || !a.length) return - 1;
      if (a.indexOf) return a.indexOf(b);
      for (var c = 0; c < a.length; c += 1) if (a[c] === b) return c;
      return - 1
    },
    bind: function() {
      var a = !1;
      Function.prototype.bind && (a = !0);
      return function(b, c) {
        var d = 2 < arguments.length ? Array.prototype.slice.call(arguments, 2) : null;
        return a ? d ? (d.unshift(c), b.bind.apply(b, d)) : b.bind(c) : function() {
          return b.apply(c, d || arguments)
        }
      }
    } (),
    Fb: function(a, b) {
      b = b || {};
      a.B = g.extend({},
        a.B, b);
      return a.B
    },
    lX: function() {
      return ! 1
    },
    join: function(a, b) {
      if (a.join) return a.join(b);
      var c = [],
        d;
      for (d in a) a.hasOwnProperty(d) && c.push(d + "=" + (a[d] || ""));
      return c.join(b)
    },
    JX: function(a, b) {
      return (a || "") + Math.round(Math.random() * Math.pow(10, b || 6))
    },
    Pb: function() {
      var a = 0;
      return function(b) {
        b._amap_id || (a += 1, b._amap_id = a);
        return b._amap_id
      }
    } (),
    pfa: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
    xe: Date.now ?
      function() {
        return Date.now()
      }: function() {
        return (new Date).getTime()
      },
    fF: function(a, b, c, d) {
      var e;
      if (d) {
        var f = 0,
          h, k = this.xe;
        e = function() {
          h = k();
          if (h - f < b) return ! 1;
          f = h;
          a.apply(c, arguments)
        }
      } else {
        var l, m, n;
        n = function() {
          l = !1;
          m && (e.apply(c, m), m = !1)
        };
        e = function() {
          l ? m = arguments: (l = !0, a.apply(c, arguments), setTimeout(n, b))
        }
      }
      return e
    },
    Td: function(a, b) {
      return a === a << 0 ? a: +parseFloat(a).toFixed(b || 0)
    },
    isArray: Array.isArray ? Array.isArray: function(a) {
      return this.Gk(a, "array")
    },
    Gk: function(a, b) {
      return Object.prototype.toString.call(a).split(" ")[1].slice(0, -1).toLowerCase() === b.toLowerCase()
    },
    ea: "function" === typeof Array.prototype.ea ?
      function(a, b) {
        return a.ea(b)
      }: function(a, b) {
        return - 1 !== this.indexOf(a, b)
      },
    j1: function(a) {
      var b = 0;
      if (0 === a.length) return b;
      for (var c, d = 0,
             e = a.length; d < e; d += 1) c = a.charCodeAt(d),
        b = (b << 5) - b + c,
        b &= b;
      return b
    },
    pqa: function(a, b) {
      b = b ? Math.ceil(parseInt(b.substr(6)) / 24) : 1;
      for (var c = "",
             d = 0,
             e = a.length; d < e; d++) c += String.fromCharCode((a.charCodeAt(d) - 256 - b + 65535) % 65535);
      return c
    },
    Hea: function(a, b) {
      var c = (a + "").slice( - 2),
        d = (b + "").slice( - 2);
      a = a.slice(0, -2);
      b = b.slice(0, -2);
      var e = parseInt((d + c).slice(1)),
        f = Math.ceil(e / 250) % 2 ? 1 : -1,
        d = parseInt("1" + d) / 3E3;
      a -= parseInt("1" + c) / 3E3 * f;
      b -= d * (1 < e / 500 ? 1 : -1);
      return new g.T(parseFloat(a).toFixed(5), parseFloat(b).toFixed(5))
    },
    XZ: function(a) {
      return "undefined" !== typeof JSON && JSON.stringify ? g.c.j1(JSON.stringify(a)) : null
    },
    Lta: function(a, b) {
      if (b || !a.hasOwnProperty("_amap_hash")) {
        var c = g.c.XZ(a);
        c && (a._amap_hash = c)
      }
      return a._amap_hash
    },
    iepngFix: function(a) {
      function b() {
        for (var a; c.length;) a = c.shift(),
          window.DD_belatedPNG.fixPng(a);
        d.VM = !0
      }
      this.E_ || (this.E_ = [], this.VM = !1);
      var c = this.E_,
        d = this;
      if ("img" === a.tagName.toLowerCase()) c.push(a);
      else {
        a = a.getElementsByTagName("*");
        for (var e = 0; e < a.length; e += 1) c.push(a[e])
      }
      window.DD_belatedPNG && this.VM ? setTimeout(function() {
          b()
        },
        100) : this.VM || g.mb.load("AMap.FixPng", b)
    },
    Da: function(a) {
      if (g.c.isArray(a)) if (g.c.isArray(a[0])) for (var b = 0; b < a.length; b += 1) a[b] = g.c.Da(a[b]);
      else if (b = typeof a[0], "string" === b || "number" === b) return new g.T(a[0], a[1]);
      return a
    },
    vo: function(a) {
      return g.c.isArray(a) ? new g.bd(a[0], a[1]) : a
    }
  }; (function() {
    function a(a) {
      window.clearTimeout(a)
    }
    function b(a) {
      var b, c, d = ["webkit", "moz", "o", "ms"];
      for (b = 0; b < d.length && !c; b += 1) c = window[d[b] + a];
      return c
    }
    function c(a) {
      var b = +new Date,
        c = Math.max(0, (g.l.sk ? 50 : 20) - (b - d));
      d = b + c;
      return window.setTimeout(a, c)
    }
    var d = 0,
      e = window.requestAnimationFrame || b("RequestAnimationFrame") || c,
      f = window.cancelAnimationFrame || b("CancelAnimationFrame") || b("CancelRequestAnimationFrame") || a;
    g.c.Ac = function(a, b, c, d) {
      if (c) b ? g.c.bind(a, b).call(b, d) : a();
      else return e(function() {
        b ? g.c.bind(a, b).call(b, d) : a()
      })
    };
    g.c.ph = function(a) {
      a && f.call(window, a)
    }
  })();
  g.c.TF = window.requestIdleCallback ? window.requestIdleCallback.bind(window) : function(a) {
    var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
      c = g.c.xe();
    return setTimeout(function() {
        a({
          didTimeout: !1,
          timeRemaining: function() {
            return Math.max(0, 70 - (g.c.xe() - c))
          }
        })
      },
      b.timeout || 0)
  };
  g.c.RK = window.cancelIdleCallback ? window.cancelIdleCallback.bind(window) : function(a) {
    clearTimeout(a)
  }; (function(a) {
    var b = 1,
      c = {};
    a.c.Gla = function(a, b) {
      if (c[a]) {
        var f = c[a];
        f.MA = 1;
        f.result = b;
        if (f.vl) {
          for (var h = f.vl,
                 k = 0,
                 l = h.length; k < l; k++) h[k].call(null, b);
          f.vl = null
        }
      }
    };
    a.c.Pda = function(a) {
      c[a] = null
    };
    a.c.Ina = function(a, b) {
      if (c[a]) {
        var f = c[a];
        0 < f.MA ? b(null, f.result) : (f.vl || (f.vl = []), f.vl.push(b))
      } else b(null, a)
    };
    a.c.fM = function(d, e) {
      var f = navigator.geolocation;
      if (!a.l.YE || "https:" === document.location.protocol) return d(null, f);
      var h;
      e && e.Jna && (h = "f" + b++, c[h] = {
        MA: 0
      });
      var k = null,
        l = !1;
      e && e.timeout && (k = setTimeout(function() {
          k = void 0;
          d({
            code: 3,
            info: "TIME_OUT",
            message: "Get geolocation time out."
          });
          l = !0
        },
        e.timeout));
      f.getCurrentPosition(function() {
          l || (clearTimeout(k), k = void 0, d(null, f))
        },
        function(b) {
          l || (clearTimeout(k), k = void 0, 2 === b.code && 0 < b.message.indexOf("permission") ? a.mb.load("AMap.GeoRemoteLoc",
            function() {
              d(null, a.Y2, h)
            }) : d(null, f))
        },
        {
          timeout: 1E3
        });
      return h
    }
  })(g); (function(a) {
    var b = a.X.extend({
      ea: [a.la],
      r: function() {}
    });
    a.si = new b
  })(g); (function(a) {
    var b = a.X.extend({
      ea: [a.la],
      r: function() {
        this.f8()
      },
      f8: function() {
        a.si && a.si.g("vecTileParsed.buildings", this.L7, this)
      },
      WY: function(a) {
        return a.map.IS
      },
      LX: function(a) {
        return this.WY(a) ? a.map.JI: null
      },
      Dla: function(a, b) {
        if (b) {
          var e = b.map;
          e && (e.JI ? e.JI.toString() : "") !== (a ? a.toString() : "") && (e.JI = a || [], e.set("display", 0))
        }
      },
      L0: function(a, b) {
        if (b) {
          var e = b.map;
          e && e.IS !== a && (e.IS = a, e.set("display", 0))
        }
      },
      apa: function() {},
      ES: function(a, b) {
        if (a) for (var e = 0,
                      f = a.length; e < f; e++) a[e] && 0 > b.indexOf(a[e]) && b.push(a[e])
      },
      oX: function(b) {
        if (!b) return null;
        b = b.map.za;
        for (var d = 0,
               e = b.length; d < e; d++) if (a.q.dj && b[d] instanceof a.q.dj && b[d].ia && b[d].ia.length && ( - 1 !== b[d].ia.indexOf("building") || -1 !== b[d].ia.indexOf("poilabel")) && b[d].pa) {
          var f = b[d].ba.get("tiles", null, !0);
          if (f && f.length) return b[d]
        }
        return null
      },
      Rfa: function(a) {
        if (a = this.oX(a)) {
          if (a = a.ba.get("tiles", null, !0)) a = a[0];
          else return null;
          if (!a || !a.length) return null;
          for (var b = [], e = 0, f = a.length; e < f; e++) {
            var h = a[e];
            h.Hd && h.Hd.pe && this.ES(h.Hd.pe, b)
          }
          return b
        }
      },
      L7: function(a) {
        if (a.fn && a.fn.Hd) {
          var b = a.fn.Hd.pe;
          if (b) {
            var e = [];
            this.ES(b, e);
            this.o("vecTileParsed.builds.found", {
              gW: e,
              fn: a.fn
            })
          }
        }
      }
    });
    a.Eh = new b
  })(g); (function(a) {
    function b() {
      return {
        checkup: function() {
          var a = Array.prototype.slice.call(arguments, 0);
          a.pop()(null, a)
        }
      }
    }
    function c(a) {
      return {
        injectCode: function(b, c) {
          var d = null,
            e = null;
          try {
            d = (new Function("self", b))(a)
          } catch(f) {
            console.error("error", e),
              e = f.toString()
          }
          c(e, d)
        }
      }
    }
    function d(a) {
      function b(c, d) {
        function e(a, b, c) {
          a = {
            yw: Date.now(),
            mw: h,
            error: a,
            result: b,
            Qs: !1,
            Yn: !1
          };
          if (c) for (var f in c) c.hasOwnProperty(f) && (a[f] = c[f]);
          d(a)
        }
        var f = c.DM,
          h = c.mw,
          l = c.bL,
          m = c.Xy,
          n = c.Rca || [],
          p = a._wkHandlers[f];
        p ? p[l] ? m ? p[l].apply(p, n.concat(e)) : e(null, p[l].apply(p, n)) : e("Unknown cmd: " + l) : e("Can not find handler for: " + f)
      }
      var c = [],
        d = null,
        e = null;
      for (d in this._wkHandlers) - 1 !== d.indexOf("_def_") && (e = this._wkHandlers.nsa = d);
      "function" === typeof this._wkHandlers[e].r && this._wkHandlers[e].r.call(this._wkHandlers[e]);
      a.AD = function(a) {
        c.push.apply(c, a)
      };
      a.addEventListener("message",
        function(d) {
          function e(b) {
            if (t) {
              t.push(b);
              var d = !!b.Qs;
              d || n++;
              b = n >= h || b.Yn;
              if (d || b) {
                d = 1 < t.length ? {
                  ala: t
                }: t[0];
                d.yw = Date.now();
                d.uta = p;
                if (c.length) {
                  try {
                    a.postMessage(d, c)
                  } catch(f) {
                    a.postMessage(d),
                      console.error(f)
                  }
                  c.length = 0
                } else a.postMessage(d);
                t.length = 0;
                b && (e = t = null)
              }
            } else console.error("Seemed callback already sent!!", b, b.result.Jc)
          }
          var f = d.data;
          d = f.Yka || [f];
          for (var h = d.length,
                 n = 0,
                 p = Date.now() - f.yw, t = [], f = 0; f < h; f++) b(d[f], e)
        },
        !1)
    }
    function e(d, h) {
      this.B = a.extend({
          batchSend: !0,
          lazy: !1,
          libPolyfills: null
        },
        h);
      this.Hn = [];
      this.vx = this.B.clientId || "w" + f++;
      this.B.onReady && this.yN(this.B.onReady);
      this.$B = this.W6();
      if ("function" === typeof d) {
        var m = {};
        m[this.$B] = d;
        d = m
      }
      d[e.qM] = c;
      d[this.RR()] = b;
      this.nC = d;
      this.oy(null);
      this.B.lazy || this.Wy();
      a.rM || !1 === this.B.hostWorker || (a.rM = this)
    }
    var f = 1,
      h = 1;
    a.extend(e, {
      qM: "_g_",
      Rla: function(a) {
        if (!a.z4) {
          var b = [];
          a.addEventListener("message",
            function(a) {
              a = a.data;
              a = a.ala || [a];
              for (var c = 0,
                     d = a.length; c < d; c++) {
                var e = a[c],
                  f;
                a: {
                  f = e.mw;
                  for (var h = !e.Yn,
                         k = 0,
                         w = b.length; k < w; k++) {
                    var v = b[k];
                    if (f === v.mw) {
                      h || b.splice(k, 1);
                      f = v;
                      break a
                    }
                  }
                  f = void 0
                }
                f && f.Xy(e.error, e.result, !0)
              }
            },
            !1);
          a.n4 = b;
          a.z4 = !0
        }
      }
    });
    a.extend(e.prototype, {
      W6: function() {
        return "_def_" + this.vx
      },
      RR: function() {
        return "_cln_" + this.vx
      },
      $aa: function() {
        var a = Array.prototype.slice.call(arguments, 0);
        this.xU = a;
        if (this.Du) {
          for (var b = 0,
                 c = this.Du.length; b < c; b++) this.Du[b].apply(null, a);
          this.Du.length = 0
        }
      },
      AD: function(a) {
        this.Saa && this.Hn.push.apply(this.Hn, a)
      },
      yN: function(a) {
        this.xU ? a.apply(null, this.xU) : (this.Du || (this.Du = []), this.Du.push(a))
      },
      Wy: function(b) {
        var c = this;
        if (!c.UQ) {
          c.UQ = !0;
          var d = function(d, e) {
            d && a.l.Ks && console.warn(d);
            c.$aa.call(c, d, e);
            b && b(d, e)
          };
          a.l.Ks ? this.Qaa(function(a, b) {
            b ? this.l8(b,
              function(a, c) {
                a ? d(a) : (this.oy(c), this.rK = c, this.Hn.length = 0, this.BC = null, d(null, {
                  bda: b,
                  Rna: c
                }))
              }) : d("Worker start failed!")
          }) : d("Worker not supported!")
        }
      },
      Fk: function(b, c) {
        var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : a.c.oq,
          f = this;
        b = b || f.$B;
        var h = {};
        f.zQ(b, c, h);
        f.oy(null, h);
        f.yN(function(a) {
          a ? d(a) : f.rK ? (a = f.XR(c, f.vI(f.vx, b), !0), f.rK.sendMessage(e.qM + ":injectCode", a,
            function(a, b) {
              a || f.oy(f.rK, h);
              d(a, b)
            })) : d("Worker msger missing!!")
        })
      },
      vI: function(a, b) {
        if (!a || !b) throw Error("clientId or ns missing!!");
        return a + "_" + b
      },
      p7: function(a, b, c) {
        function d() {
          var b = Array.prototype.slice.call(arguments, 0);
          c.sendMessage.apply(c, [a].concat(b))
        }
        var e = this;
        if (!c) return function() {
          e.UQ || "untilCall" === e.B.lazy && e.Wy();
          b.apply(this.BC, arguments)
        };
        d._proxy2Worker = !0;
        return d
      },
      o5: function(a) {
        var b = {},
          c;
        for (c in a) a.hasOwnProperty(c) && this.zQ(c, a[c], b);
        return b
      },
      zQ: function(a, b, c) {
        b = b.call(null, !1);
        for (var d in b) b.hasOwnProperty(d) && (c[a + ":" + d] = b[d], a === this.$B && (c[d] = b[d]))
      },
      oy: function(a, b) {
        b || (this.BC || (this.BC = this.o5(this.nC)), b = this.BC);
        for (var c in b) if (b.hasOwnProperty(c)) {
          var d = b[c];
          "function" === typeof d && (this[c] = this.p7(c, d, a))
        }
        this.Saa = !!a
      },
      XR: function(a, b) {
        var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1,
          d = a.toString(),
          e,
          d = d.replace(/^function([^\(]*)\(/,
            function() {
              e = "_prep_h" + h++;
              return "function " + e + "("
            });
        return e ? "\n\t\t\t\t" + d + "\n\t\t\t\tif (self._wkHandlers['" + b + "'] && " + !c + ") {\n\t\t\t\t\tthrow new Error('" + b + " already exists!')\n\t\t\t\t} else {\n\t\t\t\t\tif (" + c + " && self._wkHandlers['" + b + "']) {\n\t\t\t\t\t\tvar handlerFunObj = " + e + ".call(null, self) || {}\n\n\t\t\t\t\t\tif (typeof Object.assign === 'function') {\n\t\t\t\t\t\t\tObject.assign(self._wkHandlers['" + b + "'], handlerFunObj)\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tfor (var key in handlerFunObj) {\n\t\t\t\t\t\t\t\tif (handlerFunObj.hasOwnProperty(key)) {\n\t\t\t\t\t\t\t\t\tself._wkHandlers['" + b + "'][key] = handlerFunObj[key]\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t\tself._wkHandlers['" + b + "'] = " + e + ".call(null, self) || {}\t\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t" + e + " = null;\n\t\t\t": (console.error("No function match!!"), !1)
      },
      Qaa: function(a) {
        var b = this.vx,
          c = [],
          d;
        for (d in this.nC) if (this.nC.hasOwnProperty(d)) {
          var f = this.XR(this.nC[d], this.vI(b, d));
          f && c.push(f)
        }
        b = this.B.libPolyfills || [];
        d = 0;
        for (f = b.length; d < f; d++) b[d] = "(" + b[d].toString() + ")(self);";
        var h = b.join(";\n") + ";\n" + c.join(";\n"),
          c = this.B.hostWorker,
          s = this;
        c && c !== s ? c.yN(function(b, c) {
          b ? a.call(s, b) : c.Rna.sendMessage(e.qM + ":injectCode", h,
            function(b) {
              b ? a.call(s, b) : a.call(s, null, c.bda)
            })
        }) : a.call(s, null, s.$ba(h))
      },
      $ba: function(a) {
        var b = {
          type: "text/javascript; charset=utf-8"
        };
        a = ["self._wkHandlers={};", a, "(" + d.toString() + ")(self)"].join("");
        var c;
        try {
          var e = window.URL || window.webkitURL,
            f = e.createObjectURL(new Blob([a], b));
          c = new Worker(f);
          setTimeout(function() {
              e.revokeObjectURL(f);
              f = null
            },
            3E3)
        } catch(h) {
          return
        }
        return c
      },
      c6: function(b) {
        var c = 1,
          d = b.n4,
          e = this,
          f = !!e.B.batchSend;
        return function(h) {
          var s = Array.prototype.slice.call(arguments, 1),
            r = "function" === typeof s[s.length - 1] ? s.pop() : null,
            u = e.vx,
            w = h.split(":"),
            v = e.$B;
          1 < w.length && (h = w[1], v = w[0]);
          s = {
            yw: a.c.xe(),
            DM: e.vI(u, v),
            Xy: !!r,
            mw: u + "_" + c++,
            bL: h,
            Rca: s
          };
          r && d.push({
            bL: s.bL,
            DM: s.DM,
            yw: s.yw,
            mw: s.mw,
            Xy: r
          });
          f ? e.Q4(b, s) : e.Bu(b, s)
        }
      },
      Bu: function(a, b) {
        if (this.Hn.length) {
          try {
            a.postMessage(b, this.Hn)
          } catch(c) {
            a.postMessage(b),
              console.error(c)
          }
          this.Hn.length = 0
        } else a.postMessage(b)
      },
      Q4: function(b, c) {
        b.pJ || (b.pJ = []);
        b.pJ.push(c);
        if (!b.rU) {
          var d = this;
          b.rU = setTimeout(function() {
              b.rU = null;
              var c = b.pJ;
              c.length && (d.Bu(b, 1 === c.length ? c[0] : {
                yw: a.c.xe(),
                Yka: c
              }), c.length = 0)
            },
            0)
        }
      },
      Sba: function(a) {
        var b = this;
        a.addEventListener("error",
          function(a) {
            console.error(a);
            b.oy(null)
          },
          !1);
        e.Rla(a)
      },
      l8: function(a, b) {
        var c = this;
        c.Sba(a);
        var d = this.c6(a);
        if (e.L5) b.call(c, null, {
          sendMessage: d
        });
        else {
          e.L5 = !0;
          var f = [c.RR() + ":checkup", Math.random().toFixed(5) + "", Math.round(1E3 * Math.random()), !1,
            function(a, e) {
              var h = !0;
              if (a || !e || e.length !== f.length - 2) h = !1;
              else for (var k = 0,
                          w = e.length; k < w; k++) if (e[k] !== f[k + 1]) {
                h = !1;
                break
              }
              h ? b.call(c, null, {
                sendMessage: d
              }) : (console.error(a), b.call(c, "Self checkup failed!!"))
            }];
          d.apply(c, f)
        }
      }
    });
    a.Xt = e
  })(g); (function() {
    if (!g.me) {
      g.me = {
        Fe: {},
        Lz: {}
      };
      var a = g.me,
        b = g.me.Fe,
        c = g.c,
        d = g.w;
      b.start = function(b) {
        a.Lz[b.id] = {
          I: b.I,
          time: {
            MY: c.xe()
          },
          sda: function() {
            return c.xe() - this.time.MY
          }
        }
      };
      b.end = function(b) {
        var d = a.Lz[b.id],
          e = d.time,
          d = c.bind(d.sda, d),
          l = b.index,
          m = b.key;
        "function" !== typeof b.Kc && (b.Kc = function() {});
        if (void 0 === e[m]) void 0 === l ? e[m] = d() : (e[m] = [], e[m][l] = d());
        else if (void 0 !== l && void 0 === e[m][l]) e[m][l] = d();
        else return b.Kc(Error("Duplicate Invoke"));
        b.Kc(null)
      };
      b.push = function(b) {
        var c = a.Lz[b.id].time,
          d = b.key,
          e = b.Yd;
        "function" !== typeof b.Kc && (b.Kc = function() {});
        if (void 0 === c[d]) c[d] = e;
        else return b.Kc(Error("Duplicate Invoke"));
        b.Kc(null)
      };
      b.send = function(b) {
        var c = d.Xb + "://webapi.amap.com/count?",
          k = g.extend(e({
            I: a.Lz[b.id].I
          }), b.params || {}),
          l = g.c;
        b.params && b.params.rs && !b.params.type && (b = a.Lz[b.id].time, delete b.MY, k = g.extend(k, b));
        b = [];
        for (var m in k) l.isArray(k[m]) ? b.push([m, k[m].join("-")].join("=")) : b.push([m, k[m]].join("="));
        b.push("jl=" + (d.Xz ? 1 : 0));
        if (l.Gk(window.performance, "performance") && l.Gk(window.performance.getEntriesByType, "function")) {
          var n = 0,
            p = ["webapi.amap.com", "100.69.169.127", "localhost"],
            q = ["/maps", "/css"];
          l.Tb(window.performance.getEntriesByType("resource"),
            function(a) {
              var b = void 0,
                c = void 0;
              a.name.match(/:\/\/([^:?#/] + ) / ) && (b = RegExp.$1);
              a.name.match(/[^\/](\/[^/ ? #: ] + ) / ) && (c = RegExp.$1);
              b && c && l.ea(p, b) && l.ea(q, c) && (n += parseInt(a.responseEnd - a.startTime))
            }); 0 !== n && b.push("sd=" + n)
        }
        new g.Wa.jb(c + b.join("&"))
      };
      var e = function(a) {
        var b = g.l;
        a = g.h.BX(a.I);
        return {
          type: "q",
          resolution: a.width + "*" + a.height,
          k: d.key,
          u: d.up,
          iw: b.Ye ? 1 : 0,
          cw: b.jW ? 1 : 0,
          gc: b.sM,
          m: b.W ? 1 : 0,
          cv: b.PD ? 1 : 0,
          pf: b.Us,
          dpr: window.devicePixelRatio,
          screenwidth: screen.width,
          scale: b.JG || 0,
          detect: b.ka ? 1 : 0,
          v: d.sp
        }
      }
    }
  })(); (function() {
    if (g.l.Ks && !g.QG) {
      var a = g.c.dM({
        w: "Conf",
        extend: "extend",
        l: "Browser",
        xt: "uncodeCoords"
      });
      g.QG = function() {
        var b = new g.Xt(function() {
            return {
              r: function() {
                this.gu = {
                  Ki: 0,
                  Ws: 0
                };
                this.lj = {};
                this.sm = [];
                this.Fn = {};
                this.yi = {};
                this.hr = 0;
                this.hT = 500
              },
              ii: function(a, b) {
                var e = a.vc,
                  f = a.Xe;
                this.Vc ? a.Be.Vc = this.Vc: this.Vc = a.Be.Vc;
                var h = "building" === a.ia[0]; (f && e !== this.gu.Ws && this.gu.Ws || !f && !h && e !== this.gu.Ki && this.gu.Ki) && this.vca( !! f);
                f ? this.gu.Ws = e: h || (this.gu.Ki = e);
                this.$ha(a, b)
              },
              vca: function(a) {
                if (a) this.vQ();
                else if (!a && Object.keys(this.lj).length) for (var b in this.lj) this.lj.hasOwnProperty(b) && (a = this.lj[b], a.br || a.abort())
              },
              Jma: function() {
                this.hr > this.hT && this.cO(Object.keys(this.yi).slice(0, Math.floor(this.hT / 2)))
              },
              cO: function(a) {
                for (var b = 0,
                       e = a.length; b < e; b++) delete this.yi[a[b]];
                this.hr -= a.length
              },
              yea: function(a) {
                var b = a.ia;
                a = a.Xe;
                var e = new XMLHttpRequest;
                e.xo = "";
                e.FA = [(new Date).getTime(), a ? 1 : 0, b.join("|")].join("-");
                return e
              },
              wY: function(a, b, e) {
                var f = this,
                  h = a.qb,
                  k = a.Xe,
                  l = [],
                  m = h.filter(function(a) {
                    var b = f.yi[a.key];
                    if (b) {
                      if (b.ZS) return ! 0;
                      l.push(a.key)
                    }
                    return ! 1
                  }),
                  n = !1;
                if (m.length && ((n = m.length === h.length) || "function" !== typeof b || b(a, m), !k)) {
                  var p = [];
                  m.forEach(function(a) {
                    a = a.key;
                    p.push.apply(p, f.yi[a]);
                    delete f.yi[a]
                  });
                  this.hr -= m.length;
                  this.sq(this.extend({},
                    a, {
                      fB: p,
                      vc: a.vc,
                      Fj: n
                    }), e)
                } ! k && l.length && this.cO(l);
                this.Jma();
                return n
              },
              $ha: function(a, b) {
                function e(e, f) {
                  var m = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1;
                  if (p.lj[q.FA] || p.c8(q)) {
                    var n = e.split("|");
                    f && (n[0] = f + n[0]);
                    var t = n,
                      x = "";
                    n[n.length - 1] && (x = n[n.length - 1], t = n.splice(0, n.length - 1));
                    if (k) for (var n = 0,
                                  B = t.length; n < B; n++) {
                      if (t[n]) {
                        var z = JSON.parse(t[n]);
                        if (z.length) {
                          var C = z[0].split("-").slice(0, -1).join("/");
                          p.yi[C] ? p.yi[C].push(z) : (p.yi[C] = [z], p.hr++);
                          m && (p.yi[C].ZS = !0)
                        }
                      }
                    } else p.sq(p.extend({},
                      a, {
                        fB: t,
                        vc: h,
                        Fj: m,
                        OM: !0
                      }), b);
                    return x
                  }
                  s || (p.fk(l, b), s = !0)
                }
                var f = this,
                  h = a.vc,
                  k = a.Xe,
                  l = a.qb,
                  m = a.url;
                if (!this.wY(a,
                    function(a, b) {
                      var c = a.qb,
                        d = a.url,
                        e = d.match(/&t=([^&]+)/)[1].split(";");
                      b.reverse().forEach(function(a) {
                        a = c.indexOf(a); - 1 !== a && e.splice(a, 1)
                      });
                      a.url = d.replace(/&t=[^&]+/, "&t=" + e.join(";"))
                    },
                    b)) {
                  if (this.zy() && (this.vQ(), k)) {
                    this.fk(l, b);
                    return
                  }
                  var n = 0,
                    p = this,
                    q = this.yea(a);
                  k ? this.sm.push(q) : (this.lj[q.FA] = q, q.qb = l, q.Kc = b);
                  var s = !1;
                  q.onreadystatechange = function() {
                    if (4 === q.readyState && 0 === q.status) q.br || (q.br = !0, f.fk(l, b), q.onreadystatechange = null, k ? f.CU(q) : delete f.lj[q.FA]),
                      q = null;
                    else if (!q.br) if (3 === q.readyState) {
                      var h = q.responseText.substring(n);
                      q.xo = e(h, q.xo);
                      n = q.responseText.length
                    } else 4 === q.readyState && (h = q.responseText.substring(n), a.Kf && (h += "|"), e(h, q.xo, !0), q.xo = "", k ? f.CU(q) : delete f.lj[q.FA], q = null)
                  };
                  q.onerror = function() {};
                  q.open("GET", m, !0);
                  q.send();
                  k && (q.E1 = l.map(function(a) {
                    return a.key
                  }))
                }
              },
              kA: function(a) {
                function b(d, p, s) {
                  var r = [s, d, p].join("/");
                  18 < k && !n && (r += "/" + k);
                  if ((d = e.filter(function(a) {
                      return a.key === r
                    })[0]) && "loaded" !== d.status && -1 !== m.indexOf(t)) if ("limg" === t) p = h[1],
                    d.Cc = p,
                  "string" === typeof p.b && (p.b = v.Ax(p.b)),
                    s = "",
                  (s = "object" === typeof p.u ? p.u.url: p.u) && (p.u = {
                    url: s,
                    Zi: "limg-" + d.key + "-" + f
                  });
                  else {
                    p = {
                      Wi: d.qa,
                      Wl: r,
                      ya: h,
                      Fc: t,
                      EK: a.Rr,
                      aF: "building" === t,
                      vh: "poilabel" === t || "roadlabel" === t || "building" === t && q
                    };
                    if ("poilabel" === t || "roadlabel" === t) p.Cc = d.Cc;
                    t === m[m.length - 1] && (d.status = "loaded");
                    l.push(p)
                  }
                }
                var e = a.qb,
                  f = a.aN,
                  h = a.gz,
                  k = a.vc,
                  l = a.Zc,
                  m = a.ia,
                  n = a.Ye,
                  p = a.uM,
                  q = a.Dd,
                  s = h[0].split("-"),
                  r = parseInt(s[1]),
                  u = parseInt(s[2]),
                  w = parseInt(s[0]),
                  v = this,
                  t = s[3],
                  s = Math.pow(2, w);
                10 > w && (r <= p && b(r + s, u, w), r >= s - p && b(r - s, u, w));
                b(r, u, w)
              },
              CU: function(a) {
                for (var b = this.sm.length - 1; 0 <= b; b--) this.sm[b] === a && this.sm.splice(b, 1)
              },
              c8: function(a) {
                for (var b = 0,
                       e = this.sm.length; b < e; b++) if (this.sm[b] === a) return ! 0;
                return ! 1
              },
              zy: function() {
                return Object.keys(this.lj).length ? !0 : !1
              },
              vQ: function() {
                if (this.sm.length) {
                  for (var a = this.sm.length - 1; 0 <= a; a--) {
                    var b = this.sm[a];
                    b.br || b.abort();
                    b.E1 && this.cO(b.E1)
                  }
                  this.sm.length = 0
                }
              },
              fk: function(a, b) {
                b(null, {
                    qb: a,
                    dZ: !0,
                    disabled: this.disabled
                  },
                  {
                    Yn: !0
                  })
              }
            }
          },
          {
            batchSend: !1
          });
        b.Fk(null, new Function("\n     return {\n      " + a.Conf + ": " + JSON.stringify(g.w) + ",\n      " + a.extend + ": " + g.extend.toString() + ",\n      " + a.Browser + ": " + JSON.stringify(g.l) + ",\n      " + a.uncodeCoords + ": " + g.c.xt.toString() + "\n     }"));
        return b
      }
    }
  })();g.h = {
    CLASS_NAME: "DomUtil",
    get: function(a) {
      return "string" === typeof a ? document.getElementById(a) : a
    },
    zz: function(a) {
      if (!a) return [0, 0];
      var b = a.clientWidth,
        c = a.clientHeight;
      b && c || !a.childNodes[0] || (b = b || a.childNodes[0].clientWidth, c = c || a.childNodes[0].clientHeight);
      window.opera && (b = Math.max(b, a.childNodes[0].scrollWidth), c = Math.max(c, a.childNodes[0].scrollHeight));
      return [b, c]
    },
    asa: function(a, b) {
      var c = document.head || document.getElementsByTagName("head")[0];
      if (c) {
        var d = document.createElement("link");
        d.setAttribute("rel", "stylesheet");
        d.setAttribute("type", "text/css");
        d.setAttribute("href", a);
        b ? c.appendChild(d) : c.insertBefore(d, c.firstChild)
      } else document.write("<link rel='stylesheet' href='" + a + "'/>")
    },
    Ad: function(a, b) {
      var c = a.style[b]; ! c && a.currentStyle && (c = a.currentStyle[b]);
      c && "auto" !== c || !document.defaultView || (c = (c = document.defaultView.getComputedStyle(a, null)) ? c[b] : null);
      c && "auto" !== c || "height" !== b || (c = a.clientHeight + "px");
      c && "auto" !== c || "width" !== b || (c = a.clientWidth + "px");
      return "auto" === c ? null: c
    },
    KE: function(a) {
      g.a.add(this, "getViewport");
      if (a) return new g.bd(a.clientWidth || document.body.clientWidth, a.clientHeight || (g.l.Zp ? "CSS1Compat" === document.compatMode ? document.documentElement.clientHeight: document.body.clientHeight: document.body.clientHeight), !0)
    },
    BX: function(a) {
      return new g.bd(a.clientWidth, a.clientHeight)
    },
    pM: function(a) {
      g.a.add(this, "getViewportOffset");
      var b = 0,
        c = 0,
        d = a,
        e = document.body,
        f = document.documentElement,
        h, k = g.l.$p;
      do {
        b += d.offsetTop || 0;
        c += d.offsetLeft || 0;
        b += parseInt(g.h.Ad(d, "borderTopWidth"), 10) || 0;
        c += parseInt(g.h.Ad(d, "borderLeftWidth"), 10) || 0;
        h = g.h.Ad(d, "position");
        if (d.offsetParent === e && "absolute" === h) break;
        if ("fixed" === h) {
          b += e.scrollTop || f.scrollTop || 0;
          c += e.scrollLeft || f.scrollLeft || 0;
          break
        }
        d = d.offsetParent
      } while ( d );
      d = a;
      do {
        if (d === e) break;
        b -= d.scrollTop || 0;
        c -= d.scrollLeft || 0;
        g.h.Xea() || !g.l.o2 && !k || (c += d.scrollWidth - d.clientWidth, k && "hidden" !== g.h.Ad(d, "overflow-y") && "hidden" !== g.h.Ad(d, "overflow") && (c += 17));
        d = d.parentNode
      } while ( d );
      return new g.F(c, b)
    },
    Xea: function() {
      g.h.s6 || (g.h.s6 = !0, g.h.r6 = "ltr" === g.h.Ad(document.body, "direction"));
      return g.h.r6
    },
    create: function(a, b, c) {
      g.a.add(this, "create");
      a = document.createElement(a);
      c && (a.className = c);
      b && b.appendChild(a);
      return a
    },
    QW: function() {
      document.selection && document.selection.empty && document.selection.empty();
      this.Y$ || (this.Y$ = document.onselectstart, document.onselectstart = g.c.lX)
    },
    dX: function() {},
    Cma: function(a, b, c) {
      c ? this.Ka(a, b) : this.Ra(a, b)
    },
    Km: function(a, b) {
      g.a.add(this, "hasClass");
      if (a && b) return 0 < a.className.length && RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className)
    },
    Ka: function(a, b) {
      a && b && (a.classList && a.classList.add ? a.classList.add(b) : g.h.Km(a, b) || (a.className += (a.className ? " ": "") + b))
    },
    vla: function(a, b) {
      a && (a.className = b || "")
    },
    Ra: function(a, b) {
      function c(a, c) {
        return c === b ? "": a
      }
      a && b && (a.classList && a.classList.remove ? a.classList.remove(b) : a.className = a.className.replace(/(\S+)\s*/g, c).replace(/(^\s+|\s+$)/, ""))
    },
    QX: function(a, b) {
      return 1 === b ? "": "opacity" in a.style ? "opacity:" + b: 8 <= document.documentMode ? "-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity=" + Math.ceil(100 * b) + ")'": "filter:alpha(opacity=" + Math.ceil(100 * b) + ")"
    },
    Eo: function(a, b) {
      g.a.add(this, "setOpacity");
      if (a.style) if ("opacity" in a.style) a.style.opacity = b;
      else if ("filter" in a.style) {
        var c = Math.round(100 * b);
        a.style.filter = "";
        100 !== c && (a.style.filter = " progid:DXImageTransform.Microsoft.Alpha(opacity=" + c + ")")
      }
    },
    NO: function(a) {
      for (var b = document.documentElement.style,
             c = 0; c < a.length; c += 1) if (a[c] in b) return a[c];
      return ! 1
    },
    dY: function(a) {
      var b = g.l.p2;
      return "translate" + (b ? "3d": "") + "(" + a.x + "px," + a.y + "px" + ((b ? ",0": "") + ")")
    },
    sra: function(a, b) {
      return g.h.dY(b.add(b.Bd( - 1 * a))) + (" scale(" + a + ") ")
    },
    P0: function(a, b, c) {
      a.Mh = b; ! c && g.l.CD ? (b = g.h.dY(b), c = a.style[g.h.Af].split("rotate"), 1 < c.length ? (c[0] = b, a.style[g.h.Af] = c.join("rotate")) : a.style[g.h.Af] = b, g.l.KZ && (a.style.WebkitBackfaceVisibility = "hidden")) : (a.style.left = b.x + "px", a.style.top = b.y + "px")
    },
    be: function(a) {
      a.Mh || (a.Mh = a.style.left ? new g.F(parseInt(a.style.left), parseInt(a.style.top)) : new g.F(0, 0));
      return a.Mh
    },
    Cta: function(a, b) {
      a = a instanceof Array ? a: [a];
      for (var c = 0; c < a.length; c += 1) a[c].style.cssText = b
    },
    I0: function(a, b) {
      ";" !== b[b.length - 1] && (b += ";");
      return b.toLowerCase() !== a.style.cssText.replace(/ /g, "").toLowerCase() ? (a.style.cssText = b, !0) : !1
    },
    Na: function(a, b) {
      g.a.add(this, "setCss");
      a = a instanceof Array ? a: [a];
      for (var c = 0; c < a.length; c += 1) for (var d in b) b.hasOwnProperty(d) && (a[c].style[d] = b[d]);
      return this
    },
    zA: function(a) {
      for (g.a.add(this, "empty"); a.childNodes.length;) a.removeChild(a.childNodes[0])
    },
    remove: function(a) {
      g.a.add(this, "remove");
      a && a.parentNode && a.parentNode.removeChild(a)
    },
    rotate: function(a, b, c) {
      g.a.add(this, "rotate");
      var d = g.h.Af;
      c = c || {
          x: a.clientWidth / 2,
          y: a.clientHeight / 2
        };
      d ? (a.style[d] = "" + (" rotate(" + b + "deg)"), a.style[g.h.Jq[d] + "-origin"] = c.x + "px " + c.y + "px") : (d = Math.cos(b * Math.PI / 180), b = Math.sin(b * Math.PI / 180), a.style.filter = "progid:DXImageTransform.Microsoft.Matrix()", 0 < a.filters.length && (a = a.filters.item(0), a.Dx = -c.x * d + c.y * b + c.x, a.Dy = -c.x * b - c.y * d + c.y, a.M11 = a.M22 = d, a.M12 = -(a.M21 = b)))
    },
    $X: function(a, b, c) {
      var d = g.h.Af;
      c = c || {
          x: a.clientWidth / 2,
          y: a.clientHeight / 2
        };
      return d ? g.h.Jq[d] + ":" + ("" + (" rotate(" + b + "deg)")) + ";" + (g.h.Jq[d] + "-origin:" + c.x + "px " + c.y + "px") : ""
    },
    dn: function(a, b, c) {
      a.width = b;
      a.height = c
    },
    getElementsByClassName: function(a, b, c) {
      b = b || "*";
      c = c || document;
      if (c.getElementsByClassName) return c.getElementsByClassName(a);
      b = c.getElementsByTagName(b);
      a = RegExp("(^|\\s)" + a + "(\\s|$)");
      c = [];
      for (var d = 0,
             e; d < b.length; d++) e = b[d],
      a.test(e.className) && c.push(e);
      return c
    },
    fillText: function(a, b) {
      if (a) return void 0 !== a.textContent ? a.textContent = b: void 0 !== a.innerText ? a.innerText = b: a.innerHTML = b,
        a
    }
  }; (function() {
    var a = g.h.NO(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]),
      b;
    g.extend(g.h, {
      QW: function() {
        g.C.g(window, "selectstart", g.C.preventDefault);
        if (a) {
          var c = document.documentElement.style;
          "none" !== c[a] && (b = c[a], c[a] = "none")
        }
      },
      dX: function() {
        g.C.H(window, "selectstart", g.C.preventDefault);
        a && "none" !== b && (document.documentElement.style[a] = b, b = "none")
      },
      Pea: function() {
        g.C.g(window, "dragstart", g.C.preventDefault)
      },
      rfa: function() {
        g.C.H(window, "dragstart", g.C.preventDefault)
      }
    })
  })();g.h.Af = g.h.NO(["WebkitTransform", "OTransform", "MozTransform", "msTransform", "transform"]);g.h.Jq = {
    transform: "transform",
    WebkitTransform: "-webkit-transform",
    OTransform: "-o-transform",
    MozTransform: "-moz-transform",
    msTransform: "-ms-transform"
  };g.h.CB = g.h.NO(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);g.h.Koa = "webkitTransition" === g.h.CB || "OTransition" === g.h.CB ? g.h.CB + "End": "transitionend";g.C = {
    g: function(a, b, c, d) {
      function e(b) {
        b = b || window.event;
        b.target = b.target || b.srcElement;
        return c.call(d || a, b, k)
      }
      var f = g.c.Pb(a) + "_" + g.c.Pb(c) + "_" + g.c.Pb(d || a),
        h = b + f;
      if (a[h]) return this;
      var k = b;
      g.l.FL && "mousewheel" === b && (b = "DOMMouseScroll");
      if (g.l.Zp && ("mouseover" === b || "mouseout" === b)) {
        var l = e;
        b = "mouseover" === b ? "mouseenter": "mouseleave";
        e = function(a) {
          l(a)
        }
      }
      if (g.l.F_ && 0 === b.indexOf("touch")) return a[h] = e,
        this.Dca(a, b, e, f);
      g.l.ef && "dblclick" === b && this.Bca && this.Bca(a, e, f);
      "addEventListener" in a ? a.addEventListener(b, e, !1) : "attachEvent" in a ? a.attachEvent("on" + b, e) : a["on" + b] = e;
      a[h] = e;
      return this
    },
    Kk: function(a, b, c, d) {
      var e = this;
      this.g(a, b,
        function h(k) {
          e.H(a, b, h, d);
          return c.call(d || a, k || window.event, b)
        },
        d)
    },
    H: function(a, b, c, d) {
      c = g.c.Pb(a) + "_" + g.c.Pb(c) + "_" + g.c.Pb(d || a);
      d = b + c;
      var e = a[d];
      g.l.FL && "mousewheel" === b && (b = "DOMMouseScroll"); ! g.l.Zp || "mouseover" !== b && "mouseout" !== b || (b = "mouseover" === b ? "mouseenter": "mouseleave");
      g.l.F_ && -1 < b.indexOf("touch") ? this.Eka(a, b, c) : g.l.ef && "dblclick" === b && this.Aka ? this.Aka(a, c) : "removeEventListener" in a ? a.removeEventListener(b, e, !1) : "detachEvent" in a && -1 === b.indexOf("touch") ? e && a.detachEvent("on" + b, e) : a["on" + b] = null;
      a[d] = null;
      return this
    },
    Ita: function(a, b) {
      var c = document.createEvent("MouseEvents");
      c.initMouseEvent(a, !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null);
      b.target.dispatchEvent(c)
    },
    stopPropagation: function(a) {
      a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
      return this
    },
    ema: function(a) {
      var b = g.C.stopPropagation;
      g.l.ef && (g.C.g(a, "touchstart", b, this), g.C.g(a, "touchmove", b, this), g.C.g(a, "touchend", b, this));
      g.l.W || (g.C.g(a, "mousedown", b, this), g.C.g(a, "mouseup", b, this), g.C.g(a, "mousemove", b, this));
      g.l.QN && (g.C.g(a, "pointerdown", b, this), g.C.g(a, "pointerup", b, this), g.C.g(a, "pointermove", b, this));
      g.l.MZ && (g.C.g(a, "MSPointerDown", b, this), g.C.g(a, "MSPointerUp", b, this), g.C.g(a, "MSPointerMove", b, this))
    },
    preventDefault: function(a) {
      a.preventDefault ? a.preventDefault() : a.returnValue = !1;
      return this
    },
    stop: function(a) {
      return g.C.preventDefault(a).stopPropagation(a)
    },
    ula: function(a) {
      return a && a.getBoundingClientRect ? (a.qH = a.getBoundingClientRect(), a.iQ = [a.clientLeft, a.clientTop], !0) : !1
    },
    lna: function(a) {
      a.qH && (a.qH = null, a.iQ = null)
    },
    wfa: function(a, b) {
      var c = b.qH || b.getBoundingClientRect(),
        d = b.iQ || [b.clientLeft, b.clientTop];
      return new g.F(a.clientX - c.left - d[0], a.clientY - c.top - d[1])
    },
    Ck: function(a, b) {
      if (b && b.getBoundingClientRect) return this.wfa(a, b);
      var c = document.body,
        d = document.documentElement,
        c = new g.F(g.l.ef ? a.pageX: a.clientX + (c.scrollLeft || d.scrollLeft), g.l.ef ? a.pageY: a.clientY + (c.scrollTop || d.scrollTop));
      return b ? c.Sa(g.h.pM(b)) : c
    },
    aZ: function(a) {
      return 1 === a.which || 0 === a.button || 1 === a.button
    }
  };g.extend(g.C, {
    oJ: [],
    kT: !1,
    Dca: function(a, b, c, d) {
      switch (b) {
        case "touchstart":
          return this.Gca(a, b, c, d);
        case "touchend":
          return this.Eca(a, b, c, d);
        case "touchmove":
          return this.Fca(a, b, c, d)
      }
    },
    Hm: function(a) {
      if (g.l.QN) return a;
      switch (a) {
        case "pointerdown":
          return "MSPointerDown";
        case "pointerup":
          return "MSPointerUp";
        case "pointercancel":
          return "MSPointerCancel";
        case "pointermove":
          return "MSPointerMove"
      }
    },
    Gca: function(a, b, c, d) {
      function e(a) {
        for (var b = !1,
               d = 0; d < f.length; d += 1) if (f[d].pointerId === a.pointerId) {
          b = !0;
          break
        }
        b || f.push(a);
        a.touches = f.slice();
        a.changedTouches = [a];
        c(a)
      }
      var f = this.oJ;
      a["_amap_touchstart" + d] = e;
      a.addEventListener(this.Hm("pointerdown"), e, !1);
      this.kT || (a = function(a) {
        for (var b = 0; b < f.length; b += 1) if (f[b].pointerId === a.pointerId) {
          f.splice(b, 1);
          break
        }
      },
        document.documentElement.addEventListener(this.Hm("pointerup"), a, !1), document.documentElement.addEventListener(this.Hm("pointercancel"), a, !1), this.kT = !0);
      return this
    },
    Fca: function(a, b, c, d) {
      function e(a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE || 0 !== a.buttons) {
          for (var b = 0; b < f.length; b += 1) if (f[b].pointerId === a.pointerId) {
            f[b] = a;
            break
          }
          a.touches = f.slice();
          a.changedTouches = [a];
          c(a)
        }
      }
      var f = this.oJ;
      a["_amap_touchmove" + d] = e;
      a.addEventListener(this.Hm("pointermove"), e, !1);
      return this
    },
    Eca: function(a, b, c, d) {
      function e(a) {
        for (var b = 0; b < f.length; b += 1) if (f[b].pointerId === a.pointerId) {
          f.splice(b, 1);
          break
        }
        a.touches = f.slice();
        a.changedTouches = [a];
        c(a)
      }
      var f = this.oJ;
      a["_amap_touchend" + d] = e;
      a.addEventListener(this.Hm("pointerup"), e, !1);
      a.addEventListener(this.Hm("pointercancel"), e, !1);
      return this
    },
    Eka: function(a, b, c) {
      c = a["_amap_" + b + c];
      switch (b) {
        case "touchstart":
          a.removeEventListener(this.Hm("pointerdown"), c, !1);
          break;
        case "touchmove":
          a.removeEventListener(this.Hm("pointermove"), c, !1);
          break;
        case "touchend":
          a.removeEventListener(this.Hm("pointerup"), c, !1),
            a.removeEventListener(this.Hm("pointercancel"), c, !1)
      }
      return this
    }
  }); (function() {
    function a(a) {
      var b = a.target || a.srcElement;
      b.rQ && f(b.rQ);
      b.rQ = e(function() {
        var c = b.qn;
        if (c && c.pn) for (var d = 0; d < c.pn.length; d += 1) c.pn[d].call(c, a)
      })
    }
    function b() {
      var b = this.contentDocument.defaultView;
      b.qn = this.x4;
      b.addEventListener("resize", a);
      a.call(b, {
        target: b
      })
    }
    var c = document.attachEvent,
      d = navigator.userAgent.match(/(Trident|Edge)/),
      e = g.c.Ac,
      f = g.c.ph;
    g.extend(g.C, {
      Ica: function(e, f) {
        if (!e.pn) if (e.pn = [], c) e.qn = e,
          e.attachEvent("onresize", a);
        else {
          "static" === window.getComputedStyle(e).position && (e.style.position = "relative");
          var l = e.qn = document.createElement("object");
          l.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;");
          l.x4 = e;
          l.onload = b;
          l.type = "text/html";
          d && e.appendChild(l);
          l.data = "about:blank";
          d || e.appendChild(l)
        }
        e.pn.push(f)
      },
      Zsa: function(b, d) {
        b.pn.splice(b.pn.indexOf(d), 1);
        b.pn.length || (c ? b.detachEvent("onresize", a) : (b.qn.contentDocument.defaultView.removeEventListener("resize", a), b.qn = !b.removeChild(b.qn)))
      },
      Qda: function(a) {
        a.pn = null;
        if (a.qn) {
          var b = a.qn;
          b.parentNode === a && b.parentNode.removeChild(b);
          a.qn = null
        }
      }
    })
  })();g.mb = {
    Fia: g.w.Ab + "/maps",
    bs: g.X.bs,
    hN: 0,
    Yv: [],
    Yr: {},
    yg: function(a, b) {
      function c() {
        d += 1;
        d === e.length && b && b()
      }
      a.length || b();
      for (var d = 0,
             e = [], f = 0; f < a.length; f += 1) {
        var h = this.bs[a[f]];
        if (h) for (var k = 0; k < h.length; k += 1) e.push(h[k]);
        e.push(a[f])
      }
      for (f = 0; f < e.length; f += 1) this.DL(e[f], c)
    },
    Pz: function(a) {
      for (var b = 0; b < a.length; b += 1) if (1 !== this.hz(a[b]).status) return ! 1;
      return ! 0
    },
    DL: function(a, b) {
      var c = this.hz(a);
      if (1 === c.status) b && b();
      else {
        b && c.Tu.push(b);
        try {
          if (g.l.Jj && window.localStorage) {
            var d = window.localStorage["_AMap_" + a];
            d && (d = JSON.parse(d), d.version === g.w.oi ? (window._jsload_(a, d.script, !0), d.css && window._cssload_(a, d.css, !0)) : window.localStorage.removeItem("_AMap_" + a))
          }
        } catch(e) {}
        if (0 === c.status) {
          this.lka(a);
          var f = this;
          f.hN || (f.hN = 1, window.setTimeout(function() {
              f.hN = 0;
              var a = f.Fia + "/modules?v=" + g.w.sp + "&key=" + g.w.key + "&m=" + f.Yv.join(",") + "&vrs=" + g.w.oi;
              g.mb.er(f.Yv.join(","));
              f.Yv = [];
              c.dG = f.fia(a)
            },
            1));
          c.status = -1
        }
      }
    },
    er: function(a) {
      a = g.w.Cd + "/v3/log/init?" + ["s=rsv3&product=JsModule&key=" + g.w.key, "m=" + a].join("&");
      new g.Wa.jb(a, {
        callback: "callback"
      })
    },
    load: function(a, b) {
      var c = this.bs[a];
      if (c) {
        for (var d = [], e = 0; e < c.length; e += 1) d.push(c[e]);
        d.push(a);
        for (var f = 0,
               c = function() {
                 f += 1;
                 f === d.length && b && b()
               },
               e = 0; e < d.length; e += 1) this.DL(d[e], c)
      } else this.DL(a, b)
    },
    lka: function(a) {
      for (var b = 0; b < this.Yv.length; b += 1) if (this.Yv[b] === a) return;
      this.Yv.push(a)
    },
    Ul: function(a, b) {
      var c = this.hz(a);
      try {
        eval(b)
      } catch(d) {
        return
      }
      c.status = 1;
      for (var e = 0,
             f = c.Tu.length; e < f; e += 1) c.Tu[e]();
      c.Tu = []
    },
    Xpa: function(a, b) {
      var c = this;
      c.timeout = setTimeout(function() {
          1 !== c.Yr[a].status ? (c.remove(a), c.load(a, b)) : clearTimeout(c.timeout)
        },
        5E3)
    },
    hz: function(a) {
      this.Yr[a] || (this.Yr[a] = {},
        this.Yr[a].status = 0, this.Yr[a].Tu = []);
      return this.Yr[a]
    },
    remove: function(a) {
      this.Yr[a] = null
    },
    fia: function(a) {
      g.w.mode && (a += "&mode=" + g.w.mode);
      var b = document.createElement("script");
      b.charset = "utf-8";
      a && 0 === a.indexOf(g.w.Ab) && (b.crossOrigin = "Anonymous");
      b.src = a;
      document.body.appendChild(b);
      return b
    }
  };window._jsload_ = function(a, b, c) {
    var d = g.mb.hz(a);
    d.dG && 0 <= g.c.indexOf(document.body.childNodes, d.dG) && document.body.removeChild(d.dG);
    d.dG = null;
    try {
      if (!c && window.localStorage && b && "" !== b && g.l.Jj) {
        var e = window.localStorage["_AMap_" + a],
          e = e || "{}",
          e = JSON.parse(e);
        e.version !== g.w.oi || e.script ? window.localStorage.setItem("_AMap_" + a, JSON.stringify({
          version: g.w.oi,
          script: b
        })) : window.localStorage.setItem("_AMap_" + a, JSON.stringify({
          version: g.w.oi,
          script: b,
          css: e.css
        }))
      }
    } catch(f) {}
    g.mb.Ul(a, b)
  };window._cssload_ = function(a, b, c) {
    try { ! c && window.localStorage && b && "" !== b && g.l.Jj && window.localStorage.setItem("_AMap_" + a, JSON.stringify({
      css: b,
      version: g.w.oi
    }))
    } catch(d) {}
    var e = document.createElement("style");
    e.type = "text/css"; - 1 === g.w.Ab.indexOf("webapi.amap.com") && (b = b.replace(/webapi.amap.com/gi, g.w.Ab.split("://")[1]));
    "https" === g.w.Xb && (b = b.replace(/http:/gi, "https:"));
    e.styleSheet ? (a = function() {
      try {
        e.styleSheet.cssText = b
      } catch(a) {}
    },
      e.styleSheet.disabled ? setTimeout(a, 10) : a()) : e.appendChild(document.createTextNode(b));
    a = document.head || document.getElementsByTagName("head")[0];
    2 > a.childNodes.length ? a.appendChild(e) : a.insertBefore(e, a.childNodes[1])
  }; (function(a) {
    var b = g.l;
    if (!g.indexedDB && b.yf) {
      var c = a.indexedDB || a.webkitIndexedDB || a.msIndexedDB || a.mozIndexedDB,
        d = a.IDBKeyRange || a.mua || a.msa || a.lsa;
      if (c) {
        var e = g.c,
          f = null;
        a = "amap-jsapi" + (a.noa ? "-debug": "");
        var h = g.extend({},
          g.la),
          k;
        try {
          k = c.open(a),
            k.onsuccess = function() {
              f = this.result;
              h.o("dbReady", {
                status: "success"
              })
            },
            k.onerror = function() {
              h.o("dbReady", {
                status: "error"
              })
            },
            k.onblocked = function() {
              h.o("dbReady", {
                status: "blocked"
              })
            },
            k.onupgradeneeded = function(a) {
              a.currentTarget.result.createObjectStore("tile", {
                keyPath: "tileKey"
              })
            }
        } catch(l) {
          b.yf = !1
        } finally {
          if (!b.yf) return
        }
        var b = function(a) {
            return function() {
              try {
                return a.apply(this, arguments)
              } catch(b) {
                var c = arguments[arguments.length - 1];
                "function" === typeof c && setTimeout(function() {
                    c({
                      code: 4,
                      Cqa: b
                    })
                  },
                  1)
              }
            }
          },
          m = b(function(a, b) {
            return null === f ? (setTimeout(function() {
                b && b({
                  code: 3
                })
              },
              1), null) : f.transaction("tile", a).objectStore("tile")
          }),
          n = function(a, b) {
            for (var c = -1,
                   d = 0,
                   e = b.length; d < e; d++) if (b[d] > a) {
              c = d;
              break
            }
            return c
          };
        g.indexedDB = {
          Ly: function(a, b) {
            f ? "function" === typeof a && a() : h.g("dbReady",
              function(c) {
                "success" === c.status ? "function" === typeof a && a() : "function" === typeof b && b({
                    code: 3,
                    status: status
                  })
              })
          },
          count: b(function(a) {
            var b = this,
              c = arguments;
            this.Ly(function() {
                b.er.apply(b, c)
              },
              a)
          }),
          er: b(function(a) {
            var b = m("readonly", a).count();
            b.onsuccess = function() {
              a(null, b.result)
            };
            b.onerror = function() {
              a({
                code: 7
              })
            }
          }),
          get: b(function(a, b) {
            var c = this,
              d = arguments;
            this.Ly(function() {
                c.M6.apply(c, d)
              },
              b)
          }),
          M6: b(function(a, b) {
            var c = m("readonly", b);
            if (e.isArray(a)) {
              var f = [],
                h = a.slice(0);
              a.sort();
              c.openCursor(d.bound(a[0], a[a.length - 1])).onsuccess = function(c) {
                if (c = c.target.result) {
                  var d = e.indexOf(h, c.value.tileKey); - 1 !== d && (f[d] = c.value);
                  c["continue"](a[n(c.value.tileKey, a)])
                } else b && b(null, f.filter(function(a) {
                  return void 0 !== a
                }))
              }
            } else c = c.get(a),
              c.onsuccess = function(a) {
                b && b(null, a.target.result)
              },
              c.onerror = function() {
                b && b({
                  code: 1
                })
              }
          }),
          add: b(function(a, b) {
            var c = this,
              d = arguments;
            this.Ly(function() {
                c.B4.apply(c, d)
              },
              b)
          }),
          B4: b(function(a, b) {
            function c() {
              0 === --f && b(null)
            }
            e.isArray(a) || (a = [a]);
            var d = a.length,
              f = d,
              h = 0,
              l = Math.ceil(d / 5),
              k = setInterval(function() {
                  if (h++<l) {
                    var e = 5 * h;
                    e > d && (e = d);
                    for (var f = m("readwrite", b), n = 5 * (h - 1); n < e; n++) {
                      var u = f.put(a[n]);
                      u.onsuccess = u.onerror = c
                    }
                  } else clearInterval(k)
                },
                32)
          }),
          remove: b(function(a, b) {
            var c = this,
              d = arguments;
            this.Ly(function() {
                c.gba.apply(c, d)
              },
              b)
          }),
          gba: b(function(a, b) {
            var c = m("readwrite", b);
            e.isArray(a) || (a = [a]);
            a = a.sort();
            c.openCursor(d.bound(a[0], a[a.length - 1])).onsuccess = function(c) {
              if (c = c.target.result) {
                if (e.ea(c.value.tileKey, a)) c["delete"]();
                c["continue"](a[n(c.value.tileKey, a)])
              } else b && b(null)
            }
          }),
          clear: b(function(a) {
            var b = this,
              c = arguments;
            this.Ly(function() {
                b.QB.apply(b, c)
              },
              a)
          }),
          QB: b(function(a) {
            var b = m("readwrite", a).clear();
            b.onsuccess = function() {
              a && a(null)
            };
            b.onerror = function() {
              a && a({
                code: 2
              })
            }
          })
        }
      } else b.yf = !1
    }
  })(window); (function() {
    function a(a) {
      u.data.keys = u.data.keys.filter(function(b) {
        return ! s.ea(a, b)
      }).concat(a)
    }
    function b(a) {
      var b = g.w.oi + "|" + a.Wl.replace(/\//g, ",") + "|" + (a.Ye ? "w": "v") + "|",
        c;
      c = a.ka;
      var d = a.Dd;
      c = [c ? 1 : 0, q.W ? 1 : 0, d ? 1 : 0].join();
      return b + c + "|" + m(a.url)
    }
    function c() {
      u.data.keys.length >= u.ZG && d()
    }
    function d() {
      var a = u.data.keys.length,
        b = Math.floor(a / 2);
      a > u.ZG && (b = Math.floor(a - u.ZG / 2));
      a = u.data.keys.slice(0, b);
      u.data.keys = u.data.keys.slice(b + 1);
      r.remove(a,
        function(a) {
          a && 3 === a.code && (q.yf = !1)
        })
    }
    function e() {
      var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : s.oq;
      k();
      v.setItem(u.key, u.data, !0);
      f(a)
    }
    function f(a) {
      q.yf && r && r.clear(function(b) {
        b && 3 === b.code && (q.yf = !1);
        a()
      })
    }
    function h() {
      k();
      var a = v.getItem(u.key, !0);
      a && (a.GG === u.data.GG && a.MV === u.data.MV ? u.data = a: e())
    }
    function k() {
      u.data = {
        GG: q.he,
        MV: g.w.oi,
        keys: [],
        Ue: {},
        zj: {}
      };
      u.Kq = {}
    }
    function l(a) {
      a && (u.data.GG = a, q.he = a)
    }
    function m(a) {
      var b = "limg";
      /flds=([^&]+)/.test(a) && (b = RegExp.$1);
      return b
    }
    function n(a) {
      if ("object" === typeof a && null !== a) {
        var b = [];
        if (s.isArray(a)) if (Object.keys(a).length == a.length) b = a.map(function(a) {
          return n(a)
        });
        else {
          b.push("__arrayObject");
          var c = {},
            d;
          for (d in a)(0 > parseInt(d) || isNaN(parseInt(d))) && a.hasOwnProperty(d) && (c[d] = n(a[d]));
          b.push(c);
          b.push(a.map(function(a) {
            return n(a)
          }))
        } else if (s.Gk(a, "Float32Array")) b.push("__Float32Array"),
          b.push(Array.prototype.slice.call(a));
        else if (s.Gk(a, "Uint16Array")) b.push("__Uint16Array"),
          b.push(Array.prototype.slice.call(a));
        else for (d in b = {},
            a) a.hasOwnProperty(d) && (b[d] = n(a[d]));
        return b
      }
      return a
    }
    function p(a) {
      if ("object" === typeof a && null !== a) {
        var b = {};
        if (s.isArray(a)) if ("__Float32Array" === a[0]) b = new Float32Array(a[1]);
        else if ("__Uint16Array" === a[0]) b = new Uint16Array(a[1]);
        else if ("__arrayObject" === a[0]) {
          b = p(a[2]);
          a = a[1];
          for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c])
        } else b = a.map(function(a) {
          return p(a)
        });
        else for (c in a) a.hasOwnProperty(c) && (b[c] = p(a[c]));
        return b
      }
      return a
    }
    var q = g.l,
      s = g.c;
    if (!g.cj && (g.l.OA || g.l.en) && (q.yf || q.Jj)) {
      var r = g.indexedDB,
        u = {
          ZG: 1E3,
          key: "_AMap_data.tileKeys"
        },
        w = [],
        v = {
          getItem: function(a, b) {
            var c = localStorage.getItem(a);
            if (c && b) {
              var d;
              try {
                d = JSON.parse(c)
              } catch(e) {
                d = null
              }
              c = d
            }
            return c
          },
          setItem: function(a, b, c) {
            var d = b;
            c && (d = JSON.stringify(b), 1.5 < d.length / 1024 / 1024 && Object.keys(b.zj).length && (b.zj = {},
              d = JSON.stringify(b)));
            try {
              localStorage.setItem(a, d)
            } catch(f) {
              e()
            }
          }
        };
      g.cj = {
        clear: e,
        get: function(c, d) {
          function f(a) {
            var b = {
              GM: k,
              Cia: D,
              Ue: u.data.Ue
            };
            /\|limg/.test(v[0]) ? b.Tha = a.map(function(a) {
              return a.data
            }) : b.Zc = h(a);
            d && d(null, b)
          }
          function h(a) {
            var b = [];
            m(c.url).split(",").forEach(function(c) {
              a.forEach(function(a) {
                if (a = a.data[c]) {
                  var d = a.Wi;
                  a.Wi = new g.cm(d.z, d.x, d.y);
                  a.Wi.P = d.P;
                  for (var e in a.ya) a.ya.hasOwnProperty(e) && delete a.ya[e].Uq;
                  b.push(a)
                }
              })
            });
            return b
          }
          var l = c.vma,
            k = [],
            v = [],
            D = [],
            G = [];
          if ("FS" !== c.type && !u.data.keys.length) return d({
            code: 1
          });
          l.forEach(function(a) {
            var d = b({
              Wl: a.key,
              url: c.url,
              Ye: c.Ye,
              ka: c.q.ka,
              Dd: c.Dd
            });
            "FS" !== c.type || q.yf ? "FS" !== c.type || /\|w\|/.test(d) ? s.ea(u.data.keys, d) ? (k.push(a), v.push(d)) : D.push(a) : (w.push(d), u.data.zj[d] ? (k.push(a), v.push(d), G.push({
              data: p(u.data.zj[d]),
              tileKey: d
            })) : s.ea(u.data.keys, d) ? (k.push(a), v.push(d)) : D.push(a)) : /\|w\|/.test(d) ? D.push(a) : (w.push(d), u.data.zj[d] ? (k.push(a), v.push(d), G.push({
              data: p(u.data.zj[d]),
              tileKey: d
            })) : D.push(a))
          });
          if (v.length) {
            if (!q.yf) return f(G);
            var E = v.slice(0);
            if (G.length) {
              if (G.length === E.length) return f(G);
              G.forEach(function(a) {
                a = s.indexOf(E, a.tileKey);
                E.splice(a, 1)
              })
            }
            var H = setTimeout(function() {
                H = null;
                d && d({
                  code: 1
                })
              },
              c.timeout || 1E3);
            r.get(E,
              function(b, h) {
                if (null !== H) if (clearTimeout(H), H = null, b) 3 === b.code ? q.yf = !1 : e(),
                d && d({
                  code: 1
                });
                else {
                  "FS" === c.type && h.length && h.forEach(function(a) { / \ | w\ | /.test(a.tileKey)||(u.data.zj[a.tileKey]=n(a.data))});if(G.length){var l=[];h=h.concat(G);h.forEach(function(a){var b=s.indexOf(w,a.tileKey);l[b]=a});h=l=l.filter(function(a){return void 0!==a})}h.length===v.length?(f(h),a(v)):(e(),d&&d({code:1}))}})}else d&&d({code:1})},No:function(a){a.qb.forEach(function(c){c=b({Wl:c.key,url:a.url,Ye:a.Ye,ka:a.q.ka,Dd:a.Dd});u.Kq[c]&&delete u.Kq[c]})},set:function(a,c){a.he&&a.he!==u.data.GG&&(l(a.he),e(),
        c&&c({code:2}));a.Cc?a.data.forEach(function(c){var d=b({Wl:c.key,url:a.url,Ye:a.Ye,ka:a.q.ka,Dd:a.Dd});if(q.yf||s.ea(w,d))u.Kq[d]=c}):a.Zc.forEach(function(c){var d=b({Wl:c.Wl,url:a.url,Ye:a.Ye,ka:a.q.ka,Dd:a.Dd});if(q.yf||s.ea(w,d)){var e=u.Kq[d]||{};e[c.Fc]=s.ab(c);u.Kq[d]=e}});u.data.Ue={"x-vd-v":a["x-vd-v"],tv:a.tv,bgc:a.bgc}},flush:function(){var a=!0;return function(){var b=this;if(a){if(Object.keys(u.data.zj).length)for(var c in u.data.zj)u.data.zj.hasOwnProperty(c)&&!s.ea(w,c)&&delete u.data.zj[c];
          q.yf?r.count(function(a,c){a||(c!==u.data.keys.length?(u.data.keys.length&&(u.data.keys=[]),f(function(){b.eC(!0)})):b.eC(!0))}):b.eC(!0);a=!1}else b.eC()}}(),eC:function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:!1,b={},d=[],f=Object.keys(u.Kq),h=[];f.length?(f.forEach(function(a){var c=u.Kq[a];a.split("|").pop().split(",").every(function(a){return"limg"===a?!0:c&&void 0!==c[a]})?(s.ea(u.data.keys,a)||(h.push(a),d.push({tileKey:a,data:c})),s.ea(w,a)&&void 0===u.data.zj[a]&&(u.data.zj[a]=
          n(c))):b[a]=c}),d.length&&(q.yf?r.add(d,function(a){a?3!==a.code?e():q.yf=!1:(u.data.keys=u.data.keys.concat(h),v.setItem(u.key,u.data,!0),c())}):v.setItem(u.key,u.data,!0)),u.Kq=b):(a&&v.setItem(u.key,u.data,!0),c())}};h()}})();g.T=g.X.extend({r:function(a,b,c){var d=parseFloat(b),e=parseFloat(a);if(isNaN(a)||isNaN(b))throw"Invalid Object: LngLat("+e+", "+d+")";!0!==c&&(d=Math.max(Math.min(d,90),-90),e=(e+180)%360+(-180>e||180===e?180:-180));this.N=d;this.O=e},aM:function(){return g.c.Td(this.O,6)},YL:function(){return g.c.Td(this.N,6)},add:function(a,b){return new g.T(this.O+a.O,this.N+a.N,b)},Sa:function(a,b){return new g.T(this.O-a.O,this.N-a.N,b)},Rc:function(a,b){return new g.T(this.O/a,
    this.N / a,
    b)
  },
    Bd: function(a, b) {
      return new g.T(this.O * a, this.N * a, b)
    },
    ae: function(a) {
      return g.Uo.distance(this, a)
    },
    offset: function(a, b) {
      if (isNaN(a) || isNaN(b)) return ! 1;
      var c = 2 * Math.asin(Math.sin(Math.round(a) / 12756274) / Math.cos(this.N * Math.PI / 180)),
        c = this.O + 180 * c / Math.PI,
        d = 2 * Math.asin(Math.round(b) / 12756274);
      return new g.T(c, this.N + 180 * d / Math.PI)
    },
    Ya: function(a) {
      a = g.c.Da(a);
      return a instanceof g.T ? 1E-9 >= Math.max(Math.abs(this.N - a.N), Math.abs(this.O - a.O)) : !1
    },
    toString: function() {
      return g.c.Td(this.O, 6) + "," + g.c.Td(this.N, 6)
    },
    Uk: function() {
      return [this.O, this.N]
    },
    ab: function() {
      var a = this.controlPoints,
        b = new g.T(this.O, this.N);
      a && (b.controlPoints = [].concat(a));
      return b
    }
  }); g.T.oga = function(a, b, c) {
    c = c + 1 || Math.round(Math.abs(a.O - b.O));
    if (!c || 0.001 > Math.abs(a.O - b.O)) return [];
    var d = [],
      e = g.al.$r,
      f = g.al.qka,
      h = Math.asin,
      k = Math.sqrt,
      l = Math.sin,
      m = Math.pow,
      n = Math.cos,
      p = Math.atan2,
      q = a.N * e;
    a = a.O * e;
    var s = b.N * e;
    b = b.O * e;
    for (var h = 2 * h(k(m(l((q - s) / 2), 2) + n(q) * n(s) * m(l((a - b) / 2), 2))), r, u, w, v, e = 1; e < c; e += 1) r = 1 / c * e,
      u = l((1 - r) * h) / l(h),
      w = l(r * h) / l(h),
      r = u * n(q) * n(a) + w * n(s) * n(b),
      v = u * n(q) * l(a) + w * n(s) * l(b),
      u = u * l(q) + w * l(s),
      u = p(u, k(m(r, 2) + m(v, 2))),
      r = p(v, r),
      d.push(new g.T(r * f, u * f));
    return d
  }; g.T.sg({
    aM: "getLng",
    YL: "getLat",
    add: "add",
    Sa: "subtract",
    Rc: "divideBy",
    Bd: "multiplyBy",
    ae: "distance",
    offset: "offset",
    Ya: "equals",
    toString: "toString"
  }); g.je = g.X.extend({
    r: function() {
      this.CLASS_NAME = "AMap.Bounds";
      var a = null,
        b = null;
      if (1 === arguments.length && arguments[0] instanceof Array) a = new g.T(arguments[0][0], arguments[0][1], !0),
        b = new g.T(arguments[0][2], arguments[0][3], !0);
      else if (2 === arguments.length) a = g.c.Da(arguments[0]),
        b = g.c.Da(arguments[1]);
      else if (4 === arguments.length) a = new g.T(arguments[0], arguments[1]),
        b = new g.T(arguments[2], arguments[3]);
      else if (0 === arguments.length) a = new g.T( - 180, -90),
        b = new g.T(180, 90);
      else throw "Invalid Object: Bounds(" + arguments.join(",") + ")";
      this.kc = a;
      this.Wb = b
    },
    zs: function() {
      return this.kc
    },
    rv: function() {
      return this.Wb
    },
    Hi: function() {
      return new g.T(this.kc.O, this.Wb.N, !0)
    },
    Im: function() {
      return new g.T(this.Wb.O, this.kc.N, !0)
    },
    contains: function(a) {
      var b = this.kc,
        c = this.Wb,
        d;
      if (a instanceof g.hn) return this.SO().contains(a);
      a instanceof g.je ? (d = a.kc, a = a.Wb) : d = a = g.c.Da(a);
      var e = d.O,
        f = b.O,
        h = a.O,
        k = c.O;
      f > k && (k += 360, 0 > e && (e += 360), 0 > h && (h += 360));
      return d.N >= b.N && a.N <= c.N && e >= f && h <= k
    },
    If: function(a) {
      var b = this.kc,
        c = this.Wb,
        d = a.kc;
      a = a.Wb;
      var e = a.O >= b.O && d.O <= c.O;
      return a.N >= b.N && d.N <= c.N && e
    },
    sh: function() {
      return new g.T(this.kc.O > this.Wb.O ? (this.kc.O + this.Wb.O + 360) / 2 % 360 : (this.kc.O + this.Wb.O) / 2, (this.kc.N + this.Wb.N) / 2)
    },
    extend: function(a) {
      this.kc.O = Math.min(this.kc.O, a.O);
      this.kc.N = Math.min(this.kc.N, a.N);
      this.Wb.O = Math.max(this.Wb.O, a.O);
      this.Wb.N = Math.max(this.Wb.N, a.N);
      return this
    },
    kna: function(a) {
      return this.extend(a.kc).extend(a.Wb)
    },
    toString: function() {
      return this.kc.toString() + ";" + this.Wb.toString()
    },
    ab: function() {
      return new g.je(this.kc.ab(), this.Wb.ab())
    },
    Ya: function(a) {
      return a instanceof g.je ? this.kc.Ya(a.kc) && this.Wb.Ya(a.Wb) : !1
    },
    di: function() {
      return Math.abs(this.Wb.O - this.kc.O)
    },
    ai: function() {
      return Math.abs(this.kc.N - this.Wb.N)
    },
    SO: function(a) {
      var b = [this.zs(), this.Im(), this.rv(), this.Hi()];
      a && b.push(this.zs());
      return new g.hn(b)
    },
    zma: function(a) {
      return new g.Te(a.hc(this.Hi(), 20), a.hc(this.Im(), 20))
    },
    UL: function(a, b) {
      return this.SO(b).UL(a)
    },
    RL: function(a) {
      return this.zma(a).sh()
    }
  }); g.je.sg({
    zs: "getSouthWest",
    rv: "getNorthEast",
    Hi: "getNorthWest",
    Im: "getSouthEast",
    contains: "contains",
    If: "intersects",
    sh: "getCenter",
    extend: "extend"
  }); g.F = g.X.extend({
    r: function(a, b, c) {
      if (isNaN(a) || isNaN(b)) throw "Invalid Object: Pixel(" + a + ", " + b + ")";
      this.x = c ? Math.round(a) : Number(a);
      this.y = c ? Math.round(b) : Number(b)
    },
    Le: function() {
      return this.x
    },
    Ud: function() {
      return this.y
    },
    add: function(a, b) {
      return new g.F(this.x + a.x, this.y + a.y, b)
    },
    Sa: function(a, b) {
      return new g.F(this.x - a.x, this.y - a.y, b)
    },
    Rc: function(a, b) {
      return new g.F(this.x / a, this.y / a, b)
    },
    Bd: function(a, b) {
      return new g.F(this.x * a, this.y * a, b)
    },
    ae: function(a) {
      var b = a.x - this.x;
      a = a.y - this.y;
      return Math.sqrt(b * b + a * a)
    },
    floor: function() {
      return new g.F(Math.floor(this.x), Math.floor(this.y))
    },
    round: function() {
      return new g.F(this.x, this.y, !0)
    },
    Ya: function(a) {
      return a instanceof g.F && this.x === a.x && this.y === a.y
    },
    ab: function(a) {
      return new g.F(this.x, this.y, a)
    },
    toString: function() {
      return this.x + "," + this.y
    },
    Uk: function() {
      return [this.x, this.y]
    },
    length: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y)
    },
    direction: function() {
      var a = this.x,
        b = this.y;
      if (0 === a && 0 === b) return null;
      if (0 === a) return 0 < b ? Math.PI / 2 : -Math.PI / 2;
      var c = 180 * Math.atan(b / a) / Math.PI;
      return 0 > a && 0 < b ? c + 180 : 0 > a && 0 > b ? c + 180 : 0 < a && 0 > b ? c + 360 : c
    },
    Xr: function(a) {
      var b = this.length(),
        c = a.length();
      return b && c ? 180 * Math.acos((this.x * a.x + this.y * a.y) / c / b) / Math.PI: null
    },
    toFixed: function(a) {
      this.x = g.c.Td(this.x, a);
      this.y = g.c.Td(this.y, a);
      return this
    }
  }); g.F.sg({
    Le: "getX",
    Ud: "getY",
    add: "add",
    Sa: "subtract",
    Rc: "divideBy",
    Bd: "multiplyBy",
    ae: "distance",
    Ya: "equals",
    toString: "toString"
  }); g.bd = g.X.extend({
    r: function(a, b, c) {
      if (isNaN(a) || isNaN(b)) throw "Invalid Object: Size(" + a + ", " + b + ")";
      this.width = c ? Math.round(a) : Number(a);
      this.height = c ? Math.round(b) : Number(b)
    },
    ab: function() {
      return new g.bd(this.width, this.height)
    },
    di: function() {
      return this.width
    },
    ai: function() {
      return this.height
    },
    SA: function() {
      return new g.F(this.di(), this.ai())
    },
    contains: function(a) {
      return Math.abs(a.x) <= Math.abs(this.width) && Math.abs(a.y) <= Math.abs(this.height)
    },
    Ya: function(a) {
      return a instanceof g.bd && this.width === a.width && this.height === a.height
    },
    toString: function() {
      return this.di() + "," + this.ai()
    }
  }); g.bd.sg({
    di: "getWidth",
    ai: "getHeight",
    toString: "toString"
  }); g.hn = g.X.extend({
    r: function(a) {
      this.CLASS_NAME = "AMap.ArrayBounds";
      a = g.c.Da(a);
      this.path = [];
      for (var b = 0; b < a.length; b += 1) this.path.push([a[b].O, a[b].N]);
      this.bounds = this.Jd = a
    },
    contains: function(a, b) {
      if (a instanceof g.hn) return g.Uo.isRingInRing(a.path, this.path);
      a instanceof g.F ? a = [a.x, a.y] : a instanceof g.T && (a = [a.O, a.N]);
      return g.ad.qd(a, this.path, b)
    },
    toBounds: function() {
      for (var a = new g.je(180, 90, -180, -90), b = this.Jd.length - 1; 0 <= b; b -= 1) a.extend(this.Jd[b]);
      return a
    },
    UL: function(a) {
      for (var b = [], c = 0; c < this.path.length; c += 1) b[c] = a.hc(this.path[c], 20);
      return b
    },
    RL: function(a) {
      return this.toBounds().RL(a)
    },
    sh: function() {
      return this.toBounds().sh()
    }
  }); g.hn.sg({
    contains: "contains",
    sh: "getCenter"
  }); g.N2 = g.hn.extend({
    r: function(a) {
      this.CLASS_NAME = "AMap.CoordsBounds";
      this.path = a;
      if (a[0] instanceof g.F) {
        this.path = [];
        for (var b = 0; b < a.length; b += 1) this.path.push([a[b].x, a[b].y])
      }
      this.bounds = this.Jd = a
    }
  }); g.Te = g.X.extend({
    r: function() {
      if (2 === arguments.length) this.Mb = arguments[0],
        this.jd = arguments[1];
      else if (1 === arguments.length && arguments[0] instanceof Array || 4 === arguments.length) {
        var a = arguments[0] instanceof Array ? arguments[0] : arguments;
        this.Mb = new g.F(a[0], a[1]);
        this.jd = new g.F(a[2], a[3])
      } else throw "Invalid Object: PixelBounds(" + arguments.join(",") + ")";
    },
    sh: function(a) {
      return new g.F((this.Mb.x + this.jd.x) / 2, (this.Mb.y + this.jd.y) / 2, a)
    },
    contains: function(a) {
      var b;
      a instanceof g.Te ? (b = a.Mb, a = a.jd) : b = a;
      return b.x > this.Mb.x && a.x < this.jd.x && b.y > this.Mb.y && a.y < this.jd.y
    },
    di: function() {
      return this.jd.x - this.Mb.x
    },
    ai: function() {
      return this.jd.y - this.Mb.y
    },
    If: function(a, b) {
      b || 0 === b || (b = 20);
      var c = this.Mb,
        d = this.jd,
        e = a.Mb,
        f = a.jd,
        h = f.y >= c.y - b && e.y <= d.y + b;
      return f.x >= c.x - b && e.x <= d.x + b && h
    },
    toString: function() {
      return this.Mb + ";" + this.jd
    },
    ab: function() {
      return new g.Te(this.Mb.ab(), this.jd.ab())
    }
  }); g.G = {}; g.G.HK = function(a) {
    for (var b = [Infinity, Infinity, -Infinity, -Infinity], c = 0, d = a.length; c < d; c += 1) g.G.pE(b, a[c]);
    return b
  }; g.G.WV = function(a, b, c) {
    var d = Math.min.apply(null, a);
    a = Math.max.apply(null, a);
    var e = Math.min.apply(null, b);
    b = Math.max.apply(null, b);
    return g.G.vea(d, a, e, b, c)
  }; g.G.buffer = function(a, b) {
    a[0] -= b;
    a[1] -= b;
    a[2] += b;
    a[3] += b
  }; g.G.ab = function(a) {
    return a.slice()
  }; g.G.qd = function(a, b) {
    return a[0] <= b[0] && b[0] <= a[2] && a[1] <= b[1] && b[1] <= a[3]
  }; g.G.yW = function(a, b) {
    return a[0] <= b[0] && b[2] <= a[2] && a[1] <= b[1] && b[3] <= a[3]
  }; g.G.iqa = function() {
    return [Infinity, Infinity, -Infinity, -Infinity]
  }; g.G.vea = function(a, b, c, d, e) {
    return "undefined" !== typeof e ? (e[0] = a, e[2] = b, e[1] = c, e[3] = d, e) : [a, c, b, d]
  }; g.G.empty = function(a) {
    a[0] = a[1] = Infinity;
    a[2] = a[3] = -Infinity;
    return a
  }; g.G.Ya = function(a, b) {
    return a[0] === b[0] && a[2] === b[2] && a[1] === b[1] && a[3] === b[3]
  }; g.G.extend = function(a, b) {
    b[0] < a[0] && (a[0] = b[0]);
    b[2] > a[2] && (a[2] = b[2]);
    b[1] < a[1] && (a[1] = b[1]);
    b[3] > a[3] && (a[3] = b[3])
  }; g.G.pE = function(a, b) {
    b[0] < a[0] && (a[0] = b[0]);
    b[0] > a[2] && (a[2] = b[0]);
    b[1] < a[1] && (a[1] = b[1]);
    b[1] > a[3] && (a[3] = b[1])
  }; g.G.Vqa = function(a) {
    return [a[0], a[1]]
  }; g.G.Wqa = function(a) {
    return [a[2], a[1]]
  }; g.G.sh = function(a) {
    return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2]
  }; g.G.gra = function(a, b, c, d, e) {
    var f = b * d[0] / 2;
    d = b * d[1] / 2;
    b = Math.cos(c);
    c = Math.sin(c);
    f = [ - f, -f, f, f];
    d = [ - d, d, -d, d];
    var h, k, l;
    for (h = 0; 4 > h; h += 1) k = f[h],
      l = d[h],
      f[h] = a[0] + k * b - l * c,
      d[h] = a[1] + k * c + l * b;
    return g.G.WV(f, d, e)
  }; g.G.ai = function(a) {
    return a[3] - a[1]
  }; g.G.tra = function(a) {
    return [a[2] - a[0], a[3] - a[1]]
  }; g.G.xra = function(a) {
    return [a[0], a[3]]
  }; g.G.yra = function(a) {
    return [a[2], a[3]]
  }; g.G.di = function(a) {
    return a[2] - a[0]
  }; g.G.If = function(a, b) {
    return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1]
  }; g.G.ko = function(a) {
    return a[2] < a[0] || a[3] < a[1]
  }; g.G.normalize = function(a, b) {
    return [(b[0] - a[0]) / (a[2] - a[0]), (b[1] - a[1]) / (a[3] - a[1])]
  }; g.G.xta = function(a, b) {
    var c = (a[2] - a[0]) / 2 * (b - 1),
      d = (a[3] - a[1]) / 2 * (b - 1);
    a[0] -= c;
    a[2] += c;
    a[1] -= d;
    a[3] += d
  }; g.G.touches = function(a, b) {
    return g.G.If(a, b) && (a[0] === b[2] || a[2] === b[0] || a[1] === b[3] || a[3] === b[1])
  }; g.G.transform = function(a, b, c) {
    a = [a[0], a[1], a[0], a[3], a[2], a[1], a[2], a[3]];
    b(a, a, 2);
    return g.G.WV([a[0], a[2], a[4], a[6]], [a[1], a[3], a[5], a[7]], c)
  }; g.je.vb({
    r: function() {
      var a = g.je.prototype.r;
      return function() {
        a.apply(this, arguments);
        this.southwest = this.kc;
        this.northeast = this.Wb
      }
    } (),
    extend: function() {
      var a = g.je.prototype.extend;
      return function() {
        a.apply(this, arguments);
        this.kc.lng = this.kc.O;
        this.kc.lat = this.kc.N;
        this.Wb.lng = this.Wb.O;
        this.Wb.lat = this.Wb.N;
        return this
      }
    } ()
  }); g.T.vb({
    r: function() {
      var a = g.T.prototype.r;
      return function() {
        a.apply(this, arguments);
        this.lng = parseFloat(this.O.toFixed(6));
        this.lat = parseFloat(this.N.toFixed(6))
      }
    } ()
  }); g.DB = g.X.extend({
    r: function(a, b, c, d) {
      this.tQ = a;
      this.IQ = b;
      this.WQ = c;
      this.pR = d
    },
    transform: function(a, b) {
      return this.lV(a.ab(), b)
    },
    lV: function(a, b) {
      b = b || 1;
      a.x = b * (this.tQ * a.x + this.IQ);
      a.y = b * (this.WQ * a.y + this.pR);
      return a
    },
    mna: function(a, b) {
      b = b || 1;
      return new g.F((a.x / b - this.IQ) / this.tQ, (a.y / b - this.pR) / this.WQ)
    }
  }); g.nn = g.X.extend({
    r: function(a) {
      this.YG = a.MAX_LATITUDE || 85.0511287798;
      a.project && a.unproject && (this.hc = a.project, this.Xg = a.unproject)
    }
  }); g.nn.VP = {
    hc: function(a) {
      return new g.F(a.O, a.N)
    },
    Xg: function(a, b) {
      return new g.T(a.x, a.y, b)
    }
  }; g.nn.P3 = new g.nn({
    MAX_LATITUDE: 85.0511287798,
    project: function(a) {
      var b = Math.PI / 180,
        c = this.YG,
        c = Math.max(Math.min(c, a.N), -c);
      a = a.O * b;
      b = Math.log(Math.tan(Math.PI / 4 + c * b / 2));
      return new g.F(a, b, !1)
    },
    unproject: function(a, b) {
      var c = 180 / Math.PI;
      return new g.T(a.x * c, (2 * Math.atan(Math.exp(a.y)) - Math.PI / 2) * c, b)
    }
  }); g.nn.WP = {
    YG: 85.0840591556,
    fH: 6356752.3142,
    eH: 6378137,
    hc: function(a) {
      var b = Math.PI / 180,
        c = this.YG,
        d = Math.max(Math.min(c, a.N), -c),
        e = this.eH,
        c = this.fH;
      a = a.O * b * e;
      b *= d;
      e = c / e;
      e = Math.sqrt(1 - e * e);
      d = e * Math.sin(b);
      d = Math.pow((1 - d) / (1 + d), 0.5 * e);
      b = Math.tan(0.5 * (0.5 * Math.PI - b)) / d;
      b = -c * Math.log(b);
      return new g.F(a, b)
    },
    Xg: function(a, b) {
      for (var c = 180 / Math.PI,
             d = this.eH,
             e = this.fH,
             f = a.x * c / d,
             d = e / d,
             d = Math.sqrt(1 - d * d), e = Math.exp( - a.y / e), h = Math.PI / 2 - 2 * Math.atan(e), k = 15, l = 0.1; 1E-7 < Math.abs(l) && (k -= 1, 0 < k);) l = d * Math.sin(h),
        l = Math.PI / 2 - 2 * Math.atan(e * Math.pow((1 - l) / (1 + l), 0.5 * d)) - h,
        h += l;
      return new g.T(f, h * c, b)
    }
  }; g.Yg = {}; g.Yg.mB = {
    Wz: function(a, b) {
      var c = this.af.hc(a),
        d = this.scale(b);
      return this.WA.lV(c, d)
    },
    uA: function(a, b, c) {
      b = this.scale(b);
      a = this.WA.mna(a, b);
      return this.af.Xg(a, c)
    },
    hc: function(a) {
      return this.af.hc(a)
    },
    scale: function(a) {
      return 256 << a
    },
    ao: function(a) {
      return 12756274 * Math.PI / (256 * Math.pow(2, a))
    }
  }; g.Yg.RG = g.extend({},
    g.Yg.mB, {
      code: "EPSG:3857",
      af: g.nn.P3,
      WA: new g.DB(0.5 / Math.PI, 0.5, -0.5 / Math.PI, 0.5),
      hc: function(a) {
        return this.af.hc(a).Bd(6378137)
      }
    }); g.Yg.GP = g.extend({},
    g.Yg.mB, {
      code: "EPSG:3395",
      af: g.nn.WP,
      WA: function() {
        var a = g.nn.WP;
        return new g.DB(0.5 / (Math.PI * a.eH), 0.5, -0.5 / (Math.PI * a.fH), 0.5)
      } ()
    }); g.Yg.HP = g.extend({},
    g.Yg.mB, {
      code: "EPSG:4326",
      af: g.nn.VP,
      WA: new g.DB(1 / 360, 0.5, -1 / 360, 0.25)
    }); g.Yg.Goa = g.extend({},
    g.Yg.mB, {
      af: g.nn.VP,
      WA: new g.DB(1, 0, 1, 0)
    }); g.kF = {
    hc: function(a, b) {
      a = g.c.Da(a);
      return this.Wh.Wz(a, b || this.get("zoom"))
    },
    Xg: function(a, b, c) {
      return this.Wh.uA(a, b || this.get("zoom"), c)
    },
    Yra: function(a, b) {
      return this.hc(a, b)
    },
    Sqa: function(a, b) {
      return this.Xg(a, b)
    },
    On: function(a, b, c) {
      g.a.add(this, "containerToLngLat");
      var d = this.get("size").SA().Rc(2);
      if (a.Ya(d) && !c) return this.get("center");
      a = this.Ef(a, b, c);
      return this.se(a)
    },
    hq: function(a, b) {
      g.a.add(this, "lngLatToContainer");
      var c = 0;
      b && (c = "string" === typeof b ? Math.round(parseFloat(b) / 0.14929107086948487) : b);
      var d = this.Lb(a);
      return this.Ne(d, null, c)
    },
    Lb: function(a) {
      a = g.c.Da(a);
      return this.hc(a, 20)
    },
    se: function(a) {
      return a ? this.Xg(a, 20) : a
    },
    Vz: function(a) {
      a = g.c.Da(a);
      return this.hc(a, 20).Sa(g.c.rc)
    },
    Ofa: function(a) {
      return this.Xg(a.add(g.c.rc), 20)
    },
    Tqa: function(a) {
      return this.Ne(a.add(g.c.rc))
    },
    ara: function(a) {
      return a ? this.hc(this.get("center"), a) : this.get("centerPixel")
    },
    Uoa: function(a) {
      return (new g.F(a.x + 2.0037508342789244E7, 2.0037508342789244E7 - a.y)).Rc(0.14929107086948487)
    },
    l_: function(a) {
      return new g.F(0.14929107086948487 * a.x - 2.0037508342789244E7, 2.0037508342789244E7 - 0.14929107086948487 * a.y)
    }
  }; y.EB = g.X.extend({
    ea: [g.la, g.Ee],
    B: {
      center: new g.T(116.397128, 39.916527),
      zoom: 13,
      rotation: 0,
      crs: "EPSG3857"
    },
    r: function(a) {
      this.CLASS_NAME = "AMap.View2D";
      g.a.xa(this, a);
      a = a || {};
      a.center && (a.center = g.c.Da(a.center));
      this.B = a
    }
  }); y.Sb = g.X.extend({
    ea: [g.la, g.Ee, g.kF],
    B: {
      features: "all",
      showLabel: !0,
      dragEnable: !0,
      showIndoorMap: g.l.W ? !1 : !0,
      lang: "zh_cn",
      keyboardEnable: !0,
      doubleClickZoom: !0,
      gridMapForeign: !1,
      scrollWheel: !0,
      zoomEnable: !0,
      jogEnable: !0,
      continuousZoomEnable: !0,
      resizeEnable: !1,
      animateEnable: !0,
      rotateEnable: !1,
      labelzIndex: 99,
      showFog: !0,
      touchZoom: !0,
      zooms: [3, g.l.W ? g.l.kd ? 19 : 20 : 18],
      defaultCursor: "",
      limitBounds: null,
      logoUrl: g.w.Ab + "/theme/v1.3/autonavi.png",
      logoUrlRetina: g.w.Ab + "/theme/v1.3/mapinfo_05.png",
      copyright: "\x3c!--v1.4.9--\x3e &copy " + (new Date).getFullYear() + " AutoNavi ",
      isHotspot: !g.l.W,
      baseRender: g.l.ada,
      overlayRender: g.l.Aja,
      mapStyle: "normal",
      showBuildingBlock: g.l.Ye,
      crs: "EPSG3857",
      rotation: 0,
      pitch: 0,
      yaw: 0,
      scale: 1,
      center: new g.T(116.397128, 39.916527),
      zoom: 13,
      detectRetina: !0,
      pitchEnable: !1,
      buildingAnimation: !1,
      maxPitch: 83,
      turboMode: !0,
      preloadMode: !0,
      workerMode: !0
    },
    poiOnAMAP: function(a) {
      g.a.add(this, "poiOnAMAP");
      var b = {},
        c = g.c.Da(a.location);
      b.id = a.id;
      c && (b.y = c.N, b.x = c.O);
      b.name = a.name;
      b.address = a.address;
      g.Zg.Iq(g.Zg.VX(b))
    },
    detailOnAMAP: function(a) {
      g.a.add(this, "detailOnAMAP");
      var b = {},
        c = g.c.Da(a.location);
      b.id = a.id;
      c && (b.y = c.N, b.x = c.O);
      b.name = a.name;
      g.Zg.Iq(g.Zg.TX(b))
    },
    setLabelzIndex: function(a) {
      g.a.add(this, "setLabelzIndex");
      return this.set("labelzIndex", a)
    },
    getLabelzIndex: function() {
      return this.get("labelzIndex", null, !0)
    },
    setMapStyle: function(a) {
      g.a.add(this, "setMapStyle"); - 1 === a.indexOf("amap://styles/") ? (this.set("styleUrl", "", !0), this.set("mapStyle", a)) : this.set("styleUrl", a);
      this.iN()
    },
    getMapStyle: function() {
      return this.get("styleUrl") || this.get("mapStyle", null, !0)
    },
    getFeatures: function() {
      return this.get("features", null, !0)
    },
    setFeatures: function(a) {
      g.a.add(this, "setFeatures");
      this.set("features", a)
    },
    setLang: function(a) {
      g.a.add(this, "setLang", a);
      "en" !== a && "zh_cn" !== a && "zh_en" !== a || a === this.getLang() || (this.set("lang", a), this.Mm && this.Mm.r0(this))
    },
    getLang: function() {
      return this.get("lang", null, !0)
    },
    setCity: function(a, b) {
      g.a.add(this, "setCity");
      var c = this; (new g.Wa.jb(g.w.Cd + "/v3/config/district?subdistrict=0&extensions=all&key=" + g.w.key + "&s=rsv3&output=json&keywords=" + a, {
        callback: "callback"
      })).g("complete",
        function(d) {
          var e = d.districts;
          if (e && e.length) {
            d = e[0];
            /[^\w]+/.test(a) && (e = g.c.find(e,
              function(b) {
                return b.name === a
              })) && e !== d && (d = e);
            try {
              var f = d.center.split(","),
                h;
              switch (d.level) {
                case "city":
                  h = 10;
                  break;
                case "province":
                  h = 7;
                  break;
                case "district":
                  h = 12;
                  break;
                case "country":
                  h = 4;
                  break;
                default:
                  h = 12
              } - 1 !== d.name.indexOf("\u5e02") && (h = 10);
              c.setZoomAndCenter(h, new g.T(f[0], f[1]), !0);
              b && b.call(c, f, h)
            } catch(k) {}
          }
        },
        this)
    },
    getScreenShot: function(a, b) {
      g.a.add(this, "getScreenShot");
      return this.map && g.l.Hk ? this.map.bY(a, b) : ""
    },
    getCity: function(a, b) {
      g.a.add(this, "getCity");
      var c = g.w.Cd + "/v3/geocode/regeo?&extensions=&&key=" + g.w.key + "&s=rsv3&output=json&location=" + (b || this.get("center", null, !0)); (new g.Wa.jb(c, {
        callback: "callback",
        Su: !0,
        Fc: "REGEO"
      })).g("complete",
        function(b) {
          b = b.regeocode.addressComponent;
          a({
            province: b.province,
            city: b.city instanceof Array ? "": b.city,
            citycode: b.citycode instanceof Array ? "": b.citycode,
            district: b.district instanceof Array ? "": b.district
          })
        },
        this)
    },
    r: function(a, b) {
      this.id = g.c.Pb(this);
      this.CLASS_NAME = "AMap.Map";
      g.a.xa(this, b);
      b = b || {};
      b.mapStyle && -1 !== b.mapStyle.indexOf("amap://styles/") ? (b.styleUrl = b.mapStyle, delete b.mapStyle) : b.styleUrl = "amap://styles/normal";
      b.bgColor && g.extend(g.w.Gd, b.bgColor);
      b.maxPitch && (b.maxPitch = Math.min(this.B.maxPitch, Math.max(b.maxPitch, 0)));
      b.pitch && (b.pitch = Math.min(b.maxPitch || this.B.maxPitch, Math.max(b.pitch, 0)));
      "3D" !== b.viewMode && (b.pitch = 0);
      g.w.ND = b.buildingColor || null;
      b.mobile && (g.l.W = !0);
      b.noPoi && (g.w.Pia = !0);
      b.editEnable && (b.nolimg = 1, b.showIndoorMap = !1);
      "3D" === b.viewMode && g.l.en && void 0 === b.showBuildingBlock && !0 === b.showBuildingBlock;
      this.Sm = !!b.enableSocket;
      b.server && (g.w.Cd = b.server);
      b.vdataUrl && (g.w.Kw = b.vdataUrl);
      if ("string" === typeof a) {
        if (a = this.I = document.getElementById(a), !a) return
      } else "DIV" === a.tagName && (this.I = a);
      this.I.AH && this.I.AH.destroy();
      g.me.Fe.start({
        id: this.id,
        I: this.I
      });
      this.I.AH = this;
      var c = this.B.zooms[1],
        d = this.B.zooms[0];
      b.zooms ? (b.zooms[0] = Math.max(d, b.zooms[0]), !0 === b.expandZoomRange && (c = g.l.W ? g.l.kd ? 19 : 20 : 20), b.zooms[1] = Math.min(c, b.zooms[1])) : b.zooms = [d, c];
      b.forceZooms && (b.zooms = b.forceZooms);
      b = this.yda(b);
      c = this.getSize(!0);
      b.center && (b.center = g.c.Da(b.center));
      this.Wh = this.wea(b.crs || this.B.crs, b.center || this.B.center);
      this.Uca(c, b);
      d = b.lang;
      "en" !== d && "zh_cn" !== d && "zh_en" !== d && (b.lang = "zh_cn");
      g.h.Af || (b.rotation = 0, b.pitch = 0, b.rotateEnable = !1);
      g.l.Ks ? !1 !== b.workerMode && (y.Sb.er ? (b.workerMode = !1, y.Sb.er++) : y.Sb.er = 1) : (b.workerMode = !1, b.preloadMode = !1);
      b.layers && (d = b.layers, delete b.layers, b.layers = d);
      g.c.Fb(this, b);
      this.Pf(this.B);
      "rotateEnable" in b || "3D" !== b.viewMode || !g.l.en || this.set("rotateEnable", !0);
      "pitchEnable" in b || "3D" !== b.viewMode || !g.l.en || this.set("pitchEnable", !0);
      b.forceVector && (g.l.Ye ? this.set("baseRender", "vw") : this.set("baseRender", "v"));
      b.disableVector && this.set("baseRender", "d");
      "dom" === b.renderer && (this.set("baseRender", "d"), this.set("overlayRender", "d"));
      b.baseRender && this.set("baseRender", b.baseRender);
      c = Math.max(c.width, c.height);
      g.l.ka && (c *= Math.min(2, window.devicePixelRatio || 1));
      "vw" === this.get("baseRender") && c > g.l.uia && this.set("baseRender", "dv");
      c = this.get("zoom", null, !0);
      d = this.get("zooms");
      c > d[1] ? c = d[1] : c < d[0] && (c = d[0]);
      this.set("zoom", c);
      this.B.zoom = c;
      this.xea(this.B);
      this.UK();
      var e = this;
      this.Pf({
        overlays: [],
        infos: {},
        controls: {}
      });
      var f = [];
      b.gridMapForeign && f.push("gridmap");
      b.forceVector && (f.push("vectorlayer"), f.push("overlay"));
      "3D" === b.viewMode && g.l.en && f.push("Map3D");
      b.editEnable && (f.push("edit"), f.push("labelDir"));
      g.l.Hk && (f.push("AMap.IndoorMap"), -1 !== f.indexOf("Map3D") && f.push("AMap.IndoorMap3D"));
      this.ka = g.l.ka && this.get("detectRetina");
      this.d2(b);
      this.hia(function() {
        g.mb.yg(f,
          function() {
            if (!e.get("destroy")) {
              var b = new g.Sb(a, e);
              if (g.Vc) {
                var c = (g.Vc[0] || g.Vc).stylemaps["50001:1"].browserStyle[0].split("&");
                b.JB = [c[0], c[4]]
              }
              b.ve("zoom center centerCoords rotation yaw pitch resolution".split(" "), e.view, !0);
              b.g("complete",
                function() {
                  this.o("complete")
                },
                e, !0);
              b.Wh = e.Wh;
              e.ve(["zoomSlow", "panTo", "targetLevel", "render"], b);
              b.ve(["size", "bounds"], e);
              e.loaded = !0;
              e.o("coreMapCreated");
              g.l.Hk && e.zca();
              "3D" === e.getViewMode_() && (e.AmbientLight || (e.AmbientLight = new g.Mt.xP([1, 1, 1], 0.9)), e.DirectionLight || (e.DirectionLight = new g.Mt.FP([0, -1, 1], [1, 1, 1], 0.1)))
            }
          })
      })
    },
    hia: function(a) {
      function b() {
        var a = AMap.anole,
          b = {},
          c = [],
          d = 0,
          e = void 0;
        if (a) {
          for (var a = a.replace(/\?/g, ":").replace(/\//g, "&"), e = a.split(""), f = 0, q = e.length; f < q; f++) void 0 === b[e[f]] && (b[e[f]] = d++, c.push(e[f]));
          c.reverse();
          a = a.replace(/./g,
            function(a) {
              return c[b[a]]
            });
          g.Vc = eval(a);
          delete AMap.anole
        }
      }
      if (g.l.re || g.Vc) a();
      else {
        var c = !0;
        try {
          var d = JSON.parse(localStorage.getItem("_AMap_anole"));
          d && d.version === g.l.he && d.script ? eval(d.script) : c = !1
        } catch(e) {
          c = !1
        }
        if (c) b(),
          a();
        else {
          var f = document.createElement("script");
          f.kqa = "anonymous";
          f.id = "amap_anole_js";
          f.src = g.w.Xb + "://vdata.amap.com/style?v=" + g.w.sp + "&key=" + g.w.key + "&mapstyle=normal";
          c = document; (c.head || c.getElementsByTagName("head")[0] || c.body).appendChild(f);
          f.onload = function() {
            if (!g.Vc) {
              if (g.l.Jj) {
                var c = {
                  version: g.l.he,
                  script: "AMap['anole']=" + JSON.stringify(AMap.anole)
                };
                localStorage.setItem("_AMap_anole", JSON.stringify(c))
              }
              b()
            }
            a();
            f.parentNode.removeChild(f)
          }
        }
      }
    },
    getViewMode_: function() {
      return this.view.type
    },
    Tfa: function(a, b, c) {
      var d = new g.T(a[4], a[5]);
      if ((a = new g.je(a[0], a[1], a[2], a[3])) && b && d) {
        for (var e = c[1]; e > c[0]; e -= 1) {
          var f = this.hc(a.kc, e),
            h = this.hc(a.Wb, e);
          if (Math.abs(h.x - f.x) < b.width && Math.abs(f.y - h.y) < b.height) break
        }
        return [d, Math.min(e + 1, c[1])]
      }
      return null
    },
    Uca: function(a, b) {
      if (! (b && b.center && b.zoom)) {
        var c = this.Tfa(g.w.Jd, a, b.zooms);
        b.center = b.center || c && c[0];
        "number" !== typeof b.zoom && (b.zoom = c && c[1])
      }
    },
    wea: function(a, b) {
      if (b instanceof g.T) {
        if ("string" === typeof a) {
          switch (a) {
            case "EPSG3395":
              return g.Yg.GP;
            case "EPSG4326":
              return g.Yg.HP
          }
          return g.Yg.RG
        }
        if (a.pointToLngLat && a.lngLatToPoint) return {
          uA: a.pointToLngLat,
          Wz: a.lngLatToPoint,
          ao: a.getResolution
        };
        throw "illegal projection";
      }
      var c = this.get("zoom", null, !0);
      return {
        ao: function(a) {
          return Math.pow(2, c - a)
        },
        Wz: function() {},
        uA: function() {}
      }
    },
    Pla: function(a, b) {
      this.Vt && this.Vt.stop();
      var c = ["pitch", "rotation", "zoom", "center"],
        d = {},
        e = !1,
        f;
      for (f in a) if (a.hasOwnProperty(f) && -1 !== g.c.indexOf(c, f)) {
        var h = this.get(f);
        void 0 === h || h === a[f] || h.Ya && h.Ya(a[f]) || (d[f] = this.get(f), e = !0)
      }
      e && (this.Vt = new g.ri(d, a, null, 0), this.Vt.transition = function(a, c, e) {
        e /= b || 300;
        if (1 <= e) return c;
        var f = {},
          h;
        for (h in d) d.hasOwnProperty(h) && (f[h] = "center" === h ? a[h].add(c[h].Sa(a[h]).Bd(e)) : a[h] + (c[h] - a[h]) * e);
        return f
      },
        this.Vt.qo = function(b) {
          b === a && (this.Vt.stop(), this.ld = null);
          for (var c in b) b.hasOwnProperty(c) && ("center" === c ? this.setCenter(b[c], !0) : this.set(c, b[c]))
        },
        this.Vt.Ul(this))
    },
    xea: function(a) {
      "3D" === this.get("viewMode") && g.l.en ? (this.set("baseRender", "vw"), this.view = new g.pH(this, a)) : this.view = new g.EB(this, a);
      this.GY()
    },
    GY: function() {
      this.vh = "d" < this.get("baseRender") || "3D" === this.view.type
    },
    featuresChanged: function() {
      this.UK()
    },
    iN: function() {
      this.UK();
      this.BO()
    },
    BO: function() {
      if (this.Fl) {
        var a = !0,
          b = this.getMapStyle();
        if (!1 === this.get("showIndoorMap") || "normal" !== b && "amap://styles/normal" !== b) a = !1;
        var b = this.getLayers(),
          c;
        for (c in b) b.hasOwnProperty(c) && "AMap.IndoorMap" === b[c].CLASS_NAME && b[c] !== this.Fl && (a = !1);
        this.Fl.getMap() !== this && this.Fl.setMap(this);
        this.Fl.set("visible", a)
      }
    },
    UK: function() {
      this.d2();
      if (this.view && "3D" !== this.view.type) {
        var a = this.get("baseRender");
        if (a && !("dv" < a)) {
          var b = this.get("features", null, !0),
            c = this.getMapStyle(),
            d = this.get("editEnable");
          b && c && (g.l.PD && (d || "all" !== b || "normal" !== c && "amap://styles/normal" !== c) ? (this.set("baseRender", "v"), this.FN = a) : this.FN && (this.set("baseRender", this.FN), this.FN = null));
          this.GY()
        }
      }
    },
    zca: function() {
      var a = this; ! a.Fl && a.I && (a.indoorMap = a.Fl = new AMap.IndoorMap({
        innerLayer: !0
      }), a.BO(), g.c.Ac(function() {
        a.o("indoor_create", {
          target: a
        });
        a.set("display")
      }))
    },
    layersChanged: function() {
      var a = this.getLayers();
      this.sF = !1;
      for (var b = 0; b < a.length; b += 1) a[b].getMap() !== this && a[b].setMap(this),
      a[b].sF && (this.sF = !0);
      this.BO()
    },
    getMapNumber: function() {
      if (this.map) return this.map.yA()
    },
    getAdcode: function() {
      g.a.add(this, "getAdcode");
      return g.w.xca
    },
    d2: function() {
      function a() {
        var a = !1;
        g.c.Tb(b.B.layers,
          function(b) {
            if (!b.LI && b.constructor === y.q.eb) return a = !0,
              !1
          },
          b);
        if (g.c.ea(["d", "dv"], b.get("baseRender")) || !g.c.ea(["normal", "amap://styles/normal"], b.get("mapStyle")) || "3D" === b.get("viewMode") && 0 < b.get("pitch") || "all" !== b.get("features") || b.get("editEnable") || !b.get("turboMode")) a = !1;
        return a
      }
      if (!this.T_) {
        var b = this,
          c = a(),
          d = this.get("rasterLayer");
        if (d && !c) this.Qi(d),
          this.set("rasterLayer", void 0);
        else if (!d && c && this.get("layers")) {
          d = new y.q.eb({
            map: this,
            Pi: !0,
            zIndex: 0
          });
          if (this.B.layers) {
            var e = null;
            g.c.Tb(this.B.layers,
              function(a) {
                a instanceof y.q.eb && !a.LI && (null === e || a.get("zIndex") > e.get("zIndex")) && (e = a)
              });
            e && d.ve(["zIndex", "opacity", "zooms", "visible"], e)
          }
          this.set("rasterLayer", d, !0)
        }
      }
    },
    yda: function(a) {
      a || (a = {});
      if (a.hasOwnProperty("defaultLayer")) {
        a.layers = [a.defaultLayer];
        var b = a.defaultLayer;
        b.wK = !0;
        this.set("defaultLayer", b, !0)
      }
      a.layers && 0 !== a.layers.length || (b = new y.q.eb, a.layers = [b], b.wK = !0, this.set("defaultLayer", b, !0));
      if (b = a.view) b.B.rotation && (a.rotation = b.B.rotation),
      b.B.center && (a.center = b.B.center),
      b.B.zoom && (a.zoom = Math.max(a.zooms[0], Math.min(a.zooms[1], b.B.zoom))),
      b.B.crs && (a.crs = b.B.crs);
      a.level && !a.zoom && (a.zoom = a.level);
      return a
    },
    setLimitBounds: function(a) {
      g.a.add(this, "setLimitBounds");
      a instanceof g.hn && (a = a.toBounds());
      a instanceof g.je || (a = null);
      this.set("limitBounds", a)
    },
    clearLimitBounds: function() {
      g.a.add(this, "clearLimitBounds");
      this.set("limitBounds", null)
    },
    getLimitBounds: function() {
      g.a.add(this, "getLimitBounds");
      return this.get("limitBounds", null, !0)
    },
    zD: function(a) {
      var b = this.get("layers");
      0 <= g.c.indexOf(b, a) || (b.push(a), this.set("layers", b))
    },
    Oy: function(a) {
      var b = this.get("overlays");
      0 <= g.c.indexOf(b, a) || (a instanceof y.A.bm ? (this.get("overlays").push(a), this.$D instanceof y.A.bm && this.$D.close(), this.$D = a, this.set("contextmenu", a, !0)) : (a instanceof y.A.te && (this.Om instanceof y.A.te && this.bw(this.Om), this.Om = a), this.get("overlays").push(a)), this.o("overlays"))
    },
    Qi: function(a) {
      var b = this.get("layers");
      a = g.c.indexOf(b, a); - 1 !== a && this.set("layers", g.c.Dm(b, a))
    },
    bw: function(a) {
      var b = this.get("overlays");
      this.set("overlays", g.c.Dm(b, g.c.indexOf(b, a)))
    },
    getTileCoordByLngLat: function(a) {
      var b = Math.round(this.getZoom());
      a = this.hc(a, b);
      b = new g.cm(b, Math.floor(a.x / 256), Math.floor(a.y / 256));
      b.sz = a.x % 256;
      b.tz = a.y % 256;
      return b
    },
    setZoom: function(a, b) {
      g.a.add(this, "setZoom");
      a = this.vz(a);
      var c = this.get("zooms");
      a > c[1] && (a = c[1]);
      a < c[0] && (a = c[0]);
      this.get("zoomEnable") && (b || !this.loaded ? (this.set("zoom", a), this.o("zoomstart"), this.o("zoomchange"), this.o("zoomend")) : this.set("zoomSlow", a))
    },
    getZoom: function() {
      g.a.add(this, "getZoom");
      return this.vz(this.get("targetLevel") || this.get("zoom", null, !0))
    },
    getCenter: function() {
      g.a.add(this, "getCenter");
      return this.get("center", null, !0)
    },
    setCenter: function(a, b) {
      g.a.add(this, "setCenter");
      a = g.c.Da(a);
      b || !this.loaded ? (this.o("movestart"), this.set("center", a), this.o("mapmove"), this.map ? this.map.o("moveend") : this.o("moveend")) : this.panTo(a)
    },
    getCoordsBound: function() {
      return this.view.Bk()
    },
    getCoordsBoundByZoom: function(a) {
      return this.view.Qfa(a)
    },
    setRotation: function() {
      var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
      g.a.add(this, "setRotation"); ! g.l.re && this.get("rotateEnable") && this.set("rotation", a)
    },
    getRotation: function() {
      g.a.add(this, "getRotation");
      return this.get("rotation")
    },
    setPitch: function(a) {
      g.a.add(this, "setPitch");
      a = Math.min(this.get("maxPitch"), Math.max(a, 0));
      "3D" === this.view.type && this.get("pitchEnable") && this.set("pitch", a)
    },
    getPitch: function() {
      g.a.add(this, "getRotation");
      return "3D" === this.view.type ? this.get("pitch") : 0
    },
    getStatus: function() {
      g.a.add(this, "getStatus");
      for (var a = "isHotspot pitchEnable dragEnable zoomEnable keyboardEnable jogEnable doubleClickZoom scrollWheel resizeEnable touchZoom rotateEnable animateEnable".split(" "), b = {},
             c = 0; c < a.length; c += 1) b[a[c]] = this.get(a[c], null, !0);
      return b
    },
    setStatus: function(a) {
      g.a.add(this, "setStatus");
      for (var b in a) a.hasOwnProperty(b) && -1 !== "isHotspot,pitchEnable,dragEnable,keyboardEnable,doubleClickZoom,scrollWheel,zoomEnable,jogEnable,continuousZoomEnable,resizeEnable,animateEnable,rotateEnable,touchZoom".indexOf(b) && this.set(b, a[b])
    },
    getResolution: function(a, b) {
      g.a.add(this, "getResolution");
      var c = (a = g.c.Da(a)) ? a.N: this.get("center", null, !0).N;
      return this.Wh.ao(b || this.get("zoom")) * Math.cos(c * Math.PI / 180)
    },
    getScale: function(a) {
      g.a.add(this, "getScale");
      return this.getResolution() * (a || 96) / 0.0254
    },
    getDefaultCursor: function() {
      g.a.add(this, "getDefaultCursor");
      return this.get("defaultCursor", null, !0) || "url(" + g.w.Ab + "/theme/v1.3/openhand.cur),default"
    },
    setDefaultCursor: function(a) {
      g.a.add(this, "setDefaultCursor");
      return this.set("defaultCursor", a, !0)
    },
    zoomIn: function(a) {
      g.a.add(this, "zoomIn");
      this.setZoom(this.getZoom() + 1, a)
    },
    zoomOut: function(a) {
      g.a.add(this, "zoomOut");
      this.setZoom(this.getZoom() - 1, a)
    },
    vz: function(a) {
      return this.view && "3D" === this.view.type ? g.c.Td(a, 4) : Math.round(a)
    },
    setZoomAndCenter: function(a, b, c) {
      g.a.add(this, "setZoomAndCenter");
      b = g.c.Da(b);
      a = this.vz(a);
      var d = this.get("zooms");
      a > d[1] && (a = d[1]);
      a < d[0] && (a = d[0]);
      this.loaded ? this.set("zoomAndCenter", [a, b, c]) : (this.setZoom(a, !0), this.setCenter(b, !0))
    },
    clearMap: function() {
      g.a.add(this, "clearMap");
      for (var a = this.get("overlays"), b = 0; b < a.length; b += 1) a[b].set("map", null, !0);
      this.set("overlays", []);
      if (this.map && this.map.za) for (a = this.map.za, b = a.length - 1; 0 <= b; b -= 1) a[b].ba instanceof y.q.SG && a[b].ba.setMap(null)
    },
    destroy: function() {
      g.a.add(this, "destroy");
      this.Fl && (this.Fl.setMap(), this.indoorMap = this.Fl = null);
      this.set("overlays", []);
      this.set("layers", []);
      var a = this.get("controls");
      a.remove = [];
      for (var b in a.gd) a.gd.hasOwnProperty(b) && a.remove.push(a.gd[b]);
      a.gd = [];
      a.add = [];
      this.set("controls", a);
      this.set("destroy", !0);
      this.pa = !1;
      this.Lo();
      this.I = null;
      y.Sb.er--
    },
    addControl: function(a) {
      g.a.add(this, "addControl");
      var b = g.c.Pb(a),
        c = this.get("controls") || {};
      c.gd = c.gd || {};
      c.gd[b] || (c.gd[b] = a);
      c.add = c.add || [];
      c.add.push(a);
      this.set("controls", c)
    },
    removeControl: function(a) {
      g.a.add(this, "removeControl");
      var b = g.c.Pb(a),
        c = this.get("controls") || {};
      c.gd = c.gd || {};
      c.gd[b] && delete c.gd[b];
      c.remove = c.remove || [];
      c.remove.push(a);
      this.set("controls", c)
    },
    clearControl: function() {
      g.a.add(this, "clearControl");
      var a = this.get("controls") || {};
      a.remove = a.remove || [];
      a.gd = a.gd || {};
      for (var b in a.gd) a.gd.hasOwnProperty(b) && (a.remove.push(a.gd[b]), delete a.gd[b]);
      this.set("controls", a)
    },
    plugin: function(a, b) {
      g.a.add(this, "setPitch");
      "string" === typeof a && (a = [a]);
      g.mb.yg(a, b);
      return this
    },
    clearInfoWindow: function() {
      g.a.add(this, "clearInfoWindow");
      var a = this.get("overlays");
      a && 0 !== a.length && this.Om && this.Om.close()
    },
    remove: function(a) {
      g.a.add(this, "remove");
      a instanceof Array || (a = [a]);
      for (var b = 0; b < a.length; b += 1) {
        var c = a[b];
        c.getMap && c.getMap() === this && (c.close ? c.close() : c.setMap && c.setMap(null))
      }
    },
    add: function(a) {
      g.a.add(this, "add");
      a instanceof Array || (a = [a]);
      for (var b = 0; b < a.length; b += 1) {
        var c = a[b];
        c.getMap && c.getMap() !== this && !c.open && c.setMap && c.setMap(this)
      }
    },
    getAllOverlays: function(a, b) {
      g.a.add(this, "getAllOverlays");
      var c = this.get("overlays");
      if (a) {
        for (var d = "amap." + a.toLowerCase(), e = [], f = 0; f < c.length; f += 1) d !== c[f].CLASS_NAME.toLowerCase() || !b && (c[f].oa || c[f].isOfficial) || e.push(c[f]);
        return e
      }
      if (!b) {
        e = [];
        for (f = 0; f < c.length; f += 1) c[f].oa || c[f].isOfficial || e.push(c[f]);
        c = e
      }
      d = this.get("layers");
      e = [];
      if (d) for (var f = 0,
                    h = d.length; f < h; f += 1) d[f] instanceof y.q.SG && e.push(d[f]);
      return c.concat(e)
    },
    triggerResize: function() {
      this.map && this.map.OJ()
    },
    refreshSize: function() {
      this.TB = this.Wfa()
    },
    Wfa: function() {
      return g.h.BX(this.I)
    },
    getSize: function(a) {
      a || g.a.add(this, "getSize"); (!this.TB || 10 > this.TB.width * this.TB.height) && this.refreshSize();
      return this.TB
    },
    getContainer: function() {
      g.a.add(this, "getContainer");
      return this.I
    },
    panTo: function(a) {
      g.a.add(this, "panTo");
      a = g.c.Da(a);
      this.loaded ? this.set("panTo", a) : this.setCenter(a)
    },
    panBy: function(a, b, c) {
      g.a.add(this, "panBy");
      var d = this.get("rotation") * Math.PI / 180,
        e = a * Math.cos(d) + Math.sin(d) * b;
      a = -Math.sin(d) * a + Math.cos(d) * b;
      b = this.loaded && this.map && this.map.ld ? this.map.ld.q1: this.get("centerCoords");
      d = Math.pow(2, 20 - this.getZoom());
      e = b.add(new g.F( - e * d, -a * d));
      e = this.se(e); ! this.loaded || c ? this.setCenter(e, c) : this.set("panTo", e)
    },
    setFitView: function(a, b, c, d) {
      g.a.add(this, "setFitView");
      var e = this.get("size"),
        f = e.height;
      if (!e.width || !f) return ! 0;
      if (a = this.RX(a)) {
        if (c = this.AE(a, 0, new g.F(40, 40), c, d)) b = b || !this.getBounds().contains(a.sh()) || g.l.W && 1 < Math.abs(c[0] + this.get("zoom", null, !0)),
          this.setZoomAndCenter(c[0], c[1], b);
        return a
      }
    },
    RX: function(a) {
      if (a) if (a instanceof y.A.eh) a = [a];
      else {
        if (! (a instanceof Array)) return null
      } else a = this.getAllOverlays();
      if (a) {
        for (var b, c = 0; c < a.length; c += 1) {
          var d = a[c]; ! d.get("visible") || d instanceof y.A.te || d instanceof y.A.bm || (d = d.getBounds()) && (b = b ? d.kna(b) : d)
        }
        return b
      }
    },
    getBounds: function(a) {
      g.a.add(this, "getBounds");
      var b = this.view.ed();
      return a && b.toBounds ? b.toBounds() : b
    },
    setBounds: function(a, b, c, d, e, f) {
      g.a.add(this, "setBounds");
      c = this.AE(a, b, c, e, f);
      d = d || g.l.W && 1 < Math.abs(c[0] + b - this.get("zoom", null, !0));
      this.setZoomAndCenter(c[0], c[1], d);
      return a
    },
    HX: function(a, b, c, d, e) {
      a = this.RX(a);
      return this.AE(a, b, c, d, e)
    },
    getCoordsBoundByZoomIn3D: function(a) {
      this.DD || (this.DD = new g.pH);
      var b = this.getRotation(),
        c = this.getPitch();
      a = {
        size: this.getSize(!0).ab(),
        zoom: a,
        rotation: b,
        pitch: c,
        centerCoords: this.get("centerCoords")
      };
      this.DD.Pf(a, !0);
      this.DD.Oo();
      return this.DD.Bk()
    },
    AE: function(a, b, c, d, e) {
      b = b ? Number(b) : 0;
      var f = this.getRotation(),
        h = this.getPitch(),
        k = this.getSize(!0).ab(),
        l = this.getViewMode_(),
        m = a.RL(this);
      a = a.UL(this);
      this.Sy || (this.Sy = "3D" === l ? new g.pH: new g.EB);
      this.Sy.Pf({
          size: k,
          zoom: 3,
          rotation: f,
          pitch: h,
          centerCoords: m
        },
        !0);
      var n = h = 0;
      d ? (n = d[0], c = d[1], h = d[2], d = d[3], k.width -= h + d, k.height -= n + c, h = (h - d) / 2, n = (n - c) / 2) : c && (k.width -= 2 * c.x, k.height -= 2 * c.y);
      e = e || (g.l.W ? 17 : 18);
      c = this.get("zooms");
      d = c[0];
      var p = Infinity,
        q = Infinity;
      do {
        this.Sy.Pf({
            zoom: d
          },
          !0);
        "3D" === l && this.Sy.Oo();
        for (var q = p = Infinity,
               s = -Infinity,
               r = -Infinity,
               u = 0; u < a.length; u += 1) var w = this.Sy.Ne(a[u]), p = Math.min(p, w.x), s = Math.max(s, w.x), q = Math.min(q, w.y), r = Math.max(r, w.y);
        p = s - p;
        q = r - q;
        if (p > k.width || q > k.height) {
          d -= 1;
          break
        }
        d += 1
      } while ( d < c [ 1 ]);
      d = Math.min(c[1], e, Math.max(c[0], d + b));
      d = Math.floor(d);
      b = Math.pow(2, 20 - d);
      e = f * Math.PI / 180;
      f = h * Math.cos(e) + Math.sin(e) * n;
      e = -Math.sin(e) * h + Math.cos(e) * n;
      m = m.Sa(new g.F(f * b, e * b));
      m = this.Xg(m, 20);
      return [d, m]
    },
    setLayers: function(a) {
      g.a.add(this, "setLayers");
      for (var b = 0; b < a.length; b += 1) a[b].set("map", this, !0);
      this.set("layers", a)
    },
    getLayers: function() {
      g.a.add(this, "getLayers");
      return this.get("layers", null, !0)
    },
    getDefaultLayer: function() {
      g.a.add(this, "getDefaultLayer");
      return this.get("defaultLayer", null, !0)
    },
    setDefaultLayer: function(a) {
      g.a.add(this, "setDefaultLayer");
      a.wK = !0;
      var b = this.get("defaultLayer"),
        c = this.get("layers");
      if (b) {
        if (a === b) return;
        b.wK = !1;
        c = g.c.Dm(c, g.c.indexOf(c, b))
      }
      this.set("defaultLayer", a, !0);
      c.push(a);
      this.setLayers(c)
    },
    pixelToLngLat: function(a, b) {
      g.a.add(this, "pixelToLngLat");
      return this.Xg(a, b)
    },
    lnglatToPixel: function(a, b) {
      g.a.add(this, "lnglatToPixel");
      return this.hc(a, b)
    },
    drawPolyline: function(a) {
      g.a.add(this, "drawPolyline");
      this.set("draw", "polyline");
      this.set("drawStyle", a || {
          strokeColor: "#006600",
          bb: 0.9
        })
    },
    render: function(a) {
      g.a.add(this, "render");
      this.map && this.map.set("display", a ? 1 : 0)
    },
    drawPolygon: function(a) {
      g.a.add(this, "drawPolygon");
      this.set("draw", "polygon");
      this.set("drawStyle", a || {
          strokeColor: "#006600",
          bb: 0.9,
          fillColor: "#FFAA00",
          Md: 0.9
        })
    },
    drawCircle: function(a) {
      g.a.add(this, "drawCircle");
      this.set("draw", "circle");
      this.set("drawStyle", a || {
          strokeColor: "#006600",
          bb: 0.9,
          fillColor: "#006600",
          Md: 0.9
        })
    },
    JE: function() {
      return this.view.JE()
    },
    getCameraState: function() {
      g.a.add(this, "getCameraState");
      if (this.view && "3D" == this.view.type) return this.view.AX()
    },
    endDraw: function() {
      this.set("draw", null)
    },
    isGoogleTileVisible: function() {
      return this.map && this.map.NI()
    },
    Ne: function(a, b, c) {
      g.a.add(this, "p20ToContainer");
      return this.view.Ne(a, b, c)
    },
    Ef: function(a, b, c) {
      g.a.add(this, "containerToP20");
      return this.view.Ef(a, b, c)
    },
    getObject3DByContainerPos: function(a, b, c) {
      g.a.add(this, "getObject3DByContainerPos");
      if ("2D" === this.view.type || !this.map || !this.map.Q) return null;
      this.view.Ef(a);
      var d = this.view.DX(a),
        e = this.map.Q.XN,
        f = this.view.Dc,
        h = this.get("zoom", null, !0),
        h = Math.pow(2, 20 - h);
      b = b || this.getLayers();
      for (var k = [], l = 0; l < b.length; l += 1) {
        var m = b[l];
        m instanceof y.q.Zj && (m = m.an(e, d, f, h, a)) && k.push(m)
      }
      return c ? k: k.length ? (k.sort(function(a, b) {
        return a.zd - b.zd
      }), {
        index: k[0].index,
        point: k[0].tA,
        distance: k[0].zd,
        object: k[0].object
      }) : null
    }
  }); y.Sb.sg({
    Vz: "lngLatToGeodeticCoord",
    Ofa: "geodeticCoordToLngLat",
    AE: "getFitZoomAndCenterByBounds",
    HX: "getFitZoomAndCenterByOverlays",
    hq: "lnglatTocontainer",
    lnglatTocontainer: "lngLatToContainer",
    On: "containTolnglat",
    containTolnglat: "containerToLngLat",
    Lb: "lngLatToP20",
    se: "p20ToLngLat",
    Ne: "p20ToContainer",
    Ef: "containerToP20",
    hc: "project",
    Xg: "unproject"
  }); y.Sb.vb({
    isHotspotChanged: function() {
      if ("undefined" !== typeof this.Ez && (this.Uda(), this.get("isHotspot"))) {
        var a = this.get("layers", null, !0);
        a && a.length && !this.Ez && this.sF && this.nja()
      }
    },
    nja: function() {
      if (this.Mm) this.zY();
      else {
        var a = this;
        this.plugin("AMap.HotSpot",
          function() {
            if (!a.Ez) {
              if (!a.Mm) {
                var b = new g.bh;
                new y.A.te;
                a.Mm = b
              }
              a.zY()
            }
          })
      }
    },
    Uda: function() {
      this.Mm && this.Xga()
    },
    e_: function(a) {
      a.type = "hotspotover";
      a.isIndoorPOI = !1;
      this.o("hotspotover", a)
    },
    c_: function(a) {
      a.type = "hotspotclick";
      a.isIndoorPOI = !1;
      this.o("hotspotclick", a)
    },
    d_: function(a) {
      a.type = "hotspotout";
      a.isIndoorPOI = !1;
      this.o("hotspotout", a)
    },
    zY: function() {
      var a = this.Mm;
      this.Mm.setMap(this);
      a.g("mouseover", this.e_, this);
      a.g("click", this.c_, this);
      a.g("mouseout", this.d_, this)
    },
    Xga: function() {
      var a = this.Mm;
      a.H("mouseover", this.e_, this);
      a.H("click", this.c_, this);
      a.H("mouseout", this.d_, this);
      this.Mm.setMap(null);
      this.Mm = null
    }
  }); y.event = {
    CLASS_NAME: "AMap.event",
    U: function(a, b, c, d) {
      g.a.add(this, "addDomListener");
      g.C.g(a, b, c, d);
      return new g.oB(0, a, b, c, d)
    },
    Aca: function() {},
    addListener: function(a, b, c, d) {
      g.a.add(this, "addListener");
      g.c.gi(a.addListener) ? a.addListener(b, c, d) : (a.Vd || (a.Vd = g.la.Vd), g.la.g.call(a, b, c, d));
      return new g.oB(1, a, b, c, d)
    },
    Ny: function(a, b, c, d) {
      g.a.add(this, "addListenerOnce");
      g.c.gi(a.Ny) ? a.Ny(b, c, d) : (a.Vd || (a.Vd = g.la.Vd), g.la.g.call(a, b, c, d, !0));
      return new g.oB(1, a, b, c, d)
    },
    SD: function(a) {
      g.c.gi(a.SD) ? a.SD() : g.la.Bi.call(a)
    },
    Vr: function(a, b) {
      g.a.add(this, "clearListeners");
      g.c.gi(a.Vr) ? a.Vr(b) : g.la.Bi.call(a, b)
    },
    removeListener: function(a) {
      g.a.add(this, "removeListener");
      a instanceof g.oB && (g.c.gi(a.fi.removeListener) ? a.fi.removeListener(a) : 0 === a.type ? g.C.H(a.fi, a.AL, a.AM, a.Ve) : 1 === a.type && (a.fi.Vd || (a.fi.Vd = g.la.Vd), g.la.H.call(a.fi, a.AL, a.AM, a.Ve)))
    },
    K: function(a, b) {
      g.a.add(this, "trigger");
      var c = Array.prototype.slice.call(arguments, 1);
      g.c.gi(a.K) ? a.K.apply(a, c) : (a.Vd || (a.Vd = g.la.Vd), g.la.o.apply(a, c))
    }
  }; g.oB = g.X.extend({
    r: function(a, b, c, d, e) {
      this.type = a;
      this.fi = b;
      this.AL = c;
      this.AM = d;
      this.Ve = e
    }
  });
  var lc = {
      U: "addDomListener",
      Aca: "addDomListenerOnce",
      addListener: "addListener",
      Ny: "addListenerOnce",
      SD: "clearInstanceListeners",
      Vr: "clearListeners",
      removeListener: "removeListener",
      K: "trigger"
    },
    mc;
  for (mc in lc) lc.hasOwnProperty(mc) && (y.event[lc[mc]] = y.event[mc]); g.event = y.event; y.q.Gc = g.X.extend({
    ea: [g.la, g.Ee],
    r: function(a) { (new Date).getTime();
      this.CLASS_NAME = this.CLASS_NAME || "AMap.Layer";
      g.c.Fb(this, a);
      this.B.map && (a = this.B.map, delete this.B.map, this.B.map = a);
      this.Pf(this.B)
    },
    getContainer: function() {
      g.a.add(this, "getContainer");
      if (this.q && this.q.M) return this.q.M.Gi()
    },
    getZooms: function() {
      return this.get("zooms", null, !0)
    },
    setOpacity: function(a) {
      g.a.add(this, "setOpacity");
      a !== this.get("opacity", null, !0) && this.set("opacity", a)
    },
    getOpacity: function() {
      return this.get("opacity", null, !0)
    },
    show: function() {
      g.a.add(this, "show");
      this.set("visible", !0);
      this.nq && this.q.f.layersChanged()
    },
    hide: function() {
      g.a.add(this, "hide");
      this.set("visible", !1);
      this.nq && this.q.f.layersChanged()
    },
    setMap: function(a) {
      g.a.add(this, "setMap");
      var b = this.get("map");
      a ? (b && a !== b && b.Qi(this), this.set("map", a)) : b && (b.Qi(this), this.set("map", null, !0), this.Qh = !1, this.Of && this.Of())
    },
    getMap: function() {
      g.a.add(this, "getMap");
      return this.get("map", null, !0)
    },
    mapChanged: function() {
      var a = this.get("map");
      a && a.zD(this)
    },
    setzIndex: function(a) {
      g.a.add(this, "setzIndex");
      this.set("zIndex", a)
    },
    getzIndex: function() {
      return this.get("zIndex", null, !0)
    }
  }); y.q.eb = y.q.Gc.extend({
    B: {
      tileSize: 256,
      visible: !0,
      opacity: 1,
      zIndex: 0,
      noLimg: 1,
      zooms: [3, 20],
      getTileUrl: g.l.W ? g.w.VA: g.w.aA,
      errorUrl: g.c.pfa,
      detectRetina: !0,
      className: "amap-layer",
      mapNumber: "",
      merge: !1,
      sort: !1,
      cacheSize: g.l.size
    },
    r: function(a) {
      this.CLASS_NAME = this.CLASS_NAME || "AMap.TileLayer";
      g.a.xa(this, a); (a = a || {}) && a.tileUrl && (a.getTileUrl = a.tileUrl);
      this.Fda(a);
      var b = a.zooms;
      b && b[1] >= this.Lj[0] ? (b[0] < this.Lj[0] && (b[0] = this.Lj[0]), b[1] > this.Lj[1] && (b[1] = this.Lj[1])) : a.zooms = [this.Lj[0], this.Lj[1]];
      arguments.callee.ma.call(this, a);
      a.Pi && (this.Pi = !0);
      this.LI = !this.Js()
    },
    setTextIndex: function(a) {
      g.a.add(this, "setTextIndex");
      this.set("textIndex", a)
    },
    Js: function() {
      if (this.get("createTile")) return ! 1;
      var a = this.get("getTileUrl");
      return a && a !== g.w.aA && a !== g.w.VA ? !1 : !0
    },
    mW: function() {
      if (!this.Js()) return ! 1;
      var a = this.get("map");
      return a && a.vh && "zh_cn" === a.get("lang") && !this.noVector ? !0 : !1
    },
    WX: function(a) {
      var b = g.w.lF;
      g.l.ka && this.get("detectRetina") && (b = g.w.lF.replace("scl=1", "scl=2"));
      a && (b = b.replace("ltype=3", "ltype=11"));
      return b
    },
    qg: function(a) {
      var b = this.mW(),
        c = this.get("map");
      this.Js() && this.set("mapNumber", "GS(2018)1709");
      if (this.Pi) return new g.q.eb(this, a, this.bp(this.WX(!0)), this.B.maxDataZoom, !0);
      if (b) if (this.nq = !0, g.q.dj) {
        if ("dv" === c.get("baseRender") && !this.get("watermark")) {
          var b = c.get("showBuildingBlock"),
            d = new g.q.eb(this, a, this.bp(this.WX(!b)), void 0, !0);
          b && (d.Sj = new g.q.md(new y.q.eb({
            zooms: [16, 20],
            innerLayer: "true"
          }), a, ["building"]), d.Sj.type = "\u697c\u5757\u56fe\u5c42", d.Sj.ve(["visible", "opacity", "zIndex"], d, !0), d.Sj.Vy(c.get("mapStyle") || "normal"));
          d.type = "\u6805\u683c\u5e95\u56fe";
          return d
        }
        if ("v" <= c.get("baseRender") || this.get("watermark")) return "3D" == a.D.view.type ? (c = new g.q.md(this, a, ["region", "road"]), c.type = "\u77e2\u91cf\u5e95\u56fe", c.Sj = new g.q.md(new y.q.eb({
          zooms: [17, 20],
          zIndex: 50,
          innerLayer: "true"
        }), a, ["building"]), c.Sj.Me = 17, c.Sj.type = "\u697c\u5757\u56fe\u5c42", c.Sj.xv = 1, c.Sj.ve(["visible", "merge", "sort", "opacity"], c, !0)) : (c = new g.q.md(this, a, ["region", "building", "road"]), c.type = "\u77e2\u91cf\u5e95\u56fe"),
          a.$ca = c
      } else return ["vectorlayer", "overlay"];
      else return this.nq = !1,
        new g.q.eb(this, a, null, this.B.maxDataZoom)
    },
    getTileUrlChanged: function() {
      var a = this.get("getTileUrl");
      if (a === g.w.aA || a === g.w.VA || a === g.w.XF) this.sF = !0;
      "string" === typeof a && (a = this.bp(a));
      this.set("tileFun", a)
    },
    Fda: function(a) {
      this.Lj || (this.Lj = [this.B.zooms[0], this.B.zooms[1]]);
      var b;
      a.hasOwnProperty("detectRetina") && !1 === a.detectRetina && (b = !0);
      g.l.W && g.l.ka && this.B.detectRetina && !b && (this.Lj[1] -= 1)
    },
    getTiles: function() {
      g.a.add(this, "getTiles");
      var a = this.get("tiles", null, !0);
      if (a && a.length) a = a[0];
      else return [];
      for (var b = [], c, d = 0; d < a.length; d += 1) a[d].key && (c = a[d].key.split("/"), b.push("" + c[1] + "," + c[2]));
      return b
    },
    reload: function() {
      g.a.add(this, "reload");
      this.set("reload", 1)
    },
    zo: function() {
      var a = this.get("map", null, !0);
      this.setMap(null);
      this.Qh = !1;
      this.setMap(a)
    },
    setTileUrl: function(a) {
      g.a.add(this, "setTileUrl");
      this.mW() ? (this.set("getTileUrl", a), this.zo()) : this.set("getTileUrl", a)
    },
    bp: function(a) {
      var b = this,
        c, d, e;
      return function(f, h, k) {
        f = (f + Math.pow(2, k)) % Math.pow(2, k);
        if ("number" !== typeof(f + h + k)) return null;
        var l = b.get("map"),
          m = "zh_cn";
        l && (m = l.get("lang") || "zh_cn");
        k = a.replace("[x]", f).replace("[y]", h).replace("[z]", k).replace("[lang]", m);
        if (!c) {
          if (d = a.match(/\{.*\}/)) e = d.toString().replace("{", "").replace("}", ""),
            e = e.split(",");
          c = !0
        }
        e && e.length && (k = k.replace(d, e[Math.abs(f + h) % e.length]));
        return k
      }
    },
    getTileUrl: function(a, b, c) {
      g.a.add(this, "getTileUrl");
      return this.get("tileFun", null, !0)(a, b, c)
    },
    getZooms: function(a) {
      a || g.a.add(this, "getZooms");
      return this.get("zooms", null, !0)
    }
  }); y.q.eb.aQ = y.q.eb.extend({
    B: {
      getTileUrl: g.w.qO,
      zooms: [3, 20],
      zIndex: 2,
      maxDataZoom: 18,
      detectRetina: !1,
      mapNumber: "GS(2018)984",
      className: "amap-layer amap-satellite",
      cacheSize: g.l.size
    },
    r: function(a) {
      this.CLASS_NAME = "AMap.TileLayer.Satellite";
      g.a.xa(this, a);
      this.Lj = [3, 20];
      arguments.callee.ma.apply(this, arguments)
    }
  }); y.q.eb.ZP = y.q.eb.extend({
    B: {
      getTileUrl: g.w.XF,
      zooms: [3, 20],
      zIndex: 3,
      type: "overlayer",
      maxDataZoom: 18,
      className: "amap-layer amap-roadnet",
      cacheSize: g.l.size
    },
    r: function(a) {
      this.CLASS_NAME = "AMap.TileLayer.RoadNet";
      g.a.xa(this, a);
      this.Lj = [3, 20];
      arguments.callee.ma.apply(this, arguments)
    },
    qg: function(a) {
      if (this.get("map").vh) {
        this.nq = !0;
        var b = g.w.YF;
        g.l.ka && this.get("detectRetina") && (b = g.w.YF.replace("scl=1", "scl=2"));
        a = new g.q.eb(this, a, this.bp(b), this.B.maxDataZoom)
      } else this.nq = !1,
        a = new g.q.eb(this, a);
      return a
    }
  }); y.q.eb.eQ = y.q.eb.extend({
    B: {
      getTileUrl: function(a, b, c) {
        return g.w.Xb + "://tm.amap.com/trafficengine/mapabc/traffictile?v=1.0&t=1&zoom=" + (17 - c) + "&x=" + a + "&y=" + b
      },
      zooms: [6, 20],
      zIndex: 4,
      type: "overlayer",
      autoRefresh: !1,
      interval: 180,
      maxDataZoom: 17,
      alwaysRender: !g.l.sL,
      className: "amap-layer amap-traffic",
      cacheSize: g.l.size
    },
    r: function(a) {
      this.CLASS_NAME = "AMap.TileLayer.Traffic";
      g.a.xa(this, a);
      this.Lj = [6, 20];
      arguments.callee.ma.apply(this, arguments);
      this.startRefresh()
    },
    stopRefresh: function() {
      g.a.add(this, "stopRefresh");
      this.NF && (clearInterval(this.NF), this.NF = null)
    },
    startRefresh: function() {
      g.a.add(this, "startRefresh");
      if (this.get("autoRefresh") && !this.NF) {
        var a = this;
        this.NF = setInterval(function() {
            a.reload();
            a.o("refresh")
          },
          Math.max(1E3 * (this.get("interval") || 180), 1E4))
      }
    },
    reload: function() {
      g.a.add(this, "reload");
      g.c.Ac(function() {
          this.set("reload")
        },
        this)
    },
    Of: function() {
      this.stopRefresh();
      this.get("map") && this.get("map").H("zoomstart", this.reload, this)
    },
    qg: function(a) {
      var b = this.get("map"),
        b = a.D;
      b.g("zoomstart", this.reload, this);
      return "d" !== b.get("baseRender") ? g.q.Ut ? a = new g.q.Ut(this, a) : ["vt"] : a = new g.q.eb(this, a, null, this.B.maxDataZoom)
    }
  }); y.q.eb.Xw = y.q.eb.extend({
    B: {
      zooms: [3, 20],
      zIndex: 12,
      detectRetina: !1,
      className: "amap-layer amap-flexible",
      cacheSize: g.l.size
    },
    r: function(a) {
      this.CLASS_NAME = this.CLASS_NAME || "AMap.TileLayer.Flexible";
      g.a.xa(this, a);
      this.Cha = !0;
      arguments.callee.ma.call(this, a)
    },
    setCreateTile: function(a) {
      g.a.add(this, "setCreateTile");
      "function" === typeof a && a !== this.get("createTile") && this.set("createTile", a)
    },
    getCreateTile: function() {
      return this.get("createTile", null, !0)
    }
  }); y.q.eb.h4 = y.q.eb.Xw.extend({
    B: {
      zooms: [3, 20],
      zIndex: 12,
      tileSize: 512,
      detectRetina: !1,
      className: "amap-layer amap-wms",
      cacheSize: g.l.size,
      url: "",
      params: ""
    },
    r: function(a) {
      this.CLASS_NAME = "AMap.TileLayer.WMS";
      g.a.xa(this, a);
      arguments.callee.ma.call(this, a);
      this.yt();
      var b = this,
        c = this.get("tileSize");
      this.set("createTile",
        function(a, e, f, h, k) {
          var l = Math.pow(2, 20 - f) * c;
          f = new g.F(l * a, l * (e + 1));
          a = new g.F(l * (a + 1), l * e);
          e = g.kF.l_(f);
          a = g.kF.l_(a);
          var m = document.createElement("img");
          "3D" === b.So && (m.crossOrigin = "anonymous");
          m.src = this.url + "&BBOX=" + e + "," + a;
          g.C.g(m, "load",
            function() {
              h(m)
            });
          g.C.g(m, "error",
            function() {
              k(m)
            })
        })
    },
    yt: function() {
      var a = this.get("url", null, !0),
        b = this.get("params", null, !0),
        c = this.get("tileSize");
      b.WIDTH = c;
      b.HEIGHT = c;
      b.CRS = b.CRS || "EPSG:3857";
      b.REQUEST = "GetMap";
      b.SERVICE = "WMS";
      b.FORMAT = b.FORMAT || "image/png";
      b.TRANSPARENT = void 0 === b.TRANSPARENT ? "true": b.TRANSPARENT;
      delete b.BBOX;
      this.url = a + "?" + g.c.join(b, "&");
      this.reload()
    },
    setUrl: function(a) {
      g.a.add(this, "setUrl");
      this.set("url", a, !0);
      this.yt()
    },
    getUrl: function() {
      g.a.add(this, "getUrl");
      return this.get("url", null, !0)
    },
    setParams: function(a) {
      g.a.add(this, "setParams");
      g.extend(this.get("params", null, !0), a || {});
      this.yt()
    },
    getParams: function() {
      g.a.add(this, "getParams");
      return this.get("params", null, !0)
    }
  }); y.q.eb.i4 = y.q.eb.Xw.extend({
    B: {
      zooms: [3, 20],
      tileSize: 256,
      zIndex: 12,
      detectRetina: !1,
      className: "amap-layer amap-wmts",
      cacheSize: g.l.size
    },
    r: function(a) {
      this.CLASS_NAME = "AMap.TileLayer.WMTS";
      g.a.xa(this, a);
      arguments.callee.ma.call(this, a);
      this.yt();
      var b = this;
      this.get("tileSize");
      this.set("createTile",
        function(a, d, e, f, h) {
          var k = document.createElement("img");
          "3D" === b.So && (k.crossOrigin = "anonymous");
          k.src = this.url + "&TileMatrix=" + e + "&TileRow=" + d + "&TileCol=" + a;
          g.C.g(k, "load",
            function() {
              f(k)
            });
          g.C.g(k, "error",
            function() {
              h(k)
            })
        })
    },
    yt: function() {
      var a = this.get("url", null, !0),
        b = this.get("params", null, !0);
      b.TileMatrixSet = b.TileMatrixSet || "EPSG:3857";
      b.Request = "GetTile";
      b.Service = "WMTS";
      b.Format = b.Format || "image/png";
      this.url = a + "?" + g.c.join(b, "&");
      this.reload()
    },
    setUrl: function(a) {
      g.a.add(this, "setUrl");
      this.set("url", a, !0);
      this.yt()
    },
    getUrl: function() {
      g.a.add(this, "getUrl");
      return this.get("url", null, !0)
    },
    setParams: function(a) {
      g.a.add(this, "setParams");
      g.extend(this.get("params", null, !0), a || {});
      this.yt()
    },
    getParams: function() {
      g.a.add(this, "getParams");
      return this.get("params", null, !0)
    }
  }); y.q.eb.$w = y.q.eb.Xw.extend({
    B: {
      detectRetina: !0,
      zooms: [10, 18],
      zIndex: 2
    },
    r: function(a) {
      arguments.callee.ma.apply(this, arguments);
      var b = this;
      this.set("createTile",
        function(a, d, e, f, h) {
          function k(a, c, d) {
            var e = "zh_cn";
            b && b.get && l && (e = l.get("lang") || "zh_cn");
            return g.w.Xb + "://grid.amap.com/grid/" + d + "/" + a + "/" + c + "?src=jsapi&key=" + g.w.key + "&lang=" + e + "&dpiType=" + (g.l.kd ? "wprd": "webrd")
          }
          var l = b.f || b.get("map");
          l.dp || (l.dp = new g.Sb.$w(l.map));
          if (l.dp.QA(a, d, e)) h();
          else {
            var m = document.createElement("img");
            "3D" === b.So && (m.crossOrigin = "anonymous");
            m.src = k(a, d, e);
            g.C.g(m, "load",
              function() {
                f(m)
              });
            g.C.g(m, "error",
              function() {
                h(m)
              })
          }
        })
    }
  }); y.q.Oc = y.q.Gc.extend({
    B: {
      visible: !0,
      zooms: [3, 25],
      type: "overlay",
      zIndex: 5,
      alwaysRender: !0
    },
    r: function(a) {
      this.NY = !0;
      arguments.callee.ma.apply(this, arguments)
    },
    qg: function(a) {
      return new g.q.Oc(this, a)
    }
  }); y.q.G2 = y.q.Gc.extend({
    B: {
      zooms: [14, 20],
      zIndex: 8,
      visible: !0,
      merge: !0,
      sort: !1
    },
    r: function(a) {
      this.CLASS_NAME = "AMap.Buildings";
      g.a.xa(this, a);
      a = a || {};
      a.zooms && (a.zooms[0] = Math.max(14, a.zooms[0]));
      arguments.callee.ma.apply(this, arguments)
    },
    Js: function() {
      return ! 1
    },
    qg: function(a) {
      if (g.l.PD) return a = new g.q.c4(this, a),
        a.xv = this.get("heightFactor") || 1,
        a
    },
    setStyle: function(a) {
      this.set("customStyle", a);
      g.a.add(this, "setStyle")
    }
  }); y.q.PG = y.q.Gc.extend({
    B: {
      visible: !0,
      zooms: [3, g.l.W ? 20 : 18],
      opacity: 1,
      type: "overlay",
      zIndex: 6
    },
    r: function(a) {
      arguments.callee.ma.apply(this, arguments)
    },
    qg: function(a) {
      return g.q.ax ? new g.q.ax(this, a) : ["imagelayer"]
    },
    getMap: function() {
      g.a.add(this, "getMap");
      return this.ue.map
    },
    show: function() {
      g.a.add(this, "show");
      this.set("visible", !0);
      this.o("options")
    },
    getOpacity: function() {
      g.a.add(this, "getOpacity");
      return this.get("opacity", null, !0)
    },
    setOpacity: function(a) {
      g.a.add(this, "setOpacity");
      this.set("opacity", a)
    },
    getBounds: function() {
      g.a.add(this, "getBounds");
      return this.get("bounds", null, !0).ab()
    },
    setBounds: function(a) {
      g.a.add(this, "setBounds");
      this.o("bounds", a);
      this.setOptions({
        bounds: a
      })
    },
    hide: function() {
      g.a.add(this, "hide");
      this.set("visible", !1);
      this.o("options")
    },
    setOptions: function(a) {
      g.a.add(this ? this.CLASS_NAME: "AMap.ImageLayer", "setOptions");
      this.Pf(a);
      this.o("options")
    },
    getOptions: function() {
      g.a.add(this, "getOptions");
      var a = {},
        b;
      for (b in this.B) this.B.hasOwnProperty(b) && (a[b] = this.get(b));
      return a
    },
    getElement: function() {
      return this.q.M ? this.q.M.Ob: this.q.cn ? this.q.cn.Ob: null
    }
  }); y.q.ax = y.q.PG.extend({
    r: function(a) {
      this.CLASS_NAME = "AMap.ImageLayer";
      g.a.xa(this, a);
      a && a.url && (a.__source__ = a.url);
      arguments.callee.ma.apply(this, arguments)
    },
    getImageUrl: function() {
      g.a.add(this, "getImageUrl");
      return this.get("__source__")
    },
    setImageUrl: function(a) {
      g.a.add(this, "setImageUrl");
      return this.set("__source__", a)
    }
  }); y.q.g4 = y.q.PG.extend({
    r: function(a) {
      this.CLASS_NAME = "AMap.VideoLayer";
      g.a.xa(this, a);
      a && a.url && (a.__source__ = a.url);
      arguments.callee.ma.apply(this, arguments)
    },
    getVideoUrl: function() {
      g.a.add(this, "getVideoUrl");
      return this.get("__source__")
    },
    setVideoUrl: function(a) {
      g.a.add(this, "setVideoUrl");
      return this.set("__source__", a)
    }
  }); y.q.I2 = y.q.PG.extend({
    r: function(a) {
      this.CLASS_NAME = "AMap.CanvasLayer";
      g.a.xa(this, a);
      a && a.canvas && (a.__source__ = a.canvas);
      arguments.callee.ma.apply(this, arguments)
    },
    getCanvas: function() {
      g.a.add(this, "getCanvas");
      return this.get("__source__")
    },
    setCanvas: function(a) {
      g.a.add(this, "setCanvas");
      return this.set("__source__", a)
    },
    reFresh: function() {
      this.q && (this.q.PA = !0, this.q.set("display"))
    }
  }); y.q.t3 = y.q.Gc.extend({
    B: {
      visible: !0,
      zooms: [3, g.l.W ? 20 : 18],
      type: "overlay",
      zIndex: 5,
      cursor: "pointer",
      alwaysRender: !0,
      stable: !0,
      bubble: !0,
      className: "amap-mass"
    },
    r: function(a, b) {
      this.CLASS_NAME = "AMap.MassMarks";
      g.a.xa(this, b);
      g.l.Hk && (this.hi = !0, b.size && (b.size = g.c.vo(b.size)), this.setData(a), g.c.Fb(this, b), b.style ? (this.Pf(this.B, !0), this.setStyle(b.style)) : this.setStyle(this.B))
    },
    clear: function() {
      g.a.add(this, "clear");
      this.set("dataSources", "")
    },
    getStyle: function() {
      g.a.add(this, "getStyle");
      return this.Tk
    },
    setStyle: function(a) {
      g.a.add(this, "setStyle");
      if (a instanceof Array) {
        for (var b = 0; b < a.length; b += 1) a[b].rotation_ = Math.PI * (a[b].rotation || 0) / 180,
          a[b].size = g.c.vo(a[b].size),
          a.Pe = Math.max(a.Pe || 0, a[b].size.width + a[b].anchor.x),
          a.wf = Math.max(a.Pe || 0, a[b].size.height + a[b].anchor.y);
        this.Tk = a
      } else a.size && (a.size = g.c.vo(a.size)),
        a.rotation_ = Math.PI * (a.rotation || 0) / 180,
        this.Pf(a, !0),
        this.Tk = {
          anchor: this.get("anchor"),
          url: this.get("url"),
          size: this.get("size"),
          rotation_: this.get("rotation_")
        },
        this.Tk.Pe = this.Tk.size.width + this.Tk.anchor.x,
        this.Tk.wf = this.Tk.size.height + this.Tk.anchor.y;
      this.o("style")
    },
    setData: function(a) {
      g.a.add(this, "setData");
      this.set("dataSources", a)
    },
    getData: function() {
      g.a.add(this, "getData");
      return this.get("datas") || this.get("dataSources")
    },
    setMap: function(a) {
      g.a.add(this, "setMap");
      g.l.Hk && (a ? (this.get("map") && this.get("map").Qi(this), this.set("map", a)) : this.get("map") && (this.get("map").Qi(this), this.set("map", null, !0), this.Qh = !1, this.Of && this.Of()))
    },
    qg: function(a) {
      return g.mb.Pz(["cvector"]) ? (a = new g.q.Oc(this, a), this.V("datas", a), a) : ["cvector"]
    }
  }); y.q.SG = y.q.ax.extend({
    r: function(a, b, c) {
      this.CLASS_NAME = "AMap.GroundImage";
      g.a.xa(this, c);
      c = c || {};
      this.ag = !0;
      var d = parseFloat(c.opacity);
      isNaN(d) && (d = 1);
      arguments.callee.ma.call(this, {
        url: a,
        bounds: b,
        clickable: c.clickable,
        opacity: d,
        map: c.map,
        zooms: c.zooms || [3, 20]
      });
      this.CLASS_NAME = "AMap.GroundImage"
    },
    cja: function(a) {
      this.get("bounds").contains(a.lnglat) && (a.target = this, this.o("click", a))
    },
    dja: function(a) {
      this.get("bounds").contains(a.lnglat) && (a.target = this, this.o("dblclick", a))
    },
    setMap: function(a) {
      g.a.add(this, "setMap");
      a ? (this.get("map") && (this.get("map").Qi(this), this.tW && y.event.removeListener(this.tW), this.LW && y.event.removeListener(this.LW)), this.set("map", a)) : this.get("map") && (this.get("map").Qi(this), this.ue.map = null)
    },
    mapChanged: function() {
      this.get("map") && (this.get("map").zD(this), this.get("clickable") && (this.tW = y.event.addListener(this.get("map"), "click", this.cja, this), this.LW = y.event.addListener(this.get("map"), "dblclick", this.dja, this)))
    }
  }); y.A.eh = g.X.extend({
    ea: [g.la, g.Ee, {
      Da: g.c.Da
    }],
    B: {
      extData: {},
      bubble: !1,
      clickable: !0,
      draggable: !1
    },
    r: function() {
      this.xC = g.c.Pb(this)
    },
    jra: function() {
      return this.xC
    },
    Ypa: function() {
      this.get("map", null, !0) && this.setMap(this.get("map"))
    },
    mapChanged: function() {
      this.get("map", null, !0) && this.get("map", null, !0).Oy(this)
    },
    HL: function(a) {
      var b = 0;
      a && (b = "string" === typeof a ? Math.round(parseFloat(a) / 0.14929107086948487) : a);
      return b
    },
    setHeight: function(a) {
      this.height = a = a || 0;
      a = this.HL(a);
      this.set("altitude", a)
    },
    getHeight: function() {
      return this.height
    },
    show: function() {
      g.a.add(this, "show");
      this.set("visible", !0)
    },
    hide: function() {
      g.a.add(this, "hide");
      this.set("visible", !1)
    },
    setMap: function(a) {
      g.a.add(this, "setMap");
      a !== this.get("map", null, !0) && (a ? (this.get("map", null, !0) && this.get("map", null, !0).bw(this), this.set("map", a)) : this.get("map", null, !0) && (this.get("map", null, !0).bw(this), this.set("map", null, !0)))
    },
    getMap: function() {
      g.a.add(this, "getMap");
      return this.get("map", null, !0)
    },
    setExtData: function(a) {
      g.a.add(this, "setExtData");
      this.set("extData", a)
    },
    getExtData: function() {
      g.a.add(this, "getExtData");
      return this.get("extData", null, !0)
    }
  }); y.A.Oc = y.A.eh.extend({
    r: function(a) {
      y.A.Oc.Hc.r.apply(this, arguments)
    },
    show: function() {
      g.a.add(this, "show");
      this.set("visible", !0);
      this.o("show", {
        type: "show",
        target: this
      })
    },
    hide: function() {
      g.a.add(this, "hide");
      this.set("visible", !1);
      this.o("hide", {
        type: "hide",
        target: this
      })
    },
    getVisible: function() {
      g.a.add(this, "getVisible");
      return this.get("visible", null, !0)
    },
    getOptions: function() {
      g.a.add(this, "getOptions");
      var a = {},
        b = "map zIndex strokeColor strokeOpacity strokeWeight strokeStyle strokeDasharray extData bubble clickable".split(" "),
        c = "isOutline outlineColor geodesic path lineJoin lineCap borderWeight showDir dirColor dirImg".split(" "),
        d = ["fillColor", "fillOpacity", "path", "lineJoin", "texture"],
        e = ["center", "radius", "texture"],
        f = ["bounds", "texture"],
        h = [];
      this instanceof y.A.Kb && (h = b.concat(c));
      this instanceof y.A.qc && (h = b.concat(d));
      this instanceof y.A.hg && (h = b.concat(e).concat(d));
      this instanceof y.A.Xq && (h = b.concat(e).concat(d));
      this instanceof y.A.ar && (h = b.concat(d).concat(f));
      for (b = 0; b < h.length; b += 1) a[h[b]] = this.get(h[b], null, !0);
      return a
    },
    setOptions: function(a) {
      g.a.add(this, "setOptions");
      a.hasOwnProperty("path") && (a.path && a.path.length || (a.path = []), a.path = this.Da(a.path));
      a.center && (a.center = this.Da(a.center));
      var b;
      a.hasOwnProperty("map") && (b = a.map, delete a.map);
      this.Pf(a);
      void 0 !== b && (this.setMap(b), a.map = b);
      this.o("options");
      this.o("change", {
        type: "change",
        target: this
      })
    },
    setzIndex: function(a) {
      g.a.add(this, "setzIndex");
      this.set("zIndex", a)
    },
    getzIndex: function() {
      g.a.add(this, "getzIndex");
      return this.get("zIndex", null, !0)
    },
    setDraggable: function(a) {
      g.a.add(this, "setDraggable");
      this.set("draggable", a)
    }
  }); y.A.zB = y.A.Oc.extend({
    B: {
      visible: !0,
      zIndex: 10,
      strokeColor: "#006600",
      strokeOpacity: 0.9,
      strokeWeight: 3,
      strokeStyle: "solid",
      strokeDasharray: [10, 5],
      lineJoin: "miter",
      lineCap: "butt",
      path: []
    },
    r: function(a) {
      y.A.zB.Hc.r.apply(this, arguments)
    },
    setPath: function(a, b) {
      g.a.add(this, "setPath");
      a && a.length || (a = []);
      a = this.Da(a);
      this.set("path", a);
      this.o("change", {
        type: "change",
        target: this
      });
      b || this.o("setPath");
      this.A && this.A.get("deltaPos") && this.A.set("deltaPos", [0, 0])
    },
    getPath: function() {
      g.a.add(this, "getPath");
      var a = this.get("path", null, !0);
      this.A && this.A.get("deltaPos") && (a = this.A.yI(a, this.A.get("deltaPos")));
      return a
    },
    ed: function() {
      var a = this.get("path");
      if (!a || !a.length) return null;
      a[0] instanceof g.T && (a = [a]);
      for (var b = new g.je(180, 90, -180, -90), c = 0; c < a.length; c += 1) for (var d = a[c], e = d.length - 1; 0 <= e; e -= 1) b.extend(d[e]);
      return b
    }
  }); y.A.zB.sg({
    ed: "getBounds"
  }); y.A.dh = g.X.extend({
    ea: [g.la, g.Ee],
    B: {
      size: new g.bd(36, 36),
      imageOffset: new g.F(0, 0),
      image: g.w.Ab + "/theme/v1.3/markers/0.png",
      imageSize: null
    },
    r: function(a) {
      this.CLASS_NAME = "AMap.Icon";
      g.a.xa(this, a);
      a = a || {};
      a.size && (a.size = g.c.vo(a.size));
      a.imageSize && (a.imageSize = g.c.vo(a.imageSize));
      g.c.Fb(this, a);
      this.Pf(this.B)
    },
    setImageSize: function(a) {
      g.a.add(this, "setImageSize");
      a = g.c.vo(a);
      this.set("imageSize", a)
    },
    getImageSize: function() {
      g.a.add(this, "getImageSize");
      return this.get("imageSize", null, !0)
    }
  }); y.A.s3 = g.X.extend({
    ea: [g.la, g.Ee],
    B: {
      coords: [],
      type: ""
    },
    r: function(a) {
      this.CLASS_NAME = "AMap.MarkerShape";
      g.a.xa(this, a);
      g.c.Fb(this, a);
      this.Pf(this.B)
    }
  }); y.A.hb = y.A.eh.extend({
    B: {
      cursor: "pointer",
      visible: !0,
      zIndex: 100,
      angle: 0,
      textAlign: "left",
      verticalAlign: "top",
      autoRotation: !1,
      opacity: 1,
      offset: new g.F( - 9, -31),
      size: new g.F(19, 33),
      raiseOnDrag: !1,
      topWhenClick: !1,
      topWhenMouseOver: !1,
      animation: "AMAP_ANIMATION_NONE"
    },
    r: function(a) {
      this.CLASS_NAME = "AMap.Marker";
      g.a.xa(this, a);
      a = a || {};
      this.ag = !0;
      this.X8 = g.c.Pb(this);
      a.position && (a.position = this.Da(a.position));
      a.height && this.setHeight(a.height);
      g.c.Fb(this, a);
      g.l.re && (this.B.angle = 0);
      this.Pf(this.B, !0);
      this.mapChanged()
    },
    getId: function() {
      g.a.add(this, "getId");
      return this.X8
    },
    setRaiseOnDrag: function(a) {
      g.a.add(this, "setRaiseOnDrag");
      this.set("raiseOnDrag", a)
    },
    setPosition: function(a, b) {
      g.a.add(this, "setPosition");
      a = this.Da(a);
      void 0 !== b && this.setHeight(b);
      this.set("position", a)
    },
    getBounds: function() {
      var a = this.getPosition().ab();
      return new g.je(a, a.ab())
    },
    mapChanged: function() {
      this.Vj("zoom");
      var a = this.get("map", null, !0);
      a && (this.get("position", null, !0) || this.set("position", a.get("center")), a.Oy(this), this.V("zoom", a))
    },
    getZooms: function() {
      g.a.add(this, "getZooms");
      return this.get("zooms", null, !0)
    },
    zoomChanged: function() {
      var a = this.get("zooms", null, !0);
      if (a) {
        var b = this.get("zoom");
        b < a[0] || b > a[1] ? this.set("outOfZooms", !0) : this.set("outOfZooms", !1);
        this.A && this.A.zja()
      }
    },
    getPosition: function() {
      g.a.add(this, "getPosition");
      return this.get("position", null, !0)
    },
    setIcon: function(a) {
      g.a.add(this, "setIcon");
      this.set("icon", a)
    },
    getIcon: function() {
      g.a.add(this, "getIcon");
      return this.get("icon", null, !0)
    },
    setContent: function(a) {
      g.a.add(this, "setContent");
      this.set("content", a)
    },
    getContent: function() {
      g.a.add(this, "getContent");
      return this.get("content", null, !0)
    },
    getContentDom: function() {
      return this.get("contentDom", null, !0)
    },
    hide: function() {
      g.a.add(this, "hide");
      this.set("visible", !1)
    },
    show: function() {
      g.a.add(this, "show");
      this.set("visible", !0)
    },
    setCursor: function(a) {
      g.a.add(this, "setCursor");
      this.set("cursor", a)
    },
    setRotation: function(a) {
      g.a.add(this, "setRotation");
      g.l.re || this.set("angle", a)
    },
    setAngle: function(a) {
      g.a.add(this, "setAngle");
      g.l.re || "number" !== typeof a || this.set("angle", a)
    },
    getAngle: function() {
      g.a.add(this, "getAngle");
      return this.get("angle", null, !0)
    },
    setOffset: function(a) {
      g.a.add(this, "setOffset");
      this.set("offset", a)
    },
    getOffset: function() {
      g.a.add(this, "getOffset");
      return this.get("offset", null, !0)
    },
    setTextAlign: function(a) {
      g.a.add(this, "setTextAlign");
      this.set("textAlign", a)
    },
    getTextAlign: function() {
      g.a.add(this, "getTextAlign");
      return this.get("textAlign", null, !0)
    },
    setVerticalAlign: function(a) {
      g.a.add(this, "setVerticalAlign");
      this.set("verticalAlign", a)
    },
    getVerticalAlign: function() {
      g.a.add(this, "getVerticalAlign");
      return this.get("verticalAlign", null, !0)
    },
    setzIndex: function(a) {
      g.a.add(this, "setzIndex");
      this.set("zIndex", a)
    },
    getzIndex: function() {
      g.a.add(this, "getzIndex");
      return this.get("zIndex", null, !0)
    },
    setOpacity: function(a) {
      g.a.add(this, "setOpacity");
      this.set("opacity", a)
    },
    setDraggable: function(a) {
      g.a.add(this, "setDraggable");
      this.set("draggable", a)
    },
    getDraggable: function() {
      g.a.add(this, "getDraggable");
      return this.get("draggable", null, !0)
    },
    moveTo: function(a, b, c) {
      g.a.add(this, "moveTo");
      a = this.Da(a);
      this.set("move", {
        Mf: a,
        speed: b,
        ob: c
      })
    },
    moveAlong: function(a, b, c, d) {
      g.a.add(this, "moveAlong");
      this.set("move", {
        Mf: a,
        speed: b,
        ob: c,
        Jda: d
      })
    },
    stopMove: function() {
      g.a.add(this, "stopMove");
      this.set("move", !1)
    },
    pauseMove: function() {
      g.a.add(this, "pauseMove");
      var a = this.get("move");
      if (!a) return ! 1;
      a.action = "pause";
      this.set("move", a);
      return ! 0
    },
    resumeMove: function() {
      g.a.add(this, "resumeMove");
      var a = this.get("move");
      if (!a) return ! 1;
      a.action = "resume";
      this.set("move", a);
      return ! 0
    },
    setShadow: function(a) {
      g.a.add(this, "setShadow");
      this.set("shadow", a)
    },
    getShadow: function() {
      g.a.add(this, "getShadow");
      return this.get("shadow", null, !0)
    },
    setClickable: function(a) {
      g.a.add(this, "setClickable");
      a !== this.getClickable() && this.set("clickable", a)
    },
    getClickable: function() {
      g.a.add(this, "getClickable");
      return this.get("clickable", null, !0)
    },
    setTitle: function(a, b) {
      g.a.add(this, "setTitle");
      "string" === typeof a && this.set("title", a, b)
    },
    getTitle: function() {
      g.a.add(this, "getTitle");
      return this.get("title", null, !0)
    },
    setLabel: function(a) {
      g.a.add(this, "setLabel");
      a && !g.c.ko(a) && (a = g.extend({},
        this.get("label"), a));
      this.set("label", a)
    },
    getLabel: function() {
      g.a.add(this, "getLabel");
      return this.get("label", null, !0)
    },
    setTop: function(a, b) {
      g.a.add(this, "setTop");
      this.set("isTop", a, b)
    },
    getTop: function() {
      g.a.add(this, "getTop");
      return this.get("isTop", null, !0)
    },
    setShape: function(a, b) {
      g.a.add(this, "setShape");
      this.set("shape", a, b)
    },
    getShape: function() {
      g.a.add(this, "getShape");
      return this.get("shape", null, !0)
    },
    setAnimation: function(a, b) {
      g.a.add(this, "setAnimation");
      this.set("animation", a, b)
    },
    getAnimation: function() {
      g.a.add(this, "getAnimation");
      return this.get("animation", null, !0)
    },
    getMap: function() {
      g.a.add(this, "getMap");
      return this.get("map", null, !0)
    },
    markOnAMAP: function(a) {
      g.a.add(this, "markOnAMAP");
      a = a || {};
      var b = {};
      b.name = a.name || this.get("name", null, !0) || "";
      a = this.Da(a.position) || this.get("position", null, !0);
      b.y = a.N;
      b.x = a.O;
      g.Zg.Iq(g.Zg.Aga(b))
    }
  }); y.A.bm = y.A.eh.extend({
    B: {
      visible: !1,
      items: []
    },
    r: function(a) {
      this.CLASS_NAME = "AMap.ContextMenu";
      g.a.xa(this, a);
      this.ag = !0;
      g.c.Fb(this, a);
      this.B.items = [];
      this.Pf(this.B)
    },
    addItem: function(a, b, c) {
      g.a.add(this, "addItem");
      this.get("items").push({
        Q1: a,
        ob: b,
        BF: c
      });
      this.o("items")
    },
    removeItem: function(a, b) {
      g.a.add(this, "removeItem");
      var c = this.get("items"),
        d,
        e;
      for (e = 0; e < c.length; e += 1) if (d = c[e], d.Q1 === a && d.ob === b) {
        c.splice(e, 1);
        break
      }
      this.o("items")
    },
    open: function(a, b) {
      g.a.add(this, "open");
      b = g.c.Da(b);
      this.set("position", b);
      this.map ? this.map && this.map !== a && (this.map.bw(this), this.map = a, this.setMap(a)) : (this.map = a, this.setMap(a));
      this.o("open", {
        type: "open",
        target: this
      })
    },
    close: function() {
      g.a.add(this, "close");
      this.setMap(null);
      this.map && (this.map = this.map.$D = null, this.o("close", {
        type: "close",
        target: this
      }))
    }
  }); y.A.te = y.A.eh.extend({
    B: {
      visible: !0,
      offset: new g.F(0, 0),
      showShadow: !1,
      closeWhenClickMap: !1,
      retainWhenClose: !0,
      autoMove: !0,
      altitude: 0
    },
    r: function(a) {
      this.CLASS_NAME = this.CLASS_NAME || "AMap.InfoWindow";
      g.a.xa(this, a);
      a = a || {};
      this.ag = !0;
      a && a.size && (a.size = g.c.vo(a.size));
      g.c.Fb(this, a);
      this.Pf(this.B);
      a.position && this.set("position", g.c.Da(a.position), !0);
      a.height && this.set("altitude", this.HL(a.height), !0)
    },
    open: function(a, b, c) {
      g.a.add(this, "open");
      b = g.c.Da(b);
      if (a && !this.sG && (b = b || this.get("position", null, !0))) {
        this.o("change", {
          type: "change",
          target: this
        });
        c = this.HL(c) || this.get("altitude");
        var d = this.get("map", null, !0);
        d && d === a ? (this.set("altitude", c, !0), this.set("position", b)) : (this.map = a, a.Om && a.Om.close(), this.set("position", b, !0), this.set("altitude", c, !0), this.setMap(a));
        this.o("open", {
          type: "open",
          target: this
        })
      }
    },
    close: function() {
      g.a.add(this, "close");
      this.A && this.A.map && (this.setMap(null), this.map = null, this.o("change", {
        type: "change",
        target: this
      }))
    },
    setContent: function(a) {
      g.a.add(this, "setContent");
      this.set("content", a);
      this.o("change", {
        type: "change",
        target: this
      })
    },
    getContentU: function() {
      g.a.add(this, "getContentU");
      return this.get("content", null, !0)
    },
    getContentDom: function() {
      return this.get("contentDom", null, !0)
    },
    getContent: function() {
      g.a.add(this, "getContent");
      return this.get("content", null, !0)
    },
    setPosition: function(a) {
      g.a.add(this, "setPosition");
      a = g.c.Da(a);
      this.set("position", a);
      this.o("change", {
        type: "change",
        target: this
      })
    },
    setOffset: function(a) {
      g.a.add(this, "setOffset");
      this.set("offset", a);
      this.o("change", {
        type: "change",
        target: this
      })
    },
    getPosition: function() {
      g.a.add(this, "getPosition");
      return this.get("position", null, !0)
    },
    setSize: function(a) {
      g.a.add(this, "setSize");
      a = g.c.vo(a);
      this.set("size", a);
      this.o("change", {
        type: "change",
        target: this
      })
    },
    getSize: function(a) {
      g.a.add(this, "getSize");
      var b = this.get("size", null, !0);
      if (b) return b;
      if (this.A && !a) return new g.bd(this.A.qh.offsetWidth, this.A.qh.offsetHeight)
    },
    getIsOpen: function() {
      g.a.add(this, "getIsOpen");
      return !! this.get("map")
    }
  }); y.A.Kb = y.A.zB.extend({
    B: {
      isOutline: !1,
      outlineColor: "#000000",
      geodesic: !1,
      dirColor: "white",
      borderWeight: 1
    },
    r: function(a) {
      this.CLASS_NAME = "AMap.Polyline";
      g.a.xa(this, a);
      y.A.Kb.Hc.r.apply(this, arguments);
      this.ag = !0;
      a = a || {};
      a.zIndex = "number" === typeof a.zIndex ? a.zIndex: 50;
      a.path && (a.path = this.Da(a.path));
      g.c.Fb(this, a);
      this.setOptions(this.B)
    },
    getLength: function() {
      g.a.add(this, "getLength");
      for (var a = this.get("path"), b = 0, c = 0; c < a.length - 1; c += 1) b += a[c].ae(a[c + 1]);
      return parseFloat(b.toFixed(2))
    }
  }); (function(a) {
    function b(a, b, c, d) {
      if (1 <= a) return d;
      var e = 1 - a;
      return e * e * b + 2 * e * a * c + a * a * d
    }
    function c(a, b, c, d, e) {
      if (1 <= a) return e;
      var f = 3 * (c[0] - b[0]),
        h = 3 * (d[0] - c[0]) - f,
        r = 3 * (c[1] - b[1]);
      c = 3 * (d[1] - c[1]) - r;
      return [(e[0] - b[0] - f - h) * Math.pow(a, 3) + h * Math.pow(a, 2) + f * a + b[0], (e[1] - b[1] - r - c) * Math.pow(a, 3) + c * Math.pow(a, 2) + r * a + b[1]]
    }
    function d(a, c, d, e) {
      return [b(a, c[0], d[0], e[0]), b(a, c[1], d[1], e[1])]
    }
    function e(b, c) {
      c = a.c.Da(c);
      return b.Wz(c, 20).Uk()
    }
    function f(b, c) {
      a.c.isArray(c) && (c = new a.F(c[0], c[1]));
      return b.uA(c, 20)
    }
    function h(b, f, h, n, p, q) {
      var s = null;
      if (b && h && h.length) {
        b = [b];
        b.push.apply(b, h);
        b.push(f);
        h = 0;
        for (s = b.length; h < s; h++) b[h] = e(n, b[h]);
        h = a.extend({
            tolerance: 4,
            interpolateNumLimit: [3, 300]
          },
          q);
        q = h.tolerance;
        h = h.interpolateNumLimit;
        q = Math.max(2, q);
        for (var r = s = 0,
               u = 0,
               w = b.length; u < w - 1; u++) var v = b[u],
               t = b[u + 1],
               s = s + Math.abs(t[0] - v[0]),
               r = r + Math.abs(t[1] - v[1]);
        a: {
          p = Math.min(h[1], Math.max(h[0], Math.round(Math.max(s, r) / p / q)));
          q = null;
          switch (b.length) {
            case 3:
              q = d;
              break;
            case 4:
              q = c;
              break;
            default:
              s = null;
              break a
          }
          h = [];
          s = [0].concat(b);
          for (r = 1; r < p - 2; r++) s[0] = r / p,
            h.push(q.apply(null, s));
          h.push(b[b.length - 1]);
          s = h
        }
      }
      return s || [e(n, f)]
    }
    a.BP = {
      Vsa: d,
      lqa: c,
      MX: function(a, b, c, d) {
        var e, f, s = [];
        e = 0;
        for (f = a.length; e < f; e += 1) s.push.apply(s, h(a[e - 1], a[e], a[e].controlPoints, b, c, d));
        return s
      },
      qga: function(a, b, c, d) {
        a = this.MX(a, b, c, d);
        c = [];
        d = 0;
        for (var e = a.length; d < e; d++) c.push(f(b, a[d]));
        return c
      }
    }
  })(g); y.A.Tw = y.A.Kb.extend({
    B: {
      tolerance: 4,
      interpolateNumLimit: [3, 300]
    },
    r: function(a) {
      y.A.Tw.Hc.r.apply(this, arguments);
      this.CLASS_NAME = "AMap.BezierCurve";
      g.a.xa(this, a)
    },
    getLength: function() {
      g.a.add(this, "getLength");
      this.get("map");
      var a = this.getInterpolateLngLats();
      return g.Uo.distanceOfLine(a)
    },
    getInterpolateLngLats: function() {
      g.a.add(this, "getInterpolateLngLats");
      var a = this.get("map");
      return g.BP.qga(this.get("path"), a && a.Wh || g.Yg.RG, Math.pow(2, 2), this.B)
    },
    getSerializedPath: function() {
      g.a.add(this, "getSerializedPath");
      for (var a = this.get("path", null, !0), b = [], c = 0, d = a.length; c < d; c++) {
        var e = a[c];
        if (e instanceof g.T) {
          var f = [];
          if (e.controlPoints) for (var h = 0,
                                      k = e.controlPoints.length; h < k; h++) f.push(e.controlPoints[h].aM()),
            f.push(e.controlPoints[h].YL());
          f.push(e.aM());
          f.push(e.YL());
          b.push(f)
        } else b.push(e)
      }
      return b
    },
    Da: function(a) {
      var b = typeof a[0];
      if (g.c.isArray(a) && "object" === b) {
        for (b = 0; b < a.length; b += 1) a[b] = this.saa(a[b]);
        return a
      }
      return [this.Bsa(a)]
    },
    saa: function(a) {
      var b;
      if (a instanceof g.T) b = a;
      else {
        b = typeof a[0];
        var c, d, e = [];
        if ("string" === b || "number" === b) {
          d = a.length;
          if (d % 2) throw Error("LngLat number should be even, now it's " + d);
          b = new g.T(a[d - 2], a[d - 1]);
          c = 0;
          for (d -= 2; c < d; c += 2) e.push(new g.T(a[c], a[c + 1]))
        } else if (g.c.isArray(a[0])) for (d = a.length, b = new g.T(a[d - 1][0], a[d - 1][1]), c = 0, d -= 1; c < d; c++) e.push(new g.T(a[c][0], a[c][1]));
        else throw Error("AMap.LngLat expected, now it's " + a);
        b && e.length && (b.controlPoints = g.c.Da(e))
      }
      if (b.controlPoints && 2 < b.controlPoints.length) throw Error("Control Points Number should be 1 or 2 !");
      return b
    }
  }); y.A.qc = y.A.zB.extend({
    r: function(a) {
      this.CLASS_NAME = "AMap.Polygon";
      g.a.xa(this, a);
      y.A.qc.Hc.r.apply(this, arguments);
      this.ag = !0;
      a = a || {};
      a.zIndex = "number" === typeof a.zIndex ? a.zIndex: 10;
      a.path && (a.path = this.Da(a.path));
      g.c.Fb(this, g.extend({
          fillColor: "#FFAA00",
          fillOpacity: 0.9
        },
        a));
      this.setOptions(this.B)
    },
    iM: function(a) {
      var b = 6378137 * Math.PI / 180,
        c = 0,
        d = a.length;
      if (3 > d) return 0;
      for (var e = 0; e < d - 1; e += 1) var f = a[e],
        h = a[e + 1],
        k = f.O * b * Math.cos(f.N * Math.PI / 180),
        f = f.N * b,
        l = h.O * b * Math.cos(h.N * Math.PI / 180),
        c = c + (k * h.N * b - l * f);
      e = a[e];
      a = a[0];
      d = e.O * b * Math.cos(e.N * Math.PI / 180);
      e = e.N * b;
      h = a.O * b * Math.cos(a.N * Math.PI / 180);
      c += d * a.N * b - h * e;
      return 0.5 * Math.abs(c)
    },
    getArea: function() {
      g.a.add(this, "getArea");
      var a = this.get("path", null, !0),
        b;
      if (!a.length || a[0] instanceof g.T) b = this.iM(a);
      else {
        b = this.iM(a[0]);
        for (var c = 1; c < a.length; c += 1) b -= this.iM(a[c])
      }
      return Number(b.toFixed(2))
    },
    toString: function() {
      g.a.add(this, "toString");
      return this.get("path").join(";")
    },
    contains: function(a) {
      g.a.add(this, "contains");
      a = g.c.Da(a);
      var b = this.get("path");
      b.length && b[0] instanceof g.T && (b = [b]);
      a = [a.O, a.N];
      for (var c, d = 0,
             e = b.length; d < e && (c = this.wda(b[d]), g.ad.io(c) || c.reverse(), c = g.ad.qd(a, c, 0 === d ? !0 : !1), 0 < d && (c = !c), c); d += 1);
      return c
    },
    wda: function(a) {
      for (var b = [], c = 0; c < a.length; c += 1) b.push([a[c].O, a[c].N]);
      return b
    }
  }); y.A.hg = y.A.Oc.extend({
    B: {
      visible: !0,
      zIndex: 10,
      strokeColor: "#006600",
      strokeOpacity: 0.9,
      strokeWeight: 3,
      strokeStyle: "solid",
      strokeDasharray: [10, 5],
      radius: 1E3,
      fillColor: "#006600",
      fillOpacity: 0.9,
      unit: "miter"
    },
    r: function(a) {
      this.CLASS_NAME = this.CLASS_NAME || "AMap.Circle";
      g.a.xa(this, a);
      y.A.hg.Hc.r.apply(this, arguments);
      a = a || {};
      a.center && (a.center = g.c.Da(a.center));
      a.zIndex = "number" === typeof a.zIndex ? a.zIndex: 10;
      g.c.Gk(a.radius, "string") && (a.radius = parseFloat(a.radius), isNaN(a.radius) && delete a.radius);
      g.c.Fb(this, a);
      this.ag = this.B.center ? !0 : !1;
      this.setOptions(this.B)
    },
    setCenter: function(a, b) {
      g.a.add(this, "setCenter"); (a = g.c.Da(a)) && a instanceof g.T && (this.set("center", a), this.o("change", {
        type: "change",
        target: this
      }), this.ag || (this.ag = !0, this.get("map") && this.get("map").o("overlays")), b || this.o("setCenter"))
    },
    getCenter: function() {
      g.a.add(this, "getCenter");
      var a = this.get("center", null, !0);
      this.A && this.A.get("deltaPos") && (a = this.A.yI([a], this.A.get("deltaPos"))[0]);
      return a
    },
    setRadius: function(a, b) {
      g.a.add(this, "setRadius");
      this.set("radius", a);
      this.o("change", {
        type: "change",
        target: this
      });
      b || this.o("setRadius")
    },
    getPath: function(a) {
      g.a.add(this, "getPath");
      a = a || 36;
      for (var b = this.get("center", null, !0), c = this.get("radius", null, !0), d = [], e = 0; e < a; e += 1) {
        var f = Math.PI * e / a * 2,
          h = Math.cos(f) * c,
          f = Math.sin(f) * c;
        d.push(b.offset(h, f))
      }
      return d
    },
    getRadius: function() {
      g.a.add(this, "getRadius");
      return this.get("radius", null, !0)
    },
    getBounds: function() {
      var a = this.get("center"),
        b = this.get("radius");
      if (!a) return null;
      var c = a.offset( - b, -b),
        a = a.offset(b, b);
      return new g.je(c, a)
    },
    contains: function(a) {
      g.a.add(this, "contains");
      return this.get("center").ae(a) <= this.get("radius") ? !0 : !1
    }
  }); y.A.DP = y.A.hg.extend({
    r: function(a) {
      this.CLASS_NAME = "AMap.CircleMarker";
      g.a.xa(this, a);
      a = a || {};
      a.unit = "px";
      void 0 === a.radius ? a.radius = 20 : g.c.Gk(a.radius, "string") && (a.radius = parseFloat(a.radius), isNaN(a.radius) && (a.radius = 20));
      y.A.DP.Hc.r.apply(this, arguments)
    },
    getBounds: function() {
      var a = this.getCenter();
      return new g.je(a, a.ab())
    },
    contains: function(a) {
      g.a.add(this, "contains");
      var b = this.getMap();
      if (!b) return ! 1;
      var c = this.get("center");
      return c.ae(a) <= this.get("radius") * b.getResolution(c) ? !0 : !1
    }
  });
  var nc = g.X.extend({
    r: function(a) {
      var b = Array(3),
        c;
      c = a instanceof Array ? a: a instanceof g.$j || a instanceof g.Ia ? a.elements: arguments;
      b[0] = c[0] || 0;
      b[1] = c[1] || 0;
      b[2] = c[2] || 0;
      this.elements = b
    },
    length: function() {
      return Math.sqrt(this.uZ())
    },
    uZ: function() {
      var a = this.elements;
      return a[0] * a[0] + a[1] * a[1] + a[2] * a[2]
    },
    normalize: function() {
      var a = this.elements,
        b = a[0],
        c = a[1],
        d = a[2],
        e = Math.sqrt(b * b + c * c + d * d);
      if (e) {
        if (1 === e) return this
      } else return a[0] = 0,
        a[1] = 0,
        a[2] = 0,
        this;
      e = 1 / e;
      a[0] = b * e;
      a[1] = c * e;
      a[2] = d * e;
      return this
    },
    ab: function() {
      return new g.Ia(this)
    },
    copy: function(a) {
      var b = this.elements;
      a = a.elements;
      b[0] = a[0];
      b[1] = a[1];
      b[2] = a[2];
      return this
    },
    set: function(a, b, c) {
      var d = this.elements;
      d[0] = a;
      d[1] = b;
      d[2] = c
    },
    Ya: function(a) {
      var b = this.elements;
      a = a.elements;
      return b[0] === a[0] && b[1] === a[1] && b[2] === a[2]
    },
    Pl: function(a) {
      var b = this.elements;
      b[0] *= a;
      b[1] *= a;
      b[2] *= a;
      return this
    },
    add: function(a) {
      var b = this.elements;
      a = a.elements;
      b[0] += a[0];
      b[1] += a[1];
      b[2] += a[2];
      return this
    },
    Kca: function(a, b) {
      var c = a.elements,
        d = b.elements,
        e = this.elements;
      e[0] = c[0] + d[0];
      e[1] = c[1] + d[1];
      e[2] = c[2] + d[2];
      return this
    },
    sub: function(a) {
      a = a.elements;
      var b = this.elements;
      b[0] -= a[0];
      b[1] -= a[1];
      b[2] -= a[2];
      return this
    },
    uw: function(a, b) {
      var c = a.elements,
        d = b.elements,
        e = this.elements;
      e[0] = c[0] - d[0];
      e[1] = c[1] - d[1];
      e[2] = c[2] - d[2];
      return this
    },
    Hp: function(a) {
      a = a.elements;
      var b = this.elements;
      b[0] = b[1] * a[2] - b[2] * a[1];
      b[1] = b[2] * a[0] - b[0] * a[2];
      b[2] = b[0] * a[1] - b[1] * a[0];
      return this
    },
    Yu: function(a, b) {
      var c = a.elements,
        d = b.elements,
        e = this.elements;
      e[0] = c[1] * d[2] - c[2] * d[1];
      e[1] = c[2] * d[0] - c[0] * d[2];
      e[2] = c[0] * d[1] - c[1] * d[0];
      return this
    },
    We: function(a) {
      a = a.elements;
      var b = this.elements;
      return b[0] * a[0] + b[1] * a[1] + b[2] * a[2]
    },
    ae: function(a) {
      return Math.sqrt(this.SW(a))
    },
    SW: function(a) {
      var b = a.elements,
        c = this.elements;
      a = c[0] - b[0];
      var d = c[1] - b[1],
        b = c[2] - b[2];
      return a * a + d * d + b * b
    },
    of: function(a) {
      var b = this.elements[0],
        c = this.elements[1],
        d = this.elements[2];
      a = a.elements;
      var e = 1 / (a[3] * b + a[7] * c + a[11] * d + a[15]);
      this.elements[0] = (a[0] * b + a[4] * c + a[8] * d + a[12]) * e;
      this.elements[1] = (a[1] * b + a[5] * c + a[9] * d + a[13]) * e;
      this.elements[2] = (a[2] * b + a[6] * c + a[10] * d + a[14]) * e;
      return this
    }
  }); g.Ia = nc; g.Ia.sg({
    We: "dot",
    ab: "clone",
    add: "add",
    sub: "sub",
    Kca: "addVectors",
    uw: "subVectors",
    Yu: "crossVectors",
    normalize: "normalize",
    length: "length"
  });
  var oc = g.X.extend({
    r: function(a) {
      var b = Array(4),
        c;
      c = a instanceof Array ? a: arguments;
      b[0] = c[0];
      b[1] = c[1];
      b[2] = c[2];
      b[3] = c[3] || 1;
      this.elements = b
    },
    copy: function(a) {
      var b = this.elements;
      a = a.elements;
      b[0] = a[0];
      b[1] = a[1];
      b[2] = a[2];
      b[3] = void 0 !== a[3] ? a[3] : 1;
      return this
    },
    multiply: function(a) {
      var b = this.elements;
      b[0] *= a;
      b[1] *= a;
      b[2] *= a;
      b[3] *= a
    },
    of: function(a) {
      var b = this.elements[0],
        c = this.elements[1],
        d = this.elements[2],
        e = this.elements[3];
      a = a.elements;
      this.elements[0] = a[0] * b + a[4] * c + a[8] * d + a[12] * e;
      this.elements[1] = a[1] * b + a[5] * c + a[9] * d + a[13] * e;
      this.elements[2] = a[2] * b + a[6] * c + a[10] * d + a[14] * e;
      this.elements[3] = a[3] * b + a[7] * c + a[11] * d + a[15] * e;
      return this
    }
  }); g.$j = oc;
  function pc(a, b) {
    this.Pv = void 0 !== a ? a: new g.Ia(1, 0, 0);
    this.dz = void 0 !== b ? b: 0
  }
  g.Qt = pc; pc.prototype = {
    set: function(a, b) {
      this.Pv.copy(a);
      this.dz = b;
      return this
    },
    normalize: function() {
      var a = 1 / this.Pv.length();
      this.Pv.Pl(a);
      this.dz *= a;
      return this
    },
    fE: function(a) {
      return this.Pv.We(a) + this.dz
    }
  };
  function qc(a, b, c, d, e) {
    a.Pv.set(b, c, d);
    a.dz = e;
    return a
  };
  function rc(a, b, c, d, e, f) {
    this.rA = [void 0 !== a ? a: new g.Qt, void 0 !== b ? b: new g.Qt, void 0 !== c ? c: new g.Qt, void 0 !== d ? d: new g.Qt, void 0 !== e ? e: new g.Qt, void 0 !== f ? f: new g.Qt]
  }
  g.KP = rc; rc.prototype = {
    set: function(a, b, c, d, e, f) {
      var h = this.rA;
      h[0].copy(a);
      h[1].copy(b);
      h[2].copy(c);
      h[3].copy(d);
      h[4].copy(e);
      h[5].copy(f);
      return this
    },
    ab: function() {
      return (new g.KP).copy(this)
    },
    copy: function(a) {
      for (var b = this.rA,
             c = 0; 6 > c; c++) b[c].copy(a.rA[c]);
      return this
    },
    XE: function() {
      var a = new g.Ia,
        b = new g.Ia,
        c = a.elements,
        d = b.elements;
      return function(e) {
        var f = this.rA,
          h = e.max.elements;
        e = e.min.elements;
        for (var k = 0; 6 > k; k++) {
          var l = f[k],
            m = l.Pv.elements;
          c[0] = 0 < m[0] ? e[0] : h[0];
          d[0] = 0 < m[0] ? h[0] : e[0];
          c[1] = 0 < m[1] ? e[1] : h[1];
          d[1] = 0 < m[1] ? h[1] : e[1];
          c[2] = 0 < m[2] ? e[2] : h[2];
          d[2] = 0 < m[2] ? h[2] : e[2];
          m = l.fE(a);
          l = l.fE(b);
          if (0 > m && 0 > l) return ! 1
        }
        return ! 0
      }
    } ()
  }; (function(a) {
    function b(a) {
      this.elements = a || [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    }
    a.cH = function(a) {
      this.elements = [a.elements[0], a.elements[1], a.elements[2], a.elements[4], a.elements[5], a.elements[6], a.elements[8], a.elements[9], a.elements[10]]
    };
    b.prototype.uO = function() {
      var a = this.elements;
      a[0] = 1;
      a[4] = 0;
      a[8] = 0;
      a[12] = 0;
      a[1] = 0;
      a[5] = 1;
      a[9] = 0;
      a[13] = 0;
      a[2] = 0;
      a[6] = 0;
      a[10] = 1;
      a[14] = 0;
      a[3] = 0;
      a[7] = 0;
      a[11] = 0;
      a[15] = 1
    };
    b.prototype.set = function(a) {
      if (a.elements !== this.elements) return this.elements = a.elements.slice(0),
        this
    };
    b.prototype.toFixed = function(b) {
      for (var d = this.elements,
             e = 0; 16 > e; ++e) 0 !== d[e] && (d[e] = a.c.Td(d[e], b));
      return this
    };
    b.prototype.concat = function(a) {
      var b, e, f, h, k, l, m;
      e = b = this.elements;
      f = a.elements;
      if (b === f) for (f = Array(16), a = 0; 16 > a; ++a) f[a] = b[a];
      for (a = 0; 4 > a; a++) h = e[a],
        k = e[a + 4],
        l = e[a + 8],
        m = e[a + 12],
        b[a] = h * f[0] + k * f[1] + l * f[2] + m * f[3],
        b[a + 4] = h * f[4] + k * f[5] + l * f[6] + m * f[7],
        b[a + 8] = h * f[8] + k * f[9] + l * f[10] + m * f[11],
        b[a + 12] = h * f[12] + k * f[13] + l * f[14] + m * f[15];
      return this
    };
    b.multiply = function(b, d) {
      var e = Array(16),
        f,
        h,
        k,
        l,
        m,
        n,
        p;
      k = h = b.elements;
      l = d.elements;
      if (h === l) for (f = 0; 16 > f; ++f) e[f] = h[f];
      for (f = 0; 4 > f; f++) h = k[f],
        m = k[f + 4],
        n = k[f + 8],
        p = k[f + 12],
        e[f] = h * l[0] + m * l[1] + n * l[2] + p * l[3],
        e[f + 4] = h * l[4] + m * l[5] + n * l[6] + p * l[7],
        e[f + 8] = h * l[8] + m * l[9] + n * l[10] + p * l[11],
        e[f + 12] = h * l[12] + m * l[13] + n * l[14] + p * l[15];
      return new a.Fd(e)
    };
    b.prototype.multiply = b.prototype.concat;
    b.prototype.Bg = function(b) {
      var d = this.elements;
      b = b.elements;
      var e = new a.$j,
        f = e.elements;
      f[0] = b[0] * d[0] + b[1] * d[4] + b[2] * d[8] + b[3] * d[12];
      f[1] = b[0] * d[1] + b[1] * d[5] + b[2] * d[9] + b[3] * d[13];
      f[2] = b[0] * d[2] + b[1] * d[6] + b[2] * d[10] + b[3] * d[14];
      f[3] = b[0] * d[3] + b[1] * d[7] + b[2] * d[11] + b[3] * d[15];
      return e
    };
    b.prototype.Aw = function() {
      var a, b;
      a = this.elements;
      b = a[1];
      a[1] = a[4];
      a[4] = b;
      b = a[2];
      a[2] = a[8];
      a[8] = b;
      b = a[3];
      a[3] = a[12];
      a[12] = b;
      b = a[6];
      a[6] = a[9];
      a[9] = b;
      b = a[7];
      a[7] = a[13];
      a[13] = b;
      b = a[11];
      a[11] = a[14];
      a[14] = b;
      return this
    };
    b.prototype.Ela = function(a) {
      var b, e, f;
      b = a.elements;
      a = this.elements;
      e = [];
      e[0] = b[5] * (b[10] * b[15] - b[11] * b[14]) - b[9] * (b[6] * b[15] + b[7] * b[14]) + b[13] * (b[6] * b[11] - b[7] * b[10]);
      e[4] = -b[4] * (b[10] * b[15] - b[11] * b[14]) + b[8] * (b[6] * b[15] - b[7] * b[14]) - b[12] * (b[6] * b[11] - b[7] * b[10]);
      e[8] = b[4] * (b[9] * b[15] - b[11] * b[13]) - b[8] * (b[5] * b[15] - b[7] * b[13]) + b[12] * (b[5] * b[11] - b[7] * b[9]);
      e[12] = -b[4] * (b[9] * b[14] - b[10] * b[13]) + b[8] * (b[5] * b[14] - b[6] * b[13]) - b[12] * (b[5] * b[10] - b[6] * b[9]);
      e[1] = -b[1] * (b[10] * b[15] - b[11] * b[14]) + b[9] * (b[2] * b[15] - b[3] * b[14]) - b[13] * (b[2] * b[11] - b[3] * b[10]);
      e[5] = b[0] * (b[10] * b[15] - b[11] * b[14]) - b[8] * (b[2] * b[15] - b[3] * b[14]) + b[12] * (b[2] * b[11] - b[3] * b[10]);
      e[9] = -b[0] * (b[9] * b[15] - b[11] * b[13]) + b[8] * (b[1] * b[15] - b[3] * b[13]) - b[12] * (b[1] * b[11] - b[3] * b[9]);
      e[13] = b[0] * (b[9] * b[14] - b[10] * b[13]) - b[8] * (b[1] * b[14] - b[2] * b[13]) + b[12] * (b[1] * b[10] - b[2] * b[9]);
      e[2] = b[1] * (b[6] * b[15] - b[7] * b[14]) - b[5] * (b[2] * b[15] - b[3] * b[14]) + b[13] * (b[2] * b[7] - b[3] * b[6]);
      e[6] = -b[0] * (b[6] * b[15] - b[7] * b[14]) + b[4] * (b[2] * b[15] - b[3] * b[14]) - b[12] * (b[2] * b[7] - b[3] * b[6]);
      e[10] = b[0] * (b[5] * b[15] - b[7] * b[13]) - b[4] * (b[1] * b[15] - b[3] * b[13]) + b[12] * (b[1] * b[7] - b[3] * b[5]);
      e[14] = -b[0] * (b[5] * b[14] - b[6] * b[13]) + b[4] * (b[1] * b[14] - b[2] * b[13]) - b[12] * (b[1] * b[6] - b[2] * b[5]);
      e[3] = -b[1] * (b[6] * b[11] - b[7] * b[10]) + b[5] * (b[2] * b[11] - b[3] * b[10]) - b[9] * (b[2] * b[7] - b[3] * b[6]);
      e[7] = b[0] * (b[6] * b[11] - b[7] * b[10]) - b[4] * (b[2] * b[11] + b[3] * b[10]) + b[8] * (b[2] * b[7] - b[3] * b[6]);
      e[11] = -b[0] * (b[5] * b[11] + b[7] * b[9]) + b[4] * (b[1] * b[11] - b[3] * b[9]) - b[8] * (b[1] * b[7] + b[3] * b[5]);
      e[15] = b[0] * (b[5] * b[10] - b[6] * b[9]) - b[4] * (b[1] * b[10] + b[2] * b[9]) + b[8] * (b[1] * b[6] - b[2] * b[5]);
      f = b[0] * e[0] + b[1] * e[4] + b[2] * e[8] + b[3] * e[12];
      if (0 === f) return this;
      f = 1 / f;
      for (b = 0; 16 > b; b++) a[b] = e[b] * f;
      return this
    };
    b.prototype.Jf = function() {
      return (new b).Ela(this)
    };
    b.prototype.xO = function(a, b, e, f, h, k) {
      var l, m, n, p;
      if (a === b || e === f || h === k) throw "null frustum";
      m = 1 / (b - a);
      n = 1 / (f - e);
      p = 1 / (k - h);
      l = this.elements;
      l[0] = 2 * m;
      l[1] = 0;
      l[2] = 0;
      l[3] = 0;
      l[4] = 0;
      l[5] = 2 * n;
      l[6] = 0;
      l[7] = 0;
      l[8] = 0;
      l[9] = 0;
      l[10] = -2 * p;
      l[11] = 0;
      l[12] = -(b + a) * m;
      l[13] = -(f + e) * n;
      l[14] = -(k + h) * p;
      l[15] = 1;
      return this
    };
    b.prototype.yja = function(a, d, e, f, h, k) {
      return this.concat((new b).xO(a, d, e, f, h, k))
    };
    b.prototype.Cla = function(a, b, e, f, h, k) {
      var l, m, n, p;
      if (a === b || f === e || h === k) throw "null frustum";
      if (0 >= h) throw "near <= 0";
      if (0 >= k) throw "far <= 0";
      m = 1 / (b - a);
      n = 1 / (f - e);
      p = 1 / (k - h);
      l = this.elements;
      l[0] = 2 * h * m;
      l[1] = 0;
      l[2] = 0;
      l[3] = 0;
      l[4] = 0;
      l[5] = 2 * h * n;
      l[6] = 0;
      l[7] = 0;
      l[8] = (b + a) * m;
      l[9] = (f + e) * n;
      l[10] = -(k + h) * p;
      l[11] = -1;
      l[12] = 0;
      l[13] = 0;
      l[14] = -2 * h * k * p;
      l[15] = 0;
      return this
    };
    b.prototype.PL = function(a, d, e, f, h, k) {
      return this.concat((new b).Cla(a, d, e, f, h, k))
    };
    b.prototype.O0 = function(a, b, e, f) {
      var h, k;
      if (e === f || 0 === b) throw "null frustum";
      if (0 >= e) throw "near <= 0";
      if (0 >= f) throw "far <= 0";
      a /= 2;
      k = Math.sin(a);
      if (0 === k) throw "null frustum";
      h = 1 / (f - e);
      k = Math.cos(a) / k;
      a = this.elements;
      a[0] = k / b;
      a[1] = 0;
      a[2] = 0;
      a[3] = 0;
      a[4] = 0;
      a[5] = k;
      a[6] = 0;
      a[7] = 0;
      a[8] = 0;
      a[9] = 0;
      a[10] = -(f + e) * h;
      a[11] = -1;
      a[12] = 0;
      a[13] = 0;
      a[14] = -2 * e * f * h;
      a[15] = 0;
      return this
    };
    b.prototype.perspective = function(a, d, e, f) {
      return this.concat((new b).O0(a, d, e, f))
    };
    b.prototype.it = function(a, b, e) {
      var f = this.elements;
      f[0] = a;
      f[4] = 0;
      f[8] = 0;
      f[12] = 0;
      f[1] = 0;
      f[5] = b;
      f[9] = 0;
      f[13] = 0;
      f[2] = 0;
      f[6] = 0;
      f[10] = e;
      f[14] = 0;
      f[3] = 0;
      f[7] = 0;
      f[11] = 0;
      f[15] = 1;
      return this
    };
    b.prototype.scale = function(a, b, e) {
      var f = this.elements;
      f[0] *= a;
      f[4] *= b;
      f[8] *= e;
      f[1] *= a;
      f[5] *= b;
      f[9] *= e;
      f[2] *= a;
      f[6] *= b;
      f[10] *= e;
      f[3] *= a;
      f[7] *= b;
      f[11] *= e;
      return this
    };
    b.prototype.R0 = function(a, b, e) {
      var f = this.elements;
      f[12] = a;
      f[13] = b;
      f[14] = e;
      return this
    };
    b.prototype.translate = function(a, b, e) {
      var f = this.elements;
      f[12] += f[0] * a + f[4] * b + f[8] * e;
      f[13] += f[1] * a + f[5] * b + f[9] * e;
      f[14] += f[2] * a + f[6] * b + f[10] * e;
      f[15] += f[3] * a + f[7] * b + f[11] * e;
      return this
    };
    b.prototype.ow = function(a, b, e, f) {
      var h, k, l, m, n, p, q, s;
      a = Math.PI * a / 180;
      h = this.elements;
      k = Math.sin(a);
      a = Math.cos(a);
      0 !== b && 0 === e && 0 === f ? (0 > b && (k = -k), h[0] = 1, h[4] = 0, h[8] = 0, h[12] = 0, h[1] = 0, h[5] = a, h[9] = -k, h[13] = 0, h[2] = 0, h[6] = k, h[10] = a, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : 0 === b && 0 !== e && 0 === f ? (0 > e && (k = -k), h[0] = a, h[4] = 0, h[8] = k, h[12] = 0, h[1] = 0, h[5] = 1, h[9] = 0, h[13] = 0, h[2] = -k, h[6] = 0, h[10] = a, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : 0 === b && 0 === e && 0 !== f ? (0 > f && (k = -k), h[0] = a, h[4] = -k, h[8] = 0, h[12] = 0, h[1] = k, h[5] = a, h[9] = 0, h[13] = 0, h[2] = 0, h[6] = 0, h[10] = 1, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : (l = Math.sqrt(b * b + e * e + f * f), 1 !== l && (l = 1 / l, b *= l, e *= l, f *= l), l = 1 - a, m = b * e, n = e * f, p = f * b, q = b * k, s = e * k, k *= f, h[0] = b * b * l + a, h[1] = m * l + k, h[2] = p * l - s, h[3] = 0, h[4] = m * l - k, h[5] = e * e * l + a, h[6] = n * l + q, h[7] = 0, h[8] = p * l + s, h[9] = n * l - q, h[10] = f * f * l + a, h[11] = 0, h[12] = 0, h[13] = 0, h[14] = 0);
      h[15] = 1;
      return this
    };
    b.prototype.rotate = function(a, d, e, f) {
      return this.concat((new b).ow(a, d, e, f))
    };
    b.prototype.Aq = function(a) {
      return this.rotate(a, 1, 0, 0)
    };
    b.prototype.Bq = function(a) {
      return this.rotate(a, 0, 1, 0)
    };
    b.prototype.Cq = function(a) {
      return this.rotate(a, 0, 0, 1)
    };
    a.Fd = b
  })(g); y.A.Xq = y.A.qc.extend({
    B: {
      visible: !0,
      zIndex: 10,
      strokeColor: "#006600",
      strokeOpacity: 0.9,
      strokeWeight: 3,
      strokeStyle: "solid",
      strokeDasharray: [10, 5],
      radius: [1E3, 1E3],
      fillColor: "#006600",
      fillOpacity: 0.9
    },
    r: function() {
      var a = this,
        b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
        b = g.extend({},
          this.B, b),
        c = this.xp(b);
      b.path = c;
      y.A.Xq.Hc.r.call(this, b);
      this.CLASS_NAME = "AMap.Ellipse";
      g.a.xa(this, b);
      this.set("path", c);
      this.get("center") && this.get("map") || (this.ag = !1);
      this.on("movepoly",
        function(b) {
          var c = a.get("map");
          b = c.se(c.Lb(a.get("center")).add(b.Wv));
          "3D" === c.view.type && a.set("deltaPos", [0, 0]);
          a.set("center", b)
        })
    },
    xp: function() {
      var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
        b = [],
        c = a.center || this.get("center"),
        d = a.map || this.get("map");
      if (c && d) for (var c = g.c.Da(c), e = a.radius || this.get("radius"), f = d.Lb(c), a = f.x, f = f.y, h = g.c.map(e,
        function(a) {
          return a / d.getResolution(c, 20)
        }), e = h[0], h = h[1], k = g.l.W, l = (k ? 4 : 1) * Math.PI / 180, m = 0, k = k ? 89 : 359; m <= k; m++) {
        var n = m * l,
          n = {
            x: a + e * Math.cos(n),
            y: f + h * Math.sin(n)
          };
        b.push(d.se(n))
      }
      return b
    },
    mapChanged: function() {
      g.c.gi(y.A.Xq.Hc.mapChanged) && y.A.Xq.Hc.mapChanged.apply(this);
      this.setPath(this.xp()); ! this.ag && this.get("map") && (this.ag = !0, this.get("map").o("overlays"))
    },
    setCenter: function(a, b) {
      g.a.add(this, "setCenter"); (a = g.c.Da(a)) && a instanceof g.T && (this.set("center", a), this.set("path", this.xp()), this.ag || (this.ag = !0, this.get("map") && this.get("map").o("overlays")), b || (this.o("setCenter"), this.o("change", {
        type: "change",
        target: this
      })))
    },
    setRadius: function(a) {
      var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
      g.a.add(this, "setRadius");
      a && 2 === a.length && (this.set("radius", a), this.set("path", this.xp()), b || (this.o("change", {
        type: "change",
        target: this
      }), this.o("setPath")))
    },
    setOptions: function(a) {
      y.A.Xq.Hc.setOptions.call(this, a);
      a.radius && this.setRadius(a.radius, !0);
      a.center && this.setCenter(a.center, !0)
    },
    getRadius: function() {
      g.a.add(this, "getRadius");
      return this.get("radius", null, !0)
    },
    getCenter: function() {
      g.a.add(this, "getCenter");
      var a = this.get("center", null, !0);
      this.A && this.A.get("deltaPos") && this.A.yI([a], this.A.get("deltaPos"))[0];
      return a
    }
  }); y.A.ar = y.A.qc.extend({
    B: {
      visible: !0,
      zIndex: 10,
      strokeColor: "#006600",
      strokeOpacity: 0.9,
      strokeWeight: 3,
      strokeStyle: "solid",
      strokeDasharray: [10, 5],
      fillColor: "#006600",
      fillOpacity: 0.9
    },
    r: function() {
      var a = this,
        b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
        b = g.extend({},
          this.B, b),
        c = this.xp(b);
      b.path = c;
      y.A.ar.Hc.r.call(this, b);
      this.CLASS_NAME = "AMap.Rectangle";
      g.a.xa(this, b);
      this.setPath(c);
      this.B.bounds && this.get("map") || (this.ag = !1);
      this.on("movepoly",
        function(b) {
          var c = a.get("map"),
            f = a.get("bounds"),
            h = c.se(c.Lb(f.kc).add(b.Wv));
          b = c.se(c.Lb(f.Wb).add(b.Wv));
          "3D" === c.view.type && a.set("deltaPos", [0, 0]);
          a.set("bounds", new g.je(h, b))
        })
    },
    xp: function() {
      var a = [],
        b = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).bounds || this.get("bounds");
      if (b) {
        var c = b.getSouthWest(),
          b = b.getNorthEast();
        g.c.Tb([new g.T(c.O, c.N), new g.T(b.O, c.N), new g.T(b.O, b.N), new g.T(c.O, b.N)],
          function(b) {
            return a.push(b)
          })
      }
      return a
    },
    mapChanged: function() {
      g.c.gi(y.A.ar.Hc.mapChanged) && y.A.ar.Hc.mapChanged.apply(this);
      this.setPath(this.xp()); ! this.ag && this.get("map") && (this.ag = !0, this.get("map").o("overlays"))
    },
    setOptions: function(a) {
      y.A.ar.Hc.setOptions.call(this, a);
      a.bounds && this.setBounds(a.bounds, !0)
    },
    setBounds: function(a) {
      var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
      g.a.add(this, "setBounds");
      a && a instanceof g.je && (this.set("bounds", a), this.set("path", this.xp()), this.ag || (this.ag = !0, this.get("map") && this.get("map").o("overlays")), b || (this.o("change", {
        type: "change",
        target: this
      }), this.o("setBounds")))
    },
    getBounds: function() {
      g.a.add(this, "getBounds");
      return this.get("bounds", null, !0)
    }
  }); y.A.dQ = y.A.hb.extend({
    B: {
      text: "",
      textAlign: "center",
      verticalAlign: "middle",
      offset: new g.F(0, 0)
    },
    r: function(a) {
      y.A.dQ.Hc.r.apply(this, arguments);
      this.CLASS_NAME = "AMap.Text";
      g.a.xa(this, a);
      this.e8();
      this.setText(this.get("text"));
      this.setStyle(this.get("style"))
    },
    e8: function() {
      if (!this.Ky) {
        var a = document.createElement("div");
        a.className = "amap-overlay-text-container";
        this.Ky = a
      }
    },
    getText: function() {
      g.a.add(this, "getText");
      return this.get("text", null, !0)
    },
    setText: function(a) {
      g.a.add(this, "setText");
      a || 0 === a || (a = "");
      g.h.Cma(this.Ky, "amap-overlay-text-empty", !a);
      g.a.add(this, "setText");
      this.set("text", a);
      this.Ky.innerHTML = a;
      this.W_()
    },
    setStyle: function(a) {
      g.a.add(this, "setStyle");
      g.extend(this.Ky.style, a);
      this.W_()
    },
    W_: function() {
      this.setContent(this.Ky);
      this.setShadow(this.getShadow())
    }
  }); g.NP = {
    find: function(a) {
      return g.c.find(this.Yt || [], a)
    },
    zE: function() {
      return this.Yt || []
    },
    gd: function(a) {
      return null !== this.find(a)
    },
    add: function(a) {
      var b = this,
        c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g.c.oq,
        d = this.Yt || (this.Yt = []);
      g.c.isArray(a) ? g.c.Tb(a,
        function(a) {
          b.add(a, c)
        }) : null === this.find(a) && (d.push(a), c(a));
      return this
    },
    remove: function(a) {
      var b = this,
        c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g.c.oq,
        d = this.Yt;
      if (d) if (g.c.isArray(a)) g.c.Tb(a,
        function(a) {
          b.remove(a, c)
        });
      else {
        var e = g.c.indexOf(d, a); - 1 !== e && (c(d[e]), d.splice(e, 1))
      }
      return this
    },
    clear: function() {
      this.Tb(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : g.c.oq);
      this.Yt = [];
      return this
    },
    Tb: function() {
      var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : g.c.oq,
        b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
      g.c.Tb(this.Yt || [],
        function() {
          for (var c = arguments.length,
                 d = Array(c), e = 0; e < c; e++) d[e] = arguments[e];
          c = d[0];
          g.c.gi(c.Tb) ? c.Tb(a, b) : a.apply(b || c, d)
        });
      return this
    },
    Qm: function(a) {
      for (var b = arguments.length,
             c = Array(1 < b ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
      this.Tb(function(b) {
        b && g.c.gi(b[a]) && b[a].apply(b, c)
      });
      return this
    },
    g: function(a) {
      var b = arguments;
      this.Tb(function(a) {
        a.on.apply(a, b)
      });
      return this
    },
    H: function(a) {
      var b = arguments;
      this.Tb(function(a) {
        a.off.apply(a, b)
      });
      return this
    },
    addListener: function() {
      this.g.apply(this, arguments)
    },
    Ny: function(a) {
      var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g.c.oq,
        c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      this.Tb(function(d) {
        d.on.call(d, event,
          function() {
            b();
            d.off(a)
          },
          c)
      })
    },
    removeListener: function(a) {
      this.H(a.AL, a.AM, a.Ve)
    },
    K: function(a, b) {
      this.Tb(function(c) {
        c.emit(a, b)
      })
    }
  }; y.A.em = y.A.eh.extend({
    ea: [g.NP],
    r: function() {
      var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
      this.CLASS_NAME = "AMap.OverlayGroup";
      g.a.xa(this);
      y.A.em.Hc.r.apply(this);
      this.map = null;
      this.add(a)
    },
    Yb: function(a) {
      g.a.add(this, "setMap");
      this.Qm("setMap", a);
      this.Qm("setMap", a);
      this.set("map", a);
      this.map = a;
      return this
    },
    mapChanged: function() {},
    Oy: function(a) {
      var b = this;
      g.a.add(this, "addOverlay");
      this.add(a,
        function(a) {
          b.map && a.setMap(b.map)
        });
      return this
    },
    bw: function(a) {
      var b = this;
      g.a.add(this, "removeOverlay");
      this.remove(a,
        function(a) {
          a.getMap() === b.map && a.setMap(null)
        });
      return this
    },
    Qc: function() {
      var a = this;
      g.a.add(this, "clearOverlays");
      this.clear(function(b) {
        b.getMap() === a.map && b.setMap(null)
      });
      return this
    },
    yv: function() {
      g.a.add(this, "hide");
      this.Qm("hide");
      return this
    },
    show: function() {
      g.a.add(this, "show");
      this.Qm("show");
      return this
    },
    Fb: function() {
      var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      g.a.add(this, "setOptions");
      this.Qm("setOptions", a);
      return this
    }
  }); y.A.em.sg({
    find: "getOverlay",
    zE: "getOverlays",
    Oy: ["addOverlay", "addOverlays"],
    gd: "hasOverlay",
    bw: ["removeOverlay", "removeOverlays"],
    Qc: "clearOverlays",
    Tb: "eachOverlay",
    Yb: "setMap",
    Fb: "setOptions",
    show: "show",
    yv: "hide",
    g: "on",
    H: "off"
  }); (function(a, b) {
    function c(a, b) {
      if (!a.length) return ! 1;
      for (var c = 0,
             d = a.length; c < d; c++) {
        var e = a[c];
        if (! ("*" === b || e && e.geometry && e.geometry.type === b) || e && e.properties && !e.properties._isAmap) return ! 1
      }
      return ! 0
    }
    function d(a) {
      for (var b = [], c = 0, d = a.length; c < d; c++) b.push(a[c].geometry.coordinates);
      return b
    }
    function e(a) {
      if (!a) return [];
      a = b.c.Da(a);
      for (var c = [], d = 0, e = a.length; d < e; d++) c[d] = a[d].Uk();
      return c
    }
    a.A.LP = a.A.em.extend({
      r: function(c) {
        this.CLASS_NAME = "AMap.GeoJSON";
        b.a.xa(this, c);
        a.A.LP.Hc.r.call(this, []);
        this.B = b.extend({
            getMarker: function(b, c) {
              return new a.A.hb({
                position: c
              })
            },
            getPolyline: function(b, c) {
              return new a.A.Kb({
                path: c
              })
            },
            getPolygon: function(b, c) {
              return new a.A.qc({
                path: c
              })
            },
            coordsToLatLng: function(a) {
              return a
            }
          },
          c);
        if (!this.B.coordsToLatLngs) {
          var d = this.B.coordsToLatLng;
          this.B.coordsToLatLngs = function(a) {
            for (var b = [], c = 0, e = a.length; c < e; c++) b.push(d.call(null, a[c]));
            return b
          }
        }
        this.importData(this.B.geoJSON)
      },
      importData: function(a) {
        b.a.add(this, "importData");
        if (a && (a = this.a8(a), a.length)) {
          this.Oy(a);
          var c = this.B.map;
          if (c) for (var d = 0,
                        e = a.length; d < e; d++) a[d].setMap(c)
        }
      },
      toGeoJSON: function() {
        b.a.add(this, "toGeoJSON");
        for (var a = this.zE(), c = [], d = 0, e = a.length; d < e; d++) c[d] = a[d].toGeoJSON();
        return c
      },
      a8: function(a) {
        if (a) {
          b.c.isArray(a) || (a = [a]);
          for (var c = [], d = 0, e = a.length; d < e; d++) {
            var m = this.b8(a[d]);
            m && c.push(m)
          }
          return c
        }
      },
      RQ: function(a) {
        var b = "Feature" === a.type ? a.geometry: a,
          b = this.B.coordsToLatLng(b ? b.coordinates: null),
          b = this.B.getMarker(a, b);
        this.qp(a, b);
        return b
      },
      r5: function(c) {
        for (var d = "Feature" === c.type ? c.geometry: c, d = d ? d.coordinates: null, e = [], l = 0, m = d.length; l < m; l++) e.push(this.RQ(b.extend({},
          c, {
            type: "Feature",
            properties: {
              _isAmap: !0,
              _pointIndex: l,
              _parentProperities: c.properties
            },
            geometry: {
              type: "Point",
              coordinates: d[l]
            }
          })));
        d = new a.A.em(e);
        this.qp(c, d);
        return d
      },
      QQ: function(a) {
        var b = "Feature" === a.type ? a.geometry: a,
          b = this.B.coordsToLatLngs(b ? b.coordinates: null),
          b = this.B.getPolyline(a, b);
        this.qp(a, b);
        return b
      },
      q5: function(c) {
        for (var d = "Feature" === c.type ? c.geometry: c, d = d ? d.coordinates: null, e = [], l = 0, m = d.length; l < m; l++) e.push(this.QQ(b.extend({},
          c, {
            type: "Feature",
            properties: {
              _isAmap: !0,
              _lineStringIndex: l,
              _parentProperities: c.properties
            },
            geometry: {
              type: "LineString",
              coordinates: d[l]
            }
          })));
        d = new a.A.em(e);
        this.qp(c, d);
        return d
      },
      SQ: function(a) {
        for (var b = "Feature" === a.type ? a.geometry: a, b = b ? b.coordinates: null, c = [], d = 0, e = b.length; d < e; d++) c.push(this.B.coordsToLatLngs(b[d]));
        b = this.B.getPolygon(a, c);
        this.qp(a, b);
        return b
      },
      s5: function(c) {
        for (var d = "Feature" === c.type ? c.geometry: c, d = d ? d.coordinates: null, e = [], l = 0, m = d.length; l < m; l++) e.push(this.SQ(b.extend({},
          c, {
            type: "Feature",
            properties: {
              _isAmap: !0,
              _polygonIndex: l,
              _parentProperities: c.properties
            },
            geometry: {
              type: "Polygon",
              coordinates: d[l]
            }
          })));
        d = new a.A.em(e);
        this.qp(c, d);
        return d
      },
      k5: function(c) {
        for (var d = ("Feature" === c.type ? c.geometry: c).geometries, e = [], l = 0, m = d.length; l < m; l++) e.push(this.HI(b.extend({},
          c, {
            type: "Feature",
            properties: {
              _isAmap: !0,
              _geometryIndex: l,
              _parentProperities: c.properties
            },
            geometry: d[l]
          })));
        d = new a.A.em(e);
        this.qp(c, d);
        return d
      },
      b8: function(b) {
        if (b) switch (b.type) {
          case "Feature":
            return this.HI(b);
          case "FeatureCollection":
            for (var c = b.features,
                   d = [], e = 0, m = c.length; e < m; e++) {
              var n = this.HI(c[e]);
              n && d.push(n)
            }
            c = new a.A.em(d);
            this.qp(b, c);
            return c;
          default:
            throw Error("Invalid GeoJSON object." + b.type);
        }
      },
      qp: function(a, c) {
        c && a.properties && c.setExtData && c.setExtData(b.extend({},
          c.getExtData() || {},
          {
            _geoJsonProperties: a.properties
          }))
      },
      HI: function(a) {
        var b = "Feature" === a.type ? a.geometry: a;
        if (! (b && b.coordinates || b)) return null;
        switch (b.type) {
          case "Point":
            return this.RQ(a);
          case "MultiPoint":
            return this.r5(a);
          case "LineString":
            return this.QQ(a);
          case "MultiLineString":
            return this.q5(a);
          case "Polygon":
            return this.SQ(a);
          case "MultiPolygon":
            return this.s5(a);
          case "GeometryCollection":
            return this.k5(a);
          default:
            throw Error("Invalid GeoJSON geometry." + b.type);
        }
      }
    });
    a.A.em.vb({
      toGeoJSON: function(a) {
        b.a.add(this, "toGeoJSON");
        a = a || this.zE();
        for (var e = [], k = 0, l = a.length; k < l; k++) a[k].toGeoJSON && (e[k] = a[k].toGeoJSON());
        a = this.getExtData() || {};
        if (c(e, "Point")) e = {
          type: "Feature",
          properties: a._geoJsonProperties || {},
          geometry: {
            type: "MultiPoint",
            coordinates: d(e)
          }
        };
        else if (c(e, "LineString")) e = {
          type: "Feature",
          properties: a._geoJsonProperties || {},
          geometry: {
            type: "MultiLineString",
            coordinates: d(e)
          }
        };
        else if (c(e, "Polygon")) e = {
          type: "Feature",
          properties: a._geoJsonProperties || {},
          geometry: {
            type: "MultiPolygon",
            coordinates: d(e)
          }
        };
        else if (c(e, "*")) {
          a = a._geoJsonProperties || {};
          for (var k = [], l = 0, m = e.length; l < m; l++) k.push(e[l].geometry);
          e = {
            type: "Feature",
            properties: a,
            geometry: {
              type: "GeometryCollection",
              geometries: k
            }
          }
        } else e = {
          type: "FeatureCollection",
          properties: a._geoJsonProperties || {},
          features: e
        };
        return e
      }
    });
    a.A.hb.vb({
      toGeoJSON: function() {
        b.a.add(this, "toGeoJSON");
        return {
          type: "Feature",
          properties: (this.getExtData() || {})._geoJsonProperties || {},
          geometry: {
            type: "Point",
            coordinates: this.getPosition().Uk()
          }
        }
      }
    });
    a.A.Kb.vb({
      toGeoJSON: function() {
        b.a.add(this, "toGeoJSON");
        return {
          type: "Feature",
          properties: (this.getExtData() || {})._geoJsonProperties || {},
          geometry: {
            type: "LineString",
            coordinates: e(this.getPath())
          }
        }
      }
    });
    a.A.qc.vb({
      toGeoJSON: function() {
        b.a.add(this, "toGeoJSON");
        var a = (this.getExtData() || {})._geoJsonProperties || {},
          c;
        if (c = this.getPath()) {
          c = b.c.Da(c);
          b.c.isArray(c[0]) || (c = [c]);
          for (var d = [], l = 0, m = c.length; l < m; l++) d[l] = e(c[l]);
          c = d
        } else c = [];
        return {
          type: "Feature",
          properties: a,
          geometry: {
            type: "Polygon",
            coordinates: c
          }
        }
      }
    })
  })(y, g); y.q.XG = y.q.Gc.extend({
    ea: [g.NP],
    r: function(a) {
      var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
      this.CLASS_NAME = "AMap.LayerGroup";
      g.a.xa(this, b);
      y.q.XG.Hc.r.call(this, b);
      this.map = null;
      this.add(a)
    },
    Yb: function(a) {
      g.a.add(this, "setMap");
      this.Qm("setMap", a);
      this.set("map", a);
      this.map = a;
      return this
    },
    mapChanged: function() {},
    zD: function(a) {
      var b = this;
      g.a.add(this, "addLayer");
      this.add(a,
        function(a) {
          b.map && a.setMap(b.map)
        });
      return this
    },
    Qi: function(a) {
      var b = this;
      g.a.add(this, "removeLayer");
      this.remove(a,
        function(a) {
          a.getMap() === b.map && a.setMap(null)
        });
      return this
    },
    Oda: function() {
      var a = this;
      g.a.add(this, "clearLayers");
      this.clear(function(b) {
        b.getMap() === a.map && b.setMap(null)
      });
      return this
    },
    yv: function() {
      g.a.add(this, "hide");
      this.Qm("hide");
      return this
    },
    show: function() {
      g.a.add(this, "show");
      this.Qm("show");
      return this
    },
    reload: function() {
      this.Qm("reload");
      return this
    },
    Fb: function() {
      var a = this,
        b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      g.a.add(this, "setOptions");
      var c = g.c.keys(b);
      g.c.Tb(c,
        function(c) {
          a.Qm("set", c, b[c])
        });
      return this
    }
  }); y.q.XG.sg({
    find: "getLayer",
    zE: "getLayers",
    zD: ["addLayer", "addLayers"],
    gd: "hasLayer",
    Qi: ["removeLayer", "removeLayers"],
    Oda: "clearLayers",
    Tb: "eachLayer",
    Yb: "setMap",
    Fb: "setOptions",
    show: "show",
    yv: "hide",
    reload: "reload",
    g: "on",
    H: "off"
  }); g.z3 = y.Sb.extend({
    r: function(a, b) {
      b && (b.center = b.position, b.zoom = 11);
      arguments.callee.ma.apply(this, arguments);
      window.console && window.console.log && window.console.log("\u9ad8\u5fb7\u5730\u56feJSAPI\u8857\u666f\u5df2\u4e0b\u7ebf\uff0c\u611f\u8c22\u60a8\u7684\u652f\u6301\u3002")
    }
  }); g.A3 = y.A.hb.extend({
    r: function(a) {
      arguments.callee.ma.apply(this, arguments)
    }
  }); g.ad = {
    Lp: function(a, b) {
      for (var c = Infinity,
             d = 0,
             e = 1,
             f = b.length; e < f; d = e, e += 1) c = Math.min(c, g.ad.$la(a, [b[d], b[e]]));
      return Math.sqrt(c)
    },
    $la: function(a, b) {
      return this.mG(a, this.uW(a, b))
    },
    mG: function(a, b) {
      var c = a[0] - b[0],
        d = a[1] - b[1];
      return c * c + d * d
    },
    Qsa: function(a, b, c, d) {
      d = d || 1E-6;
      if (c[0] === b[0]) {
        var e = Math.min(b[1], c[1]);
        b = Math.max(b[1], c[1]);
        return Math.abs(a[0] - c[0]) < d && a[1] >= e && a[1] <= b
      }
      var e = Math.min(b[0], c[0]),
        f = Math.max(b[0], c[0]);
      return Math.abs((c[1] - b[1]) / (c[0] - b[0]) * (a[0] - b[0]) + b[1] - a[1]) < d && a[0] >= e && a[0] <= f
    },
    uW: function(a, b) {
      var c = a[0],
        d = a[1],
        e = b[0],
        f = b[1],
        h = e[0],
        e = e[1],
        k = f[0],
        f = f[1],
        l = k - h,
        m = f - e,
        c = 0 === l && 0 === m ? 0 : (l * (c - h) + m * (d - e)) / (l * l + m * m || 0);
      0 >= c || (1 <= c ? (h = k, e = f) : (h += c * l, e += c * m));
      return [h, e]
    },
    io: function(a) {
      for (var b = a.length,
             c = 0,
             d = a[b - 1], e = d[0], d = d[1], f, h, k = 0; k < b; k += 1) h = a[k],
        f = h[0],
        h = h[1],
        c += (f - e) * (h + d),
        e = f,
        d = h;
      return 0 < c
    },
    qd: function(a, b, c) {
      var d = a[0];
      a = a[1];
      var e = !1,
        f, h, k, l, m = b.length,
        n = 0;
      for (l = m - 1; n < m; l = n, n += 1) {
        var p = !1;
        f = b[n][0];
        h = b[n][1];
        k = b[l][0];
        l = b[l][1];
        if (f === d && h === a || k === d && l === a) return c ? !0 : !1;
        if (h < a === l >= a) {
          f = (k - f) * (a - h) / (l - h) + f;
          if (d === f) return c ? !0 : !1;
          p = d < f
        }
        p && (e = !e)
      }
      return e
    },
    G_: function(a, b) {
      function c(a, b, c, d) {
        var e = [a[0] - b[0], a[1] - b[1]],
          f = [c[0] - d[0], c[1] - d[1]];
        a = a[0] * b[1] - a[1] * b[0];
        c = c[0] * d[1] - c[1] * d[0];
        d = 1 / (e[0] * f[1] - e[1] * f[0]);
        return [(a * f[0] - c * e[0]) * d, (a * f[1] - c * e[1]) * d]
      }
      function d(a, b, c) {
        return (c[0] - b[0]) * (a[1] - b[1]) > (c[1] - b[1]) * (a[0] - b[0])
      }
      var e, f, h, k, l = a;
      e = b[b.length - 2];
      for (var m = 0,
             n = b.length - 1; m < n; m++) {
        f = b[m];
        var p = l,
          l = [];
        h = p[p.length - 1];
        for (var q = 0,
               s = p.length; q < s; q++) k = p[q],
          d(k, e, f) ? (d(h, e, f) || l.push(c(e, f, h, k)), l.push(k)) : d(h, e, f) && l.push(c(e, f, h, k)),
          h = k;
        e = f
      }
      if (3 > l.length) return [];
      l.push(l[0]);
      return l
    }
  }; (function(a) {
    function b(b, c) {
      var d;
      a: {
        switch (b) {
          case "EPSG3395":
            d = a.Yg.GP;
            break a;
          case "EPSG4326":
            d = a.Yg.HP;
            break a
        }
        d = a.Yg.RG
      }
      return {
        project: function(b) {
          a.c.isArray(b) && (b = new a.T(b[0], b[1]));
          return d.Wz(b, c).Uk()
        },
        unproject: function(b) {
          a.c.isArray(b) && (b = new a.F(b[0], b[1]));
          return d.uA(b, c).Uk()
        },
        normalizePoint: function(b) {
          return a.c.Da(b)
        },
        distance: function(b, c) {
          a.a.add(this, "distance");
          c = this.normalizePoint(c);
          if (a.c.isArray(c)) return this.distanceToLine(b, c);
          b = this.normalizePoint(b);
          var d = a.al.$r,
            e = Math.cos,
            f = b.N * d,
            h = c.N * d,
            k = 2 * a.al.vL,
            d = c.O * d - b.O * d,
            e = (1 - e(h - f) + (1 - e(d)) * e(f) * e(h)) / 2;
          return k * Math.asin(Math.sqrt(e))
        },
        ringArea: function(b) {
          a.a.add(this, "ringArea");
          b = this.normalizeLine(b);
          var c = a.al.vL * a.al.$r,
            d = 0,
            e = b.length;
          if (3 > e) return 0;
          for (var f = 0; f < e - 1; f += 1) var h = b[f],
            k = b[f + 1],
            u = h.O * c * Math.cos(h.N * a.al.$r),
            h = h.N * c,
            w = k.O * c * Math.cos(k.N * a.al.$r),
            d = d + (u * k.N * c - w * h);
          f = b[f];
          b = b[0];
          e = f.O * c * Math.cos(f.N * a.al.$r);
          f = f.N * c;
          k = b.O * c * Math.cos(b.N * a.al.$r);
          d += e * b.N * c - k * f;
          return 0.5 * Math.abs(d)
        },
        sphericalCalotteArea: function(b) {
          a.a.add(this, "sphericalCalotteArea");
          var c = a.al.vL;
          b = c - c * Math.cos(b / c);
          return 2 * Math.PI * c * b
        }
      }
    }
    function c() {
      return {
        normalizePoint: function(a) {
          return a && a.x && a.y ? [a.x, a.y] : a
        },
        distance: function(a, b) {
          var c = a[0] - b[0],
            d = a[1] - b[1];
          return Math.sqrt(c * c + d * d)
        },
        project: function(a) {
          return a
        },
        unproject: function(a) {
          return a
        },
        ringArea: function(a) {
          for (var b = [0, 0], c = [0, 0], d = 0, e = a[0], n = a.length, p = 2; p < n; p++) {
            var q = a[p - 1],
              s = a[p];
            b[0] = e[0] - s[0];
            b[1] = e[1] - s[1];
            c[0] = e[0] - q[0];
            c[1] = e[1] - q[1];
            d += b[0] * c[1] - b[1] * c[0]
          }
          return d / 2
        }
      }
    }
    function d(a) {
      for (var b = 0,
             c = a.length,
             d = 0; d < c - 1; d++) var e = a[d],
             n = a[d + 1],
             b = b + (n[0] - e[0]) * (n[1] + e[1]);
      if (a[c - 1][0] !== a[0][0] || a[c - 1][1] !== a[0][1]) e = a[c - 1],
        n = a[0],
        b += (n[0] - e[0]) * (n[1] + e[1]);
      return 0 >= b
    }
    function e(b) {
      this.CLASS_NAME = "AMap.GeometryUtil";
      this.Gb = a.extend({
          onSegmentTolerance: 5,
          crs: "EPSG3857",
          maxZoom: 20
        },
        b);
      this.setCrs(this.Gb.crs)
    }
    a.extend(e.prototype, {
      clone: function(b) {
        return new e(a.extend({},
          this.Gb, b))
      },
      isPoint: function(b) {
        return b && (b instanceof a.T || a.c.isArray(b) && !isNaN(b[0]))
      },
      normalizePoint: function(a) {
        return a
      },
      normalizeLine: function(a) {
        for (var b = [], c = 0, d = a.length; c < d; c++) b.push(this.normalizePoint(a[c]));
        return b
      },
      normalizeMultiLines: function(b) {
        a.c.isArray(b) && this.isPoint(b[0]) && (b = [b]);
        for (var c = [], d = 0, e = b.length; d < e; d++) c.push(this.normalizeLine(b[d]));
        return c
      },
      setCrs: function(d) {
        a.extend(this, d && d.project && d.unproject ? d: "plane" === d ? c() : b(d, this.Gb.maxZoom))
      },
      distance: function() {
        throw Error("distance Not implemented!");
      },
      tu: function(a, b) {
        a = this.normalizeLine(a);
        this.isPoint(a[0]) || (a = a[0]);
        for (var c = [], d = 0, e = a.length; d < e; d++) c.push(this.project(a[d])); ! 0 === b ? c = this.makesureClockwise(c) : !1 === b && (c = this.makesureClockwise(c), c.reverse());
        return c
      },
      Vaa: function(a) {
        for (var b = [], c = 0, d = a.length; c < d; c++) b.push(this.unproject(a[c]));
        return b
      },
      closestOnSegment: function(b, c, d) {
        a.a.add(this, "closestOnSegment");
        b = a.ad.uW(this.project(b), this.tu([c, d]));
        return this.unproject(b)
      },
      closestOnLine: function(b, c) {
        a.a.add(this, "closestOnLine");
        c = this.normalizeLine(c);
        for (var d = Infinity,
               e, m = 0,
               n = c.length; m < n - 1; m++) {
          var p = this.closestOnSegment(b, c[m], c[m + 1]),
            q = this.distance(b, p);
          q < d && (d = q, e = p)
        }
        return e
      },
      distanceToSegment: function(a, b, c) {
        return this.distanceToLine(a, [b, c])
      },
      distanceToLine: function(b, c) {
        a.a.add(this, "distanceToLine");
        c = this.normalizeLine(c);
        this.isPoint(c[0]) || (c = c[0]);
        for (var d = Infinity,
               e = 0,
               m = c.length; e < m - 1; e++) var n = this.closestOnSegment(b, c[e], c[e + 1]),
               d = Math.min(d, this.distance(b, n));
        return d
      },
      distanceToPolygon: function(b, c) {
        a.a.add(this, "distanceToPolygon");
        return this.isPointInRing(b, c) ? 0 : this.distanceToLine(b, c)
      },
      isPointOnSegment: function(b, c, d, e) {
        a.a.add(this, "isPointOnSegment");
        if (!e && 0 !== e || 0 > e) e = this.Gb.onSegmentTolerance;
        return this.distanceToSegment(b, c, d) <= e
      },
      isPointOnLine: function(b, c, d) {
        a.a.add(this, "isPointOnLine");
        c = this.normalizeLine(c);
        for (var e = 0,
               m = c.length; e < m - 1; e++) if (this.isPointOnSegment(b, c[e], c[e + 1], d)) return ! 0;
        return ! 1
      },
      isPointOnRing: function(b, c, d) {
        a.a.add(this, "isPointOnRing");
        c = this.normalizeLine(c);
        for (var e = 0,
               m = c.length; e < m; e++) if (this.isPointOnSegment(b, c[e], c[e === m - 1 ? 0 : e + 1], d)) return ! 0;
        return ! 1
      },
      isPointOnPolygon: function(b, c, d) {
        a.a.add(this, "isPointOnPolygon");
        c = this.normalizeMultiLines(c);
        for (var e = 0,
               m = c.length; e < m; e++) if (this.isPointOnRing(b, c[e], d)) return ! 0;
        return ! 1
      },
      makesureClockwise: function(b) {
        a.a.add(this, "makesureClockwise");
        d(b) || (b = [].concat(b), b.reverse());
        return b
      },
      makesureAntiClockwise: function(b) {
        a.a.add(this, "makesureAntiClockwise");
        d(b) && (b = [].concat(b), b.reverse());
        return b
      },
      isPointInRing: function(b, c) {
        a.a.add(this, "isPointInRing");
        c = this.normalizeLine(c);
        var d = this.tu(c, !0);
        return a.ad.qd(this.project(b), d, !1)
      },
      isRingInRing: function(b, c) {
        a.a.add(this, "isRingInRing");
        for (var d = 0,
               e = b.length; d < e; d++) if (!this.isPointInRing(b[d], c)) return ! 1;
        return ! 0
      },
      isPointInPolygon: function(b, c) {
        a.a.add(this, "isPointInPolygon");
        c = this.normalizeMultiLines(c);
        for (var d, e = 0,
               m = c.length; e < m && (d = this.isPointInRing(b, c[e]), 0 < e && (d = !d), d); e += 1);
        return d
      },
      doesSegmentsIntersect: function(b, c, d, e) {
        a.a.add(this, "doesSegmentsIntersect");
        var m = this.tu([b, c, d, e]);
        b = m[0];
        c = m[1];
        d = m[2];
        e = m[3];
        var m = !1,
          n = (e[0] - d[0]) * (b[1] - d[1]) - (e[1] - d[1]) * (b[0] - d[0]),
          p = (c[0] - b[0]) * (b[1] - d[1]) - (c[1] - b[1]) * (b[0] - d[0]);
        b = (e[1] - d[1]) * (c[0] - b[0]) - (e[0] - d[0]) * (c[1] - b[1]);
        0 !== b && (c = n / b, p /= b, 0 <= c && 1 >= c && 0 <= p && 1 >= p && (m = !0));
        return m
      },
      doesSegmentLineIntersect: function(b, c, d) {
        a.a.add(this, "doesSegmentLineIntersect");
        d = this.normalizeLine(d);
        for (var e = 0,
               m = d.length; e < m - 1; e++) if (this.doesSegmentsIntersect(b, c, d[e], d[e + 1])) return ! 0;
        return ! 1
      },
      doesSegmentRingIntersect: function(b, c, d) {
        a.a.add(this, "doesSegmentRingIntersect");
        d = this.normalizeLine(d);
        for (var e = 0,
               m = d.length; e < m; e++) if (this.doesSegmentsIntersect(b, c, d[e], d[e === m - 1 ? 0 : e + 1])) return ! 0;
        return ! 1
      },
      doesSegmentPolygonIntersect: function(b, c, d) {
        a.a.add(this, "doesSegmentPolygonIntersect");
        d = this.normalizeMultiLines(d);
        for (var e = 0,
               m = d.length; e < m; e++) if (this.doesSegmentRingIntersect(b, c, d[e])) return ! 0;
        return ! 1
      },
      doesLineLineIntersect: function(b, c) {
        a.a.add(this, "doesLineLineIntersect");
        b = this.normalizeLine(b);
        for (var d = 0,
               e = b.length; d < e - 1; d++) if (this.doesSegmentLineIntersect(b[d], b[d + 1], c)) return ! 0;
        return ! 1
      },
      doesLineRingIntersect: function(b, c) {
        a.a.add(this, "doesLineRingIntersect");
        b = this.normalizeLine(b);
        for (var d = 0,
               e = b.length; d < e - 1; d++) if (this.doesSegmentRingIntersect(b[d], b[d + 1], c)) return ! 0;
        return ! 1
      },
      doesPolygonPolygonIntersect: function(b, c) {
        a.a.add(this, "doesPolygonPolygonIntersect");
        return this.doesRingRingIntersect(c, b) || this.isRingInRing(b, c) || this.isRingInRing(c, b) ? !0 : !1
      },
      doesRingRingIntersect: function(b, c) {
        a.a.add(this, "doesRingRingIntersect");
        b = this.normalizeLine(b);
        for (var d = 0,
               e = b.length; d < e; d++) if (this.doesSegmentRingIntersect(b[d], b[d === e - 1 ? 0 : d + 1], c)) return ! 0;
        return ! 1
      },
      P5: function(a, b) {
        function c() {
          var a = [e[0] - n[0], e[1] - n[1]],
            b = [p[0] - q[0], p[1] - q[1]],
            d = e[0] * n[1] - e[1] * n[0],
            f = p[0] * q[1] - p[1] * q[0],
            h = 1 / (a[0] * b[1] - a[1] * b[0]);
          return [(d * b[0] - f * a[0]) * h, (d * b[1] - f * a[1]) * h]
        }
        function d(a) {
          return (n[0] - e[0]) * (a[1] - e[1]) > (n[1] - e[1]) * (a[0] - e[0])
        }
        a = this.makesureAntiClockwise(a);
        b = this.makesureClockwise(b);
        var e, n, p, q, s = a;
        e = b[b.length - 1];
        for (var r = 0,
               u = b.length; r < u; r++) {
          n = b[r];
          var w = s,
            s = [];
          p = w[w.length - 1];
          for (var v = 0,
                 t = w.length; v < t; v++) q = w[v],
            d(q) ? (d(p) || s.push(c()), s.push(q)) : d(p) && s.push(c()),
            p = q;
          e = n
        }
        return s
      },
      ringRingClip: function(b, c) {
        a.a.add(this, "ringRingClip");
        b = this.tu(b);
        c = this.tu(c);
        var d = this.P5(b, c);
        return this.Vaa(d)
      },
      ringArea: function() {
        a.a.add(this, "ringArea");
        throw Error("distance Not implemented!");
      },
      distanceOfLine: function(b) {
        a.a.add(this, "distanceOfLine");
        b = this.normalizeLine(b);
        for (var c = 0,
               d = 0,
               e = b.length; d < e - 1; d++) c += this.distance(b[d], b[d + 1]);
        return c
      },
      isClockwise: function(b) {
        a.a.add(this, "isClockwise");
        b = this.tu(b);
        return d(b)
      }
    });
    a.Uo = new e;
    a.Uo.CLASS_NAME = "GeometryUtil";
    a.Zo = new e;
    a.Zo.setCrs("plane");
    a.Zo.CLASS_NAME = "PlaneGeometryUtil"
  })(g); (function(a) {
    function b(a, b, c, d, e) {
      for (var f, h = 0,
             l = b,
             k = c - d; l < c; l += d) h += (a[k] - a[l]) * (a[l + 1] + a[k + 1]),
        k = l;
      if (e === 0 < h) for (e = b; e < c; e += d) f = s(e, a[e], a[e + 1], f);
      else for (e = c - d; e >= b; e -= d) f = s(e, a[e], a[e + 1], f);
      f && m(f, f.next) && (r(f), f = f.next);
      return f
    }
    function c(a, b) {
      if (!a) return a;
      b || (b = a);
      var c = a,
        d;
      do
        if (d = !1, c.g1 || !m(c, c.next) && 0 !== l(c.Aa, c, c.next)) c = c.next;
        else {
          r(c);
          c = b = c.Aa;
          if (c === c.next) break;
          d = !0
        }
      while (d || c !== b);
      return b
    }
    function d(a, b, e, f, s, u, C) {
      if (a) {
        if (!C && u) {
          var F = a,
            A = F;
          do null === A.z && (A.z = h(A.x, A.y, f, s, u)),
            A.$m = A.Aa,
            A = A.Kj = A.next;
          while (A !== F);
          A.$m.Kj = null;
          A.$m = null;
          var F = A,
            D, G, E, H, I, K, L = 1;
          do {
            A = F;
            E = F = null;
            for (H = 0; A;) {
              H++;
              G = A;
              for (D = I = 0; D < L && (I++, G = G.Kj, G); D++);
              for (K = L; 0 < I || 0 < K && G;) 0 !== I && (0 === K || !G || A.z <= G.z) ? (D = A, A = A.Kj, I--) : (D = G, G = G.Kj, K--),
                E ? E.Kj = D: F = D,
                D.$m = E,
                E = D;
              A = G
            }
            E.Kj = null;
            L *= 2
          } while ( 1 < H )
        }
        for (F = a; a.Aa !== a.next;) {
          A = a.Aa;
          G = a.next;
          if (u) a: if (E = a.Aa, H = a.next, 0 <= l(E, a, H)) E = !1;
          else {
            I = h(E.x < a.x ? E.x < H.x ? E.x: H.x: a.x < H.x ? a.x: H.x, E.y < a.y ? E.y < H.y ? E.y: H.y: a.y < H.y ? a.y: H.y, f, s, u);
            L = h(E.x > a.x ? E.x > H.x ? E.x: H.x: a.x > H.x ? a.x: H.x, E.y > a.y ? E.y > H.y ? E.y: H.y: a.y > H.y ? a.y: H.y, f, s, u);
            for (D = a.Kj; D && D.z <= L;) {
              if (D !== a.Aa && D !== a.next && k(E.x, E.y, a.x, a.y, H.x, H.y, D.x, D.y) && 0 <= l(D.Aa, D, D.next)) {
                E = !1;
                break a
              }
              D = D.Kj
            }
            for (D = a.$m; D && D.z >= I;) {
              if (D !== a.Aa && D !== a.next && k(E.x, E.y, a.x, a.y, H.x, H.y, D.x, D.y) && 0 <= l(D.Aa, D, D.next)) {
                E = !1;
                break a
              }
              D = D.$m
            }
            E = !0
          } else a: if (E = a.Aa, H = a.next, 0 <= l(E, a, H)) E = !1;
          else {
            for (I = a.next.next; I !== a.Aa;) {
              if (k(E.x, E.y, a.x, a.y, H.x, H.y, I.x, I.y) && 0 <= l(I.Aa, I, I.next)) {
                E = !1;
                break a
              }
              I = I.next
            }
            E = !0
          }
          if (E) b.push(A.Wd / e),
            b.push(a.Wd / e),
            b.push(G.Wd / e),
            r(a),
            F = a = G.next;
          else if (a = G, a === F) {
            if (C) if (1 === C) {
              C = b;
              F = e;
              A = a;
              do G = A.Aa,
                E = A.next.next,
              !m(G, E) && n(G, A, A.next, E) && p(G, E) && p(E, G) && (C.push(G.Wd / F), C.push(A.Wd / F), C.push(E.Wd / F), r(A), r(A.next), A = a = E),
                A = A.next;
              while (A !== a);
              a = A;
              d(a, b, e, f, s, u, 2)
            } else {
              if (2 === C) a: {
                C = a;
                do {
                  for (F = C.next.next; F !== C.Aa;) {
                    if (A = C.Wd !== F.Wd) if (A = void 0, A = C.next.Wd !== F.Wd) if (A = void 0, A = C.Aa.Wd !== F.Wd) {
                      A = A = void 0;
                      b: {
                        A = C;
                        do {
                          if (A.Wd !== C.Wd && A.next.Wd !== C.Wd && A.Wd !== F.Wd && A.next.Wd !== F.Wd && n(A, A.next, C, F)) {
                            A = !0;
                            break b
                          }
                          A = A.next
                        } while ( A !== C );
                        A = !1
                      }
                      if (A = !A) if (A = void 0, A = p(C, F)) if (A = void 0, A = p(F, C)) {
                        A = C;
                        G = !1;
                        E = (C.x + F.x) / 2;
                        H = (C.y + F.y) / 2;
                        do A.y > H !== A.next.y > H && A.next.y !== A.y && E < (A.next.x - A.x) * (H - A.y) / (A.next.y - A.y) + A.x && (G = !G),
                          A = A.next;
                        while (A !== C);
                        A = G
                      }
                    }
                    if (A) {
                      a = q(C, F);
                      C = c(C, C.next);
                      a = c(a, a.next);
                      d(C, b, e, f, s, u);
                      d(a, b, e, f, s, u);
                      break a
                    }
                    F = F.next
                  }
                  C = C.next
                } while ( C !== a )
              }
            } else d(c(a), b, e, f, s, u, 1);
            break
          }
        }
      }
    }
    function e(a, b) {
      return a.x - b.x
    }
    function f(a, b) {
      var c = b,
        d = a.x,
        e = a.y,
        f = -Infinity,
        h;
      do {
        if (e <= c.y && e >= c.next.y && c.next.y !== c.y) {
          var l = c.x + (e - c.y) * (c.next.x - c.x) / (c.next.y - c.y);
          if (l <= d && l > f) {
            f = l;
            if (l === d) {
              if (e === c.y) return c;
              if (e === c.next.y) return c.next
            }
            h = c.x < c.next.x ? c: c.next
          }
        }
        c = c.next
      } while ( c !== b );
      if (!h) return null;
      if (d === f) return h.Aa;
      for (var l = h,
             m = h.x,
             q = h.y,
             n = Infinity,
             s, c = h.next; c !== l;) d >= c.x && c.x >= m && d !== c.x && k(e < q ? d: f, e, m, q, e < q ? f: d, e, c.x, c.y) && (s = Math.abs(e - c.y) / (d - c.x), (s < n || s === n && c.x > h.x) && p(c, a) && (h = c, n = s)),
        c = c.next;
      return h
    }
    function h(a, b, c, d, e) {
      a = 32767 * (a - c) * e;
      b = 32767 * (b - d) * e;
      a = (a | a << 8) & 16711935;
      a = (a | a << 4) & 252645135;
      a = (a | a << 2) & 858993459;
      b = (b | b << 8) & 16711935;
      b = (b | b << 4) & 252645135;
      b = (b | b << 2) & 858993459;
      return (a | a << 1) & 1431655765 | ((b | b << 1) & 1431655765) << 1
    }
    function k(a, b, c, d, e, f, h, l) {
      return 0 <= (e - h) * (b - l) - (a - h) * (f - l) && 0 <= (a - h) * (d - l) - (c - h) * (b - l) && 0 <= (c - h) * (f - l) - (e - h) * (d - l)
    }
    function l(a, b, c) {
      return (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y)
    }
    function m(a, b) {
      return a.x === b.x && a.y === b.y
    }
    function n(a, b, c, d) {
      return m(a, b) && m(c, d) || m(a, d) && m(c, b) ? !0 : 0 < l(a, b, c) !== 0 < l(a, b, d) && 0 < l(c, d, a) !== 0 < l(c, d, b)
    }
    function p(a, b) {
      return 0 > l(a.Aa, a, a.next) ? 0 <= l(a, b, a.next) && 0 <= l(a, a.Aa, b) : 0 > l(a, b, a.Aa) || 0 > l(a, a.next, b)
    }
    function q(a, b) {
      var c = new u(a.Wd, a.x, a.y),
        d = new u(b.Wd, b.x, b.y),
        e = a.next,
        f = b.Aa;
      a.next = b;
      b.Aa = a;
      c.next = e;
      e.Aa = c;
      d.next = c;
      c.Aa = d;
      f.next = d;
      d.Aa = f;
      return d
    }
    function s(a, b, c, d) {
      a = new u(a, b, c);
      d ? (a.next = d.next, a.Aa = d, d.next.Aa = a, d.next = a) : (a.Aa = a, a.next = a);
      return a
    }
    function r(a) {
      a.next.Aa = a.Aa;
      a.Aa.next = a.next;
      a.$m && (a.$m.Kj = a.Kj);
      a.Kj && (a.Kj.$m = a.$m)
    }
    function u(a, b, c) {
      this.Wd = a;
      this.x = b;
      this.y = c;
      this.Kj = this.$m = this.z = this.next = this.Aa = null;
      this.g1 = !1
    }
    a.Q2 = {
      WO: function(a, h, l) {
        l = l || 2;
        var k = h && h.length,
          m = k ? h[0] * l: a.length,
          n = b(a, 0, m, l, !0),
          p = [];
        if (!n) return p;
        var s, r, u, G;
        if (k) {
          var E = l,
            k = [],
            H,
            I,
            K;
          G = 0;
          for (H = h.length; G < H; G++) {
            I = h[G] * E;
            K = G < H - 1 ? h[G + 1] * E: a.length;
            I = b(a, I, K, E, !1);
            I === I.next && (I.g1 = !0);
            var L = K = I;
            do K.x < L.x && (L = K),
              K = K.next;
            while (K !== I);
            k.push(L)
          }
          k.sort(e);
          for (G = 0; G < k.length; G++) {
            h = k[G];
            E = n;
            if (E = f(h, E)) h = q(E, h),
              c(h, h.next);
            n = c(n, n.next)
          }
        }
        if (a.length > 80 * l) {
          s = u = a[0];
          r = k = a[1];
          for (E = l; E < m; E += l) G = a[E],
            h = a[E + 1],
          G < s && (s = G),
          h < r && (r = h),
          G > u && (u = G),
          h > k && (k = h);
          u = Math.max(u - s, k - r);
          u = 0 !== u ? 1 / u: 0
        }
        d(n, p, l, s, r, u);
        return p
      }
    }
  })(g); (function(a) {
    function b(a) {
      var b = a.length;
      2 < b && a[b - 1][0] == a[0][0] && a[b - 1][1] == a[0][1] && a.pop()
    }
    function c(a, b) {
      for (var c = 0; c < b.length; c++) a.push(b[c][0]),
        a.push(b[c][1])
    }
    a.St = {
      Zf: function(a) {
        for (var b = a.length,
               c = 0,
               h = b - 1,
               k = 0; k < b; h = k++) c += a[h][0] * a[k][1] - a[k][0] * a[h][1];
        return 0.5 * c
      },
      xha: function(b) {
        return 0 > a.St.Zf(b)
      },
      normalize: function(b) {
        var c;
        if (b) {
          c = [];
          for (var f = 0,
                 h = b.length; f < h; f += 1) c[f] = b[f] instanceof Array ? this.normalize(b[f]) : b[f] instanceof a.T ? [b[f].O, b[f].N] : b[f] instanceof a.F ? [b[f].x, b[f].y] : b[f]
        }
        return c
      },
      Mq: function(d, e) {
        e = e || [];
        var f = [],
          h = [];
        b(d);
        c(f, d);
        var k = d.length;
        e.forEach(b);
        for (var l = 0; l < e.length; l++) h.push(k),
          k += e[l].length,
          c(f, e[l]);
        return a.Q2.WO(f, h)
      }
    }
  })(g);
  var sc = {
    v: "1.4.9",
    Pixel: g.F,
    LngLat: g.T,
    Size: g.bd,
    Bounds: g.je,
    ArrayBounds: g.hn,
    PixelBounds: g.Te,
    event: y.event,
    Panorama: g.z3,
    PanoramaMarker: g.A3,
    Map: y.Sb,
    View2D: y.EB,
    GroundImage: y.q.SG,
    Marker: y.A.hb,
    ImageMarker: y.A.roa,
    Text: y.A.dQ,
    Icon: y.A.dh,
    MarkerShape: y.A.s3,
    Polyline: y.A.Kb,
    BezierCurve: y.A.Tw,
    Polygon: y.A.qc,
    Circle: y.A.hg,
    CircleMarker: y.A.DP,
    Ellipse: y.A.Xq,
    Rectangle: y.A.ar,
    ContextMenu: y.A.bm,
    InfoWindow: y.A.te,
    Buildings: y.q.G2,
    TileLayer: y.q.eb,
    ImageLayer: y.q.ax,
    CanvasLayer: y.q.I2,
    VideoLayer: y.q.g4,
    VectorLayer: y.q.Oc,
    MassMarks: y.q.t3,
    LayerGroup: y.q.XG,
    OverlayGroup: y.A.em,
    GeoJSON: y.A.LP,
    CANVAS: "canvas",
    DOM: "dom",
    GeometryUtil: g.Uo,
    PlaneGeometryUtil: g.Zo
  }; sc.GeometryUtil.triangulateShape = function(a, b) {
    g.a.add(this, "triangulateShape");
    a = g.St.normalize(a);
    b = g.St.normalize(b);
    return g.St.Mq(a, b)
  }; sc.plugin = sc.service = y.Sb.prototype.plugin; sc.TileLayer.Satellite = y.q.eb.aQ; sc.TileLayer.RoadNet = y.q.eb.ZP; sc.TileLayer.google = y.q.eb.$w; sc.TileLayer.Flexible = y.q.eb.Xw; sc.TileLayer.WMS = y.q.eb.h4; sc.TileLayer.WMTS = y.q.eb.i4; sc.TileLayer.Traffic = y.q.eb.eQ; sc.Panorama.Events = y.event; sc.TileLayer.PanoramaLayer = y.q.eb.xoa; sc.UA = {
    ie: g.l.Zp,
    ielt9: g.l.re,
    ielt11: g.l.eha,
    mobile: g.l.W,
    android: g.l.sk,
    ios: g.l.YE
  }; sc.Browser = {
    ua: navigator.userAgent,
    mobile: g.l.W,
    plat: g.l.Us,
    mac: g.l.$z,
    windows: g.l.Qna,
    ios: g.l.YE,
    iPad: g.l.Yga,
    iPhone: g.l.Zga,
    android: g.l.sk,
    android23: g.l.Mca,
    chrome: g.l.chrome,
    firefox: g.l.FL,
    safari: g.l.aG,
    wechat: g.l.q2,
    uc: g.l.ina,
    qq: g.l.nka,
    ie: g.l.Zp,
    ie6: g.l.uh,
    ie7: g.l.$p,
    ie8: g.l.re && !g.l.$p && !g.l.uh,
    ie9: g.l.CY,
    ie10: g.l.BY,
    ie11: g.l.bha,
    edge: g.l.lfa,
    ielt9: g.l.re,
    baidu: g.l.ED,
    isLocalStorage: g.l.Jj,
    isGeolocation: !!navigator.geolocation,
    mobileWebkit: g.l.Eia,
    mobileWebkit3d: g.l.KZ,
    mobileOpera: !!g.l.Dia,
    retina: g.l.kd,
    touch: !!g.l.ef,
    msPointer: !!g.l.MZ,
    pointer: !!g.l.QN,
    webkit: g.l.o2,
    ie3d: g.l.cha,
    webkit3d: g.l.p2,
    gecko3d: g.l.Nfa,
    opera3d: g.l.sja,
    any3d: g.l.CD,
    isCanvas: g.l.Hk,
    isSvg: g.l.Rm,
    isVML: g.l.Zp,
    isWorker: !!window.Worker,
    isWebsocket: !!window.WebSocket,
    isWebGL: function() {
      for (var a = document.createElement("canvas"), b = ["webgl", "experimental-webgl", "moz-webgl"], c = null, d = 0; d < b.length; d += 1) {
        try {
          c = a.getContext(b[d])
        } catch(e) {}
        if (c) if (c.drawingBufferWidth !== a.width || c.drawingBufferHeight !== a.height) break;
        else return ! 0
      }
      return ! 1
    }
  }; sc.Util = {
    colorNameToHex: g.c.TD,
    rgbHex2Rgba: g.c.t0,
    argbHex2Rgba: g.c.pg,
    isEmpty: g.c.ko,
    deleteItemFromArray: g.c.dv,
    deleteItemFromArrayByIndex: g.c.Dm,
    indexOf: g.c.indexOf,
    format: g.c.Td,
    isArray: g.c.isArray,
    isDOM: g.c.bF,
    includes: g.c.ea,
    requestIdleCallback: g.c.TF,
    cancelIdleCallback: g.c.RK,
    requestAnimFrame: g.c.Ac,
    cancelAnimFrame: g.c.ph,
    color2RgbaArray: g.c.Nn
  }; sc.DomUtil = {
    getViewport: g.h.KE,
    getViewportOffset: g.h.pM,
    create: g.h.create,
    setClass: g.h.vla,
    hasClass: g.h.Km,
    addClass: g.h.Ka,
    removeClass: g.h.Ra,
    setOpacity: g.h.Eo,
    rotate: g.h.rotate,
    setCss: g.h.Na,
    empty: g.h.zA,
    remove: g.h.remove,
    TRANSFORM: g.h.Af,
    TRANSITION: g.h.CB
  };
  var tc = g.w; sc.User = {
    key: tc.key
  }; window.AMap = sc; window.AMap.BuryPoint = g.BuryPoint; window.AMap.Class = g.X;
  if (!tc.Xz && "undefined" !== typeof arguments && arguments.callee) try {
    if (g.l.Jj && window.localStorage) {
      var uc = window.localStorage["_AMap_" + g.rF];
      uc && JSON.parse(uc).version === tc.oi || window.localStorage.setItem("_AMap_" + g.rF, JSON.stringify({
        version: tc.oi,
        script: "(" + arguments.callee + ")(config)"
      }));
      var vc = new Image;
      vc.src = tc.Ab + "/maps/cookie?key=amap_ver&value=" + tc.oi;
      document.head.appendChild(vc);
      vc.onload = vc.onerror = vc.onabort = function() {
        document.head.removeChild(vc)
      }
    }
  } catch(wc) {}; window.AMap.convertFrom = function(a, b, c) {
    g.a.add("convertFrom", b);
    var d = g.w.Cd + "/v3/assistant/coordinate/convert";
    a = g.c.Da(a);
    var e = [];
    if (a instanceof Array) {
      for (var f = 0,
             h = a.length; f < h; f += 1) e.push(a[f] + "");
      e = e.join(";")
    } else e = a + "";
    b = ["key=" + g.w.key, "s=rsv3", "locations=" + e, "coordsys=" + (b || "gps")];
    d += 0 < b.length ? "?" + b.join("&") : "";
    d = new g.Wa.jb(d, {
      callback: "callback"
    });
    d.g("complete",
      function(a) {
        if ("1" === a.status) {
          a = a.locations.split(";");
          for (var b = 0; b < a.length; b += 1) {
            var d = a[b].split(",");
            a[b] = new AMap.LngLat(d[0], d[1])
          }
          c && "function" === typeof c && c("complete", {
            info: "ok",
            locations: a
          })
        } else c && "function" === typeof c && c("error", a.info)
      },
      this);
    d.g("error",
      function(a) {
        c && "function" === typeof c && c("error", a.info)
      },
      this)
  }; g.Wa = g.Wa || {}; g.Wa.hH = g.X.extend({
    ea: [g.la],
    r: function(a, b) {
      this.B = {
        callback: "cbk",
        type: "json",
        charset: "utf-8"
      };
      b = b || {};
      g.c.Fb(this, b);
      this.url = a;
      this.send(a, b.Fc, b.nea, b.Zka, b.responseType)
    },
    send: function(a) {
      var b = g.h.create("script");
      b.type = "text/javascript";
      b.charset = this.B.charset;
      var c = this;
      g.l.re ? b.onreadystatechange = function() {
        "loaded" !== this.readyState && "complete" !== this.readyState || c.o("complete")
      }: (b.onload = function() {
        c.o("complete")
      },
        b.onerror = function() {
          c.o("error", {
            status: 0,
            info: "service error",
            url: a
          })
        });
      b.src = a;
      document.getElementsByTagName("head")[0].appendChild(b)
    }
  }); g.Wa.jb = g.Wa.hH.extend({
    zda: function() {
      if (g.c.G0) return g.c.nG.push(this),
        !0
    },
    bla: function() {
      this.o("error", {
        info: "TIME_OUT_A"
      })
    },
    send: function(a, b, c, d) {
      function e() {
        window[f] = null;
        try {
          window[f] = null
        } catch(a) {}
        h.onerror = null;
        h.parentNode && h.parentNode.removeChild(h)
      }
      if (!this.B.Su || !this.zda()) {
        a = encodeURI(a);
        var f = this.B.fun;
        if (!f || window[f]) f = g.c.JX("jsonp_", 6) + "_";
        var h = document.createElement("script");
        h.type = "text/javascript";
        h.charset = "utf-8";
        h.async = !0;
        var k = this;
        g.l.re || (h.onerror = function() {
          e();
          k.o("error", {
            info: "REQUEST_FAILED",
            url: a
          })
        });
        window[f] = function(a) {
          e();
          if (k.B.callbackFunction) k.B.callbackFunction.call(k.B.context, a);
          else if (3E4 === a.errcode && a.data) g.c.G0 = !0,
            g.mb.load("AMap.AntiCrabFrame",
              function() {
                g.c.Su || (g.c.Su = new g.C2);
                g.c.nG.push(k);
                g.c.Su.open(k.B.Fc, a.data.host, k.oA || "", k.url)
              });
          else {
            if (a instanceof Array || "string" === typeof a) a = {
              data: a
            };
            a.Rqa = f;
            k.o("complete", a)
          }
        };
        b = "?"; - 1 !== a.indexOf("?") && (b = "&");
        b = a + b + this.B.callback + "=" + f;
        if ( - 1 !== a.indexOf(g.w.Cd + "/v") || -1 !== a.indexOf("yuntuapi.amap.com/datasearch") || -1 !== a.indexOf("webapi.amap.com/")) b = b + "&platform=JS&logversion=2.0" + ("&appname=" + g.w.up),
          b += "&csid=" + g.c.g2(),
          b += "&sdkversion=" + g.w.sp;
        if (c = this.B.nE) {
          var l = [],
            m;
          for (m in c) c.hasOwnProperty(m) && (l.push(m + "=" + c[m]), b += "&" + m + "=" + encodeURIComponent(c[m]));
          k.oA = l.join("&")
        }
        h.src = d ? b + "&rereq=true": b;
        g.Wa.jb.vR || (g.Wa.jb.vR = document.getElementsByTagName("head")[0]);
        g.Wa.jb.vR.appendChild(h)
      }
    }
  }); window.AMap.Http = {}; window.AMap.Http.JSONP = g.Wa.jb; g.Wa.XMLHttpRequest = g.Wa.hH.extend({
    send: function(a, b, c, d, e) {
      var f = this;
      if ((g.l.re || g.l.CY) && window.XDomainRequest) {
        var h = this.w2 = new XDomainRequest;
        h.onerror = function(b) {
          f.o("error", {
            url: a,
            data: b
          })
        };
        h.onload = function() {
          f.o("complete", {
            url: a,
            data: h.responseText
          })
        };
        h.open(b || "GET", a);
        setTimeout(function() {
            h.send(c || void 0)
          },
          0)
      } else {
        var k = this.w2 = new XMLHttpRequest;
        k.onreadystatechange = function() {
          4 === k.readyState && 200 === k.status ? f.o("complete", {
            url: a,
            data: "arraybuffer" === k.responseType ? k.response: k.responseText
          }) : 404 === k.status && (k.abort(), f.o("error", {
              url: a,
              data: "404"
            }))
        };
        k.onerror = function(b) {
          k.abort();
          f.o("error", {
            url: a,
            data: b
          })
        };
        k.open(b || "GET", a);
        "POST" === b && k.setRequestHeader("Content-Type", d || "application/x-www-form-urlencoded");
        e && (k.responseType = e);
        k.send(c || void 0)
      }
    },
    abort: function() {
      this.w2.abort()
    }
  }); g.ri = g.X.extend({
    r: function(a, b, c, d) {
      this.start = a;
      this.end = b;
      this.transition = c;
      this.precision = d || 0;
      this.ft = !1;
      this.update = g.c.bind(this.update, this);
      return this
    },
    Ul: function(a) {
      this.kg = this.startTime = +new Date;
      this.frames = 0;
      this.ft = !0;
      this.KV = g.c.Ac(this.update);
      this.K$ = g.c.bind(this.qo, a || this)
    },
    update: function() {
      this.frames += 1;
      var a = +new Date,
        b = a - this.startTime,
        b = this.transition ? this.transition(this.start, this.end, b, this.frames, a - this.kg) : null;
      "number" === typeof b && Math.abs(b - this.end) < this.precision ? (this.stop(), b = this.end) : this.KV = g.c.Ac(this.update);
      this.kg = a;
      this.K$(b)
    },
    stop: function(a) {
      g.c.ph(this.KV);
      a && this.update();
      this.ft = !1
    }
  }); g.ri.Easing = {
    Linear: {
      None: function(a) {
        return a
      }
    },
    Bounce: {
      In: function(a) {
        return 1 - (a < 1 / 2.75 ? 7.5625 * a * a: a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375)
      },
      Out: function(a) {
        return g.ri.Easing.Bounce.In(1 - a)
      }
    },
    Cubic: {
      In: function(a) {
        return 1 - a * a * a
      },
      Out: function(a) {
        a = 1 - a;
        return 1 - a * a * a
      }
    }
  }; g.Sb = g.X.extend({
    ea: [g.la, g.Ee, g.kF],
    r: function(a, b) {
      this.oc = g.c.bind(this.oc, this);
      this.D = b;
      this.Wh = b.Wh;
      this.Sk = "";
      this.jg = this.Yf = this.pj = !1;
      this.im = {};
      this.I = a;
      this.L8();
      this.oha();
      this.V("zooms", b, !0);
      this.V("size", b, !0);
      this.V("limitBounds", b);
      this.V("view", b);
      this.V("nolimg", b, !0);
      this.V("mapNumber", b, !0);
      this.V("lang", b, !0);
      this.V("features", b, !0);
      this.V("styleID", b, !0);
      this.V("forceBig", b, !0);
      this.V("mode", b, !0);
      this.V("showBuildingBlock", b, !0);
      this.V("mapStyle", b);
      var c = this.get("mapStyle");
      this.Gd = g.w.Gd[c] || g.w.Gd["default"];
      this.uD = "#a3ccff";
      this.By = b.get("skyColor") || "#cce0ff";
      this.V("editEnable", b);
      this.Ub && this.V("style", b, !0);
      this.V("styleUrl", b);
      this.V("hightlight", b, !0);
      this.V("labelzIndex", b, !0);
      g.l.OA && (this.Xc = new g.q.ui(new y.q.eb({
        zIndex: b.get("labelzIndex"),
        visible: !1
      }), this, ["point", "road"]), this.Xc.type = "\u77e2\u91cf\u6807\u6ce8", b.labelsLayer = this.Xc.ba, this.Xc.ba.g("complete", this.xn, this, !0), this.Xc.ba.g("renderComplete", this.xn, this), this.Xc.Wx = this.Xc.Kf = !0);
      this.V("isHotspot", b, !0);
      this.V("layers", b);
      this.V("overlays", b);
      this.V("infos", b, !0);
      this.V("contextmenus", b, !0);
      this.V("controls", b);
      this.V("bounds", b);
      this.V("draw", b);
      this.ve("zoomAndCenter destroy defaultCursor jogEnable animateEnable baseRender overlayRender gridMapForeign".split(" "), b);
      this.ve("rotateEnable pitchEnable dragEnable keyboardEnable doubleClickZoom scrollWheel zoomEnable touchZoom".split(" "), b, !0);
      this.get("jogEnable") ? this.Gs = !0 : this.Gs = !1;
      this.d8();
      this.j8();
      this.BS && this.BS();
      this.V("resizeEnable", b);
      this.D.map = this;
      c = this.get("size");
      c = c.width * c.height / 65536;
      g.l.kd && 3 < c && (this.SV = !0);
      this.UF()
    },
    editEnableChanged: function() {
      this.Ub = this.get("editEnable")
    },
    labelzIndexChanged: function() {
      this.Xc && this.Xc.set("zIndex", this.get("labelzIndex"))
    },
    styleChanged: function() {
      this.Jk = !0
    },
    mapStyleChanged: function() {
      if (this.D.vh) {
        this.Sk && (this.set("style", ""), this.iz = this.Sk = "");
        var a = this.get("mapStyle");
        this.Jk = !0;
        this.Gd = g.w.Gd[a] || g.w.Gd["default"];
        this.yA()
      }
    },
    styleUrlChanged: function() {
      if (this.D.vh) {
        var a = this.get("styleUrl") || "";
        if (a !== this.Sk) {
          var b = -1 !== a.indexOf("?isPublic=true"),
            a = a.substr(0, 46),
            c = a.split("amap://styles/")[1];
          "normal" === c ? (this.Sk = "", this.set("nolimg", !1), this.set("style", ""), this.iz = "") : (this.eB = !0, this.set("nolimg", !0), b = new g.Wa.jb(32 > c.length ? g.w.Xb + "://webapi.amap.com/style?name=" + c + "&key=" + g.w.key: g.w.Xb + "://webapi.amap.com/v4/map/styles?styleid=" + c + "&s=rsv3&key=" + g.w.key + (b ? "&ispublic=1": ""), {
            callback: "callback"
          }), b.g("complete",
            function(a) {
              a.data && a.data.content ? this.set("style", JSON.parse(a.data.content)) : this.set("style", "");
              this.eB = !1
            },
            this), b.g("error",
            function() {
              this.eB = !1
            },
            this), this.Sk = a, this.yA())
        }
      }
    },
    H0: function(a) {
      this.I.style.background = a
    },
    resizeEnableChanged: function() {},
    Pfa: function(a) {
      var b = this.get("center");
      if (a.contains(b)) return null;
      a = g.Uo.closestOnLine(b, a.SO().path);
      return new g.T(a[0], a[1])
    },
    Cda: function() {
      var a = this.get("limitBounds"),
        b = this.get("bounds");
      b.kc && b.kc.O > b.Wb.O && (b.Wb.O += 360);
      if (!a.contains(b)) {
        if (b instanceof g.hn) return this.Pfa(a, b);
        var c = this.get("center").ab();
        a.di() < b.di() ? c.O = a.sh().O: (a.kc.O > b.kc.O && (c.O += a.kc.O - b.kc.O), a.Wb.O < b.Wb.O && (c.O += a.Wb.O - b.Wb.O));
        a.ai() < b.ai() ? c.N = a.sh().N: (a.kc.N > b.kc.N && (c.N += a.kc.N - b.kc.N), a.Wb.N < b.Wb.N && (c.N += a.Wb.N - b.Wb.N));
        return c
      }
    },
    OJ: function() {
      var a = this.EO;
      this.D.refreshSize();
      var b = this.get("size");
      b && a && !b.Ya(a) && (this.EO = b, this.kt = !0, this.set("display"), this.q0(b), this.get("resizeEnable") && this.ha("resize", {
        Tia: a,
        TZ: b
      }))
    },
    nU: function() {
      var a = this;
      a.OJ();
      a.JJ = setTimeout(function() {
          a.nU()
        },
        200)
    },
    J5: function() {
      this.JJ && (clearTimeout(this.JJ), this.JJ = null)
    },
    L8: function() {
      this.EO = this.D.getSize();
      if (g.l.re || g.l.q2 && g.l.YE || g.l.wia) this.nU();
      else {
        var a = this;
        g.C.Ica(this.I,
          function(b) {
            a.OJ(b)
          })
      }
    },
    oha: function() {
      var a = this.I;
      g.h.Ka(a, "amap-container");
      var b = {};
      b.Mc = g.h.create("div", a, "amap-maps");
      this.gk = g.h.create("div", a);
      this.gk.style.display = "none";
      b.zp = g.h.create("div", b.Mc, "amap-drags");
      b.q = g.h.create("div", b.zp, "amap-layers");
      b.A = g.h.create("div", b.zp, "amap-overlays");
      b.controls = g.h.create("div", a, "amap-controls");
      b.Zz = g.h.create("a", a, "amap-logo");
      var c = window.location.host; - 1 === c.indexOf("amap.com") && -1 === c.indexOf("gaode.com") && (b.Zz.href = g.l.W ? "http://m.amap.com": "http://gaode.com", b.Zz.target = "_blank");
      g.h.create("img", b.Zz).src = g.l.kd ? this.D.B.logoUrlRetina: this.D.B.logoUrl;
      b.vk = g.h.create("div", a, "amap-copyright");
      b.vk.style.display = "none";
      350 < g.h.KE(this.I).width && (b.vk.innerHTML = this.D.B.copyright, b.vk.BZ = g.h.create("span", b.vk, "amap-mcode"), this.yA());
      this.Qa = b
    },
    yA: function() {
      var a = this.get("layers");
      if (a) {
        for (var b = -1,
               c = "",
               d = 0; d < a.length; d += 1) {
          var e = a[d].get("mapNumber"),
            f = a[d].getzIndex();
          e && f > b && a[d].get("visible") && (c = e, b = f)
        }
        this.set("mapNumber", c);
        a = this.D.getMapStyle();
        "GS(2018)1709" === c && a && "normal" !== a && "amap://styles/normal" !== a && (c = "", this.Qa.vk.style.visibility = "hidden", this.Qa.Zz.style.display = "none");
        c && this.Qa.vk.BZ && (this.Qa.vk.BZ.innerHTML = "- " + c + "\u53f7", this.Qa.vk.style.visibility = "visible", this.Qa.Zz.style.display = "block");
        return c
      }
    },
    KR: function() {
      var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !1;
      g.l.Jj && g.cj && (a ? g.cj.flush() : this.qX || (this.qX = g.c.Ac(function() {
            g.cj.flush();
            this.qX = null
          },
          this)))
    },
    xn: function() {
      function a() {
        e.D.set("rasterLayer", void 0);
        e.D.Pi = e.D.T_ = !0;
        e.nv.QE = !1;
        g.c.TF(function() {
          e.D && e.D.Qi(f)
        })
      }
      function b() {
        for (var a = e.get("layers"), b = e.get("zoom"), c = 0; c < a.length; c += 1) {
          var d = a[c].get("zooms");
          if (! (a[c].Pi || a[c].KY || !d || b > d[1] || b < d[0] || !a[c].get("visible") || a[c].q && a[c].q.ia && 0 === a[c].q.ia.length || a[c].q && a[c].q.sN || a[c].q && a[c].q.pa)) return ! 1
        }
        a = e.D.get("features");
        return ("all" === a || g.c.ea(a, "point")) && e.Xc && e.Xc.get("visible") && 0 < e.Xc.ia.length && !e.Xc.pa && !e.Xc.JC ? !1 : !0
      }
      function c() {
        var a = {
          id: e.D.id
        };
        g.me.Fe.end(g.extend(a, {
          key: "rds"
        }));
        g.me.Fe.send(g.extend(a, {
          params: {
            rs: e.get("baseRender"),
            viewmode: e.D.getViewMode_(),
            fd: 0 === e.iF ? 1 : 0,
            raster: e.D.Pi ? 1 : 0
          }
        }));
        e.D && e.D.Fl && e.D.Fl.NC();
        e.D.L_ = 1;
        e.KR();
        e.set("display");
        e.Uz = !0
      }
      function d() {
        g.me.Fe.end({
          id: e.D.id,
          key: "rd"
        });
        g.c.Ac(function() {
            this.o("complete")
          },
          e);
        e.D.pa = !0;
        e.set("display")
      }
      if (!this.iL) if (this.Uz) 1 === this.jr && 13 === this.get("zoom") && (g.c.wz.stop(this.fC), g.me.Fe.send({
        id: this.D.id,
        params: {
          fps: this.fC.wz,
          type: "fps",
          rs: this.get("baseRender")
        }
      }), this.jr = 2),
        this.KR();
      else {
        var e = this,
          f = this.D.get("rasterLayer"),
          h = b();
        f ? (f.q && f.q.pa && (this.D.pa || d()), h && (this.D.pa || d(), a(), c())) : h && (this.D.pa || d(), c(), this.D.T_ = !0)
      }
    },
    layersChanged: function() {
      this.za = this.za || [];
      for (var a = this.get("layers"), b = this.za.length - 1; 0 <= b; b -= 1) this.za[b] === this.td || this.za[b] === this.wq || this.za[b].Wx || this.za[b].ba.Wx || -1 !== g.c.indexOf(a, this.za[b].ba) || (this.za[b].Of(), this.za[b].Sj && this.za[b].Sj.Of(), this.za[b].ba.H("complete", this.xn, this), this.za[b].ba.H("renderComplete", this.xn, this), this.za = g.c.Dm(this.za, b));
      for (var c = !1,
             d = !0,
             e = this.get("labelzIndex"), b = 0; b < a.length; b += 1) if (!a[b].KY) {
        if (a[b].Qh) - 1 === g.c.indexOf(this.za, a[b].q) && this.za.push(a[b].q);
        else {
          var f = this.qg(a[b]);
          f && (this.za.push(f), a[b].Qh = !0, a[b].q = f);
          a[b].g("complete", this.xn, this, !0);
          a[b].g("renderComplete", this.xn, this)
        }
        a[b].nq && a[b].get("visible") && (c = !0, !1 === a[b].get("detectRetina") && (d = !1), e = a[b].get("textIndex") || e)
      }
      this.Xc && (c || "3D" !== this.D.getViewMode_() ? this.Xc.JC = !1 : (c = g.c.find(a,
        function(a) {
          if (y.q.Yq && a instanceof y.q.Yq && a.get("visible")) return ! 0
        }), this.Xc.JC = c = !!c));
      a = g.c.indexOf(this.za, this.Xc);
      c && this.D.get("showLabel") ? ( - 1 === a && this.za.push(this.Xc), this.Xc.ka = d && g.l.ka, this.Xc.Vy(this.get("mapStyle") || "normal"), this.Xc.set("zIndex", e), this.Xc.set("visible", !0), this.D.Ez = !0, this.D.get("isHotspot") ? this.Xc.lja() : this.Xc.ZK()) : (this.Xc && (this.Xc.set("visible", !1), this.D.Ez = !1, this.Xc.ZK()), this.D.Ez = !1);
      this.D.isHotspotChanged();
      this.set("display", 0);
      this.yA()
    },
    isHotspotChanged: function() {
      this.layersChanged()
    },
    controlsChanged: function() {
      var a = this.get("controls"),
        b,
        c;
      if (a.add && 0 < a.add.length) for (; 0 < a.add.length;) b = a.add.shift(),
      (c = b.Nr || b.addTo) && c.call(b, this.D, this.Qa.controls);
      else if (a.remove && a.remove.length) for (; 0 < a.remove.length;) b = a.remove.shift(),
      (c = b.Zs || b.removeFrom) && c.call(b, this.D, this.Qa.controls)
    },
    mca: function() {
      if (!this.iL) {
        var a = this;
        this.xV = !1;
        a.td || (a.td = new g.q.Oc(new y.q.Oc, a), a.td.Pe = 36, a.td.wf = 36, a.td.set("zIndex", 120), a.za.push(a.td), a.td.oz = !0);
        for (var b = a.get("overlays"), c = [], d = 0; d < a.Nc.length; d += 1) - 1 === g.c.indexOf(b, a.Nc[d].Pc) && (a.Nc[d].Pc instanceof y.A.te || a.Nc[d].Pc instanceof y.A.bm ? a.Nc[d].Of() : (a.td && a.Nc[d] instanceof g.A.hb ? (a.td.cg = g.c.dv(a.td.cg, a.Nc[d].L), a.td.Y_([a.Nc[d].L])) : a.wq && a.wq.Y_([a.Nc[d].L]), a.Nc[d].L.da ? (g.h.remove(a.Nc[d].L.da), a.Nc[d].L.da = null) : a.Nc[d].L.Pa && (g.h.remove(a.Nc[d].L.Pa.tf), g.h.remove(a.Nc[d].L.Pa.fc), a.Nc[d].L.Pa = null), a.Nc[d].Ll && a.Nc[d].Ll.stop(), a.Nc[d].Pc.Qh = !1, a.Nc[d].Pc.Lo(), a.Nc[d].Pc.ue.map = null, a.Nc[d].Pc.A = null, a.Nc[d].Pc = null, a.Nc[d].L.Sea(), a.Nc[d].L = null, a.Nc[d].Lo(), a.Nc[d].ue = null, a.Nc[d].Bi(), a.Nc[d].map = null), c.push(a.Nc[d]));
        for (d = 0; d < c.length; d += 1) a.Nc = g.c.Dm(a.Nc, g.c.indexOf(a.Nc, c[d]));
        var e = [],
          f = [];
        g.c.rla(function(b) {
            if (!b.Qh && b.ag) {
              var c = b.A || a.mda(b);
              c && (a.Nc.push(c), c instanceof g.A.te || c instanceof g.A.bm ? c.Qv(a) : c instanceof g.A.hb ? e.push(c.L) : f.push(c.L), b.Qh = !0)
            }
          },
          b);
        e.length && a.td.Pu(e);
        f.length && (a.wq || (a.wq = new g.q.Oc(new y.q.Oc, a), a.wq.set("zIndex", 110), a.za.push(a.wq)), a.wq.Pu(f));
        a.set("display", 0)
      }
    },
    overlaysChanged: function() {
      this.Nc = this.Nc || [];
      this.xV || (g.c.Ac(this.mca, this), this.xV = !0)
    },
    contextmenusChanged: function() {
      var a = this.get("contextmenu");
      if (a) {
        var b = this;
        g.mb.load("overlay",
          function() {
            b.$D = new g.A.bm(a, b);
            b.set("display", 0)
          })
      }
    },
    infosChanged: function() {
      var a = this.get("infos");
      if (a) {
        this.Om = this.Om || {};
        var b, c = this;
        g.mb.load("overlay",
          function() {
            for (var d in a) a.hasOwnProperty(d) && (b = a[d], c.Om[d] = c.Om[d] || new g.A.te(b, c))
          })
      }
    },
    mda: function(a) {
      var b = null;
      if (a instanceof y.A.hb) b = new g.A.hb(a, this);
      else if (a instanceof y.A.bm) b = new g.A.bm(a, this);
      else if (a instanceof y.A.te) b = new g.A.te(a, this);
      else {
        var c = ["overlay"];
        "d" === this.get("overlayRender") ? (c.push("dvector"), g.l.Rm ? c.push("svg") : c.push("vml")) : c.push("cvector");
        if (!this.Dna && !g.mb.Pz(c)) {
          var d = this;
          g.mb.yg(c,
            function() {
              this.Dna = !0;
              d.overlaysChanged()
            });
          return
        }
        a instanceof y.A.qc ? b = new g.A.qc(a, this) : a instanceof y.A.Tw ? b = new g.A.Tw(a, this) : a instanceof y.A.Kb ? b = new g.A.Kb(a, this) : a instanceof y.A.hg ? b = new g.A.hg(a, this) : a instanceof y.A.Xq ? b = new g.A.qc(a, this) : a instanceof y.A.ar && (b = new g.A.qc(a, this))
      }
      return b
    },
    Ipa: function() {
      function a() {}
      var b = new g.q.Oc,
        c = [],
        d = new g.T(116.405467, 39.907761);
      new g.style.Uf.dh;
      for (var e = 0; 100 > e; e += 1) for (var f = 0; 100 > f; f += 1) {
        var h = new g.T(d.O + 0.02 * f, d.N + 0.02 * e),
          h = new g.ah({
            name: "point" + (100 * e + f),
            map: this,
            Z: new g.ra.Tf(this.Lb(h))
          });
        c[100 * e + f] = h;
        h.g("hover", a, h)
      }
      b.Pu(c);
      this.za.push(b)
    },
    Qb: function() {},
    Hpa: function(a) {
      var b = new g.q.Oc,
        c = [],
        c = (new g.Z2({
          map: this
        })).YN(a);
      b.Pu(c);
      this.za.push(b);
      this.set("display", 0)
    },
    qg: function(a) {
      a = a.qg(this);
      if (!a) return null;
      if (a.length && "string" == typeof a[0]) {
        var b = this;
        g.mb.yg(a,
          function() {
            b.layersChanged()
          })
      } else return a;
      return null
    },
    nra: function() {
      return this.Qa
    },
    $sa: function() {
      this.set("display", 0)
    },
    displayChanged: function(a) {
      this.kV || this.UF(a)
    },
    UF: function(a) {
      if (a) if (g.c.ph(this.DA), g.l.sk) {
        var b = this;
        setTimeout(function() {
            b.oc()
          },
          0)
      } else this.oc();
      else this.Bt || (this.DA = g.c.Ac(this.oc), this.Bt = !0)
    },
    oc: function() {
      this.DA = null;
      if (!this.iL) {
        this.o("render");
        this.Bt = !1;
        var a = {};
        if (this.za) {
          for (var b = this.D.getViewMode_(), c = [], d = 0, e = this.za.length; d < e; d += 1) this.za[d].So && this.za[d].So !== b ? this.za[d].pa = !0 : (c.push(this.za[d]), this.za[d].Sj && c.push(this.za[d].Sj));
          c.sort(function(a, b) {
            var c = a.get("zIndex"),
              d = b.get("zIndex");
            return c > d ? 1 : c === d ? a.GB > b.GB ? 1 : -1 : -1
          });
          a.za = c;
          a.size = this.D.get("size");
          if (a.size.width && a.size.height) {
            c = g.l.ka ? Math.min(window.devicePixelRatio || 1, 2) : 1;
            a.cda = 15E5 < a.size.width * a.size.height * c * c;
            a.QE = !!this.D.get("rasterLayer");
            a.W = g.l.W;
            a.R = this.D.JE();
            a.So = b;
            a.P = this.D.getResolution([0, 0]);
            a.iq = this.D.get("mapStyle");
            a.Jk = this.Jk;
            a.dd = this.jg;
            a.wqa = this.im;
            a.Se = this.pj;
            a.bg = this.Yf;
            a.UO = this.Yf && g.l.W;
            a.J1 = g.l.W && this.pj;
            a.uG = g.l.W && this.jg;
            this.uG = a.uG;
            a.Vq = a.R.zoom > this.get("targetLevel");
            a.osa = !0;
            a.SV = this.SV;
            for (var b = !1,
                   f, c = !1,
                   d = 0; d < this.za.length; d += 1) this.za[d].Ji && this.za[d].ba.get("visible") && a.R.zoom <= this.za[d].ba.get("zooms")[1] && (a.hO = !0),
            this.za[d].Bl().kd && (b = !0);
            for (d = 0; d < this.za.length; d += 1) this.za[d].ba.CK && a.hO && (!this.pj && this.za[d].ba.get("visible") && (f = this.za[d].ba.CK(), f.Jra = 1, f.zoom = a.R.zoom), c = !0);
            c ? f && this.Ib !== f && (this.Ib = f) : this.Ib = [];
            a.Ib = this.Ib;
            a.kd = b;
            a.scale = Math.pow(2, a.R.zoom - a.R.fe);
            this.nv = a;
            if (f = this.CE()) f.oc(a),
              this.Jk = this.sX = !1
          }
        }
      }
    },
    CE: function() {
      if (!this.Q || this.Q.type !== this.D.view.type) if (this.Q = null, "3D" == this.D.view.type) {
        var a = this;
        g.mb.load("Map3D",
          function() {
            a.Q || (a.Q = new g.Ea.vB(a), a.set("display"))
          })
      } else this.Q = new g.M.canvas.Sb(this);
      return this.Q
    },
    Xfa: function() {
      var a = [],
        b = this.get("controls").gd,
        c;
      for (c in b) b[c].sv && b[c].sv() && a.push(b[c].sv());
      return a
    },
    destroyChanged: function() {
      this.iL = 1;
      this.S = {};
      this.Xc && (this.Xc.ba.H("complete", this.xn, this), this.Xc.Of(), this.za = g.c.Dm(this.za, g.c.indexOf(this.za, this.Xc)));
      this.Cba && clearTimeout(this.Cba);
      this.iba();
      this.l9();
      this.tJ && this.tJ();
      this.kca();
      this.Lo();
      this.D = this.D.map = null;
      this.I = this.I.AH = null;
      this.ce && (this.ce.stop(), this.ce = null);
      this.hf && (this.hf.stop(), this.hf = null);
      this.ld && (this.ld.stop(), this.ld = null)
    },
    kca: function() {
      var a = this.I;
      this.J5();
      g.C.Qda(a);
      g.h.zA(a);
      this.gk = null;
      g.h.Ra(a, "amap-container");
      this.Qa = null
    },
    jogEnableChanged: function() {
      this.get("jogEnable") ? this.Gs = !0 : this.Gs = !1
    },
    drawChanged: function() {
      var a = this,
        b, c, d = this.get("draw");
      if (d) {
        this.ho || (this.ho = []);
        b = 0;
        for (c = this.ho.length; b < c; b += 1) this.ho[b].Bka();
        g.mb.load("interaction",
          function() {
            var b = new g.soa({
                type: d,
                q: a.wq
              },
              a);
            a.ho.push(b);
            a.loaded = !0
          })
      } else if (this.ho) for (b = 0, c = this.ho.length; b < c; b += 1) this.ho[b].Bka(),
        this.ho[b].aqa(),
        this.H("click", this.ho[b].Cra, this)
    },
    Ne: function(a, b, c) {
      return this.D.view.Ne(a, b, c)
    },
    Ef: function(a, b, c) {
      return this.D.view.Ef(a, b, c)
    },
    bY: function(a, b) {
      var c = this.get("size"),
        d = document.createElement("canvas");
      a = a || c.width;
      b = b || c.height;
      d.width = a;
      d.height = b;
      for (var e = -(c.width - a) / 2, c = -(c.height - b) / 2, f = d.getContext("2d"), h = this.Qa.q.childNodes, k = [], l = 0; l < h.length; l += 1) k.push(h[l]);
      k.sort(function(a, b) {
        return a.style.zIndex - b.style.zIndex
      });
      for (l = 0; l < k.length; l += 1) {
        var m = k[l];
        if (g.h.Km(m, "amap-layer") || g.h.Km(m, "amap-e") || g.h.Km(m, "amap-labels")) if ("CANVAS" === m.tagName) {
          var h = c,
            n = e,
            p = parseFloat(m.style.width) || m.width,
            q = parseFloat(m.style.height) || m.height,
            s = 1;
          m.style.transform && (s = parseFloat(m.style.transform.split("(")[1]));
          // m.style.transform.rotate = '45deg';
          f.drawImage(m, n, h, p * s, q * s)
        } else if ("DIV" === m.tagName) for (var s = m.childNodes,
                                               r = parseFloat(m.style.top) || 0 + c, m = parseFloat(m.style.left) || 0 + e, u = 0; u < s.length; u += 1) {
          var w = s[u];
          if ("CANVAS" === w.tagName || "IMG" === w.tagName) h = parseFloat(w.style.top) || 0,
            n = parseFloat(w.style.left) || 0,
            p = parseFloat(w.style.width) || w.width,
            q = parseFloat(w.style.height) || w.height,
            f.drawImage(w, n + m, h + r, p, q)
        }
      }
      return d.toDataURL()
    }
  }); g.Sb.vb({
    d8: function() {
      this.by = !1;
      g.l.ef && ("3D" === this.D.view.type ? this.Z4() : this.X4());
      g.l.W || this.U4()
    },
    iba: function() {
      g.l.ef && ("3D" === this.D.view.type ? this.r9() : this.q9());
      g.l.W || this.m9()
    },
    rotateEnableChanged: function() {
      this.hla = this.get("rotateEnable");
      g.l.ef && this.UV && "3D" !== this.D.view.type && (this.hla ? this.UV() : this.Sia())
    },
    zoomEnableChanged: function() {
      this.get("zoomEnable") ? (g.l.ef && this.GK && "3D" !== this.D.view.type && this.GK(), g.l.W || this.W4()) : (g.l.ef && this.uN && this.uN(), g.l.W || this.p9())
    },
    mousewheelChanged: function() {},
    gN: function(a) {
      a && (this.by = a.Jr)
    },
    wt: function() {
      this.by = !1
    },
    yh: function(a, b, c) {
      var d, e = {};
      a || (a = window.event);
      var f = g.C.Ck(a, this.Qa.Mc);
      g.l.ef && ("touchend" !== a.type ? this.S.XS = f: f = this.S.XS);
      e.sb = f;
      e.Ma = this.Ef(f);
      e.Ma && (e.Ma = e.Ma.toFixed(3));
      e.Mf = this.se(e.Ma);
      c || (c = this.by ? this.by ? [this.by] : null: this.b7(e.Ma)) && 0 < c.length && c[0].np && (d = c[0].np, e.Jr = c[0]);
      d || (d = this);
      e.pd = d;
      e.Voa = a.altKey;
      e.ctrlKey = a.ctrlKey;
      e.button = void 0 === a.button ? 0 : a.button;
      b || (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
      return e
    },
    SI: function(a) {
      return a && a !== this && a !== document
    },
    KJ: function() {
      var a = this.S;
      a.$e && (a.Ei.sb.x === a.$e.x && a.Ei.sb.y === a.$e.y ? a.Yf = !1 : (a.Yf = !0, a.un || (a.Vn.o("dragstart", a.Un), a.un = !0), a.Vn.o("dragging", a.Ei), a.$e = a.Ei.sb))
    },
    Xla: function(a) {
      for (var b = [], c = 0; c < a.length; c += 1) a[c] && (b = b.concat(a[c]));
      return b
    },
    Xv: function(a, b, c) {
      return a && b && (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y) < (c || 10)
    },
    b7: function(a) {
      var b = this.CE();
      if (!b) return null;
      var c, d = this;
      this.za.sort(function(a, b) {
        return a.get("zIndex") > b.get("zIndex") ? -1 : 1
      });
      b.vs(a, this.za,
        function(a) {
          c = a;
          c = d.Xla(c)
        },
        function() {
          c = []
        });
      return c
    }
  }); g.Sb.vb({
    j8: function() {
      this.im = {};
      this.g("moveend", this.a_, this);
      g.l.sk && (g.l.AG || g.l.ED) && this.g("zoomend", this.sP, this);
      this.g("movestart", this.b_, this);
      this.g("zoomstart", this.g_, this);
      this.g("zoomend", this.f_, this);
      this.GH();
      this.jr = 0;
      this.fC = {};
      "undefined" === typeof window.requestAnimationFrame && (this.jr = 2)
    },
    g_: function() {
      2 !== this.jr && 12 === this.get("zoom") && (this.jr = 1, g.c.wz.start(this.fC));
      this.pj = !0
    },
    f_: function() {
      1 === this.jr && 13 !== this.get("zoom") && (this.jr = 0, g.c.wz.cancel(this.fC));
      this.pj = !1;
      this.set("display")
    },
    TU: function(a, b) {
      this.im.left = 0 < a;
      this.im.right = 0 > a;
      this.im.dB = 0 < b;
      this.im.mL = 0 > b
    },
    Fr: function() {
      this.im.left = !1;
      this.im.right = !1;
      this.im.dB = !1;
      this.im.mL = !1
    },
    l9: function() {
      this.H("moveend", this.a_, this);
      g.l.sk && (g.l.AG || g.l.ED) && this.H("zoomend", this.sP, this);
      this.H("movestart", this.b_, this);
      this.H("zoomstart", this.g_, this);
      this.H("zoomend", this.f_, this);
      this.n9()
    },
    a_: function(a) {
      this.Yf = !1;
      this.Fr();
      this.q0(); ! a.bZ && this.D.get("limitBounds", null, !0) ? (a = this.Cda()) && !a.Ya(this.get("center")) ? this.fG(this.get("zoom"), a, !1, !0) : this.ha("moveend") : this.ha("moveend");
      this.set("display")
    },
    b_: function() {
      this.Yf = !0;
      this.Fr()
    },
    dragEnableChanged: function() { (this.pz = this.get("dragEnable")) ? this.FH() : this.sJ()
    },
    ha: function(a, b) {
      if (this.D.Vd(a)) {
        var c;
        b && (c = b.TZ ? {
          type: a,
          newsize: b.TZ,
          oldsize: b.Tia
        }: {
          type: a,
          pixel: b.sb,
          target: this.D,
          lnglat: b.Mf
        });
        this.D.o(a, c)
      }
    },
    GH: function() {
      this.g("click", this.zT);
      this.g("dblclick", this.DT);
      g.l.ef && this.KQ();
      g.l.W || this.V4()
    },
    n9: function() {
      this.H("click", this.zT);
      this.H("dblclick", this.DT);
      g.l.ef && this.oT();
      g.l.W || this.o9()
    },
    OC: function(a, b) {
      var c = this.get("targetLevel") || this.get("zoom"),
        c = 0 < b ? Math.floor(c) + 1 : Math.ceil(c) - 1,
        c = Math.min(Math.max(c, this.get("zooms")[0]), this.get("zooms")[1]);
      c === this.get("zoom") || this.hf && this.hf.ft && c === this.hf.end || this.Rw(c, !1, a)
    },
    zT: function(a) {
      this.ha("click", a)
    },
    DT: function(a) {
      this.get("doubleClickZoom") && this.get("zoomEnable") && this.OC(a.Ma, 1);
      this.ha("dblclick", a)
    },
    upa: function(a) {
      this.OC(a.Pta, a.t1);
      this.ha("touchend", a)
    },
    FH: function() {
      this.pz && ("3D" === this.D.view.type ? (this.g("dragstart", this.JT), this.g("dragging", this.FT), this.g("dragend", this.HT)) : (this.g("dragstart", this.IT), this.g("dragging", this.ET), this.g("dragend", this.GT)))
    },
    sJ: function() {
      this.pz || ("3D" === this.D.view.type ? (this.H("dragstart", this.JT), this.H("dragging", this.FT), this.H("dragend", this.HT)) : (this.H("dragstart", this.IT), this.H("dragging", this.ET), this.H("dragend", this.GT)))
    },
    IT: function(a) {
      this.gN(a);
      this.Fr();
      this.jg = !0;
      this.S.iv = a.sb.x;
      this.S.qz = a.sb.y;
      this.ce && (this.ce.stop(), this.Pp(!0));
      this.ha("dragstart");
      this.ha("movestart");
      this.o("movestart", a);
      this.dma()
    },
    ET: function() {
      var a = this.S,
        b = a.Ei.sb.x - a.iv,
        c = a.Ei.sb.y - a.qz;
      if (c || b) {
        this.S.Yf = !0;
        this.TU(b, c);
        a.iv = a.Ei.sb.x;
        a.qz = a.Ei.sb.y;
        var a = b,
          d = c,
          e = this.rotation;
        e && (e *= Math.PI / 180, a = b * Math.cos(e) + Math.sin(e) * c, d = -Math.sin(e) * b + Math.cos(e) * c);
        a = this.get("centerCoords").Sa((new g.F(a, d)).Bd(this.P)); (d = this.nW(a)) && (c = Math.round(this.Ne(d).Sa(this.Ne(a)).y));
        this.mq(this.Qa.zp, b, c);
        a.x = (a.x + g.c.ib) % g.c.ib;
        this.set("centerCoords", a, !0);
        this.set("center", this.se(a), !0);
        this.Gs && (this.kg ? (a = new Date, this.pr = 100 < a - this.kg ? new g.F(0, 0) : new g.F(b, c), this.kg = a) : this.kg = new Date);
        this.ha("dragging");
        this.ha("mapmove")
      } else this.S.Yf = !1,
        this.pr = null,
        this.Fr()
    },
    mq: function(a, b, c) {
      if (a && !(1 > Math.abs(b) && 1 > Math.abs(c))) {
        var d = parseFloat(a.style.top) || 0,
          e = parseFloat(a.style.left) || 0,
          f = "";
        this.rotation && (f = g.h.Jq[g.h.Af] + ":rotate(" + this.rotation + "deg);overflow:visible;");
        a.style.cssText = "position:absolute;top:" + (d + c) + "px;left:" + (e + b) + "px;" + f
      }
    },
    nW: function(a) {
      var b = this.D.view.nQ(),
        c = this.EO.height * this.P / 2;
      return a.y < b.Vb + c ? (a.y = b.Vb + c, a) : a.y > b.nc - c ? (a.y = b.nc - c, a) : null
    },
    GT: function() {
      this.wt();
      100 < new Date - this.kg && (this.pr = null);
      this.S.$e = null;
      this.jg = !1;
      this.Fr();
      this.ha("dragend");
      if (this.Gs && this.pr) if (this.S.Yf) {
        var a = this.pr,
          b = new g.F(0, 0);
        this.ce = new g.ri(a, b,
          function(a, b, e) {
            return 600 <= e ? b: a.Bd(1 - Math.pow(e / 600, 2)).floor()
          },
          1);
        this.ce.qo = function(a) {
          if (2 > Math.abs(a.x) && 2 > Math.abs(a.y)) this.ce.stop(),
            this.o("moveend"),
            this.Pp(),
            this.pr = this.kg = null;
          else {
            var b = a.x,
              e = a.y,
              f = this.rotation;
            f && (f *= Math.PI / 180, b = a.x * Math.cos(f) + Math.sin(f) * a.y, e = -Math.sin(f) * a.x + Math.cos(f) * a.y);
            b = this.get("centerCoords").Sa((new g.F(b, e)).Bd(this.P));
            e = this.nW(b);
            f = a.y;
            e && (f = Math.round(this.Ne(e).Sa(this.Ne(b)).y));
            this.mq(this.Qa.zp, a.x, f);
            b.x = (b.x + g.c.ib) % g.c.ib;
            this.set("centerCoords", b, !0);
            this.set("center", this.se(b), !0);
            this.ha("mapmove")
          }
        };
        this.ce.Ul(this)
      } else this.o("moveend"),
        this.Pp(!0),
        this.pr = this.kg = null;
      else this.o("moveend"),
        this.Pp(),
        this.pr = this.kg = null
    },
    dma: function() {
      if (!this.S.refresh) {
        var a = this,
          b = null;
        this.S.refresh = setInterval(function() {
            b !== a.S.$e && (a.set("display", 0), b = a.S.$e)
          },
          g.l.W ? 400 : 100)
      }
    },
    sP: function() {
      if (g.l.sk && (g.l.AG || g.l.ED)) {
        for (var a = this.Qa.q.childNodes,
               b = 0; b < a.length; b += 1) {
          var c = a[b];
          c instanceof HTMLCanvasElement && (c.width = 0);
          "amap-e" === c.className && (c.style.height = "0")
        }
        for (b = 0; b < this.za.length; b += 1) c = this.za[b],
        "undefined" !== typeof AMap.IndoorMap && c instanceof AMap.IndoorMap && (c.Lr && (c.Lr.width = 0), c.Ju && (c.Ju.width = 0))
      }
    },
    Pp: function(a) {
      this.S.refresh && (clearInterval(this.S.refresh), this.S.refresh = null);
      a || (this.sP(), this.set("display", 0))
    },
    q0: function(a) {
      this.set("refresh", a)
    }
  }); g.Sb.vb({
    setZoomSlow: function(a) {
      this.fG(a, null, !this.get("animateEnable"))
    },
    setPanTo: function(a) {
      this.fG(null, a, !this.get("animateEnable"))
    },
    zoomAndCenterChanged: function(a) {
      var b = a[0];
      b < this.get("zooms")[0] && (b = this.get("zooms")[0]);
      b > this.get("zooms")[1] && (b = this.get("zooms")[1]);
      this.fG(b, a[1], a[2] || !this.get("animateEnable"))
    },
    zoomChanged: function() {
      this.P = Math.pow(2, 20 - this.get("zoom"));
      this.o("closeOverlays");
      this.set("display")
    },
    rotationChanged: function(a) {
      this.rotation = this.get("rotation");
      this.D.o("rotate", {
        rotation: this.rotation || 0
      }); ! 0 !== a && this.set("display", 0)
    },
    pitchChanged: function() {
      this.pitch = this.get("pitch");
      this.D.o("pitch", {
        pitch: this.pitch || 0
      });
      this.set("display", 0)
    },
    centerCoordsChanged: function() {
      this.o("closeOverlays");
      this.$oa ? this.UF(!0) : this.UF(!1)
    }
  }); g.gQ = g.X.extend({
    ea: [g.la, g.Ee],
    r: function(a, b) {
      this.type = "2D";
      this.Pf(b, !0);
      a && this.dda(a)
    },
    dda: function(a) {
      this.map = a;
      this.ve(["size", "refresh", "maxPitch"], a);
      this.centerChanged();
      a.ve(["zoom", "center", "centerCoords", "rotation", "pitch"], this)
    },
    nQ: function() {
      this.wH || this.gea();
      return this.wH
    },
    gea: function() {
      var a;
      if (this.get("center") instanceof g.T) {
        a = new g.je( - 180, -85, 180, 85);
        var b = this.map.Lb(a.Hi());
        a = this.map.Lb(a.Im());
        this.wH = {
          yc: b.x,
          Vb: b.y,
          xc: a.x,
          nc: a.y
        }
      } else a = this.map.get("limitBounds", null, !0),
        this.wH = {
          yc: a[0],
          Vb: a[1],
          xc: a[2],
          nc: a[3]
        }
    },
    JE: function() {
      var a = this.map,
        b = this.get("zoom");
      return {
        zoom: b,
        Rh: this.get("center"),
        Ba: this.Bk(),
        lb: this.get("centerCoords"),
        rotation: parseInt(this.get("rotation")),
        af: a.get("crs"),
        P: Math.pow(2, 20 - b),
        fe: Math.round(b),
        uf: Math.pow(2, 20 - Math.round(this.get("zoom")))
      }
    },
    centerChanged: function() {
      this.set("centerCoords", this.map.Lb(this.get("center")).toFixed(3), !0)
    },
    centerCoordsChanged: function() {
      var a = this.map,
        b = this.nQ(),
        c = this.get("centerCoords"),
        d = a.getSize(),
        e = this.get("zoom", null, !0),
        a = this.get("center", null, !0),
        d = d.height * Math.pow(2, 20 - e) / 2;
      a instanceof g.T ? c.x = (c.x + 268435456) % 268435456 : 0 > c.x ? c.x = 0 : c.x > b.xc && (c.x = b.xc);
      c.y < b.Vb + d ? c.y = b.Vb + d: c.y > b.nc - d && (c.y = b.nc - d);
      this.set("center", this.map.se(c), !0)
    }
  }); g.EB = g.gQ.extend({
    Bk: function() {
      var a = this.get("size"),
        b = this.get("centerCoords"),
        c = parseInt(this.get("rotation")) % 360,
        d = this.get("zoom", null, !0),
        e = Math.pow(2, 20 - d),
        c = Math.PI * c / 180,
        a = new g.F((Math.abs(a.width * Math.cos(c)) + Math.abs(a.height * Math.sin(c))) / 2, (Math.abs(a.width * Math.sin(c)) + Math.abs(a.height * Math.cos(c))) / 2),
        e = new g.Te(b.Sa(a.Bd(e)), b.add(a.Bd(e))),
        c = this.map.get("targetLevel");
      if (c > d - 1) {
        var f = Math.pow(2, 20 - c);
        e.z2 = new g.Te(b.Sa(a.Bd(f)), b.add(a.Bd(f)))
      }
      e.r1 = c || d;
      e.dc = a;
      return e
    },
    Qfa: function(a) {
      var b = this.get("size"),
        c = this.get("centerCoords"),
        d = parseInt(this.get("rotation")) % 360,
        d = Math.PI * d / 180,
        b = new g.F((Math.abs(b.width * Math.cos(d)) + Math.abs(b.height * Math.sin(d))) / 2, (Math.abs(b.width * Math.sin(d)) + Math.abs(b.height * Math.cos(d))) / 2);
      a = Math.pow(2, 20 - a);
      return new g.Te(c.Sa(b.Bd(a)), c.add(b.Bd(a)))
    },
    ed: function() {
      var a = this.Bk(),
        b = a.jd.x,
        c = a.Mb.y,
        a = new g.F(a.Mb.x, a.jd.y),
        b = new g.F(b, c);
      return new g.je(this.map.se(a), this.map.se(b))
    },
    zoomChanged: function() {},
    Ne: function(a, b) {
      this.get("size");
      var c = a.ab(),
        d = this.get("centerCoords"),
        e = c.Sa(d);
      e.x < -g.c.ib / 2 ? e.x += g.c.ib: e.x > g.c.ib / 2 && (e.x -= g.c.ib);
      var c = this.get("size").SA().Rc(2),
        f = this.get("rotation") * Math.PI / 180,
        d = e.x * Math.cos(f) - Math.sin(f) * e.y,
        e = Math.sin(f) * e.x + Math.cos(f) * e.y;
      return c.add((new g.F(d, e)).Bd(Math.pow(2, (b || this.get("zoom")) - 20)))
    },
    Ef: function(a, b) {
      var c = this.get("size").SA().Rc(2),
        d = a.Sa(c),
        e = this.get("rotation") * Math.PI / 180,
        c = d.x * Math.cos(e) + Math.sin(e) * d.y,
        d = -Math.sin(e) * d.x + Math.cos(e) * d.y,
        c = this.get("centerCoords").add((new g.F(c, d)).Bd(Math.pow(2, 20 - (b || this.get("zoom")))));
      c.x = (c.x + 268435456) % 268435456;
      return c
    }
  }); g.pH = g.gQ.extend({
    r: function(a, b) {
      this.Cg = new g.Fd;
      this.Dc = new g.Fd([1, 0, 0, 0, 0, -1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1]);
      arguments.callee.ma.apply(this, arguments);
      this.scale = 1;
      this.type = "3D";
      this.Mw = null;
      this.K_ = "";
      this.R = ["", 0, 0, "", 0];
      this.Mw = {}
    },
    refreshChanged: function() {
      this.Oo()
    },
    zoomChanged: function(a) {
      this.Oo();
      this.R[4] = a
    },
    centerChanged: function(a) {
      arguments.callee.ma.apply(this, arguments);
      this.Oo()
    },
    centerCoordsChanged: function(a) {
      arguments.callee.ma.apply(this, arguments);
      this.Oo();
      this.R[0] = a.toString()
    },
    rotationChanged: function(a) {
      this.Oo();
      this.R[2] = a
    },
    pitchChanged: function(a) {
      this.ue.pitch = Math.min(this.get("maxPitch"), Math.max(a, 0));
      this.Oo();
      this.R[1] = a
    },
    Oo: function() {
      if (!this.vna() && (this.iP(), this.Tea(), this.map)) {
        var a = this,
          b = function() {
            a.map.camera = a.AX();
            a.map.o("camerachange", {
              map: a.map,
              camera: a.map.camera
            })
          };
        a.map.pa ? b() : this.map.g("complete", b, this)
      }
    },
    AX: function() {
      return {
        height: this.uk,
        fov: this.Jfa,
        aspect: this.Ry,
        near: this.Ov,
        far: this.sE,
        position: this.tda,
        rotation: this.ue.rotation,
        pitch: this.ue.pitch
      }
    },
    Tea: function() {
      this.H8 = g.c.xe()
    },
    Dv: function() {
      var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 300;
      return g.c.xe() - this.H8 > a
    },
    iP: function() {
      var a = this.get("centerCoords"),
        b = this.get("pitch"),
        c = this.get("rotation"),
        d = (new g.Fd).R0( - a.x + g.c.rc.x, -a.y + g.c.rc.y, 0);
      this.tda = {
        x: a.x - g.c.rc.x,
        y: a.y - g.c.rc.y
      };
      a = (new g.Fd).ow(180 - b, 1, 0, 0);
      this.Zja = (new g.Fd).set(a);
      c = (new g.Fd).ow(c, 0, 0, 1);
      this.zq = (new g.Fd).set(c);
      this.Ifa = d.Jf();
      this.Dc = (new g.Fd).R0(0, 0, -this.uk).multiply(a.multiply(c.multiply(d))).toFixed(8);
      this.Dc.ye = this.Dc.Jf()
    },
    vna: function(a) {
      a = a || this.get("zoom");
      var b = this.get("size"),
        c = b.width,
        b = b.height;
      if (!c || !b) return ! 0;
      this.Ry = c /= b;
      b = b / 2 * Math.pow(2, 20 - a);
      a = g.c.Td((56 - a) * Math.PI / 180, 2);
      var d = g.c.Td(b / Math.tan(a / 2), 0);
      2400 > d && (d = 2400, a = 2 * Math.atan(b / d));
      this.Jfa = a;
      this.uk = d;
      this.Ov = this.uk / 10;
      this.sE = 50 * this.uk;
      this.Fea = (this.uk - this.Ov) / (this.sE - this.Ov);
      this.Cg.O0(a, c, this.Ov, this.sE);
      this.Cg.ye = this.Cg.Jf();
      a = this.Cg;
      var c = new g.KP,
        b = c.rA,
        e = this.Cg.elements,
        d = e[0],
        f = e[1],
        h = e[2],
        k = e[3],
        l = e[4],
        m = e[5],
        n = e[6],
        p = e[7],
        q = e[8],
        s = e[9],
        r = e[10],
        u = e[11],
        w = e[12],
        v = e[13],
        t = e[14],
        e = e[15];
      qc(b[0], k - d, p - l, u - q, e - w).normalize();
      qc(b[1], k + d, p + l, u + q, e + w).normalize();
      qc(b[2], k + f, p + m, u + s, e + v).normalize();
      qc(b[3], k - f, p - m, u - s, e - v).normalize();
      qc(b[4], k - h, p - n, u - r, e - t).normalize();
      qc(b[5], k + h, p + n, u + r, e + t).normalize();
      a.PL = c
    },
    JE: function() {
      var a = this.map;
      a.map.kt && (this.Oo(), this.R[3] = a.get("size").toString());
      var b = this.R.toString();
      if (b !== this.K_) {
        var c = this.get("zoom"),
          d = this.Mw;
        d.zoom = c;
        d.Ry = this.Ry;
        d.top = this.top;
        d.Ba = this.Bk();
        d.lb = this.get("centerCoords");
        d.rotation = a.get("rotateEnable") && parseInt(this.get("rotation")) || 0;
        d.pitch = this.get("pitch") || 0;
        d.wua = this.get("yaw");
        d.af = a.get("crs");
        d.P = Math.pow(2, 20 - c);
        d.fe = Math.round(c);
        d.i_ = Math.floor(c);
        d.uf = Math.pow(2, 20 - d.fe);
        d.tja = Math.pow(2, 20 - d.i_);
        d.Cg = this.Cg;
        d.Dc = this.Dc;
        this.K_ = d.key = b
      }
      this.Mw.Rh = this.get("center");
      this.Mw.Ko = g.c.xe();
      this.Mw.Dv = this.Dv();
      return this.Mw
    },
    Bk: function() {
      var a = this.get("size"),
        b = a.width,
        a = a.height;
      if (!b || !a) return null;
      var c, d;
      d = 0;
      var e = new g.F(0, d);
      c = this.Ef(e, !0);
      if (55 < this.ue.pitch || !c) for (; ! c;) d += a / 40,
        e.y = d,
        c = this.Ef(e, !0);
      this.top = d / a;
      e.x = b;
      d = this.Ef(e, !0);
      var f = 0,
        h = this.ue.zoom;
      50 <= this.ue.pitch && 18 <= h && (f = 0);
      e.y = a + f;
      f = this.Ef(e, !0);
      e.x = 0;
      h = this.Ef(e, !0);
      c = [c.Uk(), d.Uk(), f.Uk(), h.Uk(), c.Uk()];
      c = new g.N2(c);
      e.x = b / 2;
      e.y = a + 256;
      c.QK = this.Ef(e, !0);
      return c
    },
    ed: function() {
      var a = this.Bk();
      if (a) {
        for (var b = [], c = 0; c < a.path.length; c += 1) {
          var d = this.map.se(new g.F(a.path[c][0], a.path[c][1]));
          b.push(d)
        }
        return new g.hn(b)
      }
    },
    Ne: function(a, b, c) {
      a.z = c || 0;
      a = this.NZ([a]);
      a = a[0];
      return new g.F(a.x, a.y)
    },
    DX: function(a) {
      var b = this.get("size");
      a = new g.$j([a.x / b.width * 2 - 1, 1 - a.y / b.height * 2, -1, 1]);
      a.multiply(this.Ov);
      return this.Cg.ye.Bg(a)
    },
    Ef: function(a, b, c) {
      var d;
      d = this.map ? this.map.getSize(!0) : this.get("size");
      var e = a.x / d.width * 2 - 1;
      d = 1 - a.y / d.height * 2;
      a = new g.$j([e, d, -1, 1]);
      a.multiply(this.Ov);
      if (!this.Cg.ye) return null;
      a = this.Cg.ye.Bg(a);
      e = new g.$j([e, d, 1, 1]);
      e.multiply(this.sE);
      d = this.Cg.ye.Bg(e);
      var f = this.Dc.ye,
        e = f.Bg(a).elements;
      a = f.Bg(d).elements;
      c = (e[2] - ( - c || 0)) / (e[2] - a[2]);
      if (0 > a[2] || 0 > c || b && c > 2.5 * this.Fea) return null;
      b = e[0] - c * (e[0] - a[0]);
      c = e[1] - c * (e[1] - a[1]);
      return isNaN(b) || isNaN(c) ? null: (new g.F(b, c)).add(g.c.rc)
    },
    NZ: function(a) {
      for (var b = this.get("centerCoords"), c = g.c.rc.x, d = g.c.rc.y, e = this.get("size"), f = g.c.ib, h = b.x + f / 2, b = b.x - f / 2, k = [], l = new g.$j([0, 0, 0, 1]), m = l.elements, n = new g.F(0, 0), p = g.Fd.multiply(this.Cg, this.Dc), q = 0, s = a.length; q < s; q++) if (a[q]) {
        n.x = a[q].x;
        n.y = a[q].y;
        n.z = -a[q].z || 0;
        h < n.x ? n.x -= f: b > n.x && (n.x += f);
        m[0] = n.x - c;
        m[1] = n.y - d;
        m[2] = n.z;
        var r = p.Bg(l);
        r.multiply(1 / r.elements[3]);
        k[q] = {
          x: (r.elements[0] + 1) / 2 * e.width,
          y: ( - r.elements[1] + 1) / 2 * e.height,
          z: r.elements[2]
        }
      }
      return k
    },
    Sna: function(a) {
      var b = this.get("size");
      a = this.Cg.Bg(this.Dc.Bg((new g.$j).copy(a)));
      a.multiply(1 / a.elements[3]);
      b = new g.F((a.elements[0] + 1) / 2 * b.width, ( - a.elements[1] + 1) / 2 * b.height);
      b.z = a.elements[2];
      return b
    }
  }); g.c.rc = new g.F(215440491, 106744817); g.Sb.vb({
    lW: function(a, b, c) {
      var d = this;
      d.KG ? (g.c.RK(d.KG), d.KG = null) : (d.ha("zoomstart", {
        zoom: a
      }), d.o("zoomstart"));
      d.KG = g.c.TF(function() {
          d.KG = null;
          d.ha("zoomend", {
            zoom: a
          });
          d.ha("zoomchange", {
            zoom: a
          });
          d.o("zoomend")
        },
        {
          timeout: 150
        });
      a = g.c.Td(a, 2);
      d.Rw(a, !0, b, c)
    },
    Rw: function(a, b, c, d) {
      var e = this.get("zoom");
      if (e !== a) {
        var f = this.get("zooms");
        "3D" !== this.D.view.type && (g.l.W || g.l.re) && (b = !0);
        a = a || e;
        a = Math.min(Math.max(a, f[0]), f[1]);
        var h = a !== e,
          k = !!c;
        this.ce && (this.ce.stop(), this.ce = null);
        c = c || this.get("centerCoords");
        var l = this.Ne(c);
        c = function(c) {
          b || (c = g.c.Td(c, 2));
          var d = this.Ef(l);
          this.set("zoom", c);
          var e = this.Ef(l),
            d = e && e ? e.Sa(d) : new g.F(0, 0);
          this.set("centerCoords", this.get("centerCoords").Sa(d).toFixed(3));
          d.x && d.y && this.ha("mapmove");
          c === a && a << 0 === a && (this.set("targetLevel", null), h && (this.ha("zoomchange"), this.ha("zoomend")), k && this.o("moveend"), this.o("zoomend"), this.hf = null)
        };
        var m;
        this.ld && this.ld.ft && (this.ld.stop(), this.ld.CM && (d = !0), this.ld.Dz && (m = !0), this.ld = null, this.set("targetLevel", null));
        this.hf && this.hf.ft && (this.hf.stop(), d = !0, this.hf.Dz && (m = !0), this.hf = null, this.set("targetLevel", null));
        h && !d && this.ha("zoomstart");
        k && !m && this.ha("movestart");
        this.o("zoomstart");
        b ? c.call(this, a) : (this.hf = new g.ri(e, a, null, 0.04), this.hf.CM = h, this.hf.Dz = k, this.hf.transition = function(a, b, c) {
          return c >= g.w.BD ? b: (b - a) * (1 - Math.pow(1 - c / g.w.BD, 4)) + a
        },
          this.hf.qo = c, this.hf.Ul(this, !0), this.set("targetLevel", a))
      }
    },
    fG: function(a, b, c, d) {
      var e = null;
      a || (a = this.ld ? this.ld.mma: this.get("targetLevel") || this.get("zoom"));
      var e = b ? this.Lb(b).toFixed(3) : this.ld ? this.ld.q1: this.get("centerCoords"),
        f = a !== this.get("zoom"),
        h = !e.Ya(this.get("centerCoords")),
        k = b = !1;
      this.hf && this.hf.ft && (this.hf.stop(), b = !0, this.hf.Dz && (k = !0), this.hf = null, this.set("targetLevel", null));
      this.ld && this.ld.ft && (this.ld.stop(), this.ld.CM && (b = !0), this.ld.Dz && (k = !0), this.ld = null, this.set("targetLevel", null));
      this.ce && (this.ce.stop(), this.ce = null);
      if (f || h) {
        if (!this.D.view.Bk().contains(e) || f && "3D" !== this.D.view.type && (g.l.W || g.l.re)) c = !0;
        if (c) f && (b || (this.o("zoomstart"), this.ha("zoomstart")), this.set("zoom", a), this.ha("zoomchange"), this.ha("zoomend"), this.o("zoomend")),
        h && (k || d || (this.ha("movestart"), this.o("movestart")), this.set("centerCoords", e), this.ha("mapmove"), this.o("moveend", {
          bZ: d
        })),
          this.set("targetLevel", null);
        else {
          this.set("targetLevel", a);
          var l = a - this.get("zoom"),
            m = e.Sa(this.get("centerCoords")).toFixed(3);
          this.ld = new g.ri(1, 0, null, 0.001);
          this.ld.CM = f;
          this.ld.Dz = h;
          this.ld.q1 = e;
          this.ld.mma = a;
          this.ld.transition = function(a, b, c) {
            return Math.pow(1 - Math.min(g.w.BD, c) / g.w.BD, 2)
          };
          this.ld.qo = function(b) {
            0.02 > b ? (this.ld && (this.ld.stop(), this.ld = null), f && (this.set("zoom", a), this.ha("zoomchange"), this.ha("zoomend"), f = !1, this.o("zoomend")), h && (this.set("centerCoords", e), this.o("mapmove"), this.o("moveend", {
              bZ: d
            })), this.set("targetLevel", null)) : (f && this.set("zoom", a - l * b), h && (b = e.Sa(m.Bd(b)).toFixed(3), this.set("centerCoords", b), this.ha("mapmove")));
            this.set("display", 1)
          };
          this.ld.Ul(this);
          f && !b && (this.o("zoomstart"), this.ha("zoomstart")); ! h || k || d || (this.o("movestart"), this.ha("movestart"))
        }
      }
    }
  }); g.q = {}; g.q.Gc = g.X.extend({
    ea: [g.la, g.Ee],
    r: function(a, b) {
      this.ba = a;
      this.vd = [3, 18];
      this.GB = g.c.Pb(this);
      a && this.ve(["opacity", "visible", "zIndex", "zooms"], a);
      a.So = b.D.getViewMode_();
      this.f = b;
      this.V("display", b)
    },
    Of: function() {
      this.Ji && this.ZK();
      if (g.Ha && g.Ha.Qo && g.Ha.Qo.length) {
        var a = g.c.indexOf(g.Ha.Qo, this); - 1 !== a && (g.Ha.Qo = g.c.Dm(g.Ha.Qo, a))
      }
      if (a = this.Cb) {
        if (a.length) for (var b = 0; b < a.length; b += 1) a[b].parentNode && a[b].parentNode.removeChild(a[b]);
        else a.parentNode && a.parentNode.removeChild(a);
        this.Cb = null
      }
      this.ba.Of && this.ba.Of();
      this.ba.Qh = !1;
      this.ba.q = null;
      this.Lo();
      this.M && (this.M.ds(), this.M = null);
      this.cn && (this.cn.ds(), this.cn = null)
    },
    ha: function(a, b) {
      this.ba.o(a, b)
    },
    visibleChanged: function() {
      this.set("display", 0)
    },
    zIndexChanged: function() {
      this.set("display", 0)
    },
    wO: function(a) {
      g.h.Eo(a, this.opacity)
    },
    opacityChanged: function() {
      var a = this.get("opacity");
      this.opacity = Math.min(Math.max(0, a), 1);
      if (a = this.Cb) if (a.length) for (var b = 0; b < a.length; b += 1) this.wO(a[b]);
      else this.wO(a)
    },
    WL: function() {
      var a = this.get("bounds");
      if (a) {
        if (a instanceof g.je) {
          var b = a.Hi(),
            a = a.Im(),
            c = this.f.Lb(new g.T(180, 0)).x,
            d = this.f.Lb(b),
            e = this.f.Lb(a),
            f = this.f.get("center");
          b.O > a.O && (0 < f.O ? e.x += c: d.x -= c);
          this.G = [d.x, d.y, e.x, e.y]
        } else a instanceof g.Te ? this.G = [a.Mb.x, a.Mb.y, a.jd.x, a.jd.y] : a instanceof g.FB && "3D" === this.ba.So && (b = a.path[1], d = this.f.Lb(a.path[0]), e = this.f.Lb(b), this.G = [d.x, d.y, e.x, e.y, a.F0, a.height]);
        return this.G
      }
      return null
    }
  });
  var xc = function() {
    function a(a) {
      this.rH[g.c.Pb(a)] = a;
      return this
    }
    function b(a) {
      this.rH[g.c.Pb(a)] = null;
      return this
    }
    return function() {
      function c() {
        var a = c.rH,
          b, f = [],
          h;
        for (h in a) a.hasOwnProperty(h) && f.push(a[h]);
        for (a = f.length - 1; 0 <= a; a -= 1) h = f[a].apply(this, arguments),
        void 0 !== h && (b = h);
        return b
      }
      c.rH = {};
      c.CV = a;
      c.Ysa = b;
      return c
    }
  } (); g.zf = g.X.extend({
    ea: [g.la],
    r: function(a, b) {
      this.yn = a | 0;
      this.IB = !!b;
      this.count = 0;
      this.xN = xc();
      this.clear();
      this.ay = []
    },
    ko: function() {
      return ! this.count
    },
    Ira: function() {
      return this.count >= this.yn
    },
    Fta: function(a) {
      this.yn !== a && (this.yn = a | 0) && this.nV(this.yn)
    },
    gd: function(a) {
      return !! this.f[a]
    },
    get: function(a, b) {
      var c = this.HR(a);
      return c ? c.value: b
    },
    set: function(a, b) {
      var c = this.HR(a);
      c ? c.value = b: (c = new g.zf.Xo(a, b), this.f[a] = c, this.pC(c), this.count += 1, this.count > this.yn && this.nV(this.yn))
    },
    No: function(a) {
      this.remove(a)
    },
    remove: function(a) {
      return this.f.hasOwnProperty(a) ? (this.ty(this.f[a]), !0) : !1
    },
    forEach: function(a, b) {
      for (var c = this.Ic.next; c !== this.Ic; c = c.next) a.call(b, c.value, c.key, this)
    },
    EF: function(a, b) {
      return this.f.hasOwnProperty(a) ? this.f[a].value: b
    },
    Dsa: function() {
      return this.Ic.next.value
    },
    Esa: function() {
      return this.Ic.Aa.value
    },
    shift: function() {
      return this.oU(this.Ic.next)
    },
    qW: function() {
      this.ay.length = 0
    },
    Yz: function(a) {
      this.ay.push(a)
    },
    push: function(a) {
      a = new g.zf.Xo("", a);
      0 === this.count ? (this.Ic.Aa = null, a.Aa = this.Ic, this.Ic.next = a) : (this.Iy.next = a, a.Aa = this.Iy);
      this.count += 1;
      this.Iy = a
    },
    jna: function(a) {
      a = new g.zf.Xo("", a);
      0 === this.count ? (this.Ic.Aa = null, a.Aa = this.Ic, this.Iy = this.Ic.next = a) : (this.Ic.next.Aa = a, a.next = this.Ic.next, a.Aa = this.Ic, this.Ic.next = a);
      this.count += 1
    },
    Oia: function() {
      if (this.count) {
        this.count -= 1;
        var a = this.Ic.next;
        a.next ? (a.next.Aa = this.Ic, this.Ic.next = a.next) : (this.Ic.next = null, this.Iy = this.Ic.Aa = null);
        a.next = null;
        a.Aa = null;
        return a.value
      }
      return null
    },
    pop: function() {
      return this.oU(this.Ic.Aa)
    },
    HR: function(a) {
      if (this.f.hasOwnProperty(a)) return a = this.f[a],
      this.IB && (a.remove(), this.pC(a)),
        a
    },
    pC: function(a) {
      this.IB ? (a.next = this.Ic.next, a.Aa = this.Ic, this.Ic.next = a, a.next.Aa = a) : (a.Aa = this.Ic.Aa, a.next = this.Ic, this.Ic.Aa = a, a.Aa.next = a)
    },
    nV: function(a) {
      if (! (this.count <= a || this.count < 2 * this.ay.length)) {
        for (var b = this.IB ? this.Ic.Aa: this.Ic.next, c = {},
               d = 0, e = this.ay.length; d < e; d++) c[this.ay[d]] = !0;
        for (a = Math.ceil(2 * a / 3); b && this.count > a && (d = this.IB ? b.Aa: b.next, b.key && !c[b.key] && (this.ty(b), this.xN(b.value)), b = d, b !== this.Ic && b !== this.Iy););
      }
    },
    ty: function(a) {
      a.remove();
      delete this.f[a.key];
      this.count -= 1
    },
    oU: function(a) {
      this.Ic !== a && this.ty(a);
      return a.value
    },
    clear: function() {
      this.f = {};
      this.Ic = new g.zf.Xo("", null);
      this.Ic.Aa = this.Ic.next = this.Ic;
      this.count = 0
    }
  }); g.zf.Xo = function(a, b) {
    this.key = a;
    this.value = b
  }; g.zf.Xo.prototype.Aa = null; g.zf.Xo.prototype.next = null; g.zf.Xo.prototype.remove = function() {
    this.Aa.next = this.next;
    this.next.Aa = this.Aa;
    this.next = this.Aa = null
  };
  function yc(a, b, c) {
    this.url = a;
    this.Kc = b;
    this.LL = c;
    this.wl = this.VF = !1
  }
  function Ac(a, b, c) {
    var d = Bc;
    return function() {
      return d.call(this, a, b, c)
    }
  }
  function Bc(a, b, c) {
    a.Bqa = +new Date;
    a.loaded = b;
    clearTimeout(a.yma);
    var d = a.iia;
    d.Ql.remove(a.url) && d.I8();
    d = a.Fha ? a.ia: a.na;
    a.ia = null; (c || b || a.LL) && a.Kc(b ? d: null, a);
    a.iZ ? (a.iZ.Bi(), a.iZ = null) : d && (d.onload = null, d.onerror = null, d.onabort = null, a.na = null)
  }
  g.qB = g.X.extend({
    Xoa: "assets/image/blank.gif",
    r: function(a, b, c) {
      this.timeout = b || 15E3;
      this.yo = new g.zf(1024);
      this.Ql = new g.zf(1024);
      this.xW = a;
      this.zL = c
    },
    OH: function(a) {
      a && this.Ql.count >= this.xW && (a = this.Ql.Ic.Aa.value, a.wl && (this.Ql.remove(a.url), this.uQ(a)));
      for (; this.yo.count && !(this.Ql.count >= this.xW);) this.p6(this.yo.shift())
    },
    I8: function() {
      if (!this.aR) {
        this.aR = !0;
        var a = this;
        setTimeout(function() {
            a.aR = !1;
            a.OH()
          },
          0)
      }
    },
    p6: function(a) {
      var b = document.createElement("img");
      a.Kfa && (b.crossOrigin = "anonymous");
      b.src = a.url;
      a.na = b;
      a.iia = this;
      a.startTime = +new Date;
      a.VF = !0;
      b.complete ? Bc(a, !0) : (this.Ql.set(a.url, a), b.onload = Ac(a, !0), b.onerror = Ac(a, !1, !0), b.onabort = Ac(a, !1), a.yma = setTimeout(Ac(a, !1, !0), this.timeout))
    },
    uQ: function(a) {
      a.VF && (Bc(a, !1), a.wl = !0, a.Gpa = !0)
    },
    Zra: function(a, b, c) {
      return this.hF(a.url, b, c, !0, a.qa.z + "_" + a.qa.x + "_" + a.qa.y)
    },
    hF: function(a, b, c, d, e) {
      var f = this.Ql.get(a);
      if (f && f.wl) f.wl = !1,
        f.Kc = b,
        f.LL = c;
      else {
        f = new yc(a, b, c);
        f.Fha = d;
        f.key = e;
        if (this.yo.get(g.c.Pb(f))) return;
        this.yo.set(g.c.Pb(f), f);
        this.OH(!0)
      }
      return f
    },
    cia: function(a, b, c) {
      var d = this.Ql.get(a);
      if (d && d.wl) d.wl = !1,
        d.Kc = b,
        d.LL = c;
      else {
        d = new yc(a, b, c);
        d.Kfa = !0;
        if (this.yo.get(g.c.Pb(d))) return;
        this.yo.set(g.c.Pb(d), d);
        this.OH(!0)
      }
      return d
    },
    kW: function(a) {
      a.wl || (a.wl = !0, this.yo.remove(g.c.Pb(a)))
    },
    clear: function(a) {
      this.yo.forEach(function(a) {
        a.wl = !0
      });
      this.yo.clear();
      if (a) for (; 0 < this.Ql.length;) a = this.Ql.pop(),
        this.uQ(a);
      else this.Ql.forEach(function(a) {
        a.wl = !0
      })
    }
  });
  function Cc(a, b, c) {
    this.z = a;
    this.x = b;
    this.y = c
  }
  Cc.prototype.ab = function() {
    return new Cc(this.z, this.x, this.y)
  }; Cc.prototype.toString = function() {
    return this.z + "/" + this.x + "/" + this.y
  }; g.eb = function(a) {
    var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
    this.qa = a;
    this.key = a.toString();
    this.Xe = b
  }; g.cm = Cc; g.q.eb = g.q.Gc.extend({
    r: function(a, b, c, d, e) {
      arguments.callee.ma.apply(this, arguments);
      this.V("tileSize", a);
      this.V("tiles", a);
      this.ve(["zooms", "type", "detectRetina", "errorUrl"], a);
      this.V("lang", b, !0);
      this.V("mapStyle", b, !0);
      this.V("style", b, !0);
      this.V("features", b, !0);
      var f = "overlayer" === a.get("type") || !1 === a.get("blend");
      this.fj = !f && !g.l.W;
      if (g.l.re || g.l.tua) this.fj = !1;
      var h = b.get("size"),
        h = h.width * h.height / 65536;
      this.ka = g.l.W && g.l.ka && this.get("detectRetina");
      g.l.kd && g.l.W && 9 < h && (this.fj = !1);
      this.Jh = !f && !a.Pi;
      this.Kh = !f && !a.Pi;
      this.qG = c;
      this.V("reload", a);
      a.Cha ? this.V("createTile", a) : this.V("tileFun", a);
      this.Me = d;
      this.FY = e
    },
    langChanged: function() {
      this.set("reload");
      this.ba.zo()
    },
    mapStyleChanged: function() {
      this.set("reload");
      this.ba.zo()
    },
    styleChanged: function() {
      this.f.Ub || (this.set("reload"), this.ba.zo())
    },
    featuresChanged: function() {
      this.set("reload");
      this.ba.zo()
    },
    reloadChanged: function() {
      this.set("display", 0)
    },
    tileFunChanged: function() {
      var a = this.qG || this.get("tileFun");
      this.zm = function(b, c, d) {
        var e = a(b.qa.x, b.qa.y, b.qa.z);
        if (!b.cq || b.cq.wl) b.loaded = !1,
          b.cq = ("3D" === this.f.D.view.type ? g.Ek.cia: g.Ek.hF).call(g.Ek, e,
            function(a) {
              b.cq = null;
              a ? c(a) : d()
            },
            !1)
      }
    },
    createTileChanged: function() {
      var a = this.ba.getCreateTile();
      this.zm = function(b, c, d) {
        a.call(this.j.ba, b.qa.x, b.qa.y, b.qa.z, c, d)
      };
      this.set("reload")
    },
    Bl: function() {
      return {
        Od: this.ba.get("tileSize"),
        visible: this.ba.get("visible"),
        G: this.WL(),
        vd: this.ba.getZooms(!0),
        ID: this.fj,
        Jh: this.Jh,
        Kh: this.Kh,
        opacity: this.ba.get("opacity"),
        zm: this.ba.get("createTile"),
        Jm: this.qG || this.ba.get("tileFun"),
        kd: this.ba.nq ? !1 : this.ba.get("detectRetina") && g.l.ka && g.l.W
      }
    },
    xl: function(a) {
      if (g.M.Ld.Fh) return new g.M.Ld.Fh(this, a)
    }
  }); g.Ek = new g.qB(6, null); g.q.Oc = g.q.Gc.extend({
    r: function(a, b) {
      this.pb = Math.min(2, window.devicePixelRatio || 1);
      this.kd = g.l.ka && !a.hi;
      this.map = b;
      this.Io = 0;
      this.Dk = !1;
      this.wf = this.Pe = 0;
      this.cg = [];
      arguments.callee.ma.apply(this, arguments);
      this.Ps = [];
      this.Fi = new g.q.U2;
      a && (this.V("style", a), this.V("cursor", a, !0), this.ama = a.get("stable") || !1, this.V("dataSources", a), this.V("bubble", a));
      this.V("display", b);
      this.R4()
    },
    Bl: function() {
      return {
        visible: this.get("visible"),
        vd: this.get("zooms"),
        opacity: this.get("opacity"),
        zIndex: this.get("zIndex"),
        Py: this.ba.get("alwaysRender") || !1
      }
    },
    dataSourcesChanged: function() {
      var a = this.get("dataSources");
      a && a.length ? "string" === typeof a ? (new g.Wa.jb(a)).g("complete",
        function(a) {
          this.q_(a.data);
          this.Kp = a.data;
          this.Dk = !0;
          this.set("display");
          this.pa = !0;
          this.ba.o("complete")
        },
        this) : a.length && (this.q_(a), this.Kp = a, this.Dk = !0, this.set("display"), this.pa = !0, this.ba.o("complete")) : this.clear()
    },
    getDatas: function() {
      return this.Kp
    },
    pna: function() {
      if (this.ba.hi) {
        var a = this.Tk;
        this.Pe = a.Pe;
        this.wf = a.wf
      }
    },
    ha: function(a, b) {
      var c = {
        type: a,
        data: "mouseout" === a ? this.G8 || null: b.Jr.Ua,
        target: this.ba
      };
      this.G8 = "mouseout" === a ? null: b.Jr.Ua;
      this.ba.o(a, c)
    },
    mc: function(a) {
      this.ha(a.type, a)
    },
    R4: function() {
      this.g("click", this.mc);
      this.g("dblclick", this.mc);
      this.g("mousedown", this.mc);
      this.g("mouseup", this.mc);
      this.g("mouseover", this.mc);
      this.g("mouseout", this.mc);
      this.g("touchstart", this.mc);
      this.g("touchend", this.mc)
    },
    Cpa: function() {
      this.H("click", this.mc);
      this.H("dblclick", this.mc);
      this.H("mousedown", this.mc);
      this.H("mouseup", this.mc);
      this.H("mouseover", this.mc);
      this.H("mouseout", this.mc);
      this.H("touchstart", this.mc);
      this.H("touchend", this.mc)
    },
    styleChanged: function() {
      this.Tk = this.get("style");
      this.pna();
      this.set("display", 0)
    },
    q_: function(a) {
      if (a) {
        this.clear();
        for (var b = 0; b < a.length; b += 1) {
          var c = a[b].lnglat;
          a[b].lnglat = g.c.Da(c);
          c = this.map.Lb(c);
          c = new g.ah({
            name: "point-" + g.c.Pb(this),
            Z: new g.ra.Tf([c.x, c.y], !0)
          });
          c.np = this;
          c.Ua = a[b];
          this.yD(c)
        }
      }
    },
    xga: function(a) {
      if ("geojson" === a) return new g.Z2({
        map: this.map
      });
      if ("topjson" === a) return new g.Ooa({
        map: this.map
      });
      if ("subway" === a) return new g.Joa({
        map: this.map
      })
    },
    Tja: function(a) {
      if (a) {
        var b = [],
          b = [],
          c = {};
        if (a.rules) {
          for (var b = a.rules,
                 d = 0,
                 e = b.length; d < e; d += 1) {
            for (var f = [], h = b[d].symbolizers, k = 0, l = h.length; k < l; k += 1) h[k].fill && (f[k] = new g.style.Uf.IP(h[k].fill)),
            h[k].stroke && (f[k] = new g.style.Uf.cQ(h[k].stroke));
            h = f;
            b[d].oG = h;
            b[d] = new g.style.L3(b[d])
          }
          c.rules = b
        }
        if (a.symbolizers) {
          b = a.symbolizers;
          a = 0;
          for (d = b.length; a < d; a += 1) b[a].fill && (b[a] = new g.style.Uf.IP(b[a].fill)),
          b[a].stroke && (b[a] = new g.style.Uf.cQ(b[a].stroke));
          c.oG = b
        }
        a = new g.kH(c)
      } else a = new g.kH({});
      this.set("style", a);
      return a
    },
    Apa: function(a, b) {
      var c = new g.Wa.jb(a);
      c.g("complete",
        function(c) {
          c = this.ia[a] = this.xga(b).YN(c);
          this.Pu(c);
          this.ha("complete")
        },
        this);
      c.g("error", this.Qb, this)
    },
    rka: function(a) {
      "px" === a.target.get("unit") ? (this.Pe = Math.max(a.Pj, this.Pe), this.wf = Math.max(a.Pj, this.wf)) : a.Pj > this.kq && (this.kq = a.Pj, this.Mv = this.kq / this.map.D.Wh.ao(20))
    },
    yD: function(a) {
      this.Fi.add(a);
      if (!this.oz && !this.ba.hi) {
        if (0 === a.name.indexOf("circle") || 0 === a.name.indexOf("ellipse")) {
          a.g("rad", this.rka, this);
          var b = a.get("radius");
          b.length && (b = Math.max.apply(null, b));
          "px" === a.get("unit") ? (this.Pe = Math.max(b, this.Pe), this.wf = Math.max(b, this.wf)) : this.kq ? b > this.kq && (this.kq = b, this.Mv = this.kq / this.map.D.Wh.ao(20)) : (this.kq = b, this.Mv = this.kq / this.map.D.Wh.ao(20))
        }
        b = a.get("strokeWeight") || 0;
        if (!this.Nv || b > this.Nv) this.Nv = b
      }
      this.ama || a.V("feature", this, !0)
    },
    Pu: function(a) {
      this.Dk = !0;
      for (var b = 0,
             c = a.length; b < c; b += 1) this.yD(a[b])
    },
    clear: function() {
      this.Dk = !0;
      this.Kp = [];
      this.Fi.clear();
      this.set("display", 0)
    },
    Bj: function(a) {
      var b;
      return 0 > a[0] ? (b = [a[0] + g.c.ib, a[1], g.c.ib, a[3]], a = [0, a[1], a[2], a[3]], b = this.Fi.Bj(b), a = this.Fi.Bj(a), g.extend(b, a)) : a[2] > g.c.ib ? (b = [a[0], a[1], g.c.ib, a[3]], a = [0, a[1], a[2] - g.c.ib, a[3]], b = this.Fi.Bj(b), a = this.Fi.Bj(a), g.extend(b, a)) : this.Fi.Bj(a)
    },
    kra: function(a) {
      var b, c = this.get("style"),
        d = a.Tj;
      c instanceof g.kH || (c = this.Tja(c));
      if (d && 0 < d.length) b = c.FW(d, a);
      else {
        if (c.z0.length || c.Tj.length) b = c.uea(a);
        b || (b = a.dga())
      }
      return b
    },
    tM: function(a) {
      function b(a, b) {
        return a.yk - b.yk
      }
      var c = [],
        d,
        e,
        f,
        h,
        k,
        l = {};
      for (d in a) if (a.hasOwnProperty(d)) {
        f = a[d];
        h = f.get("zIndex");
        for (e in l) if (l.hasOwnProperty(e) && (k = c[l[e]][2], k === h)) break;
        "undefined" === typeof l[h] && (c.push([[], [], h]), l[h] = c.length - 1);
        h = c[l[h]];
        h[0].push(f)
      }
      c.sort(this.Wla);
      a = 0;
      for (d = c.length; a < d; a += 1) c[a][0].sort(b);
      return c
    },
    featureChanged: function(a) {
      this.Dk = !0;
      var b = a.target,
        c = b.cc();
      0 !== this.Fi.jga([g.c.Pb(b)]).length && (this.Fi.remove(b, a.Rs), c && !a.Lea && this.Fi.add(b))
    },
    Y_: function(a) {
      this.Dk = !0;
      for (var b, c = 0,
             d = a.length; c < d; c += 1) b = a[c],
        b.Z.Rs = null,
        b.Op(!0),
        b.Vj("feature")
    },
    Kta: function(a, b) {
      return a[1].zIndex === b[1].zIndex ? g.c.Pb(a[1]) - g.c.Pb(b[1]) : a[1].zIndex - b[1].zIndex
    },
    Wla: function(a, b) {
      return a[2] - b[2]
    },
    yta: function(a) {
      return a.qra() === g.q.Soa.Doa
    },
    xl: function(a) {
      return this.oz ? new g.M.ee.ak(this, a) : "c" === this.map.get("overlayRender") && g.M.canvas.ak ? new g.M.canvas.ak(this, a) : g.M.Ld.ak && "d" === this.map.get("overlayRender") ? new g.M.Ld.ak(this, a) : null
    }
  }); g.q.Oc.vb({
    yl: function(a) {
      return this.oz ? new g.Ea.ee.ak(this, a) : this.ba.hi ? new g.Ea.u3(this, a) : new g.Ea.ak(this, a)
    }
  }); g.q.U2 = g.X.extend({
    r: function() {
      this.clear()
    },
    clear: function() {
      this.fo = [];
      this.VN = new g.bj
    },
    add: function(a) {
      var b = g.c.Pb(a),
        c = a.cc();
      this.fo[b] || (this.count += 1, this.fo[b] = a, c && !g.G.Ya(c.ed(), [Infinity, Infinity, -Infinity, -Infinity]) && this.VN.Bv(c.ed(), a))
    },
    fra: function() {
      return this.fo
    },
    Bj: function(a) {
      return this.VN.kla(a)
    },
    jga: function(a) {
      var b = a.length,
        c = [],
        d;
      for (d = 0; d < b; d += 1) this.fo[a[d]] && c.push(this.fo[a[d]]);
      return c
    },
    remove: function(a, b) {
      var c = g.c.Pb(a).toString(),
        d = a.cc();
      this.fo[c] && (this.fo[c] = null, d && (c = "undefined" !== typeof b ? b: d.ed(), this.VN.remove(c, a)))
    }
  }); g.bj = g.X.extend({
    r: function(a) {
      this.FZ = "undefined" !== typeof a ? a: 6;
      this.pF = Math.floor(this.FZ / 2);
      this.$F = {
        G: [Infinity, Infinity, -Infinity, -Infinity],
        xb: []
      };
      this.count = 0
    },
    Gda: function(a, b) {
      var c = -1,
        d = [],
        e;
      d.push(b);
      var f = b.xb;
      do { - 1 !== c && (d.push(f[c]), f = f[c].xb, c = -1);
        for (var h = f.length - 1; 0 <= h; h -= 1) {
          var k = f[h];
          if ("undefined" !== typeof k.ze) {
            c = -1;
            break
          }
          var l = g.bj.sw(k.G[2] - k.G[0], k.G[3] - k.G[1], k.xb.length + 1),
            k = g.bj.sw((k.G[2] > a.G[2] ? k.G[2] : a.G[2]) - (k.G[0] < a.G[0] ? k.G[0] : a.G[0]), (k.G[3] > a.G[3] ? k.G[3] : a.G[3]) - (k.G[1] < a.G[1] ? k.G[1] : a.G[1]), k.xb.length + 2);
          if (0 > c || Math.abs(k - l) < e) e = Math.abs(k - l),
            c = h
        }
      } while ( - 1 !== c );
      return d
    },
    Bv: function(a, b, c) {
      a = {
        G: a,
        ze: b
      };
      "undefined" !== typeof c && (a.type = c);
      this.OY(a, this.$F);
      this.count += 1
    },
    OY: function(a, b) {
      var c;
      if (0 === b.xb.length) b.G = g.G.ab(a.G),
        b.xb.push(a);
      else {
        var d = this.Gda(a, b),
          e = a;
        do {
          if (c && "undefined" !== typeof c.xb && 0 === c.xb.length) {
            var f = c;
            c = d.pop();
            for (var h = 0,
                   k = c.xb.length; h < k; h += 1) if (c.xb[h] === f || 0 === c.xb[h].xb.length) {
              c.xb.splice(h, 1);
              break
            }
          } else c = d.pop();
          f = e instanceof Array;
          if ("undefined" !== typeof e.ze || "undefined" !== typeof e.xb || f) {
            if (f) {
              f = 0;
              for (h = e.length; f < h; f += 1) g.G.extend(c.G, e[f].G);
              c.xb = c.xb.concat(e)
            } else g.G.extend(c.G, e.G),
              c.xb.push(e);
            if (c.xb.length <= this.FZ) if (0 < d.length) e = {
              G: g.G.ab(c.G)
            };
            else break;
            else e = f = this.Xha(c.xb),
            1 > d.length && (c.xb.push(f[0]), d.push(c), e = f[1])
          } else g.G.extend(c.G, e.G), e = {
            G: g.G.ab(c.G)
          }
        } while ( 0 < d . length )
      }
    },
    Xha: function(a) {
      for (var b = this.Wja(a); 0 < a.length;) this.Xja(a, b[0], b[1]);
      return b
    },
    Wja: function(a) {
      for (var b = a.length - 1,
             c = 0,
             d = a.length - 1,
             e = 0,
             f = a.length - 2; 0 <= f; f -= 1) {
        var h = a[f];
        h.G[0] > a[c].G[0] ? c = f: h.G[2] < a[b].G[1] && (b = f);
        h.G[1] > a[e].G[1] ? e = f: h.G[3] < a[d].G[3] && (d = f)
      }
      Math.abs(a[b].G[2] - a[c].G[0]) > Math.abs(a[d].G[3] - a[e].G[1]) ? b > c ? (b = a.splice(b, 1)[0], c = a.splice(c, 1)[0]) : (c = a.splice(c, 1)[0], b = a.splice(b, 1)[0]) : d > e ? (b = a.splice(d, 1)[0], c = a.splice(e, 1)[0]) : (c = a.splice(e, 1)[0], b = a.splice(d, 1)[0]);
      return [{
        G: g.G.ab(b.G),
        xb: [b]
      },
        {
          G: g.G.ab(c.G),
          xb: [c]
        }]
    },
    Xja: function(a, b, c) {
      for (var d = g.bj.sw(b.G[2] - b.G[0], b.G[3] - b.G[1], b.xb.length + 1), e = g.bj.sw(c.G[2] - c.G[0], c.G[3] - c.G[1], c.xb.length + 1), f, h, k, l = a.length - 1; 0 <= l; l -= 1) {
        var m = a[l],
          n = [b.G[0] < m.G[0] ? b.G[0] : m.G[0], b.G[2] > m.G[2] ? b.G[2] : m.G[2], b.G[1] < m.G[1] ? b.G[1] : m.G[1], b.G[3] > m.G[3] ? b.G[3] : m.G[3]],
          n = Math.abs(g.bj.sw(n[1] - n[0], n[3] - n[2], b.xb.length + 2) - d),
          m = [c.G[0] < m.G[0] ? c.G[0] : m.G[0], c.G[2] > m.G[2] ? c.G[2] : m.G[2], c.G[1] < m.G[1] ? c.G[1] : m.G[1], c.G[3] > m.G[3] ? c.G[3] : m.G[3]],
          m = Math.abs(g.bj.sw(m[1] - m[0], m[3] - m[2], c.xb.length + 2) - e),
          p = Math.abs(m - n);
        if (!h || !f || p < f) h = l,
          f = p,
          k = m < n ? c: b
      }
      d = a.splice(h, 1)[0];
      b.xb.length + a.length + 1 <= this.pF ? (b.xb.push(d), g.G.extend(b.G, d.G)) : c.xb.length + a.length + 1 <= this.pF ? (c.xb.push(d), g.G.extend(c.G, d.G)) : (k.xb.push(d), g.G.extend(k.G, d.G))
    },
    remove: function(a, b) {
      var c = [];
      c[0] = {
        G: a
      }; (c[1] = b) || (c[1] = !1);
      c[2] = this.$F;
      this.count -= 1;
      if (!1 === c[1]) {
        var d = 0,
          e = [];
        do d = e.length,
          e = e.concat(this.b0.apply(this, c));
        while (d !== e.length);
        return e
      }
      return this.b0.apply(this, c)
    },
    b0: function(a, b, c) {
      var d = [],
        e = [],
        f = [];
      if (!a || !g.G.If(a.G, c.G)) return f;
      a = g.G.ab(a.G);
      var h;
      e.push(c.xb.length);
      d.push(c);
      do {
        c = d.pop();
        var k = e.pop() - 1;
        if ("undefined" !== typeof b) for (; 0 <= k;) {
          var l = c.xb[k];
          if (g.G.If(a, l.G)) if (b && "undefined" !== typeof l.ze && l.ze === b || !b && ("undefined" !== typeof l.ze || g.G.yW(a, l.G))) {
            "undefined" !== typeof l.xb ? (f = this.lw(l, !0, [], l), c.xb.splice(k, 1)) : f = c.xb.splice(k, 1);
            g.bj.$N(c);
            b = void 0;
            c.xb.length < this.pF && (h = this.lw(c, !0, [], c));
            break
          } else "undefined" !== typeof l.xb && (e.push(k), d.push(c), c = l, k = l.xb.length);
          k -= 1
        } else if ("undefined" !== typeof h) {
          c.xb.splice(k + 1, 1);
          0 < c.xb.length && g.bj.$N(c);
          k = 0;
          for (l = h.length; k < l; k += 1) this.OY(h[k], c);
          h.length = 0;
          0 === d.length && 1 >= c.xb.length ? (h = this.lw(c, !0, h, c), c.xb.length = 0, d.push(c), e.push(1)) : 0 < d.length && c.xb.length < this.pF ? (h = this.lw(c, !0, h, c), c.xb.length = 0) : h = void 0
        } else g.bj.$N(c)
      } while ( 0 < d . length );
      return f
    },
    search: function(a, b) {
      return this.lw({
          G: a
        },
        !1, [], this.$F, b)
    },
    kla: function(a, b) {
      return this.lw({
          G: a
        },
        !1, [], this.$F, b, !0)
    },
    lw: function(a, b, c, d, e, f) {
      var h = {},
        k = [];
      if (!g.G.If(a.G, d.G)) return c;
      k.push(d.xb);
      do {
        d = k.pop();
        for (var l = d.length - 1; 0 <= l; l -= 1) {
          var m = d[l];
          if (g.G.If(a.G, m.G)) if ("undefined" !== typeof m.xb) k.push(m.xb);
          else if ("undefined" !== typeof m.ze) if (b) c.push(m);
          else if ("undefined" === typeof e || m.type === e) m = m.ze,
            "undefined" !== typeof f ? h[g.c.Pb(m)] = m: c.push(m)
        }
      } while ( 0 < k . length );
      return "undefined" !== typeof f ? h: c
    }
  }); g.bj.$N = function(a) {
    var b = a.xb.length,
      c = a.G;
    if (0 === b) g.G.empty(c);
    else {
      var d = a.xb[0].G;
      c[0] = d[0];
      c[2] = d[2];
      c[1] = d[1];
      c[3] = d[3];
      for (d = 1; d < b; d += 1) g.G.extend(c, a.xb[d].G)
    }
  }; g.bj.sw = function(a, b, c) {
    var d = (a + b) / 2;
    a *= b;
    return a * c / (a / (d * d))
  }; g.A = g.A || {}; g.A.eh = g.X.extend({
    ea: [g.la, g.Ee],
    Gja: ["position", "altitude", "visible", "clickable", "bubble"],
    r: function(a, b) {
      this.map = b;
      this.ve(this.Gja, a);
      this.V("zIndex", a);
      this.V("draggable", a);
      g.l.ef && this.Y4();
      g.l.W || this.GH();
      this.Pc = a;
      this.Pc.A = this
    },
    draggableChanged: function() {
      this.get("draggable") ? this.FH() : this.sJ()
    },
    ha: function(a, b) {
      var c;
      c = b ? {
        type: a,
        pixel: b.sb,
        target: this.Pc,
        lnglat: b.Mf
      }: {
        type: a
      };
      this.Pc && this.Pc.o(a, c)
    },
    mc: function(a) { ("click" !== a.type && "rightclick" !== a.type && "dblclick" !== a.type && "longclick" !== a.type || this.get("clickable")) && this.ha(a.type, a)
    },
    EH: function() {
      this.g("click", this.mc);
      this.g("rightclick", this.mc);
      this.g("longclick", this.mc);
      this.g("longpress", this.mc);
      this.g("dblclick", this.mc)
    },
    pV: function() {
      this.H("click", this.mc);
      this.H("rightclick", this.mc);
      this.H("longclick", this.mc);
      this.H("longpress", this.mc);
      this.H("dblclick", this.mc)
    },
    GH: function() {
      this.get("clickable") && this.EH();
      this.g("mousemove", this.mc);
      this.g("mouseout", this.mc);
      this.g("mouseover", this.mc);
      this.g("mousedown", this.mc);
      this.g("mouseup", this.mc)
    },
    Dpa: function() {
      this.pV();
      this.H("mousemove", this.mc);
      this.H("mouseout", this.mc);
      this.H("mouseover", this.mc);
      this.H("mousedown", this.mc);
      this.H("mouseup", this.mc)
    },
    clickableChanged: function() {
      this.get("clickable") ? this.EH() : this.pV()
    },
    Y4: function() {
      this.get("clickable") && this.EH();
      this.g("touchstart", this.mc, this);
      this.g("touchmove", this.mc, this);
      this.g("touchend", this.mc, this)
    },
    FH: function() {
      this.g("dragstart", this.yr);
      this.g("dragging", this.wr);
      this.g("dragend", this.xr)
    },
    yr: function(a) {
      this.map.gN(a);
      this.$e = a.sb;
      this.mZ = a.Ma;
      this.lZ = a.Mf;
      this.ha("dragstart", a)
    },
    wr: function(a) {
      var b = this.map.D.view.type;
      if ("2D" == b) {
        var c = a.sb.Sa(this.$e),
          b = c.x,
          c = c.y;
        this.$e = a.sb;
        var d = this.map.get("rotation") * Math.PI / 180,
          e = b * Math.cos(d) + Math.sin(d) * c,
          b = -Math.sin(d) * b + Math.cos(d) * c;
        this.mq(new g.F(e, b));
        this.ha("dragging", a)
      } else "3D" == b && a.Ma && (c = a.sb.Sa(this.$e), b = c.x, c = c.y, e = a.Ma.Sa(this.mZ), a.Mf.Sa(this.lZ), this.$e = a.sb, "function" === typeof this.cA && this.cA(b, c, e), this.mZ = a.Ma, this.lZ = a.Mf, this.ha("dragging", a))
    },
    xr: function(a) {
      this.map.wt();
      this.ha("dragend", a)
    },
    sJ: function() {
      this.H("dragstart", this.yr);
      this.H("dragging", this.wr);
      this.H("dragend", this.xr)
    },
    sI: function(a) {
      var b, c, d = [];
      if (a) for (b = 0, c = a.length; b < c; b += 1) d.push(this.tI(a[b]));
      return d
    },
    tI: function(a) {
      a = this.map.Lb(a);
      return [a.x, a.y]
    },
    vf: function(a) {
      var b = this.L.nb || this.map.get("centerCoords"),
        c = Math.pow(2, 20 - this.map.get("zoom"));
      return [(a[0] - b.x) / c, (a[1] - b.y) / c]
    },
    yI: function(a, b) {
      for (var c = this.map.D,
             d = [], e = 0, f = a.length; e < f; e++) {
        var h = c.Lb(a[e]);
        h.x += b[0];
        h.y += b[1];
        d.push(c.se(h))
      }
      return d
    }
  }); g.A.hb = g.A.eh.extend({
    oA: "content contentDom icon opacity angle autoRotation offset textAlign verticalAlign shadow title label isTop shape topWhenClick topWhenMouseOver noSelect".split(" "),
    Nca: {
      AMAP_ANIMATION_NONE: !1,
      AMAP_ANIMATION_DROP: g.ri.Easing.Bounce,
      AMAP_ANIMATION_BOUNCE: g.ri.Easing.Cubic
    },
    r: function(a, b) {
      arguments.callee.ma.apply(this, arguments);
      this.ve(this.oA, a);
      this.V("move", a);
      this.pda();
      this.Tr();
      this.set("AnimationOffset", new g.F(0, 0), !0);
      this.V("raiseOnDrag", a);
      this.V("animation", a)
    },
    KI: function(a, b, c) {
      if (this.get("animation") && "AMAP_ANIMATION_NONE" !== this.get("animation")) {
        var d = this;
        this.Ll = new g.ri;
        this.Ll.transition = function(c, f, h) {
          if ("AMAP_ANIMATION_NONE" === d.get("animation")) return 0;
          if (a && 600 <= h) return d.Ll.stop(),
            0;
          c = 0 === Math.floor(h / 600) % 2 ? "Out": "In";
          "out" === b ? c = "Out": "in" === b && (c = "In");
          return d.Nca[d.get("animation")][c](h % 600 / 600)
        };
        c = c || 40;
        this.Ll.qo = function(a) {
          d.set("AnimationOffset", d.uJ.add(new g.F(0, -1 * c * a)))
        };
        this.uJ = new g.F(0, 0);
        this.Ll.Ul()
      }
    },
    AnimationOffsetChanged: function() {
      this.positionChanged()
    },
    vU: function() {
      this.Ll && (this.Ll.stop(), this.set("AnimationOffset", this.uJ));
      this.set("AnimationOffset", new g.F(0, -40));
      if (this.Pw) this.Pw.set("position", this.get("position"));
      else {
        var a = new y.A.hb({
          zIndex: this.get("zIndex") - 1,
          icon: new y.A.dh({
            image: g.w.Ab + "/theme/v1.3/dragCross.png",
            size: new g.bd(14, 11)
          }),
          offset: new g.F( - 4, -5),
          position: this.get("position")
        });
        a.oa = !0;
        this.Pw = a
      }
      this.Pw.setMap(this.map.D)
    },
    wR: function() {
      this.set("animation", "AMAP_ANIMATION_DROP", !0);
      this.KI(!0, "in");
      this.Pw.setMap(null)
    },
    animationChanged: function() {
      this.Ll && (this.Ll.stop(), this.set("AnimationOffset", this.uJ), this.Ll = null);
      var a = this.get("animation");
      a && "AMAP_ANIMATION_NONE" !== a && ("AMAP_ANIMATION_DROP" === a ? this.KI(!0, "in", 100) : this.KI())
    },
    jg: function() {
      this.Pw && this.Pw.set("position", this.get("position"))
    },
    raiseOnDragChanged: function() {
      this.get("raiseOnDrag") ? (this.g("dragstart", this.vU, this), this.g("dragging", this.jg, this), this.g("dragend", this.wR, this)) : (this.H("dragstart", this.vU, this), this.H("dragging", this.jg, this), this.H("dragend", this.wR, this))
    },
    mq: function(a) {
      var b = this.get("position");
      a = this.map.Lb(b).add(a.Bd(Math.pow(2, 20 - this.map.get("zoom"))));
      b instanceof g.T ? this.set("position", this.map.se(a)) : this.set("position", a)
    },
    cA: function(a, b) {
      var c = this.get("position"),
        d = this.get("altitude"),
        c = this.map.hq(c, d),
        d = this.map.On(new g.F(c.x + a, c.y + b), null, d);
      this.set("position", d)
    },
    pda: function() {
      var a = this.get("content"),
        b = this.get("shadow"),
        c = this.get("offset"),
        d = this.get("label"),
        a = a ? this.$V(a, c) : this.LK(this.get("icon"), c);
      this.set("contentDom", a, !0);
      b && (b = this.eW(b, c), this.set("shadowDom", b, !0));
      d && d.content && this.set("labelDom", this.MK(d.content), !0)
    },
    MK: function(a) {
      var b = document.createElement("div");
      b.className = "amap-marker-label";
      b.innerHTML = a;
      return b
    },
    Tr: function() {
      var a = this.get("position");
      if (this.map && a && !this.L) {
        var b = this.map,
          a = this.map.Lb(a),
          a = this.L = new g.ah({
            name: "marker-" + g.c.Pb(this),
            map: b,
            Z: new g.ra.Tf([a.x, a.y])
          });
        a.np = this;
        this.V("coords", a, !0);
        a.ve("offset textAlign verticalAlign isTop zIndex params noSelect".split(" "), this)
      }
    },
    getParams: function() {
      return {
        zIndex: this.get("zIndex"),
        Ru: this.get("angle"),
        Og: this.get("contentDom"),
        kZ: this.get("labelDom"),
        T0: this.get("shadowDom"),
        opacity: this.get("opacity"),
        altitude: this.get("altitude"),
        title: this.get("title"),
        label: this.get("label"),
        yP: this.get("AnimationOffset"),
        verticalAlign: this.get("verticalAlign"),
        textAlign: this.get("textAlign"),
        offset: this.get("offset"),
        fZ: this.get("isTop"),
        shape: this.get("shape"),
        visible: this.get("visible") && !this.Pc.get("outOfZooms")
      }
    },
    offsetChanged: function() {
      function a(a) {
        var c = b.get("offset"),
          f = b.get("AnimationOffset"),
          h = b.get("verticalAlign"),
          k = b.get("textAlign"),
          l = Math.round(a.x) + c.x + f.x;
        a = Math.round(a.y) + c.y + f.y;
        f = g.h.zz(b.L.Og);
        c = f[0];
        f = f[1];
        switch (k) {
          case "center":
            l -= c / 2;
            break;
          case "right":
            l -= c
        }
        switch (h) {
          case "middle":
            a -= f / 2;
            break;
          case "bottom":
            a -= f
        }
        b.L.da.style.left = l + "px";
        b.L.da.style.top = a + "px"
      }
      if (this.L && this.L.da) {
        var b = this,
          c = this.map.D.view.type;
        "2D" == c ? (c = this.map.Lb(this.get("position")), c = c.Sa(this.L.va).Rc(Math.pow(2, 20 - this.map.get("zoom"))), this.L.da && (this.L.da.ky && this.L.da.parentNode !== this.L.da.ky ? this.map.set("display") : a(c))) : "3D" == c && (c = this.get("position"), c = this.map.hq(c, this.get("altitude")), this.L.da && (this.L.da.ky && this.L.da.parentNode !== this.L.da.ky ? this.map.set("display") : a(c)))
      } else this.map.set("display")
    },
    altitudeChanged: function() {
      this.offsetChanged()
    },
    positionChanged: function() {
      if (this.L) {
        var a = this.map.Lb(this.get("position"));
        this.set("coords", [a.x, a.y]);
        this.map && (this.L.E3 = !0, this.offsetChanged())
      }
    },
    textAlignChanged: function() {
      this.CQ()
    },
    verticalAlignChanged: function() {
      this.CQ()
    },
    CQ: function() {
      this.L && (this.L.rf = !0, this.map && (this.map.td.Cl = !0, this.map.set("display")))
    },
    contentChanged: function() {
      if (this.L) {
        this.map.td.Cl = !0; - 1 === g.c.indexOf(this.map.td.cg, this.L) && this.map.td.cg.push(this.L);
        var a = this.get("contentDom");
        this.L.da && this.L.da === a.parentNode && this.L.da.removeChild(a);
        var a = this.get("content"),
          b = this.get("offset"),
          a = this.$V(a, b);
        this.set("contentDom", a);
        this.L.da && (g.l.uh && g.c.iepngFix(a), this.L.da.appendChild(a), this.L.Og = a);
        this.map && this.map.set("display")
      }
    },
    iconChanged: function() {
      if (this.L && this.L.da && !this.get("content")) {
        this.map.td.Cl = !0; - 1 === g.c.indexOf(this.map.td.cg, this.L) && this.map.td.cg.push(this.L);
        this.L.da && this.get("contentDom") && this.L.da.removeChild(this.get("contentDom"));
        var a = this.get("icon"),
          b = this.get("offset"),
          a = this.LK(a, b);
        this.set("contentDom", a);
        this.L.da ? (g.l.uh && g.c.iepngFix(a), this.L.da.appendChild(a), this.L.Og = a) : this.map && this.map.set("display")
      }
    },
    shadowChanged: function() {
      if (this.L && this.L.da) {
        var a = this.get("shadowDom");
        this.L.da && a && a.parentNode === this.L.da && this.L.da.removeChild(a);
        if (a = this.get("shadow")) {
          var b = this.get("offset"),
            a = this.eW(a, b);
          this.set("shadowDom", a);
          this.L.da && this.L.da.appendChild(a)
        }
      }
    },
    titleChanged: function() {
      this.L && this.L.Og && "string" === typeof this.get("title") && this.L.Og && this.get("title") && (this.L.Og.title = this.get("title"))
    },
    labelChanged: function(a) {
      a = a || this.get("label");
      if (this.L && this.L.da) {
        var b = this.L.da,
          c = this.get("labelDom");
        c && c.parentNode === b && b.removeChild(c);
        if (a && a.content) {
          c = "";
          if (a.content) {
            var c = this.MK(a.content),
              d = 0,
              e = 0;
            a.offset && (d = a.offset.y + "px", e = a.offset.x + "px");
            c.style.top = d;
            c.style.left = e;
            b.appendChild(c)
          }
          this.set("labelDom", c)
        }
      } else a && a.content ? this.set("labelDom", this.MK(a.content), !0) : this.set("labelDom", null)
    },
    isTopChanged: function() {
      var a = this.map.td.tG,
        b = this.get("isTop"),
        c = this.get("zIndex");
      a ? a === this ? this.L && this.L.da && (this.L.da.style.zIndex = b ? this.map.td.Io + 10 : c, this.map.td.tG = b ? this: null) : (a.L && a.L.da && (a.L.da.style.zIndex = b ? a.get("zIndex") : this.map.td.Io + 10), this.L && this.L.da && (this.L.da.style.zIndex = b ? this.map.td.Io + 10 : c), this.map.td.tG = b ? this: a) : (this.map.td.tG = this, this.L && this.L.da && (this.L.da.style.zIndex = b ? this.map.td.Io + 10 : c))
    },
    visibleChanged: function() {
      this.L && this.L.da && (this.get("visible") && !this.Pc.get("outOfZooms") ? this.L.da.style.display = "block": this.L.da.style.display = "none")
    },
    zja: function() {
      this.visibleChanged()
    },
    angleChanged: function() {
      if (this.L && this.L.da) {
        var a = {
          x: -1 * this.get("offset").x,
          y: -1 * this.get("offset").y
        };
        g.h.rotate(this.L.da, this.get("angle") || 0, a)
      }
    },
    zIndexChanged: function() {
      var a = this.get("zIndex");
      if (a > this.map.td.Io) {
        this.map.td.Io = a;
        var b = this.map.td.tG;
        b && b.L && b.L.da && (b.L.da.style.zIndex = a + 10)
      }
      this.L && this.L.da && (this.L.da.style.zIndex = this.get("isTop") ? this.map.td.Io + 10 : this.get("zIndex"))
    },
    opacityChanged: function() {
      var a = this.get("contentDom"),
        b = this.get("shadowDom");
      a && g.h.Eo(a, this.get("opacity"));
      b && g.h.Eo(b, this.get("opacity"))
    },
    $V: function(a) {
      var b;
      b = document.createElement("div");
      b.className = "amap-marker-content";
      "string" !== typeof a ? b.appendChild(a) : (b.innerHTML = a, b.childNodes[0] && !b.childNodes[0].style && (b.style["white-space"] = "pre"));
      g.h.Eo(b, this.get("opacity"));
      return b
    },
    LK: function(a) {
      var b, c = 0,
        d = 0,
        e, f, h, k;
      a ? ("string" === typeof a ? (b = a, k = !0) : (b = a.get("image"), d = a.get("size"), e = a.get("imageSize"), c = d.width, d = d.height, e && (f = e.width, h = e.height)), c || (c = 0), d || (d = 0), a = "string" !== typeof a ? a.get("imageOffset") : {
        x: 0,
        y: 0
      }) : (b = g.w.wh + "/mark_bs.png", a = {
        x: 0,
        y: 0
      },
        c = 19, d = 33, f = 19, h = 33);
      e = document.createElement("div");
      e.className = "amap-icon";
      e.style.position = "absolute";
      k && !g.l.re && (e.style.overflow = "inherit");
      c && (e.style.width = c + "px");
      d && (e.style.height = d + "px");
      c = document.createElement("img");
      c.src = b;
      f && h && (c.style.width = f + "px", c.style.height = h + "px");
      c.style.top = a.y + "px";
      c.style.left = a.x + "px";
      g.l.re && k || e.appendChild(c);
      g.h.Eo(g.l.re && k ? c: e, this.get("opacity"));
      return g.l.re && k ? c: e
    },
    eW: function(a, b) {
      var c = this.LK(a, b);
      c.style.zIndex = -1;
      return c
    },
    moveChanged: function() {
      var a = this.get("move");
      if (!1 === a) return this.gma();
      void 0 !== a && ("pause" === a.action ? this.Vja() : "[object Array]" === Object.prototype.toString.call(a.Mf) ? a.Mf && ("resume" === a.action && this.yC ? this.moveTo(a.Mf[a.Mf.An || 0], a.speed, a.ob) : (this.yC && this.o("movestop"), a.Mf.An = 0, this.set("position", a.Mf[0]), this.Iia(a.Mf, a.speed, a.ob, a.Jda))) : this.moveTo(a.Mf, a.speed, a.ob, !0))
    },
    moveTo: function(a, b, c, d) {
      var e = this.get("position");
      a.Sa(e);
      var f = Math.round(a.ae(e) / 1E3 / b * 36E5);
      if (0 === f) return this.o("moveend");
      this.xh && (this.xh.stop(), this.xh = null);
      this.xh = new g.ri(e, a);
      c = c ||
        function(a) {
          return a
        };
      this.xh.transition = function(a, b, d) {
        if (d >= f) return b;
        var e = (b.O - a.O) * c(d / f) + a.O;
        a = (b.N - a.N) * c(d / f) + a.N;
        return new g.T(e, a)
      };
      this.xh.qo = function(b) {
        this.set("position", b);
        d && this.Pc.o("moving", {
          passedPath: [this.xh.start, this.get("position")]
        });
        this.o("moving");
        b.Ya(a) && (this.xh && (this.xh.stop(), this.xh = null), this.Pc.o("moveend"), this.o("moveend"))
      };
      this.get("autoRotation") && !g.l.re && (b = "2D" == (this.map.D.view.type || "2D") ? this.Y6(e, a) : this.Z6(e, a), this.set("angle", b));
      this.xh.Ul(this)
    },
    gma: function() {
      this.xh && (this.xh.stop(), this.xh = null, this.o("movestop"))
    },
    Vja: function() {
      this.xh && (this.xh.stop(), this.xh = null, this.o("movepause"))
    },
    Iia: function(a, b, c, d) {
      function e() {
        var b = a.slice(0, a.An || 0);
        b.push(this.get("position"));
        this.Pc.o("moving", {
          passedPath: b
        })
      }
      function f() {
        a.An < a.length - 1 ? (a.An += 1, this.moveTo(a[a.An], b, c)) : (this.ha("movealong"), d ? (a.An = 0, this.set("position", a[0]), this.moveTo(a[a.An], b, c)) : this.o("movestop"))
      }
      var h = Math.min(a.An || 0, a.length - 1);
      this.yC || (this.yC = !0, this.g("moving", e, this), this.g("moveend", f, this), this.g("movestop",
        function l() {
          this.yC = !1;
          this.H("moveend", f, this);
          this.H("moving", e, this);
          this.H("movestop", l, this)
        },
        this));
      this.moveTo(a[h], b, c)
    },
    Z6: function(a, b) {
      var c = this.map,
        d = c.hq(a),
        c = c.hq(b),
        e = 0;
      c.ae(d);
      var f = c.y - d.y,
        h = c.x - d.x;
      0 !== c.x - d.x ? (e = Math.atan((c.y - d.y) / (c.x - d.x)), 0 <= f && 0 > h ? e = Math.PI + e: 0 > f && 0 >= h ? e = Math.PI + e: 0 > f && 0 <= h && (e = 2 * Math.PI + e)) : e = c.y > d.y ? Math.PI / 2 : 3 * Math.PI / 2;
      return g.c.Td(180 * e / Math.PI, 1)
    },
    Y6: function(a, b) {
      var c = this.map,
        d = c.Lb(a),
        c = c.Lb(b),
        e = 0;
      c.ae(d);
      var f = c.y - d.y,
        h = c.x - d.x;
      0 !== c.x - d.x ? (e = Math.atan((c.y - d.y) / (c.x - d.x)), 0 <= f && 0 > h ? e = Math.PI + e: 0 > f && 0 >= h ? e = Math.PI + e: 0 > f && 0 <= h && (e = 2 * Math.PI + e)) : e = c.y > d.y ? Math.PI / 2 : 3 * Math.PI / 2;
      return g.c.Td(180 * e / Math.PI, 1)
    }
  }); g.A.bm = g.A.eh.extend({
    r: function(a, b) {
      arguments.callee.ma.apply(this, arguments);
      this.V("items", a, !0);
      this.V("content", a, !0);
      this.V("resolution", b);
      this.V("centerCoords", b);
      this.Qy = a
    },
    Qv: function(a) {
      this.$f();
      this.Oq();
      this.Wk();
      this.Vj("resolution");
      this.Vj("centerCoords");
      this.Vj("render");
      this.V("resolution", a);
      this.V("centerCoords", a);
      this.V("render", a);
      this.map.g("movestart", this.kl, this);
      this.map.g("mapmove", this.kl, this);
      this.map.g("zoomstart", this.kl, this);
      this.map.g("click", this.kl, this);
      this.map.g("closeOverlays", this.kl, this);
      this.map.g("rotate", this.kl, this)
    },
    kl: function() {
      this.Qy.map && this.Qy.close()
    },
    mapChanged: function() {},
    positionChanged: function() {
      this.Wk()
    },
    renderChanged: function() {
      this.Wk()
    },
    $f: function() {
      this.I && (this.I.parentNode && this.I.parentNode.removeChild(this.I), this.I = null);
      var a = g.h.create("div", null, "amap-menu");
      g.C.g(a, "mousedown",
        function(a) {
          g.C.stopPropagation(a)
        },
        this);
      this.I = a;
      this.map.Qa.A.appendChild(this.I)
    },
    Oq: function() {
      var a = this,
        b = this.I;
      b.innerHTML = "";
      var c = this.get("content");
      if ("object" === typeof c) b.appendChild(c);
      else if ("string" === typeof c) b.innerHTML = c;
      else if ((c = this.get("items")) && c.length) {
        var d = g.h.create("ul", b, "amap-menu-outer");
        c.sort(function(a, b) {
          return isNaN(a.BF) || isNaN(b.BF) ? 0 : a.BF - b.BF
        });
        for (b = 0; b < c.length; b += 1)(function(b) {
          var c = b.Q1,
            h = b.ob,
            k = g.h.create("li", d);
          k.innerHTML = c;
          g.C.g(k, "click",
            function() {
              h.call(k);
              a.Qy.close()
            },
            k)
        })(c[b])
      } else this.I.innerHTML = ""
    },
    Wk: function() {
      var a = this.map,
        b = this.I;
      a && b && (this.map.get("zoom"), b = this.get("position"), b = a.hq(b), a = b.y, b = b.x, this.I.style.right = "", this.I.style.bottom = "", this.I.style.left = b + "px", this.I.style.top = a + "px")
    },
    Of: function() {
      this.I && (this.map.H("click", this.bpa, this), this.map.Qa.A.removeChild(this.I), this.Qy.Qh = !1, this.I = this.Qy.ue.map = null, this.map.H("movestart", this.kl, this), this.map.H("zoomstart", this.kl, this), this.map.H("click", this.kl, this), this.map.H("closeOverlays", this.kl, this), this.map.H("rotate", this.kl, this))
    },
    visibleChanged: function() {
      this.I && (this.get("visible") ? this.I.style.display = "block": this.I.style.display = "none")
    },
    itemsChanged: function() {
      this.I && this.Oq()
    }
  }); g.A.te = g.A.eh.extend({
    r: function(a, b) {
      arguments.callee.ma.apply(this, arguments);
      this.ve("content contentDom position contentU altitude isCustom autoMove showShadow closeWhenClickMap size offset".split(" "), a);
      this.V("retainWhenClose", a, !0);
      a.V("toBeClose", this);
      this.qj = a
    },
    Qv: function(a) {
      this.kea || (this.$f(), this.Oq());
      this.Vj("resolution");
      this.Vj("centerCoords");
      this.Vj("render");
      this.V("resolution", a);
      this.V("centerCoords", a);
      this.V("render", a);
      this.map = a;
      a.Qa.A.appendChild(this.fc);
      this.kP();
      this.Wk();
      this.BQ();
      this.kea = !0;
      this.Zda();
      this.Pc.o("onAdd", {
        type: "onAdd",
        target: this.Pc
      })
    },
    $f: function() {
      var a = g.h.create("div");
      a.className = "amap-info";
      var b = g.h.create("div", a, "amap-info-shadowContainer"),
        c = g.h.create("div", a),
        d = g.h.create("div", c, "amap-info-contentContainer");
      a.style.position = "absolute";
      c.style.position = "absolute";
      c.style.bottom = "0px";
      c.style.left = "0px";
      b.style.position = "absolute";
      this.fc = a;
      this.tf = c;
      this.AO = b;
      this.qh = d;
      this.set("contentDom", this.qh, !0)
    },
    Oq: function() {
      var a = this.get("contentU");
      if (a) {
        var b = this.get("isCustom"),
          c = this.qh,
          d = this.AO;
        c.innerHTML = "";
        var e = null;
        if (b) {
          if ("string" === typeof a) c.innerHTML = a;
          else if (a instanceof Array) for (e = 0; e < a.length; e += 1) c.appendChild(a[e]);
          else c.appendChild(a);
          e = c;
          d.parentNode && d.parentNode.removeChild(d)
        } else {
          e = d = g.h.create("div", c, "amap-info-content amap-info-outer");
          "string" === typeof a ? d.innerHTML = a: d.appendChild(a);
          this.mea = d;
          a = g.h.create("a", this.qh, "amap-info-close");
          a.innerHTML = "\u00d7";
          this.YK = a;
          a.href = "javascript: void(0)";
          g.l.ef && (g.C.g(a, "touchstart",
            function(a) {
              g.C.stop(a)
            },
            this), g.C.g(a, "touchend",
            function(a) {
              g.C.stop(a);
              this.qj.close()
            },
            this), g.C.g(a, "click",
            function(a) {
              g.C.stop(a);
              this.qj.close()
            },
            this));
          g.l.W || (g.C.g(a, "mousedown",
            function(a) {
              g.C.stop(a)
            },
            this), g.C.g(a, "click",
            function(a) {
              g.C.stop(a);
              this.qj.close()
            },
            this));
          if (a = this.get("size", !0)) 0 !== a.width && (d.style.width = a.width + "px"),
          0 !== a.height && (d.style.height = a.height + "px");
          a = g.h.create("div", c, "amap-info-sharp");
          a.style.height = "23px";
          if (g.l.uh || g.l.$p) a.style.marginLeft = c.childNodes[0].offsetWidth / 2 - 5;
          this.AO.style.display = "block"
        }
        g.C.ema(e)
      }
    },
    kP: function() {
      var a = this.get("isCustom"),
        b = this.get("showShadow");
      if (!a && b) {
        var a = this.AO,
          b = g.h.KE(this.qh),
          c = b.height - 23,
          d = b.width;
        if (g.l.uh || g.l.$p) c = this.qh.childNodes[0].offsetHeight,
          d = this.qh.childNodes[0].offsetWidth + 26;
        b = "background-image:url(" + g.w.Ab + (g.l.uh ? "/theme/v1.3/iws.gif);": "/theme/v1.3/iws.png);");
        a.innerHTML = "";
        var e = [],
          f;
        f = e[1] = {};
        f.height = 0.5 * c + 4;
        f.width = d;
        f.offsetX = 400;
        f.offsetY = 16;
        f.top = -f.height - 10 - 15;
        f.left = 23;
        f = e[2] = {};
        f.height = e[1].height;
        f.width = e[1].height;
        f.offsetX = 1075 - f.width;
        f.offsetY = e[1].offsetY;
        f.top = e[1].top;
        f.left = 23 + e[1].width;
        f = e[3] = {};
        f.height = 10;
        f.width = 22;
        f.offsetX = 30;
        f.offsetY = 445;
        f.top = -25;
        f.left = 23 + (g.l.$p || g.l.uh ? 5 : 0);
        f = e[4] = {};
        f.height = 10;
        f.width = d / 2 - 15 - e[3].left - e[3].width;
        f.offsetX = 132;
        f.offsetY = 445;
        f.top = -25;
        f.left = e[3].left + e[3].width;
        f = e[5] = {};
        f.height = 10;
        f.width = 70;
        f.offsetX = 80;
        f.offsetY = 445;
        f.top = -25;
        f.left = e[4].left + e[4].width;
        f = e[6] = {};
        f.height = 10;
        f.width = d - e[5].left - e[5].width;
        f.offsetX = 132;
        f.offsetY = 445;
        f.top = -25;
        f.left = e[5].left + e[5].width;
        f = e[7] = {};
        f.height = 10;
        f.width = 30;
        f.offsetX = 621;
        f.offsetY = 445;
        f.top = -25;
        f.left = d;
        f = e[8] = {};
        f.height = 15;
        f.width = 70;
        f.offsetX = 47;
        f.offsetY = 470;
        f.top = -15;
        f.left = d / 2 - 15;
        for (c = 1; 8 >= c; c += 1) d = g.h.create("div", a),
          f = [],
          f.push("position:absolute;"),
          f.push(b),
          f.push("top:" + e[c].top + "px;"),
          f.push("left:" + e[c].left + "px;"),
          f.push("width:" + e[c].width + "px;"),
          f.push("height:" + e[c].height + "px;"),
          f.push("background-position:" + -e[c].offsetX + "px " + -e[c].offsetY + "px;"),
          d.style.cssText = f.join("")
      }
    },
    dua: function() {},
    Wk: function() {
      var a = this.map,
        b = this.fc,
        c = this.get("position");
      if (a && b && c) {
        b = a.hq(c, this.get("altitude"));
        a.get("size");
        c = g.h.KE(this.qh);
        if (g.l.uh || g.l.$p) c.width = this.qh.childNodes[0].offsetWidth + 14;
        a = this.get("offset");
        c = this.get("isCustom") ? c.width / 2 : (c.width - 30) / 2;
        this.fc.style.left = Math.round(b.x - c + (a.x || 0)) + "px";
        this.fc.style.top = Math.round(b.y + (a.y || 0)) + "px";
        b = this.mea;
        if (this.YK && b.childNodes[0]) {
          for (c = a = 0; c < b.childNodes.length; c += 1) a += b.childNodes[0].clientHeight || 0;
          a > (this.get("size").height || b.clientHeight) ? this.YK.style.right = "20px": this.YK.style.right = "5px"
        }
      }
    },
    R5: function() {
      var a = new g.F(2 - this.qh.offsetWidth / 2, 2 - this.qh.offsetHeight),
        b = this.get("offset") || new g.F(0, 0);
      this.get("isCustom") || (a = a.add(new g.F(0, -23)));
      return a.add(b)
    },
    altitudeChanged: function() {
      this.Wk()
    },
    BQ: function() {
      if (this.get("position") && this.get("autoMove") && this.qh) {
        for (var a = this.map,
               b = new g.bd(this.qh.offsetWidth, this.qh.offsetHeight), c = a.hq(this.get("position"), this.get("altitude")).add(this.R5()), d = c.add(b.SA()), e = a.get("size"), f = a.Xfa(), h = 0, k = 0, l = 0; l < f.length; l += 1) {
          var m = f[l],
            n = 0,
            p = 0;
          0 === m[1] && 0 === m[2] ? (n = m[3] - (c.x + h), p = m[0] - (c.y + k), 0 < n && 0 < p && (Math.abs(n) < Math.abs(p) ? h += n: k += p)) : 0 === m[2] && 0 === m[3] ? (n = e.di() - m[1] - (d.x + h), p = m[0] - (c.y + k), 0 > n && 0 < p && (Math.abs(n) < Math.abs(p) ? h += n: k += p)) : 0 === m[0] && 0 === m[3] ? (n = e.di() - m[1] - (d.x + h), p = e.ai() - m[2] - (d.y + k), 0 > n && 0 > p && (Math.abs(n) < Math.abs(p) ? h += n: k += p)) : 0 === m[0] && 0 === m[1] && (n = m[3] - (c.x + h), p = e.ai() - m[2] - (d.y + k), 0 < n && 0 > p && (Math.abs(n) < Math.abs(p) ? h += n: k += p))
        }
        c = c.add(new g.F(h, k));
        d = d.add(new g.F(h, k));
        l = f = 0;
        0 > c.x || b.di() > e.di() ? f = 20 - c.x: e.di() < d.x && (f = e.di() - d.x - 25);
        0 > c.y || b.ai() > e.ai() ? l = 5 - c.y: e.ai() < d.y && (l = e.ai() - d.y - 15);
        f += h;
        l += k; (f || l) && a.D.panBy(f, l)
      }
    },
    Zda: function() {
      this.get("closeWhenClickMap") && (this.map.g("clickstart", this.BT, this, !1), this.map.g("clickend", this.AT, this, !1))
    },
    BT: function() {
      this.qj.Qh && this.qj.getIsOpen() && (this.qj.sG = !0)
    },
    AT: function() {
      this.qj.Qh && (this.qj.sG && this.qj.close(), this.qj.sG = !1)
    },
    Of: function() {
      this.fc && this.map && (this.qj.sG = !1, this.get("closeWhenClickMap") && (this.map.H("clickstart", this.BT, this), this.map.H("clickend", this.AT, this)), this.get("retainWhenClose") ? this.map.gk.appendChild(this.fc) : (this.fc.parentNode === this.map.Qa.A && this.map.Qa.A.removeChild(this.fc), this.qj.A = null), this.map = null, this.qj.Qh = !1, this.Pc.o("close", {
        type: "close",
        target: this.Pc
      }))
    },
    jpa: function() {
      if (!this.get("isCustom")) return this.qh.offsetWidth;
      for (var a = this.gh,
             b = a.firstChild,
             c = a.lastChild; b && c && b.style && c.style && b === c;) a = b,
        b = a.firstChild,
        c = a.lastChild;
      a = g.h.Ad(a, "width");
      return a = parseInt(a.replace("px", ""), 10)
    },
    renderChanged: function() {
      this.Wk()
    },
    positionChanged: function() {
      this.map && this.fc && (this.Wk(), this.BQ())
    },
    offsetChanged: function() {
      this.positionChanged()
    },
    contentChanged: function() {
      this.Oq();
      this.kP();
      this.Wk()
    },
    sizeChanged: function() {
      this.Oq();
      this.kP();
      this.Wk()
    }
  }); g.ra = {}; g.ra.ke = g.X.extend({
    ea: [g.la, g.Ee],
    r: function() {},
    ab: function() {
      return new this.r(this.La)
    },
    TL: function() {
      return this.La
    },
    setCoords: function(a) {
      this.xla(a)
    },
    xla: function(a) {
      this.Rs = this.ed();
      this.Df = null;
      if (g.ra.qc && this instanceof g.ra.qc) {
        var b = a.length;
        this.bf = Array(b);
        for (var c, d, e = 0; e < b; e += 1) if (c = a[e], d = new g.ra.UP(c), this.bf[e] = d, 0 === e) {
          if (0 === c.length) break;
          d.io(c) || c.reverse()
        } else 0 !== c.length && d.io(c) && c.reverse()
      } else this.La = a
    }
  }); g.ra.le = g.extend({},
    {
      Pt: "point",
      UG: "linestring",
      TP: "linearring",
      xB: "polygon",
      aH: "multipoint",
      $G: "multilinestring",
      uB: "multipolygon",
      poa: "geometrycollection"
    }); g.ah = g.X.extend({
    ea: [g.la, g.Ee],
    r: function(a) {
      a = a || {};
      a.Vx && (this.Vx = a.Vx);
      a.MI && (this.MI = a.MI);
      a.MS && (this.MS = a.MS);
      this.map = a.map;
      this.yk = a.mI || g.c.Pb(this);
      this.name = a.name || "";
      this.rf = !1;
      this.set("visible", !0, !0);
      this.tO(a.Z);
      this.Tj = a.oG;
      this.style = a.style
    },
    Sea: function() {
      this.style = this.Tj = this.np = this.rZ = this.Z = this.name = this.map = null;
      this.Lo();
      this.Bi()
    },
    Iga: function() {
      return this.Tj
    },
    Lla: function(a) {
      this.Tj = a;
      this.zIndex = this.Tj[0].aj || this.zIndex
    },
    cc: function() {
      return this.Z
    },
    tO: function(a) {
      a && (this.Z = a, this.V("coords", a, !0), this.Vx || this.MI) && (a.V("radius", this), a.V("center", this), a.V("resolution", this), a.V("strokeWeight", this))
    },
    setStyle: function(a) {
      this.Lla(a);
      this.Op()
    },
    coordsChanged: function() {
      this.Op()
    },
    radiusChanged: function() {
      this.Z.Rs = this.Z.ed();
      this.Z.Df = null;
      this.Op()
    },
    Op: function(a) {
      this.set("feature", {
        target: this,
        Lea: a,
        Rs: this.Z.Rs || this.Z.ed(),
        Mia: this.Z.ed()
      });
      this.Z.Rs = this.Z.ed()
    },
    visibleChanged: function() {
      this.Op()
    },
    vra: function(a) {
      for (var b = 0; b < this.Tj.length; b += 1) {
        var c = this.Tj[b];
        if (a.Ya(c.Wu(this))) return c
      }
    },
    dga: function() {
      var a = this.cc(),
        b = [];
      a.th() === g.ra.le.xB || a.th() === g.ra.le.uB ? b.push(new g.style.Zd.qc({
        fillColor: "#78cdd1",
        Md: 0.2,
        strokeColor: "#122e29",
        bb: 0.5,
        Rb: 1
      })) : a.th() === g.ra.le.UG || a.th() === g.ra.le.TP || a.th() === g.ra.le.$G ? b.push(new g.style.Zd.ln({
        color: "#888888",
        width: 1,
        zIndex: 10
      })) : a.th() !== g.ra.le.Pt && a.th() !== g.ra.le.aH || b.push(new g.style.Zd.dh({
          url: g.w.Ab + "/theme/v1.3/markers/0.png",
          width: 36,
          height: 36,
          rotation: 0,
          uua: -12,
          vua: -36,
          zIndex: 100
        }));
      return b
    }
  }); g.ah.koa = "geometry"; g.ra.Tf = g.ra.ke.extend({
    r: function(a, b) {
      this.La = a;
      this.hi = b;
      this.Df = null
    },
    ed: function() {
      if (!this.Df) {
        var a = this.La[0],
          b = this.La[1];
        if (this.hi) this.Df = [a, b, a, b];
        else {
          var c = this.get("radius"),
            d = this.get("resolution") * this.get("strokeWeight") || 0,
            c = c ? c / Math.cos(Math.PI * this.get("center").N / 180) : 0;
          this.Df = [a - c - d, b - c - d, a + c + d, b + c + d]
        }
      }
      return this.Df
    },
    th: function() {
      return g.ra.le.Pt
    }
  }); g.M = {
    canvas: {},
    Ld: {},
    Sf: {},
    ee: {}
  }; g.M.Gc = g.X.extend({
    ea: [g.la, g.Ee],
    r: function(a, b) {
      this.j = a;
      this.hi = a.ba.hi;
      this.Q = b;
      this.f = b.f;
      this.V("display", b)
    },
    ds: function() {
      this.Sv && this.Sv();
      this.Lo();
      this.f = this.Q = this.j = null
    },
    vs: function(a, b) {
      var c = this.zoom,
        d = [],
        e = this.j;
      if (Math.floor(c) !== c) b(d, e);
      else {
        c = [a.x, a.y];
        if (e.Cl) {
          for (var f = e.cg,
                 h = !0,
                 k = [], l = 0; l < f.length; l += 1) {
            var m = f[l].Og;
            if (m) if (m.parentNode && m.parentNode.parentNode && this.Q && m.parentNode.parentNode !== this.Q.gk && "none" !== m.parentNode.style.display) {
              var n = g.h.zz(m),
                m = n[0],
                n = n[1];
              if (m && n) {
                var p = Math.max(Math.abs(f[l].get("offset").x), Math.abs(f[l].get("offset").y)) + Math.max(m, n);
                e.Pe = Math.max(e.Pe, p);
                e.wf = Math.max(e.wf, p);
                f[l].width = m;
                f[l].height = n
              } else h = !1,
                k.push(f[l])
            } else h = !1,
              k.push(f[l])
          }
          h ? (e.Cl = !1, e.cg = []) : e.cg = k
        }
        f = Math.max(e.Pe, e.Nv || 0) * this.P;
        h = Math.max(e.wf, e.Nv || 0) * this.P;
        k = 0;
        e.Mv && (k = e.Mv / Math.cos(Math.PI * this.f.get("center").N / 180));
        h = Math.max(h, k || 0);
        f = Math.max(f, k || 0);
        if (f = e.Bj([c[0] - f, c[1] - h, c[0] + f, c[1] + h])) {
          for (var q in f) if (f.hasOwnProperty(q) && (h = f[q], h.get("visible") && !h.get("noSelect"))) if (k = h.cc(), k instanceof g.ra.Tf) if (this.hi) {
            l = this.j.Tk;
            l instanceof Array && (l = "number" === typeof h.Ua.style && l[h.Ua.style] ? l[h.Ua.style] : l[0]);
            var m = l.size.width * this.P,
              n = l.size.height * this.P,
              p = l.anchor.x * this.P,
              s = l.anchor.y * this.P,
              k = k.La,
              r = l.rotation_,
              u = [c[0], c[1]];
            if (r) {
              var w = (c[0] - k[0]) / this.P,
                v = (c[1] - k[1]) / this.P,
                t = r,
                r = Math.cos( - t),
                x = Math.sin( - t),
                t = w * r - v * x,
                w = w * x + v * r;
              u[0] = k[0] + t * this.P;
              u[1] = k[1] + w * this.P
            }
            m = g.G.HK([[u[0] - m + p, u[1] - n + s], [u[0] + p, u[1] + s]]);
            g.G.qd(m, k) && d.push(h)
          } else if ("undefined" !== typeof k.get("radius")) l = k.La,
            l = new g.F(l[0], l[1]),
            m = new g.F(c[0], c[1]),
            k = k.get("radius"),
            "px" === h.get("unit") ? m.ae(l) / Math.pow(2, 20 - this.zoom) < k && d.push(h) : m.ae(l) * Math.cos(h.get("center").N * Math.PI / 180) <= k / this.po * Math.pow(2, 20 - this.zoom) && d.push(h);
          else {
            if (l = h.get("params"), l.visible) {
              k = k.La;
              r = l.Ru % 360;
              u = [c[0], c[1]];
              r && (w = (c[0] - k[0]) / this.P, v = (c[1] - k[1]) / this.P, t = Math.PI * r / 180, r = Math.cos( - t), x = Math.sin( - t), t = w * r - v * x, w = w * x + v * r, u[0] = k[0] + t * this.P, u[1] = k[1] + w * this.P);
              m = h.width * this.P;
              n = h.height * this.P;
              p = l.offset.x * this.P;
              s = l.offset.y * this.P;
              w = l.verticalAlign;
              switch (l.textAlign) {
                case "center":
                  p -= m / 2;
                  break;
                case "right":
                  p -= m
              }
              switch (w) {
                case "middle":
                  s -= n / 2;
                  break;
                case "bottom":
                  s -= n
              }
              m = g.G.HK([[u[0] - m - p, u[1] - n - s], [u[0] - p, u[1] - s]]);
              k[0] instanceof Array || (k = [k]);
              for (n = k.length - 1; 0 <= n; n -= 1) if (g.G.qd(m, k[n])) {
                l.shape ? this.Oz(h, u, k) && d.push(h) : d.push(h);
                break
              }
            }
          } else k.qd ? k.qd(c) && d.push(h) : k.gv && 1.8 * k.gv(c) <= h.get("strokeWeight") * this.P && d.push(h);
          this.hi ? d.sort(function(a, b) {
            return a.yk > b.yk ? -1 : 1
          }) : d.sort(function(a, b) {
            return a.get("isTop") ? -1 : b.get("isTop") ? 1 : a.get("zIndex") > b.get("zIndex") || a.get("zIndex") === b.get("zIndex") && a.yk > b.yk ? -1 : 1
          });
          b(d, e)
        } else b([], e)
      }
    },
    Oz: function(a, b, c) {
      var d = (b[0] - c[0][0]) / this.P;
      b = (b[1] - c[0][1]) / this.P;
      a = a.get("params");
      c = a.offset;
      var d = [d - c.x, b - c.y],
        e;
      a = a.shape;
      if ("circle" === a.B.type) {
        if (b = a.B.coords[0], c = a.B.coords[1], Math.sqrt((d[0] - b) * (d[0] - b) + (d[1] - c) * (d[1] - c)) <= a.B.coords[2]) return ! 0
      } else {
        if ("poly" === a.B.type) return e = a.B.coords,
          e = this.QD(e),
          g.ad.qd(d, e);
        if ("rect" === a.B.type) return e = a.B.coords,
          a = e[0],
          b = e[1],
          c = e[2],
          e = e[3],
          e = [[a, b], [c, b], [c, e], [a, e]],
          g.ad.qd(d, e)
      }
      return ! 1
    },
    QD: function(a) {
      for (var b = [], c = 0; c / 2 < a.length / 2; c += 2) b.push([a[c], a[c + 1]]);
      return b
    },
    KX: function(a, b, c, d, e, f, h) {
      var k = ["position:absolute;"];
      k.push("top:" + Math.round(c) + "px;");
      k.push("left:" + Math.round(b) + "px;");
      k.push("width:" + Math.round(d) + "px;");
      k.push("height:" + Math.round(e) + "px;");
      1 > f && ("opacity" in a.style ? (k.push("opacity"), k.push(":"), k.push(f), k.push(";")) : 8 <= document.documentMode ? (k.push("-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity="), k.push(Math.ceil(100 * f)), k.push(")';")) : (k.push("filter:alpha(opacity="), k.push(Math.ceil(100 * f)), k.push(");")));
      k.push("z-index:" + h + ";");
      k.join("");
      g.h.I0(a, k.join(""))
    }
  }); g.M.Sb = g.X.extend({
    ea: [g.la, g.Ee],
    r: function(a) {
      this.f = a;
      this.gk = a.gk;
      this.I = a.Qa.q;
      this.V("display", a);
      this.V("rotateEnable", a);
      this.V("style", a);
      this.V("hightlight", a)
    },
    wN: function(a) {
      this.Gd = a || g.c.rj("ff" + this.f.Gd.slice(1))
    },
    vs: function(a, b, c, d) {
      function e(a, d) {
        a.length && (h[g.c.indexOf(b, d)] = a);
        k -= 1;
        0 >= k && (c(h), k = 0)
      }
      for (var f = b.length,
             h = [], k = 0, l, m = [], n = 0; n < f; n += 1) l = b[n],
      l instanceof g.q.Oc && l.get("visible") && (m.push(this.xs(l)), k += 1);
      for (f = 0; f < m.length; f += 1) m[f].vs(a, e, d)
    }
  }); g.IW = {
    pg: function(a, b) {
      for (var c = [], d = 0, e = a.length; d < e; d += 2) {
        var f = 0,
          f = "str" === b ? g.c.Td(parseInt(a.substr(d, 2), 16) / (0 === d ? 255 : 1), 3) : g.c.Td(parseInt(a.substr(d, 2), 16) / 255, 3);
        c.push(f)
      }
      c.push(c.shift());
      return "str" === b ? "rgba(" + c.join(",") + ")": c
    },
    u_: function(a, b, c) {
      if (b[c]) console.log("customType repeat!!", c);
      else {
        var d = {};
        d.visible = void 0 === a.visible ? !0 : a.visible;
        d.Sla = void 0 === a.showLabel ? !0 : a.showLabel;
        d.Rk = void 0 === a.showIcon ? !0 : a.showIcon;
        if (void 0 !== a.color) {
          var e = "",
            f = "";
          a.color && (e = this.pg(a.color, "str"), f = this.pg(a.color));
          d.color = {
            canvas: e,
            Sf: f
          }
        } else d.opacity = a.opacity;
        void 0 !== a.fillColor ? (f = e = "", a.fillColor && (e = this.pg(a.fillColor, "str"), f = this.pg(a.fillColor)), d.fillColor = {
          canvas: e,
          Sf: f
        }) : d.Md = a.fillOpacity;
        void 0 !== a.strokeColor ? (f = e = "", a.strokeColor && (e = this.pg(a.strokeColor, "str"), f = this.pg(a.strokeColor)), d.strokeColor = {
          canvas: e,
          Sf: f
        }) : d.bb = a.strokeOpacity;
        void 0 !== a.textFillColor ? (f = e = "", a.textFillColor && (e = this.pg(a.textFillColor, "str"), f = this.pg(a.textFillColor)), d.qma = {
          canvas: e,
          Sf: f
        }) : d.rma = a.textFillOpacity;
        void 0 !== a.textStrokeColor ? (f = e = "", a.textStrokeColor && (e = this.pg(a.textStrokeColor, "str"), f = this.pg(a.textStrokeColor)), d.sma = {
          canvas: e,
          Sf: f
        }) : d.tma = a.textStrokeOpacity;
        void 0 !== a.backgroundColor ? (f = e = "", a.backgroundColor && (e = this.pg(a.backgroundColor, "str"), f = this.pg(a.backgroundColor)), d.backgroundColor = {
          canvas: e,
          Sf: f
        }) : d.Wca = a.backgroundOpacity;
        a.texture && (d.pc = g.w.Xb + "://" + a.texture);
        b[c] = d
      }
    },
    MN: function(a, b, c, d) {
      if (a) for (var e in a) if (a.hasOwnProperty(e)) {
        var f = a[e],
          h = e;
        c && (h = c + ":" + e);
        if (f.detailedType) this.u_(f, b, h),
          this.MN(f.detailedType, b, h, f);
        else if (f.subType) this.MN(f.subType, b, h);
        else {
          if (void 0 !== f.code) {
            for (var k in d) d.hasOwnProperty(k) && void 0 === f[k] && void 0 !== d[k] && "isDetailed" !== k && "detailedType" !== k && (f[k] = d[k]);
            h = c + ":" + f.code
          }
          this.u_(f, b, h)
        }
      }
    },
    styleChanged: function() {
      if (this.f.D.vh) {
        var a = {};
        this.MN(this.f.get("style"), a);
        this.Zr = a;
        var a = this.Zr["regions:land"],
          b = this.Zr.water,
          c = this.Zr.sky,
          d = this.Zr.buildings,
          e,
          f,
          h,
          k,
          l;
        if (a) {
          var m = "rgba(0,0,0,0)";
          if (a.visible) {
            var n = this.us(g.c.t0(this.f.Gd.substr(1)), a.opacity, a.color);
            n && (m = n, e = this.Tp(g.c.ct(this.f.Gd.substr(1)), a.opacity, a.color))
          }
          this.f.iz = m
        } else this.f.iz = "";
        b && b.visible && (f = this.Tp(g.c.ct(this.f.uD.substr(1)), b.opacity, b.color));
        c && c.visible && (h = this.Tp(g.c.ct(this.f.By.substr(1)), void 0, c.color));
        d && (d.visible ? (k = this.Tp(g.c.rj(this.f.JB[0]), void 0, d.fillColor), l = this.Tp(g.c.rj(this.f.JB[1]), void 0, d.strokeColor)) : (k = [1, 1, 1, 0], l = [1, 1, 1, 0]));
        this.wN && this.wN(e, f, h, [k, l]);
        this.b2 ? this.b2(this.Zr) : this.set("display")
      }
    },
    us: function(a, b, c) {
      if (a) {
        if (void 0 !== b) return a = a.split(","),
          a[3] = g.c.Td(parseFloat(b), 3) + ")",
          a.join(",");
        if (c) return c.canvas
      }
      return a
    },
    Tp: function(a, b, c) {
      if (a) {
        if (void 0 !== b) return [a[0], a[1], a[2], g.c.Td(parseFloat(b), 3)];
        if (c) return c.Sf
      }
      return a
    },
    GE: function(a, b) {
      if (void 0 !== b) {
        var c = this.Zr[a + ":" + b];
        if (c) return c
      }
      return this.Zr[a]
    },
    Ak: function(a, b, c, d) {
      var e = null,
        f = a;
      d = d ? this.us: this.Tp;
      if (e = this.GE(b)) if (e.visible) {
        var f = 1,
          h = "";
        if (c) if (e.fillColor || e.Md) f = e.Md,
          h = e.fillColor;
        else {
          if (e.color || e.opacity) f = e.opacity,
            h = e.color
        } else if (e.strokeColor || e.bb) f = e.bb,
          h = e.strokeColor;
        else if (e.color || e.opacity) f = e.opacity,
          h = e.color;
        f = d(a, f, h)
      } else f = "";
      this.Yp === b && (f = this.ws(f || a));
      return f
    },
    Sp: function(a, b, c) {
      c = c ? this.us: this.Tp;
      var d = null,
        e = a; (d = this.GE(b)) && (e = d.visible ? c(a, d.opacity, d.color) : "");
      this.Yp === b && (e = this.ws(e || a));
      return e
    },
    ov: function(a, b, c, d, e) {
      var f = a,
        h = b,
        k = c,
        l = !0,
        m = !0,
        n = 1,
        p = this.GE(d, e);
      p && (p.visible && p.Sla ? (f = this.us(a, p.rma, p.qma), h = this.us(b, p.tma, p.sma), k = this.us(c, p.Wca, p.backgroundColor), l = p.Rk) : (m = l = !1, f = h = k = ""));
      p = !1;
      this.Yp === d ? p = !0 : void 0 !== e && this.Yp === d + "-" + e && (p = !0);
      p && (f = this.ws(f || a), h = this.ws(h || b), k = this.ws(k || c), n = 1 - 1.6 * this.zv, m = l = !0);
      return [f, h, k, l, m, n]
    },
    qs: function(a, b, c, d) {
      var e = null,
        f = a,
        h = b;
      d = d ? this.us: this.Tp;
      if (e = this.GE(c)) e.visible ? (f = d(a, e.Md, e.fillColor), h = d(b, e.bb, e.strokeColor)) : f = h = "";
      this.Yp === c && (b = h || b, f = this.ws(f || a), h = this.ws(b));
      return [f, h]
    }
  }; g.M.Sb.vb(g.IW); g.M.canvas.Sb = g.M.Sb.extend({
    r: function(a) {
      arguments.callee.ma.apply(this, arguments);
      this.type = "2D"
    },
    xs: function(a) {
      if (!a.M) {
        var b = a.xl(this);
        b && !b.sea && (a.M = b)
      }
      return a.M
    },
    oc: function(a) {
      var b = -1 !== this.f.get("mapStyle").indexOf("normal") ? this.f.Gd: this.f.iz;
      b && this.ZN !== b && this.f.D.vh && (this.f.H0(b), this.ZN = b);
      this.f.Qa.zp.style.cssText = "";
      for (var c = a.za,
             b = a.R,
             d = this.f.D.get("features"), e = a.size.width, f = a.size.height, h = 0; h < c.length; h += 1) {
        var k = c[h],
          l = this.xs(k),
          m = c[h].Bl();
        if (l && l.j) if (!m.visible || m.vd[0] > b.zoom || m.vd[1] < b.zoom || k.ia && 0 === k.ia.length) {
          if (l = l.Gi()) if (l.length) for (m = 0; m < l.length; m += 1) l[m].parentNode === this.I && this.I.removeChild(l[m]);
          else l.parentNode === this.I && this.I.removeChild(l)
        } else if (this.TM(k, d)) {
          l.oc(a, m);
          var k = l.Gi(),
            n,
            p,
            q = l.transform;
          if (!q || !k || l.Kf && !this.f.D.pa) c[h].Dj && k.parentNode !== this.I && (this.I.appendChild(k), c[h].Cb = k);
          else {
            c[h].Cb = k;
            k.length || (k = [k], q = [q]);
            for (var s = 0; s < k.length; s += 1) if (n = k[s], p = q[s], !p.yv) {
              var r = p.translate.x,
                u = p.translate.y;
              c[h].cF || (r = g.c.Td(r, 2), u = g.c.Td(u, 2));
              var w = p.scale;
              1E-5 > Math.abs(r) && (r = 0);
              1E-5 > Math.abs(u) && (u = 0);
              var v = [];
              v.push("position:absolute");
              v.push("z-index:" + (p.aj || c[h].get("zIndex")));
              c[h].oz ? (v.push("top:" + Math.floor(f / 2 + u) + "px"), v.push("left:" + Math.floor(e / 2 + r) + "px")) : n.ZY ? (v.push("height:" + n.height * w + "px"), v.push("width:" + n.width * w + "px"), v.push("top:" + (f / 2 - u * w) + "px"), v.push("left:" + (e / 2 - r * w) + "px")) : (1 !== w && (v.push(g.h.Jq[g.h.Af] + "-origin:" + r + "px " + u + "px"), v.push(g.h.Jq[g.h.Af] + ":scale3d(" + w + "," + w + ",1)")), v.push("top:" + Math.floor(f / 2 - u) + "px"), v.push("left:" + Math.floor(e / 2 - r) + "px"), l.Lf && (v.push("height:" + n.height + "px"), v.push("width:" + n.width + "px")));
              l.cF || 1 === m.opacity || "number" !== typeof m.opacity || v.push(g.h.QX(n, m.opacity));
              n.parentNode !== this.I && this.I.appendChild(n);
              g.h.I0(n, v.join(";"))
            }
          }
        }
      }
      a = this.f.Qa.zp;
      k = this.f.Qa.q;
      c = this.f.Qa.A;
      g.h.Af && "number" === typeof b.rotation && 0 !== b.rotation ? (a.style[g.h.Af + "Origin"] = e / 2 + "px " + f / 2 + "px", a.style[g.h.Af] = "rotate(" + b.rotation + "deg)", a.style.overflow = "visible", k.style.overflow = "visible", c.style.overflow = "visible") : (a.style.cssText = "", k.style.cssText = "-webkit-transform: translateZ(0);", c.style.cssText = "");
      this.f.kt = !1
    },
    TM: function(a, b) {
      if ("all" === b || void 0 === a.rk) return ! 0;
      for (var c = 0,
             d = a.rk.length; c < d; c++) if (g.c.ea(b, "region" === a.rk[c] ? "bg": a.rk[c])) return ! 0;
      return ! 1
    }
  }); g.M.Fh = g.M.Gc.extend({
    r: function(a, b) {
      arguments.callee.ma.apply(this, arguments);
      this.V("reload", a, !0);
      var c = a.ba.get("cacheSize");
      if (this.f && this.f.D) {
        var d = this.f.D.get("tileCacheSize");
        d && 0 < d && (c = d)
      }
      this.ja = new g.zf(c);
      var e = this;
      this.ja.xN.CV(function(a) {
        e.Bx(a)
      });
      this.tc = 1;
      this.sn = 50;
      this.DQ = !0;
      this.j.ja = this.ja;
      this.Ek = new g.qB(6, null, a.zL);
      new g.qB(5, null, a.zL)
    },
    Sv: function() {
      this.clear();
      this.ja.clear();
      this.Uc && (this.Uc.H("tiles", this.AF, this), this.Uc.H("ack", this.zF, this), this.Uc.H("disable", this.yF, this), this.Uc = null);
      this.Lf && g.C.H(this.Oa, "webglcontextlost", this.jA, this);
      this.f.H("zoomend", this.yj, this);
      this.f.H("moveend", this.yj, this)
    },
    reloadChanged: function() {
      this.j && (this.j.pa = !1);
      this.ja.clear();
      this.reload = !0;
      this.set("display")
    },
    ii: function(a, b, c) {
      function d(b) {
        a.loaded = !0;
        e.j && (a.status = "loaded", a.na = !0, a.ac = b, e.set("display", 0), "function" === typeof c && c())
      }
      var e = this;
      a.status = "loading";
      e.ja.set(a.key, a);
      this.j.zm && this.j.zm.call(this, a, d,
        function() {
          a.loaded = !0;
          e.j && (a.status = "loaded", a.na = !0, "function" === typeof c && c())
        })
    },
    Fma: function(a, b, c, d) {
      var e = [];
      c = c || 18;
      b = Math.pow(2, b - c);
      for (var f = 0; f < a.length; f += 1) {
        var h = a[f].qa,
          k = Math.floor(h.x / b),
          h = Math.floor(h.y / b);
        d ? (k = c + "/" + k + "/" + h, h = this.ja.get(k)) : (h = new g.cm(c, k, h), k = h + "", h = new g.eb(h)); ! e[k] && h && (e.push(h), e[k] = 1)
      }
      return e
    },
    Kl: function(a) {
      for (var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1, c = a.length - 1; 0 <= c; c -= 1) {
        var d = a[c];
        if (d.length) {
          if (this.j.Jy) {
            for (var e = [], f = d.length - 1; 0 <= f; f -= 1) {
              var h = d[f],
                k = h.qa;
              this.j.f.dp.QA(k.x, k.y, k.z) ? e.push(d[f]) : (this.ja.set(h.key, h), h.loaded = !0, h.status = "loaded", h.na = !0, h.ta = {})
            }
            d = e;
            a[c] = e;
            if (0 == e.length) continue
          }
          if (this.Ji) {
            if (this.f.eB) break;
            e = d[0].qa.z;
            18 < e && (d = this.Fma(d, e));
            this.lt(d, this.Lf ? 1 : 0);
            for (h = f = 0; f < d.length;) this.fN(d.slice(50 * h, 50 * h + 50), e, b),
              f += 50,
              h += 1
          } else {
            var l = this,
              e = function() {
                var a = d.length;
                return function() {
                  if (0 === --a) {
                    var b = {
                      key: "rb",
                      index: 0,
                      id: l.f.D.id
                    };
                    l.j.ba.Pi || (g.me.Fe.end(b), g.me.Fe.end(g.extend(b, {
                      index: 1
                    })))
                  }
                }
              } ();
            this.lt(d);
            this.mo += d.length;
            for (f = d.length - 1; 0 <= f; f -= 1) this.ii(d[f], this.Ek, e)
          }
        }
      }
    },
    uv: function(a, b) {
      var c = this.ja.get(a + "");
      c || b || (c = new g.eb(a.ab()));
      return c
    },
    jG: function(a, b) {
      return this.Od * Math.pow(2, a - b)
    },
    Bx: function(a) {
      a.cq && this.Ek.kW(a.cq);
      a.VF = !1;
      a.loaded = !1
    },
    Vu: function(a, b) {
      var c = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0) || this.fb,
        d = a.jd.x,
        e = a.jd.y,
        f = a.Mb.x,
        h = a.Mb.y;
      new g.F(0, 0);
      var k = this.jG(20, c);
      b && (f = Math.max(b[0], f) - b[0], h = Math.max(b[1], h) - b[1], d = Math.min(b[2], d) - b[0], e = Math.min(b[3], e) - b[1], new g.F(Math.floor(b[0] / k), Math.floor(b[1] / k)));
      d /= k;
      e /= k;
      d = {
        xc: 0 === d % 1 ? d - 1 : Math.floor(d),
        nc: 0 === e % 1 ? e - 1 : Math.floor(e),
        yc: Math.floor(f / k),
        Vb: Math.floor(h / k)
      };
      d.LF = d.xc - d.yc + 1;
      d.tka = d.nc - d.Vb + 1;
      d.z = c;
      d.P = this.P * Math.pow(2, this.zoom - c);
      d.ME = Math.ceil(d.LF / 2);
      return d
    },
    Fs: function(a, b, c) {
      return b < a.yc || b > a.xc || c < a.Vb || c > a.nc ? !1 : !0
    },
    lt: function(a, b) {
      if (a.length) {
        var c = this.lb.Rc(this.Od << 20 - a[0].qa.z),
          d = Math.floor(c.x),
          e = Math.floor(c.y);
        a.sort(function(a, c) {
          var k = a.qa,
            l = c.qa,
            m = k.x - d,
            k = k.y - e,
            n = l.x - d,
            l = l.y - e;
          return (b ? -1 : 1) * (n * n + l * l - (m * m + k * k))
        })
      }
    },
    clear: function() {
      this.Ek.clear()
    },
    Sl: function(a, b) {
      this.Cf = !1;
      this.clear();
      this.Kh = b.Kh;
      this.Jh = b.Jh;
      this.Od = b.Od;
      var c = a.R;
      this.af = b.af || a.R.af;
      this.Rh = c.Rh;
      this.size = a.size;
      this.rotation = c.rotation;
      this.lb = c.lb;
      this.Ba = a.R.Ba;
      this.zoom && (this.tq = c.zoom > this.zoom ? "in": c.zoom < this.zoom ? "out": !1);
      this.Se = a.Se;
      this.bg = a.bg;
      this.zoom = c.zoom;
      this.fe = c.fe;
      this.fb = !1 === this.Ji && !this.j.FY && this.j.ka ? this.fe + 1 : this.fe;
      this.Me && this.fb > this.Me && (this.fb = this.Me);
      this.Vm && this.fb < this.Vm && (this.fb = this.Vm);
      this.P = c.P;
      this.uf = c.uf;
      c = a.R.Ba;
      this.ji = this.Vu(c, b.G);
      this.Dt = c.z2 ? this.Vu(c.z2, b.G) : null;
      var c = this.ji,
        d = this.Ba.r1,
        e = null,
        e = d < this.zoom && this.Dt ? this.Dt: c,
        f = [],
        h = [],
        k,
        l = [],
        m = [],
        n = [],
        p = new g.cm(0, 0, 0),
        q,
        s = this.zoom,
        m = this.ek || "",
        r = {},
        u = {},
        w,
        v,
        t,
        x,
        B,
        z;
      this.$c = 1E6 * Math.random() << 0;
      for (q = m.length - 1; 0 <= q; q -= 1) if (k = m[q], !(k.$t < b.opacity)) if (p.z = k.qa.z, p.x = k.qa.x, p.y = k.qa.y, p.z === this.fb) r[p + ""] |= 16;
      else if (p.z < this.fb) {
        if (r[p + ""] |= 64, this.Kh) for (x = this.fb - p.z, w = Math.max(c.yc, p.x << x), s = Math.min(c.xc, (p.x + 1 << x) - 1), v = Math.max(c.Vb, p.y << x), t = Math.min(c.nc, (p.y + 1 << x) - 1), p.z = this.fb, x = w; x <= s; x += 1) for (p.x = x, B = v; B <= t; B += 1) p.y = B,
          z = p + "",
          r[z] |= 32,
          u[z] = u[z] ? Math.max(k.qa.z, u[z]) : k.qa.z
      } else if (this.Jh) for (w = 1; p.z >= this.fb;) {
        r[p + ""] |= w;
        w = p.x >> 1;
        v = p.y >> 1;
        s = w << 1;
        t = v << 1;
        k = 0;
        for (x = 2; 0 < x; x -= 1) for (p.x = s + x, B = 2; 0 < B; B -= 1) p.y = t + B,
        r[p + ""] & 5 && (k += 1);
        p.z -= 1;
        p.x = w;
        p.y = v;
        w = 4 === k ? 4 : 2
      }
      m = [];
      p.z = this.fb;
      q = !0;
      this.ja.qW();
      for (x = e.yc; x <= e.xc; x += 1) for (p.x = x, B = e.Vb; B <= e.nc; B += 1) p.y = B,
        k = this.uv(p),
        this.tr(k),
        w = !1,
        k.na ? (k.$c = this.$c, this.Fs(c, x, B) && (m.push(k), this.fj && (k.tc !== this.tc || 1 > k.$t) && (w = !0))) : (q = !1, this.Fs(c, x, B) && (w = !0), k.status && !k.Xe || this.fe !== d || this.Dt && !this.Fs(this.Dt, x, B) || l.push(k)),
      w && n.push(k);
      q ? (this.uz || (this.uz = !0), this.j.pa || (k = {
        key: this.j.Kf ? "rl": "rb",
        index: 1,
        id: this.f.D.id
      },
      this.j.ba.Pi || (g.me.Fe.end(k), g.me.Fe.push({
        key: "ftc",
        Yd: m.length,
        id: this.f.D.id
      })))) : this.j.pa = !1;
      this.Cf = q;
      m.length && this.uz && (f.push(m), m.Cf = q);
      h.push(l);
      d = !1;
      if (this.Jh) {
        n = n.slice(0);
        e = [];
        for (q = n.length - 1; 0 <= q; q -= 1) k = n[q],
        r[k.key] & 4 || e.push(k);
        k = b.vd[1];
        for (s = this.fb + 1; n.length && s <= k; s += 1) {
          m = [];
          l = n;
          n = [];
          p.z = s;
          for (q = l.length - 1; 0 <= q; q -= 1) if (x = l[q], w = r[x.key], w & 7) for (w = x.qa.x << 1, v = x.qa.y << 1, x = 1; 0 <= x; x -= 1) for (p.x = w + x, B = 1; 0 <= B; B -= 1) p.y = v + B,
            z = p + "",
            t = this.ja.EF(z),
            r[z] & 5 && t && t.na ? (t.gy = !0, t.$c = this.$c, m.push(t), this.tr(t)) : n.push(new g.eb(p.ab()));
          m.length && (d = !0, f.push(m))
        }
        n = e
      }
      if (!d && this.Kh) for (x = !f.length || this.Lf ? b.vd[0] : Math.max(b.vd[0], this.fb - 2), Math.max(x, this.fb - this.S8), s = this.fb - 1; n.length && s >= x; s -= 1) {
        m = [];
        B = {};
        l = n;
        n = [];
        for (q = l.length - 1; 0 <= q; q -= 1) k = l[q],
          p.z = s,
          p.x = k.qa.x >> 1,
          p.y = k.qa.y >> 1,
          k = this.uv(p),
        B[k.key] || (B[k.key] = 1, w = !1, k.na && (!this.X$ || r[k.key] & 64) ? (p.x = Math.min(c.xc, Math.max(c.yc, p.x << this.fb - s)), p.y = Math.min(c.nc, Math.max(c.Vb, p.y << this.fb - s)), p.z = this.fb, z = p + "", "number" === typeof u[z] && k.qa.z > u[z] ? w = !0 : k.gy = !0, k.$c = this.$c, m.push(k), this.tr(k)) : w = !0, w && n.push(k));
        m.length && f.push(m)
      }
      this.Ms = this.mo = 0;
      this.Kl(h);
      this.Dg = f;
      this.j.set("tiles", f);
      this.Ws(a, b)
    },
    tr: function(a) {
      this.ja.Yz(a.Vra);
      a.wb && this.ja.Yz(a.wb.key)
    },
    jM: function(a, b) {
      for (var c = [], d = this.f.D.getCoordsBoundByZoom(a), d = this.Vu(d, b, a), e = d.yc; e < d.xc; e++) for (var f = d.Vb; f < d.nc; f++) {
        var h = [a, e, f].join("/");
        this.ja.gd(h) || c.push(new g.eb(new g.cm(a, e, f), !0))
      }
      return c
    },
    LH: function() {
      var a = this.f.D;
      return a.L_ && a.get("preloadMode") && 200 <= this.ja.yn && this.j.ba.Js() && this.tq && this.Lu && this.Lu() && this.zoom !== this.fb
    },
    Ws: function(a, b) {
      var c = b.G,
        d = b.vd;
      if (this.LH() && this.fb >= d[0] + 1) {
        var d = [],
          e = null,
          e = "out" === this.tq ? Math.floor(this.zoom) : Math.ceil(this.zoom),
          e = this.jM(e, c);
        e.length && d.push(e);
        d.length && this.Kl(d, !0)
      }
    }
  }); g.M.Ld.Fh = g.M.Fh.extend({
    r: function(a, b) {
      arguments.callee.ma.apply(this, arguments);
      this.sn = 120;
      this.Ji = !1;
      this.$f();
      this.Me = a.Me;
      this.Vm = a.Vm
    },
    Gi: function() {
      return this.Cb
    },
    $f: function() {
      this.Cb = document.createElement("div");
      this.Cb.className = this.j.ba.get("className") || "amap-layer";
      this.os = document.createDocumentFragment()
    },
    at: function(a) {
      var b = Math.pow(2, a.R.zoom - this.Ce),
        c = a.R.lb.Sa(this.dq).Rc(this.Si);
      this.transform = {
        translate: this.transform.translate.add(c),
        scale: b,
        rotate: 0
      };
      this.lb = a.R.lb
    },
    DK: function(a, b) {
      if (!this.va || 3E4 < Math.abs(this.lb.x - this.va.x) / this.P || 3E4 < Math.abs(this.lb.y - this.va.y) / this.P) this.va = this.lb;
      this.Ce = this.fe;
      this.Si = this.uf;
      this.Ri = !1;
      this.currentTime = +new Date;
      this.lP = b.lP;
      var c = this.ji;
      this.fj = this.sn && b.ID;
      var d = this.Dg,
        e = 256 * c.LF,
        c = 256 * c.tka;
      this.Se = this.zoom << 0 !== this.zoom;
      var f = this.lb.Sa(this.va);
      f.x < -g.c.ib / 2 && (f.x += g.c.ib);
      f.x > g.c.ib / 2 && (f.x -= g.c.ib);
      this.TK = f.Rc(this.uf);
      return [d, e, c, b]
    },
    fw: function(a, b) {
      var c = this.DK(a, b);
      this.yq.apply(this, c);
      this.gf(a);
      this.Cf && !this.j.pa && (c = this.j, c.ba.Pi || g.me.Fe.end({
        key: "rb",
        index: 2,
        id: this.f.D.id
      }), c.pa = !0, c.Wc ? c.ha("renderComplete") : (c.Wc = !0, c.ha("complete")))
    },
    oc: function(a, b) {
      this.Vq = a.Vq;
      this.bg = a.bg;
      this.Sl(a, b);
      this.dq && g.l.sk && (a.Se || a.bg) ? this.at(a, b) : this.fw(a, b);
      this.dq = this.lb;
      this.Ri && this.set("display", 0)
    },
    $s: function() {
      for (var a = this.Cb.childNodes,
             b = a.length - 1; 0 <= b; b -= 1) a[b] && a[b].tc !== this.tc && this.Cb.removeChild(a[b])
    },
    KF: function(a, b) {
      return a.Vb === b.Vb && a.yc === b.yc && a.nc === b.nc && a.xc === b.xc
    },
    yq: function(a) {
      var b = this.tc;
      this.tc += 1;
      var c = !1,
        d, e, f;
      e = !1;
      var h = [];
      this.va.x - this.lb.x < -g.c.ib / 2 ? this.va = new g.F(this.va.x + g.c.ib, this.va.y) : this.va.x - this.lb.x > g.c.ib / 2 && (this.va = new g.F(this.va.x - g.c.ib, this.va.y));
      for (d = a.length - 1; 0 <= d; d -= 1) if (f = a[d], f.length) {
        e = f[0].qa.z;
        for (var k, l, m = this.jG(this.fe, e), n = f.length - 1; 0 <= n; n -= 1) {
          l = f[n];
          this.kO(l);
          if (!l.wb && this.va === l.va && l.Ce === this.Ce) {
            var p = l.ac;
            if (p && p.parentNode === this.Cb && 1 === l.$t) {
              h.push(l);
              p.tc = this.tc;
              l.tc = this.tc;
              continue
            }
          }
          l.va = this.va;
          l.Ce = this.Ce;
          k = l.qa;
          var c = !0,
            q = (new g.F((k.x << 20 - e) * this.Od, (k.y << 20 - e) * this.Od)).Sa(this.va),
            q = q.Rc(this.uf);
          q.x = Math.floor(q.x);
          q.y = Math.floor(q.y);
          var s = 1;
          if (!l.xR || this.DQ && l.tc !== b) l.xR = this.currentTime;
          this.fj && !l.gy ? (p = Math.max(0, Math.abs(k.z - this.zoom) - 1), s = Math.min(1, (this.currentTime - l.xR) / (1 / Math.pow(1.32, p) * this.sn)), 1 !== s && (this.Ri = !0)) : l.gy = !1;
          l.tc = this.tc;
          l.$t = s;
          l.na ? (p = l.ac, !p && l.wb && l.wb.ac && (p = l.wb.ac), 0 !== s && p && (this.KX(p, q.x, q.y, m, m, s, k.z), p.parentNode !== this.Cb && (g.l.uh && "overlayer" === this.j.get("type") && (p.style.display = "none"), this.os.appendChild(p)), p.tc = this.tc, l.fe = this.fe, h.push(l))) : l.$c = null
        }
        e = !0
      }
      1 < a.length && (this.Ri = !0);
      this.ek = h;
      this.$s();
      this.Cb.appendChild(this.os);
      return c || !e
    },
    kO: function() {},
    gf: function() {
      this.transform = {
        translate: this.TK,
        scale: Math.pow(2, this.zoom - this.fe),
        rotate: 0
      }
    }
  }); window.CanvasRenderingContext2D && (window.CanvasRenderingContext2D.prototype.hL = function(a, b, c, d, e) {
    "undefined" === typeof e && (e = [10, 10]);
    this.moveTo(a, b);
    var f = c - a,
      h = d - b,
      k = Math.floor(Math.sqrt(f * f + h * h));
    d = f / k;
    c = h / k;
    e.xg = 0;
    for (var l = [], f = this.cE, m = 0, n = 0, p = !1, q = h = 0; q < e.length; q += 1) e.xg += e[q],
      l[q] = {
        sz: e[q] * d,
        tz: e[q] * c,
        Fv: h += e[q]
      },
      f -= e[q],
    0 > f && !p && (m = q, n = -f, p = !0);
    for (p = 0; n + p <= k;) n < e[m] ? (f = n * d, h = n * c) : (f = l[m].sz, h = l[m].tz),
      a += f,
      b += h,
      this.NA ? this.moveTo(a, b) : this.lineTo(a, b),
      p += n,
      this.NA = !this.NA,
      n = e[(m + 1) % e.length],
      m = (m + 1) % e.length;
    k -= p;
    a += k * d;
    b += k * c;
    this.NA ? this.moveTo(a, b) : this.lineTo(a, b);
    this.cE = (this.cE + p + k) % e.xg
  },
    window.CanvasRenderingContext2D.prototype.Cea = function(a, b, c, d) {
      "undefined" === typeof d && (d = [10, 10]);
      var e = 2 * Math.PI * c,
        f = 0 >= d ? e: Math.round(e / (d[0] + d[1])),
        h = (d[0] + d[1]) / e * 2 * Math.PI;
      d = d[0] / e * 2 * Math.PI;
      for (e = 0; e < f; e += 1) this.beginPath(),
        this.arc(a, b, c, e * h, e * h + d),
        this.stroke()
    }); g.M.ee.ak = g.M.Fh.extend({
    r: function(a, b) {
      arguments.callee.ma.apply(this, arguments);
      this.$f()
    },
    nM: function() {
      return this.Za.MO
    },
    Gi: function() {
      return this.Cb
    },
    $f: function() {
      this.Cb = document.createElement("div");
      this.Cb.className = "amap-markers";
      this.Za = new g.M.ee.Oc(this.Cb);
      this.Za.j = this.j;
      this.Q.I.appendChild(this.Cb)
    },
    Pq: function(a, b) {
      this.os = b.os;
      this.Hv = b;
      this.af = a.R.af;
      this.P = a.R.P;
      this.zoom = a.R.zoom;
      this.size = a.size;
      this.Ba = a.R.Ba;
      this.po = a.P;
      this.nb = a.R.lb;
      this.Rh = a.R.Rh;
      var c = !1;
      if (!this.va || 3E4 < Math.abs(this.nb.x - this.va.x) / this.P || 3E4 < Math.abs(this.nb.y - this.va.y) / this.P) c = !0;
      if (c || this.zoom << 0 !== this.zoom || this.Ce !== this.zoom) this.va = this.nb,
        this.Ce = this.zoom
    },
    Bs: function(a) {
      var b = a.R.Ba.dc.y * this.P;
      a = a.R.Ba.dc.x * this.P;
      return [this.nb.x - a, this.nb.y - b, this.nb.x + a, this.nb.y + b]
    },
    $s: function() {
      if (this.Vg && this.Vg) for (var a in this.Vg) if (this.Vg.hasOwnProperty(a)) {
        var b = this.Vg[a];
        b.$c !== this.$c && b.da && this.Q.gk.appendChild(b.da)
      }
    },
    oc: function(a, b) {
      this.$c = 1E6 * Math.random() << 0;
      this.Pq(a, b);
      this.R = a.R;
      this.size = a.size;
      var c = this.j;
      this.Od = 256;
      var d, e;
      e = this.Bs(a);
      var f = 0;
      c.Cl && (f = 50 * this.P);
      e[0] -= this.j.Pe * this.P + f;
      e[1] -= this.j.wf * this.P + f;
      e[2] += this.j.Pe * this.P + f;
      e[3] += this.j.wf * this.P + f;
      c = c.Bj(e);
      for (d in c) c.hasOwnProperty(d) && (c[d].$c = this.$c, c[d].rZ = this);
      this.$s(c);
      this.Pq.call(this.Za, a, b);
      this.Za.CA(c);
      this.Vg = c;
      this.gf(a)
    },
    gf: function() {
      var a = Math.pow(2, this.zoom - this.fe);
      this.transform = {
        translate: this.va.Sa(this.nb).Rc(this.P),
        scale: a,
        rotate: 0
      }
    }
  }); g.M.ee.Oc = g.X.extend({
    r: function(a) {
      this.Mj = a
    },
    CA: function(a, b) {
      var c = document.createDocumentFragment(),
        d = b && b.PM ? null: {},
        e = !0,
        f;
      for (f in a) if (a.hasOwnProperty(f)) {
        var h = a[f],
          k,
          l = h.get("params");
        if (h.da) k = h.da;
        else {
          k = g.h.create("div");
          k.className = "amap-marker";
          var m = l.Og,
            n = l.T0;
          m && k.appendChild(m);
          n && k.appendChild(n);
          h.da = k;
          h.Og = m;
          if (n = l.title) m.title = n;
          this.j.Cl = !0; - 1 === g.c.indexOf(this.j.cg, h) && this.j.cg.push(h);
          h.rf = !0
        }
        var m = l.offset,
          n = m.x,
          p = m.y,
          q = l.textAlign,
          s = l.verticalAlign,
          m = !1;
        if ("left" !== q || "top" !== s) if (k.parentNode !== this.Mj && d && (m = !0, d[f] = h, e = !1), !m) {
          var r = g.h.zz(h.Og),
            u = r[0],
            r = r[1];
          switch (q) {
            case "center":
              n -= u / 2;
              break;
            case "right":
              n -= u
          }
          switch (s) {
            case "middle":
              p -= r / 2;
              break;
            case "bottom":
              p -= r
          }
        }
        if (h.rf) u = [],
          s = this.Gp(h.Z.La),
          h.va = this.va,
          r = l.yP,
          q = Math.round(s[1] + p + r.y),
          s = Math.round(s[0] + n + r.x),
          u.push("top:" + q + "px"),
          u.push("left:" + s + "px"),
          u.push("z-index:" + (l.fZ ? this.j.Io + 10 : l.zIndex)),
        g.l.re || u.push(g.h.$X(k, l.Ru, {
          x: -n,
          y: -p
        })),
          u.push("display:" + (l.visible ? "block": "none") + ";"),
          k.style.cssText = u.join(";"),
        (n = l.label) && n.content && (l = l.kZ, s = q = 0, n.offset && (q = n.offset.y + "px", s = n.offset.x + "px"), l.style.top = q, l.style.left = s, k.appendChild(l));
        else if (h.E3 || this.zoom << 0 !== this.zoom || h.zoom !== this.zoom || k.parentNode !== this.Mj || h.va !== this.va) s = this.Gp(h.Z.La),
          h.va = this.va,
          r = l.yP,
          q = Math.round(s[1] + p + r.y),
          s = Math.round(s[0] + n + r.x),
          k.style.top = q + "px",
          k.style.left = s + "px";
        h.zoom = this.zoom;
        k.parentNode !== this.Mj && (g.l.uh && g.c.iepngFix(k), c.appendChild(k), h.rf = m);
        k.ky = this.Mj
      }
      this.Mj.appendChild(c);
      e || this.CA(d, {
        PM: !0
      })
    },
    Gp: function(a) {
      return [(a[0] - this.va.x) / this.P, (a[1] - this.va.y) / this.P]
    }
  });
  var tc = g.w,
    Dc = g.l,
    cc = g.X.bs,
    Ec = g.$ja,
    fa = document,
    Fc = !0,
    Gc = []; Dc.ef && Gc.push("touch"); Dc.W || Gc.push("mouse"); Dc.OA && (Gc.push("vectorlayer", "overlay"), Dc.en ? Gc.push("wgl") : Gc.push("cmng", "cgl"));
  if (Ec) {
    for (var Hc = [], Rc = Ec.split(","), Sc = 0; Sc < Rc.length; Sc += 1) {
      var Tc = Rc[Sc];
      cc[Tc] && Hc.push.apply(Hc, cc[Tc]);
      Hc.push(Tc)
    }
    Gc = Gc.concat(Hc)
  }
  Gc.push("sync");
  if (Dc.Jj) {
    var Uc = !0,
      Vc = [],
      Wc = [];
    try {
      for (var Sc = 0,
             Xc = Gc.length; Sc < Xc; Sc++) {
        var Yc = JSON.parse(localStorage.getItem("_AMap_" + Gc[Sc]));
        if (Yc && Yc.version === tc.oi) Vc.push(Yc.script),
        Yc.css && Wc.push(Yc.css);
        else {
          Vc = void 0;
          Uc = !1;
          break
        }
      }
    } catch(Zc) {
      Vc = Wc = void 0,
        Uc = !1
    }
    if (Uc) try {
      Wc.length && $c();
      var ad = Vc.join(";");
      eval(ad)
    } catch(bd) {
      Fc = !1
    } else Fc = !1
  } else Fc = !1;
  if (Fc) for (Sc = 0; Sc < Gc.length; Sc += 1) g.mb.hz(Gc[Sc]).status = 1;
  else tc.Xz = !1, cd();
  function dd() {
    for (var a = fa.getElementsByTagName("script"), b, c = 0; c < a.length; c += 1) if (0 === a[c].src.indexOf(tc.Ab + "/maps?")) {
      b = a[c];
      break
    }
    return tc.Kc || b && b.async
  }
  function cd() {
    var a = tc.Ab + "/maps/modules?v=" + tc.sp + "&key=" + tc.key + "&vrs=" + tc.oi + "&m=" + Gc.join(",");
    dd() ? ed(a) : (fa.write('<script crossorigin="anonymous" id="amap_plus_js" src="' + a + '" type="text/javascript">\x3c/script>'), setTimeout(function() {
        fa.getElementById("amap_plus_js") || ed(a)
      },
      1))
  }
  function ed(a) {
    var b = fa.createElement("script");
    b.charset = "utf-8";
    b.src = a;
    b.id = "amap_plus_js"; (a = fa.head || fa.getElementsByTagName("head")[0] || fa.body) && a.appendChild(b)
  }
  function $c() {
    var a = Wc.join("\n"),
      b = fa.createElement("style");
    b.type = "text/css"; - 1 === tc.Ab.indexOf("webapi.amap.com") && (a = a.replace(/webapi.amap.com/gi, tc.Ab.split("://")[1]));
    "https" === tc.Xb && (a = a.replace(/http:/gi, "https:"));
    if (b.styleSheet) {
      var c = function() {
        try {
          b.styleSheet.cssText = a
        } catch(c) {}
      };
      b.styleSheet.disabled ? setTimeout(c, 10) : c()
    } else b.appendChild(fa.createTextNode(a));
    c = fa.head || fa.getElementsByTagName("head")[0];
    2 > c.childNodes.length ? c.appendChild(b) : c.insertBefore(b, c.childNodes[1])
  };
})(["bfe31f4e0fb231d29e1d3ce951e2c780", [112.958507, 22.51436, 114.059957, 23.932988, 113.280637, 23.125178], "https://webapi.amap.com", 1, "1.4.9", null, "440100", "", true, true, true, true, "1536154130-1"])
