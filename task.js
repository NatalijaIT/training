function getTotalPrice1(str) {
    if(typeof(str) === 'string') {
        str = str.replace(',', '');
        str = str.match('[0-9]+\.[0-9]{2}');
        return 'Total price is: ' +str[0] + '$';
    }
    else return NaN;
}
function getTotalPrice2(str) {
    if(typeof(str) === 'string') {
        return 'Total price is: ' +str.replace(/[^0-9.]+/g, '') + '$';
    }
    else return NaN;
}
let price = document.querySelector("#lineTotal_3").innerText;
console.log('First function: ' + getTotalPrice1(price));
console.log('Second function: ' + getTotalPrice2(price));