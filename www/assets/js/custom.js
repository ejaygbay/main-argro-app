let current_section = '#home-section';

let weighBridgevalidationElement = '#validationElement';
let weighBridgevehicleValidationElement = '#vehicleValidationElement';



let weighBridgeFarmerValidationElement = '#farmerValidationElement';

let grossValidationElement = '#grossValidationElement';

let weighTareValidationElement = '#tareValidationElement';



let weighNetValidationElement = '#netValidationElement';



let weighStorageValidationElement = '#storageValidationElement';

// Estate section
let dateValidation = '#dateValidation';

let current_profile_tab_head = "#tab-head-view";
let current_profile_section = "#tab-content-view";

let current_weigh_tab_head = "#tab-head-buy";
let current_weigh_section = "#tab-content-buy";
let current_weigh_statistics_tab_head = "#tab-head-pending";
let current_weigh_statistics_section = "#tab-content-pending";
let current_my_tasks_section = "#tab-content-task-list";
let current_my_tasks_tab_head = "#tab-head-task-list";
let current_statistics = "";
let current_buy_tab_head = "#tab-head-cuplumps";
let current_buy_section = "#tab-content-cuplumps";
let current_collect_tab_head = "#tab-head-collect-cuplumps";
let current_collect_section = "#tab-content-collect-cuplumps";


document.querySelector('.sidebar-toggler').addEventListener('click', () => {
    showElement("#sidebar-cover");
    showElement("#sidebar");

    document.querySelector('#sidebar').style = "transition: width 5s;width: 76%; display: block;"
});

document.querySelector("#sidebar-cover").addEventListener('click', () => {
    hideElement("#sidebar");
    hideElement("#sidebar-cover");
})

/**
 * Home cards eventlisteners
 */
document.querySelector("#buy-card").addEventListener('click', () => {
    hideElement(current_section);
    current_section = "#buy-section";
    showElement(current_section);
})

// onload of the my profile section

function showProfileSection() {
    hideElement(current_section);
    current_section = "#profile-section";
    hideElement("#sidebar");
    hideElement("#sidebar-cover");
    current_weigh_tab_head = "#tab-head-view";
    setAsActive(current_weigh_tab_head);
    showElement(current_section);
}

document.querySelector("#tab-head-view").addEventListener('click', (e) => {
    hideElement(current_profile_section);
    setAsInactive(current_profile_tab_head);
    current_profile_section = "#tab-content-view";
    current_profile_tab_head = "#tab-head-view";
    showElement(current_profile_section);
    setAsActive(current_profile_tab_head);
})

document.querySelector("#tab-head-edit").addEventListener('click', () => {
    hideElement(current_profile_section);
    setAsInactive(current_profile_tab_head);
    current_profile_section = "#tab-content-edit";
    current_profile_tab_head = "#tab-head-edit";
    showElement(current_profile_section);
    setAsActive(current_profile_tab_head);
})

document.querySelector("#tab-head-password").addEventListener('click', () => {
    hideElement(current_profile_section);
    setAsInactive(current_profile_tab_head);
    current_profile_section = "#tab-content-password";
    current_profile_tab_head = "#tab-head-password";
    showElement(current_profile_section);
    setAsActive(current_profile_tab_head);
})


// Profile ends here

document.querySelector("#collect-card").addEventListener('click', () => {
    hideElement(current_section);
    current_section = "#collect-section";
    showElement(current_section);
})

document.querySelector("#weigh-card").addEventListener('click', () => {

    hideElement(weighBridgevalidationElement);
    hideElement(weighBridgevehicleValidationElement);
    hideElement(weighBridgeFarmerValidationElement);
    hideElement(weighTareValidationElement)
    hideElement(weighNetValidationElement)
    hideElement(weighStorageValidationElement)

    hideElement(grossValidationElement)
    hideElement(dateValidation)
    hideElement("#selectEstateValidation")

    hideElement("#selectEmployeeValidation")
    hideElement("#collectionValidation")
    hideElement("#grossEstateValidation")
    hideElement("#tareEstateValidation");
    hideElement("#netEstateValidation")
    hideElement("#storageEstateValidation")
    hideElement("#shipmentDateValidation")
    hideElement("#shipmentVehiclePlateValidation")
    hideElement("#shipmentNumberValidation")

    hideElement("#driverValidation")

    hideElement("#containerNumberValidation")
    hideElement("#nriSealValidation")
    hideElement("#lotValidation")
    hideElement("#dapartureTimeValidation")
    hideElement("#grossShipmentValidation")
    hideElement("#tareShipmentValidation")
    hideElement("#crateValidation")
    hideElement("#shipmentStorageValidation")

    hideElement(current_section);
    current_section = "#weigh-section";
    showElement(current_section);
})

document.querySelector("#my-tasks-card").addEventListener('click', () => {
    hideElement(current_section);
    current_section = "#my-tasks-section";
    showElement(current_section);
})

/**
 * Bottom tab eventlisteners
 */
document.querySelector("#home-icon").addEventListener('click', () => {
    hideElement(current_section);
    current_section = "#home-section";
    showElement(current_section);
})

document.querySelector("#sync-icon").addEventListener('click', () => {
    hideElement(current_section);
    current_section = "#sync-section";
    showElement(current_section);
})

document.querySelector("#announcement-icon").addEventListener('click', () => {
    hideElement(current_section);
    current_section = "#announcement-section";
    showElement(current_section);
})

/**
 * Buy section tab event listener
 */
document.querySelector("#tab-head-cuplumps").addEventListener('click', (e) => {
    hideElement(current_buy_section);
    setAsInactive(current_buy_tab_head);
    current_buy_section = "#tab-content-cuplumps";
    current_buy_tab_head = "#tab-head-cuplumps";
    showElement(current_buy_section);
    setAsActive(current_buy_tab_head);
})

document.querySelector("#tab-head-buy-raw-latex").addEventListener('click', () => {
    hideElement(current_buy_section);
    setAsInactive(current_buy_tab_head);
    current_buy_section = "#tab-content-buy-raw-latex";
    current_buy_tab_head = "#tab-head-buy-raw-latex";
    showElement(current_buy_section);
    setAsActive(current_buy_tab_head);
})

/**
 * Weigh section tab event listener
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

/**
 * Collect section tab event listener
 */
document.querySelector("#tab-head-collect-cuplumps").addEventListener('click', (e) => {
    hideElement(current_collect_section);
    setAsInactive(current_collect_tab_head);
    current_collect_section = "#tab-content-collect-cuplumps";
    current_collect_tab_head = "#tab-head-collect-cuplumps";
    showElement(current_collect_section);
    setAsActive(current_collect_tab_head);
})

document.querySelector("#tab-head-collect-raw-latex").addEventListener('click', () => {
    hideElement(current_collect_section);
    setAsInactive(current_collect_tab_head);
    current_collect_section = "#tab-content-collect-raw-latex";
    current_collect_tab_head = "#tab-head-collect-raw-latex";
    showElement(current_collect_section);
    setAsActive(current_collect_tab_head);
})

/**
 * My Tasks section tab event listener
 */
document.querySelector("#tab-head-task-list").addEventListener('click', (e) => {
    hideElement(current_my_tasks_section);
    setAsInactive(current_my_tasks_tab_head);
    current_my_tasks_section = "#tab-content-task-list";
    current_my_tasks_tab_head = "#tab-head-task-list";
    showElement(current_my_tasks_section);
    setAsActive(current_my_tasks_tab_head);
})

document.querySelector("#tab-head-completed").addEventListener('click', () => {
    hideElement(current_my_tasks_section);
    setAsInactive(current_my_tasks_tab_head);
    current_my_tasks_section = "#tab-content-completed";
    current_my_tasks_tab_head = "#tab-head-completed";
    showElement(current_my_tasks_section);
    setAsActive(current_my_tasks_tab_head);
})

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

const clearSections = () => {
    document.querySelector('.content-wrapper').innerHTML = '';
}

// document.querySelector("#enterWeightButton").addEventListener('click', () => {
//     $('#exampleModal').modal('show');
// })

// document.querySelector("#latex-weightButton").addEventListener('click', () => {
//     $('#latex-collect-weight').modal('show');
// })

function showCamera(toast) {
    Android.showCamera(toast);
}

document.getElementById("gross-buy-tab").addEventListener("click", cameraTakePicture);
document.getElementById("tare-buy-tab").addEventListener("click", cameraTakePicture);

function cameraTakePicture() {
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 100,
        saveToPhotoAlbum: true,
        destinationType: Camera.DestinationType.DATA_URL
    });

    function onSuccess(imageData) {
        var image = document.getElementById('my-image');
        image.src = "data:image/jpeg;base64," + imageData;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
}
//Submiting Weight brige input data

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

    if (gross == "") {
        showElement(grossValidationElement);
        document.getElementById("weigh-section").scrollIntoView();
        return false;
    } else {
        hideElement(grossValidationElement);
        document.getElementById("weigh-section").scrollIntoView();

    }

    if (tare == "") {
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