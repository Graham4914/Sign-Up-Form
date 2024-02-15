function checkPasswords() {
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirm-password');

    if (password.value === confirmPassword.value) {
        password.classList.add('match');
        confirmPassword.classList.add('match');
        password.classList.remove('error');
        confirmPassword.classList.remove('error');
    } else if (confirmPassword.value !== '') {
       password.classList.add('error');
       confirmPassword.classList.add('error');
       password.classList.remove('match');
       confirmPassword.classList.remove('match');
    } else {
        password.classList.remove('match', 'error');
        confirmPassword.classList.remove('match', 'error');
    }
}