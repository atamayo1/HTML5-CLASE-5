window.onload = function() {
//alert("Hola Canvas");
var canvas = document.getElementById("canvas1");
if (canvas && canvas.getContext) {
  var ctx = canvas.getContext("2d");
  if (ctx) {
  var gradiente = ctx.createLinearGradient(0,0, canvas.width/2,0);
  gradiente.addColorStop(0,"green");
  gradiente.addColorStop(0.15,"yellow");
  gradiente.addColorStop(0.35,"white");
  gradiente.addColorStop(0.65,"white");
  gradiente.addColorStop(0.80,"yellow");
  gradiente.addColorStop(1,"rgb(255,0,0)");

  ctx.fillStyle = gradiente;
  ctx.fillRect(0,0,canvas.width/2,canvas.height/2);

  gradiente = ctx.createLinearGradient(0,0, 0,canvas.height/2);
  gradiente.addColorStop(0,"green");
  gradiente.addColorStop(0.15,"yellow");
  gradiente.addColorStop(0.35,"white");
  gradiente.addColorStop(0.65,"white");
  gradiente.addColorStop(0.80,"yellow");
  gradiente.addColorStop(1,"rgb(255,0,0)");

  ctx.fillStyle = gradiente;
  ctx.fillRect(canvas.width/2,0,canvas.width,canvas.height/2);

  gradiente = ctx.createLinearGradient(0,canvas.height/2, canvas.width/2,canvas.height);
  gradiente.addColorStop(0,"green");
  gradiente.addColorStop(0.15,"yellow");
  gradiente.addColorStop(0.35,"white");
  gradiente.addColorStop(0.65,"white");
  gradiente.addColorStop(0.80,"yellow");
  gradiente.addColorStop(1,"rgb(255,0,0)");

  ctx.fillStyle = gradiente;
  ctx.fillRect(0,canvas.height/2,canvas.width/2,canvas.height);

  gradiente = ctx.createLinearGradient(canvas.width/2,canvas.height,canvas.width,canvas.height/2);
  gradiente.addColorStop(0,"green");
  gradiente.addColorStop(0.15,"yellow");
  gradiente.addColorStop(0.35,"white");
  gradiente.addColorStop(0.65,"white");
  gradiente.addColorStop(0.80,"yellow");
  gradiente.addColorStop(1,"rgb(255,0,0)");

  ctx.fillStyle = gradiente;
  ctx.fillRect(canvas.width/2,canvas.height/2,canvas.width,canvas.height);
    }else{
    alert("Error al crear el contexto");
    }
  }
}
