const URL = "https://agri-api-middleware.herokuapp.com";
fetch(`${URL}/api/v1/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: "Admin991",
            password: "Agrotrader123"
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log("This is the error:==========", err))