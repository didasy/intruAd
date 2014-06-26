var intruAd = (function () {
  var _mouse = { x : 0, y : 0 },
      _elementOver,
      _interval = 2000,
      _adTimer,
      _adShowAfter = 10000,
      _ad = document.querySelector('.intrusive-ad');
  
  var _whatElement = function (x, y) {
    _elementOver = document.elementFromPoint(x, y);
    // console.log(_elementOver, x, y);
    setTimeout(_whatElement, _interval, _mouse.x, _mouse.y);
  };
  var _showAd = function () {
    clearTimeout(_adTimer);
    var _tag = _elementOver.tagName.toLowerCase();
    if (_elementOver.getAttribute('data-ad') !== 'no-ad' && _tag !== 'a' && _tag !== 'button' && _tag !== 'input' && _mouse.x > 0 && _mouse.y > 0) {
      // show ad if not over restricted elements
      _ad.setAttribute('style', 'display: block; position: fixed; top : '+_mouse.y+'px; left: '+_mouse.x+'px');
      var posX = _mouse.x - (_ad.offsetWidth / 2),
          posY = _mouse.y - (_ad.offsetHeight / 2);
      _ad.setAttribute('style', 'display: block; position: fixed; top : '+posY+'px; left: '+posX+'px');
    }
    _adTimer = setTimeout(_showAd, _adShowAfter);
  };
  
  return {
    selector : function (el) {
      _ad = el;
      return this;
    },
    interval : function (d) {
      _interval = d;
      return this;
    },
    adShowAfter : function (d) {
      _adShowAfter = d;
      return this;
    },
    track : function () {
      document.addEventListener('mousemove', function (e) {
        _mouse.x = e.clientX || e.pageX;
        _mouse.y = e.clientY || e.pageY;
        document.querySelector('.intrusive-ad').setAttribute('style', 'display: none;');
      });
      _adTimer = setTimeout(_showAd, _adShowAfter);
      _whatElement(_mouse.x, _mouse.y);
    }
  };
}());