/// este es el bloque de números aleatorios
var cic = 10; // Cantidad de números aleatorio a generar
var vec = 0; // ciclos acumulados


while (vec < cic) // control de ciclos
{
  var z = aleatorio(10,30);
  document.write(z + ",");
  vec = vec + 1;
}
/// fin de bloque
///este es el bloque para traer las imágenes

var pla = document.getElementById('plano');
var li = pla.getContext("2d");


var fondo = {// funcion de verificador de carga imagen fondo
  url: "tile.png",
  cargaok: false,
};

fondo.imagen = new Image();/// crea un objeto imagen para el fondo
fondo.imagen.src = fondo.url; //trae la imagen desde la ruta
fondo.imagen.addEventListener("load", cargarfondo);// carga la imagen de fondo


function cargarfondo()
{
  fondo.cargaok = true,
  dibujar ();
};
//////////////////////

var vaca = { // funcion de verificador de carga imagen vaca
  url: "vaca.png",
  cargaok: false,
}

vaca.imagen = new Image();/// crea un objeto imagen vaca
vaca.imagen.src = vaca.url; //trae la imagen desde la ruta
vaca.imagen.addEventListener("load", cargarvaca);// carga la imagen

function cargarvaca()
{
  vaca.cargaok = true,
  dibujar ();
}
/////////////////////

var cerdo = { // funcion de verificador de carga imagen vaca
  url: "cerdo.png",
  cargaok: false,
}

cerdo.imagen = new Image();/// crea un objeto imagen vaca
cerdo.imagen.src = vaca.url; //trae la imagen desde la ruta
cerdo.imagen.addEventListener("load", cargarcerdo);// carga la imagen

function cargarcerdo()
{
  cerdo.cargaok = true,
  dibujar ();
}
/////////////////////


/// fin bloque

/// bloque función para ddibujar
function dibujar ()
{
  if (fondo.cargaok)
  {
    li.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaok)
  {
    li.drawImage(vaca.imagen, 10, 100);
  }
  if (cerdo.cargaok)
  {
    li.drawImage(cerdo.imagen, 100, 180);
  }
}

////

///bloque para función de numeros aleatorios
function aleatorio(min, max) // función generadora de números aleatorios
{
  var resultado;
  resultado = Math.floor (Math.random() * (max - min + 1)) + min;
  return resultado;
}
