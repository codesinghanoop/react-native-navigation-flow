import React from 'react';
import {SkoovePicker} from '../elements/SkoovePicker';

const programmingLanguages = [
  {
    id: 'c1b1',
    title: 'Python',
    url: 'https://en.wikipedia.org/wiki/Python_(programming_language)',
  },
  {
    id: '3ac68afc',
    title: 'Kotlin',
    url: 'https://en.wikipedia.org/wiki/Kotlin_(programming_language)',
  },
  {
    id: '58694a0f',
    title: 'C++',
    url: 'https://en.wikipedia.org/wiki/C%2B%2B',
  },
  {
    id: '3ad53abb28ba',
    title: 'Swift',
    url: 'https://en.wikipedia.org/wiki/Swift_(programming_language)',
  },
];
export const ScreenB = ({navigation}) => (
  <SkoovePicker
    navigation={navigation}
    pickerOptions={programmingLanguages}
    pickerTheme={'Programming Languages'}
  />
);
