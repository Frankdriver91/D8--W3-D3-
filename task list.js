form.onsubmit = function (e) {
  e.preventDefault();
};

const btnClicked = function (e) {
  console.log("Al click aggiungi la task()", e);
  console.log(e.target);
  e.target.innerText = "Task aggiunto!";
};

const btn1 = document.getElementById("button");
btn1.addEventListener("click", btnClicked1);
console.log(btn1);

const task1Input = document.getElementById("task1");
const task2Input = document.getElementById("task2");
const task3Input = document.getElementById("task3");
const task4Input = document.getElementById("task4");
const task5Input = document.getElementById("task5");
const task6Input = document.getElementById("task6");

const task1 = task1Input.value;
const task2 = task2Input.value;
const task3 = task3Input.value;
const task4 = task4Input.value;
const task5 = task5Input.value;
const task6 = task6Input.value;

button.onclick = function (e) {
  const btnClicked = e.target;
  btnClicked.parentNode.remove();
};
