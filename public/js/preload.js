(function (doc, win) {
  var docEl = doc.documentElement;
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  var recalc = function () {
    var clientWidth = docEl.clientWidth;
    if (!clientWidth) return;

    console.log('___10', 100 * (clientWidth / 1920) + 'px')
    docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';

  };
  recalc();
  if (doc.addEventListener) {
    doc.addEventListener('DOMContentLoaded', recalc, false);
  };
  if (win.addEventListener){
    win.addEventListener(resizeEvt, recalc, false);
  }
})(document, window);
