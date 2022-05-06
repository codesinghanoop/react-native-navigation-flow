import * as React from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenA from '../container/screenA';
import { SCREENA, SCREENB, SCREENC, SCREEND, CONFIG } from './route';
import ScreenB from '../container/screenB';
import ScreenC from '../container/screenC';
import ScreenD from '../container/screenD';
import { Loading } from '../component';
import { useNavigation } from '@react-navigation/core';

const Stack = createNativeStackNavigator();


function AppNavigator() {
  const Config = () => {
    const [loading, setLoader] = React.useState(true);
    const navigation = useNavigation();
    const fetchFirstTime = async () => {
      const firstTime = await AsyncStorage.getItem('firstTime')
      if(firstTime === 'true') {
        navigation.replace(SCREENB)
      } else {
        navigation.replace(SCREENA)
      }
      setLoader(false);
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
      <Stack.Navigator initialRouteName={SCREENA}>
        <Stack.Screen name={CONFIG} component={Config} />
        <Stack.Screen name={SCREENA} component={ScreenA} />
        <Stack.Screen name={SCREENB} component={ScreenB} />
        <Stack.Screen name={SCREENC} component={ScreenC} />
        <Stack.Screen name={SCREEND} component={ScreenD} />
      </Stack.Navigator>
  );
}

export default AppNavigator;