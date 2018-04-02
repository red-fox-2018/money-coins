/*jshint esversion:6*/

function convertToCoin(num) {

  let arrCoin = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1];
  let result = [];
  for (let i = 0; i < arrCoin.length; i++) {
    while (num >= arrCoin[i]) {
      num -= arrCoin[i];
      result.push(arrCoin[i]);
    }
  }
  return result;
}

// Drive code
console.log(convertToCoin(543));
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752));
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454));
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
