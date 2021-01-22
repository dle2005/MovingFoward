import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import AppButton from '../components/Button/AppButton'
import { screenStyle } from '../config/globalStyles';


const Main = ({ navigation }) => {

    return(
        <View style={screenStyle}>
            <Text> hello world </Text>
            <Button title={"Go to Login Page"} onPress={() => {navigation.navigate('Login')}} />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Main;