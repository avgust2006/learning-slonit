// Реализация функции myFilter
const myFilter = (array, callback) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        result.push(array[i]);
      }
    }
    return result;
  };
  
  // Примеры использования
  const numbers = [1, 2, 3, 4, 5,6,7,8];
  
  // Фильтрация четных чисел
  const evenNumbers = myFilter(numbers, num => num % 2 === 0);
  console.log(evenNumbers); // [2, 4]
  
  // Фильтрация чисел больше 5
  const greaterThanThree = myFilter(numbers, num => num > 5);
  console.log(greaterThanThree); // [4, 5]
  