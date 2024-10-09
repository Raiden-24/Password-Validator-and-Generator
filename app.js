// Password Validation Rules
function validatePassword() {
    const password = document.getElementById('password').value;
    const lengthCheck = document.getElementById('lengthCheck');
    const digitCheck = document.getElementById('digitCheck');
    const specialCharCheck = document.getElementById('specialCharCheck');
    const caseCheck = document.getElementById('caseCheck');
    const feedback = document.getElementById('feedback');

    let isValid = true;

    // Check for minimum length
    if (password.length >= 8) {
        lengthCheck.checked = true;
    } else {
        lengthCheck.checked = false;
        isValid = false;
    }

    // Check if it contains digits
    if (/\d/.test(password)) {
        digitCheck.checked = true;
    } else {
        digitCheck.checked = false;
        isValid = false;
    }

    // Check if it contains special characters
    if (/[!@#$%^&*]/.test(password)) {
        specialCharCheck.checked = true;
    } else {
        specialCharCheck.checked = false;
        isValid = false;
    }

    // Check if it contains both uppercase and lowercase letters
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) {
        caseCheck.checked = true;
    } else {
        caseCheck.checked = false;
        isValid = false;
    }

    // Provide feedback to the user
    if (isValid) {
        feedback.textContent = "Your password is strong!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Your password does not meet the criteria.";
        feedback.style.color = "red";
    }
}

// Password Generator
function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    let charset = '';
    let password = '';

    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+~';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById('generatedPassword').textContent = password;
}
// Password Validation Rules
function validatePassword() {
    const password = document.getElementById('password').value;
    const lengthCheck = document.getElementById('lengthCheck');
    const digitCheck = document.getElementById('digitCheck');
    const specialCharCheck = document.getElementById('specialCharCheck');
    const caseCheck = document.getElementById('caseCheck');
    const feedback = document.getElementById('feedback');

    let isValid = true;

    // Check for minimum length
    if (password.length >= 8) {
        lengthCheck.checked = true;
    } else {
        lengthCheck.checked = false;
        isValid = false;
    }

    // Check if it contains digits
    if (/\d/.test(password)) {
        digitCheck.checked = true;
    } else {
        digitCheck.checked = false;
        isValid = false;
    }

    // Check if it contains special characters
    if (/[!@#$%^&*]/.test(password)) {
        specialCharCheck.checked = true;
    } else {
        specialCharCheck.checked = false;
        isValid = false;
    }

    // Check if it contains both uppercase and lowercase letters
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) {
        caseCheck.checked = true;
    } else {
        caseCheck.checked = false;
        isValid = false;
    }

    // Provide feedback to the user
    if (isValid) {
        feedback.textContent = "Your password is strong!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Your password does not meet the criteria.";
        feedback.style.color = "red";
    }
}

function togglePassword() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; // Change input type to text
        eyeIcon.classList.remove('fa-eye'); // Change icon to eye-slash
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password'; // Change input type back to password
        eyeIcon.classList.remove('fa-eye-slash'); // Change icon back to eye
        eyeIcon.classList.add('fa-eye');
    }
}
