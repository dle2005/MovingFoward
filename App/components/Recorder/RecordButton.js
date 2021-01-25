import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { height, width } from '../../config/globalStyles';

const RecordButton = ({
    onPress,
}) => {

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width * 88,
        height: height * 88,
        borderRadius: 60,
        backgroundColor: 'darkblue'
    }
})

export default RecordButton;