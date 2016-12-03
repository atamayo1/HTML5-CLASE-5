window.onload = function() {
//alert("Hola Canvas");
var canvas = document.getElementById("canvas1");
if (canvas && canvas.getContext) {
  var ctx = canvas.getContext("2d");
  if (ctx) {
ctx.fillStyle = "orange";
ctx.shadowColor = "rgba(0,0,0,0.5)";
ctx.shadowBlur = 20;
ctx.shadowOffsetX = 15;
ctx.shadowOffsetY = -15;
ctx.fillRect(188,40,200,100);

ctx.shadowColor = "rgba(0,0,0,0.5)";
ctx.shadowBlur = 10;
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 5;

ctx.font = "30px Arial";
ctx.fillStyle = "black";
ctx.fillText("Sombras, nada mas", 5, 200);
    }else{
    alert("Error al crear el contexto");
    }
  }
}
