const dropDown = document.getElementById("dropdown");
dropDown.style.display = "none"
const select = document.getElementById("select");
select.addEventListener("click", () => {
    const currentDisplay = dropDown.style.display;

    if (currentDisplay === "none") {
        dropDown.style.display = "block"
    } else {
        dropDown.style.display = "none"
    }
})


function submitForm(e) {
    e.preventDefault();
    const emailInput = document.getElementById("email")
    const error = document.getElementById("error");
    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("passworderror")
    passwordError.innerText = `Password is required`


    if (emailInput.value === "") {
        error.innerText = "Email is required"
    } else {
        error.innerText = ""
    }

    if (passwordInput.value === "") {
        passwordError.innerText = "Password is required"
        return
    } else {
        passwordError.innerText = ""
    }

    if (passwordInput.value.length < 8) {
        passwordError.innerText = "Password must be at least 8 characters long"
    } else {
        passwordError.innerText = ""
    }

}



function showPassword() {
    const password = document.getElementById("password")
    const eyeIcons = document.querySelector(".show-password i")

    if (password.type === "password") {
        password.type = "text"
        eyeIcons.classList.remove("fa-eye-slash")
        eyeIcons.classList.add("fa-eye");
    } else {
        password.type = "password"
        eyeIcons.classList.remove("fa-eye");
        eyeIcons.classList.add("fa-eye-slash")
    }
}
