document.querySelector('.sidebar-toggler').addEventListener('click', () => {
    showElement("#sidebar-cover");
    showElement("#sidebar");

    document.querySelector('#sidebar').style = "transition: width 5s;width: 76%; display: block;"
});

document.querySelector("#sidebar-cover").addEventListener('click', () => {
    hideElement("#sidebar");
    hideElement("#sidebar-cover");
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