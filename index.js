const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const substract = document.querySelector("#substract");
const add = document.querySelector("#add");
const result = document.querySelector("#result");
const clear = document.querySelector("#clear");
let numbers_arr = [];

// " * "

multiply.addEventListener("click", function () {
  let value1 = num1.value;
  let value2 = num2.value;

  if (value1 !== "" && value2 !== "") {
    numbers_arr.push(value1, value2);
    const mult_result = numbers_arr.reduce(function (operator1, currentValue1) {
      return Number(operator1) * Number(currentValue1);
    });
    result.innerText = `Result: ${mult_result}`;
  } else {
    result.innerText = " Please enter valid numbers.";
  }
});

// " / "
divide.addEventListener("click", function () {
  let value1 = num1.value;
  let value2 = num2.value;

  if (value1 !== "" && value2 !== "") {
    numbers_arr.push(value1, value2);
    const divide_result = numbers_arr.reduce(function (
      operator2,
      currentValue2
    ) {
      return Number(operator2) / Number(currentValue2);
    });
    result.innerText = `Result: ${divide_result}`;
  } else {
    result.innerText = " Please enter valid numbers.";
  }
});

// "-"
substract.addEventListener("click", function () {
  let value1 = num1.value;
  let value2 = num2.value;

  if (value1 !== "" && value2 !== "") {
    numbers_arr.push(value1, value2);
    const subst_result = numbers_arr.reduce(function (
      operator3,
      currentValue3
    ) {
      return Number(operator3) - Number(currentValue3);
    });
    result.innerText = `Result: ${subst_result}`;
  } else {
    result.innerText = " Please enter valid numbers.";
  }
});

// "+"
add.addEventListener("click", function () {
  let value1 = num1.value;
  let value2 = num2.value;

  if (value1 !== "" && value2 !== "") {
    numbers_arr.push(value1, value2);
    const add_result = numbers_arr.reduce(function (operator4, currentValue4) {
      return Number(operator4) + Number(currentValue4);
    });
    result.innerText = `Result: ${add_result}`;
  } else {
    result.innerText = " Please enter valid numbers.";
  }
});

// "clear button"
clear.addEventListener("click", function () {
  num1.value = "";
  num2.value = "";
  result.innerText = "Result: ";
  numbers_arr = [];
});
