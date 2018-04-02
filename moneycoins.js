function convertToCoin(num){
    var number=num
    var output=[]
    var pecahan =[10000,5000,2000,1000,500,200,100,50,20,10,1]
    for(var i=0; i<pecahan.length; i++){
        while(number-pecahan[i]>=0){
            console.log('----')
                output.push(pecahan[i])
                number -= pecahan[i]                
        }
    }
    return output
}
console.log(convertToCoin(543))