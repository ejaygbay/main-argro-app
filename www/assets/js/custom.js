let current_ele = '#home-section';

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
 * Tap bar eventlisteners
 */
document.querySelector("#home-icon").addEventListener('click', () => {
    hideElement(current_ele);
    current_ele = "#home-section";
    showElement(current_ele);
})

document.querySelector("#sync-icon").addEventListener('click', () => {
    hideElement(current_ele);
    current_ele = "#sync-section";
    showElement(current_ele);
})

document.querySelector("#announcement-icon").addEventListener('click', () => {
    hideElement(current_ele);
    current_ele = "#announcement-section";
    showElement(current_ele);
})






const hideElement = (ele) => {
    console.log("Hide:::::", ele);
    document.querySelector(ele).style = "display: none";
}

const showElement = (ele) => {
    document.querySelector(ele).style = "display: block";
}


/**
 * Food menu scripts
 */