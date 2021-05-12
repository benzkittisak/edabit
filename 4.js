function removeLastVowel(str){
    let words = str.split(' ')
    let result = [];

    for (const value of words) {
        let pos = 0;
        for(let i = 0 ; i<value.length ; i++){
            if(value[i].match(/[aeiou]/)){
                pos = i;
            }
        }
        result.push(value.replace(value[pos],''));
    }
    return result.join(' ');
}

console.log(removeLastVowel("Those who dare to fail miserably can achieve greatly."));
console.log(removeLastVowel("Love is a serious mental disease."));
console.log(removeLastVowel("Get busy living or get busy dying."));

