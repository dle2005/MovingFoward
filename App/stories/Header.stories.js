import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { BufferView } from '../Decorator/Decorators';
import AppHeader from '../components/Header/AppHeader';
import Icon from 'react-native-vector-icons/AntDesign';

storiesOf('Header', module)
    .addDecorator(BufferView)
    .add('default', () => (
        <AppHeader
            leftIcon={<Icon name="left" size={20} color="#000" />}
            title="회원가입"
        />
    ));