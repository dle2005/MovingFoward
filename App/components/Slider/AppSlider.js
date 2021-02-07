import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

const AppSlider = ({

}) => {
    const [myValue, setMyValue] = useState(0);

    return (
        <View>
            <Slider
                style={{ height: 40, width: 300 }}
                value={myValue} // == this.state.value
                onValueChange={(value) => setMyValue(value)} // 슬라이더를 움질일때 출력값 변환
                minimumValue={0} // 최소값 설정
                maximumValue={100} // 최대값 설정
                maximumTrackTintColor='red' // 값이 크면 빨간색
                minimumTrackTintColor='blue' // 값이 작으면 파란색
                step={1} // 1단위로 값이 변경 
                disabled={true}
            />
            <Text> {myValue} </Text>
        </View>

    )
}

export default AppSlider;