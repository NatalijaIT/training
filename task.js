const newArray = [];
const codesObj = {};
const listOfElements = [...document.querySelectorAll('.codes-wrapper ul li span')].forEach(el =>
    getTotalPrice(el.innerText, codesObj));

function getTotalPrice(str, codesObj) {
    const originPrice = document.querySelector('.total-wrapper h1 span:nth-child(2)').innerText.replace('\$', '');
    console.log(originPrice)
    let code = str.match("'.*'");
    let price = +str.match(/[0-9]+\$/g)[0].replace('\$', '');
    let discount = originPrice - price;
    codesObj[code] = discount;
    return codesObj
}

function getArrayOfDiscounts(obj) {
    let arr = [];
    let value = 0;
    for(let key in obj) {
        value = obj[key];
        arr.push(value)
    }
    return arr
}

function getBestCodeDiscount(arr) {
    bestPriceObj = {
        bestCodeDiscount: Math.max(...arr)
    };
    return bestPriceObj

}

function getBestCodeAccordingToDiscount(discountsObj, bestDiscount) {
    let newKey = 0;
    for (key in discountsObj) {
        if (discountsObj[key] == bestDiscount.getBestCodeDiscount) {
            key

        }
    }
    return bestCodeObj = {
        bestCode: key.replace(/'/g, '')
    }
}

function getOriginalPrice() {
    const originPrice = document.querySelector('.total-wrapper h1 span:nth-child(2)').innerText.replace('\$', '');
    return originPriceObj = {
        originalPrice: +originPrice
    }
}

const arrayOfDiscounts = getArrayOfDiscounts(codesObj);
console.log('arrayOfDiscounts', arrayOfDiscounts)
const bestDiscount = getBestCodeDiscount(arrayOfDiscounts);
console.log('bestDiscount', bestDiscount)
const bestDiscountKey = getBestCodeAccordingToDiscount(codesObj, bestDiscount);
console.log('bestDiscountKey', bestDiscountKey);
const originalPrice = getOriginalPrice();
console.log('originalPrice', originalPrice);
console.log(codesObj);

newArray.push(codesObj, bestDiscountKey, bestDiscount, originalPrice);
console.log('newArray', newArray)