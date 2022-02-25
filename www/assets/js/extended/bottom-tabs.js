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