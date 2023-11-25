var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.telegram.org/bot6059184035:AAHByKr2MUZSW6iNSMBcDPibICMztWLkAGU/sendMessage",
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "cache-control": "no-cache"
    },
    "data": JSON.stringify({
      "chat_id": "-4050432711",
      "text": "Olha só"
    })
  }

function sendText() {
    $.ajax(settings).done(function (response) {
        console.log(response);
    }); 
}