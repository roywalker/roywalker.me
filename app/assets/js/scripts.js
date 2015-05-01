(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    // FastShell
  });

})(jQuery, window, document);

$jquery('.navigation').headroom({
    // vertical offset in px before element is first unpinned
    offset : 500,
    // scroll tolerance in px before state changes
    tolerance : {
        down : 2,
        up : 0
    }
});