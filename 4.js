function removeLastVowel(text){
    text = text.split(" ");
    for(i=0;i<text.length;i++){
        for(j=text[i].length-1;j>=0;j--){
            if(text[i][j].match(/[aeiou]/)){
                text[i] = text[i].slice(0,j)+text[i].slice(j+1);
                break;
            }
        }
    }
    return text.join(' '); 
}

console.log(removeLastVowel("Those who dare to fail miserably can achieve greatly."));
console.log(removeLastVowel("Love is a serious mental disease."));
console.log(removeLastVowel("Get busy living or get busy dying."));

