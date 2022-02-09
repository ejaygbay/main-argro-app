let current_section = '#home-section';
let current_weigh_section = "#tab-content-buy";
let current_weigh_tab_head = "#tab-head-buy";
let current_my_tasks_section = "#tab-content-task-list";
let current_my_tasks_tab_head = "#tab-head-task-list";

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

document.querySelector("#collect-card").addEventListener('click', () => {
    hideElement(current_section);
    current_section = "#collect-section";
    showElement(current_section);
})

document.querySelector("#weigh-card").addEventListener('click', () => {
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

document.querySelector("#enterWeightButton").addEventListener('click', () => {
    $('#exampleModal').modal('show');
})

document.querySelector("#latex-weightButton").addEventListener('click', () => {
    $('#latex-collect-weight').modal('show');
})

function showCamera(toast) {
    Android.showCamera(toast);
}