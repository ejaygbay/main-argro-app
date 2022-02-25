/**
 * Weigh section tab eventlistener
 */
document.querySelector("#tab-head-buy").addEventListener('click', (e) => {
    hideElement(current_weigh_section);
    setAsInactive(current_weigh_tab_head);
    current_weigh_section = "#tab-content-buy";
    current_weigh_tab_head = "#tab-head-buy";
    showElement(current_weigh_section);
    setAsActive(current_weigh_tab_head);
})

document.querySelector("#tab-head-estate").addEventListener('click', () => {
    hideElement(current_weigh_section);
    setAsInactive(current_weigh_tab_head);
    current_weigh_section = "#tab-content-estate";
    current_weigh_tab_head = "#tab-head-estate";
    showElement(current_weigh_section);
    setAsActive(current_weigh_tab_head);
})

document.querySelector("#tab-head-shipment").addEventListener('click', () => {
    hideElement(current_weigh_section);
    setAsInactive(current_weigh_tab_head);
    current_weigh_section = "#tab-content-shipment";
    current_weigh_tab_head = "#tab-head-shipment";
    showElement(current_weigh_section);
    setAsActive(current_weigh_tab_head);
})

/**
 * Weigh statistics section tab event listener
 */
document.querySelector("#tab-head-pending").addEventListener('click', (e) => {
    hideElement(current_weigh_statistics_section);
    setAsInactive(current_weigh_statistics_tab_head);
    current_weigh_statistics_section = "#tab-content-pending";
    current_weigh_statistics_tab_head = "#tab-head-pending";
    showElement(current_weigh_statistics_section);
    setAsActive(current_weigh_statistics_tab_head);
})

document.querySelector("#tab-head-submitted").addEventListener('click', () => {
    hideElement(current_weigh_statistics_section);
    setAsInactive(current_weigh_statistics_tab_head);
    current_weigh_statistics_section = "#tab-content-submitted";
    current_weigh_statistics_tab_head = "#tab-head-submitted";
    showElement(current_weigh_statistics_section);
    setAsActive(current_weigh_statistics_tab_head);
})

document.querySelectorAll(".pending-and-submitted-entries").forEach(ele => {
    ele.addEventListener('click', (e) => {
        hideElement(current_section);
        current_section = "#weigh-statistics-section";
        showElement(current_section);

        if (current_statistics.length > 0) {
            hideElement(current_statistics);
        }

        if (e.target.parentNode.id === 'tab-content-buy') {
            current_statistics = '.buy-statistics';
            showElement(current_statistics);
        } else if (e.target.parentNode.id === 'tab-content-estate') {
            current_statistics = '.estate-statistics';
            showElement(current_statistics);
        } else if (e.target.parentNode.id === 'tab-content-shipment') {
            current_statistics = '.shipment-statistics';
            showElement(current_statistics);
        }
    })
})




function showCamera(toast) {
    Android.showCamera(toast);
}

document.getElementById("gross-buy-tab-camera-btn").addEventListener("click", cameraTakePicture('gross-ocr-data'));
document.getElementById("tare-buy-tab-camera-btn").addEventListener("click", cameraTakePicture('tare-ocr-data'));

const cameraTakePicture = async(ele_id) => {
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 100,
        correctOrientation: true
    });

    const onSuccess = (image_data) => {
        let element = document.getElementById(`${ele_id}`);
        showElement(ele_id);
        element.value = await readDataFromImage(image_data);
    }

    const onFail = (message) => alert('Failed because: ' + message)
}

const readDataFromImage = async(image) => {
    textocr.recText(0, image, onSuccess, onFail);

    const onSuccess = (recognizedText) => {
        let text_from_image = recognizedText.blocks.blocktext;
        let text_doc = "";

        text_from_image.forEach(ele => text_doc = `${text_doc} ${ele}`);
        return text_doc;
    }

    const onFail = (message) => alert('Failed because: ' + message);
}

function buySubmitWeighBrigeData() {

    // validation if input field is empty
    // Buy section
    var buydateInput = document.forms["weighBridgeBuy"]["date"].value;
    var buyFarmerInput = document.forms["weighBridgeBuy"]["farmer"].value;
    var vehicalPlate = document.forms["weighBridgeBuy"]["vehicalPlate"].value;
    var gross = document.forms["weighBridgeBuy"]["gross"].value;
    var tare = document.forms["weighBridgeBuy"]["tare"].value;
    var net = document.forms["weighBridgeBuy"]["net"].value;
    var storage = document.forms["weighBridgeBuy"]["storage"].value;

    if (buydateInput == "") {
        showElement(weighBridgevalidationElement);
        document.getElementById("weigh-section").scrollIntoView();
        return false;
        // Getting input fields data
    } else {
        hideElement(weighBridgevalidationElement);
    }

    if (buyFarmerInput == "Select a Farmer") {
        showElement(weighBridgeFarmerValidationElement);
        document.getElementById("weigh-section").scrollIntoView();
        return false;

    } else {
        // showElement(weighBridgeFarmerValidationElement);
        hideElement(weighBridgeFarmerValidationElement);

    }

    if (vehicalPlate == "") {
        showElement(weighBridgevehicleValidationElement);
        document.getElementById("weigh-section").scrollIntoView();
        return false;
    } else {
        hideElement(weighBridgevehicleValidationElement);
        document.getElementById("weigh-section").scrollIntoView();

    }

    if (gross == "Gross (KG)") {
        showElement(grossValidationElement);
        document.getElementById("weigh-section").scrollIntoView();
        return false;
    } else {
        e.log()
        hideElement(grossValidationElement);
        document.getElementById("weigh-section").scrollIntoView();

    }

    if (tare == "Tare (KG)") {
        showElement(weighTareValidationElement);
        document.getElementById("gross-buy").scrollIntoView();
        return false;
    } else {
        hideElement(weighTareValidationElement);
        document.getElementById("weigh-section").scrollIntoView();

    }

    if (net == "") {
        showElement(weighNetValidationElement);
        document.getElementById("gross-buy").scrollIntoView();
        return false;
    } else {
        hideElement(weighNetValidationElement);
        document.getElementById("weigh-section").scrollIntoView();

    }

    if (storage == "Select a storage") {
        showElement(weighStorageValidationElement);
        document.getElementById("gross-buy").scrollIntoView();
        return false;
    } else {
        hideElement(weighStorageValidationElement);
        document.getElementById("weigh-section").scrollIntoView();

    }
}

// Ends here

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

    if (grossEstate == "") {
        showElement("#grossEstateValidation");
        document.getElementById("gross-estate").scrollIntoView();
        return false;
    } else {
        hideElement("#grossEstateValidation");
        document.getElementById("weigh-section").scrollIntoView();

    }

    if (tareEstate == "") {
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

// SHIPMENT
function shipmentSubmitWeighBrigeData() {

    // validation if input field is empty
    // Buy section
    var shipmentDate = document.forms["weighBridgeShipment"]["shipmentDate"].value;
    var shipmentNumber = document.forms["weighBridgeShipment"]["shipmentNumber"].value;
    var shipmentVehiclePlate = document.forms["weighBridgeShipment"]["shipmentVehiclePlate"].value;
    var driver = document.forms["weighBridgeShipment"]["driver"].value;
    var containerNumber = document.forms["weighBridgeShipment"]["containerNumber"].value;
    var nriSeal = document.forms["weighBridgeShipment"]["nriSeal"].value;
    var lot = document.forms["weighBridgeShipment"]["lot"].value;
    var dapartureTime = document.forms["weighBridgeShipment"]["dapartureTime"].value;
    var grossShipment = document.forms["weighBridgeShipment"]["grossShipment"].value;
    var tareShipment = document.forms["weighBridgeShipment"]["tareShipment"].value;
    var crate = document.forms["weighBridgeShipment"]["crate"].value;
    var shipmentStorage = document.forms["weighBridgeShipment"]["shipmentStorage"].value;

    if (shipmentDate == "") {
        showElement("#shipmentDateValidation");
        document.getElementById("weigh-section").scrollIntoView();
        return false;
        // Getting input fields data
    } else {
        hideElement("#shipmentDateValidation");
    }

    if (shipmentNumber == "") {
        showElement("#shipmentNumberValidation");
        document.getElementById("weigh-section").scrollIntoView();
        return false;

    } else {
        // showElement(weighBridgeFarmerValidationElement);
        hideElement("#shipmentNumberValidation");

    }

    if (shipmentVehiclePlate == "") {
        showElement("#shipmentVehiclePlateValidation");
        document.getElementById("weigh-section").scrollIntoView();
        return false;

    } else {
        // showElement(weighBridgeFarmerValidationElement);
        hideElement("#shipmentVehiclePlateValidation");

    }

    if (driver == "") {
        showElement("#driverValidation");
        document.getElementById("weigh-section").scrollIntoView();
        return false;

    } else {
        // showElement(weighBridgeFarmerValidationElement);
        hideElement("#driverValidation");

    }

    if (containerNumber == "") {
        showElement("#containerNumberValidation");
        document.getElementById("weigh-section").scrollIntoView();
        return false;

    } else {
        // showElement(weighBridgeFarmerValidationElement);
        hideElement("#containerNumberValidation");

    }

    if (nriSeal == "") {
        showElement("#nriSealValidation");
        document.getElementById("weigh-section").scrollIntoView();
        return false;

    } else {
        // showElement(weighBridgeFarmerValidationElement);
        hideElement("#nriSealValidation");

    }

    if (lot == "") {
        showElement("#lotValidation");
        document.getElementById("weigh-section").scrollIntoView();
        return false;

    } else {
        // showElement(weighBridgeFarmerValidationElement);
        hideElement("#lotValidation");
    }


    if (dapartureTime == "") {
        showElement("#dapartureTimeValidation");
        document.getElementById("departure-time-shipment").scrollIntoView();
        return false;

    } else {
        // showElement(weighBridgeFarmerValidationElement);
        hideElement("#dapartureTimeValidation");
    }

    if (grossShipment == "") {
        showElement("#grossShipmentValidation");
        document.getElementById("weigh-section").scrollIntoView();
        return false;

    } else {
        // showElement(weighBridgeFarmerValidationElement);
        hideElement("#grossShipmentValidation");
    }

    if (tareShipment == "") {
        showElement("#tareShipmentValidation");
        document.getElementById("weigh-section").scrollIntoView();
        return false;

    } else {
        // showElement(weighBridgeFarmerValidationElement);
        hideElement("#tareShipmentValidation");
    }

    if (crate == "") {
        showElement("#crateValidation");
        document.getElementById("weigh-section").scrollIntoView();
        return false;

    } else {
        // showElement(weighBridgeFarmerValidationElement);
        hideElement("#crateValidation");
    }
    if (shipmentStorage == "Select a storage") {
        showElement("#shipmentStorageValidation");
        document.getElementById("weigh-section").scrollIntoView();
        return false;

    } else {
        // showElement(weighBridgeFarmerValidationElement);
        hideElement("#shipmentStorageValidation");
    }
}

// Data from input element weigh bridge
function saveAsPending() {

    // validation if input field is empty
    // Buy section
    var buydateInput = document.forms["weighBridgeBuy"]["date"].value;
    var buyFarmerInput = document.forms["weighBridgeBuy"]["farmer"].value;
    var vehicalPlate = document.forms["weighBridgeBuy"]["vehicalPlate"].value;
    var gross = document.forms["weighBridgeBuy"]["gross"].value;
    var tare = document.forms["weighBridgeBuy"]["tare"].value;
    var net = document.forms["weighBridgeBuy"]["net"].value;
    var storage = document.forms["weighBridgeBuy"]["storage"].value;

    if (buydateInput == "") {
        showElement(weighBridgevalidationElement);
        document.getElementById("weigh-section").scrollIntoView();
        return false;
        // Getting input fields data
    } else {
        hideElement(weighBridgevalidationElement);
    }

    if (buyFarmerInput == "Select a Farmer") {
        showElement(weighBridgeFarmerValidationElement);
        document.getElementById("weigh-section").scrollIntoView();
        return false;

    } else {
        // showElement(weighBridgeFarmerValidationElement);
        hideElement(weighBridgeFarmerValidationElement);

    }

    if (vehicalPlate == "") {
        showElement(weighBridgevehicleValidationElement);
        document.getElementById("weigh-section").scrollIntoView();
        return false;
    } else {
        hideElement(weighBridgevehicleValidationElement);
        document.getElementById("weigh-section").scrollIntoView();

    }

    if (gross == "Gross (KG)") {
        showElement(grossValidationElement);
        document.getElementById("weigh-section").scrollIntoView();
        return false;
    } else {

        hideElement(grossValidationElement);
        document.getElementById("weigh-section").scrollIntoView();

    }

    if (tare == "Tare (KG)") {
        showElement(weighTareValidationElement);
        document.getElementById("gross-buy").scrollIntoView();
        return false;
    } else {
        hideElement(weighTareValidationElement);
        document.getElementById("weigh-section").scrollIntoView();

    }

    if (net == "") {
        showElement(weighNetValidationElement);
        document.getElementById("gross-buy").scrollIntoView();
        return false;
    } else {
        hideElement(weighNetValidationElement);
        document.getElementById("weigh-section").scrollIntoView();

    }

    if (storage == "Select a storage") {
        showElement(weighStorageValidationElement);
        document.getElementById("gross-buy").scrollIntoView();
        return false;
    } else {
        hideElement(weighStorageValidationElement);
        document.getElementById("weigh-section").scrollIntoView();



        function increment() {

            count++;
            return count;
        }
        var table = document.getElementById("pendingTable");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(-1);
        var cell2 = row.insertCell(-1);
        var cell3 = row.insertCell(-1);
        var cell4 = row.insertCell(-1);
        increment();
        cell1.innerHTML = count;

        cell2.innerHTML = document.forms["weighBridgeBuy"]["farmer"].value;
        cell3.innerHTML = document.forms["weighBridgeBuy"]["vehicalPlate"].value;
        cell4.innerHTML = document.forms["weighBridgeBuy"]["date"].value;
        $("#myModal").show();

        setTimeout(function() { $("#myModal").hide(); }, 1500);


    }

}






const hideElement = (ele) => {
    document.querySelector(ele).style = "display: none";
}

const showElement = (ele) => {
    document.querySelector(ele).style = "display: block";
}

const setAsActive = (ele) => {
    document.querySelector(ele).style = "background: #bcb27b; color: #000;";
}

const setAsInactive = (ele) => {
    document.querySelector(ele).style = "background: #675C2F; color: #fff;";
}