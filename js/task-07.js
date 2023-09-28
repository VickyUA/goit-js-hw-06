const inputControl = document.querySelector('#font-size-control');

const outputText = document.querySelector('#text');


inputControl.addEventListener('input', (event) => {
outputText.style.fontSize = `${event.target.value}px`;    
})

