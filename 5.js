function alphabetIndex(alp,word){
    let str = word.split('').map((value)=>value.toLowerCase());
    let max = str[0];
    for (const value of str) {
        if(max < value) max = value
    }
    return alp.indexOf(alp.find((value)=>value == max))+1 + max;
}

alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
console.log(alphabetIndex(alphabet, "Flavio"));
console.log(alphabetIndex(alphabet, "Andrey"));
console.log(alphabetIndex(alphabet, "Oscar"));
