import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Sound from 'react-native-sound';

const path = '/Users/dlee/Downloads/test.mp3';

let music = new Sound(path, null, (error) => {
    if (error) { console.log('play failed') }
})

const SoundAPI = () => {

    return(
        <View style={styles.container}>
            <Icon
                onPress={() => { music.play() }}
                name={"controller-play"}
                size={40}/>
            <Icon 
                onPress={() => { music.pause() }}
                name={"controller-paus"}
                size={40}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'lightgrey',
        opacity: 0.3,
        flexDirection: 'row'
    }
})

export default SoundAPI;