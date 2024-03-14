
function checkFirstName() {
    const firstName = document.getElementById("firstName");
    firstName.addEventListener("input",()=>{
        firstName.value = firstName.value.replace(/\s/g,"")
    })
    const fname = document.getElementById("fname");
    validateInput(firstName, fname, "First Name");
}

function checkLastName() {
    const lastName = document.getElementById("lastName");
    lastName.addEventListener("input",()=>{
        lastName.value = lastName.value.replace(/\s/g,"")
    })
    const lname = document.getElementById("lname");
    validateInput(lastName, lname, "Last Name");
}


function passwordField() {
    const password = document.getElementById("passwordKey");
    password.addEventListener("input",()=>{
        password.value = password.value.replace(/\s/g,"")
    })
    const passwordError = document.getElementById("passworderror")
    validateInput(password, passwordError, "Password");
}

function confirmPasswordField() {
    const confirmPassword = document.getElementById("confirmPassword");
    confirmPassword.addEventListener("input",()=>{
        confirmPassword.value = confirmPassword.value.replace(/\s/g,"")       
    })
    const passwordKey = document.getElementById("passwordKey");
    const confirmPasswordError = document.getElementById("confirmpassworderror");
    passwordLength(confirmPassword,confirmPasswordError,"Password")

    if (confirmPassword.value === "") {
            confirmPasswordError.innerText = "Password is required"
    } else if (confirmPassword.value.length <8) {
            confirmPasswordError.innerText =`${errorMessage}`
    } else if (passwordKey.value !== confirmPassword.value) {
                confirmPasswordError.innerText="Password doesn't match"
    } else {
        confirmPassword.innerText = ""
    }

}


function showPass() {
    const password = document.getElementById("passwordKey")
    const eye = document.querySelector(".showpassword i")
    if (password.type === "password") {
        password.type = "text"
        eye.classList.remove("fa-eye-slash")
        eye.classList.add("fa-eye");
    } else {
        password.type = "password"
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash")
    }
}
function showPassword() {
    const password = document.getElementById("confirmPassword")
    const icon = document.querySelector(".eyeicon i")
    if (password.type === "password") {
        password.type = "text"
        icon.classList.remove("fa-eye-slash")
        icon.classList.add("fa-eye");
    } else {
        password.type = "password"
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash")
    }
}


function validateInput(element, errorElement, errorMessage) {
    if (element.value === "") {
        errorElement.innerText = `${errorMessage} is required`
    } else {
        checkLength(element, errorElement, errorMessage)
    }
}

function checkLength(element, errorElement, errorMessage) {
    if (element.value.length < 2) {
        errorElement.innerText = `${errorMessage} must be at least 2 characters long`
    } else {
        errorElement.innerText = ""
    }
}


function passwordLength(element, errorElement, errorMessage) {
    if (element.value.length < 8) {
        errorElement.innerText = `${errorMessage}  must be at least 8 characters long`
    } else {
        errorElement.innerText = ""
    }
}


function checkBox() {
    const checkbox = document.getElementById("checkbox");
    const privacyError = document.getElementById("privacyError");
    if (checkbox.checked) {
        privacyError.innerText = ""
    } else {
        privacyError.innerText = "Privacy disclaimer is required"
    }
}


function checkEmail(){
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const mailformat = /^[\w-\.]+@([\w-]+\.)+[\w-]{3,4}$/;

    if(email.value === ""){
        emailError.innerText ="Email Address is required"
    }else if(email.value.match(mailformat)){
        emailError.innerText =""
    }
    else{
        emailError.innerText="Email Address is invalid"
    }

}


function registerForm(e) {
    e.preventDefault();
    checkFirstName();
    checkLastName();
    checkEmail();
    confirmPasswordField()
    checkBox();

}

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
});
