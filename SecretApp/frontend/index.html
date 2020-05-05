**index.html** 

    <!-- template from http://bootsnipp.com/snippets/6eWd -->
    <!DOCTYPE html>
    <html>
    <head>
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <!-- Optional theme -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
        <script
            src="https://code.jquery.com/jquery-2.2.4.min.js"
            integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
            crossorigin="anonymous"></script>
        <!-- Latest compiled and minified JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="style.css">
        <script src="https://cdn.auth0.com/js/lock/10.18.0/lock.min.js"></script>
        <script src="https://js.pusher.com/4.0/pusher.min.js"></script>
        <script src="index.js"></script>
    </head>
    <body>
        <div class="container">
        <div class="row form-group">
            <div class="col-xs-12 col-md-offset-2 col-md-8 col-lg-8 col-lg-offset-2">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <span class="glyphicon glyphicon-comment"></span> <span id="username"></span>
                        <div class="btn-group pull-right">
                            <button type="button" class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                                <span class="glyphicon glyphicon-chevron-down"></span>
                            </button>
                            <ul class="dropdown-menu slidedown">
                                <li><a><span class="glyphicon glyphicon-refresh">
                                </span>Refresh</a></li>
                                <li><a><span class="glyphicon glyphicon-ok-sign">
                                </span>Available</a></li>
                                <li><a><span class="glyphicon glyphicon-remove">
                                </span>Busy</a></li>
                                <li><a><span class="glyphicon glyphicon-time"></span>
                                    Away</a></li>
                                <li class="divider"></li>
                                <li><a id="logout"><span class="glyphicon glyphicon-off"></span>
                                    Sign Out</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="panel-body body-panel">
                        <ul class="chat">

                        </ul>
                    </div>
                    <div class="panel-footer clearfix">
                        <textarea id="message" class="form-control" rows="3"></textarea>
                        <span class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-xs-12" style="margin-top: 10px">
                            <button class="btn btn-warning btn-lg btn-block" id="btn-chat">Send</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script id="new-message" type="text/template">
        <li id="{{id}}" class="right clearfix">
            <div class="chat-body clearfix">
                <div class="header">
                    <small class="text-muted">{{name}}</small>
                </div>
                <p>
                    {{body}}
                </p>
            </div>
        </li>
    </script>
    </body>
    </html>
This file uses template from bootsnip and also includes a script reference to Auth0 Lock <script src="https://cdn.auth0.com/js/lock/10.18.0/lock.min.js"></script>. Lock is a drop-in authentication widget that provides a standard set of behaviours required for and a customisable user interface. It provides a simple way to integrate with Auth0 with very minimal configuration.

We want to allow users to sign in when they enter the application and be able to send messages once they’re authenticated. Add a new file index.js with the following content:

    $(document).ready(function(){
        // Initiating our Auth0Lock
        let lock = new Auth0Lock(
            'CLIENT_ID',
            'CLIENT_DOMAIN',//example: lotus.auth0.com
            {
                auth: {
                    params: {
                        scope: 'openid profile'
                    }   
                },
                autoclose: true,
                closable: false,
                rememberLastLogin: true
            }
        );

        let profile = JSON.parse(localStorage.getItem('profile'));
        let isAuthenticated = localStorage.getItem('isAuthenticated');

        function updateValues(userProfile, authStatus) {
            profile = userProfile;
            isAuthenticated = authStatus;
        }

        if(!isAuthenticated && !window.location.hash){
            lock.show();//show Lock widget
        }

        // Listening for the authenticated event
        lock.on("authenticated", function(authResult) {
            // Use the token in authResult to getUserInfo() and save it to localStorage
            lock.getUserInfo(authResult.accessToken, function(error, profile) {
                if (error) {
                    // Handle error
                    return;
                }

                localStorage.setItem('accessToken', authResult.accessToken);
                localStorage.setItem('profile', JSON.stringify(profile));
                localStorage.setItem('isAuthenticated', true);
                updateValues(profile, true);
                $("#username").html(profile.name);
            });
        });
    });
