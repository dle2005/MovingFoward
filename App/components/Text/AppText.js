import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { fonts } from '../../config/globalStyles';

const AppText = ({
    style,
    weight,
    children,
    ...props
}) => {
    let fontFamily = 'medium'
    if (weight === 'light')
        fontFamily = fonts.NotoSansKR_Light;
    else if (weight === 'bold')
        fontFamily = fonts.NotoSansKR_Bold;

    return (
        <Text
            style={{
                ...styles.default,
                ...style,
            }}
            {...props}
        >
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    default: {
        fontSize: 12,
    }
})

export default AppText;
