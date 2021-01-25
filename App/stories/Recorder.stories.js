import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { BufferView } from '../Decorator/Decorators';
import StopWatch from '../components/Recorder/StopWatch';

storiesOf('Recorder', module)
    .addDecorator(BufferView)
    .add('StopWatch', () => (
       <StopWatch />
    ));