

function convertToCoin(money) {
  let coins = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 1, -1];
  let ans = [];
  
  let idx = 0;
  while (coins[idx] != -1) {
    if (money >= coins[idx]) {
      ans.push(coins[idx]);
      money -= coins[idx];
    } else {
      idx++;
    }
  }
  return ans;
}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
