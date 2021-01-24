// export { default } from '../storybook'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Main from './screens/Main';
import Screen from './screens/Login'


const Stack = createStackNavigator();

const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Main" component={Main}/>
                <Stack.Screen name="Login" component={Screen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;