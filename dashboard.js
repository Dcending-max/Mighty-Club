
document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('userInfo').innerText = `Hello ${user.username} [${user.rank}]`;
    } else {
        window.location.href = 'join.html';
    }
});
