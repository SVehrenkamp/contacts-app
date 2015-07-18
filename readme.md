# Contacts App
Utilizing the Box.com API.

# Requirements
- Node.js
- NPM
- Bower
- Ionic CLI
- Cordova

# Installation
- Make sure you have the above requirements installed before continuing.
- Clone the project, ```cd /into/cloned/directory```
- ```cd api_server``` and run ```npm install``` to install node dependenceies.
- Add a config.json file at this level containing your client id, client secret and api key
- ```cd ../contactApp``` and run ```npm install``` to install client node dependencies.
- run ```bower install``` to install client dependencies
- if building for native plat forms run the following commands:
-- ```ionic platform add ios``` to add an ios build
-- ```ionic platformm add android``` to add an android build

# Starting the server
- Make sure a your config.json containing your client keys exist first
- Run ```node server``` to start the server
- ```Server is now listening on http://localhost:3000```

# Authenticating
- The Box API uses OAuth2.0 specification for making authenticated requests to their api
- Navgitate to ```http://localhost:3000/auth```
- The app will redirect you to a Box.com sign in page
-- This step only needs to be done once by a master user.  The purpose of this step is to let box.com know that your application is allowed to make requests on your behalf.  Users of this application will not have to do this step, this is purely an initial configuration step.

# Viewing the App
- To view the app in a browser, navigate to ```http://localhost:3000/```
- To view the app on a native device using ionic view, you will need to do the following
-- create an ionic account
-- download the ionic view app from the app store or google play
-- sigin in to the app with your credentials
-- from the command line run ```ionic upload``` and enter your credentials
-- open the ionic view app from your phone and select your app from the list
-- enjoy!

# Native Plat form deployment
- Coming soon!

#Platform Targets and App Deployment
- Comming soon!