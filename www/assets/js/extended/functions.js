let is_loggedin = false;

const changeLoginStatus = () => {
    console.log("is_loggedin 1:", is_loggedin);
    if (is_loggedin) {
        is_loggedin = !is_loggedin;
        console.log("is_loggedin 2:", is_loggedin);

    } else {
        is_loggedin = !is_loggedin;
        console.log("is_loggedin 3:", is_loggedin);

    }
}

const redirectUser = (status) => {
    is_loggedin = status;

    if (!is_loggedin && window.location.pathname !== "/www/login.html") {
        window.location.href = "login.html";
    } else if (is_loggedin && window.location.pathname === "/www/login.html") {
        window.location.href = "index.html";
    }
}

// redirectUser(false);