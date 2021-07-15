'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _Type = require('./Type');

var _Type2 = _interopRequireDefault(_Type);

var _ParserUtil = require('./ParserUtil');

var _ParserUtil2 = _interopRequireDefault(_ParserUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Elements = {};

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

_lodash2.default.forEach(_Type2.default.valueTypes, function (type, name) {
  Elements[capitalize(name)] = function () {
    function _class(_ref) {
      var value = _ref.value;
      var position = _ref.position;

      _classCallCheck(this, _class);

      this.type = type;
      this.value = value;
      this.position = position;
    }

    return _class;
  }();
});

_lodash2.default.forEach(_Type2.default.parentTypes, function (type, name) {
  Elements[capitalize(name)] = function () {
    function _class2(_ref2) {
      var _ref2$children = _ref2.children;
      var children = _ref2$children === undefined ? [] : _ref2$children;
      var position = _ref2.position;
      var _ref2$blanklines = _ref2.blanklines;
      var blanklines = _ref2$blanklines === undefined ? [] : _ref2$blanklines;
      var _ref2$bullet = _ref2.bullet;
      var bullet = _ref2$bullet === undefined ? null : _ref2$bullet;
      var _ref2$depth = _ref2.depth;
      var depth = _ref2$depth === undefined ? null : _ref2$depth;
      var _ref2$role = _ref2.role;
      var role = _ref2$role === undefined ? null : _ref2$role;
      var _ref2$indent = _ref2.indent;
      var indent = _ref2$indent === undefined ? null : _ref2$indent;
      var _ref2$directive = _ref2.directive;
      var directive = _ref2$directive === undefined ? null : _ref2$directive;

      _classCallCheck(this, _class2);

      this.type = type;

      if (type === 'bullet_list') {
        this.bullet = bullet;
      }
      if (type === 'interpreted_text') {
        this.role = role;
      }
      if (type === 'section') {
        this.depth = depth;
      }
      if (type === 'directive') {
        this.directive = directive;
      }

      this.position = position;
      if (indent) {
        this.indent = indent;
      }
      this.blanklines = blanklines || [];
      this.children = children;
    }

    return _class2;
  }();
});

Elements.EnumeratorSequence = function () {
  function _class3(_ref3) {
    var type = _ref3.type;
    var value = _ref3.value;

    _classCallCheck(this, _class3);

    this.type = type;
    this.value = value;
  }

  _createClass(_class3, [{
    key: 'width',
    value: function width() {
      return this.value.length;
    }
  }, {
    key: 'isAuto',
    value: function isAuto() {
      return this.type === 'auto';
    }
  }, {
    key: 'isArabicNumerals',
    value: function isArabicNumerals() {
      return this.type === 'arabic_numerals';
    }
  }, {
    key: 'isUppercaseAlphabet',
    value: function isUppercaseAlphabet() {
      return this.type === 'uppercase_alphabet';
    }
  }, {
    key: 'isLowercaseAlphabet',
    value: function isLowercaseAlphabet() {
      return this.type === 'lowercase_alphabet';
    }
  }, {
    key: 'isUppercaseRoman',
    value: function isUppercaseRoman() {
      return this.type === 'uppercase_roman';
    }
  }, {
    key: 'isLowercaseRoman',
    value: function isLowercaseRoman() {
      return this.type === 'lowercase_roman';
    }
  }]);

  return _class3;
}();

Elements.Enumerator = function () {
  function _class4(_ref4) {
    var sequence = _ref4.sequence;
    var format = _ref4.format;

    _classCallCheck(this, _class4);

    this.sequence = sequence;
    this.format = format;
  }

  _createClass(_class4, [{
    key: 'width',
    value: function width() {
      if (this.format === 'parentheses') {
        return this.sequence.width() + 2;
      }
      return this.sequence.width() + 1;
    }
  }, {
    key: 'isPeriodFormat',
    value: function isPeriodFormat() {
      return this.format === 'period';
    }
  }, {
    key: 'isParenthesesFormat',
    value: function isParenthesesFormat() {
      return this.format === 'parentheses';
    }
  }, {
    key: 'isRightParenthesisFormat',
    value: function isRightParenthesisFormat() {
      return this.format === 'right_parenthesis';
    }
  }, {
    key: 'isNext',
    value: function isNext(e) {
      if (this.format !== e.format) {
        return false;
      } else if (e.sequence.isAuto()) {
        return true;
      } else if (this.sequence.type !== e.sequence.type) {
        return false;
      } else if (this.sequence.isArabicNumerals()) {
        return parseInt(this.sequence.value, 10) + 1 === parseInt(e.sequence.value, 10);
      } else if (this.sequence.isUppercaseAlphabet() || this.sequence.isLowercaseAlphabet()) {
        return this.sequence.value.charCodeAt(0) + 1 === e.sequence.value.charCodeAt(0);
      } else if (this.sequence.isUppercaseRoman() || this.sequence.isLowercaseRoman()) {
        return _ParserUtil2.default.romanToNumber(this.sequence.value.toUpperCase()) + 1 === _ParserUtil2.default.romanToNumber(e.sequence.value.toUpperCase());
      }
      return true; // auto
    }
  }, {
    key: 'isFirst',
    value: function isFirst() {
      if (this.sequence.isUppercaseRoman() || this.sequence.isLowercaseRoman()) {
        var value = this.sequence.value;
        return value === 'i' || value === 'I' || value.length === 2;
      }
      return true;
    }
  }]);

  return _class4;
}();

exports.default = Elements;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9FbGVtZW50cy5qcyJdLCJuYW1lcyI6WyJFbGVtZW50cyIsImNhcGl0YWxpemUiLCJzdHIiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiZm9yRWFjaCIsInZhbHVlVHlwZXMiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwicG9zaXRpb24iLCJwYXJlbnRUeXBlcyIsImNoaWxkcmVuIiwiYmxhbmtsaW5lcyIsImJ1bGxldCIsImRlcHRoIiwicm9sZSIsImluZGVudCIsImRpcmVjdGl2ZSIsIkVudW1lcmF0b3JTZXF1ZW5jZSIsImxlbmd0aCIsIkVudW1lcmF0b3IiLCJzZXF1ZW5jZSIsImZvcm1hdCIsIndpZHRoIiwiZSIsImlzQXV0byIsImlzQXJhYmljTnVtZXJhbHMiLCJwYXJzZUludCIsImlzVXBwZXJjYXNlQWxwaGFiZXQiLCJpc0xvd2VyY2FzZUFscGhhYmV0IiwiY2hhckNvZGVBdCIsImlzVXBwZXJjYXNlUm9tYW4iLCJpc0xvd2VyY2FzZVJvbWFuIiwicm9tYW5Ub051bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxFQUFqQjs7QUFFQSxTQUFTQyxVQUFULENBQW9CQyxHQUFwQixFQUF5QjtBQUN2QixTQUFPQSxJQUFJQyxNQUFKLENBQVcsQ0FBWCxFQUFjQyxXQUFkLEtBQThCRixJQUFJRyxLQUFKLENBQVUsQ0FBVixDQUFyQztBQUNEOztBQUVELGlCQUFFQyxPQUFGLENBQVUsZUFBS0MsVUFBZixFQUEyQixVQUFDQyxJQUFELEVBQU9DLElBQVAsRUFBZ0I7QUFDekNULFdBQVNDLFdBQVdRLElBQVgsQ0FBVDtBQUNFLDBCQUFpQztBQUFBLFVBQW5CQyxLQUFtQixRQUFuQkEsS0FBbUI7QUFBQSxVQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUE7O0FBQy9CLFdBQUtILElBQUwsR0FBWUEsSUFBWjtBQUNBLFdBQUtFLEtBQUwsR0FBYUEsS0FBYjtB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NUIsQ0FBakQ7QUFDRCxPQUZNLE1BRUEsSUFBSSxLQUFLVCxRQUFMLENBQWNVLGdCQUFkLE1BQW9DLEtBQUtWLFFBQUwsQ0FBY1csZ0JBQWQsRUFBeEMsRUFBMEU7QUFDL0UsZUFBTyxxQkFBV0MsYUFBWCxDQUF5QixLQUFLWixRQUFMLENBQWNiLEtBQWQsQ0FBb0JOLFdBQXBCLEVBQXpCLElBQThELENBQTlELEtBQ0wscUJBQVcrQixhQUFYLENBQXlCVCxFQUFFSCxRQUFGLENBQVdiLEtBQVgsQ0FBaUJOLFdBQWpCLEVBQXpCLENBREY7QUFFRDtBQUNELGFBQU8sSUFBUCxDQWZRLENBZUs7QUFDZDtBQXpDSDtBQUFBO0FBQUEsOEJBMkNZO0FBQ1IsVUFBSSxLQUFLbUIsUUFBTCxDQUFjVSxnQkFBZCxNQUFvQyxLQUFLVixRQUFMLENBQWNXLGdCQUFkLEVBQXhDLEVBQTBFO0FBQ3hFLFlBQU14QixRQUFRLEtBQUthLFFBQUwsQ0FBY2IsS0FBNUI7QUFDQSxlQUFPQSxVQUFVLEdBQVYsSUFBaUJBLFVBQVUsR0FBM0IsSUFBa0NBLE1BQU1XLE1BQU4sS0FBaUIsQ0FBMUQ7QUFDRDtBQUNELGFBQU8sSUFBUDtBQUNEO0FBakRIOztBQUFBO0FBQUE7O2tCQW9EZXJCLFEiLCJmaWxlIjoiRWxlbWVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFR5cGUgZnJvbSAnLi9UeXBlJztcbmltcG9ydCBQYXJzZXJVdGlsIGZyb20gJy4vUGFyc2VyVXRpbCc7XG5cbmNvbnN0IEVsZW1lbnRzID0ge307XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyKSB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5cbl8uZm9yRWFjaChUeXBlLnZhbHVlVHlwZXMsICh0eXBlLCBuYW1lKSA9PiB7XG4gIEVsZW1lbnRzW2NhcGl0YWxpemUobmFtZSldID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKHsgdmFsdWUsIHBvc2l0aW9uIH0pIHtcbiAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgfVxuICB9O1xufSk7XG5cbl8uZm9yRWFjaChUeXBlLnBhcmVudFR5cGVzLCAodHlwZSwgbmFtZSkgPT4ge1xuICBFbGVtZW50c1tjYXBpdGFsaXplKG5hbWUpXSA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcih7XG4gICAgICBjaGlsZHJlbiA9IFtdLFxuICAgICAgcG9zaXRpb24sXG4gICAgICBibGFua2xpbmVzID0gW10sXG4gICAgICBidWxsZXQgPSBudWxsLFxuICAgICAgZGVwdGggPSBudWxsLFxuICAgICAgcm9sZSA9IG51bGwsXG4gICAgICBpbmRlbnQgPSBudWxsLFxuICAgICAgZGlyZWN0aXZlID0gbnVsbCxcbiAgICB9KSB7XG4gICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuXG4gICAgICBpZiAodHlwZSA9PT0gJ2J1bGxldF9saXN0Jykge1xuICAgICAgICB0aGlzLmJ1bGxldCA9IGJ1bGxldDtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09PSAnaW50ZXJwcmV0ZWRfdGV4dCcpIHtcbiAgICAgICAgdGhpcy5yb2xlID0gcm9sZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09PSAnc2VjdGlvbicpIHtcbiAgICAgICAgdGhpcy5kZXB0aCA9IGRlcHRoO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGUgPT09ICdkaXJlY3RpdmUnKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aXZlID0gZGlyZWN0aXZlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICBpZiAoaW5kZW50KSB7XG4gICAgICAgIHRoaXMuaW5kZW50ID0gaW5kZW50O1xuICAgICAgfVxuICAgICAgdGhpcy5ibGFua2xpbmVzID0gYmxhbmtsaW5lcyB8fCBbXTtcbiAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICB9XG4gIH07XG59KTtcblxuRWxlbWVudHMuRW51bWVyYXRvclNlcXVlbmNlID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IHR5cGUsIHZhbHVlIH0pIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgfVxuXG4gIGlzQXV0bygpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSAnYXV0byc7XG4gIH1cblxuICBpc0FyYWJpY051bWVyYWxzKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09ICdhcmFiaWNfbnVtZXJhbHMnO1xuICB9XG5cbiAgaXNVcHBlcmNhc2VBbHBoYWJldCgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSAndXBwZXJjYXNlX2FscGhhYmV0JztcbiAgfVxuXG4gIGlzTG93ZXJjYXNlQWxwaGFiZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gJ2xvd2VyY2FzZV9hbHBoYWJldCc7XG4gIH1cblxuICBpc1VwcGVyY2FzZVJvbWFuKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09ICd1cHBlcmNhc2Vfcm9tYW4nO1xuICB9XG5cbiAgaXNMb3dlcmNhc2VSb21hbigpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSAnbG93ZXJjYXNlX3JvbWFuJztcbiAgfVxufTtcblxuRWxlbWVudHMuRW51bWVyYXRvciA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBzZXF1ZW5jZSwgZm9ybWF0IH0pIHtcbiAgICB0aGlzLnNlcXVlbmNlID0gc2VxdWVuY2U7XG4gICAgdGhpcy5mb3JtYXQgPSBmb3JtYXQ7XG4gIH1cblxuICB3aWR0aCgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXQgPT09ICdwYXJlbnRoZXNlcycpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlcXVlbmNlLndpZHRoKCkgKyAyO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zZXF1ZW5jZS53aWR0aCgpICsgMTtcbiAgfVxuXG4gIGlzUGVyaW9kRm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLmZvcm1hdCA9PT0gJ3BlcmlvZCc7XG4gIH1cblxuICBpc1BhcmVudGhlc2VzRm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLmZvcm1hdCA9PT0gJ3BhcmVudGhlc2VzJztcbiAgfVxuXG4gIGlzUmlnaHRQYXJlbnRoZXNpc0Zvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtYXQgPT09ICdyaWdodF9wYXJlbnRoZXNpcyc7XG4gIH1cblxuICBpc05leHQoZSkge1xuICAgIGlmICh0aGlzLmZvcm1hdCAhPT0gZS5mb3JtYXQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGUuc2VxdWVuY2UuaXNBdXRvKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zZXF1ZW5jZS50eXBlICE9PSBlLnNlcXVlbmNlLnR5cGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2VxdWVuY2UuaXNBcmFiaWNOdW1lcmFscygpKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5zZXF1ZW5jZS52YWx1ZSwgMTApICsgMSA9PT0gcGFyc2VJbnQoZS5zZXF1ZW5jZS52YWx1ZSwgMTApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zZXF1ZW5jZS5pc1VwcGVyY2FzZUFscGhhYmV0KCkgfHwgdGhpcy5zZXF1ZW5jZS5pc0xvd2VyY2FzZUFscGhhYmV0KCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlcXVlbmNlLnZhbHVlLmNoYXJDb2RlQXQoMCkgKyAxID09PSBlLnNlcXVlbmNlLnZhbHVlLmNoYXJDb2RlQXQoMCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNlcXVlbmNlLmlzVXBwZXJjYXNlUm9tYW4oKSB8fCB0aGlzLnNlcXVlbmNlLmlzTG93ZXJjYXNlUm9tYW4oKSkge1xuICAgICAgcmV0dXJuIFBhcnNlclV0aWwucm9tYW5Ub051bWJlcih0aGlzLnNlcXVlbmNlLnZhbHVlLnRvVXBwZXJDYXNlKCkpICsgMSA9PT1cbiAgICAgICAgUGFyc2VyVXRpbC5yb21hblRvTnVtYmVyKGUuc2VxdWVuY2UudmFsdWUudG9VcHBlckNhc2UoKSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlOyAvLyBhdXRvXG4gIH1cblxuICBpc0ZpcnN0KCkge1xuICAgIGlmICh0aGlzLnNlcXVlbmNlLmlzVXBwZXJjYXNlUm9tYW4oKSB8fCB0aGlzLnNlcXVlbmNlLmlzTG93ZXJjYXNlUm9tYW4oKSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNlcXVlbmNlLnZhbHVlO1xuICAgICAgcmV0dXJuIHZhbHVlID09PSAnaScgfHwgdmFsdWUgPT09ICdJJyB8fCB2YWx1ZS5sZW5ndGggPT09IDI7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50cztcbiJdfQ==