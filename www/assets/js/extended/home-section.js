/**
 * Bottom Tab(Home) Cards eventlisteners
 */
document.querySelector("#buy-card").addEventListener('click', () => {
    hideElement(current_section);
    previous_section = current_section;
    current_section = "#buy-section";
    showElement(current_section);
})

document.querySelector("#collect-card").addEventListener('click', () => {
    hideElement(current_section);
    previous_section = current_section;
    current_section = "#collect-section";
    showElement(current_section);
})

document.querySelector("#weigh-card").addEventListener('click', () => {

    // hideElement(weighBridgevalidationElement);

    // hideElement(weighBridgevehicleValidationElement);
    // hideElement(weighBridgeFarmerValidationElement);
    // hideElement(weighTareValidationElement)
    // hideElement(weighNetValidationElement)
    // hideElement(weighStorageValidationElement)

    // hideElement(grossValidationElement)
    // hideElement(dateValidation)

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
    previous_section = current_section;
    current_section = "#weigh-section";
    showElement(current_section);
})

document.querySelector("#my-tasks-card").addEventListener('click', () => {
    hideElement(current_section);
    previous_section = current_section;
    current_section = "#my-tasks-section";
    showElement(current_section);
})