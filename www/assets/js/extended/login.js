const URL = "https://agri-api-middleware.herokuapp.com";

document.getElementById('login-btn').addEventListener('click', e => {
    e.preventDefault();
    let username = document.getElementById('username');
    let password = document.getElementById('password');

    makeAPICall(`${URL}/api/v1/login`, { username: username.value, password: password.value })
        .then(data => {
            if (data.code === 200) {
                redirectUser(true);
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

const makeAPICall = async(url, data_to_send) => {
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