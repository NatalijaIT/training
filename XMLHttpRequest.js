function applyCode(code) {

  return new Promise((resolve, reject) => {
    const link = document.querySelector('input[name = "iframe_referer"]').value.match(/dwcont=(.*)/)[1];
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
        reject(console.log('error'));
      };

      newReq.send(formData);
  });
}
applyCode("NEW2GLHT")
.then(
  response => console.log(response),
  error => console.log('error')
);