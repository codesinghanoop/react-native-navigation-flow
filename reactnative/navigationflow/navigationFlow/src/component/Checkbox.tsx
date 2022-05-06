import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

type Option = {
    label: string;
    value: boolean;
}

const CheckBoxContainer = ({ data, setSelection }: { data: Array<Option>, setSelection: Function }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState<Array<Option>>([...data])

    const onValueChange = (value: boolean, index: number): void => {
        const arr = data?.map((item) => ({ label: item?.label, value: false }));
        arr[index].value = value;
        setToggleCheckBox([...arr]);
        if(value) {
            setSelection(data[index]?.label)
        } else {
            setSelection('')
        }
    }

    return (
        <View>
            {toggleCheckBox?.map((item, i) =>
            <View style={styles.container}>
                <CheckBox
                  key={item?.label}
                  disabled={false}
                  value={toggleCheckBox[i]?.value}
                  onValueChange={(value) => onValueChange(value, i)}
                />
                <Text style={styles.text}>{item?.label}</Text>
            </View>)}
        </View>
    )
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8
	},
    text: {
        marginLeft: 8
    }
});


export default CheckBoxContainer