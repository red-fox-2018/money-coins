function convertToCoin(num){
  let coins = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000];
  let arrResult = [];
  for(i = coins.length -1; i>=0; i--){

    while(num >= coins[i]){
      num -= coins[i]
      arrResult.push(coins[i])
    }
  }
  return arrResult

}

console.log(convertToCoin(543));
console.log(convertToCoin(7752));
console.log(convertToCoin(37454));
