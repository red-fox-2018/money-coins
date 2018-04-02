function cvtToCoin(number) {
  var coins = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000];
  var newArr = [];
  for (var i = coins.length - 1; i >= 0; i--) {
    while (number >= coins[i]) {
      number -= coins[i];
      newArr.push(coins[i]);
    }
  }
  return newArr;
}


console.log(cvtToCoin(7752));
