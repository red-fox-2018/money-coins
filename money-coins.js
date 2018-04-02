function convertToCoin(num) {
  let arr = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 20, 10, 1];
  let temp = num;
  let coin = [];
  for (let i in arr) {
    while (temp >= arr[i]) {
      coin.push(arr[i]);
      temp -= arr[i];
    } 
  }
  return coin;
}
console.log(convertToCoin(543));
// [500, 20, 20, 1, 1, 1]
console.log(convertToCoin(7752));
// [5000, 2000, 500, 200, 50, 1, 1]
console.log(convertToCoin(37454));
// [10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1]