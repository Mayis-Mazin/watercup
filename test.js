import cupImage from './cup.png';
import waterImage from './water.png';

// Initialize the canvas
const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

// Set the canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create the cup object
const cup = {
    image: new Image(),
    x: canvas.width / 2,
    y: canvas.height / 2,
    angle: 0,
    speed: 0.01,
};

cup.image.src = cupImage;

// Create the falling water object
const water = {
    image: new Image(),
    x: canvas.width / 2,
    y: canvas.height / 2,
    speed: 3,
};

water.image.src = waterImage;

// Draw the cup and falling water on the canvas
function draw() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.save();
    c.translate(cup.x, cup.y);
    c.rotate(cup.angle);
    c.drawImage(cup.image, -cup.image.width / 2, -cup.image.height / 2);
    c.restore();
    c.drawImage(water.image, water.x - water.image.width / 2, water.y - water.image.height / 2);
}

// Update the position of the cup and falling water
function update() {
    cup.angle += cup.speed;
    water.y += water.speed;
    if (water.y > canvas.height) {
        water.y = -water.image.height / 2;
    }
}

// Render the animation
function animate() {
    requestAnimationFrame(animate);
    draw();
    update();
}

// Start the animation when the page is loaded
window.addEventListener('load', animate);
