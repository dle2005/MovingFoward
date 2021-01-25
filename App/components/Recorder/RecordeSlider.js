import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
import { StyleSheet, View } from 'react-native';
import AppText from '../Text/AppText';

const RecordSlider = ({
    date,
    currentTime,
    remainTime,
    fileLength,
}) => {
    const getValue = () => {
        return Math.floor(currentTime/fileLength)
    }

    return (
        <View>
            <View style={styles.valueContainer}>
                <AppText>
                    {date}
                </AppText>
                <AppText>
                    {fileLength}
                </AppText>
            </View>
            <Slider
                value={getValue}   
                style={styles.slider}
                maximumValue={0}
                maximumValue={100}
                minimumTrackTintColor= 'darkblue'
            />
            <View style={styles.valueContainer}>
                <AppText>
                    {currentTime}
                </AppText>
                <AppText>
                    -{remainTime}
                </AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    slider: {
        width: '100%'
    },
    valueContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default RecordSlider;