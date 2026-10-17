import {
  DomSanitizer
} from "./chunk-G7PG6GTQ.js";
import "./chunk-Z4HEMYZS.js";
import {
  isPlatformBrowser
} from "./chunk-RU4NSEM6.js";
import "./chunk-BLEKNJ5W.js";
import {
  APP_ID,
  ApplicationRef,
  CSP_NONCE,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DOCUMENT,
  Directive,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  QueryList,
  RendererFactory2,
  SIGNAL,
  SecurityContext,
  TemplateRef,
  ViewContainerRef,
  ViewEncapsulation,
  afterNextRender,
  afterRenderEffect,
  booleanAttribute,
  computed,
  contentChild,
  createComponent,
  createComputed,
  createSignal,
  forwardRef,
  inject,
  input,
  model,
  setClassMetadata,
  signal,
  untracked,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵattribute,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomProperty,
  ɵɵlistener,
  ɵɵqueryAdvance
} from "./chunk-YRKA7ZQU.js";
import {
  isObservable
} from "./chunk-HWYXSU2G.js";
import "./chunk-JRFR6BLO.js";
import {
  BehaviorSubject,
  Observable,
  Subject,
  Subscription,
  combineLatest,
  concat,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  of,
  skip,
  startWith,
  take,
  takeUntil,
  tap
} from "./chunk-MARUHEWW.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-B4NDS4B7.js";

// node_modules/@angular/cdk/fesm2022/_fake-event-detection-chunk.mjs
function isFakeMousedownFromScreenReader(event) {
  return event.buttons === 0 || event.detail === 0;
}
function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0];
  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}

// node_modules/@angular/cdk/fesm2022/_keycodes-chunk.mjs
var SHIFT = 16;
var CONTROL = 17;
var ALT = 18;
var ZERO = 48;
var NINE = 57;
var A = 65;
var Z = 90;
var META = 91;
var MAC_META = 224;

// node_modules/@angular/cdk/fesm2022/_shadow-dom-chunk.mjs
var shadowDomIsSupported;
function _supportsShadowDom() {
  if (shadowDomIsSupported == null) {
    const head = typeof document !== "undefined" ? document.head : null;
    shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
  }
  return shadowDomIsSupported;
}
function _getShadowRoot(element) {
  if (_supportsShadowDom()) {
    const rootNode = element.getRootNode ? element.getRootNode() : null;
    if (typeof ShadowRoot !== "undefined" && ShadowRoot && rootNode instanceof ShadowRoot) {
      return rootNode;
    }
  }
  return null;
}
function _getFocusedElementPierceShadowDom() {
  let activeElement = typeof document !== "undefined" && document ? document.activeElement : null;
  while (activeElement && activeElement.shadowRoot) {
    const newActiveElement = activeElement.shadowRoot.activeElement;
    if (newActiveElement === activeElement) {
      break;
    } else {
      activeElement = newActiveElement;
    }
  }
  return activeElement;
}
function _getEventTarget(event) {
  return event.composedPath ? event.composedPath()[0] : event.target;
}

// node_modules/@angular/cdk/fesm2022/_platform-chunk.mjs
var hasV8BreakIterator;
try {
  hasV8BreakIterator = typeof Intl !== "undefined" && Intl.v8BreakIterator;
} catch (e) {
  hasV8BreakIterator = false;
}
var Platform = class _Platform {
  _platformId = inject(PLATFORM_ID);
  isBrowser = this._platformId ? isPlatformBrowser(this._platformId) : typeof document === "object" && !!document;
  EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
  TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
  BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== "undefined" && !this.EDGE && !this.TRIDENT;
  WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
  IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
  FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
  ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
  SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
  constructor() {
  }
  static ɵfac = function Platform_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Platform)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _Platform,
    factory: _Platform.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Platform, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@angular/cdk/fesm2022/_passive-listeners-chunk.mjs
var supportsPassiveEvents;
function supportsPassiveEventListeners() {
  if (supportsPassiveEvents == null && typeof window !== "undefined") {
    try {
      window.addEventListener("test", null, Object.defineProperty({}, "passive", {
        get: () => supportsPassiveEvents = true
      }));
    } finally {
      supportsPassiveEvents = supportsPassiveEvents || false;
    }
  }
  return supportsPassiveEvents;
}
function normalizePassiveListenerOptions(options) {
  return supportsPassiveEventListeners() ? options : !!options.capture;
}

// node_modules/@angular/cdk/fesm2022/_element-chunk.mjs
function coerceNumberProperty(value, fallbackValue = 0) {
  if (_isNumberValue(value)) {
    return Number(value);
  }
  return arguments.length === 2 ? fallbackValue : 0;
}
function _isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

// node_modules/@angular/cdk/fesm2022/_focus-monitor-chunk.mjs
var INPUT_MODALITY_DETECTOR_OPTIONS = new InjectionToken("cdk-input-modality-detector-options");
var INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS = {
  ignoreKeys: [ALT, CONTROL, MAC_META, META, SHIFT]
};
var TOUCH_BUFFER_MS = 650;
var modalityEventListenerOptions = {
  passive: true,
  capture: true
};
var InputModalityDetector = class _InputModalityDetector {
  _platform = inject(Platform);
  _listenerCleanups;
  modalityDetected;
  modalityChanged;
  get mostRecentModality() {
    return this._modality.value;
  }
  _mostRecentTarget = null;
  _modality = new BehaviorSubject(null);
  _options;
  _lastTouchMs = 0;
  _onKeydown = (event) => {
    if (this._options?.ignoreKeys?.some((keyCode) => keyCode === event.keyCode)) {
      return;
    }
    this._modality.next("keyboard");
    this._mostRecentTarget = _getEventTarget(event);
  };
  _onMousedown = (event) => {
    if (Date.now() - this._lastTouchMs < TOUCH_BUFFER_MS) {
      return;
    }
    this._modality.next(isFakeMousedownFromScreenReader(event) ? "keyboard" : "mouse");
    this._mostRecentTarget = _getEventTarget(event);
  };
  _onTouchstart = (event) => {
    if (isFakeTouchstartFromScreenReader(event)) {
      this._modality.next("keyboard");
      return;
    }
    this._lastTouchMs = Date.now();
    this._modality.next("touch");
    this._mostRecentTarget = _getEventTarget(event);
  };
  constructor() {
    const ngZone = inject(NgZone);
    const document2 = inject(DOCUMENT);
    const options = inject(INPUT_MODALITY_DETECTOR_OPTIONS, {
      optional: true
    });
    this._options = __spreadValues(__spreadValues({}, INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS), options);
    this.modalityDetected = this._modality.pipe(skip(1));
    this.modalityChanged = this.modalityDetected.pipe(distinctUntilChanged());
    if (this._platform.isBrowser) {
      const renderer = inject(RendererFactory2).createRenderer(null, null);
      this._listenerCleanups = ngZone.runOutsideAngular(() => {
        return [renderer.listen(document2, "keydown", this._onKeydown, modalityEventListenerOptions), renderer.listen(document2, "mousedown", this._onMousedown, modalityEventListenerOptions), renderer.listen(document2, "touchstart", this._onTouchstart, modalityEventListenerOptions)];
      });
    }
  }
  ngOnDestroy() {
    this._modality.complete();
    this._listenerCleanups?.forEach((cleanup) => cleanup());
  }
  static ɵfac = function InputModalityDetector_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputModalityDetector)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _InputModalityDetector,
    factory: _InputModalityDetector.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputModalityDetector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var FocusMonitorDetectionMode;
(function(FocusMonitorDetectionMode2) {
  FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["IMMEDIATE"] = 0] = "IMMEDIATE";
  FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["EVENTUAL"] = 1] = "EVENTUAL";
})(FocusMonitorDetectionMode || (FocusMonitorDetectionMode = {}));
var FOCUS_MONITOR_DEFAULT_OPTIONS = new InjectionToken("cdk-focus-monitor-default-options");
var captureEventListenerOptions = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var FocusMonitor = class _FocusMonitor {
  _ngZone = inject(NgZone);
  _platform = inject(Platform);
  _inputModalityDetector = inject(InputModalityDetector);
  _origin = null;
  _lastFocusOrigin = null;
  _windowFocused = false;
  _windowFocusTimeoutId;
  _originTimeoutId;
  _originFromTouchInteraction = false;
  _elementInfo = /* @__PURE__ */ new Map();
  _monitoredElementCount = 0;
  _rootNodeFocusListenerCount = /* @__PURE__ */ new Map();
  _detectionMode;
  _windowFocusListener = () => {
    this._windowFocused = true;
    this._windowFocusTimeoutId = setTimeout(() => this._windowFocused = false);
  };
  _document = inject(DOCUMENT);
  _stopInputModalityDetector = new Subject();
  constructor() {
    const options = inject(FOCUS_MONITOR_DEFAULT_OPTIONS, {
      optional: true
    });
    this._detectionMode = options?.detectionMode || FocusMonitorDetectionMode.IMMEDIATE;
  }
  _rootNodeFocusAndBlurListener = (event) => {
    const target = _getEventTarget(event);
    for (let element = target; element; element = element.parentElement) {
      if (event.type === "focus") {
        this._onFocus(event, element);
      } else {
        this._onBlur(event, element);
      }
    }
  };
  monitor(element, checkChildren = false) {
    const nativeElement = coerceElement(element);
    if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
      return of();
    }
    const rootNode = _getShadowRoot(nativeElement) || this._document;
    const cachedInfo = this._elementInfo.get(nativeElement);
    if (cachedInfo) {
      if (checkChildren) {
        cachedInfo.checkChildren = true;
      }
      return cachedInfo.subject;
    }
    const info = {
      checkChildren,
      subject: new Subject(),
      rootNode
    };
    this._elementInfo.set(nativeElement, info);
    this._registerGlobalListeners(info);
    return info.subject;
  }
  stopMonitoring(element) {
    const nativeElement = coerceElement(element);
    const elementInfo = this._elementInfo.get(nativeElement);
    if (elementInfo) {
      elementInfo.subject.complete();
      this._setClasses(nativeElement);
      this._elementInfo.delete(nativeElement);
      this._removeGlobalListeners(elementInfo);
    }
  }
  focusVia(element, origin, options) {
    const nativeElement = coerceElement(element);
    const focusedElement = this._document.activeElement;
    if (nativeElement === focusedElement) {
      this._getClosestElementsInfo(nativeElement).forEach(([currentElement, info]) => this._originChanged(currentElement, origin, info));
    } else {
      this._setOrigin(origin);
      if (typeof nativeElement.focus === "function") {
        nativeElement.focus(options);
      }
    }
  }
  ngOnDestroy() {
    this._elementInfo.forEach((_info, element) => this.stopMonitoring(element));
  }
  _getWindow() {
    return this._document.defaultView || window;
  }
  _getFocusOrigin(focusEventTarget) {
    if (this._origin) {
      if (this._originFromTouchInteraction) {
        return this._shouldBeAttributedToTouch(focusEventTarget) ? "touch" : "program";
      } else {
        return this._origin;
      }
    }
    if (this._windowFocused && this._lastFocusOrigin) {
      return this._lastFocusOrigin;
    }
    if (focusEventTarget && this._isLastInteractionFromInputLabel(focusEventTarget)) {
      return "mouse";
    }
    return "program";
  }
  _shouldBeAttributedToTouch(focusEventTarget) {
    return this._detectionMode === FocusMonitorDetectionMode.EVENTUAL || !!focusEventTarget?.contains(this._inputModalityDetector._mostRecentTarget);
  }
  _setClasses(element, origin) {
    element.classList.toggle("cdk-focused", !!origin);
    element.classList.toggle("cdk-touch-focused", origin === "touch");
    element.classList.toggle("cdk-keyboard-focused", origin === "keyboard");
    element.classList.toggle("cdk-mouse-focused", origin === "mouse");
    element.classList.toggle("cdk-program-focused", origin === "program");
  }
  _setOrigin(origin, isFromInteraction = false) {
    this._ngZone.runOutsideAngular(() => {
      this._origin = origin;
      this._originFromTouchInteraction = origin === "touch" && isFromInteraction;
      if (this._detectionMode === FocusMonitorDetectionMode.IMMEDIATE) {
        clearTimeout(this._originTimeoutId);
        const ms = this._originFromTouchInteraction ? TOUCH_BUFFER_MS : 1;
        this._originTimeoutId = setTimeout(() => this._origin = null, ms);
      }
    });
  }
  _onFocus(event, element) {
    const elementInfo = this._elementInfo.get(element);
    const focusEventTarget = _getEventTarget(event);
    if (!elementInfo || !elementInfo.checkChildren && element !== focusEventTarget) {
      return;
    }
    this._originChanged(element, this._getFocusOrigin(focusEventTarget), elementInfo);
  }
  _onBlur(event, element) {
    const elementInfo = this._elementInfo.get(element);
    if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
      return;
    }
    this._setClasses(element);
    this._emitOrigin(elementInfo, null);
  }
  _emitOrigin(info, origin) {
    if (info.subject.observers.length) {
      this._ngZone.run(() => info.subject.next(origin));
    }
  }
  _registerGlobalListeners(elementInfo) {
    if (!this._platform.isBrowser) {
      return;
    }
    const rootNode = elementInfo.rootNode;
    const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;
    if (!rootNodeFocusListeners) {
      this._ngZone.runOutsideAngular(() => {
        rootNode.addEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.addEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
      });
    }
    this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1);
    if (++this._monitoredElementCount === 1) {
      this._ngZone.runOutsideAngular(() => {
        const window2 = this._getWindow();
        window2.addEventListener("focus", this._windowFocusListener);
      });
      this._inputModalityDetector.modalityDetected.pipe(takeUntil(this._stopInputModalityDetector)).subscribe((modality) => {
        this._setOrigin(modality, true);
      });
    }
  }
  _removeGlobalListeners(elementInfo) {
    const rootNode = elementInfo.rootNode;
    if (this._rootNodeFocusListenerCount.has(rootNode)) {
      const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);
      if (rootNodeFocusListeners > 1) {
        this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
      } else {
        rootNode.removeEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.removeEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        this._rootNodeFocusListenerCount.delete(rootNode);
      }
    }
    if (!--this._monitoredElementCount) {
      const window2 = this._getWindow();
      window2.removeEventListener("focus", this._windowFocusListener);
      this._stopInputModalityDetector.next();
      clearTimeout(this._windowFocusTimeoutId);
      clearTimeout(this._originTimeoutId);
    }
  }
  _originChanged(element, origin, elementInfo) {
    this._setClasses(element, origin);
    this._emitOrigin(elementInfo, origin);
    this._lastFocusOrigin = origin;
  }
  _getClosestElementsInfo(element) {
    const results = [];
    this._elementInfo.forEach((info, currentElement) => {
      if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
        results.push([currentElement, info]);
      }
    });
    return results;
  }
  _isLastInteractionFromInputLabel(focusEventTarget) {
    const {
      _mostRecentTarget: mostRecentTarget,
      mostRecentModality
    } = this._inputModalityDetector;
    if (mostRecentModality !== "mouse" || !mostRecentTarget || mostRecentTarget === focusEventTarget || focusEventTarget.nodeName !== "INPUT" && focusEventTarget.nodeName !== "TEXTAREA" || focusEventTarget.disabled) {
      return false;
    }
    const labels = focusEventTarget.labels;
    if (labels) {
      for (let i = 0; i < labels.length; i++) {
        if (labels[i].contains(mostRecentTarget)) {
          return true;
        }
      }
    }
    return false;
  }
  static ɵfac = function FocusMonitor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FocusMonitor)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _FocusMonitor,
    factory: _FocusMonitor.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusMonitor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CdkMonitorFocus = class _CdkMonitorFocus {
  _elementRef = inject(ElementRef);
  _focusMonitor = inject(FocusMonitor);
  _monitorSubscription;
  _focusOrigin = null;
  cdkFocusChange = new EventEmitter();
  constructor() {
  }
  get focusOrigin() {
    return this._focusOrigin;
  }
  ngAfterViewInit() {
    const element = this._elementRef.nativeElement;
    this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute("cdkMonitorSubtreeFocus")).subscribe((origin) => {
      this._focusOrigin = origin;
      this.cdkFocusChange.emit(origin);
    });
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._monitorSubscription?.unsubscribe();
  }
  static ɵfac = function CdkMonitorFocus_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkMonitorFocus)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _CdkMonitorFocus,
    selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
    outputs: {
      cdkFocusChange: "cdkFocusChange"
    },
    exportAs: ["cdkMonitorFocus"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkMonitorFocus, [{
    type: Directive,
    args: [{
      selector: "[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]",
      exportAs: "cdkMonitorFocus"
    }]
  }], () => [], {
    cdkFocusChange: [{
      type: Output
    }]
  });
})();

// node_modules/@angular/cdk/fesm2022/_style-loader-chunk.mjs
var appsWithLoaders = /* @__PURE__ */ new WeakMap();
var _CdkPrivateStyleLoader = class __CdkPrivateStyleLoader {
  _appRef;
  _injector = inject(Injector);
  _environmentInjector = inject(EnvironmentInjector);
  load(loader) {
    const appRef = this._appRef = this._appRef || this._injector.get(ApplicationRef);
    let data = appsWithLoaders.get(appRef);
    if (!data) {
      data = {
        loaders: /* @__PURE__ */ new Set(),
        refs: []
      };
      appsWithLoaders.set(appRef, data);
      appRef.onDestroy(() => {
        appsWithLoaders.get(appRef)?.refs.forEach((ref) => ref.destroy());
        appsWithLoaders.delete(appRef);
      });
    }
    if (!data.loaders.has(loader)) {
      data.loaders.add(loader);
      data.refs.push(createComponent(loader, {
        environmentInjector: this._environmentInjector
      }));
    }
  }
  static ɵfac = function _CdkPrivateStyleLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __CdkPrivateStyleLoader)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: __CdkPrivateStyleLoader,
    factory: __CdkPrivateStyleLoader.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_CdkPrivateStyleLoader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/private.mjs
var _VisuallyHiddenLoader = class __VisuallyHiddenLoader {
  static ɵfac = function _VisuallyHiddenLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __VisuallyHiddenLoader)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: __VisuallyHiddenLoader,
    selectors: [["ng-component"]],
    exportAs: ["cdkVisuallyHidden"],
    decls: 0,
    vars: 0,
    template: function _VisuallyHiddenLoader_Template(rf, ctx) {
    },
    styles: [".cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  left: 0;\n}\n[dir=rtl] .cdk-visually-hidden {\n  left: auto;\n  right: 0;\n}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_VisuallyHiddenLoader, [{
    type: Component,
    args: [{
      exportAs: "cdkVisuallyHidden",
      encapsulation: ViewEncapsulation.None,
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [".cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  left: 0;\n}\n[dir=rtl] .cdk-visually-hidden {\n  left: auto;\n  right: 0;\n}\n"]
    }]
  }], null, null);
})();
var policy;
function getPolicy() {
  if (policy === void 0) {
    policy = null;
    if (typeof window !== "undefined") {
      const ttWindow = window;
      if (ttWindow.trustedTypes !== void 0) {
        policy = ttWindow.trustedTypes.createPolicy("angular#components", {
          createHTML: (s) => s
        });
      }
    }
  }
  return policy;
}
function trustedHTMLFromString(html) {
  return getPolicy()?.createHTML(html) || html;
}
function _setInnerHtml(element, html, sanitizer) {
  const cleanHtml = sanitizer.sanitize(SecurityContext.HTML, html);
  if (cleanHtml === null && (typeof ngDevMode === "undefined" || ngDevMode)) {
    throw new Error(`Could not sanitize HTML: ${html}`);
  }
  element.innerHTML = trustedHTMLFromString(cleanHtml || "");
}

// node_modules/@angular/cdk/fesm2022/_array-chunk.mjs
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}

// node_modules/@angular/cdk/fesm2022/_breakpoints-observer-chunk.mjs
var mediaQueriesForWebkitCompatibility = /* @__PURE__ */ new Set();
var mediaQueryStyleNode;
var MediaMatcher = class _MediaMatcher {
  _platform = inject(Platform);
  _nonce = inject(CSP_NONCE, {
    optional: true
  });
  _matchMedia;
  constructor() {
    this._matchMedia = this._platform.isBrowser && window.matchMedia ? window.matchMedia.bind(window) : noopMatchMedia;
  }
  matchMedia(query) {
    if (this._platform.WEBKIT || this._platform.BLINK) {
      createEmptyStyleRule(query, this._nonce);
    }
    return this._matchMedia(query);
  }
  static ɵfac = function MediaMatcher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MediaMatcher)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _MediaMatcher,
    factory: _MediaMatcher.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaMatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function createEmptyStyleRule(query, nonce) {
  if (mediaQueriesForWebkitCompatibility.has(query)) {
    return;
  }
  try {
    if (!mediaQueryStyleNode) {
      mediaQueryStyleNode = document.createElement("style");
      if (nonce) {
        mediaQueryStyleNode.setAttribute("nonce", nonce);
      }
      mediaQueryStyleNode.setAttribute("type", "text/css");
      document.head.appendChild(mediaQueryStyleNode);
    }
    if (mediaQueryStyleNode.sheet) {
      mediaQueryStyleNode.sheet.insertRule(`@media ${query} {body{ }}`, 0);
      mediaQueriesForWebkitCompatibility.add(query);
    }
  } catch (e) {
    console.error(e);
  }
}
function noopMatchMedia(query) {
  return {
    matches: query === "all" || query === "",
    media: query,
    addListener: () => {
    },
    removeListener: () => {
    }
  };
}
var BreakpointObserver = class _BreakpointObserver {
  _mediaMatcher = inject(MediaMatcher);
  _zone = inject(NgZone);
  _queries = /* @__PURE__ */ new Map();
  _destroySubject = new Subject();
  constructor() {
  }
  ngOnDestroy() {
    this._destroySubject.next();
    this._destroySubject.complete();
  }
  isMatched(value) {
    const queries = splitQueries(coerceArray(value));
    return queries.some((mediaQuery) => this._registerQuery(mediaQuery).mql.matches);
  }
  observe(value) {
    const queries = splitQueries(coerceArray(value));
    const observables = queries.map((query) => this._registerQuery(query).observable);
    let stateObservable = combineLatest(observables);
    stateObservable = concat(stateObservable.pipe(take(1)), stateObservable.pipe(skip(1), debounceTime(0)));
    return stateObservable.pipe(map((breakpointStates) => {
      const response = {
        matches: false,
        breakpoints: {}
      };
      breakpointStates.forEach(({
        matches,
        query
      }) => {
        response.matches = response.matches || matches;
        response.breakpoints[query] = matches;
      });
      return response;
    }));
  }
  _registerQuery(query) {
    if (this._queries.has(query)) {
      return this._queries.get(query);
    }
    const mql = this._mediaMatcher.matchMedia(query);
    const queryObservable = new Observable((observer) => {
      const handler = (e) => this._zone.run(() => observer.next(e));
      mql.addListener(handler);
      return () => {
        mql.removeListener(handler);
      };
    }).pipe(startWith(mql), map(({
      matches
    }) => ({
      query,
      matches
    })), takeUntil(this._destroySubject));
    const output = {
      observable: queryObservable,
      mql
    };
    this._queries.set(query, output);
    return output;
  }
  static ɵfac = function BreakpointObserver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreakpointObserver)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _BreakpointObserver,
    factory: _BreakpointObserver.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreakpointObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function splitQueries(queries) {
  return queries.map((query) => query.split(",")).reduce((a1, a2) => a1.concat(a2)).map((query) => query.trim());
}

// node_modules/@angular/cdk/fesm2022/observers.mjs
function shouldIgnoreRecord(record) {
  if (record.type === "characterData" && record.target instanceof Comment) {
    return true;
  }
  if (record.type === "childList") {
    for (let i = 0; i < record.addedNodes.length; i++) {
      if (!(record.addedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    for (let i = 0; i < record.removedNodes.length; i++) {
      if (!(record.removedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    return true;
  }
  return false;
}
var MutationObserverFactory = class _MutationObserverFactory {
  create(callback) {
    return typeof MutationObserver === "undefined" ? null : new MutationObserver(callback);
  }
  static ɵfac = function MutationObserverFactory_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MutationObserverFactory)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _MutationObserverFactory,
    factory: _MutationObserverFactory.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MutationObserverFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ContentObserver = class _ContentObserver {
  _mutationObserverFactory = inject(MutationObserverFactory);
  _observedElements = /* @__PURE__ */ new Map();
  _ngZone = inject(NgZone);
  constructor() {
  }
  ngOnDestroy() {
    this._observedElements.forEach((_, element) => this._cleanupObserver(element));
  }
  observe(elementOrRef) {
    const element = coerceElement(elementOrRef);
    return new Observable((observer) => {
      const stream = this._observeElement(element);
      const subscription = stream.pipe(map((records) => records.filter((record) => !shouldIgnoreRecord(record))), filter((records) => !!records.length)).subscribe((records) => {
        this._ngZone.run(() => {
          observer.next(records);
        });
      });
      return () => {
        subscription.unsubscribe();
        this._unobserveElement(element);
      };
    });
  }
  _observeElement(element) {
    return this._ngZone.runOutsideAngular(() => {
      if (!this._observedElements.has(element)) {
        const stream = new Subject();
        const observer = this._mutationObserverFactory.create((mutations) => stream.next(mutations));
        if (observer) {
          observer.observe(element, {
            characterData: true,
            childList: true,
            subtree: true
          });
        }
        this._observedElements.set(element, {
          observer,
          stream,
          count: 1
        });
      } else {
        this._observedElements.get(element).count++;
      }
      return this._observedElements.get(element).stream;
    });
  }
  _unobserveElement(element) {
    if (this._observedElements.has(element)) {
      this._observedElements.get(element).count--;
      if (!this._observedElements.get(element).count) {
        this._cleanupObserver(element);
      }
    }
  }
  _cleanupObserver(element) {
    if (this._observedElements.has(element)) {
      const {
        observer,
        stream
      } = this._observedElements.get(element);
      if (observer) {
        observer.disconnect();
      }
      stream.complete();
      this._observedElements.delete(element);
    }
  }
  static ɵfac = function ContentObserver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContentObserver)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ContentObserver,
    factory: _ContentObserver.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContentObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CdkObserveContent = class _CdkObserveContent {
  _contentObserver = inject(ContentObserver);
  _elementRef = inject(ElementRef);
  event = new EventEmitter();
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._disabled ? this._unsubscribe() : this._subscribe();
  }
  _disabled = false;
  get debounce() {
    return this._debounce;
  }
  set debounce(value) {
    this._debounce = coerceNumberProperty(value);
    this._subscribe();
  }
  _debounce;
  _currentSubscription = null;
  constructor() {
  }
  ngAfterContentInit() {
    if (!this._currentSubscription && !this.disabled) {
      this._subscribe();
    }
  }
  ngOnDestroy() {
    this._unsubscribe();
  }
  _subscribe() {
    this._unsubscribe();
    const stream = this._contentObserver.observe(this._elementRef);
    this._currentSubscription = (this.debounce ? stream.pipe(debounceTime(this.debounce)) : stream).subscribe(this.event);
  }
  _unsubscribe() {
    this._currentSubscription?.unsubscribe();
  }
  static ɵfac = function CdkObserveContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkObserveContent)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _CdkObserveContent,
    selectors: [["", "cdkObserveContent", ""]],
    inputs: {
      disabled: [2, "cdkObserveContentDisabled", "disabled", booleanAttribute],
      debounce: "debounce"
    },
    outputs: {
      event: "cdkObserveContent"
    },
    exportAs: ["cdkObserveContent"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkObserveContent, [{
    type: Directive,
    args: [{
      selector: "[cdkObserveContent]",
      exportAs: "cdkObserveContent"
    }]
  }], () => [], {
    event: [{
      type: Output,
      args: ["cdkObserveContent"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkObserveContentDisabled",
        transform: booleanAttribute
      }]
    }],
    debounce: [{
      type: Input
    }]
  });
})();
var ObserversModule = class _ObserversModule {
  static ɵfac = function ObserversModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ObserversModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ObserversModule,
    imports: [CdkObserveContent],
    exports: [CdkObserveContent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [MutationObserverFactory]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ObserversModule, [{
    type: NgModule,
    args: [{
      imports: [CdkObserveContent],
      exports: [CdkObserveContent],
      providers: [MutationObserverFactory]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/_a11y-module-chunk.mjs
var InteractivityChecker = class _InteractivityChecker {
  _platform = inject(Platform);
  constructor() {
  }
  isDisabled(element) {
    return element.hasAttribute("disabled");
  }
  isVisible(element) {
    return hasGeometry(element) && getComputedStyle(element).visibility === "visible";
  }
  isTabbable(element) {
    if (!this._platform.isBrowser) {
      return false;
    }
    const frameElement = getFrameElement(getWindow(element));
    if (frameElement) {
      if (getTabIndexValue(frameElement) === -1) {
        return false;
      }
      if (!this.isVisible(frameElement)) {
        return false;
      }
    }
    let nodeName = element.nodeName.toLowerCase();
    let tabIndexValue = getTabIndexValue(element);
    if (element.hasAttribute("contenteditable")) {
      return tabIndexValue !== -1;
    }
    if (nodeName === "iframe" || nodeName === "object") {
      return false;
    }
    if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
      return false;
    }
    if (nodeName === "audio") {
      if (!element.hasAttribute("controls")) {
        return false;
      }
      return tabIndexValue !== -1;
    }
    if (nodeName === "video") {
      if (tabIndexValue === -1) {
        return false;
      }
      if (tabIndexValue !== null) {
        return true;
      }
      return this._platform.FIREFOX || element.hasAttribute("controls");
    }
    return element.tabIndex >= 0;
  }
  isFocusable(element, config) {
    return isPotentiallyFocusable(element) && !this.isDisabled(element) && (config?.ignoreVisibility || this.isVisible(element));
  }
  static ɵfac = function InteractivityChecker_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InteractivityChecker)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _InteractivityChecker,
    factory: _InteractivityChecker.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InteractivityChecker, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function getFrameElement(window2) {
  try {
    return window2.frameElement;
  } catch (e) {
    return null;
  }
}
function hasGeometry(element) {
  return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === "function" && element.getClientRects().length);
}
function isNativeFormElement(element) {
  let nodeName = element.nodeName.toLowerCase();
  return nodeName === "input" || nodeName === "select" || nodeName === "button" || nodeName === "textarea";
}
function isHiddenInput(element) {
  return isInputElement(element) && element.type == "hidden";
}
function isAnchorWithHref(element) {
  return isAnchorElement(element) && element.hasAttribute("href");
}
function isInputElement(element) {
  return element.nodeName.toLowerCase() == "input";
}
function isAnchorElement(element) {
  return element.nodeName.toLowerCase() == "a";
}
function hasValidTabIndex(element) {
  if (!element.hasAttribute("tabindex") || element.tabIndex === void 0) {
    return false;
  }
  let tabIndex = element.getAttribute("tabindex");
  return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
function getTabIndexValue(element) {
  if (!hasValidTabIndex(element)) {
    return null;
  }
  const tabIndex = parseInt(element.getAttribute("tabindex") || "", 10);
  return isNaN(tabIndex) ? -1 : tabIndex;
}
function isPotentiallyTabbableIOS(element) {
  let nodeName = element.nodeName.toLowerCase();
  let inputType = nodeName === "input" && element.type;
  return inputType === "text" || inputType === "password" || nodeName === "select" || nodeName === "textarea";
}
function isPotentiallyFocusable(element) {
  if (isHiddenInput(element)) {
    return false;
  }
  return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute("contenteditable") || hasValidTabIndex(element);
}
function getWindow(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || window;
}
var FocusTrap = class {
  _element;
  _checker;
  _ngZone;
  _document;
  _injector;
  _startAnchor = null;
  _endAnchor = null;
  _hasAttached = false;
  startAnchorListener = () => this.focusLastTabbableElement();
  endAnchorListener = () => this.focusFirstTabbableElement();
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(value, this._startAnchor);
      this._toggleAnchorTabIndex(value, this._endAnchor);
    }
  }
  _enabled = true;
  constructor(_element, _checker, _ngZone, _document, deferAnchors = false, _injector) {
    this._element = _element;
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document;
    this._injector = _injector;
    if (!deferAnchors) {
      this.attachAnchors();
    }
  }
  destroy() {
    const startAnchor = this._startAnchor;
    const endAnchor = this._endAnchor;
    if (startAnchor) {
      startAnchor.removeEventListener("focus", this.startAnchorListener);
      startAnchor.remove();
    }
    if (endAnchor) {
      endAnchor.removeEventListener("focus", this.endAnchorListener);
      endAnchor.remove();
    }
    this._startAnchor = this._endAnchor = null;
    this._hasAttached = false;
  }
  attachAnchors() {
    if (this._hasAttached) {
      return true;
    }
    this._ngZone.runOutsideAngular(() => {
      if (!this._startAnchor) {
        this._startAnchor = this._createAnchor();
        this._startAnchor.addEventListener("focus", this.startAnchorListener);
      }
      if (!this._endAnchor) {
        this._endAnchor = this._createAnchor();
        this._endAnchor.addEventListener("focus", this.endAnchorListener);
      }
    });
    if (this._element.parentNode) {
      this._element.parentNode.insertBefore(this._startAnchor, this._element);
      this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);
      this._hasAttached = true;
    }
    return this._hasAttached;
  }
  focusInitialElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusInitialElement(options)));
    });
  }
  focusFirstTabbableElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusFirstTabbableElement(options)));
    });
  }
  focusLastTabbableElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusLastTabbableElement(options)));
    });
  }
  _getRegionBoundary(bound) {
    const markers = this._element.querySelectorAll(`[cdk-focus-region-${bound}], [cdkFocusRegion${bound}], [cdk-focus-${bound}]`);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      for (let i = 0; i < markers.length; i++) {
        if (markers[i].hasAttribute(`cdk-focus-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i]);
        } else if (markers[i].hasAttribute(`cdk-focus-region-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-region-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i]);
        }
      }
    }
    if (bound == "start") {
      return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
    }
    return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
  }
  focusInitialElement(options) {
    const redirectToElement = this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);
    if (redirectToElement) {
      if ((typeof ngDevMode === "undefined" || ngDevMode) && redirectToElement.hasAttribute(`cdk-focus-initial`)) {
        console.warn(`Found use of deprecated attribute 'cdk-focus-initial', use 'cdkFocusInitial' instead. The deprecated attribute will be removed in 8.0.0`, redirectToElement);
      }
      if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._checker.isFocusable(redirectToElement)) {
        console.warn(`Element matching '[cdkFocusInitial]' is not focusable.`, redirectToElement);
      }
      if (!this._checker.isFocusable(redirectToElement)) {
        const focusableChild = this._getFirstTabbableElement(redirectToElement);
        focusableChild?.focus(options);
        return !!focusableChild;
      }
      redirectToElement.focus(options);
      return true;
    }
    return this.focusFirstTabbableElement(options);
  }
  focusFirstTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary("start");
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  focusLastTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary("end");
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  hasAttached() {
    return this._hasAttached;
  }
  _getFirstTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    const children = root.children;
    for (let i = 0; i < children.length; i++) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  _getLastTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    const children = root.children;
    for (let i = children.length - 1; i >= 0; i--) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  _createAnchor() {
    const anchor = this._document.createElement("div");
    this._toggleAnchorTabIndex(this._enabled, anchor);
    anchor.classList.add("cdk-visually-hidden");
    anchor.classList.add("cdk-focus-trap-anchor");
    anchor.setAttribute("aria-hidden", "true");
    return anchor;
  }
  _toggleAnchorTabIndex(isEnabled, anchor) {
    isEnabled ? anchor.setAttribute("tabindex", "0") : anchor.removeAttribute("tabindex");
  }
  toggleAnchors(enabled) {
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(enabled, this._startAnchor);
      this._toggleAnchorTabIndex(enabled, this._endAnchor);
    }
  }
  _executeOnStable(fn) {
    if (this._injector) {
      afterNextRender(fn, {
        injector: this._injector
      });
    } else {
      setTimeout(fn);
    }
  }
};
var FocusTrapFactory = class _FocusTrapFactory {
  _checker = inject(InteractivityChecker);
  _ngZone = inject(NgZone);
  _document = inject(DOCUMENT);
  _injector = inject(Injector);
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
  }
  create(element, deferCaptureElements = false) {
    return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements, this._injector);
  }
  static ɵfac = function FocusTrapFactory_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FocusTrapFactory)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _FocusTrapFactory,
    factory: _FocusTrapFactory.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CdkTrapFocus = class _CdkTrapFocus {
  _elementRef = inject(ElementRef);
  _focusTrapFactory = inject(FocusTrapFactory);
  focusTrap = void 0;
  _previouslyFocusedElement = null;
  get enabled() {
    return this.focusTrap?.enabled || false;
  }
  set enabled(value) {
    if (this.focusTrap) {
      this.focusTrap.enabled = value;
    }
  }
  autoCapture = false;
  constructor() {
    const platform = inject(Platform);
    if (platform.isBrowser) {
      this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
  }
  ngOnDestroy() {
    this.focusTrap?.destroy();
    if (this._previouslyFocusedElement) {
      this._previouslyFocusedElement.focus();
      this._previouslyFocusedElement = null;
    }
  }
  ngAfterContentInit() {
    this.focusTrap?.attachAnchors();
    if (this.autoCapture) {
      this._captureFocus();
    }
  }
  ngDoCheck() {
    if (this.focusTrap && !this.focusTrap.hasAttached()) {
      this.focusTrap.attachAnchors();
    }
  }
  ngOnChanges(changes) {
    const autoCaptureChange = changes["autoCapture"];
    if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap?.hasAttached()) {
      this._captureFocus();
    }
  }
  _captureFocus() {
    this._previouslyFocusedElement = _getFocusedElementPierceShadowDom();
    this.focusTrap?.focusInitialElementWhenReady();
  }
  static ɵfac = function CdkTrapFocus_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTrapFocus)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _CdkTrapFocus,
    selectors: [["", "cdkTrapFocus", ""]],
    inputs: {
      enabled: [2, "cdkTrapFocus", "enabled", booleanAttribute],
      autoCapture: [2, "cdkTrapFocusAutoCapture", "autoCapture", booleanAttribute]
    },
    exportAs: ["cdkTrapFocus"],
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTrapFocus, [{
    type: Directive,
    args: [{
      selector: "[cdkTrapFocus]",
      exportAs: "cdkTrapFocus"
    }]
  }], () => [], {
    enabled: [{
      type: Input,
      args: [{
        alias: "cdkTrapFocus",
        transform: booleanAttribute
      }]
    }],
    autoCapture: [{
      type: Input,
      args: [{
        alias: "cdkTrapFocusAutoCapture",
        transform: booleanAttribute
      }]
    }]
  });
})();
var LIVE_ANNOUNCER_ELEMENT_TOKEN = new InjectionToken("liveAnnouncerElement", {
  providedIn: "root",
  factory: () => null
});
var LIVE_ANNOUNCER_DEFAULT_OPTIONS = new InjectionToken("LIVE_ANNOUNCER_DEFAULT_OPTIONS");
var uniqueIds = 0;
var LiveAnnouncer = class _LiveAnnouncer {
  _ngZone = inject(NgZone);
  _defaultOptions = inject(LIVE_ANNOUNCER_DEFAULT_OPTIONS, {
    optional: true
  });
  _liveElement;
  _document = inject(DOCUMENT);
  _sanitizer = inject(DomSanitizer);
  _previousTimeout;
  _currentPromise;
  _currentResolve;
  constructor() {
    const elementToken = inject(LIVE_ANNOUNCER_ELEMENT_TOKEN, {
      optional: true
    });
    this._liveElement = elementToken || this._createLiveElement();
  }
  announce(message, ...args) {
    const defaultOptions = this._defaultOptions;
    let politeness;
    let duration;
    if (args.length === 1 && typeof args[0] === "number") {
      duration = args[0];
    } else {
      [politeness, duration] = args;
    }
    this.clear();
    clearTimeout(this._previousTimeout);
    if (!politeness) {
      politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : "polite";
    }
    if (duration == null && defaultOptions) {
      duration = defaultOptions.duration;
    }
    this._liveElement.setAttribute("aria-live", politeness);
    if (this._liveElement.id) {
      this._exposeAnnouncerToModals(this._liveElement.id);
    }
    return this._ngZone.runOutsideAngular(() => {
      if (!this._currentPromise) {
        this._currentPromise = new Promise((resolve) => this._currentResolve = resolve);
      }
      clearTimeout(this._previousTimeout);
      this._previousTimeout = setTimeout(() => {
        if (!message || typeof message === "string") {
          this._liveElement.textContent = message;
        } else {
          _setInnerHtml(this._liveElement, message, this._sanitizer);
        }
        if (typeof duration === "number") {
          this._previousTimeout = setTimeout(() => this.clear(), duration);
        }
        this._currentResolve?.();
        this._currentPromise = this._currentResolve = void 0;
      }, 100);
      return this._currentPromise;
    });
  }
  clear() {
    if (this._liveElement) {
      this._liveElement.textContent = "";
    }
  }
  ngOnDestroy() {
    clearTimeout(this._previousTimeout);
    this._liveElement?.remove();
    this._liveElement = null;
    this._currentResolve?.();
    this._currentPromise = this._currentResolve = void 0;
  }
  _createLiveElement() {
    const elementClass = "cdk-live-announcer-element";
    const previousElements = this._document.getElementsByClassName(elementClass);
    const liveEl = this._document.createElement("div");
    for (let i = 0; i < previousElements.length; i++) {
      previousElements[i].remove();
    }
    liveEl.classList.add(elementClass);
    liveEl.classList.add("cdk-visually-hidden");
    liveEl.setAttribute("aria-atomic", "true");
    liveEl.setAttribute("aria-live", "polite");
    liveEl.id = `cdk-live-announcer-${uniqueIds++}`;
    this._document.body.appendChild(liveEl);
    return liveEl;
  }
  _exposeAnnouncerToModals(id) {
    const modals = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');
    for (let i = 0; i < modals.length; i++) {
      const modal = modals[i];
      const ariaOwns = modal.getAttribute("aria-owns");
      if (!ariaOwns) {
        modal.setAttribute("aria-owns", id);
      } else if (ariaOwns.indexOf(id) === -1) {
        modal.setAttribute("aria-owns", ariaOwns + " " + id);
      }
    }
  }
  static ɵfac = function LiveAnnouncer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LiveAnnouncer)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _LiveAnnouncer,
    factory: _LiveAnnouncer.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LiveAnnouncer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CdkAriaLive = class _CdkAriaLive {
  _elementRef = inject(ElementRef);
  _liveAnnouncer = inject(LiveAnnouncer);
  _contentObserver = inject(ContentObserver);
  _ngZone = inject(NgZone);
  get politeness() {
    return this._politeness;
  }
  set politeness(value) {
    this._politeness = value === "off" || value === "assertive" ? value : "polite";
    if (this._politeness === "off") {
      if (this._subscription) {
        this._subscription.unsubscribe();
        this._subscription = void 0;
      }
    } else if (!this._subscription) {
      this._subscription = this._ngZone.runOutsideAngular(() => {
        return this._contentObserver.observe(this._elementRef).subscribe(() => {
          const elementText = this._elementRef.nativeElement.textContent;
          if (elementText !== this._previousAnnouncedText) {
            this._liveAnnouncer.announce(elementText, this._politeness, this.duration);
            this._previousAnnouncedText = elementText;
          }
        });
      });
    }
  }
  _politeness = "polite";
  duration;
  _previousAnnouncedText;
  _subscription;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
  }
  ngOnDestroy() {
    this._subscription?.unsubscribe();
  }
  static ɵfac = function CdkAriaLive_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkAriaLive)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _CdkAriaLive,
    selectors: [["", "cdkAriaLive", ""]],
    inputs: {
      politeness: [0, "cdkAriaLive", "politeness"],
      duration: [0, "cdkAriaLiveDuration", "duration"]
    },
    exportAs: ["cdkAriaLive"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAriaLive, [{
    type: Directive,
    args: [{
      selector: "[cdkAriaLive]",
      exportAs: "cdkAriaLive"
    }]
  }], () => [], {
    politeness: [{
      type: Input,
      args: ["cdkAriaLive"]
    }],
    duration: [{
      type: Input,
      args: ["cdkAriaLiveDuration"]
    }]
  });
})();
var HighContrastMode;
(function(HighContrastMode2) {
  HighContrastMode2[HighContrastMode2["NONE"] = 0] = "NONE";
  HighContrastMode2[HighContrastMode2["BLACK_ON_WHITE"] = 1] = "BLACK_ON_WHITE";
  HighContrastMode2[HighContrastMode2["WHITE_ON_BLACK"] = 2] = "WHITE_ON_BLACK";
})(HighContrastMode || (HighContrastMode = {}));
var BLACK_ON_WHITE_CSS_CLASS = "cdk-high-contrast-black-on-white";
var WHITE_ON_BLACK_CSS_CLASS = "cdk-high-contrast-white-on-black";
var HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = "cdk-high-contrast-active";
var HighContrastModeDetector = class _HighContrastModeDetector {
  _platform = inject(Platform);
  _hasCheckedHighContrastMode = false;
  _document = inject(DOCUMENT);
  _breakpointSubscription;
  constructor() {
    this._breakpointSubscription = inject(BreakpointObserver).observe("(forced-colors: active)").subscribe(() => {
      if (this._hasCheckedHighContrastMode) {
        this._hasCheckedHighContrastMode = false;
        this._applyBodyHighContrastModeCssClasses();
      }
    });
  }
  getHighContrastMode() {
    if (!this._platform.isBrowser) {
      return HighContrastMode.NONE;
    }
    const testElement = this._document.createElement("div");
    testElement.style.backgroundColor = "rgb(1,2,3)";
    testElement.style.position = "absolute";
    this._document.body.appendChild(testElement);
    const documentWindow = this._document.defaultView || window;
    const computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
    const computedColor = (computedStyle && computedStyle.backgroundColor || "").replace(/ /g, "");
    testElement.remove();
    switch (computedColor) {
      case "rgb(0,0,0)":
      case "rgb(45,50,54)":
      case "rgb(32,32,32)":
        return HighContrastMode.WHITE_ON_BLACK;
      case "rgb(255,255,255)":
      case "rgb(255,250,239)":
        return HighContrastMode.BLACK_ON_WHITE;
    }
    return HighContrastMode.NONE;
  }
  ngOnDestroy() {
    this._breakpointSubscription.unsubscribe();
  }
  _applyBodyHighContrastModeCssClasses() {
    if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
      const bodyClasses = this._document.body.classList;
      bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
      this._hasCheckedHighContrastMode = true;
      const mode = this.getHighContrastMode();
      if (mode === HighContrastMode.BLACK_ON_WHITE) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS);
      } else if (mode === HighContrastMode.WHITE_ON_BLACK) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
      }
    }
  }
  static ɵfac = function HighContrastModeDetector_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HighContrastModeDetector)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _HighContrastModeDetector,
    factory: _HighContrastModeDetector.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighContrastModeDetector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var A11yModule = class _A11yModule {
  constructor() {
    inject(HighContrastModeDetector)._applyBodyHighContrastModeCssClasses();
  }
  static ɵfac = function A11yModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _A11yModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _A11yModule,
    imports: [ObserversModule, CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
    exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [ObserversModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(A11yModule, [{
    type: NgModule,
    args: [{
      imports: [ObserversModule, CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
      exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
    }]
  }], () => [], null);
})();

// node_modules/@angular/cdk/fesm2022/_typeahead-chunk.mjs
var DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS = 200;
var Typeahead = class {
  _letterKeyStream = new Subject();
  _items = [];
  _selectedItemIndex = -1;
  _pressedLetters = [];
  _skipPredicateFn;
  _selectedItem = new Subject();
  selectedItem = this._selectedItem;
  constructor(initialItems, config) {
    const typeAheadInterval = typeof config?.debounceInterval === "number" ? config.debounceInterval : DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS;
    if (config?.skipPredicate) {
      this._skipPredicateFn = config.skipPredicate;
    }
    if ((typeof ngDevMode === "undefined" || ngDevMode) && initialItems.length && initialItems.some((item) => typeof item.getLabel !== "function")) {
      throw new Error("KeyManager items in typeahead mode must implement the `getLabel` method.");
    }
    this.setItems(initialItems);
    this._setupKeyHandler(typeAheadInterval);
  }
  destroy() {
    this._pressedLetters = [];
    this._letterKeyStream.complete();
    this._selectedItem.complete();
  }
  setCurrentSelectedItemIndex(index) {
    this._selectedItemIndex = index;
  }
  setItems(items) {
    this._items = items;
  }
  handleKey(event) {
    const keyCode = event.keyCode;
    if (event.key && event.key.length === 1) {
      this._letterKeyStream.next(event.key.toLocaleUpperCase());
    } else if (keyCode >= A && keyCode <= Z || keyCode >= ZERO && keyCode <= NINE) {
      this._letterKeyStream.next(String.fromCharCode(keyCode));
    }
  }
  isTyping() {
    return this._pressedLetters.length > 0;
  }
  reset() {
    this._pressedLetters = [];
  }
  _setupKeyHandler(typeAheadInterval) {
    this._letterKeyStream.pipe(tap((letter) => this._pressedLetters.push(letter)), debounceTime(typeAheadInterval), filter(() => this._pressedLetters.length > 0), map(() => this._pressedLetters.join("").toLocaleUpperCase())).subscribe((inputString) => {
      for (let i = 1; i < this._items.length + 1; i++) {
        const index = (this._selectedItemIndex + i) % this._items.length;
        const item = this._items[index];
        if (!this._skipPredicateFn?.(item) && item.getLabel?.().toLocaleUpperCase().trim().indexOf(inputString) === 0) {
          this._selectedItem.next(item);
          break;
        }
      }
      this._pressedLetters = [];
    });
  }
};

// node_modules/@angular/cdk/fesm2022/coercion-private.mjs
function coerceObservable(data) {
  if (!isObservable(data)) {
    return of(data);
  }
  return data;
}

// node_modules/@angular/cdk/fesm2022/_tree-key-manager-chunk.mjs
var TreeKeyManager = class {
  _activeItemIndex = -1;
  _activeItem = null;
  _shouldActivationFollowFocus = false;
  _horizontalOrientation = "ltr";
  _skipPredicateFn = (_item) => false;
  _trackByFn = (item) => item;
  _items = [];
  _typeahead;
  _typeaheadSubscription = Subscription.EMPTY;
  _hasInitialFocused = false;
  _initializeFocus() {
    if (this._hasInitialFocused || this._items.length === 0) {
      return;
    }
    let activeIndex = 0;
    for (let i = 0; i < this._items.length; i++) {
      if (!this._skipPredicateFn(this._items[i]) && !this._isItemDisabled(this._items[i])) {
        activeIndex = i;
        break;
      }
    }
    const activeItem = this._items[activeIndex];
    if (activeItem.makeFocusable) {
      this._activeItem?.unfocus();
      this._activeItemIndex = activeIndex;
      this._activeItem = activeItem;
      this._typeahead?.setCurrentSelectedItemIndex(activeIndex);
      activeItem.makeFocusable();
    } else {
      this.focusItem(activeIndex);
    }
    this._hasInitialFocused = true;
  }
  constructor(items, config) {
    if (items instanceof QueryList) {
      this._items = items.toArray();
      items.changes.subscribe((newItems) => this._itemsChanged(newItems.toArray()));
    } else if (isObservable(items)) {
      items.subscribe((newItems) => this._itemsChanged(newItems));
    } else {
      this._items = items;
      this._initializeFocus();
    }
    if (typeof config.shouldActivationFollowFocus === "boolean") {
      this._shouldActivationFollowFocus = config.shouldActivationFollowFocus;
    }
    if (config.horizontalOrientation) {
      this._horizontalOrientation = config.horizontalOrientation;
    }
    if (config.skipPredicate) {
      this._skipPredicateFn = config.skipPredicate;
    }
    if (config.trackBy) {
      this._trackByFn = config.trackBy;
    }
    if (typeof config.typeAheadDebounceInterval !== "undefined") {
      this._setTypeAhead(config.typeAheadDebounceInterval);
    }
  }
  change = new Subject();
  destroy() {
    this._typeaheadSubscription.unsubscribe();
    this._typeahead?.destroy();
    this.change.complete();
  }
  onKeydown(event) {
    const key = event.key;
    switch (key) {
      case "Tab":
        return;
      case "ArrowDown":
        this._focusNextItem();
        break;
      case "ArrowUp":
        this._focusPreviousItem();
        break;
      case "ArrowRight":
        this._horizontalOrientation === "rtl" ? this._collapseCurrentItem() : this._expandCurrentItem();
        break;
      case "ArrowLeft":
        this._horizontalOrientation === "rtl" ? this._expandCurrentItem() : this._collapseCurrentItem();
        break;
      case "Home":
        this._focusFirstItem();
        break;
      case "End":
        this._focusLastItem();
        break;
      case "Enter":
      case " ":
        this._activateCurrentItem();
        break;
      default:
        if (event.key === "*") {
          this._expandAllItemsAtCurrentItemLevel();
          break;
        }
        this._typeahead?.handleKey(event);
        return;
    }
    this._typeahead?.reset();
    event.preventDefault();
  }
  getActiveItemIndex() {
    return this._activeItemIndex;
  }
  getActiveItem() {
    return this._activeItem;
  }
  _itemsChanged(newItems) {
    if (this._hasInitialFocused && this._activeItem && !newItems.includes(this._activeItem)) {
      this._activeItem = null;
      this._hasInitialFocused = false;
    }
    this._items = newItems;
    this._typeahead?.setItems(this._items);
    this._updateActiveItemIndex(this._items);
    this._initializeFocus();
  }
  _focusFirstItem() {
    this.focusItem(this._findNextAvailableItemIndex(-1));
  }
  _focusLastItem() {
    this.focusItem(this._findPreviousAvailableItemIndex(this._items.length));
  }
  _focusNextItem() {
    this.focusItem(this._findNextAvailableItemIndex(this._activeItemIndex));
  }
  _focusPreviousItem() {
    this.focusItem(this._findPreviousAvailableItemIndex(this._activeItemIndex));
  }
  focusItem(itemOrIndex, options = {}) {
    options.emitChangeEvent ??= true;
    let index = typeof itemOrIndex === "number" ? itemOrIndex : this._items.findIndex((item) => this._trackByFn(item) === this._trackByFn(itemOrIndex));
    if (index < 0 || index >= this._items.length) {
      return;
    }
    const activeItem = this._items[index];
    if (this._activeItem !== null && this._trackByFn(activeItem) === this._trackByFn(this._activeItem)) {
      return;
    }
    const previousActiveItem = this._activeItem;
    this._activeItem = activeItem ?? null;
    this._activeItemIndex = index;
    this._typeahead?.setCurrentSelectedItemIndex(index);
    this._activeItem?.focus();
    previousActiveItem?.unfocus();
    if (options.emitChangeEvent) {
      this.change.next(this._activeItem);
    }
    if (this._shouldActivationFollowFocus) {
      this._activateCurrentItem();
    }
  }
  _updateActiveItemIndex(newItems) {
    const activeItem = this._activeItem;
    if (!activeItem) {
      return;
    }
    const newIndex = newItems.findIndex((item) => this._trackByFn(item) === this._trackByFn(activeItem));
    if (newIndex > -1 && newIndex !== this._activeItemIndex) {
      this._activeItemIndex = newIndex;
      this._typeahead?.setCurrentSelectedItemIndex(newIndex);
    }
  }
  _setTypeAhead(debounceInterval) {
    this._typeahead = new Typeahead(this._items, {
      debounceInterval: typeof debounceInterval === "number" ? debounceInterval : void 0,
      skipPredicate: (item) => this._skipPredicateFn(item)
    });
    this._typeaheadSubscription = this._typeahead.selectedItem.subscribe((item) => {
      this.focusItem(item);
    });
  }
  _findNextAvailableItemIndex(startingIndex) {
    for (let i = startingIndex + 1; i < this._items.length; i++) {
      if (!this._skipPredicateFn(this._items[i])) {
        return i;
      }
    }
    return startingIndex;
  }
  _findPreviousAvailableItemIndex(startingIndex) {
    for (let i = startingIndex - 1; i >= 0; i--) {
      if (!this._skipPredicateFn(this._items[i])) {
        return i;
      }
    }
    return startingIndex;
  }
  _collapseCurrentItem() {
    if (!this._activeItem) {
      return;
    }
    if (this._isCurrentItemExpanded()) {
      this._activeItem.collapse();
    } else {
      const parent = this._activeItem.getParent();
      if (!parent || this._skipPredicateFn(parent)) {
        return;
      }
      this.focusItem(parent);
    }
  }
  _expandCurrentItem() {
    if (!this._activeItem) {
      return;
    }
    if (!this._isCurrentItemExpanded()) {
      this._activeItem.expand();
    } else {
      coerceObservable(this._activeItem.getChildren()).pipe(take(1)).subscribe((children) => {
        const firstChild = children.find((child) => !this._skipPredicateFn(child));
        if (!firstChild) {
          return;
        }
        this.focusItem(firstChild);
      });
    }
  }
  _isCurrentItemExpanded() {
    if (!this._activeItem) {
      return false;
    }
    return typeof this._activeItem.isExpanded === "boolean" ? this._activeItem.isExpanded : this._activeItem.isExpanded();
  }
  _isItemDisabled(item) {
    return typeof item.isDisabled === "boolean" ? item.isDisabled : item.isDisabled?.();
  }
  _expandAllItemsAtCurrentItemLevel() {
    if (!this._activeItem) {
      return;
    }
    const parent = this._activeItem.getParent();
    let itemsToExpand;
    if (!parent) {
      itemsToExpand = of(this._items.filter((item) => item.getParent() === null));
    } else {
      itemsToExpand = coerceObservable(parent.getChildren());
    }
    itemsToExpand.pipe(take(1)).subscribe((items) => {
      for (const item of items) {
        item.expand();
      }
    });
  }
  _activateCurrentItem() {
    this._activeItem?.activate();
  }
};
var TREE_KEY_MANAGER = new InjectionToken("tree-key-manager", {
  providedIn: "root",
  factory: () => (items, options) => new TreeKeyManager(items, options)
});

// node_modules/@angular/cdk/fesm2022/_id-generator-chunk.mjs
var counters = {};
var _IdGenerator = class __IdGenerator {
  _appId = inject(APP_ID);
  static _infix = `a${Math.floor(Math.random() * 1e5).toString()}`;
  getId(prefix, randomize = false) {
    if (this._appId !== "ng") {
      prefix += this._appId;
    }
    if (!counters.hasOwnProperty(prefix)) {
      counters[prefix] = 0;
    }
    return `${prefix}${randomize ? __IdGenerator._infix + "-" : ""}${counters[prefix]++}`;
  }
  static ɵfac = function _IdGenerator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __IdGenerator)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: __IdGenerator,
    factory: __IdGenerator.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_IdGenerator, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/a11y.mjs
var ID_DELIMITER = " ";
function addAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  if (ids.some((existingId) => existingId.trim() === id)) {
    return;
  }
  ids.push(id);
  el.setAttribute(attr, ids.join(ID_DELIMITER));
}
function removeAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  const filteredIds = ids.filter((val) => val !== id);
  if (filteredIds.length) {
    el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
  } else {
    el.removeAttribute(attr);
  }
}
function getAriaReferenceIds(el, attr) {
  const attrValue = el.getAttribute(attr);
  return attrValue?.match(/\S+/g) ?? [];
}
var CDK_DESCRIBEDBY_ID_PREFIX = "cdk-describedby-message";
var CDK_DESCRIBEDBY_HOST_ATTRIBUTE = "cdk-describedby-host";
var nextId = 0;
var AriaDescriber = class _AriaDescriber {
  _platform = inject(Platform);
  _document = inject(DOCUMENT);
  _messageRegistry = /* @__PURE__ */ new Map();
  _messagesContainer = null;
  _id = `${nextId++}`;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
    this._id = inject(APP_ID) + "-" + nextId++;
  }
  describe(hostElement, message, role) {
    if (!this._canBeDescribed(hostElement, message)) {
      return;
    }
    const key = getKey(message, role);
    if (typeof message !== "string") {
      setMessageId(message, this._id);
      this._messageRegistry.set(key, {
        messageElement: message,
        referenceCount: 0
      });
    } else if (!this._messageRegistry.has(key)) {
      this._createMessageElement(message, role);
    }
    if (!this._isElementDescribedByMessage(hostElement, key)) {
      this._addMessageReference(hostElement, key);
    }
  }
  removeDescription(hostElement, message, role) {
    if (!message || !this._isElementNode(hostElement)) {
      return;
    }
    const key = getKey(message, role);
    if (this._isElementDescribedByMessage(hostElement, key)) {
      this._removeMessageReference(hostElement, key);
    }
    if (typeof message === "string") {
      const registeredMessage = this._messageRegistry.get(key);
      if (registeredMessage && registeredMessage.referenceCount === 0) {
        this._deleteMessageElement(key);
      }
    }
    if (this._messagesContainer?.childNodes.length === 0) {
      this._messagesContainer.remove();
      this._messagesContainer = null;
    }
  }
  ngOnDestroy() {
    const describedElements = this._document.querySelectorAll(`[${CDK_DESCRIBEDBY_HOST_ATTRIBUTE}="${this._id}"]`);
    for (let i = 0; i < describedElements.length; i++) {
      this._removeCdkDescribedByReferenceIds(describedElements[i]);
      describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    }
    this._messagesContainer?.remove();
    this._messagesContainer = null;
    this._messageRegistry.clear();
  }
  _createMessageElement(message, role) {
    const messageElement = this._document.createElement("div");
    setMessageId(messageElement, this._id);
    messageElement.textContent = message;
    if (role) {
      messageElement.setAttribute("role", role);
    }
    this._createMessagesContainer();
    this._messagesContainer.appendChild(messageElement);
    this._messageRegistry.set(getKey(message, role), {
      messageElement,
      referenceCount: 0
    });
  }
  _deleteMessageElement(key) {
    this._messageRegistry.get(key)?.messageElement?.remove();
    this._messageRegistry.delete(key);
  }
  _createMessagesContainer() {
    if (this._messagesContainer) {
      return;
    }
    const containerClassName = "cdk-describedby-message-container";
    const serverContainers = this._document.querySelectorAll(`.${containerClassName}[platform="server"]`);
    for (let i = 0; i < serverContainers.length; i++) {
      serverContainers[i].remove();
    }
    const messagesContainer = this._document.createElement("div");
    messagesContainer.style.visibility = "hidden";
    messagesContainer.classList.add(containerClassName);
    messagesContainer.classList.add("cdk-visually-hidden");
    if (!this._platform.isBrowser) {
      messagesContainer.setAttribute("platform", "server");
    }
    this._document.body.appendChild(messagesContainer);
    this._messagesContainer = messagesContainer;
  }
  _removeCdkDescribedByReferenceIds(element) {
    const originalReferenceIds = getAriaReferenceIds(element, "aria-describedby").filter((id) => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0);
    element.setAttribute("aria-describedby", originalReferenceIds.join(" "));
  }
  _addMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key);
    addAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
    element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, this._id);
    registeredMessage.referenceCount++;
  }
  _removeMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key);
    registeredMessage.referenceCount--;
    removeAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
    element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
  }
  _isElementDescribedByMessage(element, key) {
    const referenceIds = getAriaReferenceIds(element, "aria-describedby");
    const registeredMessage = this._messageRegistry.get(key);
    const messageId = registeredMessage && registeredMessage.messageElement.id;
    return !!messageId && referenceIds.indexOf(messageId) != -1;
  }
  _canBeDescribed(element, message) {
    if (!this._isElementNode(element)) {
      return false;
    }
    if (message && typeof message === "object") {
      return true;
    }
    const trimmedMessage = message == null ? "" : `${message}`.trim();
    const ariaLabel = element.getAttribute("aria-label");
    return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
  }
  _isElementNode(element) {
    return element.nodeType === this._document.ELEMENT_NODE;
  }
  static ɵfac = function AriaDescriber_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AriaDescriber)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _AriaDescriber,
    factory: _AriaDescriber.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AriaDescriber, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function getKey(message, role) {
  return typeof message === "string" ? `${role || ""}/${message}` : message;
}
function setMessageId(element, serviceId) {
  if (!element.id) {
    element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${serviceId}-${nextId++}`;
  }
}
var ConfigurableFocusTrap = class extends FocusTrap {
  _focusTrapManager;
  _inertStrategy;
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._enabled) {
      this._focusTrapManager.register(this);
    } else {
      this._focusTrapManager.deregister(this);
    }
  }
  constructor(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config, injector) {
    super(_element, _checker, _ngZone, _document, config.defer, injector);
    this._focusTrapManager = _focusTrapManager;
    this._inertStrategy = _inertStrategy;
    this._focusTrapManager.register(this);
  }
  destroy() {
    this._focusTrapManager.deregister(this);
    super.destroy();
  }
  _enable() {
    this._inertStrategy.preventFocus(this);
    this.toggleAnchors(true);
  }
  _disable() {
    this._inertStrategy.allowFocus(this);
    this.toggleAnchors(false);
  }
};
var EventListenerFocusTrapInertStrategy = class {
  _listener = null;
  preventFocus(focusTrap) {
    if (this._listener) {
      focusTrap._document.removeEventListener("focus", this._listener, true);
    }
    this._listener = (e) => this._trapFocus(focusTrap, e);
    focusTrap._ngZone.runOutsideAngular(() => {
      focusTrap._document.addEventListener("focus", this._listener, true);
    });
  }
  allowFocus(focusTrap) {
    if (!this._listener) {
      return;
    }
    focusTrap._document.removeEventListener("focus", this._listener, true);
    this._listener = null;
  }
  _trapFocus(focusTrap, event) {
    const target = event.target;
    const focusTrapRoot = focusTrap._element;
    if (target && !focusTrapRoot.contains(target) && !target.closest?.("div.cdk-overlay-pane")) {
      setTimeout(() => {
        if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
          focusTrap.focusFirstTabbableElement();
        }
      });
    }
  }
};
var FOCUS_TRAP_INERT_STRATEGY = new InjectionToken("FOCUS_TRAP_INERT_STRATEGY");
var FocusTrapManager = class _FocusTrapManager {
  _focusTrapStack = [];
  register(focusTrap) {
    this._focusTrapStack = this._focusTrapStack.filter((ft) => ft !== focusTrap);
    let stack = this._focusTrapStack;
    if (stack.length) {
      stack[stack.length - 1]._disable();
    }
    stack.push(focusTrap);
    focusTrap._enable();
  }
  deregister(focusTrap) {
    focusTrap._disable();
    const stack = this._focusTrapStack;
    const i = stack.indexOf(focusTrap);
    if (i !== -1) {
      stack.splice(i, 1);
      if (stack.length) {
        stack[stack.length - 1]._enable();
      }
    }
  }
  static ɵfac = function FocusTrapManager_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FocusTrapManager)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _FocusTrapManager,
    factory: _FocusTrapManager.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ConfigurableFocusTrapFactory = class _ConfigurableFocusTrapFactory {
  _checker = inject(InteractivityChecker);
  _ngZone = inject(NgZone);
  _focusTrapManager = inject(FocusTrapManager);
  _document = inject(DOCUMENT);
  _inertStrategy;
  _injector = inject(Injector);
  constructor() {
    const inertStrategy = inject(FOCUS_TRAP_INERT_STRATEGY, {
      optional: true
    });
    this._inertStrategy = inertStrategy || new EventListenerFocusTrapInertStrategy();
  }
  create(element, config = {
    defer: false
  }) {
    let configObject;
    if (typeof config === "boolean") {
      configObject = {
        defer: config
      };
    } else {
      configObject = config;
    }
    return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject, this._injector);
  }
  static ɵfac = function ConfigurableFocusTrapFactory_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfigurableFocusTrapFactory)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ConfigurableFocusTrapFactory,
    factory: _ConfigurableFocusTrapFactory.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigurableFocusTrapFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@angular/cdk/fesm2022/_directionality-chunk.mjs
var DIR_DOCUMENT = new InjectionToken("cdk-dir-doc", {
  providedIn: "root",
  factory: () => inject(DOCUMENT)
});
var RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || "";
  if (value === "auto" && typeof navigator !== "undefined" && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? "rtl" : "ltr";
  }
  return value === "rtl" ? "rtl" : "ltr";
}
var Directionality = class _Directionality {
  get value() {
    return this.valueSignal();
  }
  valueSignal = signal("ltr", ...ngDevMode ? [{
    debugName: "valueSignal"
  }] : []);
  change = new EventEmitter();
  constructor() {
    const _document = inject(DIR_DOCUMENT, {
      optional: true
    });
    if (_document) {
      const bodyDir = _document.body ? _document.body.dir : null;
      const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
      this.valueSignal.set(_resolveDirectionality(bodyDir || htmlDir || "ltr"));
    }
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static ɵfac = function Directionality_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Directionality)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _Directionality,
    factory: _Directionality.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Directionality, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@angular/cdk/fesm2022/bidi.mjs
var Dir = class _Dir {
  _isInitialized = false;
  _rawDir = "";
  change = new EventEmitter();
  get dir() {
    return this.valueSignal();
  }
  set dir(value) {
    const previousValue = this.valueSignal();
    this.valueSignal.set(_resolveDirectionality(value));
    this._rawDir = value;
    if (previousValue !== this.valueSignal() && this._isInitialized) {
      this.change.emit(this.valueSignal());
    }
  }
  get value() {
    return this.dir;
  }
  valueSignal = signal("ltr", ...ngDevMode ? [{
    debugName: "valueSignal"
  }] : []);
  ngAfterContentInit() {
    this._isInitialized = true;
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static ɵfac = function Dir_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dir)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _Dir,
    selectors: [["", "dir", ""]],
    hostVars: 1,
    hostBindings: function Dir_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx._rawDir);
      }
    },
    inputs: {
      dir: "dir"
    },
    outputs: {
      change: "dirChange"
    },
    exportAs: ["dir"],
    features: [ɵɵProvidersFeature([{
      provide: Directionality,
      useExisting: _Dir
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dir, [{
    type: Directive,
    args: [{
      selector: "[dir]",
      providers: [{
        provide: Directionality,
        useExisting: Dir
      }],
      host: {
        "[attr.dir]": "_rawDir"
      },
      exportAs: "dir"
    }]
  }], null, {
    change: [{
      type: Output,
      args: ["dirChange"]
    }],
    dir: [{
      type: Input
    }]
  });
})();
var BidiModule = class _BidiModule {
  static ɵfac = function BidiModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BidiModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _BidiModule,
    imports: [Dir],
    exports: [Dir]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BidiModule, [{
    type: NgModule,
    args: [{
      imports: [Dir],
      exports: [Dir]
    }]
  }], null, null);
})();

// node_modules/@angular/aria/fesm2022/_deferred-content-chunk.mjs
var DeferredContentAware = class _DeferredContentAware {
  contentVisible = signal(false, ...ngDevMode ? [{
    debugName: "contentVisible"
  }] : []);
  preserveContent = model(false, ...ngDevMode ? [{
    debugName: "preserveContent"
  }] : []);
  static ɵfac = function DeferredContentAware_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeferredContentAware)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DeferredContentAware,
    inputs: {
      preserveContent: [1, "preserveContent"]
    },
    outputs: {
      preserveContent: "preserveContentChange"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeferredContentAware, [{
    type: Directive
  }], null, {
    preserveContent: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "preserveContent",
        required: false
      }]
    }, {
      type: Output,
      args: ["preserveContentChange"]
    }]
  });
})();
var DeferredContent = class _DeferredContent {
  _deferredContentAware = inject(DeferredContentAware, {
    optional: true
  });
  _templateRef = inject(TemplateRef);
  _viewContainerRef = inject(ViewContainerRef);
  _currentViewRef = null;
  _isRendered = false;
  deferredContentAware = signal(this._deferredContentAware, ...ngDevMode ? [{
    debugName: "deferredContentAware"
  }] : []);
  constructor() {
    afterRenderEffect(() => {
      if (this.deferredContentAware()?.contentVisible()) {
        if (!this._isRendered) {
          this._destroyContent();
          this._currentViewRef = this._viewContainerRef.createEmbeddedView(this._templateRef);
          this._isRendered = true;
        }
      } else if (!this.deferredContentAware()?.preserveContent()) {
        this._destroyContent();
        this._isRendered = false;
      }
    });
  }
  ngOnDestroy() {
    this._destroyContent();
  }
  _destroyContent() {
    const ref = this._currentViewRef;
    if (ref && !ref.destroyed) {
      ref.destroy();
      this._currentViewRef = null;
    }
  }
  static ɵfac = function DeferredContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeferredContent)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DeferredContent
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeferredContent, [{
    type: Directive
  }], () => [], null);
})();

// node_modules/@angular/aria/fesm2022/_signal-like-chunk.mjs
var Modifier;
(function(Modifier2) {
  Modifier2[Modifier2["None"] = 0] = "None";
  Modifier2[Modifier2["Ctrl"] = 1] = "Ctrl";
  Modifier2[Modifier2["Shift"] = 2] = "Shift";
  Modifier2[Modifier2["Alt"] = 4] = "Alt";
  Modifier2[Modifier2["Meta"] = 8] = "Meta";
  Modifier2["Any"] = "Any";
})(Modifier || (Modifier = {}));
var EventManager = class {
  configs = [];
  handle(event) {
    for (const config of this.configs) {
      if (config.matcher(event)) {
        config.handler(event);
        if (config.preventDefault) {
          event.preventDefault();
        }
        if (config.stopPropagation) {
          event.stopPropagation();
        }
      }
    }
  }
};
function getModifiers(event) {
  return (+event.ctrlKey && Modifier.Ctrl) | (+event.shiftKey && Modifier.Shift) | (+event.altKey && Modifier.Alt) | (+event.metaKey && Modifier.Meta);
}
function hasModifiers(event, modifiers) {
  const eventModifiers = getModifiers(event);
  const modifiersList = Array.isArray(modifiers) ? modifiers : [modifiers];
  if (modifiersList.includes(Modifier.Any)) {
    return true;
  }
  return modifiersList.some((modifiers2) => eventModifiers === modifiers2);
}
var KeyboardEventManager = class extends EventManager {
  options = {
    ignoreRepeat: true,
    preventDefault: true,
    stopPropagation: true
  };
  on(...args) {
    const {
      modifiers,
      key,
      handler,
      options
    } = this._normalizeInputs(...args);
    this.configs.push(__spreadValues(__spreadValues({
      handler,
      matcher: (event) => this._isMatch(event, key, modifiers, options)
    }, this.options), options));
    return this;
  }
  _normalizeInputs(...args) {
    const withModifiers = Array.isArray(args[0]) || args[0] in Modifier;
    const modifiers = withModifiers ? args[0] : Modifier.None;
    const key = withModifiers ? args[1] : args[0];
    const handler = withModifiers ? args[2] : args[1];
    const options = withModifiers ? args[3] : args[2];
    return {
      key,
      handler,
      modifiers,
      options: options ?? {}
    };
  }
  _isMatch(event, key, modifiers, options) {
    if (!hasModifiers(event, modifiers)) {
      return false;
    }
    if (event.repeat && options?.ignoreRepeat !== false) {
      return false;
    }
    if (key instanceof RegExp) {
      return key.test(event.key);
    }
    const keyStr = typeof key === "string" ? key : key();
    return keyStr.toLowerCase() === event.key.toLowerCase();
  }
};
function computed2(computation) {
  const computed3 = createComputed(computation);
  computed3.toString = () => `[Computed: ${computed3()}]`;
  computed3[SIGNAL].debugName = "";
  return computed3;
}
function signal2(initialValue) {
  const [get, set, update] = createSignal(initialValue);
  get[SIGNAL].debugName = "";
  return Object.assign(get, {
    set,
    update,
    asReadonly: () => get
  });
}

// node_modules/@angular/aria/fesm2022/_pointer-event-manager-chunk.mjs
var MouseButton;
(function(MouseButton2) {
  MouseButton2[MouseButton2["Main"] = 0] = "Main";
  MouseButton2[MouseButton2["Auxiliary"] = 1] = "Auxiliary";
  MouseButton2[MouseButton2["Secondary"] = 2] = "Secondary";
})(MouseButton || (MouseButton = {}));
var PointerEventManager = class extends EventManager {
  options = {
    preventDefault: false,
    stopPropagation: false
  };
  on(...args) {
    const {
      button,
      handler,
      modifiers
    } = this._normalizeInputs(...args);
    this.configs.push(__spreadValues({
      handler,
      matcher: (event) => this._isMatch(event, button, modifiers)
    }, this.options));
    return this;
  }
  _normalizeInputs(...args) {
    if (args.length === 3) {
      return {
        button: args[0],
        modifiers: args[1],
        handler: args[2]
      };
    }
    if (args.length === 2) {
      return {
        button: MouseButton.Main,
        modifiers: args[0],
        handler: args[1]
      };
    }
    return {
      button: MouseButton.Main,
      modifiers: Modifier.None,
      handler: args[0]
    };
  }
  _isMatch(event, button, modifiers) {
    return button === (event.button ?? 0) && hasModifiers(event, modifiers);
  }
};

// node_modules/@angular/aria/fesm2022/_combobox-chunk.mjs
var ComboboxPattern = class {
  inputs;
  expanded = signal2(false);
  disabled = () => this.inputs.disabled();
  activeDescendant = computed2(() => {
    const popupControls = this.inputs.popupControls();
    if (popupControls instanceof ComboboxDialogPattern) {
      return null;
    }
    return popupControls?.activeId() ?? null;
  });
  highlightedItem = signal2(void 0);
  isDeleting = false;
  isFocused = signal2(false);
  hasBeenFocused = signal2(false);
  expandKey = computed2(() => this.inputs.textDirection() === "rtl" ? "ArrowLeft" : "ArrowRight");
  collapseKey = computed2(() => this.inputs.textDirection() === "rtl" ? "ArrowRight" : "ArrowLeft");
  popupId = computed2(() => this.inputs.popupControls()?.id() || null);
  autocomplete = computed2(() => this.inputs.filterMode() === "highlight" ? "both" : "list");
  hasPopup = computed2(() => this.inputs.popupControls()?.role() || null);
  readonly = computed2(() => this.inputs.readonly() || this.inputs.disabled() || null);
  listControls = () => {
    const popupControls = this.inputs.popupControls();
    if (popupControls instanceof ComboboxDialogPattern) {
      return null;
    }
    return popupControls;
  };
  treeControls = () => {
    const popupControls = this.inputs.popupControls();
    if (popupControls?.role() === "tree") {
      return popupControls;
    }
    return null;
  };
  keydown = computed2(() => {
    const manager = new KeyboardEventManager();
    const popupControls = this.inputs.popupControls();
    if (!popupControls) {
      return manager;
    }
    if (popupControls instanceof ComboboxDialogPattern) {
      if (!this.expanded()) {
        manager.on("ArrowUp", () => this.open()).on("ArrowDown", () => this.open());
        if (this.readonly()) {
          manager.on("Enter", () => this.open()).on(" ", () => this.open());
        }
      }
      return manager;
    }
    if (!this.inputs.alwaysExpanded()) {
      manager.on("Escape", () => this.close({
        reset: !this.readonly()
      }));
    }
    if (!this.expanded()) {
      manager.on("ArrowDown", () => this.open({
        first: true
      })).on("ArrowUp", () => this.open({
        last: true
      }));
      if (this.readonly()) {
        manager.on("Enter", () => this.open({
          selected: true
        })).on(" ", () => this.open({
          selected: true
        }));
      }
      return manager;
    }
    manager.on("ArrowDown", () => this.next(), {
      ignoreRepeat: false
    }).on("ArrowUp", () => this.prev(), {
      ignoreRepeat: false
    }).on("Home", () => this.first()).on("End", () => this.last());
    if (this.readonly()) {
      manager.on(" ", () => this.select({
        commit: true,
        close: !popupControls.multi()
      }));
    }
    if (popupControls.role() === "listbox") {
      manager.on("Enter", () => {
        this.select({
          commit: true,
          close: !popupControls.multi()
        });
      });
    }
    const treeControls = this.treeControls();
    if (treeControls?.isItemSelectable()) {
      manager.on("Enter", () => this.select({
        commit: true,
        close: true
      }));
    }
    if (treeControls?.isItemExpandable()) {
      manager.on(this.expandKey(), () => this.expandItem()).on(this.collapseKey(), () => this.collapseItem());
      if (!treeControls.isItemSelectable()) {
        manager.on("Enter", () => this.expandItem());
      }
    }
    if (treeControls?.isItemCollapsible()) {
      manager.on(this.collapseKey(), () => this.collapseItem());
    }
    return manager;
  });
  click = computed2(() => new PointerEventManager().on((e) => {
    if (e.target === this.inputs.inputEl()) {
      if (this.readonly()) {
        this.expanded() ? this.close() : this.open({
          selected: true
        });
      }
    }
    const controls = this.inputs.popupControls();
    if (controls instanceof ComboboxDialogPattern) {
      return;
    }
    const item = controls?.getItem(e);
    if (item) {
      if (controls?.role() === "tree") {
        const treeControls = controls;
        if (treeControls.isItemExpandable(item) && !treeControls.isItemSelectable(item)) {
          treeControls.toggleExpansion(item);
          this.inputs.inputEl()?.focus();
          return;
        }
      }
      this.select({
        item,
        commit: true,
        close: !controls?.multi()
      });
      this.inputs.inputEl()?.focus();
    }
  }));
  constructor(inputs) {
    this.inputs = inputs;
  }
  onKeydown(event) {
    if (!this.inputs.disabled()) {
      this.keydown().handle(event);
    }
  }
  onClick(event) {
    if (!this.inputs.disabled()) {
      this.click().handle(event);
    }
  }
  onInput(event) {
    if (this.inputs.disabled() || this.inputs.readonly()) {
      return;
    }
    const inputEl = this.inputs.inputEl();
    if (!inputEl) {
      return;
    }
    const popupControls = this.inputs.popupControls();
    if (popupControls instanceof ComboboxDialogPattern) {
      return;
    }
    this.open();
    this.inputs.inputValue?.set(inputEl.value);
    this.isDeleting = event instanceof InputEvent && !!event.inputType.match(/^delete/);
    if (this.inputs.filterMode() === "highlight" && !this.isDeleting) {
      this.highlight();
    }
  }
  onFocusIn() {
    if (this.inputs.alwaysExpanded() && !this.hasBeenFocused()) {
      const firstSelectedItem = this.listControls()?.getSelectedItems()[0];
      firstSelectedItem ? this.listControls()?.focus(firstSelectedItem) : this.first();
    }
    this.isFocused.set(true);
    this.hasBeenFocused.set(true);
  }
  onFocusOut(event) {
    if (this.inputs.disabled()) {
      return;
    }
    const popupControls = this.inputs.popupControls();
    if (popupControls instanceof ComboboxDialogPattern) {
      return;
    }
    if (!(event.relatedTarget instanceof HTMLElement) || !this.inputs.containerEl()?.contains(event.relatedTarget)) {
      this.isFocused.set(false);
      if (!this.expanded()) {
        return;
      }
      if (this.readonly()) {
        this.close();
        return;
      }
      if (this.inputs.filterMode() !== "manual") {
        this.commit();
      } else {
        const item = popupControls?.items().find((i) => i.searchTerm() === this.inputs.inputEl()?.value);
        if (item) {
          this.select({
            item
          });
        }
      }
      this.close();
    }
  }
  firstMatch = computed2(() => {
    if (this.listControls()?.role() === "listbox") {
      return this.listControls()?.items()[0];
    }
    return this.listControls()?.items().find((i) => i.value() === this.inputs.firstMatch());
  });
  onFilter() {
    if (this.readonly()) {
      return;
    }
    const popupControls = this.inputs.popupControls();
    if (popupControls instanceof ComboboxDialogPattern) {
      return;
    }
    const isInitialRender = !this.inputs.inputValue?.().length && !this.isDeleting;
    if (isInitialRender) {
      return;
    }
    if (!this.isFocused()) {
      return;
    }
    if (this.inputs.popupControls()?.role() === "tree") {
      const treeControls = this.inputs.popupControls();
      this.inputs.inputValue?.().length ? treeControls.expandAll() : treeControls.collapseAll();
    }
    const item = this.firstMatch();
    if (!item) {
      popupControls?.clearSelection();
      popupControls?.unfocus();
      return;
    }
    popupControls?.focus(item);
    if (this.inputs.filterMode() !== "manual") {
      this.select({
        item
      });
    }
    if (this.inputs.filterMode() === "highlight" && !this.isDeleting) {
      this.highlight();
    }
  }
  highlight() {
    const inputEl = this.inputs.inputEl();
    const selectedItems = this.listControls()?.getSelectedItems();
    const item = selectedItems?.[0];
    if (!inputEl || !item) {
      return;
    }
    const isHighlightable = item.searchTerm().toLowerCase().startsWith(this.inputs.inputValue().toLowerCase());
    if (isHighlightable) {
      inputEl.value = this.inputs.inputValue() + item.searchTerm().slice(this.inputs.inputValue().length);
      inputEl.setSelectionRange(this.inputs.inputValue().length, item.searchTerm().length);
      this.highlightedItem.set(item);
    }
  }
  close(opts) {
    const popupControls = this.inputs.popupControls();
    if (this.inputs.alwaysExpanded()) {
      return;
    }
    if (popupControls instanceof ComboboxDialogPattern) {
      this.expanded.set(false);
      return;
    }
    if (this.readonly()) {
      this.expanded.set(false);
      popupControls?.unfocus();
      return;
    }
    if (!opts?.reset) {
      if (this.inputs.filterMode() === "manual") {
        if (!this.listControls()?.items().some((i) => i.searchTerm() === this.inputs.inputEl()?.value)) {
          this.listControls()?.clearSelection();
        }
      }
      this.expanded.set(false);
      popupControls?.unfocus();
      return;
    }
    if (!this.expanded()) {
      this.inputs.inputValue?.set("");
      popupControls?.clearSelection();
      const inputEl = this.inputs.inputEl();
      if (inputEl) {
        inputEl.value = "";
      }
    } else if (this.expanded()) {
      this.expanded.set(false);
      const selectedItem = popupControls?.getSelectedItems()?.[0];
      if (selectedItem?.searchTerm() !== this.inputs.inputValue()) {
        popupControls?.clearSelection();
      }
      return;
    }
    this.close();
    if (!this.readonly()) {
      popupControls?.clearSelection();
    }
  }
  open(nav) {
    this.expanded.set(true);
    const popupControls = this.inputs.popupControls();
    if (popupControls instanceof ComboboxDialogPattern) {
      return;
    }
    const inputEl = this.inputs.inputEl();
    if (inputEl && this.inputs.filterMode() === "highlight") {
      const isHighlighting = inputEl.selectionStart !== inputEl.value.length;
      this.inputs.inputValue?.set(inputEl.value.slice(0, inputEl.selectionStart || 0));
      if (!isHighlighting) {
        this.highlightedItem.set(void 0);
      }
    }
    if (nav?.first) {
      this.first();
    }
    if (nav?.last) {
      this.last();
    }
    if (nav?.selected) {
      const selectedItem = popupControls?.items().find((i) => popupControls?.getSelectedItems().includes(i));
      if (selectedItem) {
        popupControls?.focus(selectedItem);
      }
    }
  }
  next() {
    this._navigate(() => this.listControls()?.next());
  }
  prev() {
    this._navigate(() => this.listControls()?.prev());
  }
  first() {
    this._navigate(() => this.listControls()?.first());
  }
  last() {
    this._navigate(() => this.listControls()?.last());
  }
  collapseItem() {
    const controls = this.inputs.popupControls();
    this._navigate(() => controls?.collapseItem());
  }
  expandItem() {
    const controls = this.inputs.popupControls();
    this._navigate(() => controls?.expandItem());
  }
  select(opts = {}) {
    const controls = this.listControls();
    const item = opts.item ?? controls?.getActiveItem();
    if (item?.disabled()) {
      return;
    }
    if (opts.item) {
      controls?.focus(opts.item, {
        focusElement: false
      });
    }
    controls?.multi() ? controls.toggle(opts.item) : controls?.select(opts.item);
    if (opts.commit) {
      this.commit();
    }
    if (opts.close) {
      this.close();
    }
  }
  commit() {
    const inputEl = this.inputs.inputEl();
    const selectedItems = this.listControls()?.getSelectedItems();
    if (!inputEl) {
      return;
    }
    inputEl.value = selectedItems?.map((i) => i.searchTerm()).join(", ") || "";
    this.inputs.inputValue?.set(inputEl.value);
    if (this.inputs.filterMode() === "highlight" && !this.readonly()) {
      const length = inputEl.value.length;
      inputEl.setSelectionRange(length, length);
    }
  }
  _navigate(operation) {
    operation();
    if (this.inputs.filterMode() !== "manual") {
      this.select();
    }
    if (this.inputs.filterMode() === "highlight") {
      const selectedItem = this.listControls()?.getSelectedItems()[0];
      if (!selectedItem) {
        return;
      }
      if (selectedItem === this.highlightedItem()) {
        this.highlight();
      } else {
        const inputEl = this.inputs.inputEl();
        inputEl.value = selectedItem?.searchTerm();
      }
    }
  }
};
var ComboboxDialogPattern = class {
  inputs;
  id = () => this.inputs.id();
  role = () => "dialog";
  keydown = computed2(() => {
    return new KeyboardEventManager().on("Escape", () => this.inputs.combobox.close());
  });
  constructor(inputs) {
    this.inputs = inputs;
  }
  onKeydown(event) {
    this.keydown().handle(event);
  }
  onClick(event) {
    if (event.target === this.inputs.element()) {
      this.inputs.combobox.close();
    }
  }
};

// node_modules/@angular/aria/fesm2022/combobox.mjs
var COMBOBOX = new InjectionToken("COMBOBOX");
var ComboboxPopup = class _ComboboxPopup {
  combobox = inject(COMBOBOX, {
    optional: true
  });
  _controls = signal(void 0, ...ngDevMode ? [{
    debugName: "_controls"
  }] : []);
  static ɵfac = function ComboboxPopup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComboboxPopup)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ComboboxPopup,
    selectors: [["", "ngComboboxPopup", ""]],
    exportAs: ["ngComboboxPopup"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComboboxPopup, [{
    type: Directive,
    args: [{
      selector: "[ngComboboxPopup]",
      exportAs: "ngComboboxPopup"
    }]
  }], null, null);
})();
var Combobox = class _Combobox {
  textDirection = inject(Directionality).valueSignal.asReadonly();
  _elementRef = inject(ElementRef);
  element = this._elementRef.nativeElement;
  _deferredContentAware = inject(DeferredContentAware, {
    optional: true
  });
  popup = contentChild(ComboboxPopup, ...ngDevMode ? [{
    debugName: "popup"
  }] : []);
  filterMode = input("manual", ...ngDevMode ? [{
    debugName: "filterMode"
  }] : []);
  disabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabled"
  } : {}), {
    transform: booleanAttribute
  }));
  readonly = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "readonly"
  } : {}), {
    transform: booleanAttribute
  }));
  firstMatch = input(void 0, ...ngDevMode ? [{
    debugName: "firstMatch"
  }] : []);
  expanded = computed(() => this.alwaysExpanded() || this._pattern.expanded(), ...ngDevMode ? [{
    debugName: "expanded"
  }] : []);
  alwaysExpanded = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "alwaysExpanded"
  } : {}), {
    transform: booleanAttribute
  }));
  inputElement = computed(() => this._pattern.inputs.inputEl(), ...ngDevMode ? [{
    debugName: "inputElement"
  }] : []);
  _pattern = new ComboboxPattern(__spreadProps(__spreadValues({}, this), {
    textDirection: this.textDirection,
    disabled: this.disabled,
    readonly: this.readonly,
    inputValue: signal(""),
    inputEl: signal(void 0),
    containerEl: () => this._elementRef.nativeElement,
    popupControls: () => this.popup()?._controls()
  }));
  constructor() {
    afterRenderEffect(() => {
      if (this.alwaysExpanded()) {
        this._pattern.expanded.set(true);
      }
    });
    afterRenderEffect(() => {
      if (!this._deferredContentAware?.contentVisible() && (this._pattern.isFocused() || this.alwaysExpanded())) {
        this._deferredContentAware?.contentVisible.set(true);
      }
    });
  }
  open() {
    this._pattern.open({
      selected: true
    });
  }
  close() {
    this._pattern.close();
  }
  static ɵfac = function Combobox_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Combobox)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _Combobox,
    selectors: [["", "ngCombobox", ""]],
    contentQueries: function Combobox_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuerySignal(dirIndex, ctx.popup, ComboboxPopup, 5);
      }
      if (rf & 2) {
        ɵɵqueryAdvance();
      }
    },
    hostVars: 1,
    hostBindings: function Combobox_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("input", function Combobox_input_HostBindingHandler($event) {
          return ctx._pattern.onInput($event);
        })("keydown", function Combobox_keydown_HostBindingHandler($event) {
          return ctx._pattern.onKeydown($event);
        })("click", function Combobox_click_HostBindingHandler($event) {
          return ctx._pattern.onClick($event);
        })("focusin", function Combobox_focusin_HostBindingHandler() {
          return ctx._pattern.onFocusIn();
        })("focusout", function Combobox_focusout_HostBindingHandler($event) {
          return ctx._pattern.onFocusOut($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("data-expanded", ctx.expanded());
      }
    },
    inputs: {
      filterMode: [1, "filterMode"],
      disabled: [1, "disabled"],
      readonly: [1, "readonly"],
      firstMatch: [1, "firstMatch"],
      alwaysExpanded: [1, "alwaysExpanded"]
    },
    exportAs: ["ngCombobox"],
    features: [ɵɵProvidersFeature([{
      provide: COMBOBOX,
      useExisting: _Combobox
    }]), ɵɵHostDirectivesFeature([{
      directive: DeferredContentAware,
      inputs: ["preserveContent", "preserveContent"]
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Combobox, [{
    type: Directive,
    args: [{
      selector: "[ngCombobox]",
      exportAs: "ngCombobox",
      hostDirectives: [{
        directive: DeferredContentAware,
        inputs: ["preserveContent"]
      }],
      host: {
        "[attr.data-expanded]": "expanded()",
        "(input)": "_pattern.onInput($event)",
        "(keydown)": "_pattern.onKeydown($event)",
        "(click)": "_pattern.onClick($event)",
        "(focusin)": "_pattern.onFocusIn()",
        "(focusout)": "_pattern.onFocusOut($event)"
      },
      providers: [{
        provide: COMBOBOX,
        useExisting: Combobox
      }]
    }]
  }], () => [], {
    popup: [{
      type: ContentChild,
      args: [forwardRef(() => ComboboxPopup), {
        isSignal: true
      }]
    }],
    filterMode: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "filterMode",
        required: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    readonly: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "readonly",
        required: false
      }]
    }],
    firstMatch: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "firstMatch",
        required: false
      }]
    }],
    alwaysExpanded: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "alwaysExpanded",
        required: false
      }]
    }]
  });
})();
var ComboboxDialog = class _ComboboxDialog {
  _elementRef = inject(ElementRef);
  element = this._elementRef.nativeElement;
  combobox = inject(Combobox);
  _popup = inject(ComboboxPopup, {
    optional: true
  });
  _pattern;
  constructor() {
    this._pattern = new ComboboxDialogPattern({
      id: () => "",
      element: () => this._elementRef.nativeElement,
      combobox: this.combobox._pattern
    });
    if (this._popup) {
      this._popup._controls.set(this._pattern);
    }
    afterRenderEffect(() => {
      if (this._elementRef) {
        this.combobox._pattern.expanded() ? this._elementRef.nativeElement.showModal() : this._elementRef.nativeElement.close();
      }
    });
  }
  close() {
    this._popup?.combobox?._pattern.close();
  }
  static ɵfac = function ComboboxDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComboboxDialog)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ComboboxDialog,
    selectors: [["dialog", "ngComboboxDialog", ""]],
    hostVars: 1,
    hostBindings: function ComboboxDialog_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("keydown", function ComboboxDialog_keydown_HostBindingHandler($event) {
          return ctx._pattern.onKeydown($event);
        })("click", function ComboboxDialog_click_HostBindingHandler($event) {
          return ctx._pattern.onClick($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("data-open", ctx.combobox._pattern.expanded());
      }
    },
    exportAs: ["ngComboboxDialog"],
    features: [ɵɵHostDirectivesFeature([ComboboxPopup])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComboboxDialog, [{
    type: Directive,
    args: [{
      selector: "dialog[ngComboboxDialog]",
      exportAs: "ngComboboxDialog",
      host: {
        "[attr.data-open]": "combobox._pattern.expanded()",
        "(keydown)": "_pattern.onKeydown($event)",
        "(click)": "_pattern.onClick($event)"
      },
      hostDirectives: [ComboboxPopup]
    }]
  }], () => [], null);
})();
var ComboboxInput = class _ComboboxInput {
  _elementRef = inject(ElementRef);
  element = this._elementRef.nativeElement;
  combobox = inject(Combobox);
  value = model("", ...ngDevMode ? [{
    debugName: "value"
  }] : []);
  constructor() {
    this.combobox._pattern.inputs.inputEl.set(this._elementRef.nativeElement);
    this.combobox._pattern.inputs.inputValue = this.value;
    const controls = this.combobox.popup()?._controls();
    if (controls instanceof ComboboxDialogPattern) {
      return;
    }
    afterRenderEffect(() => {
      this.value();
      controls?.items();
      untracked(() => this.combobox._pattern.onFilter());
    });
  }
  static ɵfac = function ComboboxInput_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComboboxInput)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ComboboxInput,
    selectors: [["input", "ngComboboxInput", ""]],
    hostAttrs: ["role", "combobox"],
    hostVars: 8,
    hostBindings: function ComboboxInput_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵdomProperty("value", ctx.value());
        ɵɵattribute("aria-disabled", ctx.combobox._pattern.disabled())("aria-expanded", ctx.combobox._pattern.expanded())("aria-activedescendant", ctx.combobox._pattern.activeDescendant())("aria-controls", ctx.combobox._pattern.popupId())("aria-haspopup", ctx.combobox._pattern.hasPopup())("aria-autocomplete", ctx.combobox._pattern.autocomplete())("readonly", ctx.combobox._pattern.readonly());
      }
    },
    inputs: {
      value: [1, "value"]
    },
    outputs: {
      value: "valueChange"
    },
    exportAs: ["ngComboboxInput"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComboboxInput, [{
    type: Directive,
    args: [{
      selector: "input[ngComboboxInput]",
      exportAs: "ngComboboxInput",
      host: {
        "role": "combobox",
        "[value]": "value()",
        "[attr.aria-disabled]": "combobox._pattern.disabled()",
        "[attr.aria-expanded]": "combobox._pattern.expanded()",
        "[attr.aria-activedescendant]": "combobox._pattern.activeDescendant()",
        "[attr.aria-controls]": "combobox._pattern.popupId()",
        "[attr.aria-haspopup]": "combobox._pattern.hasPopup()",
        "[attr.aria-autocomplete]": "combobox._pattern.autocomplete()",
        "[attr.readonly]": "combobox._pattern.readonly()"
      }
    }]
  }], () => [], {
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }, {
      type: Output,
      args: ["valueChange"]
    }]
  });
})();
var ComboboxPopupContainer = class _ComboboxPopupContainer {
  static ɵfac = function ComboboxPopupContainer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComboboxPopupContainer)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ComboboxPopupContainer,
    selectors: [["ng-template", "ngComboboxPopupContainer", ""]],
    exportAs: ["ngComboboxPopupContainer"],
    features: [ɵɵHostDirectivesFeature([DeferredContent])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComboboxPopupContainer, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngComboboxPopupContainer]",
      exportAs: "ngComboboxPopupContainer",
      hostDirectives: [DeferredContent]
    }]
  }], null, null);
})();

// node_modules/@angular/aria/fesm2022/_expansion-chunk.mjs
var ListExpansion = class {
  inputs;
  constructor(inputs) {
    this.inputs = inputs;
  }
  open(item) {
    if (!this.isExpandable(item)) return false;
    if (item.expanded()) return false;
    if (!this.inputs.multiExpandable()) {
      this.closeAll();
    }
    item.expanded.set(true);
    return true;
  }
  close(item) {
    if (!this.isExpandable(item)) return false;
    item.expanded.set(false);
    return true;
  }
  toggle(item) {
    return item.expanded() ? this.close(item) : this.open(item);
  }
  openAll() {
    if (this.inputs.multiExpandable()) {
      for (const item of this.inputs.items()) {
        this.open(item);
      }
    }
  }
  closeAll() {
    for (const item of this.inputs.items()) {
      this.close(item);
    }
  }
  isExpandable(item) {
    return !this.inputs.disabled() && !item.disabled() && item.expandable();
  }
};

// node_modules/@angular/aria/fesm2022/_list-navigation-chunk.mjs
var ListFocus = class {
  inputs;
  prevActiveItem = signal2(void 0);
  prevActiveIndex = computed2(() => {
    return this.prevActiveItem() ? this.inputs.items().indexOf(this.prevActiveItem()) : -1;
  });
  activeIndex = computed2(() => {
    return this.inputs.activeItem() ? this.inputs.items().indexOf(this.inputs.activeItem()) : -1;
  });
  constructor(inputs) {
    this.inputs = inputs;
  }
  isListDisabled() {
    return this.inputs.disabled() || this.inputs.items().every((i) => i.disabled());
  }
  getActiveDescendant() {
    if (this.isListDisabled()) {
      return void 0;
    }
    if (this.inputs.focusMode() === "roving") {
      return void 0;
    }
    return this.inputs.activeItem()?.id() ?? void 0;
  }
  getListTabIndex() {
    if (this.isListDisabled()) {
      return 0;
    }
    return this.inputs.focusMode() === "activedescendant" ? 0 : -1;
  }
  getItemTabIndex(item) {
    if (this.isListDisabled()) {
      return -1;
    }
    if (this.inputs.focusMode() === "activedescendant") {
      return -1;
    }
    return this.inputs.activeItem() === item ? 0 : -1;
  }
  focus(item, opts) {
    if (this.isListDisabled() || !this.isFocusable(item)) {
      return false;
    }
    this.prevActiveItem.set(this.inputs.activeItem());
    this.inputs.activeItem.set(item);
    if (opts?.focusElement || opts?.focusElement === void 0) {
      this.inputs.focusMode() === "roving" ? item.element()?.focus() : this.inputs.element()?.focus();
    }
    return true;
  }
  isFocusable(item) {
    return !item.disabled() || this.inputs.softDisabled();
  }
};
var ListNavigation = class {
  inputs;
  constructor(inputs) {
    this.inputs = inputs;
  }
  goto(item, opts) {
    return item ? this.inputs.focusManager.focus(item, opts) : false;
  }
  next(opts) {
    return this._advance(1, opts);
  }
  peekNext(opts) {
    return this._peek(1, opts);
  }
  prev(opts) {
    return this._advance(-1, opts);
  }
  peekPrev(opts) {
    return this._peek(-1, opts);
  }
  first(opts) {
    const item = this.peekFirst(opts);
    return item ? this.goto(item, opts) : false;
  }
  last(opts) {
    const item = this.peekLast(opts);
    return item ? this.goto(item, opts) : false;
  }
  peekFirst(opts) {
    const items = opts?.items ?? this.inputs.items();
    return items.find((i) => this.inputs.focusManager.isFocusable(i));
  }
  peekLast(opts) {
    const items = opts?.items ?? this.inputs.items();
    for (let i = items.length - 1; i >= 0; i--) {
      if (this.inputs.focusManager.isFocusable(items[i])) {
        return items[i];
      }
    }
    return;
  }
  _advance(delta, opts) {
    const item = this._peek(delta, opts);
    return item ? this.goto(item, opts) : false;
  }
  _peek(delta, opts) {
    const items = opts?.items ?? this.inputs.items();
    const itemCount = items.length;
    const activeItem = this.inputs.focusManager.inputs.activeItem();
    const startIndex = opts?.items && activeItem ? items.indexOf(activeItem) : this.inputs.focusManager.activeIndex();
    const step = (i) => this.inputs.wrap() ? (i + delta + itemCount) % itemCount : i + delta;
    for (let i = step(startIndex); i !== startIndex && i < itemCount && i >= 0; i = step(i)) {
      if (this.inputs.focusManager.isFocusable(items[i])) {
        return items[i];
      }
    }
    return;
  }
};

// node_modules/@angular/aria/fesm2022/_list-typeahead-chunk.mjs
var ListSelection = class {
  inputs;
  rangeStartIndex = signal2(0);
  rangeEndIndex = signal2(0);
  selectedItems = computed2(() => this.inputs.items().filter((item) => this.inputs.values().includes(item.value())));
  constructor(inputs) {
    this.inputs = inputs;
  }
  select(item, opts = {
    anchor: true
  }) {
    item = item ?? this.inputs.focusManager.inputs.activeItem();
    if (!item || item.disabled() || !item.selectable() || !this.inputs.focusManager.isFocusable(item) || this.inputs.values().includes(item.value())) {
      return;
    }
    if (!this.inputs.multi()) {
      this.deselectAll();
    }
    const index = this.inputs.items().findIndex((i) => i === item);
    if (opts.anchor) {
      this.beginRangeSelection(index);
    }
    this.inputs.values.update((values) => values.concat(item.value()));
  }
  deselect(item) {
    item = item ?? this.inputs.focusManager.inputs.activeItem();
    if (item && !item.disabled() && item.selectable()) {
      this.inputs.values.update((values) => values.filter((value) => value !== item.value()));
    }
  }
  toggle(item) {
    item = item ?? this.inputs.focusManager.inputs.activeItem();
    if (item) {
      this.inputs.values().includes(item.value()) ? this.deselect(item) : this.select(item);
    }
  }
  toggleOne() {
    const item = this.inputs.focusManager.inputs.activeItem();
    if (item) {
      this.inputs.values().includes(item.value()) ? this.deselect() : this.selectOne();
    }
  }
  selectAll() {
    if (!this.inputs.multi()) {
      return;
    }
    for (const item of this.inputs.items()) {
      this.select(item, {
        anchor: false
      });
    }
    this.beginRangeSelection();
  }
  deselectAll() {
    for (const value of this.inputs.values()) {
      const item = this.inputs.items().find((i) => i.value() === value);
      item ? this.deselect(item) : this.inputs.values.update((values) => values.filter((v) => v !== value));
    }
  }
  toggleAll() {
    const selectableValues = this.inputs.items().filter((i) => !i.disabled() && i.selectable() && this.inputs.focusManager.isFocusable(i)).map((i) => i.value());
    selectableValues.every((i) => this.inputs.values().includes(i)) ? this.deselectAll() : this.selectAll();
  }
  selectOne() {
    const item = this.inputs.focusManager.inputs.activeItem();
    if (item && (item.disabled() || !item.selectable())) {
      return;
    }
    this.deselectAll();
    if (this.inputs.values().length > 0 && !this.inputs.multi()) {
      return;
    }
    this.select();
  }
  selectRange(opts = {
    anchor: true
  }) {
    const isStartOfRange = this.inputs.focusManager.prevActiveIndex() === this.rangeStartIndex();
    if (isStartOfRange && opts.anchor) {
      this.beginRangeSelection(this.inputs.focusManager.prevActiveIndex());
    }
    const itemsInRange = this._getItemsFromIndex(this.rangeStartIndex());
    const itemsOutOfRange = this._getItemsFromIndex(this.rangeEndIndex()).filter((i) => !itemsInRange.includes(i));
    for (const item of itemsOutOfRange) {
      this.deselect(item);
    }
    for (const item of itemsInRange) {
      this.select(item, {
        anchor: false
      });
    }
    if (itemsInRange.length) {
      const item = itemsInRange.pop();
      const index = this.inputs.items().findIndex((i) => i === item);
      this.rangeEndIndex.set(index);
    }
  }
  beginRangeSelection(index = this.inputs.focusManager.activeIndex()) {
    this.rangeStartIndex.set(index);
    this.rangeEndIndex.set(index);
  }
  _getItemsFromIndex(index) {
    if (index === -1) {
      return [];
    }
    const upper = Math.max(this.inputs.focusManager.activeIndex(), index);
    const lower = Math.min(this.inputs.focusManager.activeIndex(), index);
    const items = [];
    for (let i = lower; i <= upper; i++) {
      items.push(this.inputs.items()[i]);
    }
    if (this.inputs.focusManager.activeIndex() < index) {
      return items.reverse();
    }
    return items;
  }
};
var ListTypeahead = class {
  inputs;
  timeout;
  focusManager;
  isTyping = computed2(() => this._query().length > 0);
  _query = signal2("");
  _startIndex = signal2(void 0);
  constructor(inputs) {
    this.inputs = inputs;
    this.focusManager = inputs.focusManager;
  }
  search(char) {
    if (char.length !== 1) {
      return false;
    }
    if (!this.isTyping() && char === " ") {
      return false;
    }
    if (this._startIndex() === void 0) {
      this._startIndex.set(this.focusManager.activeIndex());
    }
    clearTimeout(this.timeout);
    this._query.update((q) => q + char.toLowerCase());
    const item = this._getItem();
    if (item) {
      this.focusManager.focus(item);
    }
    this.timeout = setTimeout(() => {
      this._query.set("");
      this._startIndex.set(void 0);
    }, this.inputs.typeaheadDelay());
    return true;
  }
  _getItem() {
    const items = this.focusManager.inputs.items();
    const itemCount = items.length;
    const startIndex = this._startIndex();
    for (let i = 0; i < itemCount; i++) {
      const index = (startIndex + 1 + i) % itemCount;
      const item = items[index];
      if (this.focusManager.isFocusable(item) && item.searchTerm().toLowerCase().startsWith(this._query())) {
        return item;
      }
    }
    return void 0;
  }
};

// node_modules/@angular/aria/fesm2022/_combobox-tree-chunk.mjs
var TreeListFocus = class extends ListFocus {
  isFocusable(item) {
    return super.isFocusable(item) && item.visible();
  }
};
var Tree = class {
  inputs;
  navigationBehavior;
  selectionBehavior;
  typeaheadBehavior;
  focusBehavior;
  expansionBehavior;
  disabled = computed2(() => this.focusBehavior.isListDisabled());
  activeDescendant = computed2(() => this.focusBehavior.getActiveDescendant());
  tabIndex = computed2(() => this.focusBehavior.getListTabIndex());
  activeIndex = computed2(() => this.focusBehavior.activeIndex());
  _anchorIndex = signal2(0);
  _wrap = signal2(true);
  constructor(inputs) {
    this.inputs = inputs;
    this.focusBehavior = new TreeListFocus(inputs);
    this.selectionBehavior = new ListSelection(__spreadProps(__spreadValues({}, inputs), {
      focusManager: this.focusBehavior
    }));
    this.typeaheadBehavior = new ListTypeahead(__spreadProps(__spreadValues({}, inputs), {
      focusManager: this.focusBehavior
    }));
    this.expansionBehavior = new ListExpansion(inputs);
    this.navigationBehavior = new ListNavigation(__spreadProps(__spreadValues({}, inputs), {
      focusManager: this.focusBehavior,
      wrap: computed2(() => this._wrap() && this.inputs.wrap())
    }));
  }
  getItemTabindex(item) {
    return this.focusBehavior.getItemTabIndex(item);
  }
  first(opts) {
    this._navigate(opts, () => this.navigationBehavior.first(opts));
  }
  last(opts) {
    this._navigate(opts, () => this.navigationBehavior.last(opts));
  }
  next(opts) {
    this._navigate(opts, () => this.navigationBehavior.next(opts));
  }
  prev(opts) {
    this._navigate(opts, () => this.navigationBehavior.prev(opts));
  }
  firstChild(opts) {
    this._navigate(opts, () => {
      const item = this.inputs.activeItem();
      const items = item?.children?.() ?? [];
      return this.navigationBehavior.first(__spreadValues({
        items
      }, opts));
    });
  }
  lastChild(opts) {
    this._navigate(opts, () => {
      const item = this.inputs.activeItem();
      const items = item?.children?.() ?? [];
      return this.navigationBehavior.last(__spreadValues({
        items
      }, opts));
    });
  }
  nextSibling(opts) {
    this._navigate(opts, () => {
      const item = this.inputs.activeItem();
      const items = item?.parent?.()?.children?.() ?? [];
      return this.navigationBehavior.next(__spreadValues({
        items
      }, opts));
    });
  }
  prevSibling(opts) {
    this._navigate(opts, () => {
      const item = this.inputs.activeItem();
      const items = item?.parent?.()?.children?.() ?? [];
      return this.navigationBehavior.prev(__spreadValues({
        items
      }, opts));
    });
  }
  parent(opts) {
    this._navigate(opts, () => this.navigationBehavior.goto(this.inputs.activeItem()?.parent?.(), opts));
  }
  goto(item, opts) {
    this._navigate(opts, () => this.navigationBehavior.goto(item, opts));
  }
  unfocus() {
    this.inputs.activeItem.set(void 0);
  }
  anchor(index) {
    this._anchorIndex.set(index);
  }
  search(char, opts) {
    this._navigate(opts, () => this.typeaheadBehavior.search(char));
  }
  isTyping() {
    return this.typeaheadBehavior.isTyping();
  }
  select(item) {
    this.selectionBehavior.select(item);
  }
  selectOne() {
    this.selectionBehavior.selectOne();
  }
  deselect(item) {
    this.selectionBehavior.deselect(item);
  }
  deselectAll() {
    this.selectionBehavior.deselectAll();
  }
  toggle(item) {
    this.selectionBehavior.toggle(item);
  }
  toggleOne() {
    this.selectionBehavior.toggleOne();
  }
  toggleAll() {
    this.selectionBehavior.toggleAll();
  }
  toggleExpansion(item) {
    item ??= this.inputs.activeItem();
    if (!item || !this.isFocusable(item)) return;
    if (this.isExpandable(item)) {
      this.expansionBehavior.toggle(item);
    }
  }
  expand(item) {
    if (this.isExpandable(item)) {
      this.expansionBehavior.open(item);
    }
  }
  collapse(item) {
    this.expansionBehavior.close(item);
  }
  expandSiblings(item) {
    item ??= this.inputs.activeItem();
    if (!item) return;
    const parent = item.parent?.();
    const siblings = parent ? parent.children?.() : this.inputs.items().filter((i) => !i.parent?.());
    siblings?.forEach((s) => this.expand(s));
  }
  expandAll() {
    this.expansionBehavior.openAll();
  }
  collapseAll() {
    this.expansionBehavior.closeAll();
  }
  isFocusable(item) {
    return this.focusBehavior.isFocusable(item);
  }
  isExpandable(item) {
    return this.expansionBehavior.isExpandable(item);
  }
  updateSelection(opts = {
    anchor: true
  }) {
    if (opts.toggle) {
      this.selectionBehavior.toggle();
    }
    if (opts.select) {
      this.selectionBehavior.select();
    }
    if (opts.selectOne) {
      this.selectionBehavior.selectOne();
    }
    if (opts.selectRange) {
      this.selectionBehavior.selectRange();
    }
    if (!opts.anchor) {
      this.anchor(this.selectionBehavior.rangeStartIndex());
    }
  }
  _navigate(opts = {}, operation) {
    if (opts?.selectRange) {
      this._wrap.set(false);
      this.selectionBehavior.rangeStartIndex.set(this._anchorIndex());
    }
    const moved = operation();
    if (moved) {
      this.updateSelection(opts);
    }
    this._wrap.set(true);
  }
};
var TreeItemPattern = class _TreeItemPattern {
  inputs;
  id = () => this.inputs.id();
  value = () => this.inputs.value();
  element = () => this.inputs.element();
  disabled = () => this.inputs.disabled();
  searchTerm = () => this.inputs.searchTerm();
  tree = () => this.inputs.tree();
  parent = computed2(() => {
    const parent = this.inputs.parent();
    return parent instanceof _TreeItemPattern ? parent : void 0;
  });
  children = () => this.inputs.children() ?? [];
  index = computed2(() => this.tree().inputs.items().indexOf(this));
  expandable = () => this.inputs.hasChildren();
  selectable = () => this.inputs.selectable();
  expanded;
  level = computed2(() => this.inputs.parent().level() + 1);
  visible = computed2(() => this.inputs.parent().expanded() && this.inputs.parent().visible());
  setsize = computed2(() => this.inputs.parent().children().length);
  posinset = computed2(() => this.inputs.parent().children().indexOf(this) + 1);
  active = computed2(() => this.tree().activeItem() === this);
  tabIndex = computed2(() => this.tree().treeBehavior.getItemTabindex(this));
  selected = computed2(() => {
    if (this.tree().nav()) {
      return void 0;
    }
    if (!this.selectable()) {
      return void 0;
    }
    return this.tree().values().includes(this.value());
  });
  current = computed2(() => {
    if (!this.tree().nav()) {
      return void 0;
    }
    if (!this.selectable()) {
      return void 0;
    }
    return this.tree().values().includes(this.value()) ? this.tree().currentType() : void 0;
  });
  constructor(inputs) {
    this.inputs = inputs;
    this.expanded = inputs.expanded;
  }
};
var TreePattern = class {
  inputs;
  treeBehavior;
  level = () => 0;
  expanded = () => true;
  visible = () => true;
  tabIndex = computed2(() => this.treeBehavior.tabIndex());
  activeDescendant = computed2(() => this.treeBehavior.activeDescendant());
  children = computed2(() => this.inputs.items().filter((item) => item.level() === this.level() + 1));
  followFocus = computed2(() => this.inputs.selectionMode() === "follow");
  isRtl = computed2(() => this.inputs.textDirection() === "rtl");
  prevKey = computed2(() => {
    if (this.inputs.orientation() === "vertical") {
      return "ArrowUp";
    }
    return this.isRtl() ? "ArrowRight" : "ArrowLeft";
  });
  nextKey = computed2(() => {
    if (this.inputs.orientation() === "vertical") {
      return "ArrowDown";
    }
    return this.isRtl() ? "ArrowLeft" : "ArrowRight";
  });
  collapseKey = computed2(() => {
    if (this.inputs.orientation() === "horizontal") {
      return "ArrowUp";
    }
    return this.isRtl() ? "ArrowRight" : "ArrowLeft";
  });
  expandKey = computed2(() => {
    if (this.inputs.orientation() === "horizontal") {
      return "ArrowDown";
    }
    return this.isRtl() ? "ArrowLeft" : "ArrowRight";
  });
  dynamicSpaceKey = computed2(() => this.treeBehavior.isTyping() ? "" : " ");
  typeaheadRegexp = /^.$/;
  keydown = computed2(() => {
    const manager = new KeyboardEventManager();
    const tree = this.treeBehavior;
    manager.on(this.prevKey, () => tree.prev({
      selectOne: this.followFocus()
    }), {
      ignoreRepeat: false
    }).on(this.nextKey, () => tree.next({
      selectOne: this.followFocus()
    }), {
      ignoreRepeat: false
    }).on("Home", () => tree.first({
      selectOne: this.followFocus()
    })).on("End", () => tree.last({
      selectOne: this.followFocus()
    })).on(this.typeaheadRegexp, (e) => tree.search(e.key, {
      selectOne: this.followFocus()
    })).on(Modifier.Shift, "*", () => tree.expandSiblings()).on(this.expandKey, () => this._expandOrFirstChild({
      selectOne: this.followFocus()
    })).on(this.collapseKey, () => this._collapseOrParent({
      selectOne: this.followFocus()
    }));
    if (this.inputs.multi()) {
      manager.on(Modifier.Any, "Shift", () => tree.anchor(this.treeBehavior.activeIndex())).on(Modifier.Shift, this.prevKey, () => tree.prev({
        selectRange: true
      }), {
        ignoreRepeat: false
      }).on(Modifier.Shift, this.nextKey, () => tree.next({
        selectRange: true
      }), {
        ignoreRepeat: false
      }).on([Modifier.Ctrl | Modifier.Shift, Modifier.Meta | Modifier.Shift], "Home", () => tree.first({
        selectRange: true,
        anchor: false
      })).on([Modifier.Ctrl | Modifier.Shift, Modifier.Meta | Modifier.Shift], "End", () => tree.last({
        selectRange: true,
        anchor: false
      })).on(Modifier.Shift, "Enter", () => tree.updateSelection({
        selectRange: true,
        anchor: false
      })).on(Modifier.Shift, this.dynamicSpaceKey, () => tree.updateSelection({
        selectRange: true,
        anchor: false
      }));
    }
    if (!this.followFocus() && this.inputs.multi()) {
      manager.on(this.dynamicSpaceKey, () => tree.toggle()).on("Enter", () => tree.toggle(), {
        preventDefault: !this.nav()
      }).on([Modifier.Ctrl, Modifier.Meta], "A", () => tree.toggleAll());
    }
    if (!this.followFocus() && !this.inputs.multi()) {
      manager.on(this.dynamicSpaceKey, () => tree.selectOne());
      manager.on("Enter", () => tree.selectOne(), {
        preventDefault: !this.nav()
      });
    }
    if (this.inputs.multi() && this.followFocus()) {
      manager.on([Modifier.Ctrl, Modifier.Meta], this.prevKey, () => tree.prev(), {
        ignoreRepeat: false
      }).on([Modifier.Ctrl, Modifier.Meta], this.nextKey, () => tree.next(), {
        ignoreRepeat: false
      }).on([Modifier.Ctrl, Modifier.Meta], this.expandKey, () => this._expandOrFirstChild()).on([Modifier.Ctrl, Modifier.Meta], this.collapseKey, () => this._collapseOrParent()).on([Modifier.Ctrl, Modifier.Meta], " ", () => tree.toggle()).on([Modifier.Ctrl, Modifier.Meta], "Enter", () => tree.toggle()).on([Modifier.Ctrl, Modifier.Meta], "Home", () => tree.first()).on([Modifier.Ctrl, Modifier.Meta], "End", () => tree.last()).on([Modifier.Ctrl, Modifier.Meta], "A", () => {
        tree.toggleAll();
        tree.select();
      });
    }
    return manager;
  });
  pointerdown = computed2(() => {
    const manager = new PointerEventManager();
    if (this.multi()) {
      manager.on(Modifier.Shift, (e) => this.goto(e, {
        selectRange: true
      }));
    }
    if (!this.multi()) {
      return manager.on((e) => this.goto(e, {
        selectOne: true
      }));
    }
    if (this.multi() && this.followFocus()) {
      return manager.on((e) => this.goto(e, {
        selectOne: true
      })).on(Modifier.Ctrl, (e) => this.goto(e, {
        toggle: true
      }));
    }
    if (this.multi() && !this.followFocus()) {
      return manager.on((e) => this.goto(e, {
        toggle: true
      }));
    }
    return manager;
  });
  id = () => this.inputs.id();
  element = () => this.inputs.element();
  nav = () => this.inputs.nav();
  currentType = () => this.inputs.currentType();
  items = () => this.inputs.items();
  focusMode = () => this.inputs.focusMode();
  disabled = () => this.inputs.disabled();
  activeItem;
  softDisabled = () => this.inputs.softDisabled();
  wrap = () => this.inputs.wrap();
  orientation = () => this.inputs.orientation();
  textDirection = () => this.textDirection();
  multi = computed2(() => this.nav() ? false : this.inputs.multi());
  selectionMode = () => this.inputs.selectionMode();
  typeaheadDelay = () => this.inputs.typeaheadDelay();
  values;
  constructor(inputs) {
    this.inputs = inputs;
    this.activeItem = inputs.activeItem;
    this.values = inputs.values;
    this.treeBehavior = new Tree(__spreadProps(__spreadValues({}, inputs), {
      multi: this.multi,
      multiExpandable: () => true
    }));
  }
  validate() {
    const violations = [];
    if (!this.inputs.multi() && this.inputs.values().length > 1) {
      violations.push(`A single-select tree should not have multiple selected options. Selected options: ${this.inputs.values().join(", ")}`);
    }
    return violations;
  }
  setDefaultState() {
    let firstItem;
    for (const item of this.inputs.items()) {
      if (!item.visible()) continue;
      if (!this.treeBehavior.isFocusable(item)) continue;
      if (firstItem === void 0) {
        firstItem = item;
      }
      if (item.selected()) {
        this.activeItem.set(item);
        return;
      }
    }
    if (firstItem !== void 0) {
      this.activeItem.set(firstItem);
    }
  }
  onKeydown(event) {
    if (!this.disabled()) {
      this.keydown().handle(event);
    }
  }
  onPointerdown(event) {
    if (!this.disabled()) {
      this.pointerdown().handle(event);
    }
  }
  goto(e, opts) {
    const item = this._getItem(e);
    if (!item) return;
    this.treeBehavior.goto(item, opts);
    this.treeBehavior.toggleExpansion(item);
  }
  _expandOrFirstChild(opts) {
    const item = this.treeBehavior.inputs.activeItem();
    if (item && this.treeBehavior.isExpandable(item) && !item.expanded()) {
      this.treeBehavior.expand(item);
    } else {
      this.treeBehavior.firstChild(opts);
    }
  }
  _collapseOrParent(opts) {
    const item = this.treeBehavior.inputs.activeItem();
    if (item && this.treeBehavior.isExpandable(item) && item.expanded()) {
      this.treeBehavior.collapse(item);
    } else {
      this.treeBehavior.parent(opts);
    }
  }
  _getItem(event) {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }
    const element = event.target.closest('[role="treeitem"]');
    return this.inputs.items().find((i) => i.element() === element);
  }
};
var ComboboxTreePattern = class extends TreePattern {
  inputs;
  toggleExpansion = (item) => this.treeBehavior.toggleExpansion(item);
  isItemCollapsible = () => this.inputs.activeItem()?.parent() instanceof TreeItemPattern;
  role = () => "tree";
  activeId = computed2(() => this.treeBehavior.activeDescendant());
  getActiveItem = () => this.inputs.activeItem();
  items = computed2(() => this.inputs.items());
  tabIndex = () => -1;
  constructor(inputs) {
    if (inputs.combobox()) {
      inputs.multi = () => false;
      inputs.focusMode = () => "activedescendant";
      inputs.element = inputs.combobox().inputs.inputEl;
    }
    super(inputs);
    this.inputs = inputs;
  }
  onKeydown(_) {
  }
  onPointerdown(_) {
  }
  setDefaultState() {
  }
  focus = (item) => this.treeBehavior.goto(item);
  next = () => this.treeBehavior.next();
  prev = () => this.treeBehavior.prev();
  last = () => this.treeBehavior.last();
  first = () => this.treeBehavior.first();
  unfocus = () => this.treeBehavior.unfocus();
  select = (item) => this.treeBehavior.select(item);
  toggle = (item) => this.treeBehavior.toggle(item);
  clearSelection = () => this.treeBehavior.deselectAll();
  getItem = (e) => this._getItem(e);
  getSelectedItems = () => this.inputs.items().filter((item) => item.selected());
  setValue = (value) => this.inputs.values.set(value ? [value] : []);
  expandItem = () => this._expandOrFirstChild();
  collapseItem = () => this._collapseOrParent();
  isItemExpandable(item = this.inputs.activeItem()) {
    return item ? item.expandable() : false;
  }
  expandAll = () => this.treeBehavior.expandAll();
  collapseAll = () => this.treeBehavior.collapseAll();
  isItemSelectable = (item = this.inputs.activeItem()) => {
    return item ? item.selectable() : false;
  };
};

// node_modules/@angular/aria/fesm2022/tree.mjs
function sortDirectives(a, b) {
  return (a.element.compareDocumentPosition(b.element) & Node.DOCUMENT_POSITION_PRECEDING) > 0 ? 1 : -1;
}
var Tree2 = class _Tree {
  _elementRef = inject(ElementRef);
  element = this._elementRef.nativeElement;
  _popup = inject(ComboboxPopup, {
    optional: true
  });
  _unorderedItems = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{
    debugName: "_unorderedItems"
  }] : []);
  id = input(inject(_IdGenerator).getId("ng-tree-", true), ...ngDevMode ? [{
    debugName: "id"
  }] : []);
  orientation = input("vertical", ...ngDevMode ? [{
    debugName: "orientation"
  }] : []);
  multi = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "multi"
  } : {}), {
    transform: booleanAttribute
  }));
  disabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabled"
  } : {}), {
    transform: booleanAttribute
  }));
  selectionMode = input("explicit", ...ngDevMode ? [{
    debugName: "selectionMode"
  }] : []);
  focusMode = input("roving", ...ngDevMode ? [{
    debugName: "focusMode"
  }] : []);
  wrap = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "wrap"
  } : {}), {
    transform: booleanAttribute
  }));
  softDisabled = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "softDisabled"
  } : {}), {
    transform: booleanAttribute
  }));
  typeaheadDelay = input(500, ...ngDevMode ? [{
    debugName: "typeaheadDelay"
  }] : []);
  values = model([], ...ngDevMode ? [{
    debugName: "values"
  }] : []);
  textDirection = inject(Directionality).valueSignal;
  nav = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "nav"
  } : {}), {
    transform: booleanAttribute
  }));
  currentType = input("page", ...ngDevMode ? [{
    debugName: "currentType"
  }] : []);
  _pattern;
  _hasFocused = signal(false, ...ngDevMode ? [{
    debugName: "_hasFocused"
  }] : []);
  constructor() {
    const inputs = __spreadProps(__spreadValues({}, this), {
      id: this.id,
      items: computed(() => [...this._unorderedItems()].sort(sortDirectives).map((item) => item._pattern)),
      activeItem: signal(void 0),
      combobox: () => this._popup?.combobox?._pattern,
      element: () => this.element
    });
    this._pattern = this._popup?.combobox ? new ComboboxTreePattern(inputs) : new TreePattern(inputs);
    if (this._popup?.combobox) {
      this._popup?._controls?.set(this._pattern);
    }
    afterRenderEffect(() => {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        const violations = this._pattern.validate();
        for (const violation of violations) {
          console.error(violation);
        }
      }
    });
    afterRenderEffect(() => {
      if (!this._hasFocused()) {
        this._pattern.setDefaultState();
      }
    });
    afterRenderEffect(() => {
      const items = inputs.items();
      const activeItem = untracked(() => inputs.activeItem());
      if (!items.some((i) => i === activeItem) && activeItem) {
        this._pattern.treeBehavior.unfocus();
      }
    });
    afterRenderEffect(() => {
      if (!(this._pattern instanceof ComboboxTreePattern)) return;
      const items = inputs.items();
      const values = untracked(() => this.values());
      if (items && values.some((v) => !items.some((i) => i.value() === v))) {
        this.values.set(values.filter((v) => items.some((i) => i.value() === v)));
      }
    });
  }
  _onFocus() {
    this._hasFocused.set(true);
  }
  _register(child) {
    this._unorderedItems().add(child);
    this._unorderedItems.set(new Set(this._unorderedItems()));
  }
  _unregister(child) {
    this._unorderedItems().delete(child);
    this._unorderedItems.set(new Set(this._unorderedItems()));
  }
  scrollActiveItemIntoView(options = {
    block: "nearest"
  }) {
    this._pattern.inputs.activeItem()?.element()?.scrollIntoView(options);
  }
  static ɵfac = function Tree_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Tree)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _Tree,
    selectors: [["", "ngTree", ""]],
    hostAttrs: ["role", "tree"],
    hostVars: 6,
    hostBindings: function Tree_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("keydown", function Tree_keydown_HostBindingHandler($event) {
          return ctx._pattern.onKeydown($event);
        })("pointerdown", function Tree_pointerdown_HostBindingHandler($event) {
          return ctx._pattern.onPointerdown($event);
        })("focusin", function Tree_focusin_HostBindingHandler() {
          return ctx._onFocus();
        });
      }
      if (rf & 2) {
        ɵɵdomProperty("tabIndex", ctx._pattern.tabIndex());
        ɵɵattribute("id", ctx.id())("aria-orientation", ctx._pattern.orientation())("aria-multiselectable", ctx._pattern.multi())("aria-disabled", ctx._pattern.disabled())("aria-activedescendant", ctx._pattern.activeDescendant());
      }
    },
    inputs: {
      id: [1, "id"],
      orientation: [1, "orientation"],
      multi: [1, "multi"],
      disabled: [1, "disabled"],
      selectionMode: [1, "selectionMode"],
      focusMode: [1, "focusMode"],
      wrap: [1, "wrap"],
      softDisabled: [1, "softDisabled"],
      typeaheadDelay: [1, "typeaheadDelay"],
      values: [1, "values"],
      nav: [1, "nav"],
      currentType: [1, "currentType"]
    },
    outputs: {
      values: "valuesChange"
    },
    exportAs: ["ngTree"],
    features: [ɵɵHostDirectivesFeature([ComboboxPopup])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tree2, [{
    type: Directive,
    args: [{
      selector: "[ngTree]",
      exportAs: "ngTree",
      host: {
        "role": "tree",
        "[attr.id]": "id()",
        "[attr.aria-orientation]": "_pattern.orientation()",
        "[attr.aria-multiselectable]": "_pattern.multi()",
        "[attr.aria-disabled]": "_pattern.disabled()",
        "[attr.aria-activedescendant]": "_pattern.activeDescendant()",
        "[tabindex]": "_pattern.tabIndex()",
        "(keydown)": "_pattern.onKeydown($event)",
        "(pointerdown)": "_pattern.onPointerdown($event)",
        "(focusin)": "_onFocus()"
      },
      hostDirectives: [ComboboxPopup]
    }]
  }], () => [], {
    id: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "id",
        required: false
      }]
    }],
    orientation: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "orientation",
        required: false
      }]
    }],
    multi: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "multi",
        required: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    selectionMode: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "selectionMode",
        required: false
      }]
    }],
    focusMode: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "focusMode",
        required: false
      }]
    }],
    wrap: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "wrap",
        required: false
      }]
    }],
    softDisabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "softDisabled",
        required: false
      }]
    }],
    typeaheadDelay: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "typeaheadDelay",
        required: false
      }]
    }],
    values: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "values",
        required: false
      }]
    }, {
      type: Output,
      args: ["valuesChange"]
    }],
    nav: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nav",
        required: false
      }]
    }],
    currentType: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "currentType",
        required: false
      }]
    }]
  });
})();
var TreeItem = class _TreeItem extends DeferredContentAware {
  _elementRef = inject(ElementRef);
  element = this._elementRef.nativeElement;
  _group = signal(void 0, ...ngDevMode ? [{
    debugName: "_group"
  }] : []);
  id = input(inject(_IdGenerator).getId("ng-tree-item-", true), ...ngDevMode ? [{
    debugName: "id"
  }] : []);
  value = input.required(...ngDevMode ? [{
    debugName: "value"
  }] : []);
  parent = input.required(...ngDevMode ? [{
    debugName: "parent"
  }] : []);
  disabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabled"
  } : {}), {
    transform: booleanAttribute
  }));
  selectable = input(true, ...ngDevMode ? [{
    debugName: "selectable"
  }] : []);
  expanded = model(false, ...ngDevMode ? [{
    debugName: "expanded"
  }] : []);
  label = input(...ngDevMode ? [void 0, {
    debugName: "label"
  }] : []);
  searchTerm = computed(() => this.label() ?? this.element.textContent, ...ngDevMode ? [{
    debugName: "searchTerm"
  }] : []);
  tree = computed(() => {
    if (this.parent() instanceof Tree2) {
      return this.parent();
    }
    return this.parent().ownedBy().tree();
  }, ...ngDevMode ? [{
    debugName: "tree"
  }] : []);
  active = computed(() => this._pattern.active(), ...ngDevMode ? [{
    debugName: "active"
  }] : []);
  level = computed(() => this._pattern.level(), ...ngDevMode ? [{
    debugName: "level"
  }] : []);
  selected = computed(() => this._pattern.selected(), ...ngDevMode ? [{
    debugName: "selected"
  }] : []);
  visible = computed(() => this._pattern.visible(), ...ngDevMode ? [{
    debugName: "visible"
  }] : []);
  _expanded = computed(() => this._pattern.expandable() ? this._pattern.expanded() : void 0, ...ngDevMode ? [{
    debugName: "_expanded"
  }] : []);
  _pattern;
  constructor() {
    super();
    afterNextRender(() => {
      if (this.tree()._pattern instanceof ComboboxTreePattern) {
        this.preserveContent.set(true);
      }
    });
    afterRenderEffect(() => {
      this.tree()._pattern instanceof ComboboxTreePattern ? this.contentVisible.set(true) : this.contentVisible.set(this._pattern.expanded());
    });
  }
  ngOnInit() {
    this.parent()._register(this);
    this.tree()._register(this);
    const treePattern = computed(() => this.tree()._pattern, ...ngDevMode ? [{
      debugName: "treePattern"
    }] : []);
    const parentPattern = computed(() => {
      if (this.parent() instanceof Tree2) {
        return treePattern();
      }
      return this.parent().ownedBy()._pattern;
    }, ...ngDevMode ? [{
      debugName: "parentPattern"
    }] : []);
    this._pattern = new TreeItemPattern(__spreadProps(__spreadValues({}, this), {
      tree: treePattern,
      parent: parentPattern,
      children: computed(() => this._group()?._childPatterns()),
      hasChildren: computed(() => !!this._group()),
      element: () => this.element,
      searchTerm: () => this.searchTerm() ?? ""
    }));
  }
  ngOnDestroy() {
    this.parent()._unregister(this);
    this.tree()._unregister(this);
  }
  _register(group) {
    this._group.set(group);
  }
  _unregister() {
    this._group.set(void 0);
  }
  static ɵfac = function TreeItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeItem)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TreeItem,
    selectors: [["", "ngTreeItem", ""]],
    hostAttrs: ["role", "treeitem"],
    hostVars: 10,
    hostBindings: function TreeItem_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵdomProperty("id", ctx._pattern.id());
        ɵɵattribute("data-active", ctx.active())("aria-expanded", ctx._expanded())("aria-selected", ctx.selected())("aria-current", ctx._pattern.current())("aria-disabled", ctx._pattern.disabled())("aria-level", ctx.level())("aria-setsize", ctx._pattern.setsize())("aria-posinset", ctx._pattern.posinset())("tabindex", ctx._pattern.tabIndex());
      }
    },
    inputs: {
      id: [1, "id"],
      value: [1, "value"],
      parent: [1, "parent"],
      disabled: [1, "disabled"],
      selectable: [1, "selectable"],
      expanded: [1, "expanded"],
      label: [1, "label"]
    },
    outputs: {
      expanded: "expandedChange"
    },
    exportAs: ["ngTreeItem"],
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeItem, [{
    type: Directive,
    args: [{
      selector: "[ngTreeItem]",
      exportAs: "ngTreeItem",
      host: {
        "[attr.data-active]": "active()",
        "role": "treeitem",
        "[id]": "_pattern.id()",
        "[attr.aria-expanded]": "_expanded()",
        "[attr.aria-selected]": "selected()",
        "[attr.aria-current]": "_pattern.current()",
        "[attr.aria-disabled]": "_pattern.disabled()",
        "[attr.aria-level]": "level()",
        "[attr.aria-setsize]": "_pattern.setsize()",
        "[attr.aria-posinset]": "_pattern.posinset()",
        "[attr.tabindex]": "_pattern.tabIndex()"
      }
    }]
  }], () => [], {
    id: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "id",
        required: false
      }]
    }],
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: true
      }]
    }],
    parent: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "parent",
        required: true
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    selectable: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "selectable",
        required: false
      }]
    }],
    expanded: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "expanded",
        required: false
      }]
    }, {
      type: Output,
      args: ["expandedChange"]
    }],
    label: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "label",
        required: false
      }]
    }]
  });
})();
var TreeItemGroup = class _TreeItemGroup {
  _elementRef = inject(ElementRef);
  element = this._elementRef.nativeElement;
  _deferredContent = inject(DeferredContent);
  _unorderedItems = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{
    debugName: "_unorderedItems"
  }] : []);
  _childPatterns = computed(() => [...this._unorderedItems()].sort(sortDirectives).map((c) => c._pattern), ...ngDevMode ? [{
    debugName: "_childPatterns"
  }] : []);
  ownedBy = input.required(...ngDevMode ? [{
    debugName: "ownedBy"
  }] : []);
  ngOnInit() {
    this._deferredContent.deferredContentAware.set(this.ownedBy());
    this.ownedBy()._register(this);
  }
  ngOnDestroy() {
    this.ownedBy()._unregister();
  }
  _register(child) {
    this._unorderedItems().add(child);
    this._unorderedItems.set(new Set(this._unorderedItems()));
  }
  _unregister(child) {
    this._unorderedItems().delete(child);
    this._unorderedItems.set(new Set(this._unorderedItems()));
  }
  static ɵfac = function TreeItemGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeItemGroup)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TreeItemGroup,
    selectors: [["ng-template", "ngTreeItemGroup", ""]],
    inputs: {
      ownedBy: [1, "ownedBy"]
    },
    exportAs: ["ngTreeItemGroup"],
    features: [ɵɵHostDirectivesFeature([DeferredContent])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeItemGroup, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngTreeItemGroup]",
      exportAs: "ngTreeItemGroup",
      hostDirectives: [DeferredContent]
    }]
  }], null, {
    ownedBy: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "ownedBy",
        required: true
      }]
    }]
  });
})();
export {
  Tree2 as Tree,
  TreeItem,
  TreeItemGroup,
  Combobox as ɵɵCombobox,
  ComboboxDialog as ɵɵComboboxDialog,
  ComboboxInput as ɵɵComboboxInput,
  ComboboxPopup as ɵɵComboboxPopup,
  ComboboxPopupContainer as ɵɵComboboxPopupContainer,
  DeferredContent as ɵɵDeferredContent
};
//# sourceMappingURL=@angular_aria_tree.js.map
