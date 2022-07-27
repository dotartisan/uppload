// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fcP3w":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "9d4f63343c900248";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"40Uox":[function(require,module,exports) {
var _src = require("../src");
const button = document.createElement("div");
button.innerHTML = `<div class="try-button"><button class="try-uppload"><span aria-hidden="true">&#9654;&nbsp;&nbsp;</span>Live demo</button></div>`;
const header = document.querySelector("header#masthead .masthead");
if (header) header.appendChild(button);
const uppload = new _src.Uppload({
    value: "https://uppload.js.org/assets/icon-white.svg",
    bind: [
        ".uppload-image",
        "img.icon"
    ],
    call: ".try-uppload",
    lang: _src.en,
    maxSize: [
        256,
        256
    ],
    uploader: (file, metadata, updateProgress)=>new Promise((resolve)=>{
            console.log("Uploading file...", file, metadata);
            setTimeout(()=>resolve(window.URL.createObjectURL(file))
            , 2750);
            let progress = 0;
            const interval = setInterval(()=>{
                if (progress > 99) clearInterval(interval);
                updateProgress(progress++);
            }, 25);
        })
    ,
    compression: 0.8,
    compressionFromMimes: [
        "image/jpeg",
        "image/png",
        "image/webp"
    ],
    compressionToMime: "image/webp",
    skipEditMimes: [
        "image/gif"
    ]
});
// These are our public demo API keys
// You should create your own (free!) account on these services and use your own API keys
const GIPHY_API_KEY = "Oxp1XWdrjdIVi2NUSD93h4HTuVpmIOAy";
const PIXABAY_API_KEY = "14234762-6301dcca06f491e77f115de8e";
const UNSPLASH_API_KEY = "3135681ed1e271e3d3d167e184aecfb0ad74d2043f6f378bf19a23a6647954d8";
const PEXELS_API_KEY = "563492ad6f9170000100000172ccefc96f674d01869ba24acc62a573";
uppload.use([
    new _src.Local({
        mimeTypes: [
            "image/gif",
            "image/jpeg",
            "image/jpg",
            "image/png",
            "application/pdf", 
        ]
    }),
    new _src.Camera(),
    new _src.Instagram(),
    new _src.URL(),
    new _src.Facebook(),
    new _src.Screenshot(),
    new _src.GIPHY(GIPHY_API_KEY),
    new _src.Unsplash(UNSPLASH_API_KEY),
    new _src.Pixabay(PIXABAY_API_KEY),
    new _src.Pexels(PEXELS_API_KEY),
    new _src.Pinterest(),
    new _src.Flickr(),
    new _src.Twitter(),
    new _src.NineGag(),
    new _src.DeviantArt(),
    new _src.ArtStation(),
    new _src.Flipboard(),
    new _src.Fotki(),
    new _src.LinkedIn(),
    new _src.Reddit(),
    new _src.Tumblr(),
    new _src.WeHeartIt(), 
]);
uppload.use([
    new _src.Crop({
        aspectRatio: 1
    }),
    new _src.Rotate(),
    new _src.Blur(),
    new _src.Brightness(),
    new _src.Flip(),
    new _src.Contrast(),
    new _src.Grayscale(),
    new _src.HueRotate(),
    new _src.Invert(),
    new _src.Saturate(),
    new _src.Sepia(), 
]);
uppload.on("*", (a, b)=>{
    console.log("Uppload event", a, b);
});
window.uppload = uppload;

},{"../src":"h7u1C"}],"h7u1C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Main class
parcelHelpers.export(exports, "Uppload", ()=>_uppload.Uppload
);
// Base classes
parcelHelpers.export(exports, "UpploadService", ()=>_service.UpploadService
);
parcelHelpers.export(exports, "UpploadEffect", ()=>_effect.UpploadEffect
);
parcelHelpers.export(exports, "Camera", ()=>_cameraDefault.default
);
parcelHelpers.export(exports, "Instagram", ()=>_instagramDefault.default
);
parcelHelpers.export(exports, "Facebook", ()=>_facebookDefault.default
);
parcelHelpers.export(exports, "Pixabay", ()=>_pixabayDefault.default
);
parcelHelpers.export(exports, "Local", ()=>_localDefault.default
);
parcelHelpers.export(exports, "URL", ()=>_urlDefault.default
);
parcelHelpers.export(exports, "Screenshot", ()=>_screenshotDefault.default
);
parcelHelpers.export(exports, "GIPHY", ()=>_giphyDefault.default
);
parcelHelpers.export(exports, "Unsplash", ()=>_unsplashDefault.default
);
parcelHelpers.export(exports, "Pexels", ()=>_pexelsDefault.default
);
parcelHelpers.export(exports, "Pinterest", ()=>_pinterestDefault.default
);
parcelHelpers.export(exports, "Flickr", ()=>_flickrDefault.default
);
parcelHelpers.export(exports, "NineGag", ()=>_9GagDefault.default
);
parcelHelpers.export(exports, "DeviantArt", ()=>_deviantartDefault.default
);
parcelHelpers.export(exports, "ArtStation", ()=>_artstationDefault.default
);
parcelHelpers.export(exports, "Twitter", ()=>_twitterDefault.default
);
parcelHelpers.export(exports, "Flipboard", ()=>_flipboardDefault.default
);
parcelHelpers.export(exports, "Fotki", ()=>_fotkiDefault.default
);
parcelHelpers.export(exports, "LinkedIn", ()=>_linkedinDefault.default
);
parcelHelpers.export(exports, "Reddit", ()=>_redditDefault.default
);
parcelHelpers.export(exports, "Tumblr", ()=>_tumblrDefault.default
);
parcelHelpers.export(exports, "WeHeartIt", ()=>_weheartitDefault.default
);
parcelHelpers.export(exports, "Brightness", ()=>_brightnessDefault.default
);
parcelHelpers.export(exports, "Crop", ()=>_cropDefault.default
);
parcelHelpers.export(exports, "Rotate", ()=>_rotateDefault.default
);
parcelHelpers.export(exports, "Flip", ()=>_flipDefault.default
);
parcelHelpers.export(exports, "Preview", ()=>_previewDefault.default
);
parcelHelpers.export(exports, "Blur", ()=>_blurDefault.default
);
parcelHelpers.export(exports, "Contrast", ()=>_contrastDefault.default
);
parcelHelpers.export(exports, "Grayscale", ()=>_grayscaleDefault.default
);
parcelHelpers.export(exports, "HueRotate", ()=>_hueRotateDefault.default
);
parcelHelpers.export(exports, "Invert", ()=>_invertDefault.default
);
parcelHelpers.export(exports, "Sepia", ()=>_sepiaDefault.default
);
parcelHelpers.export(exports, "Saturate", ()=>_saturateDefault.default
);
// Services
var _camera = require("./services/camera");
var _cameraDefault = parcelHelpers.interopDefault(_camera);
var _instagram = require("./services/microlink/instagram");
var _instagramDefault = parcelHelpers.interopDefault(_instagram);
var _facebook = require("./services/microlink/facebook");
var _facebookDefault = parcelHelpers.interopDefault(_facebook);
var _local = require("./services/local");
var _localDefault = parcelHelpers.interopDefault(_local);
var _giphy = require("./services/search/giphy");
var _giphyDefault = parcelHelpers.interopDefault(_giphy);
var _pixabay = require("./services/search/pixabay");
var _pixabayDefault = parcelHelpers.interopDefault(_pixabay);
var _unsplash = require("./services/search/unsplash");
var _unsplashDefault = parcelHelpers.interopDefault(_unsplash);
var _pexels = require("./services/search/pexels");
var _pexelsDefault = parcelHelpers.interopDefault(_pexels);
var _url = require("./services/microlink/url");
var _urlDefault = parcelHelpers.interopDefault(_url);
var _screenshot = require("./services/microlink/screenshot");
var _screenshotDefault = parcelHelpers.interopDefault(_screenshot);
var _flickr = require("./services/microlink/flickr");
var _flickrDefault = parcelHelpers.interopDefault(_flickr);
var _pinterest = require("./services/microlink/pinterest");
var _pinterestDefault = parcelHelpers.interopDefault(_pinterest);
var _deviantart = require("./services/microlink/deviantart");
var _deviantartDefault = parcelHelpers.interopDefault(_deviantart);
var _9Gag = require("./services/microlink/9gag");
var _9GagDefault = parcelHelpers.interopDefault(_9Gag);
var _artstation = require("./services/microlink/artstation");
var _artstationDefault = parcelHelpers.interopDefault(_artstation);
var _twitter = require("./services/microlink/twitter");
var _twitterDefault = parcelHelpers.interopDefault(_twitter);
var _flipboard = require("./services/microlink/flipboard");
var _flipboardDefault = parcelHelpers.interopDefault(_flipboard);
var _fotki = require("./services/microlink/fotki");
var _fotkiDefault = parcelHelpers.interopDefault(_fotki);
var _linkedin = require("./services/microlink/linkedin");
var _linkedinDefault = parcelHelpers.interopDefault(_linkedin);
var _reddit = require("./services/microlink/reddit");
var _redditDefault = parcelHelpers.interopDefault(_reddit);
var _tumblr = require("./services/microlink/tumblr");
var _tumblrDefault = parcelHelpers.interopDefault(_tumblr);
var _weheartit = require("./services/microlink/weheartit");
var _weheartitDefault = parcelHelpers.interopDefault(_weheartit);
// Effects
var _crop = require("./effects/crop");
var _cropDefault = parcelHelpers.interopDefault(_crop);
var _rotate = require("./effects/rotate");
var _rotateDefault = parcelHelpers.interopDefault(_rotate);
var _flip = require("./effects/flip");
var _flipDefault = parcelHelpers.interopDefault(_flip);
var _preview = require("./effects/preview");
var _previewDefault = parcelHelpers.interopDefault(_preview);
var _brightness = require("./effects/filter/brightness");
var _brightnessDefault = parcelHelpers.interopDefault(_brightness);
var _blur = require("./effects/filter/blur");
var _blurDefault = parcelHelpers.interopDefault(_blur);
var _contrast = require("./effects/filter/contrast");
var _contrastDefault = parcelHelpers.interopDefault(_contrast);
var _grayscale = require("./effects/filter/grayscale");
var _grayscaleDefault = parcelHelpers.interopDefault(_grayscale);
var _hueRotate = require("./effects/filter/hue-rotate");
var _hueRotateDefault = parcelHelpers.interopDefault(_hueRotate);
var _invert = require("./effects/filter/invert");
var _invertDefault = parcelHelpers.interopDefault(_invert);
var _sepia = require("./effects/filter/sepia");
var _sepiaDefault = parcelHelpers.interopDefault(_sepia);
var _saturate = require("./effects/filter/saturate");
var _saturateDefault = parcelHelpers.interopDefault(_saturate);
var _uppload = require("./uppload");
var _service = require("./service");
var _effect = require("./effect");
// Helpers
var _elements = require("./helpers/elements");
parcelHelpers.exportAll(_elements, exports);
var _interfaces = require("./helpers/interfaces");
parcelHelpers.exportAll(_interfaces, exports);
var _http = require("./helpers/http");
parcelHelpers.exportAll(_http, exports);
var _i18N = require("./helpers/i18n");
parcelHelpers.exportAll(_i18N, exports);
// Language packs
var _i18N1 = require("./i18n");
parcelHelpers.exportAll(_i18N1, exports);
// Uploaders
var _xhr = require("./uploaders/xhr");
parcelHelpers.exportAll(_xhr, exports);

},{"./services/camera":"kxJHp","./services/microlink/instagram":"dIU7U","./services/microlink/facebook":"jOBfa","./services/local":"6t9cU","./services/search/giphy":"16WFs","./services/search/pixabay":"114WH","./services/search/unsplash":"1gZAY","./services/search/pexels":"i7hQF","./services/microlink/url":"iAXxH","./services/microlink/screenshot":"ffQNO","./services/microlink/flickr":"8r5RP","./services/microlink/pinterest":"k5YDr","./services/microlink/deviantart":"fmiKS","./services/microlink/9gag":"fOabf","./services/microlink/artstation":"dzBph","./services/microlink/twitter":"aQzkw","./services/microlink/flipboard":"adidV","./services/microlink/fotki":"koXfW","./services/microlink/linkedin":"3exvS","./services/microlink/reddit":"2VNTM","./services/microlink/tumblr":"kmF91","./services/microlink/weheartit":"FKJYw","./effects/crop":"9m3vc","./effects/rotate":"23wsW","./effects/flip":"JLXG5","./effects/preview":"kNq2O","./effects/filter/brightness":"4mJME","./effects/filter/blur":"3ZrJT","./effects/filter/contrast":"dRiPN","./effects/filter/grayscale":"cBMeX","./effects/filter/hue-rotate":"22EXB","./effects/filter/invert":"5IpQy","./effects/filter/sepia":"kdNjy","./effects/filter/saturate":"dGMzl","./uppload":"e7TfM","./service":"370pZ","./effect":"j9yFt","./helpers/elements":"etwNm","./helpers/interfaces":"dZQXp","./helpers/http":"xWjo7","./helpers/i18n":"ixaut","./i18n":"9CWgD","./uploaders/xhr":"b1Hce","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kxJHp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _service = require("../service");
var _elements = require("../helpers/elements");
var _files = require("../helpers/files");
class Camera extends _service.UpploadService {
    name = "camera";
    icon = `<svg aria-hidden="true" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M63 65l17-33c2-3 5-5 9-5h78c4 0 8 2 9 5l17 33h33c17 0 30 13 30 29v106c0 16-13 29-30 29H30c-17 0-30-13-30-29V94c0-16 13-29 30-29h33zm65 126c27 0 49-22 49-49 0-26-22-48-49-48s-49 22-49 48c0 27 22 49 49 49zm0-20c-16 0-30-13-30-29s14-28 30-28 30 12 30 28-14 29-30 29zm79-48c5 0 10-4 10-9 0-6-5-10-10-10-6 0-10 4-10 10 0 5 4 9 10 9z" fill="#000" fill-rule="nonzero"/></svg>`;
    color = "#16a085";
    canvas = document.createElement("canvas");
    gotError = false;
    waiting = false;
    frontCamera = false;
    supports = ()=>window.navigator.mediaDevices && !/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    ;
    template = ({ translate  })=>{
        return `
      <div class="service-main">
        <div class="camera-waiting">${translate("services.camera.waiting")}</div>
        <div class="camera-error">
          <p>${translate("services.camera.unableToRead")}</p>
          <p><a href="https://uppload.js.org/help/services/camera" target="_blank">${translate("needHelp")}</a></p>
        </div>
        <div class="camera-success">
          <video class="camera-stream"></video>
        </div>
      </div>
      <footer class="service-footer">
        <!--<button
          class="camera-switch uppload-button"
        >${translate("services.camera.switch")}</button>-->
        <button
          class="camera-click uppload-button uppload-button--cta"
          style="background: ${this.color}"
        >${translate("services.camera.button")}</button>
      </footer>
      <button class="need-help-link"><span>${translate("needHelp")}</span aria-hidden="true"><span>?</span></button>
    `;
    };
    stop = ()=>{
        if (this.stream) this.stream.getTracks().forEach((track)=>track.stop()
        );
    };
    update(params) {
        const waiting = params.uppload.container.querySelector(".camera-waiting");
        if (waiting) {
            waiting.style.display = "none";
            waiting.style.opacity = "0";
        }
        const error = params.uppload.container.querySelector(".camera-error");
        if (error) {
            error.style.display = "none";
            error.style.opacity = "0";
        }
        const success = params.uppload.container.querySelector(".camera-success");
        if (success) {
            success.style.display = "none";
            success.style.opacity = "0";
        }
        const footer = params.uppload.container.querySelector(".service-footer");
        if (footer) {
            footer.style.display = "none";
            footer.style.opacity = "0";
        }
        if (this.gotError) {
            if (error) {
                error.style.display = "";
                error.style.opacity = "1";
            }
        } else if (this.waiting) {
            if (waiting) {
                waiting.style.display = "";
                waiting.style.opacity = "1";
            }
        } else {
            if (success) {
                success.style.display = "";
                success.style.opacity = "1";
            }
            if (footer) {
                footer.style.display = "";
                footer.style.opacity = "1";
            }
        }
    }
    handlers = (params)=>{
        this.waiting = true;
        this.update(params);
        const constraints = {
            audio: false,
            video: {
                width: 1280,
                height: 1280
            }
        };
        this.startStream(params, constraints);
        const clickButton = params.uppload.container.querySelector(".camera-click");
        if (clickButton) _elements.safeListen(clickButton, "click", this.clickPhoto.bind(this, params));
        const switchButton = params.uppload.container.querySelector(".camera-click");
        if (switchButton) _elements.safeListen(switchButton, "click", this.switchCamera.bind(this, params));
        const helpButton = params.uppload.container.querySelector(".need-help-link");
        if (helpButton) _elements.safeListen(helpButton, "click", ()=>params.showHelp("/services/camera")
        );
    };
    switchCamera(params) {
        this.frontCamera = !this.frontCamera;
        const constraints = {
            audio: false,
            video: {
                width: 1280,
                height: 1280,
                facingMode: this.frontCamera ? "user" : "environment"
            }
        };
        this.startStream(params, constraints);
    }
    clickPhoto(params) {
        this.canvas = document.createElement("canvas");
        const video = params.uppload.container.querySelector("video.camera-stream");
        if (!video) return;
        if (!this.stream) return;
        const videoSize = video.getBoundingClientRect();
        let width = videoSize.width;
        let height = videoSize.height;
        this.stream.getTracks().forEach((track)=>{
            const settings = track.getSettings();
            if (settings.width) width = settings.width;
            if (settings.height) height = settings.height;
        });
        this.canvas.width = width;
        this.canvas.height = height;
        const context = this.canvas.getContext("2d");
        if (!context) return;
        context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        context.drawImage(video, 0, 0, width, height);
        _elements.canvasToBlob(this.canvas).then((blob)=>params.next(_files.blobToUpploadFile(blob, `camera-photo-${Math.random().toString(36).slice(2)}.png`, "image/png", new Date()))
        );
    }
    startStream(params, constraints) {
        this.stop();
        window.navigator.mediaDevices.getUserMedia(constraints).then((mediaStream)=>{
            this.stream = mediaStream;
            const video = params.uppload.container.querySelector("video.camera-stream");
            if (video) {
                video.srcObject = mediaStream;
                _elements.safeListen(video, "loadedmetadata", ()=>video.play()
                );
                _elements.fitImageToContainer(params, video);
            }
        }).catch(()=>{
            this.gotError = true;
        }).then(()=>{
            this.waiting = false;
            this.update(params);
        });
    }
}
exports.default = Camera;

},{"../service":"370pZ","../helpers/elements":"etwNm","../helpers/files":"5Dece","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"370pZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UpploadService", ()=>UpploadService
);
class UpploadService {
    type = "service";
    name = "";
    invisible = false;
    noRecolor = false;
    icon = "";
    color = "#333";
    template = ()=>""
    ;
    handlers = ()=>{};
    stop = ()=>{};
    supports = ()=>true
    ;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"etwNm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getElements", ()=>getElements
);
parcelHelpers.export(exports, "safeListen", ()=>safeListen
);
parcelHelpers.export(exports, "fitImageToContainer", ()=>fitImageToContainer
);
parcelHelpers.export(exports, "compressImage", ()=>compressImage
);
parcelHelpers.export(exports, "canvasToBlob", ()=>canvasToBlob
);
const getElements = (query)=>{
    if (!query) return [];
    const elements = [];
    if (typeof query === "string") elements.push(...Array.prototype.slice.call(document.querySelectorAll(query)));
    else if (Array.isArray(query)) query.forEach((item)=>{
        if (typeof item === "string") elements.push(...Array.prototype.slice.call(document.querySelectorAll(item)));
        else elements.push(item);
    });
    else elements.push(query);
    return elements;
};
const listening = [];
const safeListen = (element, type, fn)=>{
    const hasListener = !!listening.find((a)=>a.element === element && a.type === type
    );
    if (hasListener) return;
    element.addEventListener(type, fn);
    listening.push({
        element,
        type
    });
};
const safeRequestAnimationFrame = (callback)=>{
    if (window.requestAnimationFrame) return window.requestAnimationFrame(callback);
    setTimeout(()=>{
        callback(0);
    }, 100);
};
const fitImageToContainer = (params, image)=>{
    return new Promise((resolve)=>{
        safeRequestAnimationFrame(()=>{
            const parent = image.parentElement;
            const currentDimensions1 = image.getBoundingClientRect();
            if (!parent) return;
            const dimensions = parent.getBoundingClientRect();
            if (currentDimensions1.height < currentDimensions1.width) {
                image.style.height = `${dimensions.height}px`;
                image.style.width = "auto";
            } else {
                image.style.width = `${dimensions.width}px`;
                image.style.height = "auto";
            }
            safeRequestAnimationFrame(()=>{
                const currentDimensions = image.getBoundingClientRect();
                if (currentDimensions.height > dimensions.height) {
                    image.style.height = `${dimensions.height}px`;
                    image.style.width = "auto";
                } else if (currentDimensions.width > dimensions.width) {
                    image.style.width = `${dimensions.width}px`;
                    image.style.height = "auto";
                }
                safeRequestAnimationFrame(()=>{
                    const effect = params.uppload.container.querySelector(".uppload-effect");
                    if (effect) effect.style.opacity = "1";
                    resolve();
                });
            });
        });
    });
};
const compressImage = (file, settings)=>new Promise((resolve)=>{
        const imageURL = URL.createObjectURL(file);
        const canvas = document.createElement("canvas");
        const image = document.createElement("img");
        const maxSize = settings.maxSize || [
            settings.maxWidth || Infinity,
            settings.maxHeight || Infinity, 
        ];
        image.src = imageURL;
        image.onload = ()=>{
            const type = settings.compressionToMime || "image/jpeg";
            const quality = settings.compression || 1;
            const ratio = image.width / image.height;
            if (image.width > maxSize[0]) {
                image.width = maxSize[0];
                image.height = image.width * (1 / ratio);
            }
            if (image.height > maxSize[1]) {
                image.height = maxSize[1];
                image.width = image.height * ratio;
            }
            canvas.width = image.width;
            canvas.height = image.height;
            const context = canvas.getContext("2d");
            if (!context) return resolve(file);
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            canvasToBlob(canvas, type, quality).then((blob)=>{
                if (blob) return resolve(blob);
                resolve(file);
            });
        };
        safeListen(image, "error", ()=>resolve(file)
        );
    })
;
/**
 * Convert a data URI image string to Blob
 * @param dataURI - Data URI of image
 * @source https://stackoverflow.com/a/12300351/1656944
 */ const dataURItoBlob = (dataURI)=>{
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uArray = new Uint8Array(arrayBuffer);
    for(let i = 0; i < byteString.length; i++)uArray[i] = byteString.charCodeAt(i);
    return new Blob([
        arrayBuffer
    ], {
        type: mimeString
    });
};
const canvasToBlob = (canvas, type, quality)=>{
    return new Promise((resolve, reject)=>{
        const context = canvas.getContext("2d");
        let hasTransparency = false;
        /**
     * Check if an image has transparent pixels
     * @source https://stackoverflow.com/a/25923108/1656944
     */ if (context) try {
            const data = context.getImageData(0, 0, canvas.width, canvas.height).data;
            for(let i = 0; i < data.length; i += 4)if (data[i + 3] < 255) hasTransparency = true;
        } catch (error) {}
        /**
     * If a transparent image is uploaded, like a PNG or GIF,
     * let it through uncompressed
     */ if (hasTransparency && type !== "image/webp") {
            type = undefined;
            quality = undefined;
        }
        if (typeof canvas.toBlob === "function") canvas.toBlob((blob)=>{
            if (blob) resolve(blob);
            reject(new Error("errors.image_error"));
        }, type, quality);
        else if (typeof canvas.toDataURL === "function") {
            const dataURI = canvas.toDataURL(type, quality);
            resolve(dataURItoBlob(dataURI));
        } else reject(new Error("errors.image_error"));
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Dece":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "blobToUpploadFile", ()=>blobToUpploadFile
);
parcelHelpers.export(exports, "safeUpploadFileToFile", ()=>safeUpploadFileToFile
);
/**
 * Convert a blob to a native File
 * @param blob - Blob to convert to file
 * @param fileName - Name of the file
 * @param lastModified - Date modified
 * @param metadata - file metadata
 */ const safeBlobToFile = (blob, fileName, lastModified, metadata)=>{
    try {
        return new File([
            blob
        ], fileName || "file_name", {
            lastModified: (lastModified || new Date()).getTime(),
            type: blob.type
        });
    } catch (error) {
        return blob;
    }
};
const blobToUpploadFile = (blob, name, type, lastModified)=>{
    const result = {
        name,
        blob,
        lastModified,
        type
    };
    return result;
};
const safeUpploadFileToFile = (file)=>{
    const blob = file.blob;
    file.lastModified = file.lastModified || new Date();
    file.metadata = file.metadata || {};
    return safeBlobToFile(blob, file.name, file.lastModified, file.metadata);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dIU7U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _microlink = require("../../helpers/microlink");
class Instagram extends _microlink.MicrolinkBaseClass {
    name = "instagram";
    icon = `<svg aria-hidden="true" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M180.8.8a94 94 0 0131 6 62.7 62.7 0 0122.7 14.7 62.7 62.7 0 0114.7 22.7 94 94 0 016 31c.6 13.1.7 17.7.8 48.8v8c0 31.1-.2 35.7-.8 48.8a94 94 0 01-6 31 65.4 65.4 0 01-37.4 37.4 94 94 0 01-31 6c-13.1.6-17.7.7-48.8.8h-8c-31.1 0-35.7-.2-48.8-.8a94 94 0 01-31-6 62.7 62.7 0 01-22.7-14.7 62.7 62.7 0 01-14.7-22.7 94 94 0 01-6-31c-.6-12.9-.7-17.5-.8-47V123c0-30.2.2-34.8.8-47.8a94 94 0 016-31 62.7 62.7 0 0114.7-22.7A62.7 62.7 0 0144.2 6.8a94 94 0 0131-6 811 811 0 0147-.8H133c30.2 0 34.8.2 47.8.8zM132 26h-8.7c-23.4 0-27.1.1-37.4.6a74.9 74.9 0 00-24.7 4.8 50 50 0 00-18 11.7 50 50 0 00-11.8 18A74.9 74.9 0 0026.6 86c-.4 10.2-.6 13.9-.6 36.6v11c0 22.7.2 26.4.6 36.6a74.9 74.9 0 004.8 24.7 50 50 0 0011.7 18 50 50 0 0018 11.8 74.9 74.9 0 0024.8 4.8c10.5.5 14.1.6 38.9.6h6.4c24.8 0 28.4-.1 38.9-.6a74.9 74.9 0 0024.7-4.8 52.2 52.2 0 0029.8-29.8 74.9 74.9 0 004.8-24.7c.5-10.5.6-14.1.6-39v-6.3c0-24.8-.1-28.4-.6-38.9a74.9 74.9 0 00-4.8-24.7 50 50 0 00-11.7-18 50 50 0 00-18-11.8 74.9 74.9 0 00-24.8-4.8c-10.4-.5-14-.6-38.1-.6zm0 18.4c23.6 0 27 .1 37.2.6 10 .4 15.4 2 19 3.5 4.4 1.6 8.4 4.2 11.7 7.6 3.4 3.3 6 7.3 7.6 11.7 1.4 3.6 3 9 3.5 19 .5 10.2.6 13.6.6 37.3v7.8c0 23.7-.1 27-.6 37.3-.4 10-2 15.4-3.5 19a33.8 33.8 0 01-19.3 19.3c-3.6 1.4-9 3-19 3.5-10.3.5-13.7.6-38 .6h-7a643 643 0 01-37.4-.6c-10-.4-15.4-2-19-3.5a31.6 31.6 0 01-11.7-7.6c-3.4-3.3-6-7.3-7.6-11.7-1.4-3.6-3-9-3.5-19-.5-10.3-.6-13.7-.6-38v-7c0-23.8.1-27.2.6-37.4.4-10 2-15.4 3.5-19 1.6-4.4 4.2-8.4 7.6-11.7 3.3-3.4 7.3-6 11.7-7.6 3.6-1.4 9-3 19-3.5 10.2-.5 13.6-.6 37.3-.6zM128.4 75a52.5 52.5 0 100 105 52.5 52.5 0 000-105zm0 18.4a34 34 0 110 68.2 34 34 0 010-68.2zM182 62a12 12 0 100 24 12 12 0 000-24z" fill="#000" fill-rule="nonzero"/></svg>`;
    color = "#cc3366";
    exampleURL = "https://www.instagram.com/p/Bu_T4RihQFB/";
    validator = (input)=>/(https?:\/\/(.+?\.)?(instagram|instagr)\.(com|am)(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/.test(input)
    ;
}
exports.default = Instagram;

},{"../../helpers/microlink":"hZ1tq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hZ1tq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MicrolinkBaseClass", ()=>MicrolinkBaseClass
);
var _service = require("../service");
var _http = require("./http");
var _assets = require("./assets");
var _elements = require("./elements");
var _files = require("./files");
const generateFileName = (file, service)=>{
    file.name = `${service}-import-${Math.random().toString(36).slice(2)}`;
    return file;
};
class MicrolinkBaseClass extends _service.UpploadService {
    loading = false;
    exampleURL = "";
    validator = ()=>true
    ;
    template = ({ translate  })=>{
        return `
      <div class="microlink-container">
      <form class="microlink-search-form">
        <div class="service-icon">${_assets.colorSVG(this.icon, this)}</div>
        <label>
          <span>${translate(`services.${this.name}.label`) || translate("services.microlink.label", [
            translate(`services.${this.name}.title`) || this.name,
            translate(`services.${this.name}.type`) || translate("services.microlink.type"), 
        ])}</span>
          <input class="microlink-search-input" type="url" placeholder="${translate(`services.${this.name}.placeholder`) || translate("services.microlink.placeholder", [
            translate(`services.${this.name}.title`) || this.name,
            translate(`services.${this.name}.type`) || translate("services.microlink.type"), 
        ]) || ""}" required>
        </label>
        <button type="submit" style="background: ${this.color}">${translate(`services.${this.name}.button`) || translate("services.microlink.button", translate(`services.${this.name}.title`) || this.name)}</button></form><button class="need-help-link"><span>${translate("needHelp")}</span aria-hidden="true"><span>?</span></button></div>
    <div class="uppload-loader microlink-loader">
    <div></div>
    <p>${translate(`services.${this.name}.loading`) || translate("services.microlink.loading", translate(`services.${this.name}.title`) || this.name) || translate("fetching", translate(`services.${this.name}.title`))}</p>
  </div>`;
    };
    update(params) {
        const loader = params.uppload.container.querySelector(".microlink-loader");
        const container = params.uppload.container.querySelector(".microlink-container");
        if (container) container.style.display = this.loading ? "none" : "";
        if (loader) loader.style.display = this.loading ? "flex" : "none";
    }
    handlers = (params)=>{
        const form = params.uppload.container.querySelector(`.microlink-search-form`);
        if (form) _elements.safeListen(form, "submit", (event)=>{
            event.preventDefault();
            const input = params.uppload.container.querySelector(`.microlink-search-input`);
            if (input) {
                const url1 = input.value;
                if (!this.validator(url1)) return params.handle(new Error("errors.invalid_url"));
                this.loading = true;
                this.update(params);
                if (this.name === "screenshot") _http.imageUrlToBlob(`https://api.microlink.io?url=${encodeURIComponent(url1)}&screenshot=true&meta=false&embed=screenshot.url`).then((blob)=>params.next(generateFileName(_files.blobToUpploadFile(blob), this.name))
                ).catch((error)=>params.handle(error)
                ).then(()=>this.loading = false
                );
                else if (this.name === "url") _http.imageUrlToBlob(url1).then((blob)=>params.next(generateFileName(_files.blobToUpploadFile(blob), this.name))
                ).catch((error)=>params.handle(error)
                );
                else _http.cachedFetch(`https://api.microlink.io/?url=${encodeURIComponent(url1)}`).then((result)=>{
                    if (!result.data.image || !result.data.image.url) throw new Error("errors.response_not_ok");
                    return result.data.image.url;
                }).then((url)=>_http.imageUrlToBlob(url)
                ).then((blob)=>params.next(generateFileName(_files.blobToUpploadFile(blob), this.name))
                ).catch((error)=>params.handle(error)
                );
            }
            return false;
        });
        const helpButton = params.uppload.container.querySelector(".need-help-link");
        if (helpButton) _elements.safeListen(helpButton, "click", ()=>params.showHelp(`/services/${[
                "url",
                "screenshot"
            ].indexOf(this.name) !== -1 ? this.name : `import-from-web-service/${this.name}`}`)
        );
    };
}

},{"../service":"370pZ","./http":"xWjo7","./assets":"7Jjd5","./elements":"etwNm","./files":"5Dece","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"xWjo7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Make an HTTP request with the Fetch API and cache results
 * @param input API endpoint
 * @param settings HTTP Fetch configuration
 */ parcelHelpers.export(exports, "cachedFetch", ()=>cachedFetch
);
parcelHelpers.export(exports, "imageUrlToBlob", ()=>imageUrlToBlob
);
function cachedFetch(input, settings) {
    const storage = sessionStorage;
    return new Promise((resolve, reject)=>{
        const key = `uppload_cache_${JSON.stringify(input)}`;
        const maxTTL = new Date();
        maxTTL.setDate(maxTTL.getDate() + 1);
        const cachedResult = storage.getItem(key);
        if (cachedResult) {
            const cachedResultData = JSON.parse(cachedResult);
            if (cachedResultData.ttl && new Date(cachedResultData.ttl).getTime() > new Date().getTime()) return resolve(cachedResultData.result);
        }
        window.fetch(input, settings).then((response)=>{
            if (!response.ok) throw new Error("errors.response_not_ok");
            return response.json();
        }).then((result)=>{
            storage.setItem(key, JSON.stringify({
                ttl: maxTTL,
                updatedAt: new Date(),
                result
            }));
            resolve(result);
        }).catch((error)=>reject(error)
        );
    });
}
const imageUrlToBlob = (url)=>{
    const output = url.indexOf('uppload-output=gif') !== -1 ? '&output=gif&n=-1' : '';
    return new Promise((resolve, reject)=>{
        window.fetch(`https://images.weserv.nl/?url=${encodeURIComponent(url)}${output}`).then((response)=>{
            if (!response.ok) throw new Error("errors.response_not_ok");
            return response.blob();
        }).then((blob)=>resolve(blob)
        ).catch((error)=>reject(error)
        );
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Jjd5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "colorSVG", ()=>colorSVG
);
const colorSVG = (svg, service)=>service.noRecolor ? svg : svg.replace(/#000/g, service.color || "#000")
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jOBfa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _microlink = require("../../helpers/microlink");
class Facebook extends _microlink.MicrolinkBaseClass {
    name = "facebook";
    icon = `<svg aria-hidden="true" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M128 0c71 0 128 58 128 129 0 64-47 117-108 127v-89h30l6-38h-36v-24c0-10 5-20 21-20h16V53s-15-3-29-3c-29 0-48 18-48 50v29H75v37h1v1h32v89C47 246 1 194 0 131v-2C0 58 57 0 128 0z" fill="#000" fill-rule="nonzero"/></svg>`;
    color = "#1b69f6";
    exampleURL = "https://www.facebook.com/elninotech/photos/a.2066268863489861/2066268886823192/?type=3&theater";
    validator = (input)=>/(https?:\/\/(.+?\.)?(facebook|fb)\.(com|me)(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/.test(input)
    ;
}
exports.default = Facebook;

},{"../../helpers/microlink":"hZ1tq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6t9cU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _service = require("../service");
var _elements = require("../helpers/elements");
var _i18N = require("../helpers/i18n");
var _utils = require("../helpers/utils");
class Local extends _service.UpploadService {
    name = "local";
    icon = `<svg aria-hidden="true" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="nonzero"><path d="M177 56L125 4l-3-2v57h57c0-2-1-3-2-3z"/><path d="M173 113h8V75h-66c-5 0-8-4-8-8V1H27c-4 0-8 4-8 8v184c0 4 4 8 8 8h65v-8c0-45 36-80 81-80z"/><path d="M173 128c-36 0-65 29-65 64s29 64 65 64c35 0 64-29 64-64s-29-64-64-64zm27 63h-14v33c0 2-2 3-4 3h-20c-2 0-3-1-3-3v-33h-14c-3 0-5-3-3-5l28-30c1-2 3-2 5 0l27 30c2 2 1 5-2 5z"/></g></svg>`;
    color = "#34495e";
    mimeTypes = [
        "image/gif",
        "image/jpeg",
        "image/jpg",
        "image/png"
    ];
    maxFileSize = Infinity;
    constructor({ mimeTypes , maxFileSize  } = {}){
        super();
        if (mimeTypes) this.mimeTypes = mimeTypes;
        if (maxFileSize) this.maxFileSize = maxFileSize;
    }
    template = (params)=>{
        return `<div class="drop-area">
      <div>${params.translate("services.local.drop")}</div>
      <em>${params.translate("services.local.or")}</em>
      <button class="uppload-button uppload-button--cta" style="background: ${this.color}">${params.translate("services.local.button")}</button>
    </div>
      <div class="alternate-input">
        <input type="file" accept="${this.mimeTypes.join()}"${params.uppload.settings.multiple ? " multiple" : ""}></div><button class="need-help-link"><span>${_i18N.translate("needHelp")}</span aria-hidden="true"><span>?</span></button>`;
    };
    handlers = (params)=>{
        const dropArea = params.uppload.container.querySelector(".drop-area");
        if (dropArea) {
            _elements.safeListen(dropArea, "drop", (event)=>this.dropHandler(params, event)
            );
            _elements.safeListen(dropArea, "dragover", (event)=>this.dragHandler(params, event)
            );
            _elements.safeListen(dropArea, "dragend", (event)=>this.dragStop(params, event)
            );
            _elements.safeListen(dropArea, "dragexit", (event)=>this.dragStop(params, event)
            );
            _elements.safeListen(dropArea, "dragleave", (event)=>this.dragStop(params, event)
            );
            _elements.safeListen(dropArea, "click", (event)=>this.fileSelect(params, event)
            );
        }
        const input = params.uppload.container.querySelector(".alternate-input input[type=file]");
        if (input) _elements.safeListen(input, "change", (event)=>this.getFile(params, event)
        );
        const helpButton = params.uppload.container.querySelector(".need-help-link");
        if (helpButton) _elements.safeListen(helpButton, "click", ()=>params.showHelp("/services/local")
        );
    };
    getFile(params, event) {
        event.preventDefault();
        const files = event.target.files;
        let file = null;
        if (files) {
            if (params.uppload.settings.multiple && files.length > 1) return params.uploadMultiple(Array.from(files));
            for(let i = 0; i < files.length; i++){
                const item = files[i];
                if (this.mimeTypes.indexOf(item.type) !== -1) {
                    if (item.size < this.maxFileSize) file = item;
                    else params.handle(new Error(params.translate("errors.file_too_large", _utils.formatBytes(this.maxFileSize))));
                }
            }
        }
        if (!file) return;
        if (file) params.next({
            blob: file,
            size: file.size,
            type: file.type,
            lastModified: file.lastModified ? new Date(file.lastModified) : undefined,
            name: file.name
        });
    }
    fileSelect(params, event) {
        const input = params.uppload.container.querySelector(".alternate-input input[type=file]");
        if (input) input.click();
    }
    dragStop(params, event) {
        const dropArea = params.uppload.container.querySelector(".drop-area");
        if (dropArea) dropArea.classList.remove("drop-area-active");
    }
    dragHandler(params, event) {
        event.preventDefault();
        const dropArea = params.uppload.container.querySelector(".drop-area");
        if (dropArea) dropArea.classList.add("drop-area-active");
    }
    dropHandler(params, event) {
        event.preventDefault();
        this.dragStop(params, event);
        let file = null; // getAsFile() returns File | null
        if (event.dataTransfer && event.dataTransfer.items) for(let i = 0; i < event.dataTransfer.items.length; i++){
            const item = event.dataTransfer.items[i];
            if (item.kind === "file" && this.mimeTypes.indexOf(item.type) !== -1) {
                file = item.getAsFile();
                if (!file || file.size > this.maxFileSize) {
                    file = null;
                    params.handle(new Error(params.translate("errors.file_too_large", _utils.formatBytes(this.maxFileSize))));
                }
            }
        }
        if (!file) return;
        if (file) params.next({
            blob: file,
            size: file.size,
            type: file.type,
            lastModified: file.lastModified ? new Date(file.lastModified) : undefined,
            name: file.name
        });
    }
}
exports.default = Local;

},{"../service":"370pZ","../helpers/elements":"etwNm","../helpers/i18n":"ixaut","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../helpers/utils":"leT0F"}],"ixaut":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "flattenObject", ()=>flattenObject
);
parcelHelpers.export(exports, "setI18N", ()=>setI18N
);
parcelHelpers.export(exports, "translate", ()=>translate
);
let i18n = {};
const flattenObject = (ob)=>{
    const toReturn = {};
    for(const i in ob){
        if (!ob.hasOwnProperty(i)) continue;
        if (typeof ob[i] == "object") {
            const flatObject = flattenObject(ob[i]);
            for(const x in flatObject){
                if (!flatObject.hasOwnProperty(x)) continue;
                toReturn[i + "." + x] = flatObject[x];
            }
        } else toReturn[i] = ob[i];
    }
    return toReturn;
};
const setI18N = (translations)=>{
    i18n = flattenObject(translations);
};
const translate = (key, params)=>{
    try {
        let term = i18n[key];
        if (typeof params === "string") params = [
            params
        ];
        if (params) params.forEach((param, index)=>{
            term = term.replace(`$${index + 1}$`, param);
        });
        if (i18n.helper && typeof i18n.helper === "function") term = i18n.helper(term);
        return term;
    } catch (error) {
        return "";
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"leT0F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "minifyHTML", ()=>minifyHTML
);
parcelHelpers.export(exports, "formatBytes", ()=>formatBytes
);
const minifyHTML = (html)=>html.replace(/\n/g, "").replace(/  /g, "")
;
const formatBytes = (bytes, decimals = 2)=>{
    if (bytes === 0) return "0 Bytes";
    const base = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = [
        "Bytes",
        "KB",
        "MB",
        "GB",
        "TB",
        "PB",
        "EB",
        "ZB",
        "YB", 
    ];
    const index = Math.floor(Math.log(bytes) / Math.log(base));
    const size = sizes[index];
    return parseFloat((bytes / Math.pow(base, index)).toFixed(dm)) + " " + size;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"16WFs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _search = require("../../helpers/search");
class GIPHY extends _search.SearchBaseClass {
    constructor(apiKey1){
        super({
            apiKey: apiKey1,
            name: "giphy",
            icon: `<svg aria-hidden="true" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path fill="#000" d="M54 29h149v198H54z"/><path fill="#04FF8E" d="M24 22h30v212H24z"/><path fill="#8E2EFF" d="M203 80h30v154h-30z"/><path fill="#00C5FF" d="M24 227h209v29H24z"/><path fill="#FFF152" d="M24 0h119v29H24z"/><path fill="#FF5B5B" d="M203 59V29h-30V0h-30v88h90V59"/><path fill="#551C99" d="M203 117V88h30"/><path fill="#999131" d="M143 0v29h-29"/></g></svg>`,
            color: "#a800ff",
            noRecolor: true,
            poweredByUrl: "https://giphy.com",
            popularEndpoint: (apiKey)=>`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=18&rating=G`
            ,
            searchEndpoint: (apiKey, query)=>`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(query)}&limit=18&offset=0&rating=G&lang=en`
            ,
            metadata: (image)=>{
                const meta = {
                    caption: image.title,
                    alt: image.title,
                    author: image.user?.display_name || image.username,
                    link: image.user?.profile_url || this.poweredByUrl
                };
                return encodeURIComponent(JSON.stringify(meta));
            },
            getButton: (image)=>`<div class="result">
        <button aria-label="${image.title}" data-full-url="${image.images.downsized_large.url}&uppload-output=gif" data-metadata="${this.metadata(image)}" style="background-image: url('${image.images.preview_gif.url}')"></button></div>`
            ,
            getSearchResults: (response)=>response.data
            ,
            getPopularResults: (response)=>response.data
        });
    }
}
exports.default = GIPHY;

},{"../../helpers/search":"8Rvo3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Rvo3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SearchBaseClass", ()=>SearchBaseClass
);
var _service = require("../service");
var _http = require("../helpers/http");
var _elements = require("../helpers/elements");
var _assets = require("./assets");
var _files = require("./files");
let params = undefined;
const generateFileName = (file, service, type, query, metadata)=>{
    const ext = type?.indexOf('image/gif') == 0 ? 'gif' : 'jpg';
    file.name = `${query || `${service}-import`}-${Math.random().toString(36).slice(2)}.${ext}`;
    file.type = type ? type : "image/jpeg";
    file.metadata = metadata;
    return file;
};
class SearchBaseClass extends _service.UpploadService {
    results = [];
    loading = false;
    noRecolor = false;
    constructor({ apiKey , name , icon , color , poweredByUrl , popularEndpoint , searchEndpoint , getButton , metadata , getPopularResults , getSearchResults , noRecolor , fetchSettings  }){
        super();
        this.name = name;
        this.icon = icon;
        this.color = color;
        this.apiKey = apiKey;
        this.noRecolor = !!noRecolor;
        this.poweredByUrl = poweredByUrl;
        this.popularEndpoint = popularEndpoint(this.apiKey);
        this.searchEndpoint = searchEndpoint;
        this.getButton = getButton;
        this.metadata = metadata;
        this.getPopularResults = getPopularResults;
        this.getSearchResults = getSearchResults;
        if (fetchSettings) this.fetchSettings = fetchSettings(this.apiKey);
        if (this.popularEndpoint) _http.cachedFetch(this.popularEndpoint, this.fetchSettings).then((photos)=>{
            this.results = this.getPopularResults(photos);
        }).catch(()=>{});
    }
    updateImages(params1) {
        const imagesContainer = params1.uppload.container.querySelector(".search-images");
        if (imagesContainer) imagesContainer.innerHTML = `
        ${this.results.map((result)=>this.getButton(result)
        ).join("\n")}
      `;
    }
    update(params2) {
        this.updateImages(params2);
        if (params2) this.handlers(params2);
        const loader = params2.uppload.container.querySelector(".search-loader");
        const container = params2.uppload.container.querySelector(".search-container");
        if (container) container.style.display = this.loading ? "none" : "";
        if (loader) loader.style.display = this.loading ? "flex" : "none";
    }
    template = ({ translate  })=>{
        return `
      <div class="search-container"><form class="search-search-form">
      <div class="service-icon">${_assets.colorSVG(this.icon, this)}</div>
      <label><span>${translate(`services.${this.name}.label`) || translate("services.search.label")}</span>
        <input class="search-search-input" type="search" placeholder="${translate(`services.search.placeholder`)}" required></label>
        <button type="submit" style="background: ${this.color}">${translate(`services.search.button`, translate(`services.${this.name}.title`))}</button>
      </form>
      <div class="search-images"></div>
      <p class="search-footer">${translate("services.search.imagesPoweredBy", `<a href="${this.poweredByUrl}" target="_blank">${translate(`services.${this.name}.title`)}</a>`)}</p></div>
      <button class="need-help-link"><span>${translate("needHelp")}</span aria-hidden="true"><span>?</span></button>
      <div class="uppload-loader search-loader">
        <div></div>
        <p>${translate("fetching", translate(`services.${this.name}.title`))}</p>
      </div>
    `;
    };
    handlers = (params3)=>{
        const form = params3.uppload.container.querySelector(`.search-search-form`);
        if (form) _elements.safeListen(form, "submit", (event)=>{
            const input = params3.uppload.container.querySelector(`.search-search-input`);
            if (input) {
                const query = input.value;
                _http.cachedFetch(this.searchEndpoint(this.apiKey, query), this.fetchSettings).then((json)=>{
                    this.results = this.getSearchResults(json);
                    this.update(params3);
                }).catch(()=>params3.handle(new Error("errors.unable_to_search"))
                );
            }
            event.preventDefault();
            return false;
        });
        this.updateImages(params3);
        const imageButtons = params3.uppload.container.querySelectorAll(".search-images button");
        imageButtons.forEach((image)=>{
            _elements.safeListen(image, "click", ()=>{
                const url = image.getAttribute("data-full-url");
                const meta = image.getAttribute("data-metadata");
                const metadata = meta ? JSON.parse(decodeURIComponent(meta)) : {};
                this.loading = true;
                this.update(params3);
                if (url) _http.imageUrlToBlob(url).then((blob)=>params3.next(generateFileName(_files.blobToUpploadFile(blob), this.name, blob.type, image.getAttribute("aria-label"), metadata))
                ).catch((error)=>params3.handle("errors.response_not_ok")
                ).then(()=>this.loading = false
                );
            });
        });
        const helpButton = params3.uppload.container.querySelector(".need-help-link");
        if (helpButton) _elements.safeListen(helpButton, "click", ()=>params3.showHelp(`/services/search/${this.name}`)
        );
    };
}

},{"../service":"370pZ","../helpers/http":"xWjo7","../helpers/elements":"etwNm","./assets":"7Jjd5","./files":"5Dece","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"114WH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _search = require("../../helpers/search");
class Pixabay extends _search.SearchBaseClass {
    constructor(apiKey1){
        super({
            apiKey: apiKey1,
            name: "pixabay",
            icon: `<svg aria-hidden="true" viewbox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M137 91c5 30-13 60-40 72-16 8-35 6-52 6H27v56H0V96a69 69 0 0169-65c33-1 65 26 68 60zm13-55l33 48h1l33-48h33l-46 68 52 71h-34l-38-52h-1l-38 52h-34l52-71-46-68h33zM33 80c-7 12-5 26-5 39v23h41c19 0 38-15 41-35 4-19-9-40-28-46-18-7-40 2-49 19z" fill="#000" fill-rule="nonzero"/></svg>`,
            color: "#2ec66d",
            poweredByUrl: "https://pixabay.com",
            popularEndpoint: (apiKey)=>`https://pixabay.com/api/?key=${apiKey}&per_page=18&image_type=photo`
            ,
            searchEndpoint: (apiKey, query)=>`https://pixabay.com/api/?key=${apiKey}&per_page=18&q=${encodeURIComponent(query)}&image_type=photo`
            ,
            metadata: (image)=>{
                const meta = {
                    caption: image.tags,
                    alt: image.tags,
                    author: image.user,
                    link: image.pageURL
                };
                return encodeURIComponent(JSON.stringify(meta));
            },
            getButton: (image)=>`<div class="result">
        <button aria-label="${image.tags}" data-full-url="${image.largeImageURL}" data-metadata="${this.metadata(image)}" style="background-image: url('${image.previewURL}')"></button><small class="author">
        <img alt="" src="${image.userImageURL}">
        <span>${image.user}</span>
      </small></div>`
            ,
            getSearchResults: (response)=>response.hits
            ,
            getPopularResults: (response)=>response.hits
        });
    }
}
exports.default = Pixabay;

},{"../../helpers/search":"8Rvo3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1gZAY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _search = require("../../helpers/search");
class Unsplash extends _search.SearchBaseClass {
    constructor(apiKey1){
        super({
            apiKey: apiKey1,
            name: "unsplash",
            icon: `<svg aria-hidden="true" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M81 113v72h94v-72h81v143H0V113h81zM175 0v71H81V0h94z" fill="#000" fill-rule="evenodd"/></svg>`,
            color: "#333",
            poweredByUrl: "https://unsplash.com",
            metadata: (image)=>{
                const meta = {
                    caption: image.alt_description || image.description,
                    alt: image.alt_description || image.description,
                    author: image.user.name,
                    link: image.user.links.html
                };
                return encodeURIComponent(JSON.stringify(meta));
            },
            popularEndpoint: (apiKey)=>`https://api.unsplash.com/photos?client_id=${apiKey}`
            ,
            searchEndpoint: (apiKey, query)=>`https://api.unsplash.com/search/photos?client_id=${this.apiKey}&page=1&query=${encodeURIComponent(query)}`
            ,
            getButton: (image)=>`<div class="result">
        <button aria-label="${image.alt_description || image.description}" data-full-url="${image.urls.regular}" data-metadata="${this.metadata(image)}" style="background-image: url('${image.urls.thumb}')"></button>
        <small class="author">
          <img alt="" src="${image.user.profile_image.small}">
          <span>${image.user.name}</span>
        </small>
      </div>`
            ,
            getSearchResults: (response)=>response.results
            ,
            getPopularResults: (response)=>response
        });
    }
}
exports.default = Unsplash;

},{"../../helpers/search":"8Rvo3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i7hQF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _search = require("../../helpers/search");
class Pexels extends _search.SearchBaseClass {
    constructor(apiKey1){
        super({
            apiKey: apiKey1,
            name: "pexels",
            icon: `<svg aria-hidden="true" viewbox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M21 0h-4v255l72 1h71v-35l1-35 4-1a97 97 0 0053-33 81 81 0 0013-22l7-22v-3-23-2l-1-3v-2a95 95 0 00-42-60l-3-3-13-6a98 98 0 00-30-6H21zm130 37a85 85 0 008 1l11 5a57 57 0 0131 62c-5 23-23 41-45 45l-20 1h-12v68H53v-91l1-91h97z" fill="#000" fill-rule="nonzero"/></svg>`,
            color: "#05a081",
            poweredByUrl: "https://pexels.com",
            popularEndpoint: (apiKey)=>`https://api.pexels.com/v1/curated?per_page=9&page=1`
            ,
            searchEndpoint: (apiKey, query)=>`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=12&page=1`
            ,
            metadata: (image)=>{
                const meta = {
                    caption: image.alt,
                    alt: image.alt,
                    author: image.photographer,
                    link: image.url
                };
                return encodeURIComponent(JSON.stringify(meta));
            },
            getButton: (image)=>`<div class="result">
        <button aria-label="${image.photographer || ""}" data-full-url="${image.src.large2x}" data-metadata="${this.metadata(image)}" style="background-image: url('${image.src.tiny}')"></button><small class="author">
        <span>${image.photographer}</span>
      </small></div>`
            ,
            getSearchResults: (response)=>response.photos
            ,
            getPopularResults: (response)=>response.photos
            ,
            fetchSettings: (apiKey)=>({
                    headers: {
                        Authorization: apiKey
                    }
                })
        });
    }
}
exports.default = Pexels;

},{"../../helpers/search":"8Rvo3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iAXxH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _microlink = require("../../helpers/microlink");
class URL extends _microlink.MicrolinkBaseClass {
    name = "url";
    icon = `<svg aria-hidden="true" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="nonzero"><path d="M200 151l36-36a67 67 0 10-95-95L89 72a67 67 0 0012 105l28-28a31 31 0 01-14-51l52-52a31 31 0 0143 43l-15 15c6 15 8 31 5 47z"/><path d="M56 105l-36 36a67 67 0 1095 95l52-52a67 67 0 00-12-105l-28 28a31 31 0 0114 51l-52 52a31 31 0 01-43-43l15-15c-6-15-8-31-5-47z"/></g></svg>`;
    color = "#8e44ad";
}
exports.default = URL;

},{"../../helpers/microlink":"hZ1tq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ffQNO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _microlink = require("../../helpers/microlink");
class Screenshot extends _microlink.MicrolinkBaseClass {
    name = "screenshot";
    icon = `<svg aria-hidden="true" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M189 256h-25v-54h39v-38h53v92h-67zM0 210v-46h53v38h40v54H0v-46zm151-34h-10v-20h15v-15h20v35h-25zm-71-17v-18h20v15h15v20H80v-17zm0-62V80h35v20h-15v15H80V97zm76 10v-7h-15V80h35v35h-20v-8zM0 46V0h93v53H53v39H0V46zm203 27V53h-39V0h92v92h-53V73z" fill="#000" fill-rule="nonzero"/></svg>`;
    color = "#e67e22";
}
exports.default = Screenshot;

},{"../../helpers/microlink":"hZ1tq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8r5RP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _microlink = require("../../helpers/microlink");
class Flickr extends _microlink.MicrolinkBaseClass {
    name = "flickr";
    icon = `<svg aria-hidden="true" viewbox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M117 128a59 59 0 11-118 0 59 59 0 01118 0z" fill="#0063DC"/><path d="M257 128a59 59 0 11-118 0 59 59 0 01118 0z" fill="#FF0084"/></g></svg>`;
    noRecolor = true;
    color = "#ff0084";
    exampleURL = "https://www.flickr.com/photos/renewolf/26111951000/";
    validator = (input)=>/(https?:\/\/(.+?\.)?(flickr|flic)\.(com|kr)(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/.test(input)
    ;
}
exports.default = Flickr;

},{"../../helpers/microlink":"hZ1tq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5YDr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _microlink = require("../../helpers/microlink");
class Pinterest extends _microlink.MicrolinkBaseClass {
    name = "pinterest";
    icon = `<svg aria-hidden="true" viewbox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M128 0a128 128 0 00-47 247c-1-10-2-25 1-36l15-64s-4-8-4-19c0-18 10-31 23-31 11 0 16 8 16 18 0 11-7 27-11 43-3 12 7 23 19 23 23 0 41-24 41-59 0-31-22-52-54-52-36 0-58 27-58 55 0 11 5 23 10 30l1 3-4 15c0 2-1 3-4 1-16-7-26-30-26-49 0-41 30-78 85-78 44 0 79 32 79 74 0 44-28 80-67 80-13 0-25-7-29-15l-8 31c-3 11-11 25-16 33A128 128 0 10128 0z" fill="#000" fill-rule="nonzero"/></svg>`;
    color = "#e60023";
    exampleURL = "https://pinterest.com/pin/437201076327078006/";
    validator = (input)=>/(https?:\/\/(.+?\.)?(pinterest|pin)\.(com|it)(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/.test(input)
    ;
}
exports.default = Pinterest;

},{"../../helpers/microlink":"hZ1tq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fmiKS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _microlink = require("../../helpers/microlink");
class DeviantArt extends _microlink.MicrolinkBaseClass {
    name = "deviantart";
    icon = `<svg aria-hidden="true" viewbox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path fill="#000" fill-rule="nonzero" d="M208 44V0h-49l-2 5-22 35-7 9H49v66h44l5 5-49 89v47h49l2-5 24-42 4-6h80v-62h-44l-5-4z"/></svg>`;
    color = "#00d159";
    exampleURL = "https://www.deviantart.com/artbycatherineradley/art/Despair-820869682";
    validator = (input)=>/(https?:\/\/(.+?\.)?(deviantart|fav)\.(com|me)(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/.test(input)
    ;
}
exports.default = DeviantArt;

},{"../../helpers/microlink":"hZ1tq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fOabf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _microlink = require("../../helpers/microlink");
class NineGag extends _microlink.MicrolinkBaseClass {
    name = "ninegag";
    icon = `<svg aria-hidden="true" viewbox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M16 64L128 0l111 64v128l-111 64-112-64 44-26 68 39c22-13 45-25 67-39v-51l-67 39L16 90V64zm66 13l46 26 45-26-45-26-46 26z" fill="#000" fill-rule="nonzero"/></svg>`;
    color = "#000";
    exampleURL = "https://9gag.com/gag/awoBXb8";
    validator = (input)=>/(https?:\/\/(.+?\.)?9gag\.com(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/.test(input)
    ;
}
exports.default = NineGag;

},{"../../helpers/microlink":"hZ1tq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dzBph":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _microlink = require("../../helpers/microlink");
class ArtStation extends _microlink.MicrolinkBaseClass {
    name = "artstation";
    icon = `<svg aria-hidden="true" viewbox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M158 189l30 51H45c-10 0-19-5-23-14L0 189h158zM100 15h45c10 0 18 5 23 13v1l84 146a26 26 0 01-1 29v1l-21 35L100 15h45zM79 51l58 101H21L79 51z" fill="#000" fill-rule="evenodd"/></svg>`;
    color = "#3ea2cf";
    exampleURL = "https://www.artstation.com/artwork/VdGOkZ";
    validator = (input)=>/(https?:\/\/(.+?\.)?artstation\.com(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/.test(input)
    ;
}
exports.default = ArtStation;

},{"../../helpers/microlink":"hZ1tq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aQzkw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _microlink = require("../../helpers/microlink");
class Twitter extends _microlink.MicrolinkBaseClass {
    name = "twitter";
    icon = `<svg aria-hidden="true" viewbox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M81 232A148 148 0 00230 76c10-8 19-17 26-27-9 4-20 7-30 8 11-7 19-17 23-29-10 6-21 10-33 13a52 52 0 00-90 47C82 86 44 65 18 34a52 52 0 0016 70c-9-1-17-3-24-7v1c0 25 18 47 42 51a53 53 0 01-23 1c6 21 26 36 49 37a105 105 0 01-78 21c23 15 51 24 81 24" fill="#000" fill-rule="nonzero"/></svg>`;
    color = "#1da1f2";
    exampleURL = "https://twitter.com/elninoict/status/1106176415622418433";
    validator = (input)=>/(https?:\/\/(.+?\.)?(twitter|t)\.(co|com)(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/.test(input)
    ;
}
exports.default = Twitter;

},{"../../helpers/microlink":"hZ1tq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"adidV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _microlink = require("../../helpers/microlink");
class Flipboard extends _microlink.MicrolinkBaseClass {
    name = "flipboard";
    icon = `<svg aria-hidden="true" viewbox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="nonzero"><path opacity=".8" d="M85 85h85v85H85z"/><path opacity=".9" d="M85 0h171v85H85z"/><path d="M0 0h85v256H0z"/></g></svg>`;
    color = "#e12828";
    exampleURL = "https://flipboard.com/@bbcfuture/how-climate-change-could-kill-the-red-apple/f-c8d499b4ca%2Fbbc.com";
    validator = (input)=>/(https?:\/\/(.+?\.)?(flipboard|flip)\.(com|it)(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/.test(input)
    ;
}
exports.default = Flipboard;

},{"../../helpers/microlink":"hZ1tq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"koXfW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _microlink = require("../../helpers/microlink");
class Fotki extends _microlink.MicrolinkBaseClass {
    name = "fotki";
    icon = `<svg aria-hidden="true" viewbox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M188 105c-2-10-8-16-17-18l4-1c15-4 20-13 17-28l-7-38c-3-17-13-20-21-20l-19 4-77 22c-5 2-12 4-16 11-3 6-2 14-1 19l53 183c3 11 10 17 20 17h4l28-8c12-3 18-13 16-24l-3-11-13-67 3-1 13-3c13-3 19-12 17-25l-1-12zm-29 28l-22 5-5 2 13 64 5 25c1 5-2 9-7 11l-17 4c-5 1-9-2-11-8l-14-51L63 52c-3-9-1-12 8-14l77-22c9-3 13 0 15 9l8 39c1 8-1 11-9 14l-43 12 5 18 30-6c7-1 10 2 12 9l1 10c1 7-1 11-8 12z" fill="#000" fill-rule="nonzero"/></svg>`;
    color = "#5471B9";
    exampleURL = "https://public.fotki.com/EricAnke/holland/molens/20170928-162510.html";
    validator = (input)=>/(https?:\/\/(.+?\.)?fotki\.com(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/.test(input)
    ;
}
exports.default = Fotki;

},{"../../helpers/microlink":"hZ1tq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3exvS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _microlink = require("../../helpers/microlink");
class LinkedIn extends _microlink.MicrolinkBaseClass {
    name = "linkedin";
    icon = `<svg aria-hidden="true" viewbox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M19 256h218c10 0 19-8 19-18V18c0-10-8-18-19-18H19C9 0 0 8 0 18v220c0 10 8 18 19 18h218zM58 83c-13 0-21-9-21-20s8-20 22-20c13 0 21 9 21 20s-8 20-22 20zm80 131H99V99h39v16c5-8 14-19 34-19h1c25 0 44 17 44 52v66h-39v-62c0-15-5-26-19-26-11 0-17 7-20 14l-1 10v64zm-60 0H39V99h39v115zm60-99h-1 1z" fill="#000" fill-rule="nonzero"/></svg>`;
    color = "#0e76a8";
    exampleURL = "https://www.linkedin.com/posts/explorius-vastgoedontwikkeling-b-v-_el-nino-huurt-kantoor-in-enschede-activity-6480386878641180672-7DC_";
    validator = (input)=>/(https?:\/\/(.+?\.)?linkedin\.com(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/.test(input)
    ;
}
exports.default = LinkedIn;

},{"../../helpers/microlink":"hZ1tq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2VNTM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _microlink = require("../../helpers/microlink");
class Reddit extends _microlink.MicrolinkBaseClass {
    name = "reddit";
    icon = `<svg aria-hidden="true" viewbox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M152 164v3c-5 5-13 7-24 7s-19-2-24-7v-3h3c4 4 11 6 21 6s17-2 21-6h3zm-37-26a10 10 0 00-20 0 10 10 0 0020 0zm141-10a128 128 0 11-256 0 128 128 0 01256 0zm-53-1a17 17 0 00-28-12c-12-8-27-12-44-13l10-29 25 6h-1a14 14 0 0028 0 13 13 0 00-27-5l-26-6c-2 0-3 0-3 2l-11 32c-17 0-33 5-45 13a16 16 0 00-28 12c0 6 4 11 9 14l-1 5c0 24 30 44 67 44 36 0 66-20 66-44v-5c5-3 9-8 9-14zm-52 1c-6 0-10 5-10 10a10 10 0 0020 0c0-5-5-10-10-10z" fill="#000" fill-rule="nonzero"/></svg>`;
    color = "#ff4301";
    exampleURL = "https://www.reddit.com/r/thenetherlands/comments/dz1myk/a_beautiful_morning_in_ermelo/";
    validator = (input)=>/(https?:\/\/(.+?\.)?reddit\.com(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/.test(input)
    ;
}
exports.default = Reddit;

},{"../../helpers/microlink":"hZ1tq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kmF91":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _microlink = require("../../helpers/microlink");
class Tumblr extends _microlink.MicrolinkBaseClass {
    name = "tumblr";
    icon = `<svg aria-hidden="true" viewbox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M164 209c-21 0-25-15-26-25v-76h49V65h-48V0h-39l-2 2c-2 20-11 55-51 69v37h30v80c0 28 18 69 75 68 19 0 41-8 45-15l-12-37c-5 3-14 5-21 5z" fill="#000" fill-rule="evenodd"/></svg>`;
    color = "#34526f";
    exampleURL = "https://germanpostwarmodern.tumblr.com/post/186653088149/cubicus-building-of-twente-university-1969-73-in";
    validator = (input)=>/(https?:\/\/(.+?\.)?tumblr\.com(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/.test(input)
    ;
}
exports.default = Tumblr;

},{"../../helpers/microlink":"hZ1tq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"FKJYw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _microlink = require("../../helpers/microlink");
class WeHeartIt extends _microlink.MicrolinkBaseClass {
    name = "weheartit";
    icon = `<svg aria-hidden="true" viewbox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M231 36c-18-16-40-23-64-13-12 5-24 11-34 20l-5 5-5-5c-10-8-20-15-31-20s-22-8-35-6C25 22-2 56 0 89l1 15c5 31 22 55 44 77a364 364 0 0083 59l5-3c23-13 45-28 65-45 21-20 40-41 51-68 13-34 8-66-18-88z" fill="#000" fill-rule="nonzero"/></svg>`;
    color = "#ff5464";
    exampleURL = "https://weheartit.com/entry/221671573";
    validator = (input)=>/(https?:\/\/(.+?\.)?weheartit\.com(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/.test(input)
    ;
}
exports.default = WeHeartIt;

},{"../../helpers/microlink":"hZ1tq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9m3vc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _effect = require("../../effect");
var _cropperjs = require("cropperjs");
var _cropperjsDefault = parcelHelpers.interopDefault(_cropperjs);
var _elements = require("../../helpers/elements");
class Crop extends _effect.UpploadEffect {
    name = "crop";
    icon = `<svg aria-hidden="true" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M74 0v182h134v-25h-26V74H99V48h96c4 0 7 1 9 4 3 2 4 5 4 9v121h48v26h-48v48h-26v-48H61a13 13 0 01-13-13V74H0V48h48V0h26z" fill="#000" fill-rule="nonzero"/></svg>`;
    aspectRatio = NaN;
    hideAspectRatioSettings = false;
    aspectRatioOptions = {
        free: NaN,
        square: 1,
        "16:9": 16 / 9
    };
    autoCropArea = 1;
    viewMode = 1;
    originalFile = {
        blob: new Blob()
    };
    constructor({ aspectRatio , aspectRatioOptions , hideAspectRatioSettings , autoCropArea , viewMode  } = {}){
        super();
        if (aspectRatio) this.aspectRatio = aspectRatio;
        if (aspectRatioOptions) this.aspectRatioOptions = aspectRatioOptions;
        if (autoCropArea) this.autoCropArea = autoCropArea;
        if (viewMode) this.viewMode = viewMode;
        if (hideAspectRatioSettings) this.hideAspectRatioSettings = hideAspectRatioSettings;
    }
    template = ({ file , translate  })=>{
        const image = URL.createObjectURL(file.blob);
        this.originalFile = file;
        return `
      <div class="uppload-cropping-element">
        <img style="width: 20px" alt="" src="${image}">
      </div>
      ${!this.aspectRatio && !this.hideAspectRatioSettings ? `<div class="uppload-actions">
        ${Object.keys(this.aspectRatioOptions).map((aspectRatio, index)=>`
          <input value="${this.aspectRatioOptions[aspectRatio]}" data-name="${aspectRatio}" name="crop-aspect-ratio" type="radio"${!index ? " checked" : ""} id="crop-aspect-ratio-${aspectRatio}">
          <label for="crop-aspect-ratio-${aspectRatio}">${translate(`effects.crop.aspectRatios.${aspectRatio}`) || aspectRatio}</label>`
        ).join("")}
      </div>` : ""}
    `;
    };
    handlers = (params)=>{
        const cropperElement = params.uppload.container.querySelector(".uppload-cropping-element img");
        const originalFile = this.originalFile;
        const type = originalFile.type && [
            "image/jpeg",
            "image/webp"
        ].indexOf(originalFile.type) !== -1 ? originalFile.type : "image/png";
        if (cropperElement) _elements.fitImageToContainer(params, cropperElement).then(()=>{
            const cropper = new _cropperjsDefault.default(cropperElement, {
                aspectRatio: this.aspectRatio,
                autoCropArea: this.autoCropArea,
                viewMode: this.viewMode,
                ready () {
                    _elements.canvasToBlob(cropper.getCroppedCanvas(), type).then((blob)=>{
                        originalFile.blob = blob;
                        params.next(originalFile);
                    });
                },
                cropend () {
                    _elements.canvasToBlob(cropper.getCroppedCanvas(), type).then((blob)=>{
                        originalFile.blob = blob;
                        params.next(originalFile);
                    });
                }
            });
            const aspectRatios = params.uppload.container.querySelectorAll("input[name='crop-aspect-ratio']");
            aspectRatios.forEach((aspectRatio)=>{
                _elements.safeListen(aspectRatio, "change", ()=>{
                    const selectedAspectRatio = params.uppload.container.querySelector("input[name='crop-aspect-ratio']:checked");
                    if (selectedAspectRatio) {
                        cropper.setAspectRatio(this.aspectRatioOptions[selectedAspectRatio.getAttribute("data-name") || "free"]);
                        _elements.canvasToBlob(cropper.getCroppedCanvas(), type).then((blob)=>{
                            originalFile.blob = blob;
                            params.next(originalFile);
                        });
                    }
                });
            });
        });
    };
}
exports.default = Crop;

},{"../../effect":"j9yFt","cropperjs":"dBPeF","../../helpers/elements":"etwNm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j9yFt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UpploadEffect", ()=>UpploadEffect
);
class UpploadEffect {
    type = "effect";
    name = "";
    invisible = false;
    noRecolor = false;
    color = "#000";
    icon = "";
    template = ()=>""
    ;
    handlers = ()=>{};
    supports = ()=>true
    ;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dBPeF":[function(require,module,exports) {
/*!
 * Cropper.js v1.5.12
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-06-12T08:00:17.411Z
 */ (function(global, factory) {
    module.exports = factory();
})(this, function() {
    'use strict';
    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }
    function _objectSpread2(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
            });
            else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            else ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
        return target;
    }
    function _typeof(obj1) {
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function(obj) {
            return typeof obj;
        };
        else _typeof = function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        return _typeof(obj1);
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }
    function _defineProperty(obj, key, value) {
        if (key in obj) Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        else obj[key] = value;
        return obj;
    }
    function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
    }
    function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
    }
    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
        return arr2;
    }
    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var IS_BROWSER = typeof window !== 'undefined' && typeof window.document !== 'undefined';
    var WINDOW = IS_BROWSER ? window : {};
    var IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? 'ontouchstart' in WINDOW.document.documentElement : false;
    var HAS_POINTER_EVENT = IS_BROWSER ? 'PointerEvent' in WINDOW : false;
    var NAMESPACE = 'cropper'; // Actions
    var ACTION_ALL = 'all';
    var ACTION_CROP = 'crop';
    var ACTION_MOVE = 'move';
    var ACTION_ZOOM = 'zoom';
    var ACTION_EAST = 'e';
    var ACTION_WEST = 'w';
    var ACTION_SOUTH = 's';
    var ACTION_NORTH = 'n';
    var ACTION_NORTH_EAST = 'ne';
    var ACTION_NORTH_WEST = 'nw';
    var ACTION_SOUTH_EAST = 'se';
    var ACTION_SOUTH_WEST = 'sw'; // Classes
    var CLASS_CROP = "".concat(NAMESPACE, "-crop");
    var CLASS_DISABLED = "".concat(NAMESPACE, "-disabled");
    var CLASS_HIDDEN = "".concat(NAMESPACE, "-hidden");
    var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
    var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
    var CLASS_MODAL = "".concat(NAMESPACE, "-modal");
    var CLASS_MOVE = "".concat(NAMESPACE, "-move"); // Data keys
    var DATA_ACTION = "".concat(NAMESPACE, "Action");
    var DATA_PREVIEW = "".concat(NAMESPACE, "Preview"); // Drag modes
    var DRAG_MODE_CROP = 'crop';
    var DRAG_MODE_MOVE = 'move';
    var DRAG_MODE_NONE = 'none'; // Events
    var EVENT_CROP = 'crop';
    var EVENT_CROP_END = 'cropend';
    var EVENT_CROP_MOVE = 'cropmove';
    var EVENT_CROP_START = 'cropstart';
    var EVENT_DBLCLICK = 'dblclick';
    var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? 'touchstart' : 'mousedown';
    var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? 'touchmove' : 'mousemove';
    var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? 'touchend touchcancel' : 'mouseup';
    var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? 'pointerdown' : EVENT_TOUCH_START;
    var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? 'pointermove' : EVENT_TOUCH_MOVE;
    var EVENT_POINTER_UP = HAS_POINTER_EVENT ? 'pointerup pointercancel' : EVENT_TOUCH_END;
    var EVENT_READY = 'ready';
    var EVENT_RESIZE = 'resize';
    var EVENT_WHEEL = 'wheel';
    var EVENT_ZOOM = 'zoom'; // Mime types
    var MIME_TYPE_JPEG = 'image/jpeg'; // RegExps
    var REGEXP_ACTIONS = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/;
    var REGEXP_DATA_URL = /^data:/;
    var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
    var REGEXP_TAG_NAME = /^img|canvas$/i; // Misc
    // Inspired by the default width and height of a canvas element.
    var MIN_CONTAINER_WIDTH = 200;
    var MIN_CONTAINER_HEIGHT = 100;
    var DEFAULTS = {
        // Define the view mode of the cropper
        viewMode: 0,
        // 0, 1, 2, 3
        // Define the dragging mode of the cropper
        dragMode: DRAG_MODE_CROP,
        // 'crop', 'move' or 'none'
        // Define the initial aspect ratio of the crop box
        initialAspectRatio: NaN,
        // Define the aspect ratio of the crop box
        aspectRatio: NaN,
        // An object with the previous cropping result data
        data: null,
        // A selector for adding extra containers to preview
        preview: '',
        // Re-render the cropper when resize the window
        responsive: true,
        // Restore the cropped area after resize the window
        restore: true,
        // Check if the current image is a cross-origin image
        checkCrossOrigin: true,
        // Check the current image's Exif Orientation information
        checkOrientation: true,
        // Show the black modal
        modal: true,
        // Show the dashed lines for guiding
        guides: true,
        // Show the center indicator for guiding
        center: true,
        // Show the white modal to highlight the crop box
        highlight: true,
        // Show the grid background
        background: true,
        // Enable to crop the image automatically when initialize
        autoCrop: true,
        // Define the percentage of automatic cropping area when initializes
        autoCropArea: 0.8,
        // Enable to move the image
        movable: true,
        // Enable to rotate the image
        rotatable: true,
        // Enable to scale the image
        scalable: true,
        // Enable to zoom the image
        zoomable: true,
        // Enable to zoom the image by dragging touch
        zoomOnTouch: true,
        // Enable to zoom the image by wheeling mouse
        zoomOnWheel: true,
        // Define zoom ratio when zoom the image by wheeling mouse
        wheelZoomRatio: 0.1,
        // Enable to move the crop box
        cropBoxMovable: true,
        // Enable to resize the crop box
        cropBoxResizable: true,
        // Toggle drag mode between "crop" and "move" when click twice on the cropper
        toggleDragModeOnDblclick: true,
        // Size limitation
        minCanvasWidth: 0,
        minCanvasHeight: 0,
        minCropBoxWidth: 0,
        minCropBoxHeight: 0,
        minContainerWidth: MIN_CONTAINER_WIDTH,
        minContainerHeight: MIN_CONTAINER_HEIGHT,
        // Shortcuts of events
        ready: null,
        cropstart: null,
        cropmove: null,
        cropend: null,
        crop: null,
        zoom: null
    };
    var TEMPLATE = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';
    /**
   * Check if the given value is not a number.
   */ var isNaN = Number.isNaN || WINDOW.isNaN;
    /**
   * Check if the given value is a number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a number, else `false`.
   */ function isNumber(value) {
        return typeof value === 'number' && !isNaN(value);
    }
    /**
   * Check if the given value is a positive number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a positive number, else `false`.
   */ var isPositiveNumber = function isPositiveNumber(value) {
        return value > 0 && value < Infinity;
    };
    /**
   * Check if the given value is undefined.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is undefined, else `false`.
   */ function isUndefined(value) {
        return typeof value === 'undefined';
    }
    /**
   * Check if the given value is an object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is an object, else `false`.
   */ function isObject(value) {
        return _typeof(value) === 'object' && value !== null;
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    /**
   * Check if the given value is a plain object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a plain object, else `false`.
   */ function isPlainObject(value) {
        if (!isObject(value)) return false;
        try {
            var _constructor = value.constructor;
            var prototype = _constructor.prototype;
            return _constructor && prototype && hasOwnProperty.call(prototype, 'isPrototypeOf');
        } catch (error) {
            return false;
        }
    }
    /**
   * Check if the given value is a function.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a function, else `false`.
   */ function isFunction(value) {
        return typeof value === 'function';
    }
    var slice = Array.prototype.slice;
    /**
   * Convert array-like or iterable object to an array.
   * @param {*} value - The value to convert.
   * @returns {Array} Returns a new array.
   */ function toArray(value) {
        return Array.from ? Array.from(value) : slice.call(value);
    }
    /**
   * Iterate the given data.
   * @param {*} data - The data to iterate.
   * @param {Function} callback - The process function for each element.
   * @returns {*} The original data.
   */ function forEach(data, callback) {
        if (data && isFunction(callback)) {
            if (Array.isArray(data) || isNumber(data.length)) toArray(data).forEach(function(value, key) {
                callback.call(data, value, key, data);
            });
            else if (isObject(data)) Object.keys(data).forEach(function(key) {
                callback.call(data, data[key], key, data);
            });
        }
        return data;
    }
    /**
   * Extend the given object.
   * @param {*} target - The target object to extend.
   * @param {*} args - The rest objects for merging to the target object.
   * @returns {Object} The extended object.
   */ var assign = Object.assign || function assign(target) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
        if (isObject(target) && args.length > 0) args.forEach(function(arg) {
            if (isObject(arg)) Object.keys(arg).forEach(function(key) {
                target[key] = arg[key];
            });
        });
        return target;
    };
    var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;
    /**
   * Normalize decimal number.
   * Check out {@link https://0.30000000000000004.com/}
   * @param {number} value - The value to normalize.
   * @param {number} [times=100000000000] - The times for normalizing.
   * @returns {number} Returns the normalized number.
   */ function normalizeDecimalNumber(value) {
        var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000000000;
        return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
    }
    var REGEXP_SUFFIX = /^width|height|left|top|marginLeft|marginTop$/;
    /**
   * Apply styles to the given element.
   * @param {Element} element - The target element.
   * @param {Object} styles - The styles for applying.
   */ function setStyle(element, styles) {
        var style = element.style;
        forEach(styles, function(value, property) {
            if (REGEXP_SUFFIX.test(property) && isNumber(value)) value = "".concat(value, "px");
            style[property] = value;
        });
    }
    /**
   * Check if the given element has a special class.
   * @param {Element} element - The element to check.
   * @param {string} value - The class to search.
   * @returns {boolean} Returns `true` if the special class was found.
   */ function hasClass(element, value) {
        return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
    }
    /**
   * Add classes to the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be added.
   */ function addClass(element, value) {
        if (!value) return;
        if (isNumber(element.length)) {
            forEach(element, function(elem) {
                addClass(elem, value);
            });
            return;
        }
        if (element.classList) {
            element.classList.add(value);
            return;
        }
        var className = element.className.trim();
        if (!className) element.className = value;
        else if (className.indexOf(value) < 0) element.className = "".concat(className, " ").concat(value);
    }
    /**
   * Remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be removed.
   */ function removeClass(element, value) {
        if (!value) return;
        if (isNumber(element.length)) {
            forEach(element, function(elem) {
                removeClass(elem, value);
            });
            return;
        }
        if (element.classList) {
            element.classList.remove(value);
            return;
        }
        if (element.className.indexOf(value) >= 0) element.className = element.className.replace(value, '');
    }
    /**
   * Add or remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be toggled.
   * @param {boolean} added - Add only.
   */ function toggleClass(element, value, added) {
        if (!value) return;
        if (isNumber(element.length)) {
            forEach(element, function(elem) {
                toggleClass(elem, value, added);
            });
            return;
        } // IE10-11 doesn't support the second parameter of `classList.toggle`
        if (added) addClass(element, value);
        else removeClass(element, value);
    }
    var REGEXP_CAMEL_CASE = /([a-z\d])([A-Z])/g;
    /**
   * Transform the given string from camelCase to kebab-case
   * @param {string} value - The value to transform.
   * @returns {string} The transformed value.
   */ function toParamCase(value) {
        return value.replace(REGEXP_CAMEL_CASE, '$1-$2').toLowerCase();
    }
    /**
   * Get data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to get.
   * @returns {string} The data value.
   */ function getData(element, name) {
        if (isObject(element[name])) return element[name];
        if (element.dataset) return element.dataset[name];
        return element.getAttribute("data-".concat(toParamCase(name)));
    }
    /**
   * Set data to the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to set.
   * @param {string} data - The data value.
   */ function setData(element, name, data) {
        if (isObject(data)) element[name] = data;
        else if (element.dataset) element.dataset[name] = data;
        else element.setAttribute("data-".concat(toParamCase(name)), data);
    }
    /**
   * Remove data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to remove.
   */ function removeData(element, name) {
        if (isObject(element[name])) try {
            delete element[name];
        } catch (error) {
            element[name] = undefined;
        }
        else if (element.dataset) // #128 Safari not allows to delete dataset property
        try {
            delete element.dataset[name];
        } catch (error1) {
            element.dataset[name] = undefined;
        }
        else element.removeAttribute("data-".concat(toParamCase(name)));
    }
    var REGEXP_SPACES = /\s\s*/;
    var onceSupported = function() {
        var supported = false;
        if (IS_BROWSER) {
            var once = false;
            var listener = function listener() {};
            var options = Object.defineProperty({}, 'once', {
                get: function get() {
                    supported = true;
                    return once;
                },
                /**
         * This setter can fix a `TypeError` in strict mode
         * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
         * @param {boolean} value - The value to set
         */ set: function set(value) {
                    once = value;
                }
            });
            WINDOW.addEventListener('test', listener, options);
            WINDOW.removeEventListener('test', listener, options);
        }
        return supported;
    }();
    /**
   * Remove event listener from the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */ function removeListener(element, type, listener) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var handler = listener;
        type.trim().split(REGEXP_SPACES).forEach(function(event) {
            if (!onceSupported) {
                var listeners = element.listeners;
                if (listeners && listeners[event] && listeners[event][listener]) {
                    handler = listeners[event][listener];
                    delete listeners[event][listener];
                    if (Object.keys(listeners[event]).length === 0) delete listeners[event];
                    if (Object.keys(listeners).length === 0) delete element.listeners;
                }
            }
            element.removeEventListener(event, handler, options);
        });
    }
    /**
   * Add event listener to the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */ function addListener(element, type, listener) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var _handler = listener;
        type.trim().split(REGEXP_SPACES).forEach(function(event) {
            if (options.once && !onceSupported) {
                var _element$listeners = element.listeners, listeners = _element$listeners === void 0 ? {} : _element$listeners;
                _handler = function handler() {
                    delete listeners[event][listener];
                    element.removeEventListener(event, _handler, options);
                    for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
                    listener.apply(element, args);
                };
                if (!listeners[event]) listeners[event] = {};
                if (listeners[event][listener]) element.removeEventListener(event, listeners[event][listener], options);
                listeners[event][listener] = _handler;
                element.listeners = listeners;
            }
            element.addEventListener(event, _handler, options);
        });
    }
    /**
   * Dispatch event on the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Object} data - The additional event data.
   * @returns {boolean} Indicate if the event is default prevented or not.
   */ function dispatchEvent(element, type, data) {
        var event; // Event and CustomEvent on IE9-11 are global objects, not constructors
        if (isFunction(Event) && isFunction(CustomEvent)) event = new CustomEvent(type, {
            detail: data,
            bubbles: true,
            cancelable: true
        });
        else {
            event = document.createEvent('CustomEvent');
            event.initCustomEvent(type, true, true, data);
        }
        return element.dispatchEvent(event);
    }
    /**
   * Get the offset base on the document.
   * @param {Element} element - The target element.
   * @returns {Object} The offset data.
   */ function getOffset(element) {
        var box = element.getBoundingClientRect();
        return {
            left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
            top: box.top + (window.pageYOffset - document.documentElement.clientTop)
        };
    }
    var location = WINDOW.location;
    var REGEXP_ORIGINS = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
    /**
   * Check if the given URL is a cross origin URL.
   * @param {string} url - The target URL.
   * @returns {boolean} Returns `true` if the given URL is a cross origin URL, else `false`.
   */ function isCrossOriginURL(url) {
        var parts = url.match(REGEXP_ORIGINS);
        return parts !== null && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
    }
    /**
   * Add timestamp to the given URL.
   * @param {string} url - The target URL.
   * @returns {string} The result URL.
   */ function addTimestamp(url) {
        var timestamp = "timestamp=".concat(new Date().getTime());
        return url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp;
    }
    /**
   * Get transforms base on the given object.
   * @param {Object} obj - The target object.
   * @returns {string} A string contains transform values.
   */ function getTransforms(_ref) {
        var rotate = _ref.rotate, scaleX = _ref.scaleX, scaleY = _ref.scaleY, translateX = _ref.translateX, translateY = _ref.translateY;
        var values = [];
        if (isNumber(translateX) && translateX !== 0) values.push("translateX(".concat(translateX, "px)"));
        if (isNumber(translateY) && translateY !== 0) values.push("translateY(".concat(translateY, "px)"));
         // Rotate should come first before scale to match orientation transform
        if (isNumber(rotate) && rotate !== 0) values.push("rotate(".concat(rotate, "deg)"));
        if (isNumber(scaleX) && scaleX !== 1) values.push("scaleX(".concat(scaleX, ")"));
        if (isNumber(scaleY) && scaleY !== 1) values.push("scaleY(".concat(scaleY, ")"));
        var transform = values.length ? values.join(' ') : 'none';
        return {
            WebkitTransform: transform,
            msTransform: transform,
            transform: transform
        };
    }
    /**
   * Get the max ratio of a group of pointers.
   * @param {string} pointers - The target pointers.
   * @returns {number} The result ratio.
   */ function getMaxZoomRatio(pointers) {
        var pointers2 = _objectSpread2({}, pointers);
        var maxRatio = 0;
        forEach(pointers, function(pointer, pointerId) {
            delete pointers2[pointerId];
            forEach(pointers2, function(pointer2) {
                var x1 = Math.abs(pointer.startX - pointer2.startX);
                var y1 = Math.abs(pointer.startY - pointer2.startY);
                var x2 = Math.abs(pointer.endX - pointer2.endX);
                var y2 = Math.abs(pointer.endY - pointer2.endY);
                var z1 = Math.sqrt(x1 * x1 + y1 * y1);
                var z2 = Math.sqrt(x2 * x2 + y2 * y2);
                var ratio = (z2 - z1) / z1;
                if (Math.abs(ratio) > Math.abs(maxRatio)) maxRatio = ratio;
            });
        });
        return maxRatio;
    }
    /**
   * Get a pointer from an event object.
   * @param {Object} event - The target event object.
   * @param {boolean} endOnly - Indicates if only returns the end point coordinate or not.
   * @returns {Object} The result pointer contains start and/or end point coordinates.
   */ function getPointer(_ref2, endOnly) {
        var pageX = _ref2.pageX, pageY = _ref2.pageY;
        var end = {
            endX: pageX,
            endY: pageY
        };
        return endOnly ? end : _objectSpread2({
            startX: pageX,
            startY: pageY
        }, end);
    }
    /**
   * Get the center point coordinate of a group of pointers.
   * @param {Object} pointers - The target pointers.
   * @returns {Object} The center point coordinate.
   */ function getPointersCenter(pointers) {
        var pageX = 0;
        var pageY = 0;
        var count = 0;
        forEach(pointers, function(_ref3) {
            var startX = _ref3.startX, startY = _ref3.startY;
            pageX += startX;
            pageY += startY;
            count += 1;
        });
        pageX /= count;
        pageY /= count;
        return {
            pageX: pageX,
            pageY: pageY
        };
    }
    /**
   * Get the max sizes in a rectangle under the given aspect ratio.
   * @param {Object} data - The original sizes.
   * @param {string} [type='contain'] - The adjust type.
   * @returns {Object} The result sizes.
   */ function getAdjustedSizes(_ref4) {
        var aspectRatio = _ref4.aspectRatio, height = _ref4.height, width = _ref4.width;
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'contain';
        var isValidWidth = isPositiveNumber(width);
        var isValidHeight = isPositiveNumber(height);
        if (isValidWidth && isValidHeight) {
            var adjustedWidth = height * aspectRatio;
            if (type === 'contain' && adjustedWidth > width || type === 'cover' && adjustedWidth < width) height = width / aspectRatio;
            else width = height * aspectRatio;
        } else if (isValidWidth) height = width / aspectRatio;
        else if (isValidHeight) width = height * aspectRatio;
        return {
            width: width,
            height: height
        };
    }
    /**
   * Get the new sizes of a rectangle after rotated.
   * @param {Object} data - The original sizes.
   * @returns {Object} The result sizes.
   */ function getRotatedSizes(_ref5) {
        var width = _ref5.width, height = _ref5.height, degree = _ref5.degree;
        degree = Math.abs(degree) % 180;
        if (degree === 90) return {
            width: height,
            height: width
        };
        var arc = degree % 90 * Math.PI / 180;
        var sinArc = Math.sin(arc);
        var cosArc = Math.cos(arc);
        var newWidth = width * cosArc + height * sinArc;
        var newHeight = width * sinArc + height * cosArc;
        return degree > 90 ? {
            width: newHeight,
            height: newWidth
        } : {
            width: newWidth,
            height: newHeight
        };
    }
    /**
   * Get a canvas which drew the given image.
   * @param {HTMLImageElement} image - The image for drawing.
   * @param {Object} imageData - The image data.
   * @param {Object} canvasData - The canvas data.
   * @param {Object} options - The options.
   * @returns {HTMLCanvasElement} The result canvas.
   */ function getSourceCanvas(image, _ref6, _ref7, _ref8) {
        var imageAspectRatio = _ref6.aspectRatio, imageNaturalWidth = _ref6.naturalWidth, imageNaturalHeight = _ref6.naturalHeight, _ref6$rotate = _ref6.rotate, rotate = _ref6$rotate === void 0 ? 0 : _ref6$rotate, _ref6$scaleX = _ref6.scaleX, scaleX = _ref6$scaleX === void 0 ? 1 : _ref6$scaleX, _ref6$scaleY = _ref6.scaleY, scaleY = _ref6$scaleY === void 0 ? 1 : _ref6$scaleY;
        var aspectRatio = _ref7.aspectRatio, naturalWidth = _ref7.naturalWidth, naturalHeight = _ref7.naturalHeight;
        var _ref8$fillColor = _ref8.fillColor, fillColor = _ref8$fillColor === void 0 ? 'transparent' : _ref8$fillColor, _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled, imageSmoothingEnabled = _ref8$imageSmoothingE === void 0 ? true : _ref8$imageSmoothingE, _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality, imageSmoothingQuality = _ref8$imageSmoothingQ === void 0 ? 'low' : _ref8$imageSmoothingQ, _ref8$maxWidth = _ref8.maxWidth, maxWidth = _ref8$maxWidth === void 0 ? Infinity : _ref8$maxWidth, _ref8$maxHeight = _ref8.maxHeight, maxHeight = _ref8$maxHeight === void 0 ? Infinity : _ref8$maxHeight, _ref8$minWidth = _ref8.minWidth, minWidth = _ref8$minWidth === void 0 ? 0 : _ref8$minWidth, _ref8$minHeight = _ref8.minHeight, minHeight = _ref8$minHeight === void 0 ? 0 : _ref8$minHeight;
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        var maxSizes = getAdjustedSizes({
            aspectRatio: aspectRatio,
            width: maxWidth,
            height: maxHeight
        });
        var minSizes = getAdjustedSizes({
            aspectRatio: aspectRatio,
            width: minWidth,
            height: minHeight
        }, 'cover');
        var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
        var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight)); // Note: should always use image's natural sizes for drawing as
        // imageData.naturalWidth === canvasData.naturalHeight when rotate % 180 === 90
        var destMaxSizes = getAdjustedSizes({
            aspectRatio: imageAspectRatio,
            width: maxWidth,
            height: maxHeight
        });
        var destMinSizes = getAdjustedSizes({
            aspectRatio: imageAspectRatio,
            width: minWidth,
            height: minHeight
        }, 'cover');
        var destWidth = Math.min(destMaxSizes.width, Math.max(destMinSizes.width, imageNaturalWidth));
        var destHeight = Math.min(destMaxSizes.height, Math.max(destMinSizes.height, imageNaturalHeight));
        var params = [
            -destWidth / 2,
            -destHeight / 2,
            destWidth,
            destHeight
        ];
        canvas.width = normalizeDecimalNumber(width);
        canvas.height = normalizeDecimalNumber(height);
        context.fillStyle = fillColor;
        context.fillRect(0, 0, width, height);
        context.save();
        context.translate(width / 2, height / 2);
        context.rotate(rotate * Math.PI / 180);
        context.scale(scaleX, scaleY);
        context.imageSmoothingEnabled = imageSmoothingEnabled;
        context.imageSmoothingQuality = imageSmoothingQuality;
        context.drawImage.apply(context, [
            image
        ].concat(_toConsumableArray(params.map(function(param) {
            return Math.floor(normalizeDecimalNumber(param));
        }))));
        context.restore();
        return canvas;
    }
    var fromCharCode = String.fromCharCode;
    /**
   * Get string from char code in data view.
   * @param {DataView} dataView - The data view for read.
   * @param {number} start - The start index.
   * @param {number} length - The read length.
   * @returns {string} The read result.
   */ function getStringFromCharCode(dataView, start, length) {
        var str = '';
        length += start;
        for(var i = start; i < length; i += 1)str += fromCharCode(dataView.getUint8(i));
        return str;
    }
    var REGEXP_DATA_URL_HEAD = /^data:.*,/;
    /**
   * Transform Data URL to array buffer.
   * @param {string} dataURL - The Data URL to transform.
   * @returns {ArrayBuffer} The result array buffer.
   */ function dataURLToArrayBuffer(dataURL) {
        var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, '');
        var binary = atob(base64);
        var arrayBuffer = new ArrayBuffer(binary.length);
        var uint8 = new Uint8Array(arrayBuffer);
        forEach(uint8, function(value, i) {
            uint8[i] = binary.charCodeAt(i);
        });
        return arrayBuffer;
    }
    /**
   * Transform array buffer to Data URL.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to transform.
   * @param {string} mimeType - The mime type of the Data URL.
   * @returns {string} The result Data URL.
   */ function arrayBufferToDataURL(arrayBuffer, mimeType) {
        var chunks = []; // Chunk Typed Array for better performance (#435)
        var chunkSize = 8192;
        var uint8 = new Uint8Array(arrayBuffer);
        while(uint8.length > 0){
            // XXX: Babel's `toConsumableArray` helper will throw error in IE or Safari 9
            // eslint-disable-next-line prefer-spread
            chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
            uint8 = uint8.subarray(chunkSize);
        }
        return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join('')));
    }
    /**
   * Get orientation value from given array buffer.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to read.
   * @returns {number} The read orientation value.
   */ function resetAndGetOrientation(arrayBuffer) {
        var dataView = new DataView(arrayBuffer);
        var orientation; // Ignores range error when the image does not have correct Exif information
        try {
            var littleEndian;
            var app1Start;
            var ifdStart; // Only handle JPEG image (start by 0xFFD8)
            if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
                var length = dataView.byteLength;
                var offset = 2;
                while(offset + 1 < length){
                    if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
                        app1Start = offset;
                        break;
                    }
                    offset += 1;
                }
            }
            if (app1Start) {
                var exifIDCode = app1Start + 4;
                var tiffOffset = app1Start + 10;
                if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
                    var endianness = dataView.getUint16(tiffOffset);
                    littleEndian = endianness === 0x4949;
                    if (littleEndian || endianness === 0x4D4D) {
                        if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
                            var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);
                            if (firstIFDOffset >= 0x00000008) ifdStart = tiffOffset + firstIFDOffset;
                        }
                    }
                }
            }
            if (ifdStart) {
                var _length = dataView.getUint16(ifdStart, littleEndian);
                var _offset;
                var i;
                for(i = 0; i < _length; i += 1){
                    _offset = ifdStart + i * 12 + 2;
                    if (dataView.getUint16(_offset, littleEndian) === 0x0112) {
                        // 8 is the offset of the current tag's value
                        _offset += 8; // Get the original orientation value
                        orientation = dataView.getUint16(_offset, littleEndian); // Override the orientation with its default value
                        dataView.setUint16(_offset, 1, littleEndian);
                        break;
                    }
                }
            }
        } catch (error) {
            orientation = 1;
        }
        return orientation;
    }
    /**
   * Parse Exif Orientation value.
   * @param {number} orientation - The orientation to parse.
   * @returns {Object} The parsed result.
   */ function parseOrientation(orientation) {
        var rotate = 0;
        var scaleX = 1;
        var scaleY = 1;
        switch(orientation){
            // Flip horizontal
            case 2:
                scaleX = -1;
                break;
            // Rotate left 180°
            case 3:
                rotate = -180;
                break;
            // Flip vertical
            case 4:
                scaleY = -1;
                break;
            // Flip vertical and rotate right 90°
            case 5:
                rotate = 90;
                scaleY = -1;
                break;
            // Rotate right 90°
            case 6:
                rotate = 90;
                break;
            // Flip horizontal and rotate right 90°
            case 7:
                rotate = 90;
                scaleX = -1;
                break;
            // Rotate left 90°
            case 8:
                rotate = -90;
                break;
        }
        return {
            rotate: rotate,
            scaleX: scaleX,
            scaleY: scaleY
        };
    }
    var render = {
        render: function render() {
            this.initContainer();
            this.initCanvas();
            this.initCropBox();
            this.renderCanvas();
            if (this.cropped) this.renderCropBox();
        },
        initContainer: function initContainer() {
            var element = this.element, options = this.options, container = this.container, cropper = this.cropper;
            var minWidth = Number(options.minContainerWidth);
            var minHeight = Number(options.minContainerHeight);
            addClass(cropper, CLASS_HIDDEN);
            removeClass(element, CLASS_HIDDEN);
            var containerData = {
                width: Math.max(container.offsetWidth, minWidth >= 0 ? minWidth : MIN_CONTAINER_WIDTH),
                height: Math.max(container.offsetHeight, minHeight >= 0 ? minHeight : MIN_CONTAINER_HEIGHT)
            };
            this.containerData = containerData;
            setStyle(cropper, {
                width: containerData.width,
                height: containerData.height
            });
            addClass(element, CLASS_HIDDEN);
            removeClass(cropper, CLASS_HIDDEN);
        },
        // Canvas (image wrapper)
        initCanvas: function initCanvas() {
            var containerData = this.containerData, imageData = this.imageData;
            var viewMode = this.options.viewMode;
            var rotated = Math.abs(imageData.rotate) % 180 === 90;
            var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
            var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
            var aspectRatio = naturalWidth / naturalHeight;
            var canvasWidth = containerData.width;
            var canvasHeight = containerData.height;
            if (containerData.height * aspectRatio > containerData.width) {
                if (viewMode === 3) canvasWidth = containerData.height * aspectRatio;
                else canvasHeight = containerData.width / aspectRatio;
            } else if (viewMode === 3) canvasHeight = containerData.width / aspectRatio;
            else canvasWidth = containerData.height * aspectRatio;
            var canvasData = {
                aspectRatio: aspectRatio,
                naturalWidth: naturalWidth,
                naturalHeight: naturalHeight,
                width: canvasWidth,
                height: canvasHeight
            };
            this.canvasData = canvasData;
            this.limited = viewMode === 1 || viewMode === 2;
            this.limitCanvas(true, true);
            canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
            canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
            canvasData.left = (containerData.width - canvasData.width) / 2;
            canvasData.top = (containerData.height - canvasData.height) / 2;
            canvasData.oldLeft = canvasData.left;
            canvasData.oldTop = canvasData.top;
            this.initialCanvasData = assign({}, canvasData);
        },
        limitCanvas: function limitCanvas(sizeLimited, positionLimited) {
            var options = this.options, containerData = this.containerData, canvasData = this.canvasData, cropBoxData = this.cropBoxData;
            var viewMode = options.viewMode;
            var aspectRatio = canvasData.aspectRatio;
            var cropped = this.cropped && cropBoxData;
            if (sizeLimited) {
                var minCanvasWidth = Number(options.minCanvasWidth) || 0;
                var minCanvasHeight = Number(options.minCanvasHeight) || 0;
                if (viewMode > 1) {
                    minCanvasWidth = Math.max(minCanvasWidth, containerData.width);
                    minCanvasHeight = Math.max(minCanvasHeight, containerData.height);
                    if (viewMode === 3) {
                        if (minCanvasHeight * aspectRatio > minCanvasWidth) minCanvasWidth = minCanvasHeight * aspectRatio;
                        else minCanvasHeight = minCanvasWidth / aspectRatio;
                    }
                } else if (viewMode > 0) {
                    if (minCanvasWidth) minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBoxData.width : 0);
                    else if (minCanvasHeight) minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBoxData.height : 0);
                    else if (cropped) {
                        minCanvasWidth = cropBoxData.width;
                        minCanvasHeight = cropBoxData.height;
                        if (minCanvasHeight * aspectRatio > minCanvasWidth) minCanvasWidth = minCanvasHeight * aspectRatio;
                        else minCanvasHeight = minCanvasWidth / aspectRatio;
                    }
                }
                var _getAdjustedSizes = getAdjustedSizes({
                    aspectRatio: aspectRatio,
                    width: minCanvasWidth,
                    height: minCanvasHeight
                });
                minCanvasWidth = _getAdjustedSizes.width;
                minCanvasHeight = _getAdjustedSizes.height;
                canvasData.minWidth = minCanvasWidth;
                canvasData.minHeight = minCanvasHeight;
                canvasData.maxWidth = Infinity;
                canvasData.maxHeight = Infinity;
            }
            if (positionLimited) {
                if (viewMode > (cropped ? 0 : 1)) {
                    var newCanvasLeft = containerData.width - canvasData.width;
                    var newCanvasTop = containerData.height - canvasData.height;
                    canvasData.minLeft = Math.min(0, newCanvasLeft);
                    canvasData.minTop = Math.min(0, newCanvasTop);
                    canvasData.maxLeft = Math.max(0, newCanvasLeft);
                    canvasData.maxTop = Math.max(0, newCanvasTop);
                    if (cropped && this.limited) {
                        canvasData.minLeft = Math.min(cropBoxData.left, cropBoxData.left + (cropBoxData.width - canvasData.width));
                        canvasData.minTop = Math.min(cropBoxData.top, cropBoxData.top + (cropBoxData.height - canvasData.height));
                        canvasData.maxLeft = cropBoxData.left;
                        canvasData.maxTop = cropBoxData.top;
                        if (viewMode === 2) {
                            if (canvasData.width >= containerData.width) {
                                canvasData.minLeft = Math.min(0, newCanvasLeft);
                                canvasData.maxLeft = Math.max(0, newCanvasLeft);
                            }
                            if (canvasData.height >= containerData.height) {
                                canvasData.minTop = Math.min(0, newCanvasTop);
                                canvasData.maxTop = Math.max(0, newCanvasTop);
                            }
                        }
                    }
                } else {
                    canvasData.minLeft = -canvasData.width;
                    canvasData.minTop = -canvasData.height;
                    canvasData.maxLeft = containerData.width;
                    canvasData.maxTop = containerData.height;
                }
            }
        },
        renderCanvas: function renderCanvas(changed, transformed) {
            var canvasData = this.canvasData, imageData = this.imageData;
            if (transformed) {
                var _getRotatedSizes = getRotatedSizes({
                    width: imageData.naturalWidth * Math.abs(imageData.scaleX || 1),
                    height: imageData.naturalHeight * Math.abs(imageData.scaleY || 1),
                    degree: imageData.rotate || 0
                }), naturalWidth = _getRotatedSizes.width, naturalHeight = _getRotatedSizes.height;
                var width = canvasData.width * (naturalWidth / canvasData.naturalWidth);
                var height = canvasData.height * (naturalHeight / canvasData.naturalHeight);
                canvasData.left -= (width - canvasData.width) / 2;
                canvasData.top -= (height - canvasData.height) / 2;
                canvasData.width = width;
                canvasData.height = height;
                canvasData.aspectRatio = naturalWidth / naturalHeight;
                canvasData.naturalWidth = naturalWidth;
                canvasData.naturalHeight = naturalHeight;
                this.limitCanvas(true, false);
            }
            if (canvasData.width > canvasData.maxWidth || canvasData.width < canvasData.minWidth) canvasData.left = canvasData.oldLeft;
            if (canvasData.height > canvasData.maxHeight || canvasData.height < canvasData.minHeight) canvasData.top = canvasData.oldTop;
            canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
            canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
            this.limitCanvas(false, true);
            canvasData.left = Math.min(Math.max(canvasData.left, canvasData.minLeft), canvasData.maxLeft);
            canvasData.top = Math.min(Math.max(canvasData.top, canvasData.minTop), canvasData.maxTop);
            canvasData.oldLeft = canvasData.left;
            canvasData.oldTop = canvasData.top;
            setStyle(this.canvas, assign({
                width: canvasData.width,
                height: canvasData.height
            }, getTransforms({
                translateX: canvasData.left,
                translateY: canvasData.top
            })));
            this.renderImage(changed);
            if (this.cropped && this.limited) this.limitCropBox(true, true);
        },
        renderImage: function renderImage(changed) {
            var canvasData = this.canvasData, imageData = this.imageData;
            var width = imageData.naturalWidth * (canvasData.width / canvasData.naturalWidth);
            var height = imageData.naturalHeight * (canvasData.height / canvasData.naturalHeight);
            assign(imageData, {
                width: width,
                height: height,
                left: (canvasData.width - width) / 2,
                top: (canvasData.height - height) / 2
            });
            setStyle(this.image, assign({
                width: imageData.width,
                height: imageData.height
            }, getTransforms(assign({
                translateX: imageData.left,
                translateY: imageData.top
            }, imageData))));
            if (changed) this.output();
        },
        initCropBox: function initCropBox() {
            var options = this.options, canvasData = this.canvasData;
            var aspectRatio = options.aspectRatio || options.initialAspectRatio;
            var autoCropArea = Number(options.autoCropArea) || 0.8;
            var cropBoxData = {
                width: canvasData.width,
                height: canvasData.height
            };
            if (aspectRatio) {
                if (canvasData.height * aspectRatio > canvasData.width) cropBoxData.height = cropBoxData.width / aspectRatio;
                else cropBoxData.width = cropBoxData.height * aspectRatio;
            }
            this.cropBoxData = cropBoxData;
            this.limitCropBox(true, true); // Initialize auto crop area
            cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
            cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight); // The width/height of auto crop area must large than "minWidth/Height"
            cropBoxData.width = Math.max(cropBoxData.minWidth, cropBoxData.width * autoCropArea);
            cropBoxData.height = Math.max(cropBoxData.minHeight, cropBoxData.height * autoCropArea);
            cropBoxData.left = canvasData.left + (canvasData.width - cropBoxData.width) / 2;
            cropBoxData.top = canvasData.top + (canvasData.height - cropBoxData.height) / 2;
            cropBoxData.oldLeft = cropBoxData.left;
            cropBoxData.oldTop = cropBoxData.top;
            this.initialCropBoxData = assign({}, cropBoxData);
        },
        limitCropBox: function limitCropBox(sizeLimited, positionLimited) {
            var options = this.options, containerData = this.containerData, canvasData = this.canvasData, cropBoxData = this.cropBoxData, limited = this.limited;
            var aspectRatio = options.aspectRatio;
            if (sizeLimited) {
                var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
                var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
                var maxCropBoxWidth = limited ? Math.min(containerData.width, canvasData.width, canvasData.width + canvasData.left, containerData.width - canvasData.left) : containerData.width;
                var maxCropBoxHeight = limited ? Math.min(containerData.height, canvasData.height, canvasData.height + canvasData.top, containerData.height - canvasData.top) : containerData.height; // The min/maxCropBoxWidth/Height must be less than container's width/height
                minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
                minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);
                if (aspectRatio) {
                    if (minCropBoxWidth && minCropBoxHeight) {
                        if (minCropBoxHeight * aspectRatio > minCropBoxWidth) minCropBoxHeight = minCropBoxWidth / aspectRatio;
                        else minCropBoxWidth = minCropBoxHeight * aspectRatio;
                    } else if (minCropBoxWidth) minCropBoxHeight = minCropBoxWidth / aspectRatio;
                    else if (minCropBoxHeight) minCropBoxWidth = minCropBoxHeight * aspectRatio;
                    if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
                    else maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
                } // The minWidth/Height must be less than maxWidth/Height
                cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
                cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
                cropBoxData.maxWidth = maxCropBoxWidth;
                cropBoxData.maxHeight = maxCropBoxHeight;
            }
            if (positionLimited) {
                if (limited) {
                    cropBoxData.minLeft = Math.max(0, canvasData.left);
                    cropBoxData.minTop = Math.max(0, canvasData.top);
                    cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
                    cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
                } else {
                    cropBoxData.minLeft = 0;
                    cropBoxData.minTop = 0;
                    cropBoxData.maxLeft = containerData.width - cropBoxData.width;
                    cropBoxData.maxTop = containerData.height - cropBoxData.height;
                }
            }
        },
        renderCropBox: function renderCropBox() {
            var options = this.options, containerData = this.containerData, cropBoxData = this.cropBoxData;
            if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) cropBoxData.left = cropBoxData.oldLeft;
            if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) cropBoxData.top = cropBoxData.oldTop;
            cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
            cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
            this.limitCropBox(false, true);
            cropBoxData.left = Math.min(Math.max(cropBoxData.left, cropBoxData.minLeft), cropBoxData.maxLeft);
            cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
            cropBoxData.oldLeft = cropBoxData.left;
            cropBoxData.oldTop = cropBoxData.top;
            if (options.movable && options.cropBoxMovable) // Turn to move the canvas when the crop box is equal to the container
            setData(this.face, DATA_ACTION, cropBoxData.width >= containerData.width && cropBoxData.height >= containerData.height ? ACTION_MOVE : ACTION_ALL);
            setStyle(this.cropBox, assign({
                width: cropBoxData.width,
                height: cropBoxData.height
            }, getTransforms({
                translateX: cropBoxData.left,
                translateY: cropBoxData.top
            })));
            if (this.cropped && this.limited) this.limitCanvas(true, true);
            if (!this.disabled) this.output();
        },
        output: function output() {
            this.preview();
            dispatchEvent(this.element, EVENT_CROP, this.getData());
        }
    };
    var preview1 = {
        initPreview: function initPreview() {
            var element = this.element, crossOrigin = this.crossOrigin;
            var preview = this.options.preview;
            var url = crossOrigin ? this.crossOriginUrl : this.url;
            var alt = element.alt || 'The image to preview';
            var image = document.createElement('img');
            if (crossOrigin) image.crossOrigin = crossOrigin;
            image.src = url;
            image.alt = alt;
            this.viewBox.appendChild(image);
            this.viewBoxImage = image;
            if (!preview) return;
            var previews = preview;
            if (typeof preview === 'string') previews = element.ownerDocument.querySelectorAll(preview);
            else if (preview.querySelector) previews = [
                preview
            ];
            this.previews = previews;
            forEach(previews, function(el) {
                var img = document.createElement('img'); // Save the original size for recover
                setData(el, DATA_PREVIEW, {
                    width: el.offsetWidth,
                    height: el.offsetHeight,
                    html: el.innerHTML
                });
                if (crossOrigin) img.crossOrigin = crossOrigin;
                img.src = url;
                img.alt = alt;
                /**
         * Override img element styles
         * Add `display:block` to avoid margin top issue
         * Add `height:auto` to override `height` attribute on IE8
         * (Occur only when margin-top <= -height)
         */ img.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"';
                el.innerHTML = '';
                el.appendChild(img);
            });
        },
        resetPreview: function resetPreview() {
            forEach(this.previews, function(element) {
                var data = getData(element, DATA_PREVIEW);
                setStyle(element, {
                    width: data.width,
                    height: data.height
                });
                element.innerHTML = data.html;
                removeData(element, DATA_PREVIEW);
            });
        },
        preview: function preview() {
            var imageData = this.imageData, canvasData = this.canvasData, cropBoxData = this.cropBoxData;
            var cropBoxWidth = cropBoxData.width, cropBoxHeight = cropBoxData.height;
            var width = imageData.width, height = imageData.height;
            var left = cropBoxData.left - canvasData.left - imageData.left;
            var top = cropBoxData.top - canvasData.top - imageData.top;
            if (!this.cropped || this.disabled) return;
            setStyle(this.viewBoxImage, assign({
                width: width,
                height: height
            }, getTransforms(assign({
                translateX: -left,
                translateY: -top
            }, imageData))));
            forEach(this.previews, function(element) {
                var data = getData(element, DATA_PREVIEW);
                var originalWidth = data.width;
                var originalHeight = data.height;
                var newWidth = originalWidth;
                var newHeight = originalHeight;
                var ratio = 1;
                if (cropBoxWidth) {
                    ratio = originalWidth / cropBoxWidth;
                    newHeight = cropBoxHeight * ratio;
                }
                if (cropBoxHeight && newHeight > originalHeight) {
                    ratio = originalHeight / cropBoxHeight;
                    newWidth = cropBoxWidth * ratio;
                    newHeight = originalHeight;
                }
                setStyle(element, {
                    width: newWidth,
                    height: newHeight
                });
                setStyle(element.getElementsByTagName('img')[0], assign({
                    width: width * ratio,
                    height: height * ratio
                }, getTransforms(assign({
                    translateX: -left * ratio,
                    translateY: -top * ratio
                }, imageData))));
            });
        }
    };
    var events = {
        bind: function bind() {
            var element = this.element, options = this.options, cropper = this.cropper;
            if (isFunction(options.cropstart)) addListener(element, EVENT_CROP_START, options.cropstart);
            if (isFunction(options.cropmove)) addListener(element, EVENT_CROP_MOVE, options.cropmove);
            if (isFunction(options.cropend)) addListener(element, EVENT_CROP_END, options.cropend);
            if (isFunction(options.crop)) addListener(element, EVENT_CROP, options.crop);
            if (isFunction(options.zoom)) addListener(element, EVENT_ZOOM, options.zoom);
            addListener(cropper, EVENT_POINTER_DOWN, this.onCropStart = this.cropStart.bind(this));
            if (options.zoomable && options.zoomOnWheel) addListener(cropper, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
                passive: false,
                capture: true
            });
            if (options.toggleDragModeOnDblclick) addListener(cropper, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
            addListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove = this.cropMove.bind(this));
            addListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd = this.cropEnd.bind(this));
            if (options.responsive) addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
        },
        unbind: function unbind() {
            var element = this.element, options = this.options, cropper = this.cropper;
            if (isFunction(options.cropstart)) removeListener(element, EVENT_CROP_START, options.cropstart);
            if (isFunction(options.cropmove)) removeListener(element, EVENT_CROP_MOVE, options.cropmove);
            if (isFunction(options.cropend)) removeListener(element, EVENT_CROP_END, options.cropend);
            if (isFunction(options.crop)) removeListener(element, EVENT_CROP, options.crop);
            if (isFunction(options.zoom)) removeListener(element, EVENT_ZOOM, options.zoom);
            removeListener(cropper, EVENT_POINTER_DOWN, this.onCropStart);
            if (options.zoomable && options.zoomOnWheel) removeListener(cropper, EVENT_WHEEL, this.onWheel, {
                passive: false,
                capture: true
            });
            if (options.toggleDragModeOnDblclick) removeListener(cropper, EVENT_DBLCLICK, this.onDblclick);
            removeListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove);
            removeListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd);
            if (options.responsive) removeListener(window, EVENT_RESIZE, this.onResize);
        }
    };
    var handlers = {
        resize: function resize() {
            if (this.disabled) return;
            var options = this.options, container = this.container, containerData = this.containerData;
            var ratioX = container.offsetWidth / containerData.width;
            var ratioY = container.offsetHeight / containerData.height;
            var ratio = Math.abs(ratioX - 1) > Math.abs(ratioY - 1) ? ratioX : ratioY; // Resize when width changed or height changed
            if (ratio !== 1) {
                var canvasData;
                var cropBoxData;
                if (options.restore) {
                    canvasData = this.getCanvasData();
                    cropBoxData = this.getCropBoxData();
                }
                this.render();
                if (options.restore) {
                    this.setCanvasData(forEach(canvasData, function(n, i) {
                        canvasData[i] = n * ratio;
                    }));
                    this.setCropBoxData(forEach(cropBoxData, function(n, i) {
                        cropBoxData[i] = n * ratio;
                    }));
                }
            }
        },
        dblclick: function dblclick() {
            if (this.disabled || this.options.dragMode === DRAG_MODE_NONE) return;
            this.setDragMode(hasClass(this.dragBox, CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP);
        },
        wheel: function wheel(event) {
            var _this = this;
            var ratio = Number(this.options.wheelZoomRatio) || 0.1;
            var delta = 1;
            if (this.disabled) return;
            event.preventDefault(); // Limit wheel speed to prevent zoom too fast (#21)
            if (this.wheeling) return;
            this.wheeling = true;
            setTimeout(function() {
                _this.wheeling = false;
            }, 50);
            if (event.deltaY) delta = event.deltaY > 0 ? 1 : -1;
            else if (event.wheelDelta) delta = -event.wheelDelta / 120;
            else if (event.detail) delta = event.detail > 0 ? 1 : -1;
            this.zoom(-delta * ratio, event);
        },
        cropStart: function cropStart(event) {
            var buttons = event.buttons, button = event.button;
            if (this.disabled // Handle mouse event and pointer event and ignore touch event
             || (event.type === 'mousedown' || event.type === 'pointerdown' && event.pointerType === 'mouse') && (isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0 // Open context menu
             || event.ctrlKey)) return;
            var options = this.options, pointers = this.pointers;
            var action;
            if (event.changedTouches) // Handle touch event
            forEach(event.changedTouches, function(touch) {
                pointers[touch.identifier] = getPointer(touch);
            });
            else // Handle mouse event and pointer event
            pointers[event.pointerId || 0] = getPointer(event);
            if (Object.keys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) action = ACTION_ZOOM;
            else action = getData(event.target, DATA_ACTION);
            if (!REGEXP_ACTIONS.test(action)) return;
            if (dispatchEvent(this.element, EVENT_CROP_START, {
                originalEvent: event,
                action: action
            }) === false) return;
             // This line is required for preventing page zooming in iOS browsers
            event.preventDefault();
            this.action = action;
            this.cropping = false;
            if (action === ACTION_CROP) {
                this.cropping = true;
                addClass(this.dragBox, CLASS_MODAL);
            }
        },
        cropMove: function cropMove(event) {
            var action = this.action;
            if (this.disabled || !action) return;
            var pointers = this.pointers;
            event.preventDefault();
            if (dispatchEvent(this.element, EVENT_CROP_MOVE, {
                originalEvent: event,
                action: action
            }) === false) return;
            if (event.changedTouches) forEach(event.changedTouches, function(touch) {
                // The first parameter should not be undefined (#432)
                assign(pointers[touch.identifier] || {}, getPointer(touch, true));
            });
            else assign(pointers[event.pointerId || 0] || {}, getPointer(event, true));
            this.change(event);
        },
        cropEnd: function cropEnd(event) {
            if (this.disabled) return;
            var action = this.action, pointers = this.pointers;
            if (event.changedTouches) forEach(event.changedTouches, function(touch) {
                delete pointers[touch.identifier];
            });
            else delete pointers[event.pointerId || 0];
            if (!action) return;
            event.preventDefault();
            if (!Object.keys(pointers).length) this.action = '';
            if (this.cropping) {
                this.cropping = false;
                toggleClass(this.dragBox, CLASS_MODAL, this.cropped && this.options.modal);
            }
            dispatchEvent(this.element, EVENT_CROP_END, {
                originalEvent: event,
                action: action
            });
        }
    };
    var change = {
        change: function change(event) {
            var options = this.options, canvasData = this.canvasData, containerData = this.containerData, cropBoxData = this.cropBoxData, pointers = this.pointers;
            var action = this.action;
            var aspectRatio = options.aspectRatio;
            var left = cropBoxData.left, top = cropBoxData.top, width = cropBoxData.width, height = cropBoxData.height;
            var right = left + width;
            var bottom = top + height;
            var minLeft = 0;
            var minTop = 0;
            var maxWidth = containerData.width;
            var maxHeight = containerData.height;
            var renderable = true;
            var offset; // Locking aspect ratio in "free mode" by holding shift key
            if (!aspectRatio && event.shiftKey) aspectRatio = width && height ? width / height : 1;
            if (this.limited) {
                minLeft = cropBoxData.minLeft;
                minTop = cropBoxData.minTop;
                maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
                maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
            }
            var pointer = pointers[Object.keys(pointers)[0]];
            var range = {
                x: pointer.endX - pointer.startX,
                y: pointer.endY - pointer.startY
            };
            var check = function check(side) {
                switch(side){
                    case ACTION_EAST:
                        if (right + range.x > maxWidth) range.x = maxWidth - right;
                        break;
                    case ACTION_WEST:
                        if (left + range.x < minLeft) range.x = minLeft - left;
                        break;
                    case ACTION_NORTH:
                        if (top + range.y < minTop) range.y = minTop - top;
                        break;
                    case ACTION_SOUTH:
                        if (bottom + range.y > maxHeight) range.y = maxHeight - bottom;
                        break;
                }
            };
            switch(action){
                // Move crop box
                case ACTION_ALL:
                    left += range.x;
                    top += range.y;
                    break;
                // Resize crop box
                case ACTION_EAST:
                    if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
                        renderable = false;
                        break;
                    }
                    check(ACTION_EAST);
                    width += range.x;
                    if (width < 0) {
                        action = ACTION_WEST;
                        width = -width;
                        left -= width;
                    }
                    if (aspectRatio) {
                        height = width / aspectRatio;
                        top += (cropBoxData.height - height) / 2;
                    }
                    break;
                case ACTION_NORTH:
                    if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
                        renderable = false;
                        break;
                    }
                    check(ACTION_NORTH);
                    height -= range.y;
                    top += range.y;
                    if (height < 0) {
                        action = ACTION_SOUTH;
                        height = -height;
                        top -= height;
                    }
                    if (aspectRatio) {
                        width = height * aspectRatio;
                        left += (cropBoxData.width - width) / 2;
                    }
                    break;
                case ACTION_WEST:
                    if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
                        renderable = false;
                        break;
                    }
                    check(ACTION_WEST);
                    width -= range.x;
                    left += range.x;
                    if (width < 0) {
                        action = ACTION_EAST;
                        width = -width;
                        left -= width;
                    }
                    if (aspectRatio) {
                        height = width / aspectRatio;
                        top += (cropBoxData.height - height) / 2;
                    }
                    break;
                case ACTION_SOUTH:
                    if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
                        renderable = false;
                        break;
                    }
                    check(ACTION_SOUTH);
                    height += range.y;
                    if (height < 0) {
                        action = ACTION_NORTH;
                        height = -height;
                        top -= height;
                    }
                    if (aspectRatio) {
                        width = height * aspectRatio;
                        left += (cropBoxData.width - width) / 2;
                    }
                    break;
                case ACTION_NORTH_EAST:
                    if (aspectRatio) {
                        if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
                            renderable = false;
                            break;
                        }
                        check(ACTION_NORTH);
                        height -= range.y;
                        top += range.y;
                        width = height * aspectRatio;
                    } else {
                        check(ACTION_NORTH);
                        check(ACTION_EAST);
                        if (range.x >= 0) {
                            if (right < maxWidth) width += range.x;
                            else if (range.y <= 0 && top <= minTop) renderable = false;
                        } else width += range.x;
                        if (range.y <= 0) {
                            if (top > minTop) {
                                height -= range.y;
                                top += range.y;
                            }
                        } else {
                            height -= range.y;
                            top += range.y;
                        }
                    }
                    if (width < 0 && height < 0) {
                        action = ACTION_SOUTH_WEST;
                        height = -height;
                        width = -width;
                        top -= height;
                        left -= width;
                    } else if (width < 0) {
                        action = ACTION_NORTH_WEST;
                        width = -width;
                        left -= width;
                    } else if (height < 0) {
                        action = ACTION_SOUTH_EAST;
                        height = -height;
                        top -= height;
                    }
                    break;
                case ACTION_NORTH_WEST:
                    if (aspectRatio) {
                        if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
                            renderable = false;
                            break;
                        }
                        check(ACTION_NORTH);
                        height -= range.y;
                        top += range.y;
                        width = height * aspectRatio;
                        left += cropBoxData.width - width;
                    } else {
                        check(ACTION_NORTH);
                        check(ACTION_WEST);
                        if (range.x <= 0) {
                            if (left > minLeft) {
                                width -= range.x;
                                left += range.x;
                            } else if (range.y <= 0 && top <= minTop) renderable = false;
                        } else {
                            width -= range.x;
                            left += range.x;
                        }
                        if (range.y <= 0) {
                            if (top > minTop) {
                                height -= range.y;
                                top += range.y;
                            }
                        } else {
                            height -= range.y;
                            top += range.y;
                        }
                    }
                    if (width < 0 && height < 0) {
                        action = ACTION_SOUTH_EAST;
                        height = -height;
                        width = -width;
                        top -= height;
                        left -= width;
                    } else if (width < 0) {
                        action = ACTION_NORTH_EAST;
                        width = -width;
                        left -= width;
                    } else if (height < 0) {
                        action = ACTION_SOUTH_WEST;
                        height = -height;
                        top -= height;
                    }
                    break;
                case ACTION_SOUTH_WEST:
                    if (aspectRatio) {
                        if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
                            renderable = false;
                            break;
                        }
                        check(ACTION_WEST);
                        width -= range.x;
                        left += range.x;
                        height = width / aspectRatio;
                    } else {
                        check(ACTION_SOUTH);
                        check(ACTION_WEST);
                        if (range.x <= 0) {
                            if (left > minLeft) {
                                width -= range.x;
                                left += range.x;
                            } else if (range.y >= 0 && bottom >= maxHeight) renderable = false;
                        } else {
                            width -= range.x;
                            left += range.x;
                        }
                        if (range.y >= 0) {
                            if (bottom < maxHeight) height += range.y;
                        } else height += range.y;
                    }
                    if (width < 0 && height < 0) {
                        action = ACTION_NORTH_EAST;
                        height = -height;
                        width = -width;
                        top -= height;
                        left -= width;
                    } else if (width < 0) {
                        action = ACTION_SOUTH_EAST;
                        width = -width;
                        left -= width;
                    } else if (height < 0) {
                        action = ACTION_NORTH_WEST;
                        height = -height;
                        top -= height;
                    }
                    break;
                case ACTION_SOUTH_EAST:
                    if (aspectRatio) {
                        if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
                            renderable = false;
                            break;
                        }
                        check(ACTION_EAST);
                        width += range.x;
                        height = width / aspectRatio;
                    } else {
                        check(ACTION_SOUTH);
                        check(ACTION_EAST);
                        if (range.x >= 0) {
                            if (right < maxWidth) width += range.x;
                            else if (range.y >= 0 && bottom >= maxHeight) renderable = false;
                        } else width += range.x;
                        if (range.y >= 0) {
                            if (bottom < maxHeight) height += range.y;
                        } else height += range.y;
                    }
                    if (width < 0 && height < 0) {
                        action = ACTION_NORTH_WEST;
                        height = -height;
                        width = -width;
                        top -= height;
                        left -= width;
                    } else if (width < 0) {
                        action = ACTION_SOUTH_WEST;
                        width = -width;
                        left -= width;
                    } else if (height < 0) {
                        action = ACTION_NORTH_EAST;
                        height = -height;
                        top -= height;
                    }
                    break;
                // Move canvas
                case ACTION_MOVE:
                    this.move(range.x, range.y);
                    renderable = false;
                    break;
                // Zoom canvas
                case ACTION_ZOOM:
                    this.zoom(getMaxZoomRatio(pointers), event);
                    renderable = false;
                    break;
                // Create crop box
                case ACTION_CROP:
                    if (!range.x || !range.y) {
                        renderable = false;
                        break;
                    }
                    offset = getOffset(this.cropper);
                    left = pointer.startX - offset.left;
                    top = pointer.startY - offset.top;
                    width = cropBoxData.minWidth;
                    height = cropBoxData.minHeight;
                    if (range.x > 0) action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
                    else if (range.x < 0) {
                        left -= width;
                        action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
                    }
                    if (range.y < 0) top -= height;
                     // Show the crop box if is hidden
                    if (!this.cropped) {
                        removeClass(this.cropBox, CLASS_HIDDEN);
                        this.cropped = true;
                        if (this.limited) this.limitCropBox(true, true);
                    }
                    break;
            }
            if (renderable) {
                cropBoxData.width = width;
                cropBoxData.height = height;
                cropBoxData.left = left;
                cropBoxData.top = top;
                this.action = action;
                this.renderCropBox();
            } // Override
            forEach(pointers, function(p) {
                p.startX = p.endX;
                p.startY = p.endY;
            });
        }
    };
    var methods = {
        // Show the crop box manually
        crop: function crop() {
            if (this.ready && !this.cropped && !this.disabled) {
                this.cropped = true;
                this.limitCropBox(true, true);
                if (this.options.modal) addClass(this.dragBox, CLASS_MODAL);
                removeClass(this.cropBox, CLASS_HIDDEN);
                this.setCropBoxData(this.initialCropBoxData);
            }
            return this;
        },
        // Reset the image and crop box to their initial states
        reset: function reset() {
            if (this.ready && !this.disabled) {
                this.imageData = assign({}, this.initialImageData);
                this.canvasData = assign({}, this.initialCanvasData);
                this.cropBoxData = assign({}, this.initialCropBoxData);
                this.renderCanvas();
                if (this.cropped) this.renderCropBox();
            }
            return this;
        },
        // Clear the crop box
        clear: function clear() {
            if (this.cropped && !this.disabled) {
                assign(this.cropBoxData, {
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0
                });
                this.cropped = false;
                this.renderCropBox();
                this.limitCanvas(true, true); // Render canvas after crop box rendered
                this.renderCanvas();
                removeClass(this.dragBox, CLASS_MODAL);
                addClass(this.cropBox, CLASS_HIDDEN);
            }
            return this;
        },
        /**
     * Replace the image's src and rebuild the cropper
     * @param {string} url - The new URL.
     * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
     * @returns {Cropper} this
     */ replace: function replace(url) {
            var hasSameSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            if (!this.disabled && url) {
                if (this.isImg) this.element.src = url;
                if (hasSameSize) {
                    this.url = url;
                    this.image.src = url;
                    if (this.ready) {
                        this.viewBoxImage.src = url;
                        forEach(this.previews, function(element) {
                            element.getElementsByTagName('img')[0].src = url;
                        });
                    }
                } else {
                    if (this.isImg) this.replaced = true;
                    this.options.data = null;
                    this.uncreate();
                    this.load(url);
                }
            }
            return this;
        },
        // Enable (unfreeze) the cropper
        enable: function enable() {
            if (this.ready && this.disabled) {
                this.disabled = false;
                removeClass(this.cropper, CLASS_DISABLED);
            }
            return this;
        },
        // Disable (freeze) the cropper
        disable: function disable() {
            if (this.ready && !this.disabled) {
                this.disabled = true;
                addClass(this.cropper, CLASS_DISABLED);
            }
            return this;
        },
        /**
     * Destroy the cropper and remove the instance from the image
     * @returns {Cropper} this
     */ destroy: function destroy() {
            var element = this.element;
            if (!element[NAMESPACE]) return this;
            element[NAMESPACE] = undefined;
            if (this.isImg && this.replaced) element.src = this.originalUrl;
            this.uncreate();
            return this;
        },
        /**
     * Move the canvas with relative offsets
     * @param {number} offsetX - The relative offset distance on the x-axis.
     * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
     * @returns {Cropper} this
     */ move: function move(offsetX) {
            var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : offsetX;
            var _this$canvasData = this.canvasData, left = _this$canvasData.left, top = _this$canvasData.top;
            return this.moveTo(isUndefined(offsetX) ? offsetX : left + Number(offsetX), isUndefined(offsetY) ? offsetY : top + Number(offsetY));
        },
        /**
     * Move the canvas to an absolute point
     * @param {number} x - The x-axis coordinate.
     * @param {number} [y=x] - The y-axis coordinate.
     * @returns {Cropper} this
     */ moveTo: function moveTo(x) {
            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
            var canvasData = this.canvasData;
            var changed = false;
            x = Number(x);
            y = Number(y);
            if (this.ready && !this.disabled && this.options.movable) {
                if (isNumber(x)) {
                    canvasData.left = x;
                    changed = true;
                }
                if (isNumber(y)) {
                    canvasData.top = y;
                    changed = true;
                }
                if (changed) this.renderCanvas(true);
            }
            return this;
        },
        /**
     * Zoom the canvas with a relative ratio
     * @param {number} ratio - The target ratio.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */ zoom: function zoom(ratio, _originalEvent) {
            var canvasData = this.canvasData;
            ratio = Number(ratio);
            if (ratio < 0) ratio = 1 / (1 - ratio);
            else ratio = 1 + ratio;
            return this.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, null, _originalEvent);
        },
        /**
     * Zoom the canvas to an absolute ratio
     * @param {number} ratio - The target ratio.
     * @param {Object} pivot - The zoom pivot point coordinate.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */ zoomTo: function zoomTo(ratio, pivot, _originalEvent) {
            var options = this.options, canvasData = this.canvasData;
            var width = canvasData.width, height = canvasData.height, naturalWidth = canvasData.naturalWidth, naturalHeight = canvasData.naturalHeight;
            ratio = Number(ratio);
            if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
                var newWidth = naturalWidth * ratio;
                var newHeight = naturalHeight * ratio;
                if (dispatchEvent(this.element, EVENT_ZOOM, {
                    ratio: ratio,
                    oldRatio: width / naturalWidth,
                    originalEvent: _originalEvent
                }) === false) return this;
                if (_originalEvent) {
                    var pointers = this.pointers;
                    var offset = getOffset(this.cropper);
                    var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
                        pageX: _originalEvent.pageX,
                        pageY: _originalEvent.pageY
                    }; // Zoom from the triggering point of the event
                    canvasData.left -= (newWidth - width) * ((center.pageX - offset.left - canvasData.left) / width);
                    canvasData.top -= (newHeight - height) * ((center.pageY - offset.top - canvasData.top) / height);
                } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
                    canvasData.left -= (newWidth - width) * ((pivot.x - canvasData.left) / width);
                    canvasData.top -= (newHeight - height) * ((pivot.y - canvasData.top) / height);
                } else {
                    // Zoom from the center of the canvas
                    canvasData.left -= (newWidth - width) / 2;
                    canvasData.top -= (newHeight - height) / 2;
                }
                canvasData.width = newWidth;
                canvasData.height = newHeight;
                this.renderCanvas(true);
            }
            return this;
        },
        /**
     * Rotate the canvas with a relative degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */ rotate: function rotate(degree) {
            return this.rotateTo((this.imageData.rotate || 0) + Number(degree));
        },
        /**
     * Rotate the canvas to an absolute degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */ rotateTo: function rotateTo(degree) {
            degree = Number(degree);
            if (isNumber(degree) && this.ready && !this.disabled && this.options.rotatable) {
                this.imageData.rotate = degree % 360;
                this.renderCanvas(true, true);
            }
            return this;
        },
        /**
     * Scale the image on the x-axis.
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @returns {Cropper} this
     */ scaleX: function scaleX(_scaleX) {
            var scaleY = this.imageData.scaleY;
            return this.scale(_scaleX, isNumber(scaleY) ? scaleY : 1);
        },
        /**
     * Scale the image on the y-axis.
     * @param {number} scaleY - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */ scaleY: function scaleY(_scaleY) {
            var scaleX = this.imageData.scaleX;
            return this.scale(isNumber(scaleX) ? scaleX : 1, _scaleY);
        },
        /**
     * Scale the image
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */ scale: function scale(scaleX) {
            var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;
            var imageData = this.imageData;
            var transformed = false;
            scaleX = Number(scaleX);
            scaleY = Number(scaleY);
            if (this.ready && !this.disabled && this.options.scalable) {
                if (isNumber(scaleX)) {
                    imageData.scaleX = scaleX;
                    transformed = true;
                }
                if (isNumber(scaleY)) {
                    imageData.scaleY = scaleY;
                    transformed = true;
                }
                if (transformed) this.renderCanvas(true, true);
            }
            return this;
        },
        /**
     * Get the cropped area position and size data (base on the original image)
     * @param {boolean} [rounded=false] - Indicate if round the data values or not.
     * @returns {Object} The result cropped data.
     */ getData: function getData() {
            var rounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var options = this.options, imageData = this.imageData, canvasData = this.canvasData, cropBoxData = this.cropBoxData;
            var data;
            if (this.ready && this.cropped) {
                data = {
                    x: cropBoxData.left - canvasData.left,
                    y: cropBoxData.top - canvasData.top,
                    width: cropBoxData.width,
                    height: cropBoxData.height
                };
                var ratio = imageData.width / imageData.naturalWidth;
                forEach(data, function(n, i) {
                    data[i] = n / ratio;
                });
                if (rounded) {
                    // In case rounding off leads to extra 1px in right or bottom border
                    // we should round the top-left corner and the dimension (#343).
                    var bottom = Math.round(data.y + data.height);
                    var right = Math.round(data.x + data.width);
                    data.x = Math.round(data.x);
                    data.y = Math.round(data.y);
                    data.width = right - data.x;
                    data.height = bottom - data.y;
                }
            } else data = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            };
            if (options.rotatable) data.rotate = imageData.rotate || 0;
            if (options.scalable) {
                data.scaleX = imageData.scaleX || 1;
                data.scaleY = imageData.scaleY || 1;
            }
            return data;
        },
        /**
     * Set the cropped area position and size with new data
     * @param {Object} data - The new data.
     * @returns {Cropper} this
     */ setData: function setData(data) {
            var options = this.options, imageData = this.imageData, canvasData = this.canvasData;
            var cropBoxData = {};
            if (this.ready && !this.disabled && isPlainObject(data)) {
                var transformed = false;
                if (options.rotatable) {
                    if (isNumber(data.rotate) && data.rotate !== imageData.rotate) {
                        imageData.rotate = data.rotate;
                        transformed = true;
                    }
                }
                if (options.scalable) {
                    if (isNumber(data.scaleX) && data.scaleX !== imageData.scaleX) {
                        imageData.scaleX = data.scaleX;
                        transformed = true;
                    }
                    if (isNumber(data.scaleY) && data.scaleY !== imageData.scaleY) {
                        imageData.scaleY = data.scaleY;
                        transformed = true;
                    }
                }
                if (transformed) this.renderCanvas(true, true);
                var ratio = imageData.width / imageData.naturalWidth;
                if (isNumber(data.x)) cropBoxData.left = data.x * ratio + canvasData.left;
                if (isNumber(data.y)) cropBoxData.top = data.y * ratio + canvasData.top;
                if (isNumber(data.width)) cropBoxData.width = data.width * ratio;
                if (isNumber(data.height)) cropBoxData.height = data.height * ratio;
                this.setCropBoxData(cropBoxData);
            }
            return this;
        },
        /**
     * Get the container size data.
     * @returns {Object} The result container data.
     */ getContainerData: function getContainerData() {
            return this.ready ? assign({}, this.containerData) : {};
        },
        /**
     * Get the image position and size data.
     * @returns {Object} The result image data.
     */ getImageData: function getImageData() {
            return this.sized ? assign({}, this.imageData) : {};
        },
        /**
     * Get the canvas position and size data.
     * @returns {Object} The result canvas data.
     */ getCanvasData: function getCanvasData() {
            var canvasData = this.canvasData;
            var data = {};
            if (this.ready) forEach([
                'left',
                'top',
                'width',
                'height',
                'naturalWidth',
                'naturalHeight'
            ], function(n) {
                data[n] = canvasData[n];
            });
            return data;
        },
        /**
     * Set the canvas position and size with new data.
     * @param {Object} data - The new canvas data.
     * @returns {Cropper} this
     */ setCanvasData: function setCanvasData(data) {
            var canvasData = this.canvasData;
            var aspectRatio = canvasData.aspectRatio;
            if (this.ready && !this.disabled && isPlainObject(data)) {
                if (isNumber(data.left)) canvasData.left = data.left;
                if (isNumber(data.top)) canvasData.top = data.top;
                if (isNumber(data.width)) {
                    canvasData.width = data.width;
                    canvasData.height = data.width / aspectRatio;
                } else if (isNumber(data.height)) {
                    canvasData.height = data.height;
                    canvasData.width = data.height * aspectRatio;
                }
                this.renderCanvas(true);
            }
            return this;
        },
        /**
     * Get the crop box position and size data.
     * @returns {Object} The result crop box data.
     */ getCropBoxData: function getCropBoxData() {
            var cropBoxData = this.cropBoxData;
            var data;
            if (this.ready && this.cropped) data = {
                left: cropBoxData.left,
                top: cropBoxData.top,
                width: cropBoxData.width,
                height: cropBoxData.height
            };
            return data || {};
        },
        /**
     * Set the crop box position and size with new data.
     * @param {Object} data - The new crop box data.
     * @returns {Cropper} this
     */ setCropBoxData: function setCropBoxData(data) {
            var cropBoxData = this.cropBoxData;
            var aspectRatio = this.options.aspectRatio;
            var widthChanged;
            var heightChanged;
            if (this.ready && this.cropped && !this.disabled && isPlainObject(data)) {
                if (isNumber(data.left)) cropBoxData.left = data.left;
                if (isNumber(data.top)) cropBoxData.top = data.top;
                if (isNumber(data.width) && data.width !== cropBoxData.width) {
                    widthChanged = true;
                    cropBoxData.width = data.width;
                }
                if (isNumber(data.height) && data.height !== cropBoxData.height) {
                    heightChanged = true;
                    cropBoxData.height = data.height;
                }
                if (aspectRatio) {
                    if (widthChanged) cropBoxData.height = cropBoxData.width / aspectRatio;
                    else if (heightChanged) cropBoxData.width = cropBoxData.height * aspectRatio;
                }
                this.renderCropBox();
            }
            return this;
        },
        /**
     * Get a canvas drawn the cropped image.
     * @param {Object} [options={}] - The config options.
     * @returns {HTMLCanvasElement} - The result canvas.
     */ getCroppedCanvas: function getCroppedCanvas() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            if (!this.ready || !window.HTMLCanvasElement) return null;
            var canvasData = this.canvasData;
            var source = getSourceCanvas(this.image, this.imageData, canvasData, options); // Returns the source canvas if it is not cropped.
            if (!this.cropped) return source;
            var _this$getData = this.getData(), initialX = _this$getData.x, initialY = _this$getData.y, initialWidth = _this$getData.width, initialHeight = _this$getData.height;
            var ratio = source.width / Math.floor(canvasData.naturalWidth);
            if (ratio !== 1) {
                initialX *= ratio;
                initialY *= ratio;
                initialWidth *= ratio;
                initialHeight *= ratio;
            }
            var aspectRatio = initialWidth / initialHeight;
            var maxSizes = getAdjustedSizes({
                aspectRatio: aspectRatio,
                width: options.maxWidth || Infinity,
                height: options.maxHeight || Infinity
            });
            var minSizes = getAdjustedSizes({
                aspectRatio: aspectRatio,
                width: options.minWidth || 0,
                height: options.minHeight || 0
            }, 'cover');
            var _getAdjustedSizes = getAdjustedSizes({
                aspectRatio: aspectRatio,
                width: options.width || (ratio !== 1 ? source.width : initialWidth),
                height: options.height || (ratio !== 1 ? source.height : initialHeight)
            }), width = _getAdjustedSizes.width, height = _getAdjustedSizes.height;
            width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
            height = Math.min(maxSizes.height, Math.max(minSizes.height, height));
            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            canvas.width = normalizeDecimalNumber(width);
            canvas.height = normalizeDecimalNumber(height);
            context.fillStyle = options.fillColor || 'transparent';
            context.fillRect(0, 0, width, height);
            var _options$imageSmoothi = options.imageSmoothingEnabled, imageSmoothingEnabled = _options$imageSmoothi === void 0 ? true : _options$imageSmoothi, imageSmoothingQuality = options.imageSmoothingQuality;
            context.imageSmoothingEnabled = imageSmoothingEnabled;
            if (imageSmoothingQuality) context.imageSmoothingQuality = imageSmoothingQuality;
             // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage
            var sourceWidth = source.width;
            var sourceHeight = source.height; // Source canvas parameters
            var srcX = initialX;
            var srcY = initialY;
            var srcWidth;
            var srcHeight; // Destination canvas parameters
            var dstX;
            var dstY;
            var dstWidth;
            var dstHeight;
            if (srcX <= -initialWidth || srcX > sourceWidth) {
                srcX = 0;
                srcWidth = 0;
                dstX = 0;
                dstWidth = 0;
            } else if (srcX <= 0) {
                dstX = -srcX;
                srcX = 0;
                srcWidth = Math.min(sourceWidth, initialWidth + srcX);
                dstWidth = srcWidth;
            } else if (srcX <= sourceWidth) {
                dstX = 0;
                srcWidth = Math.min(initialWidth, sourceWidth - srcX);
                dstWidth = srcWidth;
            }
            if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
                srcY = 0;
                srcHeight = 0;
                dstY = 0;
                dstHeight = 0;
            } else if (srcY <= 0) {
                dstY = -srcY;
                srcY = 0;
                srcHeight = Math.min(sourceHeight, initialHeight + srcY);
                dstHeight = srcHeight;
            } else if (srcY <= sourceHeight) {
                dstY = 0;
                srcHeight = Math.min(initialHeight, sourceHeight - srcY);
                dstHeight = srcHeight;
            }
            var params = [
                srcX,
                srcY,
                srcWidth,
                srcHeight
            ]; // Avoid "IndexSizeError"
            if (dstWidth > 0 && dstHeight > 0) {
                var scale = width / initialWidth;
                params.push(dstX * scale, dstY * scale, dstWidth * scale, dstHeight * scale);
            } // All the numerical parameters should be integer for `drawImage`
            // https://github.com/fengyuanchen/cropper/issues/476
            context.drawImage.apply(context, [
                source
            ].concat(_toConsumableArray(params.map(function(param) {
                return Math.floor(normalizeDecimalNumber(param));
            }))));
            return canvas;
        },
        /**
     * Change the aspect ratio of the crop box.
     * @param {number} aspectRatio - The new aspect ratio.
     * @returns {Cropper} this
     */ setAspectRatio: function setAspectRatio(aspectRatio) {
            var options = this.options;
            if (!this.disabled && !isUndefined(aspectRatio)) {
                // 0 -> NaN
                options.aspectRatio = Math.max(0, aspectRatio) || NaN;
                if (this.ready) {
                    this.initCropBox();
                    if (this.cropped) this.renderCropBox();
                }
            }
            return this;
        },
        /**
     * Change the drag mode.
     * @param {string} mode - The new drag mode.
     * @returns {Cropper} this
     */ setDragMode: function setDragMode(mode) {
            var options = this.options, dragBox = this.dragBox, face = this.face;
            if (this.ready && !this.disabled) {
                var croppable = mode === DRAG_MODE_CROP;
                var movable = options.movable && mode === DRAG_MODE_MOVE;
                mode = croppable || movable ? mode : DRAG_MODE_NONE;
                options.dragMode = mode;
                setData(dragBox, DATA_ACTION, mode);
                toggleClass(dragBox, CLASS_CROP, croppable);
                toggleClass(dragBox, CLASS_MOVE, movable);
                if (!options.cropBoxMovable) {
                    // Sync drag mode to crop box when it is not movable
                    setData(face, DATA_ACTION, mode);
                    toggleClass(face, CLASS_CROP, croppable);
                    toggleClass(face, CLASS_MOVE, movable);
                }
            }
            return this;
        }
    };
    var AnotherCropper = WINDOW.Cropper;
    var Cropper1 = /*#__PURE__*/ function() {
        /**
     * Create a new Cropper.
     * @param {Element} element - The target element for cropping.
     * @param {Object} [options={}] - The configuration options.
     */ function Cropper(element) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            _classCallCheck(this, Cropper);
            if (!element || !REGEXP_TAG_NAME.test(element.tagName)) throw new Error('The first argument is required and must be an <img> or <canvas> element.');
            this.element = element;
            this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
            this.cropped = false;
            this.disabled = false;
            this.pointers = {};
            this.ready = false;
            this.reloading = false;
            this.replaced = false;
            this.sized = false;
            this.sizing = false;
            this.init();
        }
        _createClass(Cropper, [
            {
                key: "init",
                value: function init() {
                    var element = this.element;
                    var tagName = element.tagName.toLowerCase();
                    var url;
                    if (element[NAMESPACE]) return;
                    element[NAMESPACE] = this;
                    if (tagName === 'img') {
                        this.isImg = true; // e.g.: "img/picture.jpg"
                        url = element.getAttribute('src') || '';
                        this.originalUrl = url; // Stop when it's a blank image
                        if (!url) return;
                         // e.g.: "https://example.com/img/picture.jpg"
                        url = element.src;
                    } else if (tagName === 'canvas' && window.HTMLCanvasElement) url = element.toDataURL();
                    this.load(url);
                }
            },
            {
                key: "load",
                value: function load(url) {
                    var _this = this;
                    if (!url) return;
                    this.url = url;
                    this.imageData = {};
                    var element = this.element, options = this.options;
                    if (!options.rotatable && !options.scalable) options.checkOrientation = false;
                     // Only IE10+ supports Typed Arrays
                    if (!options.checkOrientation || !window.ArrayBuffer) {
                        this.clone();
                        return;
                    } // Detect the mime type of the image directly if it is a Data URL
                    if (REGEXP_DATA_URL.test(url)) {
                        // Read ArrayBuffer from Data URL of JPEG images directly for better performance
                        if (REGEXP_DATA_URL_JPEG.test(url)) this.read(dataURLToArrayBuffer(url));
                        else // Only a JPEG image may contains Exif Orientation information,
                        // the rest types of Data URLs are not necessary to check orientation at all.
                        this.clone();
                        return;
                    } // 1. Detect the mime type of the image by a XMLHttpRequest.
                    // 2. Load the image as ArrayBuffer for reading orientation if its a JPEG image.
                    var xhr = new XMLHttpRequest();
                    var clone = this.clone.bind(this);
                    this.reloading = true;
                    this.xhr = xhr; // 1. Cross origin requests are only supported for protocol schemes:
                    // http, https, data, chrome, chrome-extension.
                    // 2. Access to XMLHttpRequest from a Data URL will be blocked by CORS policy
                    // in some browsers as IE11 and Safari.
                    xhr.onabort = clone;
                    xhr.onerror = clone;
                    xhr.ontimeout = clone;
                    xhr.onprogress = function() {
                        // Abort the request directly if it not a JPEG image for better performance
                        if (xhr.getResponseHeader('content-type') !== MIME_TYPE_JPEG) xhr.abort();
                    };
                    xhr.onload = function() {
                        _this.read(xhr.response);
                    };
                    xhr.onloadend = function() {
                        _this.reloading = false;
                        _this.xhr = null;
                    }; // Bust cache when there is a "crossOrigin" property to avoid browser cache error
                    if (options.checkCrossOrigin && isCrossOriginURL(url) && element.crossOrigin) url = addTimestamp(url);
                     // The third parameter is required for avoiding side-effect (#682)
                    xhr.open('GET', url, true);
                    xhr.responseType = 'arraybuffer';
                    xhr.withCredentials = element.crossOrigin === 'use-credentials';
                    xhr.send();
                }
            },
            {
                key: "read",
                value: function read(arrayBuffer) {
                    var options = this.options, imageData = this.imageData; // Reset the orientation value to its default value 1
                    // as some iOS browsers will render image with its orientation
                    var orientation = resetAndGetOrientation(arrayBuffer);
                    var rotate = 0;
                    var scaleX = 1;
                    var scaleY = 1;
                    if (orientation > 1) {
                        // Generate a new URL which has the default orientation value
                        this.url = arrayBufferToDataURL(arrayBuffer, MIME_TYPE_JPEG);
                        var _parseOrientation = parseOrientation(orientation);
                        rotate = _parseOrientation.rotate;
                        scaleX = _parseOrientation.scaleX;
                        scaleY = _parseOrientation.scaleY;
                    }
                    if (options.rotatable) imageData.rotate = rotate;
                    if (options.scalable) {
                        imageData.scaleX = scaleX;
                        imageData.scaleY = scaleY;
                    }
                    this.clone();
                }
            },
            {
                key: "clone",
                value: function clone() {
                    var element = this.element, url = this.url;
                    var crossOrigin = element.crossOrigin;
                    var crossOriginUrl = url;
                    if (this.options.checkCrossOrigin && isCrossOriginURL(url)) {
                        if (!crossOrigin) crossOrigin = 'anonymous';
                         // Bust cache when there is not a "crossOrigin" property (#519)
                        crossOriginUrl = addTimestamp(url);
                    }
                    this.crossOrigin = crossOrigin;
                    this.crossOriginUrl = crossOriginUrl;
                    var image = document.createElement('img');
                    if (crossOrigin) image.crossOrigin = crossOrigin;
                    image.src = crossOriginUrl || url;
                    image.alt = element.alt || 'The image to crop';
                    this.image = image;
                    image.onload = this.start.bind(this);
                    image.onerror = this.stop.bind(this);
                    addClass(image, CLASS_HIDE);
                    element.parentNode.insertBefore(image, element.nextSibling);
                }
            },
            {
                key: "start",
                value: function start() {
                    var _this2 = this;
                    var image = this.image;
                    image.onload = null;
                    image.onerror = null;
                    this.sizing = true; // Match all browsers that use WebKit as the layout engine in iOS devices,
                    // such as Safari for iOS, Chrome for iOS, and in-app browsers.
                    var isIOSWebKit = WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent);
                    var done = function done(naturalWidth, naturalHeight) {
                        assign(_this2.imageData, {
                            naturalWidth: naturalWidth,
                            naturalHeight: naturalHeight,
                            aspectRatio: naturalWidth / naturalHeight
                        });
                        _this2.initialImageData = assign({}, _this2.imageData);
                        _this2.sizing = false;
                        _this2.sized = true;
                        _this2.build();
                    }; // Most modern browsers (excepts iOS WebKit)
                    if (image.naturalWidth && !isIOSWebKit) {
                        done(image.naturalWidth, image.naturalHeight);
                        return;
                    }
                    var sizingImage = document.createElement('img');
                    var body = document.body || document.documentElement;
                    this.sizingImage = sizingImage;
                    sizingImage.onload = function() {
                        done(sizingImage.width, sizingImage.height);
                        if (!isIOSWebKit) body.removeChild(sizingImage);
                    };
                    sizingImage.src = image.src; // iOS WebKit will convert the image automatically
                    // with its orientation once append it into DOM (#279)
                    if (!isIOSWebKit) {
                        sizingImage.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;";
                        body.appendChild(sizingImage);
                    }
                }
            },
            {
                key: "stop",
                value: function stop() {
                    var image = this.image;
                    image.onload = null;
                    image.onerror = null;
                    image.parentNode.removeChild(image);
                    this.image = null;
                }
            },
            {
                key: "build",
                value: function build() {
                    if (!this.sized || this.ready) return;
                    var element = this.element, options = this.options, image = this.image; // Create cropper elements
                    var container = element.parentNode;
                    var template = document.createElement('div');
                    template.innerHTML = TEMPLATE;
                    var cropper = template.querySelector(".".concat(NAMESPACE, "-container"));
                    var canvas = cropper.querySelector(".".concat(NAMESPACE, "-canvas"));
                    var dragBox = cropper.querySelector(".".concat(NAMESPACE, "-drag-box"));
                    var cropBox = cropper.querySelector(".".concat(NAMESPACE, "-crop-box"));
                    var face = cropBox.querySelector(".".concat(NAMESPACE, "-face"));
                    this.container = container;
                    this.cropper = cropper;
                    this.canvas = canvas;
                    this.dragBox = dragBox;
                    this.cropBox = cropBox;
                    this.viewBox = cropper.querySelector(".".concat(NAMESPACE, "-view-box"));
                    this.face = face;
                    canvas.appendChild(image); // Hide the original image
                    addClass(element, CLASS_HIDDEN); // Inserts the cropper after to the current image
                    container.insertBefore(cropper, element.nextSibling); // Show the image if is hidden
                    if (!this.isImg) removeClass(image, CLASS_HIDE);
                    this.initPreview();
                    this.bind();
                    options.initialAspectRatio = Math.max(0, options.initialAspectRatio) || NaN;
                    options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
                    options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;
                    addClass(cropBox, CLASS_HIDDEN);
                    if (!options.guides) addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-dashed")), CLASS_HIDDEN);
                    if (!options.center) addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-center")), CLASS_HIDDEN);
                    if (options.background) addClass(cropper, "".concat(NAMESPACE, "-bg"));
                    if (!options.highlight) addClass(face, CLASS_INVISIBLE);
                    if (options.cropBoxMovable) {
                        addClass(face, CLASS_MOVE);
                        setData(face, DATA_ACTION, ACTION_ALL);
                    }
                    if (!options.cropBoxResizable) {
                        addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-line")), CLASS_HIDDEN);
                        addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-point")), CLASS_HIDDEN);
                    }
                    this.render();
                    this.ready = true;
                    this.setDragMode(options.dragMode);
                    if (options.autoCrop) this.crop();
                    this.setData(options.data);
                    if (isFunction(options.ready)) addListener(element, EVENT_READY, options.ready, {
                        once: true
                    });
                    dispatchEvent(element, EVENT_READY);
                }
            },
            {
                key: "unbuild",
                value: function unbuild() {
                    if (!this.ready) return;
                    this.ready = false;
                    this.unbind();
                    this.resetPreview();
                    this.cropper.parentNode.removeChild(this.cropper);
                    removeClass(this.element, CLASS_HIDDEN);
                }
            },
            {
                key: "uncreate",
                value: function uncreate() {
                    if (this.ready) {
                        this.unbuild();
                        this.ready = false;
                        this.cropped = false;
                    } else if (this.sizing) {
                        this.sizingImage.onload = null;
                        this.sizing = false;
                        this.sized = false;
                    } else if (this.reloading) {
                        this.xhr.onabort = null;
                        this.xhr.abort();
                    } else if (this.image) this.stop();
                }
            }
        ], [
            {
                key: "noConflict",
                value: function noConflict() {
                    window.Cropper = AnotherCropper;
                    return Cropper;
                }
            },
            {
                key: "setDefaults",
                value: function setDefaults(options) {
                    assign(DEFAULTS, isPlainObject(options) && options);
                }
            }
        ]);
        return Cropper;
    }();
    assign(Cropper1.prototype, render, preview1, events, handlers, change, methods);
    return Cropper1;
});

},{}],"23wsW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _effect = require("../../effect");
var _cropperjs = require("cropperjs");
var _cropperjsDefault = parcelHelpers.interopDefault(_cropperjs);
var _elements = require("../../helpers/elements");
class Rotate extends _effect.UpploadEffect {
    name = "rotate";
    icon = `<svg aria-hidden="true" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M139 37a110 110 0 014 218v-37a73 73 0 00-4-144v36L66 55l73-55v37zM61 234c15 11 33 18 52 21v-37c-9-2-18-6-25-11l-27 27zm-20-21c-12-15-19-33-22-52h37c2 9 6 18 11 26l-26 26zM40 81c-11 14-19 32-21 51h37c2-11 7-21 13-29L40 81z" fill="#000" fill-rule="nonzero"/></svg>`;
    value = 0;
    max = 360;
    unit = "deg";
    originalFile = {
        blob: new Blob()
    };
    template = ({ file , translate  })=>{
        const image = URL.createObjectURL(file.blob);
        this.originalFile = file;
        return `
      <div class="uppload-rotating-element">
        <img style="width: 20px" alt="" src="${image}">
      </div>
      <div class="settings">
        <input type="range" value="${this.value}" min="0" max="${this.max}">
        <span class="value"><span>0</span>${translate(`units.${this.unit}`) || this.unit}</span>
      </div>
    `;
    };
    handlers = (params)=>{
        const rotatorElement = params.uppload.container.querySelector(".uppload-rotating-element img");
        const originalFile = this.originalFile;
        if (rotatorElement) _elements.fitImageToContainer(params, rotatorElement).then(()=>{
            const rotator = new _cropperjsDefault.default(rotatorElement, {
                autoCropArea: 1,
                viewMode: 1,
                dragMode: "none",
                cropBoxMovable: false,
                cropBoxResizable: false,
                toggleDragModeOnDblclick: false,
                ready () {
                    params.uppload.emitter.emit("processing");
                    _elements.canvasToBlob(rotator.getCroppedCanvas()).then((blob)=>{
                        originalFile.blob = blob;
                        params.uppload.emitter.emit("process");
                        params.next(originalFile);
                    });
                }
            });
            const range1 = params.uppload.container.querySelector(".settings input[type='range']");
            if (range1) _elements.safeListen(range1, "change", ()=>{
                let value = 0;
                const range = params.uppload.container.querySelector(".settings input[type='range']");
                if (range) value = parseInt(range.value);
                const displayer = params.uppload.container.querySelector(".settings .value span");
                if (displayer) displayer.innerHTML = value.toString();
                rotator.rotate(value - this.value);
                this.value = value;
                params.uppload.emitter.emit("processing");
                _elements.canvasToBlob(rotator.getCroppedCanvas()).then((blob)=>{
                    originalFile.blob = blob;
                    params.uppload.emitter.emit("process");
                    params.next(originalFile);
                });
            });
        });
    };
}
exports.default = Rotate;

},{"../../effect":"j9yFt","cropperjs":"dBPeF","../../helpers/elements":"etwNm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"JLXG5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _effect = require("../../effect");
var _elements = require("../../helpers/elements");
class Flip extends _effect.UpploadEffect {
    name = "flip";
    originalfileURL = "";
    originalFile = {
        blob: new Blob()
    };
    icon = `<svg aria-hidden="true" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M153 0v256h103L153 0zM0 256h103V0L0 256z" fill="#000" fill-rule="nonzero"/></svg>`;
    canvas = document.createElement("canvas");
    template = ({ file , translate  })=>{
        const image = URL.createObjectURL(file.blob);
        this.originalfileURL = image;
        this.originalFile = file;
        return `
      <div class="uppload-flip">
        <img style="width: 20px" alt="" src="${image}">
      </div>
      <div class="settings">
        <button class="flip-btn-horizontal">${translate("effects.flip.buttons.horizontal")}</button>
        <button class="flip-btn-vertical">${translate("effects.flip.buttons.vertical")}</button>
      </div>
    `;
    };
    imageToCanvasBlob(params, flipH = false, flipV = false) {
        return new Promise((resolve)=>{
            params.uppload.emitter.emit("processing");
            const scaleH = flipH ? -1 : 1;
            const scaleV = flipV ? -1 : 1;
            this.canvas = document.createElement("canvas");
            const image1 = document.createElement("img");
            image1.src = this.originalfileURL;
            image1.onload = ()=>{
                this.canvas.width = image1.width;
                this.canvas.height = image1.height;
                const posX = flipH ? image1.width * -1 : 0;
                const posY = flipV ? image1.height * -1 : 0;
                const context = this.canvas.getContext("2d");
                if (!context) return;
                context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                context.scale(scaleH, scaleV);
                context.drawImage(image1, posX, posY);
                _elements.canvasToBlob(this.canvas).then((blob)=>{
                    const image = URL.createObjectURL(blob);
                    this.originalfileURL = image;
                    params.uppload.emitter.emit("process");
                    return resolve(blob);
                });
            };
        });
    }
    update(params, x, y) {
        const img = params.uppload.container.querySelector(".uppload-flip img");
        if (!img) return;
        this.imageToCanvasBlob(params, x, y).then((blob)=>{
            if (!blob) return;
            let file = this.originalFile;
            file.blob = blob;
            params.next(file);
            const image = URL.createObjectURL(blob);
            img.setAttribute("src", image);
        });
    }
    handlers = (params)=>{
        const img = params.uppload.container.querySelector(".uppload-flip img");
        if (img) _elements.fitImageToContainer(params, img).then(()=>{
            const horizontal = params.uppload.container.querySelector(".settings button.flip-btn-horizontal");
            if (horizontal) _elements.safeListen(horizontal, "click", this.update.bind(this, params, true, false));
            const vertical = params.uppload.container.querySelector(".settings button.flip-btn-vertical");
            if (vertical) _elements.safeListen(vertical, "click", this.update.bind(this, params, false, true));
        });
    };
}
exports.default = Flip;

},{"../../effect":"j9yFt","../../helpers/elements":"etwNm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kNq2O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _effect = require("../../effect");
var _elements = require("../../helpers/elements");
class Preview extends _effect.UpploadEffect {
    name = "preview";
    icon = `<svg aria-hidden="true" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 18)" fill="#000" fill-rule="nonzero"><path d="M244 40h-29V10c0-6-5-10-10-10H10C4 0 0 4 0 10v160c0 5 4 10 10 10h29v30c0 6 4 10 9 10h195c6 0 10-4 10-10V50c0-5-4-10-9-10zm-10 136l-40-45c-4-5-11-5-15 0l-17 19-38-45c-4-5-13-5-17 0l-49 58V60h176v116zM19 160V20h176v20H49c-6 0-10 5-10 10v110H19z"/><ellipse cx="202.5" cy="94" rx="15.5" ry="16"/></g></svg>`;
    template = ({ file  })=>{
        const image = URL.createObjectURL(file.blob);
        return `
      <div class="uppload-preview-element">
        <img style="width: 20px" alt="" src="${image}">
      </div>
    `;
    };
    handlers = (params)=>{
        const image = params.uppload.container.querySelector(".uppload-preview-element img");
        if (image) _elements.fitImageToContainer(params, image);
    };
}
exports.default = Preview;

},{"../../effect":"j9yFt","../../helpers/elements":"etwNm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4mJME":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _filter = require("../../helpers/filter");
var _filterDefault = parcelHelpers.interopDefault(_filter);
class Brightness extends _filterDefault.default {
    name = "brightness";
    icon = `<svg aria-hidden="true" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path fill="#000" d="M128 0l37 37h54v54l37 37-37 37v54h-54l-37 37-37-37H37v-54L0 128l37-37V37h54l37-37zm0 53a75 75 0 100 150 75 75 0 000-150zm0 21a54 54 0 110 108 54 54 0 010-108z"/></svg>`;
    cssFilter = "brightness";
    unit = "%";
    value = 100;
    max = 200;
}
exports.default = Brightness;

},{"../../helpers/filter":"kLuIw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kLuIw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _effect = require("../effect");
var _elements = require("../helpers/elements");
class UpploadFilterBaseClass extends _effect.UpploadEffect {
    canvas = document.createElement("canvas");
    originalfileURL = "";
    originalFile = {
        blob: new Blob()
    };
    cssFilter = "";
    max = 10;
    unit = "px";
    value = 0;
    supports = ()=>!!(this.canvas.getContext && this.canvas.getContext("2d") && typeof this.canvas.getContext("2d")?.filter === "string")
    ;
    template = ({ file , translate  })=>{
        const image = URL.createObjectURL(file.blob);
        this.originalfileURL = image;
        this.originalFile = file;
        return `
      <div class="uppload-hue-image">
        <img style="width: 20px" alt="" src="${image}">
      </div>
      <div class="settings">
        <input type="range" value="${this.value}" min="0" max="${this.max}">
        <span class="value"><span>0</span>${translate(`units.${this.unit}`) || this.unit}</span>
      </div>
    `;
    };
    imageToCanvasBlob(params, filters) {
        params.uppload.emitter.emit("processing");
        return new Promise((resolve)=>{
            this.canvas = document.createElement("canvas");
            const image = document.createElement("img");
            image.src = this.originalfileURL;
            image.onload = ()=>{
                this.canvas.width = image.width;
                this.canvas.height = image.height;
                const context = this.canvas.getContext("2d");
                if (!context) return;
                context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                context.filter = filters;
                context.drawImage(image, 0, 0);
                _elements.canvasToBlob(this.canvas).then((blob)=>{
                    params.uppload.emitter.emit("process");
                    return resolve(blob);
                });
            };
        });
    }
    handlers = (params)=>{
        const hueElement = params.uppload.container.querySelector(".uppload-hue-image img");
        if (hueElement) _elements.fitImageToContainer(params, hueElement).then(()=>{
            const range = params.uppload.container.querySelector(".settings input[type='range']");
            if (range) _elements.safeListen(range, "change", this.update.bind(this, params));
        });
    };
    update(params) {
        let value = 0;
        const range = params.uppload.container.querySelector(".settings input[type='range']");
        if (range) value = parseInt(range.value);
        const displayer = params.uppload.container.querySelector(".settings .value span");
        if (displayer) displayer.innerHTML = value.toString();
        const hueElement = params.uppload.container.querySelector(".uppload-hue-image img");
        if (!hueElement) return;
        this.imageToCanvasBlob(params, `${this.cssFilter}(${range.value}${this.unit})`).then((blob)=>{
            if (!blob) return;
            this.originalFile.blob = blob;
            params.next(this.originalFile);
            const image = URL.createObjectURL(blob);
            hueElement.setAttribute("src", image);
        });
    }
}
exports.default = UpploadFilterBaseClass;

},{"../effect":"j9yFt","../helpers/elements":"etwNm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ZrJT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _filter = require("../../helpers/filter");
var _filterDefault = parcelHelpers.interopDefault(_filter);
class Blur extends _filterDefault.default {
    name = "blur";
    icon = `<svg aria-hidden="true" viewbox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M128 0l-7 7s-21 23-41 54c-21 31-42 70-42 105a90 90 0 00180 0c0-35-22-74-42-105-21-31-42-54-42-54l-6-7zm36 166h18c0 30-25 54-54 54v-18c20 0 36-16 36-36z" fill="#000" fill-rule="nonzero"/></svg>`;
    cssFilter = "blur";
    unit = "px";
}
exports.default = Blur;

},{"../../helpers/filter":"kLuIw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dRiPN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _filter = require("../../helpers/filter");
var _filterDefault = parcelHelpers.interopDefault(_filter);
class Contrast extends _filterDefault.default {
    name = "contrast";
    icon = `<svg aria-hidden="true" viewbox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M128 0c35 0 66 13 90 38 25 25 38 55 38 90s-13 66-38 90c-24 25-55 38-90 38s-65-13-90-38c-25-24-38-55-38-90s13-65 38-90S93 0 128 0zm67 62a91 91 0 00-67-28v188c26 0 48-9 67-28 18-18 27-40 27-66s-9-48-27-66z" fill="#000" fill-rule="nonzero"/></svg>`;
    cssFilter = "contrast";
    unit = "%";
    value = 100;
    max = 200;
}
exports.default = Contrast;

},{"../../helpers/filter":"kLuIw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cBMeX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _filter = require("../../helpers/filter");
var _filterDefault = parcelHelpers.interopDefault(_filter);
class Grayscale extends _filterDefault.default {
    name = "grayscale";
    icon = `<svg aria-hidden="true" viewbox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M181 196l30 30c-20 17-44 27-71 30h-1v-43c15-2 30-8 42-17zm-105-1c11 9 25 16 40 18h1v43c-27-2-52-13-71-29l-1-1 31-31zm138-56h42c-2 27-13 52-29 71l-1 1-30-30c9-12 16-27 18-42zm-170 0c1 15 7 29 16 41h1l-31 31c-17-20-28-44-30-71v-1h44zM210 8a27 27 0 0138 38l-38 37 10 10c5 5 5 13 0 18l-1 1c-5 5-13 4-18-1l-10-9-47 47c-5 5-15 9-22 10h-6l-17-2-2-17v-6c0-7 5-17 10-23l47-47-10-9c-5-5-5-14 0-19h1c5-5 13-5 18 0l10 10zm-47 66l-47 47c-3 3-5 9-6 13v1l11 10c4 0 11-3 14-5l47-47-19-19zM30 45l31 31c-9 11-15 25-17 40v1H0c2-27 13-52 30-72zm87-45v43c-15 2-29 8-41 17v1L45 30C65 13 90 2 117 0z" fill="#000" fill-rule="nonzero"/></svg>`;
    cssFilter = "grayscale";
    unit = "%";
    value = 0;
    max = 100;
}
exports.default = Grayscale;

},{"../../helpers/filter":"kLuIw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"22EXB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _filter = require("../../helpers/filter");
var _filterDefault = parcelHelpers.interopDefault(_filter);
class HueRotate extends _filterDefault.default {
    name = "hue-rotate";
    icon = `<svg aria-hidden="true" viewbox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M213 114c-30 0-69 0-76-87-2-17-13-27-30-27-22 0-48 14-68 36C13 65 2 102 6 141c6 62 66 115 129 115 64 0 116-52 116-115 0-26-18-27-38-27zM77 101a24 24 0 110-48 24 24 0 010 48zm-8 28a24 24 0 110 48 24 24 0 010-48zm83 74a24 24 0 11-48 0 24 24 0 0148 0zm68-40a24 24 0 11-47 0 24 24 0 0147 0z" fill="#000" fill-rule="nonzero"/></svg>`;
    cssFilter = "hue-rotate";
    unit = "deg";
    value = 0;
    max = 360;
}
exports.default = HueRotate;

},{"../../helpers/filter":"kLuIw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5IpQy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _filter = require("../../helpers/filter");
var _filterDefault = parcelHelpers.interopDefault(_filter);
class Invert extends _filterDefault.default {
    name = "invert";
    icon = `<svg aria-hidden="true" viewbox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="nonzero"><path d="M214 145a100 100 0 010 10l-7 25 1-2c-3 7-8 15-13 21l2-2c-5 7-11 12-18 18l3-2c-7 5-14 9-22 12l3-1a98 98 0 01-22 7 101 101 0 01-23 0c-9-1-17-3-25-7l3 1c-8-3-15-7-22-12l3 2c-7-6-13-11-18-18l2 2c-5-6-10-14-13-21l1 2a98 98 0 01-6-21 102 102 0 010-24c1-8 3-17 6-25l-1 3c3-8 8-15 13-22l-2 3 15-17a657 657 0 0163-57h-17a1561 1561 0 0175 71c5 7 10 14 13 22l-1-3a100 100 0 017 35c0 7 6 13 12 12 6 0 12-5 12-12a112 112 0 00-38-83 676 676 0 00-50-48L137 3h-1c-2-2-5-3-8-3s-6 1-8 3a1704 1704 0 00-49 43c-9 9-19 18-27 29a118 118 0 00-19 30 109 109 0 005 90 111 111 0 0089 60 110 110 0 00119-110c0-6-6-12-12-12-7 1-12 6-12 12z"/><path d="M226 145c0 55-44 99-98 99V12s58 49 76 71c14 17 22 39 22 62z"/></g></svg>`;
    cssFilter = "invert";
    unit = "%";
    value = 0;
    max = 100;
}
exports.default = Invert;

},{"../../helpers/filter":"kLuIw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kdNjy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _filter = require("../../helpers/filter");
var _filterDefault = parcelHelpers.interopDefault(_filter);
class Sepia extends _filterDefault.default {
    name = "sepia";
    icon = `<svg aria-hidden="true" viewbox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M13 0h230c6 0 11 5 12 11v233c0 7-5 12-11 12H13c-7 0-12-5-12-11V12C1 5 6 0 12 0h231zm219 23H24v160h208V23zM110 72l31 42c2 2 5 2 7 1v-1l13-12c2-2 5-2 7 0v1l35 50c3 3 1 7-3 7H55c-4 0-6-4-4-7l51-81c2-2 6-3 8 0zm65-26a18 18 0 110 36 18 18 0 010-36z" fill="#000" fill-rule="nonzero"/></svg>`;
    cssFilter = "sepia";
    unit = "%";
    value = 0;
    max = 100;
}
exports.default = Sepia;

},{"../../helpers/filter":"kLuIw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dGMzl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _filter = require("../../helpers/filter");
var _filterDefault = parcelHelpers.interopDefault(_filter);
class Saturate extends _filterDefault.default {
    name = "saturate";
    icon = `<svg aria-hidden="true" viewbox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M127 0a82 82 0 00-75 50l-1 2a81 81 0 00-3 10l-1 3-1 7v9a99 99 0 0181 4 99 99 0 0182-4v-8-1l-1-7-1-3a82 82 0 00-3-10l-1-2a82 82 0 00-76-50zM82 92c-12 0-23 3-33 7l-1 1c4 19 14 35 29 46 5-19 17-36 32-49-8-3-17-5-27-5zm91 0c-10 0-19 2-27 5 15 13 26 30 32 49 15-11 25-27 29-46l-1-1c-10-4-21-7-33-7zm-46 14a82 82 0 00-34 50 82 82 0 0069 0c-5-21-17-39-35-50zm-96 4a82 82 0 00-27 39l-1 2-2 9v5a83 83 0 00-1 17c4 39 35 70 74 74h8c9 0 18-2 26-5a100 100 0 01-35-85c-20-13-35-33-42-56zm192 0c-6 23-21 43-41 56v8c0 31-14 58-36 77a70 70 0 0035 5c39-4 69-35 73-74a82 82 0 000-17v-2-3l-2-9-1-2c-5-15-15-29-28-39zM91 175c0 28 14 52 35 66l1-1 2 1c21-14 34-38 35-66a99 99 0 01-73 0z" fill="#000" fill-rule="nonzero"/></svg>`;
    cssFilter = "saturate";
    unit = "%";
    value = 100;
    max = 200;
}
exports.default = Saturate;

},{"../../helpers/filter":"kLuIw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e7TfM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Uppload image uploading widget
 */ parcelHelpers.export(exports, "Uppload", ()=>Uppload
);
var _service = require("./service");
var _i18N = require("./helpers/i18n");
var _elements = require("./helpers/elements");
var _assets = require("./helpers/assets");
var _focusTrap = require("focus-trap");
var _mitt = require("mitt");
var _mittDefault = parcelHelpers.interopDefault(_mitt);
var _files = require("./helpers/files");
class DefaultService extends _service.UpploadService {
    name = "default";
    invisible = true;
    template = ()=>`<p>${_i18N.translate("services.default.heading")}</p>`
    ;
}
class UploadingService extends _service.UpploadService {
    name = "uploading";
    invisible = true;
    template = ()=>`<div class="uppload-loader">
  <div></div>
    <p class="uppload-loader-text">${_i18N.translate("uploading")}<span class="progress"></span></p>
  </div>`
    ;
}
class Uppload {
    services = [
        new DefaultService(),
        new UploadingService()
    ];
    effects = [];
    isOpen = false;
    activeService = "default";
    activeEffect = "";
    file = {
        blob: new Blob()
    };
    lang = {};
    emitter = _mittDefault.default();
    uploadProgress = 0;
    inline = false;
    transitionDuration = 300;
    uId = "";
    /**
   * Create a new Uppload instance
   * @param settings - Uppload instance settings
   */ constructor(settings){
        this.settings = {};
        this.updateSettings(settings || {});
        this.container = document.createElement("div");
        this.renderContainer();
        this.container.classList.add("uppload-container");
        this.uId = (Math.random() + 1).toString(36).substring(7);
        const body = document.body;
        if (body) body.appendChild(this.container);
        this.focusTrap = _focusTrap.createFocusTrap(this.container, {
            initialFocus: ()=>this.container.querySelector("button")
        });
        requestAnimationFrame(()=>this.update()
        );
        /**
     * Loader during file processing in effects
     * https://github.com/elninotech/uppload/issues/111
     */ this.emitter.on("processing", ()=>{
            const loader = this.container.querySelector(".processing-loader");
            if (loader) loader.classList.add("visible");
        });
        this.emitter.on("process", ()=>{
            const loader = this.container.querySelector(".processing-loader");
            if (loader) loader.classList.remove("visible");
        });
    }
    /**
   * Update widget settings such as i18n
   * @param settings - Uppload settings object
   */ updateSettings(settings) {
        this.settings = {
            ...this.settings,
            ...settings
        };
        this.emitter.emit("settingsUpdated", settings);
        if (settings.lang) _i18N.setI18N(settings.lang);
        if (settings.defaultService) this.activeService = settings.defaultService;
        if (settings.lang) this.lang = settings.lang;
        if (typeof settings.transitionDuration !== 'undefined') this.transitionDuration = settings.transitionDuration;
        if (settings.uploader) this.uploader = settings.uploader;
        this.inline = !!settings.inline;
        this.update();
    }
    ready() {
        if (this.settings.value) this.bind(this.settings.value);
        this.renderContainer();
        this.emitter.emit("ready");
    }
    /**
   * Bind the image URL value to DOM elements
   * @param value - URL of the image
   */ bind(value) {
        if (this.settings.bind) {
            const elements = _elements.getElements(this.settings.bind);
            elements.forEach((element)=>{
                if (element.nodeName === "IMG") element.setAttribute("src", value);
                else element.setAttribute("value", value);
            });
            this.emitter.emit("bind");
        }
    }
    /**
   * Use an uploader, service, or effect in your package
   * @param plugin - A single uploader, service, or effect or an array of them
   */ use(plugin) {
        if (Array.isArray(plugin)) plugin.forEach((item)=>this.install(item)
        );
        else this.install(plugin);
    }
    /**
   * Remove a plugin (effect or serve) from this instance
   * @param slug - Slug of the plugin to be removed
   */ remove(slug) {
        this.services = this.services.filter((service)=>service.name !== slug
        );
        this.effects = this.effects.filter((service)=>service.name !== slug
        );
        this.update();
        this.emitter.emit("remove", slug);
    }
    /**
   * Update the plugins for this instance
   * @param pluginUpdateFunction - Function to update this instance's plugins
   */ updatePlugins(pluginUpdateFunction) {
        const plugins = pluginUpdateFunction(this.services);
        const services = plugins.filter((plugin)=>plugin.type === "service"
        );
        const hasDefaultService = !!services.filter((service)=>service.name === "default"
        ).length;
        const hasUploadingService = !!services.filter((service)=>service.name === "uploading"
        ).length;
        if (!hasUploadingService) services.unshift(new UploadingService());
        if (!hasDefaultService) services.unshift(new DefaultService());
        this.services = services;
        this.effects = plugins.filter((plugin)=>plugin.type === "effect"
        );
        this.update();
    }
    /**
   * Install a new uploader, service, or effect to this instance
   * @param plugin - A single uploader, service, or effect
   */ install(plugin) {
        // Check if the browser supports this plugin
        if (!plugin.supports()) return;
        if (plugin.type === "service") {
            // Install this service if it isn't already installed
            const has = !!this.services.filter((service)=>service.name === plugin.name
            ).length;
            if (!has) this.services.push(plugin);
            this.ready();
        } else if (plugin.type === "effect") {
            const has = !!this.effects.filter((effect)=>effect.name === plugin.name
            ).length;
            if (!has) this.effects.push(plugin);
            this.ready();
        }
    }
    /**
   * Returns whether the modal is currently open
   */ modalOpen() {
        return this.isOpen;
    }
    /**
   * Open the Uppload widget
   */ open() {
        if (this.isOpen) return;
        this.isOpen = true;
        this.file = {
            blob: new Blob()
        };
        this.activeService = "default";
        this.activeEffect = "";
        const serviceRadio = this.container.querySelector(`input[type=radio][value='${this.activeService}']`);
        if (serviceRadio) serviceRadio.setAttribute("checked", "checked");
        this.container.style.transition = `${this.transitionDuration}ms`;
        this.container.style.opacity = "0";
        this.update();
        let firstService = this.settings.defaultService;
        if (this.services.length === 3) this.navigate(this.services[2].name);
        if (firstService) this.navigate(firstService);
        _elements.safeListen(document.body, "keyup", (e)=>{
            if (e.key === "Escape" && this.isOpen) this.close();
        });
        setTimeout(()=>{
            this.container.style.opacity = "1";
        }, 1);
        this.emitter.emit("open");
    }
    /**
   * Close the Uppload widget
   */ close() {
        if (!this.isOpen) return;
        this.stopCurrentService();
        this.isOpen = false;
        this.emitter.emit("close");
        this.container.style.opacity = "0";
        setTimeout(()=>this.update()
        , this.transitionDuration);
    }
    /**
   * Toggles the Uppload widget
   */ toggle() {
        if (this.modalOpen()) this.close();
        else this.open();
    }
    /**
   * Re-render the widget
   */ update() {
        if (!this.container) return;
        this.hideHelp();
        if (this.settings.customClass) this.container.classList.add(this.settings.customClass);
        if (this.inline) this.container.classList.add("uppload-inline");
        const content = this.container.querySelector(".uppload-active-container");
        if (content) content.innerHTML = this.render();
        const aside = this.container.querySelector("aside");
        if (aside && this.activeService !== "default" && !this.activeEffect) aside.style.display = "block";
        const footerEffectsNav = this.container.querySelector(".effects-nav");
        if (aside && footerEffectsNav && this.activeEffect) {
            footerEffectsNav.style.display = "";
            aside.style.display = "none";
        } else if (aside && footerEffectsNav && this.activeService === "default") {
            aside.style.display = "none";
            footerEffectsNav.style.display = "none";
        } else if (aside && footerEffectsNav) {
            aside.style.display = "";
            footerEffectsNav.style.display = "none";
        }
        const effectsContainer = this.container.querySelector(".uppload-effect");
        if (effectsContainer) effectsContainer.style.display = this.activeEffect ? "" : "none";
        window.requestAnimationFrame(()=>this.handlers()
        );
        if (!this.isOpen) {
            this.container.classList.remove("visible");
            this.focusTrap.deactivate();
        } else {
            this.container.classList.add("visible");
            this.focusTrap.activate();
        }
        const effectsNav = this.container.querySelector("footer.effects-nav .effects-tabs");
        if (effectsNav) {
            const parent = effectsNav.parentElement;
            if (parent) {
                let totalButtonsWidth = 0;
                const buttons = parent.querySelectorAll(".effects-continue");
                buttons.forEach((button)=>{
                    const buttonSize = button.getBoundingClientRect();
                    totalButtonsWidth += buttonSize.width;
                });
                const size = parent.getBoundingClientRect();
                effectsNav.style.width = `${size.width - totalButtonsWidth}px`;
            }
        }
        const sideNavbar = this.container.querySelector("aside");
        if (sideNavbar && this.services.length === 3) sideNavbar.classList.add("uppload-services--single");
        const help = this.container.querySelector(".uppload-help");
        if (help) {
            help.classList.remove("visible");
            _elements.safeListen(help, "click", ()=>this.hideHelp()
            );
        }
    }
    /**
   * Returns the HTML template for the services navbar
   * @param sidebar - Whether this is an input radio (for sidebar) or buttons (for home)
   */ getNavbar(sidebar = false) {
        return `<${sidebar ? "nav" : "div"} class="uppload-services">
      ${this.services.filter((service)=>!service.invisible
        ).map((service)=>`<div data-uppload-service="${service.name}" class="uppload-service-name">
          ${sidebar ? `<input type="radio" id="uppload-service-radio-${this.uId}-${service.name}" value="${service.name}" name="uppload-radio">` : ""}
          <${sidebar ? `label for="uppload-service-radio-${this.uId}-${service.name}"` : "button"} data-uppload-service="${service.name}">
            ${service.icon.indexOf("http") === 0 ? `<img class="service-icon" alt="" src="${service.icon}">` : _assets.colorSVG(service.icon, service)}
            <span>${this.lang.services && this.lang.services[service.name] && this.lang.services[service.name].title ? this.lang.services[service.name].title : service.name}</span>
          </${sidebar ? "label" : "button"}>
        </div>`
        ).join("")}
    </${sidebar ? "nav" : "div"}>`;
    }
    /**
   * Returns the HTML template for the effects navbar
   */ getEffectsNavbar() {
        return `<div class="effects-continue">
    <button class="effects-continue--cancel">${_i18N.translate("cancel")}</button>
  </div><div class="effects-tabs"><div class="effects-tabs-flow">
      ${this.effects.map((effect)=>`
      <input type="radio" id="uppload-effect-radio-${this.uId}-${effect.name}" value="${effect.name}" name="uppload-effect-radio">
        <label for="uppload-effect-radio-${this.uId}-${effect.name}">
          ${effect.icon.indexOf("http") === 0 ? `<img class="effect-icon" alt="" src="${effect.icon}">` : _assets.colorSVG(effect.icon, effect)}
          <span>${this.lang.effects && this.lang.effects[effect.name] && this.lang.effects[effect.name].title ? this.lang.effects[effect.name].title : effect.name}</span>
        </label>
      `
        ).join("")}
      </div></div><div class="effects-continue">
        <button class="effects-continue--upload">${_i18N.translate("upload")}</button>
      </div>`;
    }
    /**
   * Renders the main container for the widget
   */ renderContainer() {
        if (this.container) this.container.innerHTML = `
      <div class="uppload-modal">
        <div class="processing-loader"></div>
        <aside style="display: none">
          ${this.getNavbar(true)}
        </aside>
        <section>
          ${this.error ? `<div class="uppload-error">${this.error}</div>` : ""}
          <div class="uppload-active-container"></div>
          <footer style="display: none" class="effects-nav">${this.getEffectsNavbar()}</footer>
        </section>
        <div class="uppload-help-loading">
          <div class="uppload-loader">
            <div></div>
            <p class="uppload-loader-text">${_i18N.translate("help.loading")}</p>
          </div>
        </div>
        <div class="uppload-help">
          <div><button><span>${_i18N.translate("help.close")}</span><span aria-hidden="true">&times;</span></button></div>
          <iframe></iframe>
        </div>
      </div>
      <div class="uppload-modal-bg">
        <button class="uppload-close" aria-label="${_i18N.translate("close")}">&times;</button>
      </div>
    `;
    }
    /**
   * Render the content inside the widget container
   */ render() {
        return `
      ${this.error ? `<div class="uppload-error">${this.error}</div>` : ""}
      ${this.activeEffect ? `<div class="uppload-effect uppload-effect--${this.activeEffect || "none"}">
      ${this.activeEffect && this.file ? this.renderActiveEffect(this.file) : ""}
    </div>` : `<div class="uppload-service uppload-service--${this.activeService}">
      ${this.activeEffect && this.file ? "" : this.renderActiveService()}
      ${this.activeService === "default" ? this.getNavbar() : ""}
    </div>`}`;
    }
    /**
   * Render the currently active service
   */ renderActiveService() {
        const activeServices = this.services.filter((service)=>service.name === this.activeService
        );
        if (activeServices.length) {
            const activeService = activeServices[0];
            requestAnimationFrame(()=>{
                if (typeof activeService.handlers === "function") activeService.handlers({
                    next: this.next.bind(this),
                    upload: this.upload.bind(this),
                    uploadMultiple: this.uploadMultiple.bind(this),
                    handle: this.handle.bind(this),
                    showHelp: this.showHelp.bind(this),
                    uppload: this,
                    translate: _i18N.translate
                });
            });
            return `${typeof activeService.template === "function" ? activeService.template({
                translate: _i18N.translate,
                uppload: this
            }) : ""}`;
        }
    }
    /**
   * Render the currently active effect
   */ renderActiveEffect(file) {
        const activeEffects = this.effects.filter((effect)=>effect.name === this.activeEffect
        );
        if (activeEffects.length) {
            const activeEffect = activeEffects[0];
            requestAnimationFrame(()=>{
                if (typeof activeEffect.handlers === "function") activeEffect.handlers({
                    next: this.next.bind(this),
                    upload: this.upload.bind(this),
                    uploadMultiple: this.uploadMultiple.bind(this),
                    handle: this.handle.bind(this),
                    showHelp: this.showHelp.bind(this),
                    uppload: this,
                    translate: _i18N.translate
                });
            });
            return `
        <div class="active-effect-container">${typeof activeEffect.template === "function" ? activeEffect.template({
                file,
                translate: _i18N.translate
            }) : ""}</div>
      `;
        }
    }
    /**
   * Uploads multiple files to the server
   * @param file
   * @returns JSON response from server
   */ uploadMultiple(file, metadata) {
        this.emitter.emit("before-upload");
        return new Promise((resolve)=>{
            this.navigate("uploading");
            if (this.uploader && typeof this.uploader === "function") this.uploader(file, metadata, this.updateProgress.bind(this)).then((response)=>{
                this.navigate("default");
                resolve(response);
                this.emitter.emit("upload", response);
                this.close();
            }).catch((error)=>this.handle(error)
            );
            else this.handle(new Error("no-uploader"));
        });
    }
    hideHelp() {
        const help = this.container.querySelector(".uppload-help");
        const helpLoading = this.container.querySelector(".uppload-help-loading");
        const sideNavbar = this.container.querySelector("aside");
        const section = this.container.querySelector("section");
        if (helpLoading) helpLoading.classList.remove("visible");
        if (help) help.classList.remove("visible");
        if (sideNavbar) sideNavbar.style.display = "";
        if (section) section.style.display = "";
        this.emitter.emit("hide-help");
    }
    /**
   * Show the help article for this plugin in a frame
   * @param url - URL of help webpage
   */ showHelp(url) {
        this.emitter.emit("help", url);
        const aside = this.container.querySelector("aside");
        if (aside) aside.style.display = "none";
        const section = this.container.querySelector("section");
        if (section) section.style.display = "none";
        const helpLoading = this.container.querySelector(".uppload-help-loading");
        if (helpLoading) helpLoading.classList.add("visible");
        const help = this.container.querySelector(".uppload-help");
        if (help) {
            const iframe = help.querySelector("iframe");
            if (iframe) {
                iframe.setAttribute("src", `https://uppload.js.org/help${url}`);
                let completed = false;
                const listener = ()=>{
                    completed = true;
                    help.classList.add("visible");
                    if (helpLoading) helpLoading.classList.remove("visible");
                };
                _elements.safeListen(iframe, "load", listener);
                _elements.safeListen(iframe, "error", ()=>{
                    completed = true;
                    this.hideHelp();
                });
            }
        }
    }
    /**
   * Updates the file and goes to the active effect
   * @param file - The currently active file Blob
   */ next(file) {
        this.emitter.emit("next", file);
        this.file = file;
        if (this.activeEffect) ;
        else {
            // Find the first effect and navigate to that
            // Unless the file type is not an image
            if (this.effects.length && file.type && file.type.indexOf("image/") === 0 && this.settings.skipEditMimes?.indexOf(file.type)) {
                this.activeEffect = this.effects[0].name;
                this.update();
            } else return this.upload(_files.safeUpploadFileToFile(file), file.metadata);
        }
        // Set active state to current effect
        const activeRadio = this.container.querySelector(`input[name='uppload-effect-radio'][value='${this.activeEffect}']`);
        if (activeRadio) activeRadio.setAttribute("checked", "checked");
    }
    compress(file) {
        if (this.settings.compressionFromMimes && this.settings.compressionFromMimes.indexOf(file.type) === -1) return new Promise((resolve)=>resolve(file)
        );
        if (typeof this.settings.compressor === "function") return this.settings.compressor(file);
        return _elements.compressImage(file, this.settings);
    }
    /**
   * Upload a file to the server
   * @param file - A Blob object containing the file to upload
   * @returns The file URL
   */ upload(file1, metadata) {
        this.emitter.emit("before-upload", file1);
        return new Promise((resolve, reject)=>{
            this.navigate("uploading");
            let upploadFile = _files.blobToUpploadFile(file1);
            try {
                if (typeof file1.name === "string") upploadFile = _files.blobToUpploadFile(file1, file1.name, file1.type, new Date(file1.lastModified));
            } catch (error1) {}
            if (this.uploader && typeof this.uploader === "function") this.compress(file1).then((file)=>{
                if (this.settings.compression) this.emitter.emit("compress", file);
                return file;
            }).then((blob)=>{
                upploadFile.blob = blob;
                return _files.safeUpploadFileToFile(upploadFile);
            }).then((file)=>this.uploader(file, metadata, this.updateProgress.bind(this))
            ).then((url)=>{
                this.bind(url);
                this.navigate("default");
                resolve(url);
                this.emitter.emit("upload", url);
                this.close();
            }).catch((error)=>this.handle(error)
            );
            else reject("no-uploader");
        });
    }
    /**
   * Gracefully display an error message
   * @param error - Error to display
   */ handle(error) {
        this.error = _i18N.translate(error.message) || error.message;
        this.emitter.emit("error", this.error);
        this.update();
        if (this.activeService === "uploading") this.navigate("default");
        setTimeout(()=>{
            this.error = undefined;
            this.update();
        }, 4000);
    }
    /**
   * Adds event handlers for the widget
   */ handlers() {
        const openFunction = ()=>this.open()
        ;
        const closeFunction = ()=>this.close()
        ;
        /**
     * Clicking on each sidebar link should open its service
     */ const defaultServiceLinks = this.container.querySelectorAll(".uppload-service--default .uppload-service-name button");
        defaultServiceLinks.forEach((link)=>{
            const linkFunction = (e)=>{
                const service = link.getAttribute("data-uppload-service");
                if (service) {
                    this.navigate(service);
                    const serviceDiv = this.container.querySelector(`[data-uppload-service="${service}"]`);
                    if (serviceDiv && serviceDiv.parentElement) {
                        let top = 0;
                        let left = 0;
                        const serviceDivRect = serviceDiv.getBoundingClientRect();
                        const serviceNavRect = serviceDiv.parentElement.getBoundingClientRect();
                        top = serviceDivRect.top - serviceNavRect.top;
                        left = serviceDivRect.left - serviceNavRect.left;
                        const aside = serviceDiv.parentElement.parentElement;
                        try {
                            // Edge doesn't support scrollTo and throws an error
                            if (aside) aside.scrollTo(left, top);
                        } catch (error) {}
                    }
                }
                const serviceRadio = this.container.querySelector(`input[type=radio][value='${service}']`);
                if (serviceRadio) serviceRadio.setAttribute("checked", "checked");
                e.preventDefault();
                return false;
            };
            _elements.safeListen(link, "click", linkFunction);
        });
        /**
     * Clicking on each sidebar link should open its service
     */ const inputRadios = this.container.querySelectorAll(".uppload-services input[type='radio']");
        inputRadios.forEach((radio)=>{
            const radioFunction = (e)=>{
                const inputRadio = this.container.querySelector("[name='uppload-radio']:checked");
                if (!inputRadio) return;
                const service = inputRadio.value;
                this.navigate(service);
            };
            _elements.safeListen(radio, "change", radioFunction);
        });
        /**
     * Clicking on each sidebar link should open its service
     */ const effectInputRadios = this.container.querySelectorAll(".effects-nav input[type='radio']");
        effectInputRadios.forEach((radio)=>{
            const radioFunction = (e)=>{
                const inputRadio = this.container.querySelector("[name='uppload-effect-radio']:checked");
                if (!inputRadio) return;
                const effect = inputRadio.value;
                this.activeEffect = effect;
                this.update();
            };
            _elements.safeListen(radio, "change", radioFunction);
        });
        /**
     * Clicking on the background should close the modal
     */ const background = this.container.querySelector(".uppload-modal-bg");
        const closeButton = this.container.querySelector(".uppload-close");
        if (background && !this.settings.disableModalClickClose) _elements.safeListen(background, "click", closeFunction);
        else if (closeButton) _elements.safeListen(closeButton, "click", closeFunction);
        /**
     * All elements in `call` should open the modal on click
     */ if (this.settings.call) {
            const elements = _elements.getElements(this.settings.call);
            elements.forEach((element)=>{
                _elements.safeListen(element, "click", openFunction);
            });
        }
        /**
     * Clicking on the cancel button restarts the process
     */ const cancelButton = this.container.querySelector(".effects-continue--cancel");
        if (cancelButton) _elements.safeListen(cancelButton, "click", ()=>{
            this.file = {
                blob: new Blob()
            };
            this.activeService = "default";
            this.activeEffect = "";
            this.update();
        });
        /**
     * Clicking on the cancel button restarts the process
     */ const uploadButton = this.container.querySelector(".effects-continue--upload");
        if (uploadButton) _elements.safeListen(uploadButton, "click", ()=>{
            if (!this.file) return;
            this.activeService = "";
            this.activeEffect = "";
            this.upload(_files.safeUpploadFileToFile(this.file), this.file.metadata);
        });
    }
    /**
   * Stops any actions being done by the currently active service
   * For example, if your webcame is being accessed, kill that process
   */ stopCurrentService() {
        const currentService = this.services.filter((item)=>item.name === this.activeService
        );
        if (currentService.length) {
            const service = currentService[0];
            service.stop();
            this.activeService = this.services[0].name;
        }
    }
    /**
   * Navigate to an Uppload service page
   * @param service - Slug name of service (e.g., instagram)
   */ navigate(service) {
        if (!this.services.filter((item)=>item.name === service
        ).length) throw new Error("invalid-service");
        this.stopCurrentService();
        this.activeService = service;
        this.update();
        const focusable = this.container.querySelector(".uppload-active-container input, .uppload-active-container button");
        if (focusable) focusable.focus();
    }
    /**
   * Add an event listener
   * @param type - Type of event listener (e.g., open)
   * @param handler - Event handler function
   */ on(type, handler) {
        return this.emitter.on(type, handler);
    }
    /**
   * Remove an event listener
   * @param type - Type of event listener (e.g., open)
   * @param handler - Event handler function
   */ off(type, handler) {
        return this.emitter.off(type, handler);
    }
    /**
   * Updates the upload progress
   * @param progressPercent Current progress in percent
   */ updateProgress(progressPercent) {
        this.uploadProgress = progressPercent;
        const progressText = this.container.querySelector(".uppload-loader-text .progress");
        if (progressText) progressText.innerHTML = `${parseInt(progressPercent.toString())}%`;
        this.emitter.emit("progress", this.updateProgress);
    }
}

},{"./service":"370pZ","./helpers/i18n":"ixaut","./helpers/elements":"etwNm","./helpers/assets":"7Jjd5","focus-trap":"5rAPa","mitt":"8Ql8z","./helpers/files":"5Dece","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5rAPa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createFocusTrap", ()=>createFocusTrap
);
/*!
* focus-trap 6.9.0
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/ var _tabbable = require("tabbable");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var activeFocusTraps = function() {
    var trapQueue = [];
    return {
        activateTrap: function activateTrap(trap) {
            if (trapQueue.length > 0) {
                var activeTrap = trapQueue[trapQueue.length - 1];
                if (activeTrap !== trap) activeTrap.pause();
            }
            var trapIndex = trapQueue.indexOf(trap);
            if (trapIndex === -1) trapQueue.push(trap);
            else {
                // move this existing trap to the front of the queue
                trapQueue.splice(trapIndex, 1);
                trapQueue.push(trap);
            }
        },
        deactivateTrap: function deactivateTrap(trap) {
            var trapIndex = trapQueue.indexOf(trap);
            if (trapIndex !== -1) trapQueue.splice(trapIndex, 1);
            if (trapQueue.length > 0) trapQueue[trapQueue.length - 1].unpause();
        }
    };
}();
var isSelectableInput = function isSelectableInput(node) {
    return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
};
var isEscapeEvent = function isEscapeEvent(e) {
    return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
};
var isTabEvent = function isTabEvent(e) {
    return e.key === 'Tab' || e.keyCode === 9;
};
var delay = function delay(fn) {
    return setTimeout(fn, 0);
}; // Array.find/findIndex() are not supported on IE; this replicates enough
//  of Array.findIndex() for our needs
var findIndex = function findIndex(arr, fn) {
    var idx = -1;
    arr.every(function(value, i) {
        if (fn(value)) {
            idx = i;
            return false; // break
        }
        return true; // next
    });
    return idx;
};
/**
 * Get an option's value when it could be a plain value, or a handler that provides
 *  the value.
 * @param {*} value Option's value to check.
 * @param {...*} [params] Any parameters to pass to the handler, if `value` is a function.
 * @returns {*} The `value`, or the handler's returned value.
 */ var valueOrHandler = function valueOrHandler(value) {
    for(var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)params[_key - 1] = arguments[_key];
    return typeof value === 'function' ? value.apply(void 0, params) : value;
};
var getActualTarget = function getActualTarget(event) {
    // NOTE: If the trap is _inside_ a shadow DOM, event.target will always be the
    //  shadow host. However, event.target.composedPath() will be an array of
    //  nodes "clicked" from inner-most (the actual element inside the shadow) to
    //  outer-most (the host HTML document). If we have access to composedPath(),
    //  then use its first element; otherwise, fall back to event.target (and
    //  this only works for an _open_ shadow DOM; otherwise,
    //  composedPath()[0] === event.target always).
    return event.target.shadowRoot && typeof event.composedPath === 'function' ? event.composedPath()[0] : event.target;
};
var createFocusTrap = function createFocusTrap(elements, userOptions) {
    // SSR: a live trap shouldn't be created in this type of environment so this
    //  should be safe code to execute if the `document` option isn't specified
    var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;
    var config = _objectSpread2({
        returnFocusOnDeactivate: true,
        escapeDeactivates: true,
        delayInitialFocus: true
    }, userOptions);
    var state = {
        // containers given to createFocusTrap()
        // @type {Array<HTMLElement>}
        containers: [],
        // list of objects identifying tabbable nodes in `containers` in the trap
        // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
        //  is active, but the trap should never get to a state where there isn't at least one group
        //  with at least one tabbable node in it (that would lead to an error condition that would
        //  result in an error being thrown)
        // @type {Array<{
        //   container: HTMLElement,
        //   tabbableNodes: Array<HTMLElement>, // empty if none
        //   focusableNodes: Array<HTMLElement>, // empty if none
        //   firstTabbableNode: HTMLElement|null,
        //   lastTabbableNode: HTMLElement|null,
        //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
        // }>}
        containerGroups: [],
        // same order/length as `containers` list
        // references to objects in `containerGroups`, but only those that actually have
        //  tabbable nodes in them
        // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
        //  the same length
        tabbableGroups: [],
        nodeFocusedBeforeActivation: null,
        mostRecentlyFocusedNode: null,
        active: false,
        paused: false,
        // timer ID for when delayInitialFocus is true and initial focus in this trap
        //  has been delayed during activation
        delayInitialFocusTimer: undefined
    };
    var trap; // eslint-disable-line prefer-const -- some private functions reference it, and its methods reference private functions, so we must declare here and define later
    /**
   * Gets a configuration option value.
   * @param {Object|undefined} configOverrideOptions If true, and option is defined in this set,
   *  value will be taken from this object. Otherwise, value will be taken from base configuration.
   * @param {string} optionName Name of the option whose value is sought.
   * @param {string|undefined} [configOptionName] Name of option to use __instead of__ `optionName`
   *  IIF `configOverrideOptions` is not defined. Otherwise, `optionName` is used.
   */ var getOption = function getOption(configOverrideOptions, optionName, configOptionName) {
        return configOverrideOptions && configOverrideOptions[optionName] !== undefined ? configOverrideOptions[optionName] : config[configOptionName || optionName];
    };
    /**
   * Finds the index of the container that contains the element.
   * @param {HTMLElement} element
   * @returns {number} Index of the container in either `state.containers` or
   *  `state.containerGroups` (the order/length of these lists are the same); -1
   *  if the element isn't found.
   */ var findContainerIndex = function findContainerIndex(element) {
        // NOTE: search `containerGroups` because it's possible a group contains no tabbable
        //  nodes, but still contains focusable nodes (e.g. if they all have `tabindex=-1`)
        //  and we still need to find the element in there
        return state.containerGroups.findIndex(function(_ref) {
            var container = _ref.container, tabbableNodes = _ref.tabbableNodes;
            return container.contains(element) || //  web components if the `tabbableOptions.getShadowRoot` option was used for
            //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
            //  look inside web components even if open)
            tabbableNodes.find(function(node) {
                return node === element;
            });
        });
    };
    /**
   * Gets the node for the given option, which is expected to be an option that
   *  can be either a DOM node, a string that is a selector to get a node, `false`
   *  (if a node is explicitly NOT given), or a function that returns any of these
   *  values.
   * @param {string} optionName
   * @returns {undefined | false | HTMLElement | SVGElement} Returns
   *  `undefined` if the option is not specified; `false` if the option
   *  resolved to `false` (node explicitly not given); otherwise, the resolved
   *  DOM node.
   * @throws {Error} If the option is set, not `false`, and is not, or does not
   *  resolve to a node.
   */ var getNodeForOption = function getNodeForOption(optionName) {
        var optionValue = config[optionName];
        if (typeof optionValue === 'function') {
            for(var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)params[_key2 - 1] = arguments[_key2];
            optionValue = optionValue.apply(void 0, params);
        }
        if (!optionValue) {
            if (optionValue === undefined || optionValue === false) return optionValue;
             // else, empty string (invalid), null (invalid), 0 (invalid)
            throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
        }
        var node = optionValue; // could be HTMLElement, SVGElement, or non-empty string at this point
        if (typeof optionValue === 'string') {
            node = doc.querySelector(optionValue); // resolve to node, or null if fails
            if (!node) throw new Error("`".concat(optionName, "` as selector refers to no known node"));
        }
        return node;
    };
    var getInitialFocusNode = function getInitialFocusNode() {
        var node = getNodeForOption('initialFocus'); // false explicitly indicates we want no initialFocus at all
        if (node === false) return false;
        if (node === undefined) {
            // option not specified: use fallback options
            if (findContainerIndex(doc.activeElement) >= 0) node = doc.activeElement;
            else {
                var firstTabbableGroup = state.tabbableGroups[0];
                var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode; // NOTE: `fallbackFocus` option function cannot return `false` (not supported)
                node = firstTabbableNode || getNodeForOption('fallbackFocus');
            }
        }
        if (!node) throw new Error('Your focus-trap needs to have at least one focusable element');
        return node;
    };
    var updateTabbableNodes = function updateTabbableNodes() {
        state.containerGroups = state.containers.map(function(container) {
            var tabbableNodes = _tabbable.tabbable(container, config.tabbableOptions); // NOTE: if we have tabbable nodes, we must have focusable nodes; focusable nodes
            //  are a superset of tabbable nodes
            var focusableNodes = _tabbable.focusable(container, config.tabbableOptions);
            return {
                container: container,
                tabbableNodes: tabbableNodes,
                focusableNodes: focusableNodes,
                firstTabbableNode: tabbableNodes.length > 0 ? tabbableNodes[0] : null,
                lastTabbableNode: tabbableNodes.length > 0 ? tabbableNodes[tabbableNodes.length - 1] : null,
                /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */ nextTabbableNode: function nextTabbableNode(node) {
                    var forward = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                    // NOTE: If tabindex is positive (in order to manipulate the tab order separate
                    //  from the DOM order), this __will not work__ because the list of focusableNodes,
                    //  while it contains tabbable nodes, does not sort its nodes in any order other
                    //  than DOM order, because it can't: Where would you place focusable (but not
                    //  tabbable) nodes in that order? They have no order, because they aren't tabbale...
                    // Support for positive tabindex is already broken and hard to manage (possibly
                    //  not supportable, TBD), so this isn't going to make things worse than they
                    //  already are, and at least makes things better for the majority of cases where
                    //  tabindex is either 0/unset or negative.
                    // FYI, positive tabindex issue: https://github.com/focus-trap/focus-trap/issues/375
                    var nodeIdx = focusableNodes.findIndex(function(n) {
                        return n === node;
                    });
                    if (nodeIdx < 0) return undefined;
                    if (forward) return focusableNodes.slice(nodeIdx + 1).find(function(n) {
                        return _tabbable.isTabbable(n, config.tabbableOptions);
                    });
                    return focusableNodes.slice(0, nodeIdx).reverse().find(function(n) {
                        return _tabbable.isTabbable(n, config.tabbableOptions);
                    });
                }
            };
        });
        state.tabbableGroups = state.containerGroups.filter(function(group) {
            return group.tabbableNodes.length > 0;
        }); // throw if no groups have tabbable nodes and we don't have a fallback focus node either
        if (state.tabbableGroups.length <= 0 && !getNodeForOption('fallbackFocus') // returning false not supported for this option
        ) throw new Error('Your focus-trap must have at least one container with at least one tabbable node in it at all times');
    };
    var tryFocus1 = function tryFocus(node) {
        if (node === false) return;
        if (node === doc.activeElement) return;
        if (!node || !node.focus) {
            tryFocus(getInitialFocusNode());
            return;
        }
        node.focus({
            preventScroll: !!config.preventScroll
        });
        state.mostRecentlyFocusedNode = node;
        if (isSelectableInput(node)) node.select();
    };
    var getReturnFocusNode = function getReturnFocusNode(previousActiveElement) {
        var node = getNodeForOption('setReturnFocus', previousActiveElement);
        return node ? node : node === false ? false : previousActiveElement;
    }; // This needs to be done on mousedown and touchstart instead of click
    // so that it precedes the focus event.
    var checkPointerDown = function checkPointerDown(e) {
        var target = getActualTarget(e);
        if (findContainerIndex(target) >= 0) // allow the click since it ocurred inside the trap
        return;
        if (valueOrHandler(config.clickOutsideDeactivates, e)) {
            // immediately deactivate the trap
            trap.deactivate({
                // if, on deactivation, we should return focus to the node originally-focused
                //  when the trap was activated (or the configured `setReturnFocus` node),
                //  then assume it's also OK to return focus to the outside node that was
                //  just clicked, causing deactivation, as long as that node is focusable;
                //  if it isn't focusable, then return focus to the original node focused
                //  on activation (or the configured `setReturnFocus` node)
                // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
                //  which will result in the outside click setting focus to the node
                //  that was clicked, whether it's focusable or not; by setting
                //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
                //  on activation (or the configured `setReturnFocus` node)
                returnFocus: config.returnFocusOnDeactivate && !_tabbable.isFocusable(target, config.tabbableOptions)
            });
            return;
        } // This is needed for mobile devices.
        // (If we'll only let `click` events through,
        // then on mobile they will be blocked anyways if `touchstart` is blocked.)
        if (valueOrHandler(config.allowOutsideClick, e)) // allow the click outside the trap to take place
        return;
         // otherwise, prevent the click
        e.preventDefault();
    }; // In case focus escapes the trap for some strange reason, pull it back in.
    var checkFocusIn = function checkFocusIn(e) {
        var target = getActualTarget(e);
        var targetContained = findContainerIndex(target) >= 0; // In Firefox when you Tab out of an iframe the Document is briefly focused.
        if (targetContained || target instanceof Document) {
            if (targetContained) state.mostRecentlyFocusedNode = target;
        } else {
            // escaped! pull it back in to where it just left
            e.stopImmediatePropagation();
            tryFocus1(state.mostRecentlyFocusedNode || getInitialFocusNode());
        }
    }; // Hijack Tab events on the first and last focusable nodes of the trap,
    // in order to prevent focus from escaping. If it escapes for even a
    // moment it can end up scrolling the page and causing confusion so we
    // kind of need to capture the action at the keydown phase.
    var checkTab = function checkTab(e) {
        var target = getActualTarget(e);
        updateTabbableNodes();
        var destinationNode = null;
        if (state.tabbableGroups.length > 0) {
            // make sure the target is actually contained in a group
            // NOTE: the target may also be the container itself if it's focusable
            //  with tabIndex='-1' and was given initial focus
            var containerIndex = findContainerIndex(target);
            var containerGroup = containerIndex >= 0 ? state.containerGroups[containerIndex] : undefined;
            if (containerIndex < 0) {
                // target not found in any group: quite possible focus has escaped the trap,
                //  so bring it back in to...
                if (e.shiftKey) // ...the last node in the last group
                destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
                else // ...the first node in the first group
                destinationNode = state.tabbableGroups[0].firstTabbableNode;
            } else if (e.shiftKey) {
                // REVERSE
                // is the target the first tabbable node in a group?
                var startOfGroupIndex = findIndex(state.tabbableGroups, function(_ref2) {
                    var firstTabbableNode = _ref2.firstTabbableNode;
                    return target === firstTabbableNode;
                });
                if (startOfGroupIndex < 0 && (containerGroup.container === target || _tabbable.isFocusable(target, config.tabbableOptions) && !_tabbable.isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target, false))) // an exception case where the target is either the container itself, or
                //  a non-tabbable node that was given focus (i.e. tabindex is negative
                //  and user clicked on it or node was programmatically given focus)
                //  and is not followed by any other tabbable node, in which
                //  case, we should handle shift+tab as if focus were on the container's
                //  first tabbable node, and go to the last tabbable node of the LAST group
                startOfGroupIndex = containerIndex;
                if (startOfGroupIndex >= 0) {
                    // YES: then shift+tab should go to the last tabbable node in the
                    //  previous group (and wrap around to the last tabbable node of
                    //  the LAST group if it's the first tabbable node of the FIRST group)
                    var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
                    var destinationGroup = state.tabbableGroups[destinationGroupIndex];
                    destinationNode = destinationGroup.lastTabbableNode;
                }
            } else {
                // FORWARD
                // is the target the last tabbable node in a group?
                var lastOfGroupIndex = findIndex(state.tabbableGroups, function(_ref3) {
                    var lastTabbableNode = _ref3.lastTabbableNode;
                    return target === lastTabbableNode;
                });
                if (lastOfGroupIndex < 0 && (containerGroup.container === target || _tabbable.isFocusable(target, config.tabbableOptions) && !_tabbable.isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target))) // an exception case where the target is the container itself, or
                //  a non-tabbable node that was given focus (i.e. tabindex is negative
                //  and user clicked on it or node was programmatically given focus)
                //  and is not followed by any other tabbable node, in which
                //  case, we should handle tab as if focus were on the container's
                //  last tabbable node, and go to the first tabbable node of the FIRST group
                lastOfGroupIndex = containerIndex;
                if (lastOfGroupIndex >= 0) {
                    // YES: then tab should go to the first tabbable node in the next
                    //  group (and wrap around to the first tabbable node of the FIRST
                    //  group if it's the last tabbable node of the LAST group)
                    var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
                    var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
                    destinationNode = _destinationGroup.firstTabbableNode;
                }
            }
        } else // NOTE: the fallbackFocus option does not support returning false to opt-out
        destinationNode = getNodeForOption('fallbackFocus');
        if (destinationNode) {
            e.preventDefault();
            tryFocus1(destinationNode);
        } // else, let the browser take care of [shift+]tab and move the focus
    };
    var checkKey = function checkKey(e) {
        if (isEscapeEvent(e) && valueOrHandler(config.escapeDeactivates, e) !== false) {
            e.preventDefault();
            trap.deactivate();
            return;
        }
        if (isTabEvent(e)) {
            checkTab(e);
            return;
        }
    };
    var checkClick = function checkClick(e) {
        var target = getActualTarget(e);
        if (findContainerIndex(target) >= 0) return;
        if (valueOrHandler(config.clickOutsideDeactivates, e)) return;
        if (valueOrHandler(config.allowOutsideClick, e)) return;
        e.preventDefault();
        e.stopImmediatePropagation();
    }; //
    // EVENT LISTENERS
    //
    var addListeners = function addListeners() {
        if (!state.active) return;
         // There can be only one listening focus trap at a time
        activeFocusTraps.activateTrap(trap); // Delay ensures that the focused element doesn't capture the event
        // that caused the focus trap activation.
        state.delayInitialFocusTimer = config.delayInitialFocus ? delay(function() {
            tryFocus1(getInitialFocusNode());
        }) : tryFocus1(getInitialFocusNode());
        doc.addEventListener('focusin', checkFocusIn, true);
        doc.addEventListener('mousedown', checkPointerDown, {
            capture: true,
            passive: false
        });
        doc.addEventListener('touchstart', checkPointerDown, {
            capture: true,
            passive: false
        });
        doc.addEventListener('click', checkClick, {
            capture: true,
            passive: false
        });
        doc.addEventListener('keydown', checkKey, {
            capture: true,
            passive: false
        });
        return trap;
    };
    var removeListeners = function removeListeners() {
        if (!state.active) return;
        doc.removeEventListener('focusin', checkFocusIn, true);
        doc.removeEventListener('mousedown', checkPointerDown, true);
        doc.removeEventListener('touchstart', checkPointerDown, true);
        doc.removeEventListener('click', checkClick, true);
        doc.removeEventListener('keydown', checkKey, true);
        return trap;
    }; //
    // TRAP DEFINITION
    //
    trap = {
        get active () {
            return state.active;
        },
        get paused () {
            return state.paused;
        },
        activate: function activate(activateOptions) {
            if (state.active) return this;
            var onActivate = getOption(activateOptions, 'onActivate');
            var onPostActivate = getOption(activateOptions, 'onPostActivate');
            var checkCanFocusTrap = getOption(activateOptions, 'checkCanFocusTrap');
            if (!checkCanFocusTrap) updateTabbableNodes();
            state.active = true;
            state.paused = false;
            state.nodeFocusedBeforeActivation = doc.activeElement;
            if (onActivate) onActivate();
            var finishActivation = function finishActivation() {
                if (checkCanFocusTrap) updateTabbableNodes();
                addListeners();
                if (onPostActivate) onPostActivate();
            };
            if (checkCanFocusTrap) {
                checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
                return this;
            }
            finishActivation();
            return this;
        },
        deactivate: function deactivate(deactivateOptions) {
            if (!state.active) return this;
            var options = _objectSpread2({
                onDeactivate: config.onDeactivate,
                onPostDeactivate: config.onPostDeactivate,
                checkCanReturnFocus: config.checkCanReturnFocus
            }, deactivateOptions);
            clearTimeout(state.delayInitialFocusTimer); // noop if undefined
            state.delayInitialFocusTimer = undefined;
            removeListeners();
            state.active = false;
            state.paused = false;
            activeFocusTraps.deactivateTrap(trap);
            var onDeactivate = getOption(options, 'onDeactivate');
            var onPostDeactivate = getOption(options, 'onPostDeactivate');
            var checkCanReturnFocus = getOption(options, 'checkCanReturnFocus');
            var returnFocus = getOption(options, 'returnFocus', 'returnFocusOnDeactivate');
            if (onDeactivate) onDeactivate();
            var finishDeactivation = function finishDeactivation() {
                delay(function() {
                    if (returnFocus) tryFocus1(getReturnFocusNode(state.nodeFocusedBeforeActivation));
                    if (onPostDeactivate) onPostDeactivate();
                });
            };
            if (returnFocus && checkCanReturnFocus) {
                checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
                return this;
            }
            finishDeactivation();
            return this;
        },
        pause: function pause() {
            if (state.paused || !state.active) return this;
            state.paused = true;
            removeListeners();
            return this;
        },
        unpause: function unpause() {
            if (!state.paused || !state.active) return this;
            state.paused = false;
            updateTabbableNodes();
            addListeners();
            return this;
        },
        updateContainerElements: function updateContainerElements(containerElements) {
            var elementsAsArray = [].concat(containerElements).filter(Boolean);
            state.containers = elementsAsArray.map(function(element) {
                return typeof element === 'string' ? doc.querySelector(element) : element;
            });
            if (state.active) updateTabbableNodes();
            return this;
        }
    }; // initialize container elements
    trap.updateContainerElements(elements);
    return trap;
};

},{"tabbable":"fdNns","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fdNns":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "focusable", ()=>focusable
);
parcelHelpers.export(exports, "isFocusable", ()=>isFocusable
);
parcelHelpers.export(exports, "isTabbable", ()=>isTabbable
);
parcelHelpers.export(exports, "tabbable", ()=>tabbable
);
/*!
* tabbable 5.3.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/ var candidateSelectors = [
    'input',
    'select',
    'textarea',
    'a[href]',
    'button',
    '[tabindex]:not(slot)',
    'audio[controls]',
    'video[controls]',
    '[contenteditable]:not([contenteditable="false"])',
    'details>summary:first-of-type',
    'details'
];
var candidateSelector = /* #__PURE__ */ candidateSelectors.join(',');
var NoElement = typeof Element === 'undefined';
var matches = NoElement ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
    return element.getRootNode();
} : function(element) {
    return element.ownerDocument;
};
/**
 * @param {Element} el container to check in
 * @param {boolean} includeContainer add container to check
 * @param {(node: Element) => boolean} filter filter candidates
 * @returns {Element[]}
 */ var getCandidates = function getCandidates(el, includeContainer, filter) {
    var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
    if (includeContainer && matches.call(el, candidateSelector)) candidates.unshift(el);
    candidates = candidates.filter(filter);
    return candidates;
};
/**
 * @callback GetShadowRoot
 * @param {Element} element to check for shadow root
 * @returns {ShadowRoot|boolean} ShadowRoot if available or boolean indicating if a shadowRoot is attached but not available.
 */ /**
 * @typedef {Object} CandidatesScope
 * @property {Element} scope contains inner candidates
 * @property {Element[]} candidates
 */ /**
 * @typedef {Object} IterativeOptions
 * @property {GetShadowRoot|boolean} getShadowRoot true if shadow support is enabled; falsy if not;
 *  if a function, implies shadow support is enabled and either returns the shadow root of an element
 *  or a boolean stating if it has an undisclosed shadow root
 * @property {(node: Element) => boolean} filter filter candidates
 * @property {boolean} flatten if true then result will flatten any CandidatesScope into the returned list
 */ /**
 * @param {Element[]} elements list of element containers to match candidates from
 * @param {boolean} includeContainer add container list to check
 * @param {IterativeOptions} options
 * @returns {Array.<Element|CandidatesScope>}
 */ var getCandidatesIteratively = function getCandidatesIteratively1(elements, includeContainer, options) {
    var candidates = [];
    var elementsToCheck = Array.from(elements);
    while(elementsToCheck.length){
        var element = elementsToCheck.shift();
        if (element.tagName === 'SLOT') {
            // add shadow dom slot scope (slot itself cannot be focusable)
            var assigned = element.assignedElements();
            var content = assigned.length ? assigned : element.children;
            var nestedCandidates = getCandidatesIteratively1(content, true, options);
            if (options.flatten) candidates.push.apply(candidates, nestedCandidates);
            else candidates.push({
                scope: element,
                candidates: nestedCandidates
            });
        } else {
            // check candidate element
            var validCandidate = matches.call(element, candidateSelector);
            if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) candidates.push(element);
             // iterate over shadow content if possible
            var shadowRoot = element.shadowRoot || typeof options.getShadowRoot === 'function' && options.getShadowRoot(element);
            if (shadowRoot) {
                // add shadow dom scope IIF a shadow root node was given; otherwise, an undisclosed
                //  shadow exists, so look at light dom children as fallback BUT create a scope for any
                //  child candidates found because they're likely slotted elements (elements that are
                //  children of the web component element (which has the shadow), in the light dom, but
                //  slotted somewhere _inside_ the undisclosed shadow) -- the scope is created below,
                //  _after_ we return from this recursive call
                var _nestedCandidates = getCandidatesIteratively1(shadowRoot === true ? element.children : shadowRoot.children, true, options);
                if (options.flatten) candidates.push.apply(candidates, _nestedCandidates);
                else candidates.push({
                    scope: element,
                    candidates: _nestedCandidates
                });
            } else // there's not shadow so just dig into the element's (light dom) children
            //  __without__ giving the element special scope treatment
            elementsToCheck.unshift.apply(elementsToCheck, element.children);
        }
    }
    return candidates;
};
var getTabindex = function getTabindex(node, isScope) {
    if (node.tabIndex < 0) {
        // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
        // `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
        // yet they are still part of the regular tab order; in FF, they get a default
        // `tabIndex` of 0; since Chrome still puts those elements in the regular tab
        // order, consider their tab index to be 0.
        // Also browsers do not return `tabIndex` correctly for contentEditable nodes;
        // so if they don't have a tabindex attribute specifically set, assume it's 0.
        //
        // isScope is positive for custom element with shadow root or slot that by default
        // have tabIndex -1, but need to be sorted by document order in order for their
        // content to be inserted in the correct position
        if ((isScope || /^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || node.isContentEditable) && isNaN(parseInt(node.getAttribute('tabindex'), 10))) return 0;
    }
    return node.tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
    return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput(node) {
    return node.tagName === 'INPUT';
};
var isHiddenInput = function isHiddenInput(node) {
    return isInput(node) && node.type === 'hidden';
};
var isDetailsWithSummary = function isDetailsWithSummary(node) {
    var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function(child) {
        return child.tagName === 'SUMMARY';
    });
    return r;
};
var getCheckedRadio = function getCheckedRadio(nodes, form) {
    for(var i = 0; i < nodes.length; i++){
        if (nodes[i].checked && nodes[i].form === form) return nodes[i];
    }
};
var isTabbableRadio = function isTabbableRadio(node) {
    if (!node.name) return true;
    var radioScope = node.form || getRootNode(node);
    var queryRadios = function queryRadios(name) {
        return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
    };
    var radioSet;
    if (typeof window !== 'undefined' && typeof window.CSS !== 'undefined' && typeof window.CSS.escape === 'function') radioSet = queryRadios(window.CSS.escape(node.name));
    else try {
        radioSet = queryRadios(node.name);
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s', err.message);
        return false;
    }
    var checked = getCheckedRadio(radioSet, node.form);
    return !checked || checked === node;
};
var isRadio = function isRadio(node) {
    return isInput(node) && node.type === 'radio';
};
var isNonTabbableRadio = function isNonTabbableRadio(node) {
    return isRadio(node) && !isTabbableRadio(node);
};
var isZeroArea = function isZeroArea(node) {
    var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
    return width === 0 && height === 0;
};
var isHidden = function isHidden(node, _ref) {
    var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
    if (getComputedStyle(node).visibility === 'hidden') return true;
    var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
    var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
    if (matches.call(nodeUnderDetails, 'details:not([open]) *')) return true;
    if (!displayCheck || displayCheck === 'full') {
        if (typeof getShadowRoot === 'function') {
            // figure out if we should consider the node to be in an undisclosed shadow and use the
            //  'non-zero-area' fallback
            var originalNode = node;
            while(node){
                var parentElement = node.parentElement;
                var rootNode = getRootNode(node);
                if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true // check if there's an undisclosed shadow
                ) // node has an undisclosed shadow which means we can only treat it as a black box, so we
                //  fall back to a non-zero-area test
                return isZeroArea(node);
                else if (node.assignedSlot) // iterate up slot
                node = node.assignedSlot;
                else if (!parentElement && rootNode !== node.ownerDocument) // cross shadow boundary
                node = rootNode.host;
                else // iterate up normal dom
                node = parentElement;
            }
            node = originalNode;
        } // else, `getShadowRoot` might be true, but all that does is enable shadow DOM support
        //  (i.e. it does not also presume that all nodes might have undisclosed shadows); or
        //  it might be a falsy value, which means shadow DOM support is disabled
        // didn't find it sitting in an undisclosed shadow (or shadows are disabled) so now we
        //  can just test to see if it would normally be visible or not
        // this works wherever the node is: if there's at least one client rect, it's
        //  somehow displayed; it also covers the CSS 'display: contents' case where the
        //  node itself is hidden in place of its contents; and there's no need to search
        //  up the hierarchy either
        return !node.getClientRects().length;
    } else if (displayCheck === 'non-zero-area') return isZeroArea(node);
    return false;
}; // form fields (nested) inside a disabled fieldset are not focusable/tabbable
//  unless they are in the _first_ <legend> element of the top-most disabled
//  fieldset
var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
        var parentNode = node.parentElement; // check if `node` is contained in a disabled <fieldset>
        while(parentNode){
            if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
                // look for the first <legend> among the children of the disabled <fieldset>
                for(var i = 0; i < parentNode.children.length; i++){
                    var child = parentNode.children.item(i); // when the first <legend> (in document order) is found
                    if (child.tagName === 'LEGEND') // if its parent <fieldset> is not nested in another disabled <fieldset>,
                    // return whether `node` is a descendant of its first <legend>
                    return matches.call(parentNode, 'fieldset[disabled] *') ? true : !child.contains(node);
                } // the disabled <fieldset> containing `node` has no <legend>
                return true;
            }
            parentNode = parentNode.parentElement;
        }
    } // else, node's tabbable/focusable state should not be affected by a fieldset's
    //  enabled/disabled state
    return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
    if (node.disabled || isHiddenInput(node) || isHidden(node, options) || isDetailsWithSummary(node) || isDisabledFromFieldset(node)) return false;
    return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
    if (isNonTabbableRadio(node) || getTabindex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) return false;
    return true;
};
/**
 * @param {Array.<Element|CandidatesScope>} candidates
 * @returns Element[]
 */ var sortByOrder = function sortByOrder1(candidates) {
    var regularTabbables = [];
    var orderedTabbables = [];
    candidates.forEach(function(item, i) {
        var isScope = !!item.scope;
        var element = isScope ? item.scope : item;
        var candidateTabindex = getTabindex(element, isScope);
        var elements = isScope ? sortByOrder1(item.candidates) : element;
        if (candidateTabindex === 0) isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
        else orderedTabbables.push({
            documentOrder: i,
            tabIndex: candidateTabindex,
            item: item,
            isScope: isScope,
            content: elements
        });
    });
    return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
        sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
        return acc;
    }, []).concat(regularTabbables);
};
var tabbable = function tabbable(el, options) {
    options = options || {};
    var candidates;
    if (options.getShadowRoot) candidates = getCandidatesIteratively([
        el
    ], options.includeContainer, {
        filter: isNodeMatchingSelectorTabbable.bind(null, options),
        flatten: false,
        getShadowRoot: options.getShadowRoot
    });
    else candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
    return sortByOrder(candidates);
};
var focusable = function focusable(el, options) {
    options = options || {};
    var candidates;
    if (options.getShadowRoot) candidates = getCandidatesIteratively([
        el
    ], options.includeContainer, {
        filter: isNodeMatchingSelectorFocusable.bind(null, options),
        flatten: true,
        getShadowRoot: options.getShadowRoot
    });
    else candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
    return candidates;
};
var isTabbable = function isTabbable(node, options) {
    options = options || {};
    if (!node) throw new Error('No node provided');
    if (matches.call(node, candidateSelector) === false) return false;
    return isNodeMatchingSelectorTabbable(options, node);
};
var focusableCandidateSelector = /* #__PURE__ */ candidateSelectors.concat('iframe').join(',');
var isFocusable = function isFocusable(node, options) {
    options = options || {};
    if (!node) throw new Error('No node provided');
    if (matches.call(node, focusableCandidateSelector) === false) return false;
    return isNodeMatchingSelectorFocusable(options, node);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Ql8z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(n1) {
    return {
        all: n1 = n1 || new Map,
        on: function(t, e) {
            var i = n1.get(t);
            i ? i.push(e) : n1.set(t, [
                e
            ]);
        },
        off: function(t, e) {
            var i = n1.get(t);
            i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n1.set(t, []));
        },
        emit: function(t, e) {
            var i = n1.get(t);
            i && i.slice().map(function(n) {
                n(e);
            }), (i = n1.get("*")) && i.slice().map(function(n) {
                n(t, e);
            });
        }
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dZQXp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9CWgD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "de", ()=>_de.de
);
parcelHelpers.export(exports, "en", ()=>_en.en
);
parcelHelpers.export(exports, "es", ()=>_es.es
);
parcelHelpers.export(exports, "fr", ()=>_fr.fr
);
parcelHelpers.export(exports, "hi", ()=>_hi.hi
);
parcelHelpers.export(exports, "it", ()=>_it.it
);
parcelHelpers.export(exports, "nl", ()=>_nl.nl
);
parcelHelpers.export(exports, "pt", ()=>_pt.pt
);
parcelHelpers.export(exports, "ro", ()=>_ro.ro
);
parcelHelpers.export(exports, "ru", ()=>_ru.ru
);
parcelHelpers.export(exports, "tr", ()=>_tr.tr
);
parcelHelpers.export(exports, "zhTW", ()=>_zhTW.zhTW
);
var _de = require("./de");
var _en = require("./en");
var _es = require("./es");
var _fr = require("./fr");
var _hi = require("./hi");
var _it = require("./it");
var _nl = require("./nl");
var _pt = require("./pt");
var _ro = require("./ro");
var _ru = require("./ru");
var _tr = require("./tr");
var _zhTW = require("./zh-TW");

},{"./de":"jhOyk","./en":"5oSTt","./es":"chHct","./fr":"f82I6","./hi":"8pIKo","./it":"aDJkQ","./nl":"iVNuw","./pt":"6eOTd","./ro":"fUinl","./ru":"9tUnp","./tr":"jQLvA","./zh-TW":"b6pHu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jhOyk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "de", ()=>de
);
const de = {
    upload: "Hochladen",
    cancel: "Abbrechen",
    close: "Schließen",
    uploading: "Hochladen ...",
    uploaded: "Hochgeladen",
    fetching: "Bild abrufen von $1$ ...",
    poweredBy: "Ermöglicht durch $1$",
    needHelp: "Benötigen Sie Hilfe?",
    units: {
        px: "px",
        "%": "%",
        deg: "°"
    },
    errors: {
        response_not_ok: "Beim Abrufen dieser Datei ist ein Fehler aufgetreten",
        unable_to_search: "Bei der Suche ist ein Fehler aufgetreten",
        invalid_service_url: "Dies ist keine $1$ -URL",
        invalid_url: "Diese URL ist ungültig",
        upload_aborted: "Dein Upload wurde abgebrochen",
        upload_error: "Beim Hochladen dieser Datei ist ein Fehler aufgetreten",
        file_type_not_allowed: "Dieser Dateityp wird nicht unterstützt",
        file_too_large: "Die Datei muss kleiner als $1$ sein"
    },
    help: {
        loading: "Ladehilfe...",
        close: "Hilfe schließen"
    },
    services: {
        default: {
            heading: "Wählen Sie ein Bild aus"
        },
        local: {
            title: "Wählen Sie eine Datei",
            button: "Wählen Sie eine Datei aus",
            or: "oder",
            drop: "Ziehen Sie eine Datei hierher, um sie hochzuladen"
        },
        camera: {
            title: "Kamera",
            button: "Webcam Foto",
            switch: "Kamera wechseln",
            waiting: "Warten auf Kameraerlaubnis ...",
            unableToRead: "Wir können das Video nicht von Ihrer Kamera lesen. Dies kann daran liegen, dass Sie nicht die erforderliche Berechtigung erteilt haben oder dass Ihr Gerät den Kamerazugriff nicht unterstützt."
        },
        microlink: {
            button: "Import von $1$",
            label: "$1$ $2$ URL",
            placeholder: "Geben Sie eine URL von 1 bis 2 US-Dollar ein",
            type: "Post"
        },
        url: {
            title: "Direkte URL",
            label: "Bild-URL",
            placeholder: "Geben Sie eine Bild-URL ein"
        },
        instagram: {
            title: "Instagram"
        },
        facebook: {
            title: "Facebook"
        },
        flickr: {
            title: "Flickr",
            type: "ein foto"
        },
        ninegag: {
            title: "9GAG",
            type: "ein foto"
        },
        deviantart: {
            title: "DeviantArt"
        },
        artstation: {
            title: "ArtStation"
        },
        twitter: {
            title: "Twitter",
            type: "Foto-Tweet"
        },
        pinterest: {
            title: "Pinterest",
            type: "Stift"
        },
        flipboard: {
            title: "Flipboard",
            type: "artikel"
        },
        fotki: {
            title: "Fotos",
            type: "ein foto"
        },
        linkedin: {
            title: "LinkedIn"
        },
        reddit: {
            title: "Reddit"
        },
        tumblr: {
            title: "Tumblr"
        },
        weheartit: {
            title: "Wir lieben es"
        },
        screenshot: {
            title: "Bildschirmfoto",
            button: "Screenshot machen",
            label: "URL der Webseite",
            placeholder: "Geben Sie eine URL ein",
            loading: "Machen Sie einen Screenshot ..."
        },
        search: {
            button: "Suchen Sie nach $1$",
            label: "Suchen Sie nach einem Bild",
            placeholder: "Suche nach etwas",
            imagesPoweredBy: "Bilder möglich gemacht von $1$"
        },
        giphy: {
            title: "GIPHY"
        },
        unsplash: {
            title: "Aufspritzen"
        },
        pixabay: {
            title: "Pixabay"
        },
        pexels: {
            title: "Pexels"
        }
    },
    effects: {
        preview: {
            title: "Beispiel"
        },
        filters: {
            title: "Filter"
        },
        crop: {
            title: "Zuschneiden",
            aspectRatios: {
                free: "Frei",
                square: "Quadratisch"
            }
        },
        rotate: {
            title: "Drehen"
        },
        flip: {
            title: "Spiegeln",
            buttons: {
                horizontal: "Horizontal",
                vertical: "Vertikal"
            }
        },
        sharpen: {
            title: "Schärfen"
        },
        blur: {
            title: "Unschärfe"
        },
        brightness: {
            title: "Helligkeit"
        },
        contrast: {
            title: "Kontrast"
        },
        grayscale: {
            title: "Graustufen"
        },
        "hue-rotate": {
            title: "Farbton drehen"
        },
        invert: {
            title: "Invertieren"
        },
        saturate: {
            title: "Sättigen"
        },
        sepia: {
            title: "Sepia"
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5oSTt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "en", ()=>en
);
const en = {
    upload: "Upload",
    cancel: "Cancel",
    close: "Close",
    uploading: "Uploading...",
    uploaded: "Uploaded",
    fetching: "Getting your image from $1$...",
    poweredBy: "Powered by $1$",
    needHelp: "Need help?",
    units: {
        px: "px",
        "%": "%",
        deg: "°"
    },
    errors: {
        response_not_ok: "We got an error fetching this file",
        unable_to_search: "We got an error searching",
        invalid_service_url: "This is not $A$ $1$ URL",
        invalid_url: "This URL seems to be invalid",
        upload_aborted: "Your upload was cancelled",
        upload_error: "We got an error uploading this file",
        file_type_not_allowed: "This file type is not allowed",
        file_too_large: "Your file should be smaller than $1$"
    },
    help: {
        loading: "Loading help...",
        close: "Close help"
    },
    services: {
        default: {
            heading: "Select an image"
        },
        local: {
            title: "Choose file",
            button: "Select a file",
            or: "or",
            drop: "Drop files here"
        },
        camera: {
            title: "Camera",
            button: "Click photo",
            switch: "Switch camera",
            waiting: "Waiting for permission...",
            unableToRead: "We're not able to read your camera's video. This may be because you didn't grant the required permission, or because your camera is in use by another application."
        },
        microlink: {
            button: "Import from $1$",
            label: "$1$ $2$ URL",
            placeholder: "Enter $A$ $1$ $2$ URL",
            type: "post"
        },
        url: {
            title: "Direct URL",
            label: "Image URL",
            placeholder: "Enter an image URL"
        },
        instagram: {
            title: "Instagram"
        },
        facebook: {
            title: "Facebook"
        },
        flickr: {
            title: "Flickr",
            type: "photo"
        },
        ninegag: {
            title: "9GAG",
            type: "photo"
        },
        deviantart: {
            title: "DeviantArt"
        },
        artstation: {
            title: "ArtStation"
        },
        twitter: {
            title: "Twitter",
            type: "image tweet"
        },
        pinterest: {
            title: "Pinterest",
            type: "pin"
        },
        flipboard: {
            title: "Flipboard",
            type: "article"
        },
        fotki: {
            title: "Fotki",
            type: "photo"
        },
        linkedin: {
            title: "LinkedIn"
        },
        reddit: {
            title: "Reddit"
        },
        tumblr: {
            title: "Tumblr"
        },
        weheartit: {
            title: "We Heart It"
        },
        screenshot: {
            title: "Screenshot",
            button: "Take screenshot",
            label: "Webpage URL",
            placeholder: "Enter a webpage URL",
            loading: "Taking a screenshot..."
        },
        search: {
            button: "Search on $1$",
            label: "Find an image",
            placeholder: "Search for something",
            imagesPoweredBy: "Images powered by $1$"
        },
        giphy: {
            title: "GIPHY"
        },
        unsplash: {
            title: "Unsplash"
        },
        pixabay: {
            title: "Pixabay"
        },
        pexels: {
            title: "Pexels"
        }
    },
    effects: {
        preview: {
            title: "Preview"
        },
        filters: {
            title: "Filters"
        },
        crop: {
            title: "Crop",
            aspectRatios: {
                free: "Free",
                square: "Square"
            }
        },
        rotate: {
            title: "Rotate"
        },
        flip: {
            title: "Flip",
            buttons: {
                horizontal: "Horizontal",
                vertical: "Vertical"
            }
        },
        sharpen: {
            title: "Sharpen"
        },
        blur: {
            title: "Blur"
        },
        brightness: {
            title: "Brightness"
        },
        contrast: {
            title: "Contrast"
        },
        grayscale: {
            title: "Grayscale"
        },
        "hue-rotate": {
            title: "Hue rotate"
        },
        invert: {
            title: "Invert"
        },
        saturate: {
            title: "Saturate"
        },
        sepia: {
            title: "Sepia"
        }
    },
    /**
   * Helpers can transform a string before returning it
   * You can define a language-specific helper here
   */ helper: (text)=>{
        // Replace all instances of $A$ with "a" or "an"
        const AAN = "$A$";
        while(text.indexOf(AAN) !== -1){
            const index = text.indexOf(AAN);
            if (text.length > index + 3) {
                if ([
                    "a",
                    "e",
                    "i",
                    "o",
                    "u"
                ].indexOf(text[index + 4].toLowerCase()) !== -1) text = text.replace(AAN, "an");
                else text = text.replace(AAN, "a");
            }
        }
        return text;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"chHct":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "es", ()=>es
);
const es = {
    upload: "Subir",
    cancel: "Cancelar",
    close: "Cerrar",
    uploading: "Subiendo...",
    uploaded: "Subido",
    fetching: "Obteniendo imagen desde $1$ ...",
    poweredBy: "Hecho posible por $1$",
    needHelp: "¿Necesitas ayuda?",
    units: {
        px: "px",
        "%": "%",
        deg: "°"
    },
    errors: {
        response_not_ok: "Se produjo un error al obtener este archivo",
        unable_to_search: "Se produjo un error al buscar",
        invalid_service_url: "Esta no es una URL de $1$",
        invalid_url: "Esta URL no es válida.",
        upload_aborted: "Tu carga ha sido cancelada",
        upload_error: "Se produjo un error al subir este archivo",
        file_type_not_allowed: "Este tipo de archivo no está permitido",
        file_too_large: "El archivo debe ser inferior a $1$"
    },
    help: {
        loading: "Cargando ayuda...",
        close: "Cerrar ayuda"
    },
    services: {
        default: {
            heading: "Selecciona una imagen"
        },
        local: {
            title: "Elige un archivo",
            button: "Selecciona un archivo",
            or: "o",
            drop: "Arrastra un archivo aquí para subir"
        },
        camera: {
            title: "Cámara",
            button: "Foto de la webcam",
            switch: "Cambiar de cámara",
            waiting: "Esperando el permiso de la cámara...",
            unableToRead: "No podemos leer el video de su cámara. Esto puede deberse a que no ha otorgado el permiso requerido o porque su dispositivo no admite el acceso a la cámara."
        },
        microlink: {
            button: "Importar desde $1$",
            label: "$1$ $2$ URL",
            placeholder: "Ingrese una URL de $1$ $2$",
            type: "enviar"
        },
        url: {
            title: "URL directa",
            label: "URL de la imagen",
            placeholder: "Ingrese la URL de la imagen"
        },
        instagram: {
            title: "Instagram"
        },
        facebook: {
            title: "Facebook"
        },
        flickr: {
            title: "Flickr",
            type: "una foto"
        },
        ninegag: {
            title: "9GAG",
            type: "una foto"
        },
        deviantart: {
            title: "DeviantArt"
        },
        artstation: {
            title: "ArtStation"
        },
        twitter: {
            title: "Twitter",
            type: "imagen de twitter"
        },
        pinterest: {
            title: "Pinterest",
            type: "pin"
        },
        flipboard: {
            title: "Flipboard",
            type: "artículo"
        },
        fotki: {
            title: "fotos",
            type: "una foto"
        },
        linkedin: {
            title: "LinkedIn"
        },
        reddit: {
            title: "Reddit"
        },
        tumblr: {
            title: "Tumblr"
        },
        weheartit: {
            title: "We Heart It"
        },
        screenshot: {
            title: "Captura de pantalla",
            button: "Tomar captura de pantalla",
            label: "URL de la página web",
            placeholder: "Ingresa una URL",
            loading: "Tomando una captura de pantalla ..."
        },
        search: {
            button: "Buscar en $1$",
            label: "Busca una imagen",
            placeholder: "Buscar algo",
            imagesPoweredBy: "Imágenes posibles por $1$"
        },
        giphy: {
            title: "GIPHY"
        },
        unsplash: {
            title: "Unsplash"
        },
        pixabay: {
            title: "Pixabay"
        },
        pexels: {
            title: "Pexels"
        }
    },
    effects: {
        preview: {
            title: "Vista Previa"
        },
        filters: {
            title: "Filtros"
        },
        crop: {
            title: "Recortar",
            aspectRatios: {
                free: "Libre",
                square: "Cuadrado"
            }
        },
        rotate: {
            title: "Rotar"
        },
        flip: {
            title: "Dar vuelta",
            buttons: {
                horizontal: "Horizontal",
                vertical: "Vertical"
            }
        },
        sharpen: {
            title: "Agudizar"
        },
        blur: {
            title: "Desenfocar"
        },
        brightness: {
            title: "Brillo"
        },
        contrast: {
            title: "Contraste"
        },
        grayscale: {
            title: "Escala de grises"
        },
        "hue-rotate": {
            title: "Rotar tono"
        },
        invert: {
            title: "Invertir"
        },
        saturate: {
            title: "Saturar"
        },
        sepia: {
            title: "Sepia"
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f82I6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fr", ()=>fr
);
const fr = {
    upload: "Télécharger",
    cancel: "Annuler",
    close: "Fermer",
    uploading: "Télécharger...",
    uploaded: "Téléchargé",
    fetching: "Obtenir une image à partir de $1$ ...",
    poweredBy: "Rendu possible par $1$",
    needHelp: "Besoin d'aide?",
    units: {
        px: "px",
        "%": "%",
        deg: "°"
    },
    errors: {
        response_not_ok: "Une erreur s'est produite lors de la récupération de ce fichier.",
        unable_to_search: "Une erreur est survenue lors de la recherche",
        invalid_service_url: "Ce n'est pas une URL $1$",
        invalid_url: "Cette URL est invalide",
        upload_aborted: "Votre téléchargement a été annulé",
        upload_error: "Une erreur s'est produite lors du téléchargement de ce fichier.",
        file_type_not_allowed: "Ce type de fichier n'est pas supporté",
        file_too_large: "Le fichier doit être inférieur à $1$"
    },
    help: {
        loading: "Aide au chargement...",
        close: "Fermer l'aide"
    },
    services: {
        default: {
            heading: "Sélectionnez une image"
        },
        local: {
            title: "Choisissez un fichier",
            button: "Sélectionnez un fichier",
            or: "de",
            drop: "Faites glisser un fichier ici pour le télécharger"
        },
        camera: {
            title: "Caméra",
            button: "Photo webcam",
            switch: "Changer de caméra",
            waiting: "En attente de la permission de la caméra ...",
            unableToRead: "Nous ne pouvons pas lire la vidéo à partir de votre caméra. Cela peut être dû au fait que vous n'avez pas accordé l'autorisation requise ou que votre appareil ne prend pas en charge l'accès à la caméra."
        },
        microlink: {
            button: "Importation à partir de $1$",
            label: "$1$ $2$ URL",
            placeholder: "Entrez une URL $1$ $2$",
            type: "poster"
        },
        url: {
            title: "Directe URL",
            label: "URL de l'image",
            placeholder: "Entrez une URL d'image"
        },
        instagram: {
            title: "Instagram"
        },
        facebook: {
            title: "Facebook"
        },
        flickr: {
            title: "Flickr",
            type: "une photo"
        },
        ninegag: {
            title: "9GAG",
            type: "une photo"
        },
        deviantart: {
            title: "DeviantArt"
        },
        artstation: {
            title: "ArtStation"
        },
        twitter: {
            title: "Gazouillement",
            type: "photo tweet"
        },
        pinterest: {
            title: "Pinterest",
            type: "épingle"
        },
        flipboard: {
            title: "Flipboard",
            type: "article"
        },
        fotki: {
            title: "Photos",
            type: "une photo"
        },
        linkedin: {
            title: "LinkedIn"
        },
        reddit: {
            title: "Reddit"
        },
        tumblr: {
            title: "Tumblr"
        },
        weheartit: {
            title: "Nous avons le coeur"
        },
        screenshot: {
            title: "Capture d'écran",
            button: "Prendre une capture d'écran",
            label: "URL de la page Web",
            placeholder: "Entrez une URL",
            loading: "Prenez une capture d'écran ..."
        },
        search: {
            button: "Recherche de $1$",
            label: "Rechercher une image",
            placeholder: "Rechercher quelque chose",
            imagesPoweredBy: "Images rendues possibles par $1$"
        },
        giphy: {
            title: "GIPHY"
        },
        unsplash: {
            title: "Unsplash"
        },
        pixabay: {
            title: "Pixabay"
        },
        pexels: {
            title: "Pexels"
        }
    },
    effects: {
        preview: {
            title: "Exemple"
        },
        filters: {
            title: "Les filtres"
        },
        crop: {
            title: "Récolte",
            aspectRatios: {
                free: "Libre",
                square: "Plein"
            }
        },
        rotate: {
            title: "Tournant"
        },
        flip: {
            title: "Faire demi-tour",
            buttons: {
                horizontal: "Horizontal",
                vertical: "Vertical"
            }
        },
        sharpen: {
            title: "Netteté"
        },
        blur: {
            title: "Flou"
        },
        brightness: {
            title: "La luminosité"
        },
        contrast: {
            title: "Contraste"
        },
        grayscale: {
            title: "Niveaux de gris"
        },
        "hue-rotate": {
            title: "Faire pivoter la teinte"
        },
        invert: {
            title: "Retourner"
        },
        saturate: {
            title: "Saturer"
        },
        sepia: {
            title: "Sépia"
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8pIKo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hi", ()=>hi
);
const hi = {
    upload: "अपलोड",
    cancel: "रद्द करना",
    close: "बंद करे",
    uploading: "अपलोड हो रहा है...",
    uploaded: "अपलोड हो गया",
    fetching: "हम आपकी तस्वीर $1$ से ला रहे हैं...",
    poweredBy: "$1$ द्वारा संचालित",
    needHelp: "मदद चाहिए?",
    units: {
        px: "पिक्सेल",
        "%": "प्रतिशत",
        deg: "डिग्री"
    },
    errors: {
        response_not_ok: "आपकी फ़ाइल लाने में एक त्रुटि हुई",
        unable_to_search: "ढूंढे में एक त्रुटि हुई",
        invalid_service_url: "यह एक $1$ यूआरएल नहीं है",
        invalid_url: "यह यूआरएल गलत है",
        upload_aborted: "आपका अपलोड रद्द हो गया है",
        upload_error: "आपका अपलोड कारसे टूट एक त्रुटि हुई",
        file_type_not_allowed: "यह फाइल टाइप अनुमति नहीं हैं",
        file_too_large: "आपकी फाइल $1$ से छोटी होनी चाहिए"
    },
    help: {
        loading: "मदद लोड हो रही है...",
        close: "मदद बंद करें"
    },
    services: {
        default: {
            heading: "एक तस्वीर चुनें"
        },
        local: {
            title: "एक फाइल चुनें",
            button: "फाइल चुनें",
            or: "या",
            drop: "यहां फाइल छोड़ें"
        },
        camera: {
            title: "कैमरा",
            button: "तस्वीर खीचें",
            switch: "कैमरा बदलें",
            waiting: "अनुमति की प्रतीक्षा की जा रही है...",
            unableToRead: "हम आपका वीडियो नहीं पढ़ पा रहे हैं I यह इसीलिए हो सकता है क्यूंकि आपने अनुमति नहीं दी, या क्योंकि आपके युक्ति में कैमरा नहीं है I"
        },
        microlink: {
            button: "$1$ से आयात",
            label: "$1$ $2$ यूआरएल",
            placeholder: "एक $1$ $2$ यूआरएल दर्ज करें",
            type: "पद"
        },
        url: {
            title: "यूआरएल",
            label: "छवि यूआरएल",
            placeholder: "एक छवि यूआरएल दर्ज करें"
        },
        instagram: {
            title: "इंस्टाग्राम"
        },
        facebook: {
            title: "फेसबुक"
        },
        flickr: {
            title: "फ़्लिकर",
            type: "तस्वीर"
        },
        ninegag: {
            title: "नाइन गैग",
            type: "तस्वीर"
        },
        deviantart: {
            title: "देवीअनत-आर्ट"
        },
        artstation: {
            title: "आर्ट-स्टेशन"
        },
        twitter: {
            title: "ट्विटर",
            type: "तस्वीर ट्वीट"
        },
        pinterest: {
            title: "पिनटेरेस्ट",
            type: "पिन"
        },
        flipboard: {
            title: "फ्लिपबोर्ड",
            type: "लेख"
        },
        fotki: {
            title: "फोटकी",
            type: "तस्वीर"
        },
        linkedin: {
            title: "लिंक्ड-इन"
        },
        reddit: {
            title: "रेड्डिट"
        },
        tumblr: {
            title: "तुमब्लर"
        },
        weheartit: {
            title: "वी हार्ट इट"
        },
        screenshot: {
            title: "स्क्रीनशॉट",
            button: "स्क्रीनशॉट लें",
            label: "वेब पृष्ठ यूआरएल",
            placeholder: "एक वेब पृष्ठ यूआरएल दर्ज करें",
            loading: "स्क्रीनशॉट लिया जा रहा है..."
        },
        search: {
            button: "$1$ पर ढूंढें",
            label: "तस्वीर ढूंढें",
            placeholder: "कुछ ढूंढें",
            imagesPoweredBy: "तस्वीरें $1$ द्वारा संचालित"
        },
        giphy: {
            title: "गिफी"
        },
        unsplash: {
            title: "उनस्प्लैश"
        },
        pixabay: {
            title: "पिक्साबे"
        },
        pexels: {
            title: "पिक्सेल्स"
        }
    },
    effects: {
        preview: {
            title: "पूर्वावलोकन"
        },
        filters: {
            title: "फ़िल्टर"
        },
        crop: {
            title: "क्रॉप",
            aspectRatios: {
                free: "फ़्री",
                square: "वर्ग"
            }
        },
        rotate: {
            title: "घुमाएँ"
        },
        flip: {
            title: "फ्लिप",
            buttons: {
                horizontal: "क्षैतिज",
                vertical: "खड़ा"
            }
        },
        sharpen: {
            title: "पैना"
        },
        blur: {
            title: "कलंक"
        },
        brightness: {
            title: "चमक"
        },
        contrast: {
            title: "कंट्रास्ट"
        },
        grayscale: {
            title: "ग्रेस्केल"
        },
        "hue-rotate": {
            title: "रंग घुमाना"
        },
        invert: {
            title: "रंग पलटना"
        },
        saturate: {
            title: "सैच्युरेट"
        },
        sepia: {
            title: "सीपिया"
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aDJkQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "it", ()=>it
);
const it = {
    upload: "Caricare",
    cancel: "Annulla",
    close: "Vicino",
    uploading: "Carica ...",
    uploaded: "caricato",
    fetching: "Ottieni immagine da $1$ ...",
    poweredBy: "Reso possibile da $1$",
    needHelp: "Hai bisogno di aiuto?",
    units: {
        px: "px",
        "%": "%",
        deg: "°"
    },
    errors: {
        response_not_ok: "Si è verificato un errore durante il recupero di questo file",
        unable_to_search: "Si è verificato un errore durante la ricerca",
        invalid_service_url: "Questo non è un $1$ URL",
        invalid_url: "Questo URL non è valido",
        upload_aborted: "Il tuo caricamento è stato annullato",
        upload_error: "Si è verificato un errore durante il caricamento di questo file",
        file_type_not_allowed: "Questo tipo di file non è supportato",
        file_too_large: "Il file deve essere inferiore a $1$"
    },
    help: {
        loading: "Caricamento della guida...",
        close: "Aiuto vicino"
    },
    services: {
        default: {
            heading: "Seleziona un'immagine"
        },
        local: {
            title: "Scegli un file",
            button: "Seleziona un file",
            or: "di",
            drop: "Trascina qui un file per caricarlo"
        },
        camera: {
            title: "telecamera",
            button: "Foto della webcam",
            switch: "Cambia fotocamera",
            waiting: "In attesa di autorizzazione della fotocamera ...",
            unableToRead: "Non possiamo leggere il video dalla tua fotocamera. Ciò può essere dovuto al fatto che non hai concesso l'autorizzazione richiesta o perché il tuo dispositivo non supporta l'accesso alla videocamera."
        },
        microlink: {
            button: "Importa da $1$",
            label: "$1$ $2$ URL",
            placeholder: "Inserisci un URL da $1$ $2$",
            type: "inviare"
        },
        url: {
            title: "URL diretto",
            label: "URL immagine",
            placeholder: "Inserisci un URL immagine"
        },
        instagram: {
            title: "Instagram"
        },
        facebook: {
            title: "Facebook"
        },
        flickr: {
            title: "Flickr",
            type: "una foto"
        },
        ninegag: {
            title: "9GAG",
            type: "una foto"
        },
        deviantart: {
            title: "DeviantArt"
        },
        artstation: {
            title: "ArtStation"
        },
        twitter: {
            title: "cinguettio",
            type: "tweet fotografico"
        },
        pinterest: {
            title: "Pinterest",
            type: "perno"
        },
        flipboard: {
            title: "Flipboard",
            type: "articolo"
        },
        fotki: {
            title: "foto",
            type: "una foto"
        },
        linkedin: {
            title: "LinkedIn"
        },
        reddit: {
            title: "Reddit"
        },
        tumblr: {
            title: "Tumblr"
        },
        weheartit: {
            title: "We Heart It"
        },
        screenshot: {
            title: "Immagine dello schermo",
            button: "Fai uno screenshot",
            label: "URL della pagina web",
            placeholder: "Inserisci un URL",
            loading: "Fai uno screenshot ..."
        },
        search: {
            button: "Cerca $1$",
            label: "Cerca un'immagine",
            placeholder: "Cerca qualcosa",
            imagesPoweredBy: "Immagini rese possibili da $1$"
        },
        giphy: {
            title: "GIPHY"
        },
        unsplash: {
            title: "Unsplash"
        },
        pixabay: {
            title: "Pixabay"
        },
        pexels: {
            title: "Pexels"
        }
    },
    effects: {
        preview: {
            title: "esempio"
        },
        filters: {
            title: "filtri"
        },
        crop: {
            title: "raccolto",
            aspectRatios: {
                free: "Gratuito",
                square: "pieno"
            }
        },
        rotate: {
            title: "torcere"
        },
        flip: {
            title: "Voltati",
            buttons: {
                horizontal: "orizzontale",
                vertical: "verticale"
            }
        },
        sharpen: {
            title: "affinare"
        },
        blur: {
            title: "dissolvenza"
        },
        brightness: {
            title: "luminosità"
        },
        contrast: {
            title: "Contrasto"
        },
        grayscale: {
            title: "Scala di grigi"
        },
        "hue-rotate": {
            title: "Ruota tonalità"
        },
        invert: {
            title: "Girare"
        },
        saturate: {
            title: "satiate"
        },
        sepia: {
            title: "nero di seppia"
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iVNuw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nl", ()=>nl
);
const nl = {
    upload: "Uploaden",
    cancel: "Annuleren",
    close: "Sluiten",
    uploading: "Uploaden...",
    uploaded: "Geupload",
    fetching: "Bezig met het ophalen van afbeelding vanaf $1$...",
    poweredBy: "Mede mogelijk gemaakt door $1$",
    needHelp: "Hulp nodig?",
    units: {
        px: "px",
        "%": "%",
        deg: "°"
    },
    errors: {
        response_not_ok: "Er is een fout opgetreden bij het ophalen van dit bestand",
        unable_to_search: "Er is een fout opgetreden bij het zoeken",
        invalid_service_url: "Dit is geen $1$-URL",
        invalid_url: "Deze URL is ongeldig",
        upload_aborted: "Je upload is geannuleerd",
        upload_error: "Er is een fout opgetreden bij het uploaden van dit bestand",
        file_type_not_allowed: "Dit bestandstype wordt niet ondersteund",
        file_too_large: "Het bestand moet kleiner zijn dan $1$"
    },
    help: {
        loading: "Bezig met het laden van hulp...",
        close: "Hulp sluiten"
    },
    services: {
        default: {
            heading: "Selecteer een afbeelding"
        },
        local: {
            title: "Kies een bestand",
            button: "Selecteer een bestand",
            or: "of",
            drop: "Sleep hier een bestand om te uploaden"
        },
        camera: {
            title: "Camera",
            button: "Webcam foto",
            switch: "Switch camera",
            waiting: "Wachten op camera permissie...",
            unableToRead: "We kunnen de video van uw camera niet lezen. Dit kan zijn omdat u niet de vereiste toestemming hebt verleend of omdat uw apparaat geen cameratoegang ondersteunt."
        },
        microlink: {
            button: "Importeer van $1$",
            label: "$1$ $2$ URL",
            placeholder: "Voer een $1$-$2$-URL in",
            type: "post"
        },
        url: {
            title: "Directe URL",
            label: "Afbeeldings-URL",
            placeholder: "Voer een afbeeldings-URL in"
        },
        instagram: {
            title: "Instagram"
        },
        facebook: {
            title: "Facebook"
        },
        flickr: {
            title: "Flickr",
            type: "foto"
        },
        ninegag: {
            title: "9GAG",
            type: "foto"
        },
        deviantart: {
            title: "DeviantArt"
        },
        artstation: {
            title: "ArtStation"
        },
        twitter: {
            title: "Twitter",
            type: "foto tweet"
        },
        pinterest: {
            title: "Pinterest",
            type: "pin"
        },
        flipboard: {
            title: "Flipboard",
            type: "artikel"
        },
        fotki: {
            title: "Fotki",
            type: "foto"
        },
        linkedin: {
            title: "LinkedIn"
        },
        reddit: {
            title: "Reddit"
        },
        tumblr: {
            title: "Tumblr"
        },
        weheartit: {
            title: "We Heart It"
        },
        screenshot: {
            title: "Screenshot",
            button: "Screenshot maken",
            label: "URL van webpagina",
            placeholder: "Voer een URL in",
            loading: "Bezig met het maken van een screenshot..."
        },
        search: {
            button: "Zoeken op $1$",
            label: "Zoek een afbeelding",
            placeholder: "Zoek naar iets",
            imagesPoweredBy: "Afbeeldingen mogelijk gemaakt door $1$"
        },
        giphy: {
            title: "GIPHY"
        },
        unsplash: {
            title: "Unsplash"
        },
        pixabay: {
            title: "Pixabay"
        },
        pexels: {
            title: "Pexels"
        }
    },
    effects: {
        preview: {
            title: "Voorbeeld"
        },
        filters: {
            title: "Filters"
        },
        crop: {
            title: "Bijsnijden",
            aspectRatios: {
                free: "Free",
                square: "Plein"
            }
        },
        rotate: {
            title: "Draaien"
        },
        flip: {
            title: "Omdraaien",
            buttons: {
                horizontal: "Horizontaal",
                vertical: "Verticaal"
            }
        },
        sharpen: {
            title: "Verscherpen"
        },
        blur: {
            title: "Vervagen"
        },
        brightness: {
            title: "Helderheid"
        },
        contrast: {
            title: "Contrast"
        },
        grayscale: {
            title: "Grijstinten"
        },
        "hue-rotate": {
            title: "Tint roteren"
        },
        invert: {
            title: "Omkeren"
        },
        saturate: {
            title: "Verzadigen"
        },
        sepia: {
            title: "Sepia"
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6eOTd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pt", ()=>pt
);
const pt = {
    upload: "Enviar",
    cancel: "Cancelar",
    close: "Fechar",
    uploading: "Enviando...",
    uploaded: "Enviado",
    fetching: "Buscando imagem de $1$...",
    poweredBy: "Fornecido por $1$",
    needHelp: "Precisa de ajuda?",
    units: {
        px: "px",
        "%": "%",
        deg: "°"
    },
    errors: {
        response_not_ok: "Ocorreu um erro ao buscar este arquivo",
        unable_to_search: "Não foi possível realizar a busca",
        invalid_service_url: "Esta URL não pertence a $1$",
        invalid_url: "Esta URL parece ser inválida",
        upload_aborted: "Seu envio foi cancelado",
        upload_error: "Ocorreu um erro durante o envio deste arquivo",
        file_type_not_allowed: "Este tipo de arquivo não é permitido",
        file_too_large: "Seu arquivo deve ser menor que $1$"
    },
    help: {
        loading: "Carregando ajuda...",
        close: "Fechar Ajuda"
    },
    services: {
        default: {
            heading: "Selecione uma imagem"
        },
        local: {
            title: "Escolher arquivo",
            button: "Selecione um arquivo",
            or: "ou",
            drop: "Arraste-os para cá"
        },
        camera: {
            title: "Câmera",
            button: "Tirar foto",
            switch: "Mudar câmera",
            waiting: "Esperando a permissão...",
            unableToRead: "Não foi possível obter acesso a câmera. Isto pode ter ocorrido se você não tiver permitido ou seu dispositivo suportar acesso a câmera."
        },
        microlink: {
            button: "Importar $1$",
            label: "$2$ do $1$",
            placeholder: "Insira a URL do $2$ do $1$",
            type: "post"
        },
        url: {
            title: "URL",
            label: "URL da imagem",
            placeholder: "Insira a URL da imagem"
        },
        instagram: {
            title: "Instagram"
        },
        facebook: {
            title: "Facebook"
        },
        flickr: {
            title: "Flickr",
            type: "foto"
        },
        ninegag: {
            title: "9GAG",
            type: "foto"
        },
        deviantart: {
            title: "DeviantArt"
        },
        artstation: {
            title: "ArtStation"
        },
        twitter: {
            title: "Twitter",
            type: "tweet"
        },
        pinterest: {
            title: "Pinterest",
            type: "pin"
        },
        flipboard: {
            title: "Flipboard",
            type: "artigo"
        },
        fotki: {
            title: "Fotki",
            type: "foto"
        },
        linkedin: {
            title: "LinkedIn"
        },
        reddit: {
            title: "Reddit"
        },
        tumblr: {
            title: "Tumblr"
        },
        weheartit: {
            title: "We Heart It"
        },
        screenshot: {
            title: "Captura de tela (screenshot)",
            button: "Fazer captura da tela",
            label: "URL do site",
            placeholder: "Insira a URL do site",
            loading: "Fazendo captura..."
        },
        search: {
            button: "Pesquisar no $1$",
            label: "Procure uma imagem",
            placeholder: "Procurar algo",
            imagesPoweredBy: "Busca de imagens fornecida por $1$"
        },
        giphy: {
            title: "GIPHY"
        },
        unsplash: {
            title: "Unsplash"
        },
        pixabay: {
            title: "Pixabay"
        },
        pexels: {
            title: "Pexels"
        }
    },
    effects: {
        preview: {
            title: "Previsualização"
        },
        filters: {
            title: "Filtros"
        },
        crop: {
            title: "Corte",
            aspectRatios: {
                free: "Livre",
                square: "Quadrado"
            }
        },
        rotate: {
            title: "Rotacionar"
        },
        flip: {
            title: "Inverter",
            buttons: {
                horizontal: "Horizontal",
                vertical: "Vertical"
            }
        },
        sharpen: {
            title: "Aguçar"
        },
        blur: {
            title: "Desfocar"
        },
        brightness: {
            title: "Brilho"
        },
        contrast: {
            title: "Contraste"
        },
        grayscale: {
            title: "Escala de cinza"
        },
        "hue-rotate": {
            title: "Matiz"
        },
        invert: {
            title: "Inverter"
        },
        saturate: {
            title: "Saturar"
        },
        sepia: {
            title: "Sépia"
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fUinl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ro", ()=>ro
);
const ro = {
    upload: "Încărcare",
    cancel: "Anulare",
    close: "Închide",
    uploading: "Încărcare...",
    uploaded: "Încărcat",
    fetching: "Obținere imagine de la $1$...",
    poweredBy: "Susținut de $1$",
    needHelp: "Ai nevoie de ajutor?",
    units: {
        px: "px",
        "%": "%",
        deg: "°"
    },
    errors: {
        response_not_ok: "S-a produs o eroare in timpul obținerii acestui fișier",
        unable_to_search: "S-a produs o eroare in timpul căutării",
        invalid_service_url: "Acesta nu este un URL de $1$",
        invalid_url: "Acest URL nu este valid",
        upload_aborted: "Încărcare a fost anulată",
        upload_error: "S-a produs o eroare in timpul încărcarii acestui fișier",
        file_type_not_allowed: "Acest tip de fișier nu este permis.",
        file_too_large: "Fișierul trebuie să fie mai mic de $1$"
    },
    help: {
        loading: "Se obține ajutor...",
        close: "Închidere ajutor"
    },
    services: {
        default: {
            heading: "Selectează o imagine"
        },
        local: {
            title: "Alege un fișier",
            button: "Selectează un fișier",
            or: "ori",
            drop: "Plasați fișierele aici"
        },
        camera: {
            title: "Cameră",
            button: "Capturează o imagine",
            switch: "Schimbă camera",
            waiting: "Se așteaptă permisiunea...",
            unableToRead: "Nu putem să citim semnalul video al camerei. Acest lucru se poate întâmpla pentru că nu ați acordat permisiunea necesară sau pentru că dispozitivul dvs. nu acceptă accesul camerei."
        },
        microlink: {
            button: "Importă de pe $1$",
            label: "$1$ $2$ URL",
            placeholder: "Tastează $1$ $2$ URL",
            type: "trimite"
        },
        url: {
            title: "URL direct",
            label: "URL imagine",
            placeholder: "Tastează URL-ul imaginii"
        },
        instagram: {
            title: "Instagram"
        },
        facebook: {
            title: "Facebook"
        },
        flickr: {
            title: "Flickr",
            type: "fotografie"
        },
        ninegag: {
            title: "9GAG",
            type: "fotografie"
        },
        deviantart: {
            title: "DeviantArt"
        },
        artstation: {
            title: "ArtStation"
        },
        twitter: {
            title: "Twitter",
            type: "tweet imagine"
        },
        pinterest: {
            title: "Pinterest",
            type: "pin"
        },
        flipboard: {
            title: "Flipboard",
            type: "articol"
        },
        fotki: {
            title: "Fotki",
            type: "fotografie"
        },
        linkedin: {
            title: "LinkedIn"
        },
        reddit: {
            title: "Reddit"
        },
        tumblr: {
            title: "Tumblr"
        },
        weheartit: {
            title: "We Heart It"
        },
        screenshot: {
            title: "Captură de ecran",
            button: "Capturează ecran",
            label: "URL pagină web",
            placeholder: "Tastează URL-ul imaginii",
            loading: "Se capturează ecranul..."
        },
        search: {
            button: "Caută pe $1$",
            label: "Găsește o imagine",
            placeholder: "Caută ceva",
            imagesPoweredBy: "Imagini provenite de la $1$"
        },
        giphy: {
            title: "GIPHY"
        },
        unsplash: {
            title: "Unsplash"
        },
        pixabay: {
            title: "Pixabay"
        },
        pexels: {
            title: "Pexels"
        }
    },
    effects: {
        preview: {
            title: "Previzualizare"
        },
        filters: {
            title: "Filtre"
        },
        crop: {
            title: "Decupare",
            aspectRatios: {
                free: "Liber",
                square: "Pătrat"
            }
        },
        rotate: {
            title: "Rotire"
        },
        flip: {
            title: "Oglindire",
            buttons: {
                horizontal: "Orizontal",
                vertical: "Vertical"
            }
        },
        sharpen: {
            title: "Accentuare"
        },
        blur: {
            title: "Estompare"
        },
        brightness: {
            title: "Luminozitate"
        },
        contrast: {
            title: "Contrast"
        },
        grayscale: {
            title: "Scară tonurilor de gri"
        },
        "hue-rotate": {
            title: "Rotire tonuri"
        },
        invert: {
            title: "Inversare"
        },
        saturate: {
            title: "Saturare"
        },
        sepia: {
            title: "Sepia"
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9tUnp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ru", ()=>ru
);
const ru = {
    upload: "Загрузить",
    cancel: "Отмена",
    close: "близко",
    uploading: "Загрузка... ",
    uploaded: "загруженное",
    fetching: "Скачиваем изображение с $1$... ",
    poweredBy: "Стало возможным благодаря $1$",
    needHelp: "Нужна помощь?",
    units: {
        px: "px",
        "%": "%",
        deg: "°"
    },
    errors: {
        response_not_ok: "Произошла ошибка при получении этого файла",
        unable_to_search: "Произошла ошибка при поиске",
        invalid_service_url: "Это не URL $1$",
        invalid_url: "Этот URL недействителен",
        upload_aborted: "Ваша загрузка была отменена",
        upload_error: "Произошла ошибка при загрузке этого файла",
        file_type_not_allowed: "Этот тип файла не поддерживается",
        file_too_large: "Файл должен быть не более $1$"
    },
    help: {
        loading: "Загрузка...",
        close: "Закрыть"
    },
    services: {
        default: {
            heading: "Выберите изображение"
        },
        local: {
            title: "Выберите файл",
            button: "Выберите файл",
            or: "или",
            drop: "Перетащите файл сюда, чтобы загрузить"
        },
        camera: {
            title: "Камера",
            button: "Cделать фото",
            switch: "Переключить камеру",
            waiting: "Жду разрешения камеры...",
            unableToRead: "Мы не можем получить доступ к вашей камере. Это может быть связано с тем, что вы не предоставили разрешение, или ваше устройство не поддерживает доступ к камере."
        },
        microlink: {
            button: "Скачать из $1$",
            label: "Ссылка на $1$ $2$",
            placeholder: "Введите ссылку на $1$ $2$",
            type: "пост"
        },
        url: {
            title: "Ссылка",
            label: "Ссылка на изображение",
            placeholder: "Введите ссылку на изображение",
            button: "Скачать изображение"
        },
        instagram: {
            title: "Instagram"
        },
        facebook: {
            title: "Facebook"
        },
        flickr: {
            title: "Flickr",
            type: "фото"
        },
        ninegag: {
            title: "9GAG",
            type: "фото"
        },
        deviantart: {
            title: "DeviantArt"
        },
        artstation: {
            title: "ArtStation"
        },
        twitter: {
            title: "Twitter",
            type: "фото твит"
        },
        pinterest: {
            title: "Pinterest",
            type: "pin"
        },
        flipboard: {
            title: "Flipboard",
            type: "статья"
        },
        fotki: {
            title: "Fotki",
            type: "фото"
        },
        linkedin: {
            title: "LinkedIn"
        },
        reddit: {
            title: "Reddit"
        },
        tumblr: {
            title: "Tumblr"
        },
        weheartit: {
            title: "We Heart It"
        },
        screenshot: {
            title: "Скриншот",
            button: "Сделать скриншот",
            label: "Ссылка на сайт",
            placeholder: "Введите ссылку",
            loading: "Скриншотим..."
        },
        search: {
            button: "Поиск на $1$",
            label: "Поиск изображений",
            placeholder: "",
            imagesPoweredBy: "картинки предоставлены $1$"
        },
        giphy: {
            title: "GIPHY"
        },
        unsplash: {
            title: "Unsplash"
        },
        pixabay: {
            title: "Pixabay"
        },
        pexels: {
            title: "Pexels"
        }
    },
    effects: {
        preview: {
            title: "пример"
        },
        filters: {
            title: "Фильтры"
        },
        crop: {
            title: "Обрезать",
            aspectRatios: {
                free: "Свободный",
                square: "Квадрат"
            }
        },
        rotate: {
            title: "Поворот"
        },
        flip: {
            title: "Отразить",
            buttons: {
                horizontal: "Горизонтально",
                vertical: "Вертикально"
            }
        },
        sharpen: {
            title: "Резкость"
        },
        blur: {
            title: "Размытие"
        },
        brightness: {
            title: "Яркость"
        },
        contrast: {
            title: "Контраст"
        },
        grayscale: {
            title: "Оттенки серого"
        },
        "hue-rotate": {
            title: "Повернуть оттенок"
        },
        invert: {
            title: "Инверсия"
        },
        saturate: {
            title: "Насыщенность"
        },
        sepia: {
            title: "Сепия"
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jQLvA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tr", ()=>tr
);
const tr = {
    upload: "Yükleme",
    cancel: "İptal etmek",
    close: "Kapat",
    uploading: "Yükle ...",
    uploaded: "yüklenen",
    fetching: "$1$ 'dan resim al ...",
    poweredBy: "$1$ ile mümkün oldu",
    needHelp: "Yardıma mı ihtiyacınız var?",
    units: {
        px: "px",
        "%": "%",
        deg: "°"
    },
    errors: {
        response_not_ok: "Bu dosya alınırken bir hata oluştu",
        unable_to_search: "Aranırken bir hata oluştu",
        invalid_service_url: "Bu bir $1$ URL değil",
        invalid_url: "Bu URL geçersiz",
        upload_aborted: "Yüklemeniz iptal edildi",
        upload_error: "Bu dosya yüklenirken bir hata oluştu",
        file_type_not_allowed: "Bu dosya türü desteklenmiyor",
        file_too_large: "Dosya $1$ 'dan az olmalı"
    },
    help: {
        loading: "Yardım yükleniyor...",
        close: "Yardımı kapat"
    },
    services: {
        default: {
            heading: "Bir resim seç"
        },
        local: {
            title: "Bir dosya seç",
            button: "Bir dosya seç",
            or: "arasında",
            drop: "Yüklemek için bir dosyayı buraya sürükleyin"
        },
        camera: {
            title: "Kamera",
            button: "Webcam fotoğraf",
            switch: "Kamera değiştir",
            waiting: "Kamera izni bekleniyor ...",
            unableToRead: "Videoyu kameranızdan okuyamıyoruz. Bunun nedeni gerekli izni vermediğiniz veya cihazınızın kamera erişimini desteklememesi olabilir."
        },
        microlink: {
            button: "1 $ 'dan içe aktar",
            label: "$1$ $2$ URL",
            placeholder: "Bir $1$ $2$ URL girin",
            type: "posta"
        },
        url: {
            title: "Doğrudan URL",
            label: "Image URL",
            placeholder: "Bir resim URL’si girin"
        },
        instagram: {
            title: "Instagram"
        },
        facebook: {
            title: "Facebook"
        },
        flickr: {
            title: "Flickr",
            type: "bir fotoğraf"
        },
        ninegag: {
            title: "9gag",
            type: "bir fotoğraf"
        },
        deviantart: {
            title: "DeviantArt"
        },
        artstation: {
            title: "ArtStation"
        },
        twitter: {
            title: "heyecan",
            type: "fotoğraf tweet"
        },
        pinterest: {
            title: "pinterest",
            type: "toplu iğne"
        },
        flipboard: {
            title: "Flipboard",
            type: "makale"
        },
        fotki: {
            title: "Resimler",
            type: "bir fotoğraf"
        },
        linkedin: {
            title: "LinkedIn"
        },
        reddit: {
            title: "Reddit"
        },
        tumblr: {
            title: "Tumblr"
        },
        weheartit: {
            title: "Biz kalp"
        },
        screenshot: {
            title: "Ekran görüntüsü",
            button: "Ekran görüntüsü al",
            label: "Web sayfasının URL'si",
            placeholder: "Bir URL girin",
            loading: "Ekran görüntüsü al ..."
        },
        search: {
            button: "$1$ için ara",
            label: "Bir resim arayın",
            placeholder: "Bir şey arayın",
            imagesPoweredBy: "Görüntüler $1$ 'a kadar mümkün kılındı"
        },
        giphy: {
            title: "GIPHY"
        },
        unsplash: {
            title: "Unsplash"
        },
        pixabay: {
            title: "Pixabay"
        },
        pexels: {
            title: "Pexels"
        }
    },
    effects: {
        preview: {
            title: "örnek"
        },
        filters: {
            title: "Filtreler"
        },
        crop: {
            title: "ekin",
            aspectRatios: {
                free: "Ücretsiz",
                square: "tam"
            }
        },
        rotate: {
            title: "büküm"
        },
        flip: {
            title: "Arkanı dön",
            buttons: {
                horizontal: "yatay",
                vertical: "dikey"
            }
        },
        sharpen: {
            title: "keskinleştirme"
        },
        blur: {
            title: "karartmak"
        },
        brightness: {
            title: "parlaklık"
        },
        contrast: {
            title: "Kontrast"
        },
        grayscale: {
            title: "Gri tonlama"
        },
        "hue-rotate": {
            title: "Tonu döndür"
        },
        invert: {
            title: "Ters çevir"
        },
        saturate: {
            title: "doyurmak"
        },
        sepia: {
            title: "Sepya"
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b6pHu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "zhTW", ()=>zhTW
);
const zhTW = {
    upload: "上載",
    cancel: "取消",
    close: "關",
    uploading: "上傳中...",
    uploaded: "已上傳",
    fetching: "正在取得您的影像從 $1$...",
    poweredBy: "由 $1$ 提供",
    needHelp: "需要幫助嗎?",
    units: {
        px: "px",
        "%": "%",
        deg: "°"
    },
    errors: {
        response_not_ok: "我們在抓取這個檔案時發生錯誤",
        unable_to_search: "我們在搜尋時發生錯誤",
        invalid_service_url: "這不是一個 $1$ 網址",
        invalid_url: "這個網址似乎無效",
        upload_aborted: "您的上傳已取消",
        upload_error: "我們在上傳這個檔案時發生錯誤",
        file_type_not_allowed: "這個檔案類型不被允許",
        file_too_large: "您的檔案應該小於 $1$"
    },
    help: {
        loading: "讀取幫助中...",
        close: "關閉幫助"
    },
    services: {
        default: {
            heading: "選擇一個影像"
        },
        local: {
            title: "選擇檔案",
            button: "選擇一個檔案",
            or: "或",
            drop: "拖曳檔案至此"
        },
        camera: {
            title: "相機",
            button: "點擊照片",
            switch: "切換照片",
            waiting: "等待權限授權中...",
            unableToRead: "我們無法從您的相機讀取影像，這可能是因為您拒絕了授予權限或是因為您的裝置不支援存取相機"
        },
        microlink: {
            button: "匯入 $1$",
            label: "$1$ $2$ 網址",
            placeholder: "請輸入一個 $1$ 的 $2$ 網址",
            type: "post"
        },
        url: {
            title: "網址",
            label: "影像網址",
            placeholder: "請輸入一個影像網址"
        },
        instagram: {
            title: "Instagram"
        },
        facebook: {
            title: "Facebook"
        },
        flickr: {
            title: "Flickr",
            type: "圖像"
        },
        ninegag: {
            title: "9GAG",
            type: "圖像"
        },
        deviantart: {
            title: "DeviantArt"
        },
        artstation: {
            title: "ArtStation"
        },
        twitter: {
            title: "Twitter",
            type: "影像推文"
        },
        pinterest: {
            title: "Pinterest",
            type: "釘文"
        },
        flipboard: {
            title: "Flipboard",
            type: "文章"
        },
        fotki: {
            title: "Fotki",
            type: "影像"
        },
        linkedin: {
            title: "LinkedIn"
        },
        reddit: {
            title: "Reddit"
        },
        tumblr: {
            title: "Tumblr"
        },
        weheartit: {
            title: "We Heart It"
        },
        screenshot: {
            title: "螢幕截圖",
            button: "擷取螢幕截圖",
            label: "網頁網址",
            placeholder: "請輸入一個網頁網址",
            loading: "正在擷取螢幕截圖..."
        },
        search: {
            button: "搜尋 $1$",
            label: "找一張影像",
            placeholder: "請輸入關鍵字",
            imagesPoweredBy: "影像由 $1$ 提供"
        },
        giphy: {
            title: "GIPHY"
        },
        unsplash: {
            title: "Unsplash"
        },
        pixabay: {
            title: "Pixabay"
        },
        pexels: {
            title: "Pexels"
        }
    },
    effects: {
        preview: {
            title: "預覽"
        },
        filters: {
            title: "濾鏡"
        },
        crop: {
            title: "剪裁",
            aspectRatios: {
                free: "自由",
                square: "正方形"
            }
        },
        rotate: {
            title: "旋轉"
        },
        flip: {
            title: "翻轉",
            buttons: {
                horizontal: "水平",
                vertical: "垂直"
            }
        },
        sharpen: {
            title: "銳化"
        },
        blur: {
            title: "模糊"
        },
        brightness: {
            title: "亮度"
        },
        contrast: {
            title: "對比"
        },
        grayscale: {
            title: "灰階"
        },
        "hue-rotate": {
            title: "色相旋轉"
        },
        invert: {
            title: "負片效果"
        },
        saturate: {
            title: "飽和度"
        },
        sepia: {
            title: "懷舊(黃褐色)"
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b1Hce":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "xhrUploader", ()=>xhrUploader
);
parcelHelpers.export(exports, "fetchUploader", ()=>fetchUploader
);
const xhrUploader = ({ endpoint , fileKeyName ="file" , method ="POST" , responseKey ="url" , responseFunction , settingsFunction  })=>{
    return (file, updateProgress)=>new Promise((resolve, reject)=>{
            const formData = new FormData();
            formData.append(fileKeyName, file);
            const xmlHttp = new XMLHttpRequest();
            xmlHttp.open(method, endpoint, true);
            if (typeof settingsFunction === "function") settingsFunction(xmlHttp);
            xmlHttp.addEventListener("progress", (event)=>{
                if (typeof updateProgress === "function") updateProgress(event.loaded / event.total);
            });
            xmlHttp.addEventListener("load", ()=>{
                const responseText = xmlHttp.responseText;
                if (typeof responseFunction === "function") return resolve(responseFunction(responseText));
                const json = JSON.parse(responseText);
                return resolve(json[responseKey]);
            });
            xmlHttp.addEventListener("error", ()=>reject("errors.response_not_ok")
            );
            xmlHttp.addEventListener("abort", ()=>reject("errors.upload_aborted")
            );
            xmlHttp.send(formData);
        })
    ;
};
const fetchUploader = ({ endpoint , settingsFunction , method ="POST" , fileKeyName ="file" , responseKey ="url" , responseFunction  })=>{
    return (file)=>new Promise((resolve, reject)=>{
            const formData = new FormData();
            formData.append(fileKeyName, file);
            window.fetch(endpoint, settingsFunction ? settingsFunction(file) : {
                method,
                body: formData
            }).then((response)=>{
                if (!response.ok) throw new Error("errors.response_not_ok");
                return response.json();
            }).then((json)=>{
                if (typeof responseFunction === "function") return resolve(responseFunction(json));
                return resolve(json[responseKey]);
            }).catch(()=>reject("errors.response_not_ok")
            );
        })
    ;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["fcP3w","40Uox"], "40Uox", "parcelRequire8e37")

//# sourceMappingURL=index.3c900248.js.map
