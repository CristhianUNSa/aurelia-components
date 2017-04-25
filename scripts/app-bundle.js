define('app',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function App() {
    _classCallCheck(this, App);

    this.mydata = [{
      "Id": 50500,
      "FirstName": "doug ",
      "LastName": "kunz",
      "Email": "arrietamd@gmail.com",
      "UserName": "arrietamd@gmail.com"
    }, {
      "Id": 50504,
      "FirstName": "kim",
      "LastName": "Gambino",
      "Email": "cristina.nieva@jbknowledge.com",
      "UserName": "cristina.nieva@jbknowledge.com"
    }, {
      "Id": 50506,
      "FirstName": "Lawrence",
      "LastName": "Tavares",
      "Email": "diego@smartbidnet.com",
      "UserName": "diego@smartbidnet.com"
    }, {
      "Id": 50508,
      "FirstName": "Sebastian",
      "LastName": "Costa",
      "Email": "rodrigfffo.arteaga@jbkt.com",
      "UserName": "scosta"
    }, {
      "Id": 50510,
      "FirstName": "Mike",
      "LastName": "Brown",
      "Email": "diego@smartbidnet.com",
      "UserName": "SullivanFire6@yahoo.com"
    }];
  };
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('components/table-item',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.TableItem = undefined;

    function _initDefineProp(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    function _initializerWarningHelper(descriptor, context) {
        throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
    }

    var _desc, _value, _class, _descriptor;

    var TableItem = exports.TableItem = (_class = function TableItem() {
        _classCallCheck(this, TableItem);

        _initDefineProp(this, 'persona', _descriptor, this);
    }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'persona', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    })), _class);
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"./components/table-item\"></require><h1>Componentes</h1><table><tr repeat.for=\"item of mydata\"><td><table-item persona.bind=\"item\"></table-item></td></tr></table></template>"; });
define('text!components/table-item.html', ['module'], function(module) { module.exports = "<template>${persona.Id} - ${persona.FirstName} - ${persona.LastName}</template>"; });
//# sourceMappingURL=app-bundle.js.map