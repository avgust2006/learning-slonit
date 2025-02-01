// Объявление функций
const addFunction = function(a, b) { return a + b; };
const subtractFunction = function(a, b) { return a - b; };
const multiplyFunction = function(a, b) { return a * b; };
const divideFunction = function(a, b) { return b !== 0 ? a / b : 'Error: Division by zero'; };


const operations = {
  add: addFunction,
  subtract: subtractFunction,
  multiply: multiplyFunction,
  divide: divideFunction,
};

// Функция simpleCalculate
const simpleCalculate = function(a, b, operation) {
  return operation(a, b);
};

// Пример использования
const selectedOperation = "subtract";
console.log(simpleCalculate(6, 2, operations[selectedOperation])); // 18
