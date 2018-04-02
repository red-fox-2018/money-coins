/*
deklarasi koin = 543
deklarasi pecahan = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000]
deklarasi arrPecahan = []
looping sampai koin = 0
  looping dari i=0 sampai i<pecahan.length
    if(koin < pecahan[i] && koin >= pecahan[i-1]), maka
      masukan pecahan[i-1] ke array arrPecahan
      koin -= pecahan[i-1]
    else if (koin >= 10000), maka
      masukan 10000 ke array arrPecahan
      koin -= 10000
  end loop
end loop
cetak arrPecahan
*/

function convertToCoin(koin){
  let pecahan = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000]
  let arrPecahan = []
  while(koin !== 0){
    for(let i=0; i<pecahan.length; i++){
      if(koin < pecahan[i] && koin >= pecahan[i-1]){
        debugger
        arrPecahan.push(pecahan[i-1])
        koin -= pecahan[i-1]
        // console.log('>>>>>>>>>>>>>',koin)
      }
      else if(koin >= 10000){
        arrPecahan.push(10000)
        koin -= 10000
      }
    }
  }
  console.log(arrPecahan)
}

convertToCoin(543)
convertToCoin(7752)
convertToCoin(37454)
