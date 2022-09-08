function getMultipliedByTwo(number) {
  return number * 2;
}

const multipliedNumber = getMultipliedByTwo(5);

console.info(multipliedNumber);

function getDividedByTwo(number) {
  return number / 2;
}
const dividedNumber = getDividedByTwo(16);

console.info({ dividedNumber });

function getTodaysSales(totalSales = 150, totalSalesYesterday = 50) {
  const todaySales = totalSales - totalSalesYesterday;

  return todaySales;
}

// console.info(getTodaysSales(150, 100)); grąžina 50, nes numatytoji reikšmė naudojama tik jei nepermetame to parametro
console.info(getTodaysSales());
