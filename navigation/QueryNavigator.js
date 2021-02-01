/* eslint-disable react/display-name */
import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Colors from '../constants/colors';

import LandingScreen from '../screens/LandingScreen';
import QuizScreen from '../screens/QuizScreen';
import QuizResults from '../screens/QuizResults';

const iOSTab = createBottomTabNavigator();
const androidTab = createMaterialBottomTabNavigator();

const QuizTabNavigator = () => {
    return(
    <NavigationContainer>
        { Platform.OS === 'android'
        ?
        <androidTab.Navigator>
            <androidTab.Screen 
                name="Home" component={LandingScreen} 
                options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                <Ionicons name="home-outline" color={color} size={26} />
            ),
            }} />
            <androidTab.Screen 
                name="Quiz" 
                component={QuizScreen} 
                options={{
                tabBarLabel: 'Quiz',
                tabBarIcon: ({ color }) => (
                <Ionicons name="book-outline" color={color} size={26} />
            ),
            }}   />
            <androidTab.Screen 
                name="Videos" 
                component={QuizResults} 
                options={{
                tabBarLabel: 'Vidoes',
                tabBarIcon: ({ color }) => (
                <Ionicons name="videocam-outline" color={color} size={26} />
            ),
            }}  />
        </androidTab.Navigator>
        :
        <iOSTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
        
                    if (route.name === 'Home') {
                    iconName = "home-outline";
                    } else if (route.name === 'Quiz') {
                    iconName = "book-outline";
                    } else if (route.name === 'Videos') {
                        iconName = "videocam-outline";
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                  })}

                  tabBarOptions={{
                    activeTintColor: Colors.primary,
                    inactiveTintColor: Colors.accent,
                  }}
        >
            <iOSTab.Screen name="Home" component={LandingScreen} />
            <iOSTab.Screen name="Quiz" component={QuizScreen} />
            <iOSTab.Screen name="Videos" component={QuizResults} />
        </iOSTab.Navigator>
        }
    </NavigationContainer>
    );
};


export default QuizTabNavigator;

