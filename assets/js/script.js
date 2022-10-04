



setInterval(function(){
    var today = moment();
    $("#current").text(today.format("[todays date: ] h:mm:ss"))
}, 1000);

var requestUrl = "put cool api in here"

fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
    })