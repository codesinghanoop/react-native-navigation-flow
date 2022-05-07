import * as React from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core';
import { useSelector } from 'react-redux';
import ScreenA from '../container/screenA';
import { SCREENA, SCREENB, SCREENC, SCREEND, CONFIG } from './route';
import ScreenB from '../container/screenB';
import ScreenC from '../container/screenC';
import ScreenD from '../container/screenD';
import { Loading } from '../component';

const Stack = createNativeStackNavigator();


function AppNavigator() {
  const Config = () => {
    const [loading, setLoader] = React.useState(true);
    const navigation = useNavigation();
    const { previousRoute } = useSelector(state => state.experiment)
    const fetchFirstTime = async () => {
      const firstTime = await AsyncStorage.getItem('firstTime')
      if(firstTime === 'true') {
        navigation.replace(previousRoute)
      } else {
        navigation.replace(SCREENA)
      }
      setLoader(false);
      await AsyncStorage.setItem('firstTime', 'true')
    }

    React.useEffect(() => {
      fetchFirstTime()
    }, [])

    return (
      <View>
        <Loading loading={loading} isAbsolute />
      </View>
    )
  }
  return (
      <Stack.Navigator initialRouteName={CONFIG}>
        <Stack.Screen name={CONFIG} component={Config} />
        <Stack.Screen name={SCREENA} component={ScreenA} />
        <Stack.Screen name={SCREENB} component={ScreenB} />
        <Stack.Screen name={SCREENC} component={ScreenC} />
        <Stack.Screen name={SCREEND} component={ScreenD} />
      </Stack.Navigator>
  );
}

export default AppNavigator;