var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var dibujando = document.getElementById("dibujito");
var ancho = dibujando.width;
var lienzo = dibujando.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var linea = 0;
  var yi, yf;
  var colorcito = "#FAA";
  var espacio = ancho / lineas;

  while(linea < lineas)
  {
    yi = espacio * linea;
    xf = espacio *(linea + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    console.log("linea" + linea);
    linea = linea + 1;
  }

  dibujarLinea(colorcito, 1, 1, 1, ancho-1);
  dibujarLinea(colorcito, 1, ancho-1, ancho-1, 299);
}
