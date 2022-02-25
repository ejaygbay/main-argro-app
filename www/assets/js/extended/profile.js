function showProfileSection() {
    hideElement(current_section);
    current_section = "#profile-section";
    hideElement("#sidebar");
    hideElement("#sidebar-cover");
    current_weigh_tab_head = "#tab-head-view";
    setAsActive(current_weigh_tab_head);
    showElement(current_section);
}

document.querySelector("#tab-head-view").addEventListener('click', (e) => {
    hideElement(current_profile_section);
    setAsInactive(current_profile_tab_head);
    current_profile_section = "#tab-content-view";
    current_profile_tab_head = "#tab-head-view";
    showElement(current_profile_section);
    setAsActive(current_profile_tab_head);
})

document.querySelector("#tab-head-edit").addEventListener('click', () => {
    hideElement(current_profile_section);
    setAsInactive(current_profile_tab_head);
    current_profile_section = "#tab-content-edit";
    current_profile_tab_head = "#tab-head-edit";
    showElement(current_profile_section);
    setAsActive(current_profile_tab_head);
})

document.querySelector("#tab-head-password").addEventListener('click', () => {
    hideElement(current_profile_section);
    setAsInactive(current_profile_tab_head);
    current_profile_section = "#tab-content-password";
    current_profile_tab_head = "#tab-head-password";
    showElement(current_profile_section);
    setAsActive(current_profile_tab_head);
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