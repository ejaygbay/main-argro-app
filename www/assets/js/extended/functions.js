let is_loggedin = false;

const redirectUser = (status) => {
    is_loggedin = status;

    if (!is_loggedin && window.location.pathname !== "/android_asset/www/login.html") {
        window.location.href = "login.html";
    } else if (is_loggedin && window.location.pathname === "/android_asset/www/login.html") {
        window.location.href = "index.html";
    } else if (!is_loggedin && window.location.pathname !== "/www/login.html") {
        window.location.href = "login.html";
    } else if (is_loggedin && window.location.pathname === "/www/login.html") {
        window.location.href = "index.html";
    }
}