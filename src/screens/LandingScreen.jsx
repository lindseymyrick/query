import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
} from 'react-native';
import { connect } from 'react-redux';
import Header from '../components/Header.js';

const LandingScreen = ({ dispatch }) => {
    useEffect(() => {
        console.log('!!!!!!!!!!!')
        dispatch({ type: 'FETCH_QUESTIONS' });
    })

    return (
    <>
        {/* TODO: Conditionally render user name */}
        <Header title="Hi, Lindsey!" />
        <View>
            <Text> landing screen </Text>
        </View>
    </>
    )
    };

export default connect()(LandingScreen);
