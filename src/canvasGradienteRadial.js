window.onload = function() {
//alert("Hola Canvas");
var canvas = document.getElementById("canvas1");
if (canvas && canvas.getContext) {
  var ctx = canvas.getContext("2d");
  if (ctx) {
  /*var gradiente = ctx.createRadialGradient(
    canvas.width/2,
    canvas.height,
    10,
    canvas.width/2,
    0,
    100);

    gradiente.addColorStop(0,"green");
    gradiente.addColorStop(0.25,"yellow");
    gradiente.addColorStop(0.50,"red");
    gradiente.addColorStop(0.75,"blue");
    gradiente.addColorStop(0,"white");

    ctx.fillStyle = gradiente;
    ctx.fillRect(0,0, canvas.width, canvas.height);
    */

    var gradiente = ctx.createRadialGradient(
      canvas.width/2,
      canvas.height/2,
      10,
      canvas.width/2,
      canvas.height/2,
      300);

      gradiente.addColorStop(0,"green");
      gradiente.addColorStop(0.25,"yellow");
      gradiente.addColorStop(0.50,"red");
      gradiente.addColorStop(0.75,"blue");
      gradiente.addColorStop(1,"white");

      ctx.fillStyle = gradiente;
      ctx.fillRect(0,0, canvas.width, canvas.height);

    }else{
    alert("Error al crear el contexto");
    }
  }
}
