import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { BufferView } from '../Decorator/Decorators';
import AppSlider from '../components/Slider/AppSlider';

storiesOf('Slider', module)
    .addDecorator(BufferView)
    .add('default', () => (
        <AppSlider />
    ));