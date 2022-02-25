/**
 * Buy section tab eventlistener
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