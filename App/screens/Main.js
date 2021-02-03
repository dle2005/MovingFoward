import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AppModal from '../components/Modal/AppModal';
import AppModalContainer from '../components/Modal/AppModalContainer';

const Main = ({ navigation }) => {
    const [visible, isVisible] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={() => isVisible(false)}>
                <View style={styles.container}>
                    <Text> test </Text>
                </View>
            </TouchableWithoutFeedback>
            <AppModalContainer
                visible={visible}
            >
                <AppModal
                    positiveButton="확인"
                    negativeButton="취소"
                    negativeButtonPress={() => isVisible(false)}
                >
                    <Text> App Modal Test </Text>
                </AppModal>
            </AppModalContainer>
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