function sumDigProd(){
   let num = Array.from(arguments);
   let sum = num.reduce((a,b)=> a+b);
   let count = Count(sum.toString().split('').map((value)=>parseInt(value)));
   return count;
}
function Count(number , step = 1){
    let sum;
    if(number.length>1){
        sum = number.reduce((a,b)=> a * b);
        return Count(sum.toString().split('').map((value)=>parseInt(value)),step++);
    } else{
        sum = parseInt(number.join(''));
    }
    return sum;
}

console.log(sumDigProd(16, 28));
console.log(sumDigProd(0));
console.log(sumDigProd(1,2,3,4,5,6));
