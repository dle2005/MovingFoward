import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const AppButton = ({
    style,
    onPress,
    children,
    ...props
}) => {

    return(
        <TouchableOpacity
            style={[styles.button, style]}
            onPress={onPress}
            {...props}
        >
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'grey'
    }
})

export default AppButton;