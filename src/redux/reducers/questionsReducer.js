import { combineReducers } from 'redux';

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

export default combineReducers({
    quizQuestions,
});