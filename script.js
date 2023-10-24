const tasklist = document.querySelector("#input-task");
const button = document.querySelector(".addtask");
button.addEventListener("click", () => {
  //tasklist.value;
  console.log(tasklist.value);
  const htmlStr = `<div class="task">
<h4> ${tasklist.value} </h4>
</div>`;
  const taskContainer = document.querySelector("#task-container");
  taskContainer.insertAdjacentHTML("afterbegin", htmlStr);
});
