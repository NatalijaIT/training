const newReq = new XMLHttpRequest(),
    method = "GET",
    url = "https://dog.ceo/api/breeds/list/all";

newReq.open(method, url, true);
newReq.onreadystatechange = function () {
        if(newReq.readyState === XMLHttpRequest.DONE) {
            console.log(JSON.parse(newReq.responseText));
        };
    };
newReq.send();
