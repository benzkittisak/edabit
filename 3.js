function rgbToHex(rgb){
    let temp = rgb.split(',');
    let color = [];
    for (let value of temp) {
        color.push(value.match(/[0-9]/g).join(''));
    }
    console.log(Hex(color));
}
function Hex(arr){
    let hex = "#";
    arr = arr.map(element=>parseInt(element));
    for (const value of arr) {
        hex += (value.toString(16).length == 1)? "0" + value.toString(16) : value.toString(16); 
    }   
    return hex;
}
rgbToHex("rgb(0, 128, 192)")
rgbToHex("rgb(45, 128, 192)")
rgbToHex("rgb(0, 0, 0)")