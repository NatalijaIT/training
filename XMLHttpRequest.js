function sendRequest(url) {

    return new Promise(function(resolve, reject) {
  
      const newReq = new XMLHttpRequest();
      newReq.open('GET', url, true);
      newReq.onload = function() {
          resolve(this.response);
      };
  
      newReq.onerror = function() {
        reject(console.log('error'));
      };
  
      newReq.send();
    });
  }
  sendRequest("https://dog.ceo/api/breeds/list/all")
    .then(
      response => console.log(JSON.parse(response)),
      error => console.log('error')
    );