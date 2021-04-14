function convert(tem){
    let num = tem.substr(0,tem.length-2);
    if(!tem.match(/(°C)|(°F)/)){
        return "Error";
    }
    else if (tem.match(/(°C)/)){
        return parseInt(num * 9/5 + 32) + "°F" ;
    }
    else if (tem.match(/(°F)/)){
        return parseInt((num-32) * 5 / 9) + "°C" ;
    }
}
console.log(convert("35°C"));
console.log(convert("19°F"));
console.log(convert("33"));
