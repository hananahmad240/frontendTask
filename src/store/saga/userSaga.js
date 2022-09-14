import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
const apiURL = "https://jsonplaceholder.typicode.com/todos/1";


function* userSaga() {
    yield takeEvery("GET_USERS_REQUESTED", fetchUsers)
}


function* fetchUsers(action) {
    try {
        console.log("action", action);
        const response = yield call(
            () => {
                return axios({
                    method: "get",
                    url: apiURL
                })
            }
        );
        const users = response.data
        yield put({
            type: "GET_USERS_SUCCESS", users
        })
    } catch (e) {
        yield put({
            type: "GET_USERS_FAILED", message: e.message
        })
    }
}




export default userSaga