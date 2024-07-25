document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // For demonstration purposes, we'll just show a success message
    // In a real application, you would send this data to the server for processing
    document.getElementById('registerMessage').textContent = 'Registration successful!';

    // Optionally, you could redirect to the login page after registration
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
});
