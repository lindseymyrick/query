// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './src/redux/reducers';
import rootSaga from './src/redux/sagas';
import {
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import QueryNavigator from './src/navigation/QueryNavigator';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    // tells the saga middleware to use the rootReducer
    // rootSaga contains all of our other reducers
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware),
    )
    // adds all middleware to our project including saga and logger
    ,
);

sagaMiddleware.run(rootSaga);

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});

const fetchFonts = () => Font.loadAsync({
    'open-sans': require('./src/assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./src/assets/fonts/OpenSans-Bold.ttf')
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
        <Provider store={store}>
            <SafeAreaView style={styles.AndroidSafeArea}>
                <QueryNavigator />
            </SafeAreaView>
        </Provider>

    );
}
