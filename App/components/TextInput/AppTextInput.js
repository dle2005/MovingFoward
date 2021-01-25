import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import AppText from '../Text/AppText';

const AppTextInput = ({
    style,
    title,
    subTitle,
    subTitleStyle,
    onChangeText,
    ...props
}) => {

    return (
        <View>
            {title &&
                <View style={styles.textContainer}>
                    <AppText style={{ marginBottom: 10 }}>
                        {title}
                    </AppText>
                    <AppText style={{...styles.subTitle, ...subTitleStyle}}>
                        {subTitle}
                    </AppText>
                </View>
            }
            <TextInput
                style={[styles.textInput, style]}
                {...props}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        flexDirection: 'row'
    },  
    subTitle: {
      color: 'lightgrey'  
    },
    textInput: {
        width: '100%',
        height: 50,
        paddingLeft: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'grey'
    }
})

export default AppTextInput;