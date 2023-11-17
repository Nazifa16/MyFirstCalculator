const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const substract = document.querySelector("#substract");
const add = document.querySelector("#add");
const res = document.querySelector("#result");
const clear = document.querySelector("#clear");
let numbers_arr = [];

function calculate(calc) {
  let value1 = num1.value;
  let value2 = num2.value;

  if (value1 === "" || value2 === "") {
    result.innerText = " Please enter valid numbers.";
  } else {
    numbers_arr = [];
    numbers_arr.push(value1, value2);
    let result;
    if (calc == "*") {
      result = numbers_arr.reduce(function (operator1, currentValue1) {
        return Number(operator1) * Number(currentValue1);
      });
    } else if (calc == "/") {
      result = numbers_arr.reduce(function (operator2, currentValue2) {
        return Number(operator2) / Number(currentValue2);
      });
    } else if (calc == "-") {
      result = numbers_arr.reduce(function (operator3, currentValue3) {
        return Number(operator3) - Number(currentValue3);
      });
    } else if (calc == "+") {
      result = numbers_arr.reduce(function (operator4, currentValue4) {
        return Number(operator4) + Number(currentValue4);
      });
    }
    res.innerText = `Result: ${result}`;
  }
}

clear.addEventListener("click", function () {
  num1.value = "";
  num2.value = "";
  result.innerText = "Result: ";
  numbers_arr = [];
});

multiply.addEventListener("click", function () {
  calculate("*");
});
divide.addEventListener("click", function () {
  calculate("/");
});

substract.addEventListener("click", function () {
  calculate("-");
});

add.addEventListener("click", function () {
  calculate("+");
});
