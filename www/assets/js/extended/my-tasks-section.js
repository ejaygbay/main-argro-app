/**
 * My Tasks section tab eventlistener
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