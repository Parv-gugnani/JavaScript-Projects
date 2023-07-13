// document.addEventListener("DOMContentLoaded", function () {
//   var whiteboard = document.getElementById("whiteboard");
//   var context = whiteboard.getContext("2d");
//   var isDrawing = false;
//   var lastX = 0;
//   var lastY = 0;

//   whiteboard.addEventListener("mousedown", startDrawing);
//   whiteboard.addEventListener("mousemove", draw);
//   whiteboard.addEventListener("mouseup", stopDrawing);
//   whiteboard.addEventListener("mouseout", stopDrawing);

//   function startDrawing(e) {
//     isDrawing = true;
//     [lastX, lastY] = [e.offsetX, e.offsetY];
//   }

//   function draw(e) {
//     if (!isDrawing) return;
//     context.beginPath();
//     context.moveTo(lastX, lastY);
//     context.lineTo(e.offsetX, e.offsetY);
//     context.stroke();
//     [lastX, lastY] = [e.offsetX, e.offsetY];
//   }

//   function stopDrawing() {
//     isDrawing = false;
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  var canvas = new fabric.Canvas("whiteboard", {
    isDrawingMode: true,
  });
});
