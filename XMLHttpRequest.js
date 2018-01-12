function applyCode(code) {

  return new Promise((resolve, reject) => {

    const link = document.querySelector('#cart-items-form').action.match(/dwcont=(.*)/)[1];
    const newReq = new XMLHttpRequest();
    const formData = new FormData();
    const url = "https://www.hottopic.com/cart?dwcont=" + link;
    formData.append("dwfrm_cart_couponCode", code);
    formData.append('dwfrm_cart_addCoupon', 'dwfrm_cart_addCoupon');
    newReq.open('POST', url, true);
    newReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    newReq.onload = function() {
      resolve(this.response);
    };
    newReq.onerror = function() {
      reject(console.log(error));
    };
    newReq.send(formData);
  });
}

applyCode("NEW2GLHT")
.then(
  response => console.log(response),
  error => console.log(error)
);

function removeCode(code) {

  return new Promise((resolve, reject) => {

    const link = document.querySelector('#cart-items-form').action.match(/dwcont=(.*)/)[1];
    const newReq = new XMLHttpRequest();
    const formData = new FormData();
    const url = "https://www.hottopic.com/cart?dwcont=" + link;
    formData.append("dwfrm_cart_couponCode", '');
    formData.append('dwfrm_cart_coupons_i0_deleteCoupon', '');
    newReq.open('POST', url, true);
    newReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    newReq.onload = function() {
      resolve(this.response);
    };
    newReq.onerror = function() {
      reject(console.log(error));
    };
    newReq.send(formData);
  });
}

removeCode("NEW2GLHT")
.then(
  response => console.log(response),
  error => console.log(error)
);

function anotherApplyCode(code) {

  return new Promise((resolve, reject) => {

	  const newReq = new XMLHttpRequest();
    const formData = new FormData();
    const url = `https://www.hottopic.com/on/demandware.store/Sites-hottopic-Site/default/Cart-AddCouponJson?couponCode=${code}&format=ajax`;
    formData.append('couponCode', code);
    formData.append('format', 'ajax');
    newReq.open('GET', url, true);
    newReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    newReq.onload = function() {
      resolve(this.response);
    };
    newReq.onerror = function() {
      reject(console.log(error));
    };
    newReq.send(formData);
  });
}

anotherApplyCode("NEW2GLHT")
.then(
  response => console.log(response),
  error => console.log(error)
);

function anotherRemoveCode(code) {

  return new Promise((resolve, reject) => {

	const newReq = new XMLHttpRequest();
    const formData = new FormData();
    const url = `https://www.hottopic.com/on/demandware.store/Sites-hottopic-Site/default/COBilling-RemoveCouponJson?couponCode=+${code}&format=ajax`;
    formData.append('couponCode', code);
    formData.append('format', 'ajax');
    newReq.open('GET', url, true);
    newReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    newReq.onload = function() {
      resolve(this.response);
    };
    newReq.onerror = function() {
      reject(console.log(error));
    };
    newReq.send(formData);
  });
}

anotherRemoveCode("NEW2GLHT")
.then(
  response => console.log(response),
  error => console.log(error)
);