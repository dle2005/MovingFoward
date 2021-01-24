import React from 'react';
import AppButton from '../components/Button/AppButton';
import { storiesOf } from '@storybook/react-native';
import { BufferView } from '../Decorator/Decorators';
import AppTextInput from '../components/TextInput/AppTextInput';

storiesOf('TextInput', module)
    .addDecorator(BufferView)
    .add('default', () => (
        <AppTextInput
            placeholder="Insert..."
        />
    ));