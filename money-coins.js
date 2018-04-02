/*
PSEUDOCODE

1. buat variabel berisi array list uang pecahan yang disediakan
2. buat variabel array yang berisi array kosong
3. looping sepanjang array pecahan dari belakang ke depan
  3.a. selama num lebih besar dibanding dengan pecahan[i]
    3.a.i. num dikurangi dengan pecahan[i] dan push pecahan[i] ke dalam variabel array kosong
4. return array
*/

function convertToCoin(num) {
  var pecahan = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000];
  var array = [];

  for (var i = pecahan.length - 1; i >= 0; i--) {
    while(num >= pecahan[i]) {
      num -= pecahan[i];
      array.push(pecahan[i]);
    }
  }
  return array;
}

console.log(convertToCoin(37454));
