let local_storage_username = '';
let local_storage_password = '';

document.getElementById('login-btn').addEventListener('click', e => {
    e.preventDefault();
    let username = document.getElementById('username');
    let password = document.getElementById('password');

    if (checkNetworkStatus()) {
        showLoader("#loader-cover");
        showLoader(".loader");

        // Make direct request
        makeAPIPostRequest(`${URL}/api/v1/login`, { username: username.value, password: password.value })
            .then(data => {
                hideLoader("#loader-cover");
                hideLoader(".loader");

                if (data.code === 200) {
                    if (!localStorage.getItem('username') && !localStorage.getItem('password')) {

                        localStorage.setItem('auth', JSON.stringify({ 'username': username.value, 'password': password.value }));
                        localStorage.setItem('data', '[]');
                    }

                    location.replace("index.html");
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Wrong username or password entered',
                        confirmButtonText: "Close"
                    })
                }
            })

        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'An error occurred. Please try again',
                confirmButtonText: "Close"
            })
        })

    } else {
        showLoader("#loader-cover");
        showLoader(".loader");

        local_storage_username = JSON.parse(localStorage.getItem('auth')).username;
        local_storage_password = JSON.parse(localStorage.getItem('auth')).password;

        if (local_storage_username && local_storage_password) {
            // Save data until user gets online
            if (validateOfflineCredentials(username.value, password.value)) {
                location.replace("index.html");
            } else {
                hideLoader("#loader-cover");
                hideLoader(".loader");

                Swal.fire({
                    icon: 'error',
                    title: 'Wrong username or password entered',
                    confirmButtonText: "Close"
                })
            }
        } else {
            hideLoader("#loader-cover");
            hideLoader(".loader");

            Swal.fire({
                icon: 'error',
                title: 'Please connect to the internet to setup your account',
                confirmButtonText: "Close"
            })
        }
    }
})

const validateOfflineCredentials = (username, password) => {
    local_storage_username = JSON.parse(localStorage.getItem('auth')).username;
    local_storage_password = JSON.parse(localStorage.getItem('auth')).password;

    if (username === local_storage_username && password === local_storage_password)
        return true;
    else
        return false;
}


function getData() {

    const loginUsername = document.getElementById('username').value;
    const loginPassword = document.getElementById('password').value;

    login(loginUsername, loginPassword);
}