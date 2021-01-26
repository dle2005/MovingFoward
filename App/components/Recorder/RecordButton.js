import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { height, width } from '../../config/globalStyles';
import * as Animatable from 'react-native-animatable';

const RecordButton = ({
}) => {
    const Pulse = require('react-native-pulse').default
    const [isActive, setIsActive] = useState(false);

    return (
        <View style={styles.container}>
            {isActive && <Pulse color='blue' numPulses={3} diameter={120} speed={30} duration={2000} /> }
            <TouchableOpacity style={styles.button} onPress={() => setIsActive(!isActive)}>
                
            </TouchableOpacity>
        </View>
    )   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 88,
        height: 88,
        backgroundColor: 'blue',
        borderRadius: 100
    }
})

export default RecordButton;