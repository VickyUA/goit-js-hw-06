const currentColor = document.querySelector('.color');

const colorBtn = document.querySelector('.change-color');

const body = document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


colorBtn.addEventListener('click', handleClick);

function handleClick(event) {
  body.style.backgroundColor = getRandomHexColor(); 
  currentColor.textContent = getRandomHexColor(); 
}