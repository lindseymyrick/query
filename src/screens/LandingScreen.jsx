import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
} from 'react-native';
import { Headline } from 'react-native-paper';
import { connect } from 'react-redux';
import Header from '../components/Header.jsx';
import QuestionCategoryCard from '../components/QuestionCategoryCard';
import pinkImage from '../assets/images/pink_image.jpeg'


const LandingScreen = ({ dispatch, questionCategories }) => {
    useEffect(() => {
        // dispatch({ type: 'FETCH_QUESTIONS' });
        dispatch({ type: 'FETCH_QUESTION_CATEGORIES' });
        // dispatch({ type: 'FETCH_USER' });
    }, [])

    return (
    <>
        {/* TODO: Conditionally render user name */}
        <Header title="Hi, Lindsey!" />
        <View>
            <Headline> Choose Your Category </Headline>
            {questionCategories && 
            questionCategories.map(category => <QuestionCategoryCard title={category.title} src={category.image} />)}
        </View>
        <View>
           {/* <QuestionCategoryCard /> */}
        </View>
    </>
    )
    };

const mapStateToProps = state => ({
    questionCategories: state.questions.quizQuestionCategories,
});

export default connect(mapStateToProps)(LandingScreen);
