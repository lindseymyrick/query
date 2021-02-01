// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import QueryNavigator from './navigation/QueryNavigator';

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});

const fetchFonts = () => Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
});

export default function App() {
    const [dataLoaded, setDataLoaded] = useState(false);

    if (!dataLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setDataLoaded(true)}
                onError={(err) => console.log(err)}
            />
        );
    }

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <QueryNavigator />
        </SafeAreaView>

    );
}
