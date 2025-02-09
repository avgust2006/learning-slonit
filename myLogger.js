function createLogger() {
    
    const messageMassive = [];
  
    // возвращаем обьект с методами
    return {
    log: (message) => messageMassive.push(message),
    getLogs: () => messageMassive,
    };
  }


  function createRandomGenerator(min, max){
   //возвращаем функцию
    return function () {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;;
    return num;
    }

  }

 // проверка logger
 const logger = createLogger();
 logger.log('First message');
 logger.log('Other message');
 console.log(logger.getLogs()); 

 // проверка random

 const randomInRange = createRandomGenerator(10, 30);
console.log(randomInRange()); 
console.log(randomInRange());