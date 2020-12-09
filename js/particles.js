const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerWidth *.2;
if  (canvas.height > 200) {canvas.height = 200};
let particleArray = [];
let textScale = window.innerWidth/400 +1;
if  (textScale > 5.5) {textScale = 5.5};
let adjustX = (window.innerWidth/(2*textScale))-71;
let adjustY = 10;
let particleSnapBack = 15;
let red = '255';
let green = '215';
let blue = '0';
let  pixelColor = `rgb(${red}, ${green}, ${blue})`;

// Mouse Handler
const mouse = {
    x: null,
    x: null,
    radius: 150
}

window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
});

ctx.fillStyle = 'white';
ctx.font = '15px Verdana';
ctx.fillText('The Slanted Room', 0, 15);
ctx.strokeStyle = 'grey';
ctx.strokeRect(0, 0, 140, 20);
const textCoordinates = ctx.getImageData(0,0,140,20);

class Particle {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.size = 2;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 10) + 2;
        this.distanceToMouse = 255;
    }
    draw(){  
        if (this.distanceToMouse >= 0){
            red = this.distanceToMouse;
        } 
        pixelColor = `rgb(${red}, ${green}, ${blue})`;
        ctx.fillStyle = pixelColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
    update(){
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        this.distanceToMouse = distance;
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < mouse.radius){
            this.x -= directionX;
            this.y -= directionY;
        } else {
            if(this.x !== this.baseX){
                let dx = this.x - this.baseX;
                this.x -= dx/particleSnapBack;
            }
            if(this.y !== this.baseY){
                let dy = this.y - this.baseY;
                this.y -= dy/particleSnapBack;
            }
        }
    }
}

window.addEventListener("resize", windowReSize);
function windowReSize(){
    particleArray = [];
    canvas.width = window.innerWidth;
    canvas.height = window.innerWidth *.2;
    if  (canvas.height > 200) {canvas.height = 200};
    adjustX = (window.innerWidth/(2*textScale))-70;
    textScale = window.innerWidth/400 +1;
    if  (textScale > 5.5) {textScale = 5.5};
    init();
};

function init() {
    for (let y = 0, y2 = textCoordinates.height; y < y2; y++){
        for (let x = 0, x2 = textCoordinates.width; x < x2; x++){
            // cycle thru and filter out every 4th element in array 
            if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128){
                let positionX = x + adjustX;
                let positionY = y + adjustY;
                particleArray.push(new Particle(positionX * textScale ,positionY * textScale));
            }
           

        }
    }
}
init();

function animate(){
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for  (let i = 0; i < particleArray.length; i++){
        particleArray[i].update();
        particleArray[i].draw();
    }
    // connect();
    requestAnimationFrame(animate);
}

animate();


// UNUSED
// function connect(){
//     let opacityValue = 1;

//     for(let a = 0; a < particleArray.length; a++){
//         for(let b =  a; b < particleArray.length; b++){
//             let dx = particleArray[a].x - particleArray[b].x;
//             let dy = particleArray[a].y - particleArray[b].y;
//             let distance = Math.sqrt(dx * dx + dy * dy);

//             if (distance < 10){
//                 let opacityValue = 1 - (distance/10);
//                 ctx.strokeStyle = 'rgba (254,215,10,' + opacityValue + ')';
//                 ctx.lineWidth = 1;
//                 ctx.beginPath();
//                 ctx.moveTo(particleArray[a].x, particleArray[a].y);
//                 ctx.lineTo(particleArray[b].x, particleArray[b].y);
//                 ctx.stroke();
//             }
//         }
//     }
// }

