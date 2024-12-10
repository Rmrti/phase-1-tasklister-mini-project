document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // Get the form element
  const form = document.getElementById("create-task-form");
  
  // Add event listener for form submission
  form.addEventListener("submit", (event) => {
    // Prevent the default form submission
    event.preventDefault();
    
    // Get the task description input value
    const taskDescription = document.getElementById("new-task-description").value;
    
    // Create a new list item for the task
    const taskItem = document.createElement("li");
    taskItem.textContent = taskDescription;
    
    // Append the task item to the task list (assumes there's an unordered list with id "tasks")
    const taskList = document.getElementById("tasks");
    taskList.appendChild(taskItem);
    
    // Clear the input field after submission
    document.getElementById("new-task-description").value = "";
  });
});
