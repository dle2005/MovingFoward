import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

const image = { uri: 'https://reactjs.org/logo-og.png' };

const Main = ({ navigation }) => {

    return(
        <View style={styles.container}>
            <ImageBackground
                source={image}
                style={{width: 300, height: 200}}
                imageStyle={{borderRadius: 15}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Main;