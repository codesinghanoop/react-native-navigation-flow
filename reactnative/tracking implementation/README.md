# Skoove Coding Challange

## The following rules apply:

Please read the [root readme file](https://github.com/Learnfield-GmbH/CodingChallenge/blob/master/README.md).

## The exercise

Given this existing React Native application which we are providing, you would need to implement the Tracking SDKs of :
1. Mixpanel for both iOS and Android
2. AppsFlyer for iOS

You can decide to choose either some existing React Native wrapper or do a manual implementation.

### Goal
of this exercise is to **answer** as much as possible from the following questions:

1. Mixpanel
    - How much time users spent on each view
    - What is the conversion rate to “Screen F” of the different experiment variants (A and B)
    - Which is the percentage of each selected option on the “Screen A” or “Screen B” 
    - You can select how to design the events and properties
    - Use your name as a value to a “Super Property” called “Candidate”
2. AppsFlyer
    - How many users have been acquired from `[your_name]_LAT_enabled` campaign
    - How many users have been acquired from `[your_name]_LAT_disabled` campaign
    
### Results

of this exercise should be delivered in two ways:
1. a GitHub branch with your implementation
2. a set of visual reports to the tracking tools
    - for Mixpanel please use your name and create a Dashboard which will be a collection of reports that answer the above questions
    - for Appsflyer you can use the installation event in a report and do a breakdown that will show the acquired users from the 2 campaigns mentioned above.

## Access to the Tracking Tools

- **Mixpanel**: by this time you should have already received an invitation to it. The project that you will be working with has the name ["Coding Challenge"](
https://eu.mixpanel.com/report/2384517). The keys that you will need for development are:
    - Project Token: `37375703bbc312770decb39d2194a4ac`
    - Api Secret: `370434c4457820412dc709e5c34e76ba`

- **AppsFlyer**: likewise you should have already received an invitation to it. The project that you will be working with has the name ["SkooveDevelop"](
https://hq1.appsflyer.com/unified-ltv/dashboard/id1430088267). The keys that you will need for development are:
    - Development Key: `nVxwjFVbTkzsgjosRnYMGZ`
    - App ID: `1430088267`


## Run instructions

 
- Android:
  * Have an Android emulator running (quickest way to get started), or a device connected.
  * `cd tracking\ implementation/ && npx react-native run-android`

- iOS:
  * `cd tracking\ implementation/ && npx react-native run-ios` ***or*** open `tracking\ implementation/ios/skoovesCodingChallenge.xcworkspace` in Xcode ***or*** run `xed -b ios`
  * Click on the Run button