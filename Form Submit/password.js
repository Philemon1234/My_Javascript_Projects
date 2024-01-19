let password = document.getElementById("password");
let eyeIcon = document.getElementById("eye-icon");


// Show And Hide Password
eyeIcon.addEventListener("click", function () {
    if (password.type === 'password') {
        password.type = 'text';
        eyeIcon.src = 'eye-icons/eye-open.png'
    } else {
        password.type = 'password';
        eyeIcon.src = 'eye-icons/eye-close.png'
    }
})

//Form Submit
// function sendEmail() {
//     Email.send({
//         secureToken: "c9dafe6f-cad5-4710-9639-f4d8b9df806f",
//         To: 'ntivuguruzwaphilemon0@gmail.com',
//         From: document.getElementById("email").value,
//         Subject: "New Contact Form",
//         Body: "Name: " + document.getElementById("name").value
//         + "<br> Email: " + document.getElementById("email").value
//         + "<br> Password: " + document.getElementById("password").value
//         + "<br> Message: " + document.getElementById("textarea").value
//     }).then(
//         message => alert("Message sent👍")
//     );
// }