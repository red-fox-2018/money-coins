var MonCo = function(num){
    var arr = [10000,5000,2000,1000,500,200,100,50,20,10,1];
    var satuankoin = [];
    for(let i=0;i<arr.length;i++){
        while(num>=arr[i]){
            num = num-arr[i];
            satuankoin.push(arr[i]);
        }
    }
    return satuankoin;
}


console.log(MonCo(543));
console.log(MonCo(7752));
console.log(MonCo(37454));