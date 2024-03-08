//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

//Digital Clock
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconds = document.getElementById("seconds");

const clock = setInterval(function time() {
  const dateNow = new Date();
  let hr = dateNow.getHours();
  let min = dateNow.getMinutes();
  let sec = dateNow.getSeconds();

  hr = hr.toString().padStart(2, "0");
  min = min.toString().padStart(2, "0");
  sec = sec.toString().padStart(2, "0");

  const timeString = `${hr}:${min}:${sec}`;
  hour.textContent = hr;
  minute.textContent = min;
  seconds.textContent = sec;
}, 1000);


nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

/*Cursor*/ 

// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const trailLength = 20;
// const trailColor = "0,255,255"; //RGB values for cyan color
// const trail = [];

// function draw() {
//   ctx.fillStyle = "rgba(0,0,0,0.1)";
//   ctx.fillRect(0, 0, canvas.width, canvas.height);
//   for (let i = 0; i < trail.length; i++) {
//     const alpha = 1;
//     ctx.save();
//     ctx.beginPath();
//     ctx.arc(trail[i].x, trail[i].y, 10, 0, Math.PI * 2);
//     ctx.fillStyle = `rgba(${trailColor},${alpha})`;
//     ctx.closePath();
//     ctx.fill();
//     ctx.restore();
//   }
//   window.requestAnimationFrame(draw);
// }

// function addTrailPoint(x, y) {
//   trail.push({ x, y });
//   if (trail.length > 1) {
//     trail.shift();
//   }
// }

// let mouseX = 0,
//   mouseY = 0;
// const startDrawing = (e) => {
//   const newX = e.clientX;
//   const newY = e.clientY;
//   addTrailPoint(newX, newY);
//   mouseX = newX;
//   mouseY = newY;
// };

// canvas.addEventListener("mousemove", startDrawing);

// window.onload = () => {
//   window.requestAnimationFrame(draw);
// };

const coords = { x: 0, y: 0 };
const circles1 = document.querySelectorAll(".circle");

const colors = [
    "#00FFFF",
    "#000080",
    "#FFFFFF",
    "#C0C0C0",
    "#808080",
    "#000000",
    "#2FA0B0",
    "#800080",
    "#2F6CB0",
    "#412FB0",
    "#6A2FB0",
    "#B02FB0",
    "#2F89B0",
    "#093CF9",
    "#09CDF9",
    "#09F9D5",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#EFECF2",
    "#E9FAF8"
];

circles1.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles1.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles1.length - index) / circles1.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles1[index + 1] || circles1[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();


const cards = Array.from(document.querySelectorAll(".card"));
const cardsContainer = document.querySelector("#cards");

cardsContainer.addEventListener("mousemove", (e) => {
for (const card of cards) {
const rect = card.getBoundingClientRect();
x = e.clientX - rect.left;
y = e.clientY - rect.top;

card.style.setProperty("--mouse-x", `${x}px`);
card.style.setProperty("--mouse-y", `${y}px`);
}
});


