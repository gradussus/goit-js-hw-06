const symbols = document.querySelector('#validation-input');

symbols.addEventListener('blur', validation)

function validation (event) {
    if (event.currentTarget.value.length === Number (symbols.dataset.length)) {
        symbols.classList.add('valid')
        symbols.classList.remove('invalid')
    }
    else {
        symbols.classList.add('invalid')
        symbols.classList.remove('valid')
    }
}