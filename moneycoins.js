
var koin = [1,10,20,50,200,500,1000,2000,5000,10000]
function MoneyCoin(num){
  let result =[];
  for (var i = koin.length-1; i >= 0 ; i--) {
      while(num >= koin[i]){
        num-=koin[i]
        result.push(koin[i])
      }
  }
return result

}

console.log(MoneyCoin(37454));
console.log(MoneyCoin(7752));
console.log(MoneyCoin(543));
