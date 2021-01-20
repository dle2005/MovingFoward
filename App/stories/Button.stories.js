import React from 'react';
import AppButton from '../components/Button/AppButton';
import { storiesOf } from '@storybook/react-native';
import { Text } from 'react-native';
import { BufferView } from '../Decorator/Decorators';

storiesOf('Button', module)
    .addDecorator(BufferView)
    .add('default', () => (
        <AppButton>
            <Text>
                Button
            </Text>
        </AppButton>
    ));