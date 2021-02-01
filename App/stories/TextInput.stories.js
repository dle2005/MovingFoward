import React from 'react';
import AppButton from '../components/Button/AppButton';
import { storiesOf } from '@storybook/react-native';
import { BufferView } from '../Decorator/Decorators';
import AppTextInput from '../components/TextInput/AppTextInput';
import AppTextInputBirth from '../components/TextInput/AppTextInputBirth';

storiesOf('TextInput', module)
    .addDecorator(BufferView)
    .add('default', () => (
        <AppTextInput
            title="이름"
            placeholder="Insert..."
        />
    ))
    .add('birth', () => (
        <AppTextInputBirth

        />
    ));