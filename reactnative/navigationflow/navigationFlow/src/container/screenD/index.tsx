import CheckBox from '@react-native-community/checkbox'
import React, { ReactElement, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../theme/color'

const ScreenD = (): ReactElement => {

    return (
        <View style={styles.container}>
            <CheckBox style value={true} />
        </View>
    )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        backgroundColor: colors.white
	},
});


export default ScreenD