/* =========================
   Get Forms and Elements
========================= */

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const loginSection = loginForm.closest(".auth-card");
const signupSection = document.getElementById("signupSection");

const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

const loginError = document.getElementById("loginError");
const signupError = document.getElementById("signupError");


/* =========================
   Switch Login / Signup
========================= */

showSignup.addEventListener("click", () => {

    loginSection.classList.add("hidden");
    signupSection.classList.remove("hidden");

});


showLogin.addEventListener("click", () => {

    signupSection.classList.add("hidden");
    loginSection.classList.remove("hidden");

});


/* =========================
   Signup
========================= */

signupForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value;


    /* Clear previous error */

    signupError.textContent = "";
    signupError.classList.remove("show");


    /* Basic validation */

    if (!name || !email || !password) {

        signupError.textContent = "Please fill in all fields.";
        signupError.classList.add("show");

        return;
    }


    /* Create user object */

    const user = {
        name: name,
        email: email,
        password: password
    };


    /* Save user */

    localStorage.setItem("user", JSON.stringify(user));


    /* Save logged-in user */

    localStorage.setItem("currentUser", JSON.stringify(user));


    /* Redirect */

    window.location.href = "dashboard.html";

});
/* =========================
   Login
========================= */

loginForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;


    /* Clear previous error */

    loginError.textContent = "";
    loginError.classList.remove("show");


    /* Get saved user */

    const savedUser = localStorage.getItem("user");


    /* No account exists */

    if (!savedUser) {

        loginError.textContent = "No account found. Please sign up first.";
        loginError.classList.add("show");

        return;
    }


    /* Convert JSON string back to object */

    const user = JSON.parse(savedUser);


    /* Check credentials */

    if (user.email === email && user.password === password) {

        /* Save current user */

        localStorage.setItem(
            "currentUser",
            JSON.stringify(user)
        );


        /* Redirect */

        window.location.href = "dashboard.html";

    } else {

        loginError.textContent = "Invalid email or password.";
        loginError.classList.add("show");

    }

});