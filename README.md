# money-coins
# CREATE function convertToCoin with one parameter money
#   INITIALIZE coin to array of number coin
#   INITIALIZE result to empty array
#   LOOP from 0 to coin and plus one every iteration
#       WHILE money greater than equal coin[i]
#           PUSH coin[i] to result
#           money minus coin[i]
#   RETURN result