import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
const apiURL = "http://localhost:4000";

// TODO get all lists
function* getAllListsSage() {
    yield takeEvery("GET_LISTS_REQUESTED", fetchLists)
}

function* fetchLists(action) {
    try {
        const response = yield call(() => {
            return axios({
                method: "get",
                url: `${apiURL}/list`
            })
        });
        const lists = response.data;
        yield put({
            type: "GET_LISTS_SUCCESS", payload: {
                lists
            }
        })
    } catch (e) {
        yield put({
            type: "GET_LISTS_FAILED", message: e.message
        })
    }
}







// TODO get list by Id
function* getListByIdSage() {
    yield takeEvery("GET_LIST_REQUESTED", fetchListById)
}

function* fetchListById(action) {
    try {
        const response = yield call(() => {
            return axios({
                method: "get",
                url: `${apiURL}/list/${action.payload.id}`
            })
        });
        const list = response.data
        yield put({
            type: "GET_LIST_SUCCESS", payload: { list }
        })
    } catch (e) {
        yield put({
            type: "GET_LIST_FAILED", message: e.message
        })
    }
}




// TODO update list by Id
function* updateListByIdSage() {
    yield takeEvery("UPDATE_LIST_REQUESTED", fetchUpdateListById)
}

function* fetchUpdateListById(action) {
    try {
        const response = yield call(() => {
            return axios({
                method: "put",
                url: `${apiURL}/list/${action.payload.id}`,
                data: action.payload.data
            })
        });
        const lists = response.data
        yield put({
            type: "UPDATE_LIST_SUCCESS", payload: {
                lists
            }
        })
    } catch (e) {
        yield put({
            type: "UPDATE_LIST_FAILED", message: e.message
        })
    }
}




// TODO delete list by Id
function* deleteListByIdSage() {
    yield takeEvery("DELETE_LIST_REQUESTED", fetchDeleteListById)
}

function* fetchDeleteListById(action) {
    try {
        const response = yield call(() => {
            return axios({
                method: "delete",
                url: `${apiURL}/list/${action.payload.id}`,
            })
        });
        const lists = response.data
        yield put({
            type: "DELETE_LIST_SUCCESS", payload: {
                lists
            }
        })
    } catch (e) {
        yield put({
            type: "DELETE_LIST_FAILED", message: e.message
        })
    }
}



// TODO create new list
function* createListSage() {
    yield takeEvery("CREATE_LIST_REQUESTED", createNewList)
}

function* createNewList(action) {
    console.log("action", action);
    try {
        const response = yield call(() => {
            return axios({
                method: "post",
                url: `${apiURL}/list`,
                data: action.payload.data
            })
        });
        const lists = response.data
        yield put({
            type: "CREATE_LIST_SUCCESS", payload: {lists}
        })
    } catch (e) {
        yield put({
            type: "CREATE_LIST_FAILED", message: e.message
        })
    }
}








export {
    getAllListsSage,
    getListByIdSage,
    updateListByIdSage,
    deleteListByIdSage,
    createListSage
}