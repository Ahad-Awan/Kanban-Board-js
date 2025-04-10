let button = document.getElementById("addButton");
let todo = document.getElementById("todoContainer");
let inprogress = document.getElementById("inprogressContainer");
let done = document.getElementById("doneContainer");
let searchInput = document.getElementById("serach");
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

function displayTask(arr = taskArray) {
  todo.innerHTML = "";
  inprogress.innerHTML = "";
  done.innerHTML = "";

  arr.map((value, index) => {
    let div = document.createElement("div");
    div.id = "box";
    div.classList.add("task");
    div.draggable = true;

    div.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", index);
    });

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

    deleteBtn.addEventListener("click", function () {
      taskArray.splice(index, 1);
      displayTask();
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

["todoContainer", "inprogressContainer", "doneContainer"].forEach((id) => {
  let container = document.getElementById(id);

  container.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  container.addEventListener("drop", (e) => {
    e.preventDefault();
    let index = e.dataTransfer.getData("text/plain");
    let newStatus = id.replace("Container", "");
    taskArray[index].status = newStatus;
    displayTask();
  });
});

searchInput.addEventListener("input", () => {
  let input = searchInput.value.toLowerCase();
  let filteredArr = taskArray.filter((taskAdd) =>
    taskAdd.Title.toLowerCase().includes(input)
  );
  displayTask(filteredArr);
});

function clearInputs() {
  document.getElementById("title").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("status").value = "";
}

button.addEventListener("click", addTask);
