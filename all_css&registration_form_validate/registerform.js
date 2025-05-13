function validateForm() {
    let isValid = true;
    
    // Clear previous errors
    clearErrors();

    // Username validation
    const username = document.getElementById('username').value;
    if (username.length < 3) {
        showError('usernameError', 'Username must be at least 3 characters');
        isValid = false;
    }

    // Email validation
    const email = document.getElementById('email').value;
    if (!email.includes('@') || !email.includes('.')) {
        showError('emailError', 'Please enter a valid email');
        isValid = false;
    }

    // Password validation
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters');
        isValid = false;
    }

    // Confirm Password validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match');
        isValid = false;
    }

    // Phone validation
    const phone = document.getElementById('phone').value;
    if (!/^\d{10}$/.test(phone)) {
        showError('phoneError', 'Please enter a valid 10-digit phone number');
        isValid = false;
    }

    return isValid;
}

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearErrors() {
    const errorElements = document.getElementsByClassName('error');
    for (let element of errorElements) {
        element.textContent = '';
    }
}