import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AppHeader from '../components/Header/AppHeader';
import { height, screenStyle, width } from '../config/globalStyles';

const Login = ( ) => {
    
    return (
        <View style={screenStyle}>
            <AppHeader title="Login Page" />
            <Text> Login Page </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default Login;