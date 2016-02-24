(function() {
  'use strict';
  var flash;

  flash = function() {
    var body;
    var newSquare;
    var red;
    var blue;
    var green;

    body = document.getElementsByTagName('body')[0];
    body.innerHTML = '';
    for (var i = 1; i <= 9; i++) {
      for (var j = 1; j <= 9; j++) {
        newSquare = document.createElement('div');
        newSquare.style.width = '11.1%';
        newSquare.style.paddingBottom = '11.1%';
        newSquare.style.cssFloat = 'left';
        red = Math.round(Math.random() * 255);
        blue = Math.round(Math.random() * 255);
        green = Math.round(Math.random() * 255);
        newSquare.style.background = `rgb(${red}, ${green}, ${blue})`;
        body.appendChild(newSquare);
      }
    }
  };
  flash();
  window.setInterval(flash, 2000);
})();
