function firstRepeat(str){
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        for(let j = i+1 ; j < arr.length ; j++){
            if(arr[i] === arr[j]){
                return arr[i];
            }
        }
    }
    // ASD
    return -1;
}

console.log(firstRepeat("legolas"));
console.log(firstRepeat("Gandalf"));
console.log(firstRepeat("Balrog"));
console.log(firstRepeat("Isildur"));
