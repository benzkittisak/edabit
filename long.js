function getHashTags(str){
    str = str.split(' ').map(value=>'#' + value).sort((a,b)=> b.length - a.length);
    let show = [];
    for(i = 0; i < 3 ; i++){
        if(str[i] != undefined){
            show.push(str[i]);
        }
    }
    return show;
}
console.log(getHashTags("How the Avocado Became the Fruit of the Global Trade"));
console.log(getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year"));
console.log(getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit"));
console.log(getHashTags("Visualizing Science"));
