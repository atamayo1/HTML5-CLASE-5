window.onload = function() {
//alert("Hola Canvas");
var canvas = document.getElementById("canvas1");
if (canvas && canvas.getContext) {
  var ctx = canvas.getContext("2d");
  if (ctx) {
    var bola = new Image();
    //
    function muestraPatron(repite){
      var patron = ctx.createPattern(bola, repite);
      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle = patron;
      ctx.fillRect(0,0,canvas.width,canvas.height);
    }
    //
    bola.src = "image/imagenPatron.png";
    bola.onload = function (e){
      muestraPatron("repeat");
    }
    }else{
    alert("Error al crear el contexto");
    }
  }
}
