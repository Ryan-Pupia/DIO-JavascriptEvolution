function substituirPares (array) {
    if (!array) return -1;
    if(!array.length) return -1;
    
    for (let i = 0; i < array.length; i ++) {
        if (array[i] % 2 === 0) array[i] = 0;
    }
    return array;
}

let nums = [0, 1, 2, 3, 4, 5, 6];
console.log(substituirPares(nums));