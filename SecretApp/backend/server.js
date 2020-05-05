var express = require('express');
    var bodyParser = require('body-parser');
    var Pusher = require('pusher');

    var app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    var pusher = new Pusher({ appId: APP_ID, key: APP_KEY, secret:  APP_SECRET, cluster: eu });

    app.post('/pusher/auth', function(req, res) {
      var socketId = req.body.socket_id;
      var channel = req.body.channel_name;
      var auth = pusher.authenticate(socketId, channel);
      res.send(auth);
    });

    app.post('/message', function(req, res) {
      var message = req.body.message;
      var name = req.body.name;
      pusher.trigger( 'private-chat', 'message-added', { message, name });
      res.sendStatus(200);
    });

    app.get('/',function(req,res){      
         res.sendFile('/public/index.html', {root: __dirname });
    });

    app.use(express.static(__dirname + '/public'));

    var port = process.env.PORT || 5000;
    app.listen(port, function () {
      console.log(`app listening on port ${port}!`)
    });
We instantiate Pusher by passing in an object that contains the details of our app ID and secret key, which can be found on the App Keys tab in your Pusher dashboard. Pusher also provides a mechanism for authenticating users to a channel at the point of subscription. To do this, we expose an endpoint on the server that will validate the request and respond with a success or failure. This endpoint will be called by Pusher client libraries and can be named anything. We used the default name for this endpoint on Pusher, which is /pusher/auth. The line var auth = pusher.authenticate(socketId, channel); authenticates the client with Pusher and returns an authentication code to the calling client.

To allow this file to run when we start npm, we update package.json with the following value:

    "scripts": {
        "start": "node server.js",
        "test": "echo \"Error: no test specified\" && exit 1"
      }
