import React from 'react';
import { StyleSheet, TouchableOpacity,  Platform } from 'react-native';

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
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: 'grey',
        ...Platform.select({
            ios: {
              shadowColor: 'black',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.3,
            },
            android: {
              elevation: 10,
            },
          }),
          borderRadius: 10,
        },
})

export default AppButton;