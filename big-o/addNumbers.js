function addUpToV1(n){
    let total = 0;
    for(let i = 0; i <= n; i++){
        total = total + i;
    }
    return total;
}

function addUpToV2(n){
    return n * (n + 1) / 2;
}

let time1 = performance.now();
console.log(addUpToV1(1000000000));
// var time2 = performance.now();
// console.log(`time elapsed: ${(time2 - time1) / 1000} seconds`)
