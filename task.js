function getTotalPrice1(str, regExpr) {
    if(typeof(str) === 'string') {
        const thousandSeparator = ',';
        str = str.replace(thousandSeparator, '');
        str = str.match(regExpr);
        return 'Total price is: ' +str[0] + '$';
    }
    else return NaN;
}
function getTotalPrice2(str, regExpr) {
    if(typeof(str) === 'string') {
        return 'Total price is: ' +str.replace(regExpr, '') + '$';
    }
    else return NaN;
}
function getTotalPrice3(str, regExpr) {
    if(typeof(str) === 'string') {
        const thousandSeparator = ',';
        str = str.replace(thousandSeparator, '');
        return 'Total price is: ' +regExpr.exec(str)[0] + '$';
    }
    else return NaN;
}
let price = document.querySelector("#lineTotal_3").innerText;
console.log('First function: ' + getTotalPrice1(price, '[0-9]+\.[0-9]{2}'));
console.log('Second function: ' + getTotalPrice2(price, /[^0-9.]+/g));
console.log('Third function: ' + getTotalPrice3(price, new RegExp('[0-9]+\.[0-9]{2}','')));