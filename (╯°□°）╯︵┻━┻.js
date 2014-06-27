(function (self) {
  "use strict";
  if ((typeof console !== 'undefined') && (typeof console.error === 'function')) {
    var error = window.console.error;
    self['(╯°□°）╯︵ ┻━┻'] = Function.prototype.bind.call(error, console);
    window.console.error = undefined;
  } else {
    self['(╯°□°）╯︵ ┻━┻'] = function () {}
  }
}(typeof window !== 'undefined'? window : typeof global !== 'undefined' ? global : self));
