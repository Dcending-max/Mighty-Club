
function register() {
    const username = document.getElementById('username').value;
    const rank = document.getElementById('rank').value;
    if (username.trim()) {
        localStorage.setItem('user', JSON.stringify({ username, rank }));
        document.getElementById('message').innerText = 'Successfully joined! Redirecting...';
        setTimeout(() => window.location.href = 'dashboard.html', 1000);
    } else {
        document.getElementById('message').innerText = 'Please enter a username.';
    }
}
