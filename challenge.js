const canvas = document.getElementById('sketchPad');
const ctx = canvas.getContext('2d');
let drawing = false, prevX = 0, prevY = 0, color = "black";

ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.lineCap = "round";

const setColor = (color) => {
    ctx.strokeStyle = color;
    document.getElementById('currentColor').textContent = color=== "white" ? "Eraser" : color.charAt(0).toUpperCase() + color.slice(1);
};

canvas.addEventListener('mousedown', e => {
    drawing = true;
    const r = canvas.getBoundingClientRect();
    prevX = e.clientX - r.left;
    prevY = e.clientY - r.top;
});

canvas.addEventListener('mouseup', () => drawing = false);
canvas.addEventListener('mouseout', () => drawing = false);
canvas.addEventListener('mousemove', e => {
    if(!drawing) return;
    const r = canvas.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(x,y);
    ctx.stroke();
    prevX = x; prevY = y;
});

document.getElementById('defaultBtn').addEventListener('click', () => {ctx.strokeStyle = "black"; setColor("black");});
document.getElementById('redBtn').addEventListener('click', () => {ctx.strokeStyle = "red"; setColor("red");});
document.getElementById('blueBtn').addEventListener('click', () => {ctx.strokeStyle = "blue"; setColor("blue");});
document.getElementById('greenBtn').addEventListener('click', () => {ctx.strokeStyle = "green"; setColor("green");});
document.getElementById('eraserBtn').addEventListener('click', () => {ctx.strokeStyle = "white"; setColor("white");});
document.getElementById('clearBtn').addEventListener('click', () => { ctx.fillStyle = "rgb(255,255,255)"; ctx.fillRect(0,0, canvas.width, canvas.height); })
