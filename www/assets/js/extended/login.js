const URL = "https://agri-api-middleware.herokuapp.com";
console.log(localStorage.getItem('username'))

document.getElementById('login-btn').addEventListener('click', e => {
    e.preventDefault();
    let username = document.getElementById('username');
    let password = document.getElementById('password');

    console.log("Network connection:", checkNetworkStatus())
    if (checkNetworkStatus()) {
        // Make direct request
        showLoader("#loader-cover");
        showLoader(".loader");

        makeAPIPostRequest(`${URL}/api/v1/login`, { username: username.value, password: password.value })
            .then(data => {
                hideLoader("#loader-cover");
                hideLoader(".loader");

                if (data.code === 200) {
                    if (!localStorage.getItem('username') && !localStorage.getItem('password')) {
                        localStorage.setItem('username', username.value);
                        localStorage.setItem('password', password.value);
                    }

                    // // Local storage
                    // var userName = "userName"
                    // var LastName = "lastName"
                    // var MiddleName = "middleName"
                    // var roles = "role"
                    // var gangs = "gang"
                    // var userId = "userId"

                    // // getting user name from data object
                    // const firstName = data.data.user_data.first_name

                    // const lastName = data.data.user_data.last_name
                    // const middleName = data.data.user_data.middle_name
                    // const role = data.data.user_data.role
                    // const gang = data.data.user_data.gang
                    // const userIds = data.data.user_data.user_id
                    // var storage = window.localStorage;

                    // storage.setItem(userName, firstName)
                    // storage.setItem(LastName, lastName)
                    // storage.setItem(MiddleName, middleName)
                    // storage.setItem(roles, role)
                    // storage.setItem(gangs, gang)
                    // storage.setItem(userId, userIds)

                    // // document.getElementById("profileName").value = profileName;
                    // // for (const property in data) {
                    // //     console.log(`${property}: ${data[property]}`);
                    // // }
                    // // console.log(data);
                    // // console.log(storage.getItem("gang"));
                    hideLoader("#loader-cover");
                    hideLoader(".loader");
                    // redirectUser(true);

                    location.replace("index.html")
                        // redirectUser(true);
                } else {
                    if (localStorage.getItem('username') && localStorage.getItem('password')) {
                        // Save data until user gets online
                        console.log("have already logged in", localStorage)
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Please check your internet connection',
                            confirmButtonText: "Close"
                        })
                    }
                }
            })

        .catch(err => { console.log(err) })

    } else {
        if (localStorage.getItem('username') && localStorage.getItem('password')) {
            // Save data until user gets online
            console.log("have already logged in", localStorage)
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Please connect to the internet',
                confirmButtonText: "Close"
            })
        }
    }
})


function getData() {

    const loginUsername = document.getElementById('username').value;
    const loginPassword = document.getElementById('password').value;

    login(loginUsername, loginPassword);
}