import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const AppTextInput = ({
    style,
    onChangeText,
    ...props
}) => {

    return (
        <TextInput
            style={[styles.textInput, style]}
            {...props}
        />
    )
}

const styles = StyleSheet.create({
    textInput: {
        width: '100%',
        height: 50,
        paddingLeft: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'grey'
    }
})

export default AppTextInput;