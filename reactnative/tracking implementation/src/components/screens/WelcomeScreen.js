import React, {useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import useApiData from '../../hooks/useApiData';
import {LineSeparator} from '../elements/LineSeparator';
import {SkooveLoader} from '../elements/SkooveLoader';

export const WelcomeScreen = ({
  navigation,
  introEmoji,
  title,
  buttonTitle,
  nextScreen,
  additionalInfo,
}) => {
  const [{data, isLoading}, doFetch] = useApiData();
  useEffect(() => {
    doFetch();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{introEmoji}</Text>
      <Text style={styles.text} numberOfLines={2}>
        {title}
      </Text>
      <LineSeparator />
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <Text>Hold on a second, experiments are loading</Text>
          <SkooveLoader />
        </View>
      ) : (
        <Button
          title={'Press Here to Start'}
          onPress={() => navigation.navigate(data)}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '50%',
    top: '25%',
    paddingHorizontal: '10%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  loadingContainer: {
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
