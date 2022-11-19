let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let passwordError = document.getElementById('password-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

function validateName() {
    let name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }

    else if (name.length <= 4) {
        nameError.innerHTML = "*username must be atleast 5 characters"
        return false;
    }

    else {
        nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
        return true;
    }

}

function validatePhone() {
    let phone = document.getElementById('contact-phone').value;

    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }

    else if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false;
    }

    else if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }

    else {
        phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
        return true;
    }
}

function validatePassword() {
    let password = document.getElementById('contact-password').value;

    if (password.length == 0) {
        passwordError.innerHTML = 'Password is required';
        return false;
    }

    else if (password.length !== 8) {
        passwordError.innerHTML = 'Password should be in 8 characters';
        return false;
    }

    else {
        passwordError.innerHTML = '<i class="fas fa-check-circle"></i>';
        return true;
    }

}

function validateEmail() {
    let email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }

    else if (!email.match(/^[A-Za-z\._\[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email invalid';
        return false;
    }

    else {
        emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
        return true;
    }
}

function validateMessage() {
    let message = document.getElementById('contact-message').value;
    let required = 30;
    let left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + 'more characters required';
        return false;
    }

    else {
        messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
        return true;
    }
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validatePassword || !validateMessage()) {
        phoneError.innerHTML = 'phone no is required';
        messageError.innerHTML = 'message is required';
        emailError.innerHTML = 'email is required';
        passwordError.innerHTML = 'password is required';
        submitError.style.display = 'block';
        submitError.style.marginTop = '60px';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function () { submitError.style.display = 'none'; }, 3000);
        return false;
    }
}