import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
} from 'react-native';
import Header from '../components/Header.js';

const LandingScreen = props => {
    return (
        <>
            {/* TODO: Conditionally render user name */}
            <Header title="Hi, Lindsey!" />
            <View>
                <Text> landing screen </Text>
            </View>
        </>
    );
};

export default LandingScreen;