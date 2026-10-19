"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };

  // src/states.ts
  var defaultStates = {
    starting: {
      code: 0,
      message: "Opening a camera..."
    },
    ok: {
      code: 1,
      message: "Face is detected"
    },
    tooSmall: {
      code: 2,
      message: "Face is too far"
    },
    tooBig: {
      code: 3,
      message: "Face is too close"
    },
    havePermission: {
      code: 4,
      message: "Camera permission ok"
    },
    noFace: {
      code: 6,
      message: "No face detected"
    },
    multiFace: {
      code: 7,
      message: "Multiple faces detected"
    },
    inactive: {
      code: 8,
      message: "Media stream is not active"
    }
  };

  // src/options.ts
  var defaultOptions = {
    detection: {
      minScore: 100,
      cascade: window.facefinder,
      // the facefinder cascade data, loaded from the facefinder.bin file
      cascadeParams: {
        shiftfactor: 0.1,
        // move the detection window by 10% of its size
        minsize: 60,
        // minimum size of a face (impacts performance, smaller means more processing)
        maxsize: 1e3,
        // maximum size of a face
        scalefactor: 1.1
        // for multiscale processing: resize the detection window by 10% when moving to the higher scale
      }
    },
    capture: {
      minFaceSize: 150,
      maxFaceSize: 300,
      minDetectionInterval: 500,
      minErrorCooldownInterval: 2e3,
      states: defaultStates
    },
    visuals: {
      backdrop: {
        color: "black",
        opacityDelta: 0.025,
        maxOpacity: 0.7
      },
      frame: {
        goodFaceColor: "#d3d3d3",
        badFaceColor: "#d31d20",
        progressColor: "#337ab7",
        progressDelta: 0.02,
        scale: 1.5,
        thickness: 1.1,
        density: 30
      }
    }
  };
  function isPOJO(obj) {
    if (typeof obj !== "object" || obj === null) {
      return false;
    }
    const proto = Object.getPrototypeOf(obj);
    return proto === null || proto === Object.prototype;
  }
  function deepMerge(first, second) {
    const result = __spreadValues({}, first);
    for (const key in second) {
      if (second[key] !== void 0) {
        result[key] = isPOJO(second[key]) && isPOJO(first[key]) ? deepMerge(first[key], second[key]) : second[key];
      }
    }
    return result;
  }

  // src/pico.ts
  function unpack_cascade(bytes) {
    if (bytes.length < 8) throw new Error("Cascade file is too short");
    var dview = new DataView(new ArrayBuffer(4));
    var p = 8;
    dview.setUint8(0, bytes[p + 0]), dview.setUint8(1, bytes[p + 1]), dview.setUint8(2, bytes[p + 2]), dview.setUint8(3, bytes[p + 3]);
    var tdepth = dview.getInt32(0, true);
    p = p + 4;
    dview.setUint8(0, bytes[p + 0]), dview.setUint8(1, bytes[p + 1]), dview.setUint8(2, bytes[p + 2]), dview.setUint8(3, bytes[p + 3]);
    var ntrees = dview.getInt32(0, true);
    p = p + 4;
    var _tcodes = [];
    var _tpreds = [];
    var _thresh = [];
    for (var t = 0; t < ntrees; ++t) {
      _tcodes.push(...[0, 0, 0, 0]);
      _tcodes.push(...bytes.slice(p, p + 4 * Math.pow(2, tdepth) - 4));
      p = p + 4 * Math.pow(2, tdepth) - 4;
      for (var i = 0; i < Math.pow(2, tdepth); ++i) {
        dview.setUint8(0, bytes[p + 0]), dview.setUint8(1, bytes[p + 1]), dview.setUint8(2, bytes[p + 2]), dview.setUint8(3, bytes[p + 3]);
        _tpreds.push(dview.getFloat32(0, true));
        p = p + 4;
      }
      dview.setUint8(0, bytes[p + 0]), dview.setUint8(1, bytes[p + 1]), dview.setUint8(2, bytes[p + 2]), dview.setUint8(3, bytes[p + 3]);
      _thresh.push(dview.getFloat32(0, true));
      p = p + 4;
    }
    var tcodes = new Int8Array(_tcodes);
    var tpreds = new Float32Array(_tpreds);
    var thresh = new Float32Array(_thresh);
    function classify_region(r, c, s, pixels, ldim) {
      r = 256 * r;
      c = 256 * c;
      var root = 0;
      var o = 0;
      var pow2tdepth = Math.pow(2, tdepth) >> 0;
      for (var i2 = 0; i2 < ntrees; ++i2) {
        var idx = 1;
        for (var j = 0; j < tdepth; ++j) {
          var offset = root + 4 * idx;
          var p1 = pixels[(r + tcodes[offset + 0] * s >> 8) * ldim + (c + tcodes[offset + 1] * s >> 8)];
          var p2 = pixels[(r + tcodes[offset + 2] * s >> 8) * ldim + (c + tcodes[offset + 3] * s >> 8)];
          idx = 2 * idx + Number(p1 <= p2);
        }
        o = o + tpreds[pow2tdepth * i2 + idx - pow2tdepth];
        if (o <= thresh[i2])
          return -1;
        root += 4 * pow2tdepth;
      }
      return o - thresh[ntrees - 1];
    }
    return classify_region;
  }
  function run_cascade(image, classify_region, params) {
    var pixels = image.pixels;
    var nrows = image.nrows;
    var ncols = image.ncols;
    var ldim = image.ldim;
    var shiftfactor = params.shiftfactor;
    var minsize = params.minsize;
    var maxsize = params.maxsize;
    var scalefactor = params.scalefactor;
    var scale = minsize;
    var detections = [];
    while (scale <= maxsize) {
      var step = Math.max(shiftfactor * scale, 1) >> 0;
      var offset = scale / 2 + 1 >> 0;
      for (var r = offset; r <= nrows - offset; r += step)
        for (var c = offset; c <= ncols - offset; c += step) {
          var q = classify_region(r, c, scale, pixels, ldim);
          if (q > 0)
            detections.push([r, c, scale, q]);
        }
      scale = scale * scalefactor;
    }
    return detections;
  }
  function cluster_detections(dets, iouThreshold) {
    dets = dets.sort((a, b) => b[3] - a[3]);
    var assignments = new Array(dets.length).fill(0);
    var clusters = [];
    for (var i = 0; i < dets.length; ++i) {
      if (assignments[i] == 0) {
        var r = 0, c = 0, s = 0, q = 0, n = 0;
        for (var j = i; j < dets.length; ++j) {
          var dj = dets[j];
          if (calculate_iou(dets[i], dj) > iouThreshold) {
            assignments[j] = 1;
            r = r + dj[0];
            c = c + dj[1];
            s = s + dj[2];
            q = q + dj[3];
            n = n + 1;
          }
        }
        clusters.push([r / n, c / n, s / n, q]);
      }
    }
    return clusters;
  }
  function instantiate_detection_memory(size) {
    var n = 0, memory = [];
    for (var i = 0; i < size; ++i)
      memory.push([]);
    return (dets) => {
      memory[n] = dets;
      n = (n + 1) % memory.length;
      dets = [];
      for (i = 0; i < memory.length; ++i)
        dets = dets.concat(memory[i]);
      return dets;
    };
  }
  function calculate_iou(det1, det2) {
    var r1 = det1[0], c1 = det1[1], s1 = det1[2];
    var r2 = det2[0], c2 = det2[1], s2 = det2[2];
    var overr = Math.max(0, Math.min(r1 + s1 / 2, r2 + s2 / 2) - Math.max(r1 - s1 / 2, r2 - s2 / 2));
    var overc = Math.max(0, Math.min(c1 + s1 / 2, c2 + s2 / 2) - Math.max(c1 - s1 / 2, c2 - s2 / 2));
    return overr * overc / (s1 * s1 + s2 * s2 - overr * overc);
  }

  // src/index.ts
  var circle = Math.PI * 2;
  var quarter = Math.PI / 2;
  var lastCameraId;
  function die(message) {
    throw new Error(message);
  }
  var FaceSDK = class _FaceSDK {
    constructor(videoElement, constraints, captureCanvas, displayCanvas, imageCount, successCB, errorCB, progressCB, options) {
      this.started = false;
      this.completed = false;
      this.captured = false;
      this.images = [];
      this.globalAlpha = 0;
      // holds a current mask opacity level; the mask progressively darkens when a face is detected
      this.currentPercent = 0;
      this.totalImageCount = 0;
      this.facefinder_classify_region = () => -1;
      this.mask = document.createElement("canvas");
      var _a, _b, _c;
      this.videoElement = videoElement || die("Missing <video> element");
      this.captureCanvas = captureCanvas || die("Missing <canvas> element for image capturing");
      this.constraints = constraints || { video: { facingMode: "user" } };
      this.displayCanvas = displayCanvas;
      this.imageCount = Math.min(imageCount, 1);
      this.successCB = successCB || die("Missing success callback");
      this.errorCB = errorCB || die("Missing error callback");
      this.progressCB = progressCB || die("Missing progress callback");
      this.options = deepMerge(defaultOptions, options || {});
      if (!((_a = this.options.detection) == null ? void 0 : _a.cascade)) throw new Error("Missing cascade data");
      this.totalImageCount = imageCount;
      this.context = this.captureCanvas.getContext("2d", { willReadFrequently: true }) || die("Cannot obtain 2d context from display canvas");
      this.displayContext = (_b = this.displayCanvas) == null ? void 0 : _b.getContext("2d");
      if (this.displayContext)
        (_c = this.displayContext) == null ? void 0 : _c.clearRect(0, 0, this.displayContext.canvas.width, this.displayContext.canvas.height);
      this.update_memory = instantiate_detection_memory(5);
    }
    // Returns a list of all the video devices existing in users system (provided by browser)
    // If we need to use a specific device, use this in constraints where id is the actual deviceId.
    // video: { deviceId: { exact: id} }
    static async getAvailableDevices() {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter((item) => item.kind === "videoinput");
        return videoDevices;
      } catch (error) {
      }
      ;
    }
    // Creates, starts and returns a capture process.
    // If there is already a capture process running, it will be stopped and replaced with the new one.
    // The capture process is associated with the video element (under media constraints)
    // and canvas elements used for displaying video and the captured image.
    static init(videoElement, constraints, canvas, displayCanvas, imageCount, successCallback, errorCallback, progressCallback, options) {
      var _a;
      (_a = _FaceSDK.current) == null ? void 0 : _a.stopVideo();
      _FaceSDK.current = new _FaceSDK(videoElement, constraints, canvas, displayCanvas, imageCount, successCallback, errorCallback, progressCallback, options);
      _FaceSDK.current.start();
      return _FaceSDK.current;
    }
    // Returns the last camera id used for the capture process.
    static getLastCameraId() {
      return lastCameraId;
    }
    // Stops the video in the capture process created by the `init` static method.
    static stopVideo() {
      var _a, _b;
      (_a = _FaceSDK.current) == null ? void 0 : _a.stopRawFeed();
      (_b = _FaceSDK.current) == null ? void 0 : _b.stopVideo();
    }
    // this will start and ask user permission for accessing webcam.
    async start() {
      if (this.started) return;
      try {
        const cascade = this.options.detection.cascade || window.facefinder;
        const bytes = cascade instanceof Uint8Array ? cascade : new Uint8Array(cascade);
        this.facefinder_classify_region = unpack_cascade(bytes);
        this.progressCB(this.options.capture.states.starting);
        const stream = await navigator.mediaDevices.getUserMedia(this.constraints);
        this.progressCB(this.options.capture.states.havePermission);
        this.stream = stream;
        this.videoElement.srcObject = stream;
        try {
          const playPromise = this.videoElement.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {});
          }
        } catch (e) {}
        const adjustDimensions = () => {
          const vw = this.videoElement.videoWidth;
          const vh = this.videoElement.videoHeight;
          if (vw && vh) {
            const maxDim = 480;
            const s = Math.min(1, maxDim / Math.max(vw, vh));
            const targetW = Math.round(vw * s);
            const targetH = Math.round(vh * s);
            this.captureCanvas.width = targetW;
            this.captureCanvas.height = targetH;
            if (this.displayCanvas) {
              this.displayCanvas.width = targetW;
              this.displayCanvas.height = targetH;
            }
          }
        };
        this.videoElement.addEventListener("loadedmetadata", adjustDimensions);
        this.videoElement.addEventListener("play", adjustDimensions);
        const tracks = stream.getTracks();
        lastCameraId = tracks[0].getSettings().deviceId;
        this.setCapturedTimeout();
        this.started = true;
        this.runTheLoop();
      } catch (error) {
        this.started = false;
        this.errorCB({
          code: error.code,
          message: error.message,
          name: error.name
        });
      }
      ;
    }
    // Start a raw video feed without face detection. Set `interval` to 0 for a live feed.
    startRawFeed(interval = 100) {
      this.interval = setInterval(() => {
        this.context.drawImage(this.videoElement, 0, 0, this.captureCanvas.width, this.captureCanvas.height);
      }, interval);
    }
    // Stop the raw feed.
    stopRawFeed() {
      clearInterval(this.interval);
      delete this.interval;
    }
    // Returns the base64-encoded image, which we can use for further processing/ending to server.
    getImageBase64() {
      return this.captureCanvas.toDataURL("image/jpeg", 1);
    }
    // public static getImageBase64() {
    //     faceSDK.current?.getImageBase64();
    // }
    // Stops all the video feed currently streaming.
    stopVideo() {
      if (!this.started) return;
      this.started = false;
      const stream = this.videoElement.srcObject;
      stream == null ? void 0 : stream.getVideoTracks().forEach((track) => track.stop());
    }
    // Tries to detect faces and periodically saves detected face into the `images` collection,
    // until the maximum number of detections made or a video is stopped.
    //
    detectFace() {
      if (!this.stream || !this.stream.active) {
        this.progressCB(this.options.capture.states.inactive);
        this.setErrorTimeout();
        return;
      }
      const shouldMirror = this.options.visuals && this.options.visuals.mirror !== false;
      // 1. Draw live camera frame into captureCanvas (unshifted, raw for face detection)
      _FaceSDK.drawImage(this.videoElement, this.context, true, false);

      // 2. Draw live camera frame into displayCanvas (mirrored for intuitive selfie preview)
      if (this.displayContext) {
        _FaceSDK.drawImage(this.videoElement, this.displayContext, true, shouldMirror);
      }

      const rgba = this.context.getImageData(0, 0, this.captureCanvas.width, this.captureCanvas.height).data;
      const image = {
        pixels: _FaceSDK.rgba_to_grayscale(rgba, this.captureCanvas.height, this.captureCanvas.width),
        nrows: this.captureCanvas.height,
        ncols: this.captureCanvas.width,
        ldim: this.captureCanvas.width
      };
      let dets = run_cascade(
        image,
        this.facefinder_classify_region,
        this.options.detection.cascadeParams
      );
      dets = this.update_memory(dets);
      dets = cluster_detections(dets, 0.2);
      const detectedFaces = dets.filter((det) => det[3] > this.options.detection.minScore);
      if (this.completed && this.currentPercent >= 1) {
        this.stopVideo();
        this.successCB(this.images);
      }
      if (this.currentPercent < this.images.length / this.totalImageCount) {
        this.currentPercent += this.options.visuals.frame.progressDelta;
      }
      this.drawFaceMask(detectedFaces);
      if (detectedFaces.length === 0) {
        this.progressCB(this.options.capture.states.noFace);
        return;
      }
      const multipleFaces = detectedFaces.length > 1;
      let incorrectSize = false;
      if (multipleFaces) {
        this.progressCB(this.options.capture.states.multiFace);
        this.setErrorTimeout();
      } else {
        const faceSize = detectedFaces[0][2];
        if (faceSize < this.options.capture.minFaceSize) {
          incorrectSize = true;
          this.progressCB(this.options.capture.states.tooSmall);
          this.setErrorTimeout();
        } else if (faceSize > this.options.capture.maxFaceSize) {
          incorrectSize = true;
          this.progressCB(this.options.capture.states.tooBig);
          this.setErrorTimeout();
        } else {
          this.progressCB(this.options.capture.states.ok);
        }
      }
      if (!(multipleFaces || incorrectSize) && this.readyToCapture()) {
        this.saveImage(this.getImageBase64());
        this.setCapturedTimeout();
      }
    }
    // draw the image from the source to the dest, properly scaled and centered
    static drawImage(source, dest, clear = true, mirror = false) {
      if (!dest) return;
      const sourceWidth = source instanceof HTMLVideoElement ? source.videoWidth : source.width;
      const sourceHeight = source instanceof HTMLVideoElement ? source.videoHeight : source.height;
      if (!sourceWidth || !sourceHeight) return;

      const cw = dest.canvas.width;
      const ch = dest.canvas.height;
      const scale = Math.max(cw / sourceWidth, ch / sourceHeight);
      const renderW = Math.round(sourceWidth * scale);
      const renderH = Math.round(sourceHeight * scale);
      const offsetX = Math.round((cw - renderW) / 2);
      const offsetY = Math.round((ch - renderH) / 2);

      if (clear) {
        dest.clearRect(0, 0, cw, ch);
      }

      dest.save();
      if (mirror) {
        dest.translate(cw, 0);
        dest.scale(-1, 1);
      }
      dest.drawImage(
        source,
        0,
        0,
        sourceWidth,
        sourceHeight,
        offsetX,
        offsetY,
        renderW,
        renderH
      );
      dest.restore();
    }
    drawFaceMask(faces) {
      if (!this.displayContext) return;
      this.mask.width = this.captureCanvas.width;
      this.mask.height = this.captureCanvas.height;
      const maskContext = this.mask.getContext("2d");
      if (!maskContext) throw new Error("Failed to get mask context");
      const frame = this.options.visuals.frame;
      const backdrop = this.options.visuals.backdrop;
      const capture = this.options.capture;
      const multipleFaces = faces.length > 1;
      const shouldMirror = this.options.visuals && this.options.visuals.mirror !== false;
      maskContext.clearRect(0, 0, this.captureCanvas.width, this.captureCanvas.height);
      if (backdrop && backdrop.maxOpacity > 0) {
        maskContext.globalAlpha = faces.length === 1 ? this.increaseAlpha() : this.decreaseAlpha();
        maskContext.fillStyle = backdrop.color || "black";
        maskContext.fillRect(0, 0, this.captureCanvas.width, this.captureCanvas.height);
      }
      for (let face of faces) {
        const row = face[0], col = face[1], scale = face[2];
        const innerRadius = scale / 2 * frame.scale;
        if (!multipleFaces && backdrop && backdrop.maxOpacity > 0) {
          maskContext.globalCompositeOperation = "destination-out";
          maskContext.beginPath();
          maskContext.arc(col, row, innerRadius, -quarter, -quarter + circle, false);
          maskContext.fill();
        }
        const incorrectSize = scale < capture.minFaceSize || scale > capture.maxFaceSize;
        maskContext.globalCompositeOperation = "source-over";
        maskContext.globalAlpha = 1;
        const frameRadius = innerRadius * frame.thickness;
        const lineWidth = Math.max(3, frameRadius - innerRadius);
        const dash = [frameRadius * circle / 2 / frame.density];
        maskContext.beginPath();
        maskContext.arc(col, row, frameRadius, -quarter, -quarter + circle, false);
        maskContext.lineWidth = lineWidth;
        maskContext.setLineDash(dash);
        maskContext.strokeStyle = multipleFaces || incorrectSize ? frame.badFaceColor : frame.goodFaceColor;
        maskContext.stroke();
        if (!(multipleFaces || incorrectSize)) {
          maskContext.beginPath();
          maskContext.arc(col, row, frameRadius, -quarter, -quarter + circle * this.currentPercent, false);
          maskContext.lineWidth = lineWidth;
          maskContext.setLineDash(dash);
          maskContext.strokeStyle = frame.progressColor;
          maskContext.stroke();
        }
      }
      // Draw mask overlay on top of the live video WITHOUT clearing the canvas underneath!
      _FaceSDK.drawImage(this.mask, this.displayContext, false, shouldMirror);
    }
    runTheLoop() {
      const loop = () => {
        if (!this.started) return;
        this.detectFace();
        requestAnimationFrame(loop);
      };
      requestAnimationFrame(loop);
    }
    saveImage(image) {
      if (this.images.length < this.totalImageCount) {
        this.images.push(image);
      }
      if (this.images.length === this.totalImageCount && !this.completed) {
        this.completed = true;
      }
    }
    static rgba_to_grayscale(rgba, nrows, ncols) {
      const gray = new Uint8Array(nrows * ncols);
      for (let r = 0; r < nrows; ++r) {
        for (let c = 0; c < ncols; ++c) {
          gray[r * ncols + c] = (2 * rgba[r * 4 * ncols + 4 * c] + 7 * rgba[r * 4 * ncols + 4 * c + 1] + 1 * rgba[r * 4 * ncols + 4 * c + 2]) / 10;
        }
      }
      return gray;
    }
    increaseAlpha() {
      if (this.globalAlpha < this.options.visuals.backdrop.maxOpacity) {
        this.globalAlpha = this.globalAlpha + this.options.visuals.backdrop.opacityDelta;
      }
      return this.globalAlpha;
    }
    decreaseAlpha() {
      if (this.globalAlpha > 0) {
        this.globalAlpha = this.globalAlpha - this.options.visuals.backdrop.opacityDelta;
      }
      if (this.globalAlpha < 0) {
        this.globalAlpha = 0;
      }
      return this.globalAlpha;
    }
    readyToCapture() {
      return !this.completed && !this.captured;
    }
    setCapturedTimeout() {
      this.captured = true;
      this.timeout = setTimeout(() => {
        this.captured = false;
      }, this.options.capture.minDetectionInterval);
    }
    setErrorTimeout() {
      this.captured = true;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.captured = false;
      }, this.options.capture.minErrorCooldownInterval);
    }
  };
  window.faceSDK = FaceSDK;
})();
//# sourceMappingURL=face.sdk.js.map
