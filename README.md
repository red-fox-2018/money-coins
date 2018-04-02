# money-coins

FUNCTION convertToCoin parameter num

SET arrCoin sama dengan nilai 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1
SET result sama dengan []

  LOOP index i = 0, index i kurang dari panjang nilai arrCoin increment satu
    LOOP dimana num lebih besar sama dengan arrCoin index i
      num sama dengan num dikurangi arrCoin index i
      PUSH arrCoin index i ke result
    END LOOP
  END LOOP
  RETURN result
END FUNCTION
