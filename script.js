let container = document.getElementById('screen');
let red = document.getElementById('red');
let blue = document.getElementById('blue');
let green = document.getElementById('green');
let yellow = document.getElementById('yellow');
function redColor (){
    container.style.backgroundColor = 'red';
}
function blueColor (){
    container.style.backgroundColor = 'blue';
}
function greenColor (){
    container.style.backgroundColor = 'green';
}
function yellowColor (){
    container.style.backgroundColor = 'yellow';
}

//Box 2
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const screen = document.getElementById('screen');
    const colors = document.querySelectorAll('.color');

    colors.forEach(color => {
        color.addEventListener('click', () => {
            const colorId = color.id;
            screen.style.backgroundColor = colorId;
        });
    });
});
