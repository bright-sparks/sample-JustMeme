# JustMeme

JustMeme is a NativeScript-built iOS and Android app for creating memes and sharing them with your friends and family.

![](assets/ss.png)
![](assets/ss2.png)
![](assets/ss3.png)

## Download

[![](assets/ios-app-store-icon.png)](https://itunes.apple.com/us/app/justmeme/id989340374?mt=8)

## Development

This app was built with the [NativeScript CLI](https://github.com/NativeScript/nativescript-cli). Once you have the [CLI installed](https://github.com/NativeScript/nativescript-cli#installation), use the following commands to setup JustMeme:

```
$ git clone https://github.com/NativeScript/JustMeme.git
$ cd JustMeme
$ tns platform add ios
$ tns platform add android
$ npm install
```

From there you're good to run the app on your device of choice. For instance the following runs the app on an iOS emulator:

```
$ tns run ios --emulator
```

### Linting

JustMeme uses [JSHint](http://jshint.com/) and [JSCS](http://jscs.info/) for code linting. To kick off both run `gulp lint`:

```
$ gulp lint
```