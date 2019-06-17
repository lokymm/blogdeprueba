var cj = document.getElementById('CAtexto_lineas'); // esta línea trae la caja de texto
var bt = document.getElementById('BTTEnviar'); // esta línea trae el botón
bt.addEventListener("click", Dibujarxclickdemouse); // esta linea se ejecutará al hacer click con el mouse

var t = document.getElementById('torre');
var lienzo = t.getContext("2d");
var anchocanvas = t.width;
var xx = anchocanvas-1;

function DibujarLineas(color, xinicial, yinicial, xfinal, yfinal)

{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
  console.log(lienzo);
}

function DibujarLineas2(color, xinicial, yinicial, xfinal, yfinal)

{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
  console.log(lienzo);
}

function Dibujarxclickdemouse() // Invoca la función al hacer click en el botón enviar
{
  var tx = parseInt(cj.value); // captura el valor de la caja de texto y lo guarda como número

  var lineas = tx;
  var l = 0;
  var yi, xf;

  var z= (anchocanvas/tx);

  while (l < lineas)
  {
    yi = l * z;
    xf = z * (l + 1);
    DibujarLineas("black", 0, yi, xf, anchocanvas);
    DibujarLineas2("red", anchocanvas, yi, xf,0 );
    l = l + 1;

  }


  DibujarLineas("red", 1, 1, xx, 1);
  DibujarLineas("red", xx, 1,xx,xx );



}
