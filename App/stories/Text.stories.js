import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { BufferView } from '../Decorator/Decorators';
import AppText from '../components/Text/AppText';

storiesOf('Text', module)
    .addDecorator(BufferView)
    .add('default', () => (
        <AppText>
            Hello World
        </AppText>
    ));