// Your JS goes here
var body = document.getElementsByTagName('body')[0];
var colorPicker = function() { return Math.round(Math.random() * 255); }
var oddColors = [colorPicker(), colorPicker(), colorPicker()];
var evenColors = [colorPicker(), colorPicker(), colorPicker()];
var evenOverlap = false, oddOverlap = false;
for (var i = 1; i <= 9; i++) {
  for (var j = 1; j <= 9; j++) {
    var newSquare = document.createElement('div');
    newSquare.style.width = '11.1%';
    newSquare.style.paddingBottom = '11.1%';
    newSquare.style.cssFloat = 'left';
    if ((i % 2 == 1 && j % 2 == 1) || (i % 2 == 0 && j % 2 == 0)) {
      newSquare.style.background = `rgb(${oddColors[0]}, ${oddColors[1]}, ${oddColors[2]})`;
    } else {
      newSquare.style.background = `rgb(${evenColors[0]}, ${evenColors[1]}, ${evenColors[2]})`;
    }
    body.appendChild(newSquare);
  }
  oddColors = oddColors.map(function(color) {
    color = oddOverlap ? color + Math.floor(255/9) : color - Math.floor(255/9);
     if (color < 0) {
       color = 0;
       oddOverlap = true;
     }
     return color;
  });
  evenColors = evenColors.map(function(color) {
     color = evenOverlap ? color - Math.floor(255/9) : color + Math.floor(255/9);
     if (color > 255) {
       color = 255;
       evenOverlap = true;
     }
     return color;
  });
}
