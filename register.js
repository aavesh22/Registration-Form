const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const state = document.getElementById('state');
const city = document.getElementById('city');
const dateofbirth = document.getElementById('dateofbirth');
const email = document.getElementById('email');
const mobileno = document.getElementById('mobileno');

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
    printDetails();
});

function checkInputs() {
    // trim to remove the whitespaces
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const mobilenoValue = mobileno.value.trim();


    if (firstnameValue === '') {
        setErrorFor(firstname, 'firstname cannot be blank');
    } else {
        setSuccessFor(firstname);
    }

    if (lastnameValue === '') {
        setErrorFor(lastname, 'lastname cannot be blank');
    } else {
        setSuccessFor(lastname);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if (mobilenoValue === '') {
        setErrorFor(mobileno, 'mobileno cannot be blank');
    } else if (!isMobileNo(mobilenoValue)) {
        setErrorFor(mobileno, 'Not a valid mobileno');
    } else {
        setSuccessFor(mobileno);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isMobileNo(mobileno) {
    return /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(mobileno);
}

function printDetails() {
    console.log(firstname.value);
    console.log(lastname.value);
    console.log(state.value);
    console.log(city.value);
    console.log(dateofbirth.value);
    console.log(email.value);
    console.log(mobileno.value);
}
