
function checkFirstName() {
    const firstName = document.getElementById("firstName");
    const fname = document.getElementById("fname");
    validateInput(firstName, fname, "First Name");
}

function checkLastName() {
    const lastName = document.getElementById("lastName");
    const lname = document.getElementById("lname");
    validateInput(lastName, lname, "Last Name");
}


function passwordField() {
    const password = document.getElementById("passwordKey");
    const passwordError = document.getElementById("passworderror")
    validateInput(password, passwordError, "Password");
}

function confirmPasswordField() {
    const confirmPassword = document.getElementById("confirmPassword");
    const passwordKey = document.getElementById("passwordKey");
    const confirmPasswordError = document.getElementById("confirmpassworderror");
    passwordLength(confirmPassword, confirmPasswordError, "Password")

    if (confirmPassword.value === "") {
        confirmPasswordError.innerText = "Password is required"
    } else if (confirmPassword.value.length < 8) {
        confirmPasswordError.innerText = `${errorMessage}`
    } else if (passwordKey.value !== confirmPassword.value) {
        confirmPasswordError.innerText = "Password doesn't match"
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


function checkEmail() {
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const mailformat = /^[\w-\.]+@([\w-]+\.)+[\w-]{3,4}$/;

    if (email.value === "") {
        emailError.innerText = "Email Address is required"
    } else if (email.value.match(mailformat)) {
        emailError.innerText = ""
    }
    else {
        emailError.innerText = "Email Address is invalid"
    }

}


function registerForm() {
    checkFirstName();
    checkLastName();
    checkEmail();
    confirmPasswordField()
    checkBox();

}


const languages = document.getElementById("languages");
languages.style.display = "none"
const select = document.getElementById("select");
select.addEventListener("click", () => {
    const currentDisplay = languages.style.display;

    if (currentDisplay === "none") {
        languages.style.display = "block"
    } else {
        languages.style.display = "none"
    }
});

const translations = {
    it: {
        en:"EN", 
        it:"IT",
        login: "Accedi",
        register: "Registrati",
        registerText: "Registrazione",
        firstname: "Nome",
        lastname: "Cognome",
        email: "Indirizzo email",
        langPassword: "Password",
        langConfirmPassword: "Conferma password",
        langPrivacy: "ho letto e accetto l'informativa sulla Privacy",
        existingAccount: "Hai già un account? Accedi ora",
        btn: "Registrati",
        transfer: "Trasferisci a Humanitas",
        information: "Informativa sulla privacy",
        supporttext: "Supporto:support@st.hunimed.eu",
        info: "Informazioni:transfer@hunimed.eu"
    },
    en:{
        en:"EN",
        it:"IT",
        login: "Login",
        register: "Register",
        registerText: "Register",
        firstname: "First Name",
        lastname: "Last Name",
        email: "Email Address",
        langPassword: "Password",
        langConfirmPassword: "Confirm password",
        langPrivacy: "I have read and accept the Privacy disclaimer",
        existingAccount: "Have an account? Login Now",
        btn: "Register",
        transfer: "Transfer to  Humanitas",
        information: "Privacy Policy",
        supporttext: "Support:support@st.hunimed.eu",
        info: "Info:transfer@hunimed.eu"
    }
}

function changeLanguage(language){

    const translate = document.querySelectorAll(".translate");
    translate.forEach((itm=>{
        const classNames = itm.classList[0];
        itm.innerText= translations[language][classNames];
    }))
}



    document.getElementById("it").addEventListener("click",()=>{
        document.getElementById("selectedLang").innerText = "IT";
        changeLanguage("it")

    })
    
    document.getElementById("en").addEventListener("click",()=>{
        document.getElementById("selectedLang").innerText = "EN";
        changeLanguage("en");
    })

