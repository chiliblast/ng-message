import {
  inflate_1
} from "./chunk-SBAT3GX5.js";
import {
  BaseDecoder
} from "./chunk-DGE6JEPS.js";
import "./chunk-4MWRP73S.js";

// node_modules/geotiff/dist-module/compression/deflate.js
var DeflateDecoder = class extends BaseDecoder {
  /** @param {ArrayBuffer} buffer */
  decodeBlock(buffer) {
    return inflate_1(new Uint8Array(buffer)).buffer;
  }
};
export {
  DeflateDecoder as default
};
//# sourceMappingURL=chunk-Q2PIZYWC.js.map
