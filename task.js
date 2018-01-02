const codesObj = {};
const listOfElements = [...document.querySelectorAll('.codes-wrapper > ul > li > span')].forEach(el => {
    getTotalPrice(el.innerText, codesObj);
});

function getTotalPrice(str, codesObj) {
    const originPrice = 150;
    let code = str.match(/[A-Z]+[0-9]/g)[0];
    let price = +str.match(/[0-9]+\$/g)[0].replace('\$', '');
    let discount = originPrice - price;
    codesObj[code] = discount;
}
console.log(codesObj);