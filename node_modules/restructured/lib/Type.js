'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var values = ['text', 'unknown_line'];

var parents = [
// Document Structure
'document', 'section', 'title', 'transition',
// Body Elements
'paragraph', 'bullet_list', 'list_item', 'enumerated_list', 'definition_list', 'definition_list_item', 'term', 'classifier', 'definition', 'field_list', 'field', 'field_name', 'field_body', 'docinfo', 'author', 'authors', 'organization', 'contact', 'version', 'status', 'date', 'copyright', 'field', 'topic', 'option_list', 'option_list_item', 'option_group', 'option', 'option_string', 'option_argument', 'description', 'literal_block', 'line_block', 'line', 'block_quote', 'attribution', 'doctest_block', 'table', 'tgroup', 'colspec', 'thead', 'tbody', 'row', 'entry',
// Explicit Markup Blocks
'footnote', 'label', 'citation', 'target', 'substitution_definition', 'comment',
// Inline Markups
'emphasis', 'strong', 'literal', 'reference', 'target', 'footnote_reference', 'citation_reference', 'substitution_reference', 'reference',
// Error Handling
'system_message', 'problematic', 'unknown',
// restructured Original Elements
'directive', 'interpreted_text'];

var Type = {
  parentTypes: {},
  valueTypes: {}
};

function camelize(str) {
  return str.replace(/_([a-z])/g, function (_, w) {
    return w.toUpperCase();
  });
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var type = _step.value;

    Type.valueTypes[camelize(type)] = type;
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = parents[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var _type = _step2.value;

    Type.parentTypes[camelize(_type)] = _type;
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

exports.default = Type;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UeXBlLmpzIl0sIm5hbWVzIjpbInZhbHVlcyIsInBhcmVudHMiLCJUeXBlIiwicGFyZW50VHlwZXMiLCJ2YWx1ZVR5cGVzIiwiY2FtZWxpemUiLCJzdHIiLCJyZXBsYWNlIiwiXyIsInciLCJ0b1VwcGVyQ2FzZSIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsU0FBUyxDQUFDLE1BQUQsRUFBUyxjQUFULENBQWY7O0FBRUEsSUFBTUMsVUFBVTtBQUNkO0FBQ0EsVUFGYyxFQUdkLFNBSGMsRUFJZCxPQUpjLEVBS2QsWUFMYztBQU1kO0FBQ0EsV0FQYyxFQVFkLGFBUmMsRUFRQyxXQVJELEVBU2QsaUJBVGMsRUFVZCxpQkFWYyxFQVVLLHNCQVZMLEVBVTZCLE1BVjdCLEVBVXFDLFlBVnJDLEVBVW1ELFlBVm5ELEVBV2QsWUFYYyxFQVdBLE9BWEEsRUFXUyxZQVhULEVBV3VCLFlBWHZCLEVBWWQsU0FaYyxFQVlILFFBWkcsRUFZTyxTQVpQLEVBWWtCLGNBWmxCLEVBWWtDLFNBWmxDLEVBYWQsU0FiYyxFQWFILFFBYkcsRUFhTyxNQWJQLEVBYWUsV0FiZixFQWE0QixPQWI1QixFQWFxQyxPQWJyQyxFQWNkLGFBZGMsRUFjQyxrQkFkRCxFQWNxQixjQWRyQixFQWNxQyxRQWRyQyxFQWVkLGVBZmMsRUFlRyxpQkFmSCxFQWVzQixhQWZ0QixFQWdCZCxlQWhCYyxFQWlCZCxZQWpCYyxFQWlCQSxNQWpCQSxFQWtCZCxhQWxCYyxFQWtCQyxhQWxCRCxFQW1CZCxlQW5CYyxFQW9CZCxPQXBCYyxFQW9CTCxRQXBCSyxFQW9CSyxTQXBCTCxFQW9CZ0IsT0FwQmhCLEVBb0J5QixPQXBCekIsRUFvQmtDLEtBcEJsQyxFQW9CeUMsT0FwQnpDO0FBcUJkO0FBQ0EsVUF0QmMsRUFzQkYsT0F0QkUsRUFzQk8sVUF0QlAsRUFzQm1CLFFBdEJuQixFQXNCNkIseUJBdEI3QixFQXNCd0QsU0F0QnhEO0FBdUJkO0FBQ0EsVUF4QmMsRUF3QkYsUUF4QkUsRUF3QlEsU0F4QlIsRUF3Qm1CLFdBeEJuQixFQXdCZ0MsUUF4QmhDLEVBeUJkLG9CQXpCYyxFQXlCUSxvQkF6QlIsRUEwQmQsd0JBMUJjLEVBMEJZLFdBMUJaO0FBMkJkO0FBQ0EsZ0JBNUJjLEVBNEJJLGFBNUJKLEVBNkJkLFNBN0JjO0FBOEJkO0FBQ0EsV0EvQmMsRUFnQ2Qsa0JBaENjLENBQWhCOztBQW1DQSxJQUFNQyxPQUFPO0FBQ1hDLGVBQWEsRUFERjtBQUVYQyxjQUFZO0FBRkQsQ0FBYjs7QUFLQSxTQUFTQyxRQUFULENBQWtCQyxHQUFsQixFQUF1QjtBQUNyQixTQUFPQSxJQUFJQyxPQUFKLENBQVksV0FBWixFQUF5QixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFVQSxFQUFFQyxXQUFGLEVBQVY7QUFBQSxHQUF6QixDQUFQO0FBQ0Q7Ozs7Ozs7QUFFRCx1QkFBbUJWLE1BQW5CLDhIQUEyQjtBQUFBLFFBQWhCVyxJQUFnQjs7QUFDekJULFNBQUtFLFVBQUwsQ0FBZ0JDLFNBQVNNLElBQVQsQ0FBaEIsSUFBa0NBLElBQWxDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELHdCQUFtQlYsT0FBbkIsbUlBQTRCO0FBQUEsUUFBakJVLEtBQWlCOztBQUMxQlQsU0FBS0MsV0FBTCxDQUFpQkUsU0FBU00sS0FBVCxDQUFqQixJQUFtQ0EsS0FBbkM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7OztrQkFFY1QsSSIsImZpbGUiOiJUeXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdmFsdWVzID0gWyd0ZXh0JywgJ3Vua25vd25fbGluZSddO1xuXG5jb25zdCBwYXJlbnRzID0gW1xuICAvLyBEb2N1bWVudCBTdHJ1Y3R1cmVcbiAgJ2RvY3VtZW50JyxcbiAgJ3NlY3Rpb24nLFxuICAndGl0bGUnLFxuICAndHJhbnNpdGlvbicsXG4gIC8vIEJvZHkgRWxlbWVudHNcbiAgJ3BhcmFncmFwaCcsXG4gICdidWxsZXRfbGlzdCcsICdsaXN0X2l0ZW0nLFxuICAnZW51bWVyYXRlZF9saXN0JyxcbiAgJ2RlZmluaXRpb25fbGlzdCcsICdkZWZpbml0aW9uX2xpc3RfaXRlbScsICd0ZXJtJywgJ2NsYXNzaWZpZXInLCAnZGVmaW5pdGlvbicsXG4gICdmaWVsZF9saXN0JywgJ2ZpZWxkJywgJ2ZpZWxkX25hbWUnLCAnZmllbGRfYm9keScsXG4gICdkb2NpbmZvJywgJ2F1dGhvcicsICdhdXRob3JzJywgJ29yZ2FuaXphdGlvbicsICdjb250YWN0JyxcbiAgJ3ZlcnNpb24nLCAnc3RhdHVzJywgJ2RhdGUnLCAnY29weXJpZ2h0JywgJ2ZpZWxkJywgJ3RvcGljJyxcbiAgJ29wdGlvbl9saXN0JywgJ29wdGlvbl9saXN0X2l0ZW0nLCAnb3B0aW9uX2dyb3VwJywgJ29wdGlvbicsXG4gICdvcHRpb25fc3RyaW5nJywgJ29wdGlvbl9hcmd1bWVudCcsICdkZXNjcmlwdGlvbicsXG4gICdsaXRlcmFsX2Jsb2NrJyxcbiAgJ2xpbmVfYmxvY2snLCAnbGluZScsXG4gICdibG9ja19xdW90ZScsICdhdHRyaWJ1dGlvbicsXG4gICdkb2N0ZXN0X2Jsb2NrJyxcbiAgJ3RhYmxlJywgJ3Rncm91cCcsICdjb2xzcGVjJywgJ3RoZWFkJywgJ3Rib2R5JywgJ3JvdycsICdlbnRyeScsXG4gIC8vIEV4cGxpY2l0IE1hcmt1cCBCbG9ja3NcbiAgJ2Zvb3Rub3RlJywgJ2xhYmVsJywgJ2NpdGF0aW9uJywgJ3RhcmdldCcsICdzdWJzdGl0dXRpb25fZGVmaW5pdGlvbicsICdjb21tZW50JyxcbiAgLy8gSW5saW5lIE1hcmt1cHNcbiAgJ2VtcGhhc2lzJywgJ3N0cm9uZycsICdsaXRlcmFsJywgJ3JlZmVyZW5jZScsICd0YXJnZXQnLFxuICAnZm9vdG5vdGVfcmVmZXJlbmNlJywgJ2NpdGF0aW9uX3JlZmVyZW5jZScsXG4gICdzdWJzdGl0dXRpb25fcmVmZXJlbmNlJywgJ3JlZmVyZW5jZScsXG4gIC8vIEVycm9yIEhhbmRsaW5nXG4gICdzeXN0ZW1fbWVzc2FnZScsICdwcm9ibGVtYXRpYycsXG4gICd1bmtub3duJyxcbiAgLy8gcmVzdHJ1Y3R1cmVkIE9yaWdpbmFsIEVsZW1lbnRzXG4gICdkaXJlY3RpdmUnLFxuICAnaW50ZXJwcmV0ZWRfdGV4dCcsXG5dO1xuXG5jb25zdCBUeXBlID0ge1xuICBwYXJlbnRUeXBlczoge30sXG4gIHZhbHVlVHlwZXM6IHt9LFxufTtcblxuZnVuY3Rpb24gY2FtZWxpemUoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXyhbYS16XSkvZywgKF8sIHcpID0+IHcudG9VcHBlckNhc2UoKSk7XG59XG5cbmZvciAoY29uc3QgdHlwZSBvZiB2YWx1ZXMpIHtcbiAgVHlwZS52YWx1ZVR5cGVzW2NhbWVsaXplKHR5cGUpXSA9IHR5cGU7XG59XG5cbmZvciAoY29uc3QgdHlwZSBvZiBwYXJlbnRzKSB7XG4gIFR5cGUucGFyZW50VHlwZXNbY2FtZWxpemUodHlwZSldID0gdHlwZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHlwZTtcbiJdfQ==