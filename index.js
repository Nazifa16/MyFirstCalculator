const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const substract = document.querySelector("#substract");
const add = document.querySelector("#add");
const result = document.querySelector("#result");
const clear = document.querySelector("#clear");
let numbers_arr = [];

multiply.addEventListener("click", function () {
  let value1 = num1.value;
  let value2 = num2.value;

  if (value1 == "" || value2 == "") {
    result.innerText = " Please enter valid numbers.";
  } else {
    numbers_arr.push(value1, value2);
    const mult_result = numbers_arr.reduce(function (operator1, currentValue) {
      return operator1 * currentValue;
    });
    result.innerText = `Result: ${mult_result}`;
  }
});

// " / "
divide.addEventListener("click", function () {
  let value1 = num1.value;
  let value2 = num2.value;

  if (value1 == "" || value2 == "") {
    result.innerText = " Please enter valid numbers.";
  } else {
    numbers_arr.push(value2, value2);
    const divide_result = numbers_arr.reduce(function (
      operator2,
      currentValue
    ) {
      return operator2 / currentValue;
    });
    result.innerText = `Result: ${divide_result}`;
  }
});

// "-"
substract.addEventListener("click", function () {
  let value1 = Number(num1.value);
  let value2 = Number(num2.value);

  if (value1 == "" || value2 == "") {
    result.innerText = " Please enter valid numbers.";
  } else {
    numbers_arr.push(value1, value2);
    const subs_result = numbers_arr.reduce(function (operator3, currentValue) {
      return operator3 - currentValue;
    });

    result.innerText = `Result: ${subs_result}`;
  }
});

// "+"
add.addEventListener("click", function () {
  let value1 = Number(num1.value);
  let value2 = Number(num2.value);

  if (value1 == "" || value2 == "") {
    result.innerText = " Please enter valid numbers.";
  } else {
    numbers_arr.push(value1, value2);
    const add_result = numbers_arr.reduce(function (operator4, currentValue) {
      return operator4 + currentValue;
    });
    result.innerHTML = `Result: ${add_result}`;
  }
});

clear.addEventListener("click", function () {
  num1.value = "";
  num2.value = "";
  result.innerText = "Result: ";
});
