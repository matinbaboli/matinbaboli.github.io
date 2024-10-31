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
})({"eCBm1":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "279fa76ea96c2bf8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"it9Ik":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _engJs = require("../languages/eng.js");
var _faJs = require("../languages/fa.js");
var _personalProjectsJson = require("../data/personal-projects.json");
var _personalProjectsJsonDefault = parcelHelpers.interopDefault(_personalProjectsJson);
const projectCardsWraper = document.getElementById("project-cards-wraper");
const ProjectDetailsModal = document.querySelector(".project-info-modal");
function start() {
    // const response = await fetch("../data/personal-projects.json")
    // const personalProjects = await response.json()
    // console.log(personalProjects)
    createProjectCards();
    openAndCloseDetails();
}
start();
function createProjectCards() {
    projectCardsWraper.innerHTML = (0, _personalProjectsJsonDefault.default).personalProjects.map((item)=>{
        const { thumbnailImage, englishTitle, farsiTitle, id } = item;
        let title = sessionStorage.language === "en" ? englishTitle : farsiTitle;
        // console.log(thumbnailImage)
        // let shortenedTitle = title.substring(0, 8) + "..."
        return `
                <div id="${id}" class="project-card">
                    <img src="${thumbnailImage}" alt="project-preview">
                    <div>
                        <h2 id="dynamic-text" data-translation-id="blank">${title}</h2>
                        <p id="text" data-translation-id="more_details">
                            <img src="./icons/arrow-right-icon.svg" alt="arrow">
                        </p>
                    </div>
                </div>
        `;
    }).join("");
    addDynamicText();
}
function openAndCloseDetails() {
    const projectCardNodes = document.querySelectorAll(".project-card");
    const projectCards = Array.from(projectCardNodes);
    projectCards.forEach((card)=>{
        card.addEventListener("click", (e)=>{
            ProjectDetailsModal.showModal();
            ProjectDetailsModal.style.animation = "modal-open 500ms";
            let projectId = Number(e.currentTarget.id);
            handleModalDataForEachCard(projectId);
        });
    });
// closeModalBtn.addEventListener('click', () => {
//     ProjectDetailsModal.close()
//     ProjectDetailsModal.style.animation = 'modal-close 500ms'
// })
// console.log(projectCards)
}
function handleModalDataForEachCard(projectId) {
    let filteredProjects = personalProjects.filter((item)=>item.id === projectId);
    let { showcaseImages, englishTitle, englishDescription, farsiTitle, farsiDescription, technologies, projectLink } = filteredProjects[0];
    let title = sessionStorage.language === "en" ? englishTitle : farsiTitle;
    let description = sessionStorage.language === "en" ? englishDescription : farsiDescription;
    ProjectDetailsModal.innerHTML = `
            <button id="close-modal-btn">
                <img src="./icons/navbar-icons/close-icon.svg" alt="close-modal">
            </button>
            <div class="project-modal-content-wraper">
            <h2 id="dynamic-text" data-translation-id="blank">${title}</h2>
                <div id="project-details-wraper">
                    <p id="dynamic-text" data-translation-id="blank" class="project-description">${description}</p>
                    <aside class="project-details">
                        <div class="technologies-wraper">
                            <h3 id="dynamic-text" data-translation-id="technologies"></h3>
                            <div>
                                ${technologies.map((item)=>{
        return `<p id="technologie-item">${item}</p>`;
    }).join("")}
                            </div>
                        </div>
                        <a href="${projectLink}" target="_blank" id="dynamic-text" data-translation-id="view_project"
                            class="btn-primary btn-primary-small"></a>
                    </aside>
                    ${showcaseImages.map((item)=>{
        return `<img src="${item}" alt="project-preview">`;
    }).join("")}
                    
                </div>
            </div>

    `;
    const closeModalBtn = document.getElementById("close-modal-btn");
    closeModalBtn.addEventListener("click", ()=>{
        ProjectDetailsModal.close();
        ProjectDetailsModal.style.animation = "modal-close 500ms";
    });
    addDynamicText();
}
function addDynamicText() {
    const allTexts = document.querySelectorAll("#dynamic-text");
    let translationId;
    allTexts.forEach((text)=>{
        translationId = text.dataset.translationId;
        if (sessionStorage.language === "fa") {
            text.innerHTML += (0, _faJs.fa)[translationId];
            allTexts.forEach((text)=>{
                text.style.letterSpacing = "1px";
                text.style.fontFamily = "Noto Sans Arabic";
            });
        } else text.innerHTML += (0, _engJs.en)[translationId];
    });
// console.log("clicked")
}

},{"../languages/eng.js":"joNyo","../languages/fa.js":"hziQN","../data/personal-projects.json":"fXLUw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"joNyo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "en", ()=>en);
const en = {
    blank: "",
    nav_home_link: "Home",
    nav_contact_me_link: "Contact me",
    nav_personal_projects_link: "Personal Projects",
    nav_official_projects_link: "Official Projects",
    resume_download_btn: "My Resume",
    about_me_title: "About Me",
    about_me_first_p: "Hi my name is Matin, i am a front-end web developer and a computer engineering student. I create easy to use websites with good and consistant UI design.",
    about_me_second_p: "I am fueled by my passion for creating visully pleasing and efficient websites and i'm always trying to learn new technologies and better ways to code like a hungry giant.",
    about_me_third_p: "Currently i am working as a freelancer and also open to job offers.",
    my_projects_title: "My Projects",
    official_link_explanation: "Through this link you can see the work that i have done for other companies.",
    personal_link_explanation: "Through this link you can see the projects that i have done in my spare time. Eather for practice or just for fun :).",
    official_projects_cool_link_title: "OFFICIAL",
    personal_projects_cool_link_title: "PERSONAL",
    view_projects_text: "view projects",
    my_skills_title: "My Skills",
    contact_me_page_title: "Contact Me",
    want_to_start_a_project: "Want to start a project?",
    email_me: "Email Me",
    or: "OR",
    personal_projects_page_title: "Personal Projects",
    more_details: "More Details",
    contact_me_notice: "Want to contact me? gently click this button to see my contact information.",
    technologies: "Technologies",
    client: "Client",
    view_project: "View Project",
    official_projects_page_title: "Official Projects"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"hziQN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fa", ()=>fa);
const fa = {
    blank: "",
    nav_home_link: "\u0635\u0641\u062D\u0647 \u0627\u0635\u0644\u06CC",
    nav_contact_me_link: "\u062A\u0645\u0627\u0633 \u0628\u0627 \u0645\u0646",
    nav_personal_projects_link: "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC \u0634\u062E\u0635\u06CC",
    nav_official_projects_link: "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC \u0631\u0633\u0645\u06CC",
    resume_download_btn: "\u0631\u0632\u0648\u0645\u0647 \u0645\u0646",
    about_me_title: "\u062F\u0631\u0628\u0627\u0631\u0647 \u0645\u0646",
    about_me_first_p: "\u0633\u0644\u0627\u0645 \u0645\u0646 \u0645\u062A\u06CC\u0646 \u0628\u0627\u0628\u0644\u06CC \u0647\u0633\u062A\u0645 \u0648 \u062F\u0631 \u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u0645\u0634\u063A\u0648\u0644 \u0628\u0647 \u062A\u062D\u0635\u06CC\u0644 \u062F\u0631 \u0631\u0634\u062A\u0647 \u0645\u0647\u0646\u062F\u0633\u06CC \u06A9\u0627\u0645\u067E\u06CC\u0648\u062A\u0631 \u0648 \u0647\u0645\u0686\u0646\u06CC\u0646 \u06A9\u0627\u0631 \u062F\u0631 \u062D\u0648\u0632\u0647 \u0641\u0631\u0627\u0646\u062A\u200C\u0627\u0646\u062F \u0648\u0628 \u0647\u0633\u062A\u0645. \u062A\u0644\u0627\u0634 \u0645\u0646 \u0628\u0631 \u0633\u0627\u062E\u062A \u0648\u0628\u0633\u0627\u06CC\u062A\u200C\u0647\u0627\u06CC\u06CC \u0628\u0627 \u0637\u0631\u0632 \u06A9\u0627\u0631 \u0633\u0627\u062F\u0647 \u0648 \u0647\u0645\u0686\u0646\u06CC\u0646 \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u062E\u0648\u0628 \u0648 \u06CC\u06A9\u067E\u0627\u0631\u0686\u0647 \u0627\u0633\u062A.",
    about_me_second_p: "\u0645\u0646 \u0628\u0631\u0627\u06CC \u0633\u0627\u062E\u062A\u0646 \u0648\u0628\u0633\u0627\u06CC\u062A\u200C\u0647\u0627\u06CC \u0632\u06CC\u0628\u0627 \u0648 \u0686\u0634\u0645\u200C \u0646\u0648\u0627\u0632 \u0628\u0627 \u06A9\u0627\u0631\u0627\u06CC\u06CC \u0628\u0627\u0644\u0627 \u0633\u0631\u0634\u0627\u0631 \u0627\u0632 \u0627\u0646\u06AF\u06CC\u0632\u0647 \u0628\u0648\u062F\u0647 \u0648 \u0647\u0645\u0648\u0627\u0631\u0647 \u062F\u0631 \u062A\u0644\u0627\u0634 \u0628\u0631\u0627\u06CC \u06CC\u0627\u062F\u06AF\u06CC\u0631\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC\u200C\u0647\u0627 \u0648 \u0631\u0627\u0647\u200C\u0647\u0627\u06CC \u0628\u0647\u062A\u0631\u06CC \u0628\u0631\u0627\u06CC \u06A9\u062F\u0646\u0648\u06CC\u0633\u06CC \u0647\u0633\u062A\u0645.",
    about_me_third_p: "\u062F\u0631 \u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u0645\u0646 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0641\u0631\u06CC \u0644\u0646\u0633\u0631 \u062F\u0631 \u062D\u0627\u0644 \u06A9\u0627\u0631 \u0647\u0633\u062A\u0645 \u0648 \u0647\u0645\u0686\u0646\u06CC\u0646 \u067E\u0630\u06CC\u0631\u0627\u06CC \u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u0627\u062A \u06A9\u0627\u0631\u06CC \u0645\u06CC\u200C\u0628\u0627\u0634\u0645.",
    my_projects_title: "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC \u0645\u0646",
    official_link_explanation: " \u0628\u0627 \u06A9\u0644\u06CC\u06A9 \u0628\u0631 \u0631\u0648\u06CC \u0627\u06CC\u0646 \u0644\u06CC\u0646\u06A9 \u0634\u0645\u0627 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u067E\u0631\u0648\u0698\u0647 \u0647\u0627\u06CC\u06CC \u06A9\u0647 \u0628\u0631\u0627\u06CC \u0634\u0631\u06A9\u062A\u200C\u0647\u0627 \u0648 \u0645\u0634\u062A\u0631\u06CC\u200C\u0647\u0627 \u0627\u0646\u062C\u0627\u0645 \u062F\u0627\u062F\u0647\u200C\u0627\u0645 \u0631\u0627 \u0645\u0634\u0627\u0647\u062F\u0647 \u06A9\u0646\u06CC\u062F.",
    personal_link_explanation: "\u0628\u0627 \u0643\u0644\u06CC\u06A9 \u0628\u0631 \u0631\u0648\u06CC \u0627\u06CC\u0646 \u0644\u06CC\u0646\u06A9 \u0634\u0645\u0627 \u0645\u06CC\u062A\u0648\u0627\u0646\u06CC\u062F \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC\u06CC \u06A9\u0647 \u0628\u0631\u0627\u06CC \u062A\u0645\u0631\u06CC\u0646 \u06CC\u0627 \u0628\u062F\u0644\u06CC\u0644 \u06A9\u0646\u062C\u06A9\u0627\u0648\u06CC \u0648 \u0627\u0634\u062A\u06CC\u0627\u0642 \u0627\u0646\u062C\u0627\u0645 \u062F\u0627\u062F\u0647\u200C\u0627\u0645 \u0631\u0627 \u0645\u0634\u0627\u0647\u062F\u0647 \u06A9\u0646\u06CC\u062F :).",
    official_projects_cool_link_title: "\u0631\u0633\u0645\u06CC",
    personal_projects_cool_link_title: "\u0634\u062E\u0635\u06CC",
    view_projects_text: "\u0645\u0634\u0627\u0647\u062F\u0647 \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627",
    my_skills_title: "\u0645\u0647\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u0645\u0646",
    contact_me_page_title: "\u062A\u0645\u0627\u0633 \u0628\u0627 \u0645\u0646",
    want_to_start_a_project: "\u062E\u0648\u0627\u0633\u062A\u0627\u0631 \u0634\u0631\u0648\u0639 \u0628\u0647 \u0633\u0627\u062E\u062A \u06CC\u06A9 \u067E\u0631\u0648\u0698\u0647 \u0647\u0633\u062A\u06CC\u062F\u061F",
    email_me: "\u0627\u0631\u0633\u0627\u0644 \u0627\u06CC\u0645\u06CC\u0644",
    or: "\u06CC\u0627",
    personal_projects_page_title: "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC \u0634\u062E\u0635\u06CC",
    more_details: "\u062C\u0632\u0650\u0626\u06CC\u0627\u062A \u0628\u06CC\u0634\u062A\u0631",
    contact_me_notice: "\u0628\u0631\u0627\u06CC \u0627\u0631\u062A\u0628\u0627\u0637 \u0628\u0627 \u0645\u0646 \u0648 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 \u0645\u06CC\u062A\u0648\u0627\u0646\u06CC\u062F \u0628\u0647 \u0627\u0631\u0627\u0645\u06CC \u0631\u0648\u06CC \u0627\u06CC\u0646 \u062F\u06A9\u0645\u0647 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F.",
    technologies: "\u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0647\u0627",
    client: "\u0645\u0634\u062A\u0631\u06CC",
    view_project: "\u0645\u0634\u0627\u0647\u062F\u0647 \u067E\u0631\u0648\u0698\u0647",
    official_projects_page_title: "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC \u0631\u0633\u0645\u06CC"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fXLUw":[function(require,module,exports) {
module.exports = JSON.parse('{"personalProjects":[{"id":1,"thumbnailImage":"./images/project images/guitar world/main.jpg","showcaseImages":["./images/project images/guitar world/preview1.jpg","./images/project images/guitar world/preview2.jpg","./images/project images/guitar world/preview3.jpg"],"englishTitle":"Guitar World","englishDescription":"This is an online shop for buying different kinds of guitars which contains a homepage, about us, catalog(with filtering feature) and more...","farsiTitle":"\u067E\u0631\u0648\u0698\u0647 \u062F\u0646\u06CC\u0627\u06CC \u06AF\u06CC\u062A\u0627\u0631","farsiDescription":"\u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u06CC\u06A9 \u0641\u0631\u0648\u0634\u06AF\u0627\u0647 \u0627\u0646\u0644\u0627\u06CC\u0646 \u0628\u0631\u0627\u06CC \u0641\u0631\u0648\u0634 \u0627\u0646\u0648\u0627\u0639 \u06AF\u06CC\u062A\u0627\u0631 \u0645\u06CC\u0628\u0627\u0634\u062F \u06A9\u0647 \u0634\u0627\u0645\u0644 \u0635\u0641\u062D\u0627\u062A \u0645\u062E\u062A\u0644\u0641\u06CC \u0627\u0632 \u062C\u0645\u0644\u0647 \u0635\u0641\u062D\u0647 \u0627\u0635\u0644\u06CC\u060C \u062F\u0631\u0628\u0627\u0631\u0647 \u0645\u0627\u060C \u06A9\u0627\u062A\u0627\u0644\u0648\u06AF \u0628\u0627 \u0642\u0627\u0628\u0644\u06CC\u062A \u0641\u06CC\u0644\u062A\u0631 \u0645\u062D\u0635\u0648\u0644\u0627\u062A \u0648... \u0645\u06CC\u0628\u0627\u0634\u062F. ","technologies":["React","Material UI","figma"],"projectLink":"https://matinbaboli.github.io/guitar-world-store-project"}]}');

},{}]},["eCBm1","it9Ik"], "it9Ik", "parcelRequire82ef")

//# sourceMappingURL=personal-projects.a96c2bf8.js.map
