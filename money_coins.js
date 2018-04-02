function convertToCoin(nilai){
    var pecahan = [1,10,20,50,100,200,500,1000,2000,5000,10000]

    for(var i=0;i<pecahan.length;i++){
        for(var l=i+1;l<pecahan.length;l++){
            if(pecahan[i]<pecahan[l]){
            var tmp = pecahan[i];
            pecahan[i] = pecahan[l];
            pecahan[l] = tmp;
            }
        }
    }
    var fix = []
    var uang = nilai
    
    for(var k=0;k<pecahan.length;k++){
        while(uang>=pecahan[k]){
            fix.push(pecahan[k])
            uang -= pecahan[k]
        }
    }
    return fix

}

console.log(convertToCoin(543))
//output : [500, 20,20,1,1,1]
console.log(convertToCoin(7752))
//output : [5000, 2000, 500,200, 50,1, 1]
console.log(convertToCoin(37454))
//output : [10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1 ,1, 1,1]