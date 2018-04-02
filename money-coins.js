function convertToCoin(num) {
  var pecahan = [
    1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000
  ]
  var result = [];
  for(var i = pecahan.length-1; i >= 0; i--) {
    while(num >= pecahan[i]) {
      num -= pecahan[i]
      result.push(pecahan[i])
      if(num == 0) {
        return result
      }
    }
  }
}

console.log(convertToCoin(37454));
