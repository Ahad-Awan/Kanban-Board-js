let button = document.getElementById("addButton");
let todo = document.getElementById("todoContainer");
let inprogress = document.getElementById("inprogressContainer");
let done = document.getElementById("doneContainer");
let taskArray = [];

let editIndex = null;

function addTask() {
  let taskTitle = document.getElementById("title").value;
  let taskDesc = document.getElementById("desc").value;
  let taskStatus = document.getElementById("status").value;

  if (taskTitle === "" || taskDesc === "" || taskStatus === "") {
    alert("Please enter task name, description and status.");
    return;
  }

  if (editIndex === null) {
    let taskAdd = {
      Title: taskTitle,
      desc: taskDesc,
      status: taskStatus,
    };
    taskArray.push(taskAdd);
  } else {
    taskArray[editIndex] = {
      Title: taskTitle,
      desc: taskDesc,
      status: taskStatus,
    };
    button.innerHTML = "Add Task";
    editIndex = null;
  }

  displayTask();
  clearInputs();
}

function displayTask() {
  todo.innerHTML = "";
  inprogress.innerHTML = "";
  done.innerHTML = "";
  taskArray.map((value, index) => {
    let div = document.createElement("div");
    div.id = "box";
    let title = document.createElement("h2");
    let desc = document.createElement("p");
    let status = document.createElement("p");

    let editBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");
    editBtn.id = "btnEdit";
    deleteBtn.id = "btnDel";
    editBtn.innerText = "Edit";
    deleteBtn.innerText = "Delete";

    title.innerHTML = `Title: ${value.Title}`;
    desc.innerHTML = `Description: ${value.desc}`;
    status.innerHTML = `Status: ${value.status}`;
    div.appendChild(title);
    div.appendChild(desc);
    div.appendChild(status);
    div.appendChild(editBtn);
    div.appendChild(deleteBtn);
    editBtn.addEventListener("click", () => {
      document.getElementById("title").value = value.Title;
      document.getElementById("desc").value = value.desc;
      document.getElementById("status").value = value.status;
      button.innerHTML = "Update task";
      editIndex = index;
    });

    if (value.status === "todo") {
      todo.appendChild(div);
    } else if (value.status === "inprogress") {
      inprogress.appendChild(div);
    } else if (value.status === "done") {
      done.appendChild(div);
    }
  });
}

function clearInputs() {
  document.getElementById("title").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("status").value = "";
}

button.addEventListener("click", addTask);
