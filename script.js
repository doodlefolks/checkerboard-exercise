// Your JS goes here
var body = document.getElementsByTagName('body')[0];
for (var i = 1; i <= 9; i++) {
  for (var j = 1; j <= 9; j++) {
    var newSquare = document.createElement('div');
    newSquare.style.width = '11.1%';
    newSquare.style.paddingBottom = '11.1%';
    newSquare.style.cssFloat = 'left';
    var red = Math.round(Math.random() * 255);
    var blue = Math.round(Math.random() * 255);
    var green = Math.round(Math.random() * 255);
    newSquare.style.background = `rgb(${red}, ${green}, ${blue})`;
    body.appendChild(newSquare);
  }
}
