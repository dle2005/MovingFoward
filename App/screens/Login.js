import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { screenStyle } from '../config/globalStyles';
import AppHeader from '../components/Header/AppHeader'
import Icon from 'react-native-vector-icons/AntDesign';

const Login = ({ navigation }) => {

    return (
        <View style={screenStyle}>
            <AppHeader
                title="회원가입"
                noIcon={false}
                leftIcon={<Icon name="left" size={20} />}
                leftIconPress={() => navigation.goBack()}
            />
            <View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default Login;