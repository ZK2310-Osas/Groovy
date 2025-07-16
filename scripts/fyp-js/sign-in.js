
const signupForm = document.getElementById('signup-form');
const signupUsername = document.getElementById('signup_username');
const signupEmail = document.getElementById('signup_email');
const signupPassword = document.getElementById('signup_password');

// handle signup form submission
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateSignupForm()) {
        // Save user data to localStorage
        const userInfo = {
            username: signupUsername.value.trim(),
            email: signupEmail.value.trim(),
            password: signupPassword.value.trim(),
        };
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        alert('Signup successful!');
        window.location.href = 'sign-in-page.html'; // direct to login page
    }
});

// signup form validation
function validateSignupForm() {
    let isValid = true;

    if (signupUsername.value.trim() === '') {
        setError(signupUsername, 'Username cannot be blank');
        isValid = false;
    } else {
        setSuccess(signupUsername);
    }

    if (signupEmail.value.trim() === '') {
        setError(signupEmail, 'Email cannot be blank');
        isValid = false;
    } else if (!isValidEmail(signupEmail.value.trim())) {
        setError(signupEmail, 'Invalid email format');
        isValid = false;
    } else {
        setSuccess(signupEmail);
    }

    if (signupPassword.value.trim() === '') {
        setError(signupPassword, 'Password cannot be blank');
        isValid = false;
    } else {
        setSuccess(signupPassword);
    }

    return isValid;
}



const loginForm = document.getElementById('login-form');
const loginEmail = document.getElementById('signin_email');
const loginPassword = document.getElementById('signin_password');

// handle login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const loadingContainer = document.getElementById('loading-animation');
    loadingContainer.style.display = 'flex'; // show loading animation

    setTimeout(() => {
        if (validateLoginForm()) {
            const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
            if (
                storedUserInfo &&
                storedUserInfo.email === loginEmail.value.trim() &&
                storedUserInfo.password === loginPassword.value.trim()
            ) {
                // Save logged-in user's username for later use
                localStorage.setItem('currentUsername', storedUserInfo.username);
                loadingContainer.style.display = 'none'; 
                window.location.href = 'main-fyp.html'; // direct to main page
            } else {
                loadingContainer.style.display = 'none';
                setError(loginEmail, 'Email or password is incorrect');
                setError(loginPassword, 'Email or password is incorrect');
            }
        } else {
            loadingContainer.style.display = 'none';
        }
    }, 2500); // loading time
});

//login form validation
function validateLoginForm() {
    let isValid = true;

    if (loginEmail.value.trim() === '') {
        setError(loginEmail, 'Email cannot be blank');
        isValid = false;
    } else if (!isValidEmail(loginEmail.value.trim())) {
        setError(loginEmail, 'Invalid email format');
        isValid = false;
    } else {
        setSuccess(loginEmail);
    }

    if (loginPassword.value.trim() === '') {
        setError(loginPassword, 'Password cannot be blank');
        isValid = false;
    } else {
        setSuccess(loginPassword);
    }

    return isValid;
}


// set if error 
function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'login-detail-box error';
    small.innerText = message;
}

// set if success
function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'login-detail-box success';
}

// email validation
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


// toggle for tassword visibility
function togglePasswordVisibility(passwordFieldId, toggleIconId) {
    const passwordField = document.getElementById(passwordFieldId);
    const icon = document.getElementById(toggleIconId);

    if (passwordField.type === "password") {
        passwordField.type = "text";  // Show password
        icon.src = 'resources/sign-in-page/view.png';  // Change icon to 'Hide'
    } else {
        passwordField.type = "password";  // Hide password
        icon.src = 'resources/sign-in-page/hide.png';  // Change icon to 'View'
    }
}


// switch to login form
function switchToLogin() {
    document.getElementById('login-form').classList.add('active');
    document.getElementById('signup-form').classList.remove('active');
    document.querySelector('.whole-container').classList.remove('sign-up-active');
    
    updateLeftContainerContent(
        'Come <br>and <br>chill with',
        'Groovy',
        'Your Personal Music Streaming Website',
        'resources/sign-in-page/music-unscreen.gif'
    );
}

// switch to signup form
function switchToSignup() {
    document.getElementById('signup-form').classList.add('active');
    document.getElementById('login-form').classList.remove('active');
    document.querySelector('.whole-container').classList.add('sign-up-active');
    
    updateLeftContainerContent(
        'Get <br> Ready to <br>Join',
        'Groovy',
        'Create an account and join Groovy Fam!',
        'resources/sign-in-page/jumping-unscreen.gif'
    );
}

// content of left container when switch to sign in
function updateLeftContainerContent(headerText, title, subText, imageUrl) {

    const leftyPartItem = document.querySelector('.lefty-part-item');
    const header = leftyPartItem.querySelector('.lefty-part-item-word1');
    const titleElement = leftyPartItem.querySelector('h2');
    const subTextElement = leftyPartItem.querySelector('.lefty-part-item-word2');
    const gif = document.querySelector('.lefty-part-gif');

    header.innerHTML = headerText;
    titleElement.textContent = title;
    subTextElement.textContent = subText;
    if (imageUrl) {
        gif.src = imageUrl;
    }
}












