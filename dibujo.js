var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
console.log(lienzo);

dibujarLinea("orange", 180, 10, 4, 300);
dibujarLinea("green", 18, 100, 40, 30);
dibujarLinea("yellow", 1, 200, 260, 270);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
