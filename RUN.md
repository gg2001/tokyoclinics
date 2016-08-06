# Run the app

Prerequisites: [Meteor](https://www.meteor.com/install) 1.4.0.1, [Node.js](https://nodejs.org/en/download/) 4.4.7 and [npm](https://npmjs.com) 3.10.5 must be installed

1- Open a new command line window, and copy and paste this block into it, and hit enter:

```bash
git clone https://github.com/gg2001/Clinics.git
cd Clinics
meteor npm install
touch settings.json
```

Do not close this window.

2- Get a Google Maps api [here](https://console.developers.google.com).

You can do this by creating a new project and giving it a name. Then create a Google Maps JavaScript api [here](https://console.developers.google.com). In order to use this you must press the Go to Credentials button. Make sure to enter in the following information

IMG:

If you are building a large scale app, make sure to add to add the site you will be calling the api from to the Accept requests from these HTTP referrers form. Use the format shown by them. For testing and building small-scale apps it shouldn't be necessary.

IMG:

Then note down the api key somewhere, and hit Done. 

3- Now open the settings.json file that was created in step 1. Copy and paste the following into it:

```json
{
  "public": {
    "googleApiKey": "Your api key"
  }
}
```

Replace the Your api key text with the api key you got in step 2, and save the file.

## For Web

4- Now run the app locally for web by pasting in the following into the command line window we opened in step 1:

```bash
npm start
```

And hit enter. Once it finishes starting up, navigate to [http://localhost:3000/](http://localhost:3000/). If you need to run the app again later, just use this command.

## For Web and iOS

4- Now run the app locally for web and iOS by pasting in the following into the command line window we opened in step 1:

```bash
meteor install-sdk ios
meteor add-platform ios
meteor run ios --settings settings.json
```

And hit enter. Remember, this can only by done on a Mac. Once it finishes starting up, navigate to [http://localhost:3000/](http://localhost:3000/) to see the web version. The iOS version should automatically open in a simulator.

5- If you want to run this app in Xcode so you can ship it to the app store, type in the following:
(if the app from step 4 is running press control+c)

```bash
meteor run ios-device --settings settings.json --mobile-server https://yoursite.com
```

And hit enter. Replace yoursite.com with the site on which this app is deployed.

## Troubleshooting

If the application doesn't run, try resetting the project:

```
meteor reset
```

This clears the logs and the local database. If this still doesn't work try uninstalling and reinstalling meteor:

```
sudo rm /usr/local/bin/meteor
rm -rf ~/.meteor
```

```
curl https://install.meteor.com/ | sh
```

Also make sure that Node.js and npm are at their latest versions (4.4.7 and 3.10.5 respectively)

# Deploy to Heroku 

To deploy to Heroku, follow [these steps](https://medium.com/@gautham.gg/deploy-a-meteor-1-3-application-to-heroku-cda1f68ca20a#.jzq5dzjv6), and between step 7 and 8 enter the following:

```bash
heroku config:add METEOR_SETTINGS="$(cat settings.json)"
```

You can use the ROOT_URL from this for running in Xcode.
