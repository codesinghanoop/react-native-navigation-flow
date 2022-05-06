import React, { useState } from 'react';
import {Picker as Slider} from '@react-native-picker/picker';

const Picker = ({ data, setSelection }: { data: Array<string>, setSelection: Function }) => {
    const [selected, setSelected] = useState<string>(data[0]);

    return (
        <Slider
            selectedValue={selected}
            style={{ width: '80%' }}
            onValueChange={(itemValue: string, itemIndex: number) => {
                setSelected(itemValue)
                setSelection(itemValue)
            }}
            >
            {data?.map((item) => <Slider.Item key={item} label={item} value={item} /> )}
        </Slider>
    )
}

export default Picker