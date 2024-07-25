document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'LuMar' && password === 'alwaysandforever') {
        window.location.href = 'Home.html';
    } else {
        document.getElementById('message').textContent = 'Invalid username or password';
    }
});

