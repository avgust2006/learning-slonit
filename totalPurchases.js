// Функция для вычесления сумм, затраченных тремя топ покупателями
function calculateTotalPurchases(purchaseAmounts) {
    let totalAmount = 0; 
    purchaseAmounts.forEach(amount => {
      totalAmount += amount; 
    });
    return totalAmount; 
  }
  
  // массив с данными о суммах покупок
  let topThreeBuyers = [10000, 20000, 30000];
  
  // вывод общей суммы
  console.log(calculateTotalPurchases(topThreeBuyers));
  