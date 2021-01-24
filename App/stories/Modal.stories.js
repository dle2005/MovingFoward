import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { BufferView } from '../Decorator/Decorators';
import AppModal from '../components/Modal/AppModal';
import AppModalContainer from '../components/Modal/AppModalContainer';
import { Text } from 'react-native';

storiesOf('Modal', module)
    .addDecorator(BufferView)
    .add('default', () => (
        <AppModalContainer>
            <AppModal
                positiveButton="확인"
                negativeButton="취소"
            >
                <Text> App Modal Test </Text>
            </AppModal>
        </AppModalContainer>
    ));