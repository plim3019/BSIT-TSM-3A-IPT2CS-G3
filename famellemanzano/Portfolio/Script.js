document.addEventListener('DOMContentLoaded', function () {
    // Include Typed directly from the library
    let type = new window.Typed("#changing-text", {
        strings: ["a Gamer", "Motivated", "Inevitable", "the Administrator"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
    });
});

const myBox = document.getElementById("mybox");

myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "I warned you.😤";

    // Open YouTube link
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
});

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it 😲";
});

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Don't click Me 😀";
});

const myBox1 = document.getElementById("myBox1");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    myBox1.textContent = "😲";
    myBox1.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", event => {
    myBox1.textContent = "😀";
    myBox1.style.backgroundColor = "lightblue";
});

document.addEventListener("keydown", event => {

    if(event.key.startsWith("Arrow")){

        event.preventDefault();

        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }

        myBox1.style.top = `${y}px`;
        myBox1.style.left = `${x}px`;
    }
});