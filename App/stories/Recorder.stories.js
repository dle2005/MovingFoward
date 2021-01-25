import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { BufferView } from '../Decorator/Decorators';
import StopWatch from '../components/Recorder/StopWatch';
import RecordSlider from '../components/Recorder/RecordeSlider';
import RecordButton from '../components/Recorder/RecordButton';

storiesOf('Recorder', module)
    .addDecorator(BufferView)
    .add('StopWatch', () => (
       <StopWatch />
    ))
    .add('Button', () => (
      <RecordButton />
    ))
    .add('Slider', () => (
         <RecordSlider 
            date='2021.1.24'
            fileLength='00:10'
            currentTime="0:00"
            remainTime="0:10"
         />
    ));