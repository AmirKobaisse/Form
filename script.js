function validate() {
    let isValid = true;
    
    // Get form elements
    const email = document.getElementById('email');
    const login = document.getElementById('login');
    const pass = document.getElementById('pass');
    const pass2 = document.getElementById('pass2');
    const newsletter = document.getElementById('newsletter');
    const terms = document.getElementById('terms');
    
    // Clear previous error messages
    document.querySelectorAll('.error').forEach(el => el.remove());

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        showError(email, "Email address should be non-empty with the format xyz@xyz.xyz.");
        isValid = false;
    }

    // Validate Login
    if (login.value.trim() === '' || login.value.length > 20) {
        showError(login, "User name should be non-empty, and within 20 characters long.");
        isValid = false;
    } else {
        // Convert login to lowercase
        login.value = login.value.toLowerCase();
    }

    // Validate Password
    if (pass.value.length < 8) {
        showError(pass, "Password should be at least 8 characters. 1 uppercase. 1 lowercase.");
        isValid = false;
    }

    // Validate Re-type Password
    if (pass.value !== pass2.value) {
        showError(pass2, "Please retype password.");
        isValid = false;
    }

    // Validate Terms
    if (!terms.checked) {
        showError(terms, "Please accept the terms and conditions.");
        isValid = false;
    }

    // Alert for Newsletter
    if (newsletter.checked) {
        alert("You have opted to receive Weekly Kitten Pictures newsletters. Beware of possible spam!");
    }

    return isValid;
}

function showError(input, message) {
    const error = document.createElement('div');
    error.className = 'error';
    error.style.color = 'red';
    error.textContent = message;
    input.parentElement.appendChild(error);
}