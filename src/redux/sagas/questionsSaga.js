import { put, takeLatest } from 'redux-saga/effects';
import Question from '../../models/question';

function* fetchQuestions(action) {
    try {
        const response = yield fetch(
            'https://query-video-default-rtdb.firebaseio.com/javascript_questions.json'
          );
        const resData = yield response.json();
        const questions = [];
        for (const key in resData){
            questions.push(
                new Question(
                    key,
                    resData[key].text,
              )
            );
        }
        yield put({ type: 'SET_QUIZ_QUESTIONS', payload: resData});
    } catch (error) {
        console.log('error',error)
    }
}

function* fetchQuestionCategories(action) {
    try {
        console.log('here!!!!')
        const response = yield fetch(
            'https://query-video-default-rtdb.firebaseio.com/question_categories.json'
          );
        const resData = yield response.json();
        const questionCategories = [];
        for (const key in resData){
            console.log(resData[key].title)
            questionCategories.push(resData[key])
        }
        yield put({ type: 'SET_QUIZ_QUESTION_CATEGORIES', payload: questionCategories});
    } catch (error) {
        console.log('error',error)
    }
}


function* questionsSaga() {
    yield takeLatest('FETCH_QUESTIONS', fetchQuestions);
    yield takeLatest('FETCH_QUESTION_CATEGORIES', fetchQuestionCategories);
}

export default questionsSaga;
