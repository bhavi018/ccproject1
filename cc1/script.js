function validateLogin(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example credentials (for demo purposes)
    const validUsername = 'admin1';
    const validPassword = '12345';

    // Check if the credentials match
    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        // You can redirect the user to another page here
        // window.location.href = 'home.html';
    } else {
        // Show error message
        document.getElementById('error-msg').style.display = 'block';
    }
}
