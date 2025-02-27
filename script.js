let button = document.getElementById("addButton");
let todo = document.getElementById("todoContainer");
let inprogress = document.getElementById("inprogressContainer");
let done = document.getElementById("doneContainer");
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
  displayTask();
  clearInputs();
  //   console.log(taskArray);

  //   function createDiv() {
  //     let title = document.createElement("h2");
  //     let desc = document.createElement("h3");
  //     let status = document.createElement("p");
  //     title.innerHTML = `Title: ${taskTitle}`;
  //     desc.innerHTML = `Description: ${taskDesc}`;
  //     status.innerHTML = `Status: ${taskStatus}`;
  //     todo.appendChild(title);
  //     todo.appendChild(desc);
  //     todo.appendChild(status);
  //   }
  //   createDiv();
}

function displayTask() {
  todo.innerHTML = "";
  inprogress.innerHTML = "";
  done.innerHTML = "";
  taskArray.map((value) => {
    let div = document.createElement("div");
    div.id = "box";
    let title = document.createElement("h2");
    let desc = document.createElement("h3");
    let status = document.createElement("p");
    title.innerHTML = `Title: ${value.Title}`;
    desc.innerHTML = `Description: ${value.desc}`;
    status.innerHTML = `Status: ${value.status}`;
    div.appendChild(title);
    div.appendChild(desc);
    div.appendChild(status);
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
