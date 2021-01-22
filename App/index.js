// export { default } from '../storybook'

import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from './screens/Login';
import Main from './screens/Main';


const Stack = createStackNavigator();

const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    CardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS
                }}
            >
                <Stack.Screen name="Main" component={Main}/>
                <Stack.Screen name="Login" component={Login}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;