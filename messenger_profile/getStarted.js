const
  PAGE_ACCESS_TOKEN = process.env.access_token,  
  request = require('request');

module.exports = {
  start: function() {
    var messageData = { 
        "get_started":{
          "payload":"GET_STARTED_PAYLOAD"
        }
      }
      request({
        uri: 'https://graph.facebook.com/v2.6/me/messenger_profile',
        qs: { access_token: PAGE_ACCESS_TOKEN },
        method: 'POST',
        json: messageData
      }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log("Get started");
        } else {
          console.error("getStarted error");
          console.error(error);
        }
      });
    }
} 