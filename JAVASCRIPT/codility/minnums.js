//tim so tu nhien be nhat khong co trong mang
//ex: [1,5,8,6,9]=>2
//ex: [2,5,8,6,9] =>1

function solution(arr){
    let min = 1;
    arr.sort((a,b)=> a-b);
    for (var i = 0; i < arr.length ; i++){
        if(arr[i]==min){
            min += 1
        }
    }
    return min
}

let arr1 = [-2,-5,-8,-6,-9];
console.log(solution(arr1))
