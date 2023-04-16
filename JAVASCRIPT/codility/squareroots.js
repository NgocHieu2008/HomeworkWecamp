const error = 0.000001;

function findSqrt(n) {
    let low = 0;
    let high = n;
    let mid = n;

    while(Math.abs(mid*mid-n) > error ){
        mid = (low+high)/2;
        if(mid*mid>n){
            high = mid;
        }
        if(mid*mid <n){
            low=mid
        }
    }

    return mid
}


function calculate(n){
    var counter = 1;
    while (n<1){
        n = n *10;
        counter = counter *10
    }
    return findSqrt(n)/findSqrt(counter)
}

console.log(calculate(0.5))