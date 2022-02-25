document.querySelector('.sidebar-toggler').addEventListener('click', () => {
    showElement("#sidebar-cover");
    showElement("#sidebar");

    document.querySelector('#sidebar').style = "transition: width 5s;width: 76%; display: block;"
});

document.querySelector("#sidebar-cover").addEventListener('click', () => {
    hideElement("#sidebar");
    hideElement("#sidebar-cover");
})