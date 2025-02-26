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

  todo.innerHTML = "";
  // using map
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
    todo.appendChild(div);
  });

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
  clearInputs();
}
button.addEventListener("click", addTask);

function clearInputs() {
  document.getElementById("title").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("status").value = "";
}
