const objectUtils = {
//   метод для вычислкния суммы числовых значений
    sumNumeric(obj) {
        let sum = 0;
  
        for (const key in obj) {
          if (typeof obj[key] === "number") {
            sum += obj[key];
          }
        }
        
        return sum;
    },
//   метод для создания массива ключей взависимости от числовых значений
    getSortedNumeric(obj) {
        const sortedKeys = [];
  
        // массив для сохранения ключей обьекта
        for (const key in obj) {
          if (typeof obj[key] === "number") {
            sortedKeys.push(key);
          }
        }
    
        // сортировка массива ключей
        for (let i = 0; i < sortedKeys.length - 1; i++) {
          for (let j = i + 1; j < sortedKeys.length; j++) {
            if (obj[sortedKeys[j]] > obj[sortedKeys[i]]) {
             let temp = sortedKeys[i];
             sortedKeys[i] = sortedKeys[j];
             sortedKeys[j] = temp;
            }
          }
        }
    
        // вывод отсортировнного массива
        const result = [];
        for (const key of sortedKeys) {
          result.push(key); 
        }
        return result;
    }
  
   
  };
  
 
  const data = {
    name: 'Vasya',
    friends: 21,
    likes: 5,
    projects: 7,
    surname:'Petrov'
  };
  
  console.log(objectUtils.getSortedNumeric(data));
  
  
  console.log(objectUtils.sumNumeric(data));
  
  