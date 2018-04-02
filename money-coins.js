/* 
set function contertToCoin with num parameter
    set var result to empty array
    set var pecahan withh array value
        10000
        5000
        1000
        500
        200
        100
        50
        20
        10
        1
    loop i from 0 to i<pecahan.length increment
        while num >=i
            push i to result
            num-=i
        end while
    end loop
    return result
end function
*/
function convertToCoin(num){
    var result = []
    var pecahan = [
        10000,
        5000,
        2000,
        1000,
        500,
        200,
        100,
        50,
        20,
        10,
        1
    ]
    for(let i=0;i<pecahan.length;i++){
        while(num>=pecahan[i]){
            result.push(pecahan[i])
            num-=pecahan[i]
        }
    }
    return result
}
console.log(convertToCoin(543));
console.log(convertToCoin(7752));
console.log(convertToCoin(37454));
