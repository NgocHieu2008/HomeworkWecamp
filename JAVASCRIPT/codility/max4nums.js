//function find max of 4 numbers
function findMax(a, b, c, d) {
    let max = a;
    if (b>max){
        max = b
    }
    if (c>max){
        max = c
    }
    if (d>max){
        max = d
    }
    console.log(max)
}
findMax(4, 2, 9, 7)