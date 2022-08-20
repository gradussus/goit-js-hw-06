const  outputLogin = document.querySelector('#name-output');

const inputLogin = document.querySelector('#name-input');

inputLogin.addEventListener('input', inputChange);

function inputChange(event) {
    outputLogin.textContent = event.currentTarget.value
    if (event.currentTarget.value.trim() === '') {
        outputLogin.textContent = "Anonymous"
    }
}
