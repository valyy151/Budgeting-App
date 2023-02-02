let number = document.getElementById("number");

let select = document.getElementById("select");

let button = document.getElementById("button");

let ul = document.getElementById("ul");

let span = document.getElementById("span");

let plusMinus;
let className;
let description;

let sum = 0;
span.innerText = `${sum}$`;

button.addEventListener("click", () => {
  if (select.value == "income") {
    plusMinus = "+";
    className = "income";
    description = "Income";
    sum = sum += number.valueAsNumber;
  } else if (select.value == "expense") {
    plusMinus = "-";
    className = "expense";
    description = "Expense";
    sum = sum - number.value;
  }
  addLog();
});

//this creates a new li (green or red) depending if its income or expense and puts in the html
function addLog() {
  let newStrong = document.createElement("strong");
  let newSpan = document.createElement("span");
  let newEm = document.createElement("em");
  let newLi = document.createElement("li");

  newStrong.innerText = `${number.value}$`;
  newSpan.innerText = plusMinus;
  newEm.innerText = description;
  newLi.classList.add(className);

  newLi.prepend(newStrong, newSpan, newEm);
  newLi.prepend(newSpan);
  newLi.prepend(newEm);
  ul.prepend(newLi);

  span.innerText = `${sum}$`;
}
