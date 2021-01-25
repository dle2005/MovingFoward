import React from 'react';
import { storiesOf } from '@storybook/react-native';
import SoundAPI from '../components/API/SoundAPI';
import { BufferView } from '../Decorator/Decorators';
import StopWatchAPI from '../components/API/StopWatchAPI';

storiesOf('API', module)
    .addDecorator(BufferView)
    .add('SoundAPI', () => (
       <SoundAPI />
    ))
    .add('StopWatchAPI', () => (
       <StopWatchAPI />
    ));