const singIn = document.querySelector('.login-form');

singIn.addEventListener('submit', pushForm);

function pushForm(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget
    if (email.value === '' || password.value === '') {
        alert(`Будь хорошою людиною, заповни усі поля!`);
    }
    else console.log({ email: email.value, password: password.value });
    event.currentTarget.reset()
}