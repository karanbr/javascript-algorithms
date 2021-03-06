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

var time1 = performance.now();
addUpToV1(1000000000);
var time2 = performance.now();
console.log(`time elapsed v1: ${(time2 - time1) / 1000} seconds`)

time1 = performance.now();
addUpToV2(1000000000);
time2 = performance.now();
console.log(`time elapsed v2: ${(time2 - time1) / 1000} seconds`)
