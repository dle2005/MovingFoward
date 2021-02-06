import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const KeyboardAwareScrollViewTest = ({

}) => {

    return(
        <View style={styles.container}>
            <Text> test </Text>
            <TextInput style={styles.textInput} />
            <TextInput style={styles.textInput} />
            <TextInput style={styles.textInput} />
            <TextInput style={styles.textInput} />
            <TextInput style={styles.textInput} />
            <TextInput style={styles.textInput} />
            <TextInput style={styles.textInput} />
            <TextInput style={styles.textInput} />
            <TextInput style={styles.textInput} />
            <TextInput style={styles.textInput} />
            <TextInput style={styles.textInput} />
            <TextInput style={styles.textInput} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
        justifyContent: 'flex-end'
    },
    textInput: {
        height: 50,
        borderWidth: 1,
        borderColor: 'black'
    }
})

export default KeyboardAwareScrollViewTest;