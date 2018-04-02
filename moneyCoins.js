function convertToCoin(angka) {
  var pecahan=[10000,5000,2000,1000,500,200,100,50,20,10,1]
  var output=[];
  
  var num=angka;
  for(var i=0;i<pecahan.length;i++) {
    while(pecahan[i]<=num) {
    	output.push(pecahan[i]);
    	num=num-pecahan[i];
    }
 } 
return output; 
}

console.log(convertToCoin(543));
console.log(convertToCoin(7752));
console.log(convertToCoin(37454));


