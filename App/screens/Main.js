import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import AppButton from '../components/Button/AppButton'
import { screenStyle } from '../config/globalStyles';
import Icon from 'react-native-vector-icons/Ionicons';

const Main = ({ navigation }) => {

    return(
        <View style={[screenStyle, {flex: 1, alignItems: 'center', justifyContent: 'center'}]}>
            <Text> hello world </Text>
            <Button title={"Go to Login Page"} onPress={() => {navigation.navigate('Login')}} />
            <Icon name="recording-outline" size={20} color="#4F8EF7"/>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Main;