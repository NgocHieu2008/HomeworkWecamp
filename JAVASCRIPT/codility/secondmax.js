//Find the second maximum number of an array.

function findSecondMax(arr) {
    let max = arr[0];
    let secondMax = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] !== max) {
            secondMax = arr[i];
        }
    }
    return secondMax;
}

//using Math.max() and indexOf() and splice()
function secondMax(arr) {
    let max = Math.max(...arr);
    let maxIndex = arr.indexOf(max);
    arr.splice(maxIndex, 1);
    let secondMax = Math.max(...arr);
    return secondMax;
}


let arr1 = [6,9,10,5];
let arr2 = [6,8,5,6];
let arr3 = [1,1,1,1,1];

console.log(secondMax(arr1));
console.log(findSecondMax(arr2));
console.log(secondMax(arr3));