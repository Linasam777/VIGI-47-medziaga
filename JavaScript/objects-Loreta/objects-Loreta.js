const bike = {
  price: 250,
  primeCost: 150,
};

function calculateProfit(product) {
  const profit = product.price - product.primeCost;

  return profit;
}

console.log(calculateProfit(bike));
document.body.innerHTML = calculateProfit(bike);
