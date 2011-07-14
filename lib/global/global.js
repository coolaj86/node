var MyGlobal;
if ('undefined' !== typeof window) {
  MyGlobal = window.global = window;
} else if ('undefined' !== typeof global) {
  MyGlobal = global.global = global;
} else {
  MyGlobal = (function () { return this || {}; }());
  MyGlobal.global = MyGlobal;
}
module.exports = Global;
