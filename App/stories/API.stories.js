import React from 'react';
import { storiesOf } from '@storybook/react-native';
import SoundAPI from '../components/API/SoundAPI';
import { BufferView } from '../Decorator/Decorators';

storiesOf('API', module)
    .addDecorator(BufferView)
    .add('SoundAPI', () => (
       <SoundAPI />
    ));