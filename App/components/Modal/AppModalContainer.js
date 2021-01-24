import React from 'react';
import { Modal, SafeAreaView, StyleSheet } from 'react-native';

const AppModalContainer = ({
    children,
}) => {

    return (
        <Modal
            animationType="fade"
        >
            <SafeAreaView style={styles.container}>
                {children}
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(10, 19, 33, 0.56)',
    },
})

export default AppModalContainer;