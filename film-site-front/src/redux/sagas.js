import { call, put, takeEvery } from 'redux-saga/effects'
import { hideLoader, showLoader, showAlert } from './actions'
import { FETCH_POSTS, REQUEST_POSTS } from './types'

export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker)
}

function* sagaWorker() {
    try {
        yield put(showLoader())
        const payload = yield call(fetchPosts) // такой же как и response.json()
        yield put({ type: FETCH_POSTS, payload })
        yield put(hideLoader())
    } catch (e) {
        yield put(showAlert('EBANINA S SERVEROM'))
        yield put(hideLoader())
    }

}

async function fetchPosts() {
    const response = await fetch('http://localhost:5000/api/films')
    return await response.json()
}