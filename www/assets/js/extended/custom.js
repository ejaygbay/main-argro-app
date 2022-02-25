let current_section = '#home-section';
var count = 0;
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


function chkInternetStatus() {
    if (navigator.onLine) {
        document.getElementById("wifi-icon").style.color = "white";
    } else {
        console.log("Oops! You're offline. Please check your network connection...");
    }
}


/**
 * General Functions
 */
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