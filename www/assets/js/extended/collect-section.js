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

document.querySelector("#collect-card").addEventListener('click', () => {
    hideElement(current_section);
    current_section = "#collect-section";
    showElement(current_section);
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