import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

export const ScreenF = ({navigation, name}) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {'Nice work! \nPress the Button below to learn something new!'}
    </Text>
    <Button title="Restart" onPress={() => navigation.navigate('Welcome')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginVertical: '20%',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
