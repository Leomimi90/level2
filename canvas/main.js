let canvas = document.querySelector('#circle');
let ctx = canvas.getContext('2d');
canvas.height = 600;
canvas.width = 600;

// //Animation
// circle = {
//     xAxis: 210,
//     yAxis: 210,
//     size: 200,
//     dx: 5,
//     dy: 3
// }

// function drawCircle() {
//     ctx.beginPath();
//     ctx.arc(circle.xAxis, circle.yAxis, circle.size, 0, Math.PI, true);
//     ctx.strokeStyle = 'red'
//     ctx.lineWidth='5'
//     ctx.width=
//     ctx.strokeStyle = 'orange'
//     ctx.lineWidth='5'
//     ctx.stroke();
// }
// drawCircle();


//Arc

ctx.beginPath();
let centreX = canvas.width / 2
let centreY = canvas.height / 2

ctx.arc(centreX, centreY, 200, 0, Math.PI * 2);

ctx.moveTo(centreX + 100, centreY)

ctx.arc(centreX, centreY, 100, 0, Math.PI, false);

ctx.moveTo(centreX - 60, centreY - 80)

ctx.arc(centreX - 80, centreY - 80, 20, 0, Math.PI * 2);

ctx.moveTo(centreX + 100, centreY - 80);
ctx.arc(centreX + 80, centreY - 80, 20, 0, Math.PI * 2);
ctx.stroke();

