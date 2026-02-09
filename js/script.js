// Get the form element
const loginForm = document.querySelector('form');

// Add event listener for form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const email = document.querySelector('input[name="username"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim();
    const rememberMe = document.querySelector('input[name="rememberMe"]').checked;

    // Basic validation
    if (!email) {
        alert('Please enter your email.');
        return;
    }
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    if (!password) {
        alert('Please enter your password.');
        return;
    }

    // Simulate login process (replace with actual API call)
    simulateLogin(email, password, rememberMe);
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Simulate login (replace with real authentication logic)
function simulateLogin(email, password, rememberMe) {
    // For demonstration, assume login is successful if email and password are not empty
    // In a real app, send a POST request to your server
    console.log('Logging in with:', { email, password, rememberMe });

    // Example fetch request (uncomment and modify for real use)
    /*
    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, rememberMe }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect or handle success
            window.location.href = 'dashboard.html'; // Example redirect
        } else {
            alert('Login failed: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
    */

    // For now, just show a success message
    alert('Login successful! (This is a simulation)');
    // Optionally redirect
    // window.location.href = 'index.html';
}