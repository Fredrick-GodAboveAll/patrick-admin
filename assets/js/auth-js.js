const userDetails = {
    email: "patrick370@gmail.com",
    password: "patrick?"
};

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const enteredEmail = document.getElementById('email').value;
    const enteredPassword = document.getElementById('password').value;

    if (enteredEmail === userDetails.email && enteredPassword === userDetails.password) {
        const sessionExpiry = Date.now() + 120000; // 2 minutes
        localStorage.setItem('sessionActive', true);
        localStorage.setItem('sessionExpiry', sessionExpiry);
        window.location.href = 'dashboard.html';
    } else {
       alert("Invalid Details");
    }
});

window.onload = function() {
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
};



