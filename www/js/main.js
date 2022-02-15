(function($) {

    "use strict";


})(jQuery);



function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "Formget" && password == "formget#123") {
        // alert("Login successfully");
        window.location = "index.html"; // Redirecting to other page.
        return false;
    } else {

        alert("Wrong Password, Please check login information and try again.");
    }
}