import { useNavigation, useRoute } from '@react-navigation/core'
import React, { ReactElement, useEffect, useState } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { Picker, Loading, CheckboxContainer } from '../../component'
import { SCREENB, SCREENC } from '../../navigation/route'
import store from '../../store'
import { fetchSelection } from '../../store/reducerSlice/selection';
import { colors } from '../../theme/color';
import { choices, options, sampleTextData } from './dummy'

const ScreenB = (): ReactElement => {

    const { params } = useRoute()
    const navigation = useNavigation();
    const { screenName, loading } = useSelector(state => state.selection);
    const { screenName: screenType } = useSelector(state => state.experiment);
    const [selection, setSelection] = useState('');

    console.log('the type is',screenType);
    

    const renderData = () => {
        switch (screenType) {
            case 'screenB1':
                return <Picker data={choices} setSelection={setSelection} />
            case 'screenB2':
                return <CheckboxContainer data={options} setSelection={setSelection} />
            case 'screenB3':
                return <Text>{sampleTextData}</Text>
            default:
                return null;
        }
    }

    const goToScreenC = () => {
        if(selection) {
            store.dispatch(fetchSelection());
        } else if(screenType != 'screenB1' || screenType != 'screenB2') {
            navigation?.navigate(SCREENC, { selection })
        }
    }

    const renderFooter = () => (
        <Icon style={styles.icon} name='chevron-forward-outline' size={44} color={'#000000'} onPress={goToScreenC} />
    )

    //This will take the user to next screen after successful response of selection
    useEffect(() => {
        if(screenName) {
            navigation?.navigate(SCREENC, { selection })
        }
    }, [screenName])

    const getbackColor = () => {
        switch (screenType) {
            case 'screenB1':
                return { backgroundColor: colors.red300 }
            case 'screenB2':
                return { backgroundColor: colors.orange300 }
            case 'screenB3':
                return { backgroundColor: colors.blue300}
            default:
                return { backgroundColor: colors.gray400};
        }
    }

    return (
        <View style={[styles.container, getbackColor()]}>
            {renderData()}
            {renderFooter()}
            <Loading loading={loading} isAbsolute />
        </View>
    )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12
	},
    icon: {
        position: 'absolute',
        right: 10,
        bottom: 10
    }
});


export default ScreenB