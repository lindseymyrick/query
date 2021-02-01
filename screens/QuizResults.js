import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
} from 'react-native';
import Header from '../components/Header.js';

const QuizScreen = props => {
    return (
        <>
            {/* TODO: Conditionally render user name */}
            <Header title="Hi, Lindsey!" />
            <View>
                <Text> quiz results screen </Text>
            </View>
        </>
    );
};

export default QuizScreen;