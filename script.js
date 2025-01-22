// Get form and error message elements
const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

// Add submit event listener to the form
loginForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  // Get input values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Basic validation
  if (!email || !password) {
    errorMessage.textContent = 'Please fill in all fields.';
    return;
  }

  // Simulate login (replace with actual API call)
  if (email === "test@example.com" && password === "password") {
    errorMessage.textContent = '';
    alert('Login successful!');
    // Redirect to another page or perform other actions
  } else {
    errorMessage.textContent = 'Invalid email or password.';
  }
});

// Add click event listener to "Create new account" button
document.querySelector('.create-account').addEventListener('click', function () {
  alert('Redirecting to sign-up page...');
  // Redirect to a sign-up page or perform other actions
});

// Add click event listener to "Forgot password?" link
document.querySelector('.forgot-password').addEventListener('click', function (e) {
  e.preventDefault();
  alert('Redirecting to password recovery page...');
  // Redirect to a password recovery page or perform other actions
});