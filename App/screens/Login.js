import React from 'react';
import { View, StyleSheet, Text, Keyboard } from 'react-native';
import { height, width } from '../config/globalStyles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AppTextInput from '../components/TextInput/AppTextInput';

const Login = ({ navigation }) => {

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <AppTextInput
                    title='이름'
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        height: height * 690,
        paddingHorizontal: width * 16,
        justifyContent: 'center',
        alignContent: 'center'
    },
})

export default Login;