
function convertToCoin(input){
  let result = []

  while(input >= 10000){
    result.push(10000)
    input -= 10000
  }

  while(input >= 5000){
    result.push(5000)
    input -= 5000
  }

  while(input >= 2000){
    result.push(2000)
    input -= 2000
  }

  while(input >= 1000){
    result.push(1000)
    input -= 1000
  }

  while(input >= 500){
    result.push(500)
    input -= 500
  }

  while(input >= 200){
    result.push(200)
    input -= 200
  }

  while(input >= 100){
    result.push(100)
    input -= 100
  }

  while(input >= 50){
    result.push(50)
    input -= 50
  }

  while(input >= 20){
    result.push(20)
    input -= 20
  }

  while(input >= 10){
    result.push(10)
    input -= 10
  }
  while(input >= 1){
    result.push(1)
    input -= 1
  }
  return result
}

console.log(convertToCoin(543));
console.log(convertToCoin(7752));
console.log(convertToCoin(37454));
