/*

*/
function convertToCoin(money){
  let pecahan = [1,10,20,50,100,200,500,1000,2000,5000,10000]
  let result = []
  let condition = true
  while (money > 0) {
    for (var i = pecahan.length - 1 ; i >= 0; i--) {
      if (pecahan[i] <= money) {
        money -= pecahan[i]
        result.push(pecahan[i])
        break
      }
    }
  }
  return result
}

console.log(convertToCoin(11000));
