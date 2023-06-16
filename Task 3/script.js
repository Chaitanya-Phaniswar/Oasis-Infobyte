// JavaScript code to handle form submission and tasks
const form = document.getElementById("todoForm");
const title = document.getElementById("title");
const description=document.getElementById('description');
const todoList = document.getElementById("todoList");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const task = {title: title.value.trim(),description: description.value.trim()};
  if (task.title !== "" && task.description !== "") {
    const listItem = createListItem(task);
    todoList.appendChild(listItem);
    title.value = "";
    description.value="";
  }
});

function createListItem(task) {
  const listItem = document.createElement("li");
  const taskTitle = document.createElement("h4");
  taskTitle.textContent = task.title;
  const taskDescription = document.createElement("p");
  taskDescription.textContent = task.description;
  listItem.appendChild(taskTitle);
  listItem.appendChild(taskDescription)
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function() {
    listItem.remove();
  });
  listItem.appendChild(deleteButton);

  return listItem;
}
