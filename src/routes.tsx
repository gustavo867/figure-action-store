import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Explore from './screens/Explore';
import Product from './screens/Product';
import Test from './screens/Test/index';

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator mode="modal" headerMode="none">
                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="Explore" component={Explore}/>
                <AppStack.Screen name="Product" component={Product}/>
                <AppStack.Screen name="Test" component={Test}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}