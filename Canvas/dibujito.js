var d = document.getElementById('dibujito');
var lienzo = d.getContext("2d");




function DibujarLineas(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
  console.log(lienzo);
}
DibujarLineas("red", 10, 20, 150, 170);
DibujarLineas("yellow", 10, 20, 190, 50);
DibujarLineas("black", 190, 50, 150, 170);
