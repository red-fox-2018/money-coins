function convertToCoin(num) {

  const money = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000]

  const result = []

  for (var i = money.length; i >= 0 ; i--) {

    while (num >= money[i]) {

      num -= money[i]
      result.push(money[i])

    }

  }

  return result

}

console.log(convertToCoin(543));
console.log(convertToCoin(7752));
console.log(convertToCoin(37454));
