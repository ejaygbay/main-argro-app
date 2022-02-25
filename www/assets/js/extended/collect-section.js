/**
 * Collect section tab eventlistener
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