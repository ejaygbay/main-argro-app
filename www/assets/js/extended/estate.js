// ESTASTE SECTION STARTS 
function estateSubmitWeighBrigeData() {

    // validation if input field is empty
    // Buy section
    var esateDate = document.forms["weighBridgeEstate"]["esateDate"].value;
    var selectEstate = document.forms["weighBridgeEstate"]["selectEstate"].value;
    var selectEmployee = document.forms["weighBridgeEstate"]["selectEmployee"].value;
    var collection = document.forms["weighBridgeEstate"]["collection"].value;
    var grossEstate = document.forms["weighBridgeEstate"]["grossEstate"].value;
    var tareEstate = document.forms["weighBridgeEstate"]["tareEstate"].value;
    var netEstate = document.forms["weighBridgeEstate"]["netEstate"].value;
    var storageEstate = document.forms["weighBridgeEstate"]["storageEstate"].value;

    if (esateDate == "") {
        showElement(dateValidation);
        document.getElementById("weigh-section").scrollIntoView();
        return false;
        // Getting input fields data
    } else {
        hideElement(dateValidation);
    }

    if (selectEstate == "Select an estate") {
        showElement("#selectEstateValidation");
        document.getElementById("weigh-section").scrollIntoView();
        return false;

    } else {
        // showElement(weighBridgeFarmerValidationElement);
        hideElement("#selectEstateValidation");

    }

    if (selectEmployee == "Select an Employee") {
        showElement("#selectEmployeeValidation");
        document.getElementById("weigh-section").scrollIntoView();
        return false;
    } else {
        hideElement("#selectEmployeeValidation");
        document.getElementById("weigh-section").scrollIntoView();

    }

    if (collection == "") {
        showElement("#collectionValidation");
        document.getElementById("weigh-section").scrollIntoView();
        return false;
    } else {
        hideElement("#collectionValidation");
        document.getElementById("weigh-section").scrollIntoView();

    }

    if (grossEstate == "No data read") {
        showElement("#grossEstateValidation");
        document.getElementById("gross-estate").scrollIntoView();
        return false;
    } else {
        hideElement("#grossEstateValidation");
        document.getElementById("weigh-section").scrollIntoView();

    }

    if (tareEstate == "Camera Data") {
        showElement("#tareEstateValidation");
        document.getElementById("gross-estate").scrollIntoView();
        return false;
    } else {
        hideElement("#tareEstateValidation");
        document.getElementById("weigh-section").scrollIntoView();

    }

    if (netEstate == "") {
        showElement("#netEstateValidation");
        document.getElementById("gross-estate").scrollIntoView();
        return false;
    } else {
        hideElement("#netEstateValidation");
        document.getElementById("weigh-section").scrollIntoView();

    }


    if (storageEstate == "Select a storage") {
        showElement("#storageEstateValidation");
        document.getElementById("gross-estate").scrollIntoView();
        return false;
    } else {
        hideElement("#storageEstateValidation");
        document.getElementById("weigh-section").scrollIntoView();

    }
}