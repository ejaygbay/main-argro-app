// userCredential
hideElement('#userCredential');

function getData() {

    const loginUsername = document.getElementById('username').value;
    const loginPassword = document.getElementById('password').value;

    login(loginUsername, loginPassword);
}

function login(username, password) {
    const URL = "https://agri-api-middleware.herokuapp.com";
    fetch(`${URL}/api/v1/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.message == "Data Not Found") {
                showElement("#userCredential");
            } else {

                // get user profile data and other data associate with this user saved in the database
                location.replace('index.html');
                console.log("successfully login")
            }
        })
        .catch(err => console.log("This is the error:==========", err))
}