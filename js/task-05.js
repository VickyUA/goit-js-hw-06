const inputName = document.querySelector('#name-input');

const greet = document.querySelector('#name-output');

inputName.addEventListener('input', (event) => {
    if (event.currentTarget.value.trim().length > 0) {
        greet.textContent = event.currentTarget.value;
    }
    else {
        greet.textContent = 'Anonymous';
    }
});