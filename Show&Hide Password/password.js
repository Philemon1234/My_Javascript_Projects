let password = document.getElementById("password");
let eyeIcon = document.getElementById("eye-icon");

eyeIcon.addEventListener("click", function() {
    if(password.type === 'password') {
        password.type = 'text';
        eyeIcon.src = 'eye-icons/eye-open.png'
    } else {
        password.type = 'password';
        eyeIcon.src = 'eye-icons/eye-close.png'
    }
})