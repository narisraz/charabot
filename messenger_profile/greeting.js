const
  PAGE_ACCESS_TOKEN = process.env.access_token,  
  request = require('request');

module.exports = {
  greet: function() {
    var messageData = { 
        "greeting":[
          {
            "locale": "default",
            "text":"Tongasoa {{user_first_name}}!",
          }, {
            "locale":"fr_Fr",
            "text":"Bienvenue {{user_first_name}}!"
          }
        ]
      }
      request({
        uri: 'https://graph.facebook.com/v2.6/me/messenger_profile',
        qs: { access_token: PAGE_ACCESS_TOKEN },
        method: 'POST',
        json: messageData
      }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log("Greeting");
        } else {
          console.error("greeting error");
          console.error(error);
        }
      });
    }
} 