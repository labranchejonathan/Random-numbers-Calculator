const firstOperand = document.getElementById("foperand");
const secondOperand = document.getElementById("soperand");
const result = document.getElementById("result");
const generateBtn = document.querySelector(".generatebtn");
const multiplyBtn = document.getElementById("multiplybtn");
const additionBtn = document.getElementById("additionbtn");
const substractionBtn = document.getElementById("substractionbtn");
const divideBtn = document.getElementById("dividebtn");

generateBtn.addEventListener("click", generateMe);
multiplyBtn.addEventListener("click", multiplication);
additionBtn.addEventListener("click", addition);
substractionBtn.addEventListener("click", substraction);
divideBtn.addEventListener("click", division);

function generateMe() {
  firstOperand.innerHTML = Math.floor([Math.random() * 100]);
  secondOperand.innerHTML = Math.floor([Math.random() * 100]);
  if ((generateBtn.clicked = true)) {
    result.innerHTML = "";
  }
}

function multiplication() {
  let operation;
  operation = firstOperand.innerHTML * secondOperand.innerHTML;
  result.innerHTML = operation;
  if (firstOperand.innerHTML === "" && secondOperand.innerHTML === "") {
    alert("You should press Generate button first");
  }
}

function addition() {
  let operation;
  operation = Number(firstOperand.innerHTML) + Number(secondOperand.innerHTML);
  result.innerHTML = operation;
  if (firstOperand.innerHTML === "" && secondOperand.innerHTML === "") {
    alert("You should press Generate button first");
  }
}

function substraction() {
  let operation;
  operation = firstOperand.innerHTML - secondOperand.innerHTML;
  result.innerHTML = operation;
  if (firstOperand.innerHTML === "" && secondOperand.innerHTML === "") {
    alert("You should press Generate button first");
  }
}

function division() {
  let operation;
  operation = firstOperand.innerHTML / secondOperand.innerHTML;
  result.innerHTML = operation.toFixed(2);
  if (firstOperand.innerHTML === "" && secondOperand.innerHTML === "") {
    alert("You should press Generate button first");
  }
}
