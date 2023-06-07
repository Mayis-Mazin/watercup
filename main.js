var canvas = document.getElementById('cupCanvas');
var ctx = canvas.getContext('2d');
var cupImage = new Image();
cupImage.src = './img/cup.jpg';

var rotationAngle = 0;
var waterHeight = 0;

function drawCup() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();

    // Translate the canvas to the center
    ctx.translate(canvas.width / 2, canvas.height / 2);

    // Rotate the canvas based on the rotationAngle
    ctx.rotate(rotationAngle * Math.PI / 180);

    // Draw the cup image
    ctx.drawImage(cupImage, -cupImage.width / 2, -cupImage.height / 2);

    ctx.restore();
}

function drawWater() {
    ctx.fillStyle = 'blue';

    // Calculate the water level based on the waterHeight
    var waterLevel = canvas.height / 2 + cupImage.height / 2 - waterHeight;

    // Draw the water rectangle
    ctx.fillRect(0, waterLevel, canvas.width, waterHeight);
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawCup();
    drawWater();
}

window.addEventListener('scroll', function () {
    // Calculate the rotation angle based on the scroll position
    rotationAngle = window.scrollY / window.innerHeight * 360;

    // Calculate the water height based on the scroll position
    waterHeight = window.scrollY / window.innerHeight * (canvas.height / 2 - cupImage.height / 2);

    update();
});

// Load cup image and start the animation
cupImage.onload = function () {
    canvas.width = cupImage.width;
    canvas.height = cupImage.height;
    update();
};
