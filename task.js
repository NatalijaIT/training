const newArray = [];
const codesObj = {};
const listOfElements = [...document.querySelectorAll('.codes-wrapper ul li span')].forEach(el =>
    getTotalPrice(el.innerText, codesObj));

function getTotalPrice(str, codesObj) {
    const originPrice = document.querySelector('.total-wrapper h1 span:nth-child(2)').innerText.replace(/\$/, '');
    let code = str.match(/'(.*)'/)[1];
    let price = parseFloat(str.match(/[0-9]+\.[0-9]{2}/g));
    let discount = originPrice - price;
    codesObj[code] = discount;
    return codesObj
}

function getArrayOfDiscounts(obj) {
    const arr = [];
    let value = 0;
    for(let key in obj) {
        value = obj[key];
        arr.push(value);
    }
    return arr
}

function getBestCodeDiscount(arr) {
    bestPriceObj = {
        bestCodeDiscount: Math.max(...arr)
    };
    return bestPriceObj;
}

function getBestCodeAccordingToDiscount(discountsObj, bestDiscount) {
    const arrayOfBestDiscount = [];
    for (let key in discountsObj) {
        if (discountsObj[key] === bestDiscount.bestCodeDiscount) {
            arrayOfBestDiscount.push(key);
        }
    }
    return bestCodeObj = {
        bestCode: arrayOfBestDiscount
    }
}

function getOriginalPrice() {
    const originPrice = document.querySelector('.total-wrapper h1 span:nth-child(2)').innerText.replace(/\$/, '');
    return originPriceObj = {
        originalPrice: parseFloat(originPrice)
    }
}

const arrayOfDiscounts = getArrayOfDiscounts(codesObj);
const bestDiscount = getBestCodeDiscount(arrayOfDiscounts);
const bestDiscountKey = getBestCodeAccordingToDiscount(codesObj, bestDiscount);
const originalPrice = getOriginalPrice();

newArray.push(codesObj, bestDiscountKey, bestDiscount, originalPrice);
console.log('newArray', newArray);