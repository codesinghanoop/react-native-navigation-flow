import { useNavigation } from '@react-navigation/core'
import React, { ReactElement, useEffect } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import Loading from '../../component/Loading'
import { SCREENB } from '../../navigation/route'
import store from '../../store'
import { fetchExperiments } from '../../store/reducerSlice/experiment'
import { colors } from '../../theme/color'

const ScreenA = (): ReactElement => {

    const { screenName, loading } = useSelector(state => state.experiment);
    const navigation = useNavigation();

    useEffect(() => {
       store.dispatch(fetchExperiments())
    }, [])

    useEffect(() => {
        if(screenName) {
            navigation?.replace(SCREENB, { screenName })
        }
    }, [screenName])

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.yellow400 }}>
            <Loading isAbsolute loading={loading} />
        </View>
    )
}

export default ScreenA