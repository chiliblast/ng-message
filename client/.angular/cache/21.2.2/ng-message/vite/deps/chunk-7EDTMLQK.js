// node_modules/ol/resolution.js
function fromResolutionLike(resolution) {
  if (Array.isArray(resolution)) {
    return Math.min(...resolution);
  }
  return resolution;
}

export {
  fromResolutionLike
};
//# sourceMappingURL=chunk-7EDTMLQK.js.map
