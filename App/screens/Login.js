import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-vector-icons/Ionicons';
import AppHeader from '../components/Header/AppHeader';
import { height, screenStyle, width } from '../config/globalStyles';

const Login = ( ) => {
    
    return (
        <View style={screenStyle}>
            <AppHeader 
                title="Login Page" 
                leftIcon={<Icon name="ios-chevron-back-sharp" size={20}/>}
            />
            <Text> Login Page </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default Login;