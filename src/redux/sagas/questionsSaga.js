import { put, takeLatest } from 'redux-saga/effects';
import Question from '../../models/question';

function* fetchQuestions(action) {
    try {
        console.log('in saga')
        const response = yield fetch(
            'https://query-video-default-rtdb.firebaseio.com/questions.json'
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


function* questionsSaga() {
    yield takeLatest('FETCH_QUESTIONS', fetchQuestions);
}

export default questionsSaga;
