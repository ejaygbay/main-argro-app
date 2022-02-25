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

document.querySelector("#my-tasks-card").addEventListener('click', () => {
    hideElement(current_section);
    current_section = "#my-tasks-section";
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