const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');

function validateEmail() {
  const email = emailInput.value;
  if (email.length <= 3 || !email.includes('@') || !email.includes('.')) {
    emailError.textContent = 'Make sure email is more than 3 characters and has @ and .';
    successMessage.textContent = '';
  } else {
    emailError.textContent = '';
    if (!passwordError.textContent) {
      successMessage.textContent = 'All good to go!';
    }
  }
}

function validatePassword() {
  const password = passwordInput.value;
  if (password.length < 8) {
    passwordError.textContent = 'Make sure password is more than 8 characters.';
    successMessage.textContent = '';
  } else {
    passwordError.textContent = '';
    if (!emailError.textContent) {
      successMessage.textContent = 'All good to go!';
    }
  }
}

document.getElementById('signupForm').addEventListener('submit', (e) => {
  e.preventDefault();

  if (!emailError.textContent && !passwordError.textContent && emailInput.value && passwordInput.value) {
    const confirmed = window.confirm('Do you want to sign up?');
    if (confirmed) {
      alert('Successful signup!');
      // Reset fields
      emailInput.value = '';
      passwordInput.value = '';
      successMessage.textContent = '';
    }
  }
});
