export const load = () => {
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  var recalc = function () {
    let canvasWidth = 375
    var clientWidth = document.documentElement.clientWidth;
    if (clientWidth > 1080){
      canvasWidth = 1920
    }
    if (!clientWidth) return;
    document.documentElement.style.fontSize = 100 * (clientWidth / canvasWidth) + 'px';
  };
  recalc();
  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', recalc, false);
  };
  if (window.addEventListener){
    window.addEventListener(resizeEvt, recalc, false);
  }
}


