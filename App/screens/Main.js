import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Main = () => {

    return(
        <View style={styles.container}>
            <Text> hello world </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Main;