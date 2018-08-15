const
  PAGE_ACCESS_TOKEN = process.env.access_token,  
  request = require('request');

module.exports = {
  persistentMenu: function() {
    var messageData = {
      "persistent_menu":[
        {
          "locale":"default",
          "composer_input_disabled": false,
          "call_to_actions":[
            {
              "type":"postback",
              "title":"Latest Posts",
              "payload":"LATEST_POST_PAYLOAD"
            },
            {
              "title":"Categories",
              "type":"nested",
              "call_to_actions":[
                {
                  "title":"PHP",
                  "type":"postback",
                  "payload":"CAT_PHP_PAYLOAD"
                },
                {
                  "title":"Database",
                  "type":"postback",
                  "payload":"CAT_DB_PAYLOAD"
                },
                {
                  "title":"Python",
                  "type":"postback",
                  "payload":"CAT_PYTHON_PAYLOAD"
                }
              ]
            },
            {
              "type":"web_url",
              "title":"Visit Website",
              "url":"http://thedebuggers.com/"
            }
          ]
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
          console.log("persistentMenu");
        } else {
          console.error("persistentMenu error");
          console.error(response);
          console.error(error);
        }
      });
    }
} 