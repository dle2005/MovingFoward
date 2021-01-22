import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { height } from '../../config/globalStyles';

const AppHeader = ({
    title,
    titlePress,
    rightIcon,
    rightIconPress,
    leftIcon,
    leftIconPress,
}) => {

    return(
        <View style={styles.container}>
            {leftIcon && (
                <TouchableOpacity
                    style={styles.leftIcon}
                    onPress={leftIconPress}
                >
                    {leftIcon}
                </TouchableOpacity>
            )}
            <View style={styles.titleContainer}>
                <TouchableOpacity
                    onPress={titlePress}
                    disabled={titlePress ? false : true}
                >
                    <Text style={{ textAlign: 'center' }}> {title} </Text>
                </TouchableOpacity>
            </View>
            {rightIcon && (
                <TouchableOpacity
                    style={styles.rightIcon}
                    onPress={rightIconPress}
                >
                    {rightIcon}
                </TouchableOpacity>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: height * 32,
        marginTop: height * 32,
    },
    titleContainer: {
        height: '100%',
        justifyContent: 'center',
    },
    leftIcon: {
        position: 'absolute',
        top: 1,
        bottom: 1,
        left: 1, 
        right: 1,
        justifyContent: 'center'
    },
    rightIcon: {
        position: 'absolute',
        top: 1,
        bottom: 1,
        left: 1, 
        right: 1,
        justifyContent: 'center'
    }
})

export default AppHeader;