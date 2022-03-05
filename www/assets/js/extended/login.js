const URL = "https://agri-api-middleware.herokuapp.com";
var array = [];

document.getElementById('login-btn').addEventListener('click', e => {
    e.preventDefault();
    let username = document.getElementById('username');
    let password = document.getElementById('password');


    showLoader("#loader-cover");
    showLoader(".loader");

    makeAPIPostRequest(`${URL}/api/v1/login`, { username: username.value, password: password.value })
        .then(data => {
            if (data.code === 200) {
                // Local storage
                var userName = "userName"
                var LastName = "lastName"
                var MiddleName = "middleName"
                var roles = "role"
                var gangs = "gang"
                var userId = "userId"

                // getting user name from data object
                const firstName = data.data.user_data.first_name

                const lastName = data.data.user_data.last_name
                const middleName = data.data.user_data.middle_name
                const role = data.data.user_data.role
                const gang = data.data.user_data.gang
                const userIds = data.data.user_data.user_id
                var storage = window.localStorage;

                storage.setItem(userName, firstName)
                storage.setItem(LastName, lastName)
                storage.setItem(MiddleName, middleName)
                storage.setItem(roles, role)
                storage.setItem(gangs, gang)
                storage.setItem(userId, userIds)

                // document.getElementById("profileName").value = profileName;
                // for (const property in data) {
                //     console.log(`${property}: ${data[property]}`);
                // }
                // console.log(data);
                // console.log(storage.getItem("gang"));
                hideLoader("#loader-cover");
                hideLoader(".loader");
                // redirectUser(true);

                location.replace("index.html")
                    // redirectUser(true);
            } else {
                console.log("Req not made", data)
            }
        })

    .catch(err => { console.log(err) })
})



function apiTest() {
    // let postObj = {
    //     username: "cjackson998",
    //     password: "d3vL1ber1@2020",

    // }

    // let post = JSON.stringify(postObj)

    // const url = "https://cors-anywhere.herokuapp.com/http://demo.agrotraderlatex.online/api/getLogin/posts"
    // let xhr = new XMLHttpRequest()

    // xhr.open('POST', url, true)
    // xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
    // xhr.send(post);

    // xhr.onload = function() {
    //     if (xhr.status === 201) {
    //         console.log("Post successfully created!")
    //     }
    // }


    // $.ajax({
    //     url: "https://cors-anywhere.herokuapp.com/http://demo.agrotraderlatex.online/api/collection/get_list_of_weighed_bags",
    //     type: "GET",
    //     success: function(result) {
    //         console.log(result);
    //     },
    //     error: function(error) {
    //         console.log(error);
    //     }
    // })
}

function getData() {

    const loginUsername = document.getElementById('username').value;
    const loginPassword = document.getElementById('password').value;

    login(loginUsername, loginPassword);
}