// function registerForm(e) {
//     e.preventDefault();

//     const firstName = document.getElementById("firstname");

//     const fname = document.getElementById("fnameerror")

//     const lastName = document.getElementById("lastname");

//     const lname = document.getElementById("lnameerror");

//     const email = document.getElementById("email");

//     const emailError = document.getElementById("emailerror");

//     const password = document.getElementById("password");

//     const passwordError = document.getElementById("passworderror");

//     const confirmPassword = document.getElementById("confirmpassword");

//     const checkPassword = document.getElementById("confirmpassworderror");

//     const checkBox = document.getElementById("checkbox");

//     const privacyError = document.getElementById("privacyerror")

//     if (firstName.value === "") {
//         fname.innerText = "First Name is required"
//     } else {
//         fname.innerText = "";
//     }
//     if (lastName.value === "") {
//         lname.innerText = "Last Name is required";
//     } else {
//         lname.innerText = ""
//     }
//     if (email.value === "") {
//         emailError.innerText = "Email Address is required";
//     }else{
//         emailError.innerText=""
//     }
//     if (password.value === "") {
//         passwordError.innerText = "Password is required";
//     } else {
//         passwordError.innerText = ""
//     }
//     if (confirmPassword.value === "") {
//         checkPassword.innerText = "Password is required";
//     } else {
//         checkPassword.innerText = ""
//     }

//     if (checkBox.value === "") {
//         privacyError.innerText = "Privacy disclaimer is required"
//     } else {
//         privacyError.innerText = ""
//     }

//     if (firstName.value < 2) {
//         fname.innerText = "First Name must be at least 2 characters long"

//     } else {
//         fname.innerText = ""
//     }
//     if (lastName.value < 2) {
//         lname.innerText = "Last Name must be at least 2 characters long"
//     } else {
//         lname.innerText = ""
//     }
//     if (password.value.length < 8) {
//         passwordError.innerText = "Password must be at least 8 characters long "
//     } else {
//         passwordError.innerText = ""
//     }
//     if (confirmPassword.value.length < 8) {
//         checkPassword.innerText = "Password must be at least 8 characters long"
//     } else {
//         checkPassword.innerText = ""
//     }

//     if(password!=confirmPassword){
//         checkPassword.innerText="Password does not match"
//     }else{
//         checkPassword.innerText=""
//     }

//     if(checkBox.checked === true){
//         privacyError.innerText=""
//     }else{
//         privacyError.innerText="Privacy disclaimer is required"
//     }

// }

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


// function validatePassword(element, errorElement, errorMessage) {
//     if (element.value === "") {
//         errorElement.innerText = `${errorMessage} is required`
//     } else {
//         passwordLength(element, errorElement, errorMessage)
//     }
// };

// function checkPassword(element, errorElement, errorMessage) {
//     if (element.value === "") {
//         errorElement.innerText = `${errorMessage} is required`
//     } else {
//         passwordLength(element, errorElement, errorMessage)
//     }
// }


// Accedi

// const login = document.getElementsByClassName("login")
//     login.addEventListener("onclick",()=>{
//         login.innerText = "Accedi"
//     })
