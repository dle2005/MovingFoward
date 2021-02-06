import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { BufferView } from '../Decorator/Decorators';
import Timer from '../components/ETC/Timer';

storiesOf('ETC', module)
    .addDecorator(BufferView)
    .add('Timer', () => (
        <Timer sec={180} />
    ));