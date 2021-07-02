function steelStuff(bagWeight, stuff) {
  let n = stuff.length;
  let sortedArr = stuff.sort((a, b) => b.price / b.weight - a.price / a.weight);
  let totalPrice = 0;
  while (bagWeight > 0) {
    for (let i = 0; i < n; i++) {
      if (bagWeight - sortedArr[i].weight >= 0) {
        bagWeight = bagWeight - sortedArr[i].weight;
        totalPrice += sortedArr[i].price;
      } else if (bagWeight < sortedArr[i].weight && bagWeight > 0) {
        totalPrice += sortedArr[i].price / bagWeight;
        bagWeight = 0;
      } else {
        break;
      }
    }
  }
  console.log(totalPrice);
}

// Example:
steelStuff(7, [
  { price: 20, weight: 4 },
  { price: 14, weight: 2 },
  {
    price: 18,
    weight: 3,
  },
  { price: 100, weight: 1 },
]);
