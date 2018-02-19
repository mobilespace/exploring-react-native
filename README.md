# Exploring React Native - MobileSpace

This repo serves as an introduction to React Native for MobileSpace Season 2

In this repo we will explore the RN ecosystem by creating a React Native app using `react-native-cli`, `crna` and `expo`. We will also get started with RN styling and use basic RN components such as View, ScrollView, ListView & Input components.

## Assignment #1

### Objectives

- Intro to React Native, Expo and CRNA
- Intro to RN components & styling

### TODO

- [ ] Create a simple React Native app using any two of the following three methods:
  - [ ] [Vanilla React Native](https://facebook.github.io/react-native/)
  - [ ] [CRNA](https://github.com/react-community/create-react-native-app)
  - [ ] [Expo](https://expo.io)

- [] :star: **Bonus:**

## Getting started

## Vanilla React Native

- Most **control & customization** for a RN app - let's you write native code for iOS (Swift) & Android (Java/Kotlin)
- **Needs XCode & Android Studio** to run the app on your computer on an iOS Simualor or Android Emulator
- **Least beginner friendly but most powerful** way to get started with RN (with respect to setup)

### Setup & Run

```
npm install -g react-native-cli

react-native init VanillaReactNative

cd VanillaReactNative

react-native run-ios
  or
react-native run-android
```

For more details or if you run into trouble, follow [this guide](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies).

<br />

### CRNA

- Most **functional & flexible** of all the options - gives you Expo tooling and also allows your to eject out of the Expo ecosystem and generates iOS & Android code for you
- **Doesn't need XCode & Android Studio** - can scan the QR code on your expo app and run your RN app
- **Most flexible** way to get started with RN

### Setup & Run

```
npm install -g create-react-native-app

create-react-native-app CRNA

cd CRNA

npm start

scan the QR code on the Expo mobile app
  or
npm run ios (needs Xcode)
  or
npm run android (needs Android Studio)
```

For more details or if you run into trouble, follow [this guide](https://github.com/react-community/create-react-native-app#quick-overview).

<br />

### Expo

- Most **feature rich** of all the options - gives you access to Expo tooling & SDK with some really useful feature that work with minimal config
- **Doesn't need XCode & Android Studio** - can scan the QR code on your expo app and run your RN app
- **Easiest & most useful** way to get started with RN

### Setup & Run

```
open up Expo XDE & open your project folder
  or
npm install -g exp
exp start

click share on XDE (top right) & scan QR code on your phone
  or
exp ios (needs Xcode)
  or
exp android (needs Android Studio)
```

For more details or if you run into trouble, follow [this guide](https://docs.expo.io/versions/latest/introduction/installation.html).

<br />

### Completed submissions

- [ ] Ryan Liszewski
- [ ] Thomas Zhu
- [ ] Bhavesh Chowdhury
- [ ] Sukhjit Singh
- [ ] Prakash Gurung
- [ ] Nicholas Szeto
- [ ] Emanuel Saunders
- [ ] William Hua
- [ ] Mitul Savani
- [ ] Jakhongir Khusanov
- [ ] Juan Meza
- [ ] Teodora Caneva
- [ ] Affaan Ghazzali
- [ ] Girish Rawat
- [ ] Karan Gupta

<br />

## Submission

Once you have completed this assignment, please create a new issue on this repo with the title as your name and add the link to your repo in the description. One of the TA's will review your code and add your name to the list of completed submissions if it looks good.

## Problems?

In case you run into any problems or issues, please post it on #questions channel on the MobileSpace Slack.

## Finally

For any other questions about this repo or MobileSpace in general please reach out to [**@monte9**](https://github.com/monte9) on Github.
