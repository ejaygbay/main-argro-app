var storage = window.localStorage;

function showProfileSection() {
    hideElement(current_section);
    current_section = "#profile-section";
    hideElement("#sidebar");
    hideElement("#sidebar-cover");
    current_weigh_tab_head = "#tab-head-view";
    setAsActive(current_weigh_tab_head);
    var storage = window.localStorage;
    document.getElementById("profileName").value = storage.getItem("userName");
    document.getElementById("lastName").value = storage.getItem("lastName");
    document.getElementById("middleName").value = storage.getItem("middleName");
    document.getElementById("role").value = storage.getItem("role");
    document.getElementById("gang").value = storage.getItem("gang");

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
    var storage = window.localStorage;
    document.getElementById("profileNam").value = storage.getItem("userName");
    document.getElementById("lastNam").value = storage.getItem("lastName");
    document.getElementById("middleNam").value = storage.getItem("middleName");
    document.getElementById("rol").value = storage.getItem("role");
    document.getElementById("gan").value = storage.getItem("gang");
    showElement(current_profile_section);
    setAsActive(current_profile_tab_head);
})

document.querySelector("#tab-head-password").addEventListener('click', () => {
    hideElement(current_profile_section);
    setAsInactive(current_profile_tab_head);
    current_profile_section = "#tab-content-password";
    current_profile_tab_head = "#tab-head-password";
    document.getElementById("userID").value = storage.getItem("userId");
    showElement(current_profile_section);
    setAsActive(current_profile_tab_head);
})