function compsPlay() {
    //  'random' from 0 to 1, digital with fluent point,'floor' down for nearest integer
    const firstComp = Math.floor(Math.random() * 100) + 1; 
    console.log('Компьютер 1 загадал число: ' + firstComp);
  
    let lower = 1; // минимум
    let upper = 100; // максимум
    let secondComp = Math.floor((lower + upper) / 2); // 50
  
    while (true) {
      console.log('Компьютер 2: Попробую число ' + secondComp);
  
      if (firstComp === secondComp) {
        console.log('Компьютер 1: Угадал!');
        break;
      }
  
      if (firstComp < secondComp) {
        console.log('Компьютер 1: Меньше');
        upper = secondComp; // установим верхнюю границу
      } else {
        console.log('Компьютер 1: Больше');
        lower = secondComp; // установим нижнюю границу
      }
  
      // следущее предположение
      secondComp = lower + Math.floor((upper - lower) / 2);
    }
  }
  
  // Run the game
  compsPlay();
  