const form = document.getElementById('form');
const personalFirstName = document.getElementById('first-name');
const personalLastName = document.getElementById('last-name');
const email = document.getElementById('email');
const phoneNo = document.getElementById('phone');
const billingFirstName = document.getElementById('card-holder-first-name');
const billingLastName = document.getElementById('card-holder-last-name');
const bankNo = document.getElementById('acc-number');
const cvvNo = document.getElementById('cvv-number');
const validDate = document.getElementById('valid-date');
const tncCheckbox = document.getElementById('tnc-checkbox');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(checkInputs()){
        alert('Form submitted successfully');
    }
});

//function that checks if the inputs are empty or invalid 
function checkInputs(){
    let isValid = true; 
    const personalFirstNameValue = personalFirstName.value.trim();
    const personalLastNameValue = personalLastName.value.trim();
    const emailValue = email.value.trim();
    const phoneNoValue = phoneNo.value.trim();
    const billingFirstNameValue = billingFirstName.value.trim();
    const billingLastNameValue = billingLastName.value.trim();
    const bankNoValue = bankNo.value.trim();
    const cvvNoValue = cvvNo.value.trim();
    const validDateValue = validDate.value.trim();

    //for personal details first name
    if(personalFirstNameValue === ''){
        setErrorFor(personalFirstName, 'First name is required!');
        isValid = false; 
    } else{
        setSuccessFor(personalFirstName);
    }

    //for personal details last name
    if(personalLastNameValue === ''){
        setErrorFor(personalLastName, 'Last name is required!');
        isValid = false; 
    } else{
        setSuccessFor(personalLastName);
    }

    //for personal details email address
    if(emailValue === ''){
        setErrorFor(email, 'Email is required!');
        isValid = false; 
    } else if (!isEmail(emailValue)){
        setErrorFor(email, 'Invalid Email');
        isValid = false; 
    } else{
        setSuccessFor(email);
    }

    //for personal details phone number
    if(phoneNoValue === ''){
        setErrorFor(phoneNo, 'Phone number is required!');
        isValid = false; 
    } else if (!isPhoneNo(phoneNoValue)){
        setErrorFor(phoneNo, 'Invalid Phone Number');
        isValid = false; 
    } else{
        setSuccessFor(phoneNo);
    }

    //for billing details first name
    if(billingFirstNameValue === ''){
        setErrorFor(billingFirstName, 'First name is required!');
        isValid = false; 
    } else{
        setSuccessFor(billingFirstName);
    }

    //for billing details last name
    if(billingLastNameValue === ''){
        setErrorFor(billingLastName, 'Last name is required!');
        isValid = false; 
    } else{
        setSuccessFor(billingLastName);
    }

    //for billing details bank number
    if(bankNoValue === ''){
        setErrorFor(bankNo, 'Bank number is required!');
        isValid = false; 
    } else if (!isBankNo(bankNoValue)){
        setErrorFor(bankNo, 'Invalid Bank Number');
        isValid = false; 
    } else{
        setSuccessFor(bankNo);
    }

    //for billing details cvv number
    if(cvvNoValue === ''){
        setErrorFor(cvvNo, 'CVV is required!');
        isValid = false; 
    } else if (!isCVVNo(cvvNoValue)){
        setErrorFor(cvvNo, 'Invalid CVV Number');
        isValid = false; 
    } else{
        setSuccessFor(cvvNo);
    }

    //for billing details card valid date
    if(validDateValue === ''){
        setErrorFor(validDate, 'Valid date is required!');
        isValid = false; 
    } else{
        setSuccessFor(validDate);
    }

    //for t&c agreement
    if(!(tncCheckbox.checked)){
        setErrorFor(tncCheckbox, 'T&C must be checked!');
        isValid = false; 
    } else{
        setSuccessFor(tncCheckbox);
    }

    return isValid;
}

//funtion that sets error
function setErrorFor(input, message){
    const formControl = input.parentElement; 
    const small = formControl.querySelector('small');

    //add error message inside the small tag
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

//funtion that shows success icon
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//function that check the validity of email
function isEmail(email){
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/.test(email);
}

//function that check the validity of phone number
function isPhoneNo(phoneNo){
    return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phoneNo);
}

//function that check the validity of bank no
function isBankNo(bankNo){
    return /[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}/.test(bankNo);
}

//function that check the validity of cvv no
function isCVVNo(cvvNo){
    return /^[0-9]{3}$/.test(cvvNo);
}