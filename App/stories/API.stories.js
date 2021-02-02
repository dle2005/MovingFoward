import React from 'react';
import { storiesOf } from '@storybook/react-native';
import SoundAPI from '../components/API/SoundAPI';
import { BufferView } from '../Decorator/Decorators';
import StopWatchAPI from '../components/API/StopWatchAPI';
import TimelineAPI from '../components/API/TimelineAPI';
import GeoLocationAPI from '../components/API/GeoLocationAPI';

storiesOf('API', module)
    .addDecorator(BufferView)
    .add('GeoLocationAPI', () => (
       <GeoLocationAPI />
    ))
    .add('TimelineAPI', () => (
       <TimelineAPI />
    ))
    .add('SoundAPI', () => (
       <SoundAPI />
    ))
    .add('StopWatchAPI', () => (
       <StopWatchAPI />
    ));