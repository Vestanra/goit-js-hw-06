const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email === '') {
        alert('enter your email');
    } if (password === '') {
         alert('enter your password');
    } else {
        const formData = {
            email,
            password,
        };
        console.log(formData);
        formEl.reset(event);
    }; 
};
