function convertToCoin(coin) {
	// body...
	var tampung = []
	var pecahan = [10000,5000,2000,1000,500,200,100,50,20,10,1];
	for(var i=0;i<pecahan.length;i++){
		while(coin>=pecahan[i]){
			coin-= pecahan[i]
			tampung.push(pecahan[i])
		}
	}
	return tampung
}
console.log(convertToCoin(7752));