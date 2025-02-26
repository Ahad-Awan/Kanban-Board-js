let button = document.getElementById("addButton");
let todo = document.getElementById("todoContainer");
let taskArray = [];
function addTask() {
  let taskTitle = document.getElementById("title").value;
  let taskDesc = document.getElementById("desc").value;
  let taskStatus = document.getElementById("status").value;

  if (taskTitle === "" || taskDesc === "" || taskStatus === "") {
    alert("Please enter task name, description and status.");
    return;
  }
  let taskAdd = {
    Title: taskTitle,
    desc: taskDesc,
    status: taskStatus,
  };
  taskArray.push(taskAdd);
  console.log(taskArray);

  function createDiv() {
    let title = document.createElement("h3");
    let desc = document.createElement("p");
    let status = document.createElement("p");
    title.innerHTML = taskTitle;
    desc.innerHTML = taskDesc;
    status.innerHTML = taskStatus;
    todo.appendChild(title);
    todo.appendChild(desc);
    todo.appendChild(status);
  }
  createDiv();
  clearInputs();
}
button.addEventListener("click", addTask);

function clearInputs() {
  document.getElementById("title").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("status").value = "";
}
