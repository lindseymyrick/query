import { combineReducers } from 'redux';
import { ColorPropType } from 'react-native';

const quizQuestions = (state = {}, action) => {
    let copy;
    switch (action.type) {
    case 'SET_QUIZ_QUESTIONS':
        copy = Object.assign({}, action.payload);
        return copy;
    default:
        return state;
    }
};

const quizQuestionCategories = (state = {}, action) => {
    let copy;
    switch (action.type) {
    case 'SET_QUIZ_QUESTION_CATEGORIES':
        // copy = Object.assign({}, action.payload);
        // console.log('@@@@',action.payload)
        return action.payload;
    default:
        return state;
    }
};

export default combineReducers({
    quizQuestions,
    quizQuestionCategories,
});