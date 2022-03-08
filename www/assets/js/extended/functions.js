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

const hideLoader = (ele) => {
    document.querySelector(ele).style = "display: none";
}

const showLoader = (ele) => {
    document.querySelector(ele).style = "display: block";
}

const makeAPIPostRequest = async(url, data_to_send) => {
    return await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data_to_send)
        })
        .then(response => response.json())
        .then(data => data)
        .catch(err => err.message)
}

const changeNetworkStatusIcon = () => {
    let check_network_interval = setInterval(() => changeNetworkStatusIcon(), 3000);

    if (checkNetworkStatus()) {
        hideElement('#offline-wifi-icon');
        showElement('#online-wifi-icon');
    } else {
        hideElement('#online-wifi-icon');
        showElement('#offline-wifi-icon');
    }

    clearInterval(check_network_interval);
}

const checkNetworkStatus = () => navigator.onLine ? true : false;

changeNetworkStatusIcon();

document.addEventListener("backbutton", goBack, false);

const goBack = () => {
    if (previous_section) {
        hideElement(current_section);
        showElement(previous_section);
        previous_section = "";
    } else {
        navigator.app.exitApp();
    }
}