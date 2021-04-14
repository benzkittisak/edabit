function correctTitle(str){
    let check = ['and','the','of','in'];
    str = str.toLowerCase().split(' ');
    let words = str.map(word => check.includes(word) ? word : word[0].toUpperCase() + word.slice(1)).join(' ');
    return words;
}
console.log(correctTitle("jOn SnoW, kINg IN thE noRth."));
console.log(correctTitle("sansa stark, lady of winterfell."));
console.log(correctTitle("TYRION LANNISTER, HAND OF THE QUEEN."));
