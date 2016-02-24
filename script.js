
(function() {
  'use strict';
  var body;
  var newSquare;

  body = document.getElementsByTagName('body')[0];
  for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= 9; j++) {
      newSquare = document.createElement('div');
      newSquare.style.width = '11.1%';
      newSquare.style.paddingBottom = '11.1%';
      newSquare.style.cssFloat = 'left';
      if (i % 2 === 1 && j % 2 === 1 || i % 2 === 0 && j % 2 === 0) {
        newSquare.style.background = 'black';
      }
      else {
        newSquare.style.background = 'red';
      }
      body.appendChild(newSquare);
    }
  }
})();
