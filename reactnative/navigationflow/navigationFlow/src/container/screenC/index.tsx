import { useNavigation, useRoute } from '@react-navigation/core'
import React, { ReactElement, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import Loading from '../../component/Loading'
import { SCREENB, SCREEND } from '../../navigation/route'
import store from '../../store'
import { fetchExperiments } from '../../store/reducerSlice/experiment'
import { colors } from '../../theme/color'
import { sampleTextData } from '../screenB/dummy'

const ScreenC = (): ReactElement => {

    const { params } = useRoute();
    const navigation = useNavigation();
    const { sessionId, error } = useSelector(state => state.auth);

    useEffect(() => {
        console.log('id is',sessionId, error);
        
        if(sessionId && !error) {
            setTimeout(() => {
                navigation?.navigate(SCREEND);
            }, 3000)
        }
    }, [])

    return (
        <View style={styles.container}>
            {Boolean(params?.selection) && <Text style={styles.title}>
                {params?.selection}
            </Text>}
            <Text>
                {sampleTextData}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        backgroundColor: colors.green300
	},
    title: {
        width: '70%',
        backgroundColor: 'white',
        textAlign: 'center',
        marginBottom: 16
    }
});


export default ScreenC