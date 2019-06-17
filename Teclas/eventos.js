document.addEventListener("keyup", dibujarTeclado);
document.addEventListener("MouseDown", presionado);
document.addEventListener("MouseMove", movimientoMouse);
document.addEventListener("MouseUp", soltado);

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGTH: 39
};
console.log(teclas);



var t = document.getElementById('area_de_dibujo');
var lienzo = t.getContext("2d");

//estas variables almacenan la última ubicación del trazo
var x = 150;
var y = 150;
// variables del Mouse
var presionar = false;
var soltar = false;
//
  DibujarLineas("red", 149, 149, 150, 150); //este es el punto incial del trazado
  DibujarLineas("black", 1, 1, 1, 299);
  DibujarLineas("black", 299, 1, 299, 299);
  DibujarLineas("black", 1, 299, 299, 299);
  DibujarLineas("black", 1, 1, 299, 1);

//acá comienza el bloque para dibujar las lineas con el teclado
function DibujarLineas(color, xinicial, yinicial, xfinal, yfinal)

{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
  console.log(lienzo);
}
//esto detecta que flecha estoy usando
function dibujarTeclado(evento)
{
  var colori = "blue"; //color del trazo
  var movi = 10; //cantidad de pixeles que me voy a mover cuando pulse una flecha
switch (evento.keyCode)
{
  case teclas.UP:
    DibujarLineas(colori, x, y, x, y - movi);
    y = y - movi;
    break;
  case teclas.DOWN:
    DibujarLineas(colori, x, y, x, y + movi);
    y = y + movi;
    break;
  case teclas.LEFT:
    DibujarLineas(colori, x, y, x - movi, y);
    x = x - movi;
    break;
  case teclas.RIGTH:
    DibujarLineas(colori, x, y, x + movi, y);
    x = x + movi;
  default:

}
}
// acá comienza el código para dibujar con el Mouse
function presionado(click)
{
  console.log(click);
  presionar = true;
  soltar = false;

  mx = click.layerX;
  my = click.layerY;
}

function movimientoMouse(click)
{
  if (presionar == true && soltar == false)
  {
    dibujarMouse(click)
  }
}

function dibujarMouse(click)
{
  var colorm = "red";
  DibujarLineas(colorm, x, y, click.clientX, click.clientY);

  var mx = click.clientX;
  var my = click.clientY;
}

function soltado()
{
  presionar = false;
  soltar = true;
}
