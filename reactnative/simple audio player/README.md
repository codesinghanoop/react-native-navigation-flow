# Skoove Coding Challange

## The following rules apply:

Please read the [root readme file](https://github.com/Learnfield-GmbH/CodingChallenge/blob/master/README.md).

## The exercise

This consists of several parts. The UI is rendered in a React Native application while some audio playback is done on the Native side. The application is able to load data from a server and playback the associated audio content.

### React Native Part

1. Fetch the data from the given file<sup>1</sup>
2. Show the content of this dynamic json in a scrollable list
3. Upon clicking on one of the list entries, the application shall navigate to a new screen
4. This new screen displays the content of the selected element. Additionally it shows:
   - A play button on top of the cover image which starts / stops the playback of the associated audio file
   - Audio playback should be done on the native side (see 5.)
   - A position slider which updates its position depending on the position of the currently playing audio. It should also be able to control the current audio position while playing back<sup>2</sup>
   - The current play time and the audio duration<sup>2</sup> 

### Native Part 

5. Load, play, pause the given audio file
6. Notify the React Native part about play position updates<sup>2</sup>

### Footnotes

<sup>1</sup>You can find the [manifest file here](data/manifest.json)

<sup>2</sup>Update the value at an appropiate frequency

### User Interface Mockup
![Simple audio player mockup][Simple audio player mockup]

[Simple audio player mockup]: mockup.jpg
