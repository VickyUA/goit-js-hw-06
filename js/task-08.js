const formLogin = document.querySelector('.login-form');

formLogin.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    
    event.preventDefault();

    const form = event.currentTarget;
    const userEmail = form.elements.email.value.trim();
    const userPassword = form.elements.password.value.trim();

    if (userEmail === "" || userPassword === "") {
        return alert("Усі поля повинні бути заповнені!");
    }

    const { email, password } = form.elements;

    const data = {
        email: email.value,
        password: password.value
    }

    console.log(data);

    event.currentTarget.reset();
}
