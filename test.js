
function addUpTo(n){
    let total = 0;
    for(let i = 0; i <= n; i++){
        total = total + i;
    }
    return total;
}

let t1 = performance.now();
console.log(addUpTo(5));