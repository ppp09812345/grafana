'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _unistUtilMap = require('unist-util-map');

var _unistUtilMap2 = _interopRequireDefault(_unistUtilMap);

var _Parser = require('./Parser');

var _Parser2 = _interopRequireDefault(_Parser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RST = {
  parse: function parse(s) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var tree = _Parser2.default.parse(s);

    return (0, _unistUtilMap2.default)(tree, function (node) {
      var omits = [];
      if (!options.position) {
        omits.push('position');
      }
      if (!options.blanklines) {
        omits.push('blanklines');
      }
      if (!options.indent) {
        omits.push('indent');
      }
      return _lodash2.default.omit(node, omits);
    });
  }
};

exports.default = RST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SU1QuanMiXSwibmFtZXMiOlsiUlNUIiwicGFyc2UiLCJzIiwib3B0aW9ucyIsInRyZWUiLCJvbWl0cyIsInBvc2l0aW9uIiwicHVzaCIsImJsYW5rbGluZXMiLCJpbmRlbnQiLCJvbWl0Iiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxNQUFNO0FBQ1ZDLE9BRFUsaUJBQ0pDLENBREksRUFDYTtBQUFBLFFBQWRDLE9BQWMseURBQUosRUFBSTs7QUFDckIsUUFBTUMsT0FBTyxpQkFBT0gsS0FBUCxDQUFhQyxDQUFiLENBQWI7O0FBRUEsV0FBTyw0QkFBSUUsSUFBSixFQUFVLGdCQUFRO0FBQ3ZCLFVBQU1DLFFBQVEsRUFBZDtBQUNBLFVBQUksQ0FBQ0YsUUFBUUcsUUFBYixFQUF1QjtBQUNyQkQsY0FBTUUsSUFBTixDQUFXLFVBQVg7QUFDRDtBQUNELFVBQUksQ0FBQ0osUUFBUUssVUFBYixFQUF5QjtBQUN2QkgsY0FBTUUsSUFBTixDQUFXLFlBQVg7QUFDRDtBQUNELFVBQUksQ0FBQ0osUUFBUU0sTUFBYixFQUFxQjtBQUNuQkosY0FBTUUsSUFBTixDQUFXLFFBQVg7QUFDRDtBQUNELGFBQU8saUJBQUVHLElBQUYsQ0FBT0MsSUFBUCxFQUFhTixLQUFiLENBQVA7QUFDRCxLQVpNLENBQVA7QUFhRDtBQWpCUyxDQUFaOztrQkFvQmVMLEciLCJmaWxlIjoiUlNULmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBtYXAgZnJvbSAndW5pc3QtdXRpbC1tYXAnO1xuaW1wb3J0IHBhcnNlciBmcm9tICcuL1BhcnNlcic7XG5cbmNvbnN0IFJTVCA9IHtcbiAgcGFyc2Uocywgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgdHJlZSA9IHBhcnNlci5wYXJzZShzKTtcblxuICAgIHJldHVybiBtYXAodHJlZSwgbm9kZSA9PiB7XG4gICAgICBjb25zdCBvbWl0cyA9IFtdO1xuICAgICAgaWYgKCFvcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgICAgIG9taXRzLnB1c2goJ3Bvc2l0aW9uJyk7XG4gICAgICB9XG4gICAgICBpZiAoIW9wdGlvbnMuYmxhbmtsaW5lcykge1xuICAgICAgICBvbWl0cy5wdXNoKCdibGFua2xpbmVzJyk7XG4gICAgICB9XG4gICAgICBpZiAoIW9wdGlvbnMuaW5kZW50KSB7XG4gICAgICAgIG9taXRzLnB1c2goJ2luZGVudCcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF8ub21pdChub2RlLCBvbWl0cyk7XG4gICAgfSk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSU1Q7XG4iXX0=