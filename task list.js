form.onsubmit = function (e) {
  e.preventDefault();
};

const btnClicked = function (e) {
  console.log("Al click aggiungi la task()", e);
  console.log(e.target);
  e.target.innerText = "Task aggiunto!";
};

const button1 = document.getElementById("buttonInput");
button1.onclick = function writetask() {
  const task1Input = document.getElementById("task1");
};
console.log(button1);

const task1Input = document.getElementById("task1");
const task2Input = document.getElementById("task2");
const task3Input = document.getElementById("task3");
const task4Input = document.getElementById("task4");
const task5Input = document.getElementById("task5");
const task6Input = document.getElementById("task6");

button.onclick = function (e) {
  const btnClicked = e.target;
  btnClicked.parentNode.remove();
};
