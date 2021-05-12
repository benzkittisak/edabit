function boom(arr){
    return (arr.join('').match(/[7]/g)) ? "Boom!" : "there is no 7 in the array";
}


console.log(boom([1,2,3,4,5,6,7]));
console.log(boom([8, 6, 33, 100]));
console.log(boom([2, 55, 60, 97, 86]));