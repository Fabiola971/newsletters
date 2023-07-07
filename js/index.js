// form
const form = document.querySelector('form');
const inputEmail = document.getElementById('email');
console.log( inputEmail);

// message
const errorMsg = document.getElementById('errorMsg');
const errorIcon = document.querySelector('.description form img');
console.log("errorIcon: ", errorIcon);
console.log("FORM: ",form);

// error
const setError = () =>{
    inputEmail.style.outlineColor = 'red';
    errorMsg.style.visibility = 'visible';
    errorIcon.style.visibility = 'visible';
}

const setValid = () =>{
    inputEmail.style.outlineColor.remove = 'red';
    inputEmail.style.outlineColor = 'green';
    errorMsg.style.visibility = 'hidden';
    errorIcon.style.visibility = 'hidden';
}

const validationEmail = (email) =>{
    const regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return true;
}

function checkEmail() {
    const emailValue = inputEmail.value.trim();
    if (emailValue === '' || !validationEmail(emailValue)) {
        setError();
    } else if (validationEmail(emailValue)) {
        setValid();
    }
}

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    checkEmail();
})











    