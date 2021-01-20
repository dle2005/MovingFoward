import React from 'react';
import { StyleSheet, View } from 'react-native';

export const BufferView = (storyFn) => (
    <View style={styles.bufferView}>
        {storyFn()}
    </View>
);

const styles = StyleSheet.create({
    bufferView: {
        flex: 1,
        marginHorizontal: 16,
        marginVertical: 20
    }
})
