// const URL = "https://agri-api-middleware.herokuapp.com";
let Estatecount = 0;
let shipmentCount = 0;

document.querySelector("#tab-head-buy").addEventListener('click', (e) => {
    hideElement(current_weigh_section);
    setAsInactive(current_weigh_tab_head);
    current_weigh_section = "#tab-content-buy";
    current_weigh_tab_head = "#tab-head-buy";
    showElement(current_weigh_section);
    setAsActive(current_weigh_tab_head);
    hideElement('#gross-ocr-data');
    hideElement('#tare-ocr-data');
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
        previous_section = current_section;
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
 * Camera buttons eventlisteners
 */
let camera_btn_id = "";
document.getElementById("gross-buy-tab-camera-btn").addEventListener("click", cameraTakePicture);

document.getElementById("gross-buy-tab-camera-btn").addEventListener("click", () => {
    camera_btn_id = '#gross-ocr-data';
})

document.getElementById("tare-buy-tab-camera-btn").addEventListener("click", cameraTakePicture);

document.getElementById("tare-buy-tab-camera-btn").addEventListener("click", () => {
    camera_btn_id = '#tare-ocr-data';
})


function showCamera(toast) {
    Android.showCamera(toast);
}

function cameraTakePicture() {
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 100,
        correctOrientation: true
    })

    function onSuccess(image_data) {
        let element = document.querySelector(`${camera_btn_id}`);
        textocr.recText(0, image_data, onSuccess, onFail);

        function onSuccess(recognizedText) {
            let text_doc = "";
            let text_from_image = recognizedText.blocks.blocktext;
            text_from_image.forEach(ele => text_doc = `${text_doc} ${ele}`);

            if (text_doc.trim().length > 0) {
                extractNumberFromText(text_doc, data => {
                    if (!isNaN(data)) {
                        showElement(camera_btn_id);
                        element.value = data;
                        findNetValue();
                    } else {
                        reopenCamera();
                    }
                })
            } else {
                reopenCamera();
            }
        }

        function onFail(message) {
            Swal.fire({
                icon: 'error',
                title: 'Oops!!! Failed to read image',
                confirmButtonText: "Close"
            })
        }
    }

    function onFail(message) {
        Swal.fire({
            icon: 'error',
            title: 'Oops!!! You closed the camera',
            confirmButtonText: "Close"
        })
    }
}

const extractNumberFromText = (text, callback) => {
    if (text.includes('.')) {
        text = text.split('.');
        let first_txt = text[0];
        let second_txt = text[1];
        let first_txt_num = '';
        let second_txt_num = '';

        if (first_txt.trim().length > 0) {
            for (char of first_txt) {
                if (!isNaN(char)) {
                    first_txt_num += char.trim();
                }
            }

            if (second_txt.trim().length < 1) {
                return callback(first_txt_num);
            }
        } else {
            reopenCamera();
        }

        if (second_txt.trim().length > 0) {
            for (char of second_txt) {
                if (!isNaN(char)) {
                    second_txt_num += char.trim();
                }
            }
            return callback(`${first_txt_num.trim()}.${second_txt_num.trim()}`);
        } else {
            reopenCamera();
        }
    } else {
        let number = '';
        for (char of text) {
            if (!isNaN(char)) {
                number += char.trim();
            }
        }

        if (number.trim().length > 0) {
            return callback(number.trim());
        } else {
            reopenCamera();
        }
    }
}

const findNetValue = () => {
    let gross_weight_value = document.getElementById('gross-ocr-data');
    let tare_weight_value = document.getElementById('tare-ocr-data');

    if (gross_weight_value) {
        gross_weight_value = gross_weight_value.value.trim();
    }

    if (tare_weight_value) {
        tare_weight_value = tare_weight_value.value.trim();
    }

    if (gross_weight_value && tare_weight_value) {
        let net_ele = document.getElementById('net-buy-tab');
        if (gross_weight_value.length > 0 && tare_weight_value.length > 0) {
            net_ele.value = gross_weight_value - tare_weight_value;
            showElement('#net-buy-tab');
        } else {
            hideElement('#net-buy-tab');
        }
    }
}

const reopenCamera = () => {
    Swal.fire({
        icon: 'info',
        title: 'Oops!',
        text: 'No number was found in the image!',
        showCancelButton: true,
        cancelButtonText: '<i class="fas card-icon" style="color: #fff">Close | &#xf00d;</i>',
        cancelButtonColor: 'red',
        confirmButtonText: '<i class="fas card-icon" style="color: #fff">Retake | &#xf030;</i>',
        confirmButtonColor: 'blue',
        focusConfirm: false
    }).then(result => {
        if (result.isConfirmed) {
            cameraTakePicture();
        }
    })
}

const clearElement = (selector) => document.querySelector(selector).value = '';

/**
 * Make request for Farmers
 */
const makeCallAPI = async(url) => {
    return await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },

        })
        .then(response => response.json())
        .then(data => data)
        .catch(err => err.message)
}

const displayFarmers = () => {
    let farmer_ele = document.getElementById('select-farmer-buy-tab');

    JSON.parse(localStorage.getItem('farmers')).forEach(ele => {
        let html = `<option value="${ele.id}">${ele.name}</option>`;
        farmer_ele.insertAdjacentHTML('beforeend', html);
    })
}

const getFarmers = () => {
    if (checkNetworkStatus()) {
        makeCallAPI(`${URL}/farmers`)
            .then(response => {
                if (response.code === 200) {
                    let farmers = [];

                    response.data.forEach(ele => {
                        let famer_name = `${ele.first_name} ${ele.last_name}`;
                        let farmer_id = ele.farmer_id;

                        if (ele.middle_name.trim().length > 0) {
                            famer_name = `${ele.first_name} ${ele.middle_name}. ${ele.last_name}`;
                        }
                        farmers.push({ id: farmer_id, name: famer_name });
                    })

                    localStorage.setItem('farmers', JSON.stringify(farmers));
                    displayFarmers();
                } else {
                    console.log("Req not made", data)
                }
            })
            .catch(err => displayFarmers())
    } else {
        displayFarmers();
    }
}
getFarmers();

function buySubmitWeighBrigeData() {
    let ele_ids = ['date', 'select-farmer-buy-tab', 'vehicle-plate-buy-tab', 'storage-area-buy-tab'];
    // , 'gross-ocr-data', 'tare-ocr-data'

    let empty_element_found = ele_ids.length;

    ele_ids.forEach(ele => {
        let input_value = document.getElementById(ele).value;

        if (validateInput(input_value)) {
            empty_element_found += 1;
            showElement(`#${ele}-validation`);
        } else {
            empty_element_found -= 1;
            hideElement(`#${ele}-validation`);
        }
    })

    if (empty_element_found === 0) {
        let buy_date_input = document.forms["weighBridgeBuy"]["date"].value;
        let buy_farmer_input = document.forms["weighBridgeBuy"]["farmer"].value;
        let vehicle_plate = document.forms["weighBridgeBuy"]["vehicalPlate"].value;
        let gross = document.forms["weighBridgeBuy"]["gross"].value;
        let tare = document.forms["weighBridgeBuy"]["tare"].value;
        let net = gross - tare;
        let net_tonage = gross - tare / 1000;
        let storage = document.forms["weighBridgeBuy"]["storage"].value;

        let today = new Date();
        let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
        let purchase_number = `${buy_date_input} ${today.getHours()} ${today.getMinutes()} ${today.getSeconds()}`;

        let data_to_send = {
            farmer_id: buy_farmer_input,
            vehicle_plate: vehicle_plate,
            date: buy_date_input,
            gross_weight: gross,
            gross_time: time,
            tare_weight: tare,
            tare_time: time,
            net_weight: net,
            net_tonage: net_tonage,
            storage: storage
        }

        showLoader("#loader-cover2");
        showLoader(".loader2");

        // Check network before making request
        if (checkNetworkStatus()) {
            // Send data to API
            makeAPIPostRequest(`${URL}/weighBridgeBuy`, data_to_send)
                .then(response => {
                    hideLoader("#loader-cover2");
                    hideLoader(".loader2");

                    Swal.fire({
                        icon: 'success',
                        title: 'Your work has been sent',
                        showConfirmButton: false,
                        timer: 2000
                    })

                    hideElement('#gross-ocr-data');
                    hideElement('#tare-ocr-data');
                    hideElement('#net-buy-tab');
                    clearElement('#net-buy-tab');
                    ele_ids.forEach(ele => clearElement(`#${ele}`))
                })
                .catch(err => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops!',
                        text: 'Something went wrong!',
                        showCancelButton: true,
                        cancelButtonColor: 'red',
                        confirmButtonText: "Retry",
                        cancelButtonText: "Cancel",
                    }).then(result => {
                        if (result.isConfirmed) {
                            buySubmitWeighBrigeData();
                        }
                    })
                })
        } else {
            // Save data in local storage
            let local_storage_data = [];

            if (!localStorage.getItem('data')) {
                localStorage.setItem('data', '[]');
            }

            local_storage_data = JSON.parse(localStorage.getItem('data'));
            local_storage_data.push(data_to_send);
            localStorage.setItem('data', JSON.stringify(local_storage_data));

            hideLoader("#loader-cover2");
            hideLoader(".loader2");

            Swal.fire({
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 2000
            })

            hideElement('#gross-ocr-data');
            hideElement('#tare-ocr-data');
            hideElement('#net-buy-tab');
            clearElement('#net-buy-tab');
            ele_ids.forEach(ele => clearElement(`#${ele}`))
        }
    }
}

// Ends here

// ESTASTE SECTION STARTS 
function estateSubmitWeighBrigeData() {

    // validation if input field is empty
    // Buy section
    let esateDate = document.forms["weighBridgeEstate"]["esateDate"].value;
    let selectEstate = document.forms["weighBridgeEstate"]["selectEstate"].value;
    let selectEmployee = document.forms["weighBridgeEstate"]["selectEmployee"].value;
    let collection = document.forms["weighBridgeEstate"]["collection"].value;
    let grossEstate = document.forms["weighBridgeEstate"]["grossEstate"].value;
    let tareEstate = document.forms["weighBridgeEstate"]["tareEstate"].value;
    let netEstate = document.forms["weighBridgeEstate"]["netEstate"].value;
    let storageEstate = document.forms["weighBridgeEstate"]["storageEstate"].value;

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

// SHIPMENT
function shipmentSubmitWeighBrigeData() {

    // validation if input field is empty
    // Buy section
    let shipmentDate = document.forms["weighBridgeShipment"]["shipmentDate"].value;
    let shipmentNumber = document.forms["weighBridgeShipment"]["shipmentNumber"].value;
    let shipmentVehiclePlate = document.forms["weighBridgeShipment"]["shipmentVehiclePlate"].value;
    let driver = document.forms["weighBridgeShipment"]["driver"].value;
    let containerNumber = document.forms["weighBridgeShipment"]["containerNumber"].value;
    let nriSeal = document.forms["weighBridgeShipment"]["nriSeal"].value;
    let lot = document.forms["weighBridgeShipment"]["lot"].value;
    let dapartureTime = document.forms["weighBridgeShipment"]["dapartureTime"].value;
    let grossShipment = document.forms["weighBridgeShipment"]["grossShipment"].value;
    let tareShipment = document.forms["weighBridgeShipment"]["tareShipment"].value;
    let crate = document.forms["weighBridgeShipment"]["crate"].value;
    let shipmentStorage = document.forms["weighBridgeShipment"]["shipmentStorage"].value;

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

    if (grossShipment == "No data read") {
        showElement("#grossShipmentValidation");
        document.getElementById("weigh-section").scrollIntoView();
        return false;

    } else {
        // showElement(weighBridgeFarmerValidationElement);
        hideElement("#grossShipmentValidation");
    }

    if (tareShipment == "Camera Data") {
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
    let buydateInput = document.forms["weighBridgeBuy"]["date"].value;
    let buyFarmerInput = document.forms["weighBridgeBuy"]["farmer"].value;
    let vehicalPlate = document.forms["weighBridgeBuy"]["vehicalPlate"].value;
    let gross = document.forms["weighBridgeBuy"]["gross"].value;
    let tare = document.forms["weighBridgeBuy"]["tare"].value;
    let net = document.forms["weighBridgeBuy"]["net"].value;
    let storage = document.forms["weighBridgeBuy"]["storage"].value;

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



        function increment() {

            count++;
            return count;
        }
        let table = document.getElementById("pendingTable");
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(-1);
        let cell2 = row.insertCell(-1);
        let cell3 = row.insertCell(-1);
        let cell4 = row.insertCell(-1);
        increment();
        cell1.innerHTML = count;

        cell2.innerHTML = document.forms["weighBridgeBuy"]["farmer"].value;
        cell3.innerHTML = document.forms["weighBridgeBuy"]["vehicalPlate"].value;
        cell4.innerHTML = document.forms["weighBridgeBuy"]["date"].value;
        $("#myModal").show();

        setTimeout(function() { $("#myModal").hide(); }, 1500);

    }

    // if (gross == "Gross (KG)") {
    //     showElement(grossValidationElement);
    //     document.getElementById("weigh-section").scrollIntoView();
    //     return false;
    // } else {

    //     hideElement(grossValidationElement);
    //     document.getElementById("weigh-section").scrollIntoView();

    // }

    // if (tare == "Tare (KG)") {
    //     showElement(weighTareValidationElement);
    //     document.getElementById("gross-buy").scrollIntoView();
    //     return false;
    // } else {
    //     hideElement(weighTareValidationElement);
    //     document.getElementById("weigh-section").scrollIntoView();

    // }

    // if (net == "") {
    //     showElement(weighNetValidationElement);
    //     document.getElementById("gross-buy").scrollIntoView();
    //     return false;
    // } else {
    //     hideElement(weighNetValidationElement);
    //     document.getElementById("weigh-section").scrollIntoView();

    // }

    // if (storage == "Select a storage") {
    //     showElement(weighStorageValidationElement);
    //     document.getElementById("gross-buy").scrollIntoView();
    //     return false;
    // } else {
    //     hideElement(weighStorageValidationElement);
    //     document.getElementById("weigh-section").scrollIntoView();




    // }

}

function saveAsPending2() {

    // validation if input field is empty
    // Buy section
    let esateDate = document.forms["weighBridgeEstate"]["esateDate"].value;
    let selectEstate = document.forms["weighBridgeEstate"]["selectEstate"].value;
    let selectEmployee = document.forms["weighBridgeEstate"]["selectEmployee"].value;
    let collection = document.forms["weighBridgeEstate"]["collection"].value;
    let grossEstate = document.forms["weighBridgeEstate"]["grossEstate"].value;
    let tareEstate = document.forms["weighBridgeEstate"]["tareEstate"].value;
    let netEstate = document.forms["weighBridgeEstate"]["netEstate"].value;
    let storageEstate = document.forms["weighBridgeEstate"]["storageEstate"].value;

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


    if (collection == "") {
        showElement("#collectionValidation");
        document.getElementById("weigh-section").scrollIntoView();
        return false;
    } else {
        hideElement("#collectionValidation");
        document.getElementById("weigh-section").scrollIntoView();

        function EstateIncrement() {

            Estatecount++;
            return Estatecount;
        }
        let table = document.getElementById("EstatependingTable");
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(-1);
        let cell2 = row.insertCell(-1);
        let cell3 = row.insertCell(-1);
        let cell4 = row.insertCell(-1);
        EstateIncrement();
        cell1.innerHTML = Estatecount;

        cell2.innerHTML = document.forms["weighBridgeEstate"]["selectEstate"].value;
        cell3.innerHTML = document.forms["weighBridgeEstate"]["collection"].value;
        cell4.innerHTML = document.forms["weighBridgeEstate"]["esateDate"].value;

        $("#myModal").show();

        setTimeout(function() { $("#myModal").hide(); }, 1500);

    }

}


function saveAsPending3() {


    // validation if input field is empty
    // Buy section
    let shipmentDate = document.forms["weighBridgeShipment"]["shipmentDate"].value;
    let shipmentNumber = document.forms["weighBridgeShipment"]["shipmentNumber"].value;
    let shipmentVehiclePlate = document.forms["weighBridgeShipment"]["shipmentVehiclePlate"].value;
    let driver = document.forms["weighBridgeShipment"]["driver"].value;
    let containerNumber = document.forms["weighBridgeShipment"]["containerNumber"].value;
    let nriSeal = document.forms["weighBridgeShipment"]["nriSeal"].value;
    let lot = document.forms["weighBridgeShipment"]["lot"].value;
    let dapartureTime = document.forms["weighBridgeShipment"]["dapartureTime"].value;
    let grossShipment = document.forms["weighBridgeShipment"]["grossShipment"].value;
    let tareShipment = document.forms["weighBridgeShipment"]["tareShipment"].value;
    let crate = document.forms["weighBridgeShipment"]["crate"].value;
    let shipmentStorage = document.forms["weighBridgeShipment"]["shipmentStorage"].value;

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

    // *
    if (shipmentVehiclePlate == "") {
        showElement("#shipmentVehiclePlateValidation");
        document.getElementById("weigh-section").scrollIntoView();
        return false;

    } else {
        // showElement(weighBridgeFarmerValidationElement);
        hideElement("#shipmentVehiclePlateValidation");

        function shipmentIncrement() {

            shipmentCount++;
            return shipmentCount;
        }
        let table = document.getElementById("shipmentpendingTable");
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(-1);
        let cell2 = row.insertCell(-1);
        let cell3 = row.insertCell(-1);
        let cell4 = row.insertCell(-1);
        shipmentIncrement();
        cell1.innerHTML = shipmentCount;

        cell2.innerHTML = document.forms["weighBridgeShipment"]["shipmentVehiclePlate"].value;
        cell3.innerHTML = document.forms["weighBridgeShipment"]["shipmentNumber"].value;
        cell4.innerHTML = document.forms["weighBridgeShipment"]["shipmentDate"].value;

        $("#myModal").show();

        setTimeout(function() { $("#myModal").hide(); }, 1500);

    }


}

const validateInput = (data) => data.length < 1 ? true : false;