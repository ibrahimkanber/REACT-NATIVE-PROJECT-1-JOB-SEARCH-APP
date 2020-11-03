import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {SavedJobs,Introduction,Jobs} from "./pages"
import { View, Text } from 'react-native'


const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Intro" component={Introduction} />
          <Stack.Screen name="Jobs" component={Jobs} />
          <Stack.Screen name="SavedJobs" component={SavedJobs} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Router;
