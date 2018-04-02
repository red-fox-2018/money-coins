function convertToCoin (number){
  var myCoin = [10000,5000,2000,1000,500,200,100,50,20,10,1];
  var hasil = [];

  for(var i = 0 ; i < myCoin.length ; i++){
    while(number >= myCoin[i]){
      number -= myCoin[i];
      hasil.push(myCoin[i]);
    }
  }
  return hasil;
}

console.log(convertToCoin(543))
console.log(convertToCoin(7752))
console.log(convertToCoin(37454))
