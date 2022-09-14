import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
const apiURL = "http://localhost:4000";

function* getAllTodosSaga() {
    yield takeEvery("GET_TODOS_REQUESTED", fetchTodosByListId)
}

function* fetchTodosByListId(action) {
    try {
        const response = yield call(() => {
            return axios({
                method: "get",
                url: `${apiURL}/list/${action.payload.listId}/todo`
            })
        });
        const todos = response.data ?? []
        yield put({
            type: "GET_TODOS_SUCCESS", payload: { todos }
        })
    } catch (e) {
        yield put({
            type: "GET_TODOS_FAILED", message: e.message
        })
    }
}







function* getTodoByIdSaga() {
    yield takeEvery("GET_TODO_REQUESTED", fetchTodoById)
}

function* fetchTodoById(action) {
    try {
        const response = yield call(() => {
            return axios({
                method: "get",
                url: `${apiURL}/list/${action.payload.listId}/todo/${action.payload.todoId}`
            })
        });
        const todo = response.data
        yield put({
            type: "GET_TODO_SUCCESS", payload: { todo }
        })
    } catch (e) {
        yield put({
            type: "GET_TODO_FAILED", message: e.message
        })
    }
}





function* updateTodoByIdSaga() {
    yield takeEvery("UPDATE_TODO_REQUESTED", fetchUpdateTodoById)
}

function* fetchUpdateTodoById(action) {
    try {
        const response = yield call(() => {
            return axios({
                method: "put",
                url: `${apiURL}/list/${action.payload.listId}/todo/${action.payload.todoId}`,
                data: action.payload.data
            })
        });
        const todos = response.data
        yield put({
            type: "UPDATE_TODO_SUCCESS", payload: { todos }
        })
    } catch (e) {
        yield put({
            type: "UPDATE_TODO_FAILED", message: e.message
        })
    }
}




function* deleteTodoByIdSaga() {
    yield takeEvery("DELETE_TODO_REQUESTED", fetchDeleteTodoById)
}

function* fetchDeleteTodoById(action) {
    try {
        const response = yield call(() => {
            return axios({
                method: "delete",
                url: `${apiURL}/list/${action.payload.listId}/todo/${action.payload.todoId}`,
            })
        });
        const todos = response.data
        yield put({
            type: "DELETE_TODO_SUCCESS", payload: { todos }
        })
    } catch (e) {
        yield put({
            type: "DELETE_TODO_FAILED", message: e.message
        })
    }
}




function* createTodoByListIdSaga() {
    yield takeEvery("CREATE_TODO_REQUESTED", createTodoByListId)
}

function* createTodoByListId(action) {
    try {
        const response = yield call(() => {
            return axios({
                method: "post",
                url: `${apiURL}/list/${action.payload.id}/todo`,
                data: action.payload.data
            })
        });
        const todos = response.data
        yield put({
            type: "CREATE_TODO_SUCCESS", payload: { todos }
        })
    } catch (e) {
        yield put({
            type: "CREATE_TODO_FAILED", message: e.message
        })
    }
}







function* updateTodoMarkAsDoneByIdSaga() {
    yield takeEvery("UPDATE_TODO_AS_DONE_REQUESTED", fetchUpdateTodoMarkAsDoneById)
}

function* fetchUpdateTodoMarkAsDoneById(action) {
    try {
        const response = yield call(() => {
            return axios({
                method: "put",
                url: `${apiURL}/list/${action.payload.listId}/todo/${action.payload.todoId}/markAsDone`,
                data: {}
            })
        });
        const todos = response.data
        yield put({
            type: "UPDATE_TODO_AS_DONE_SUCCESS", payload: { todos }
        })
    } catch (e) {
        yield put({
            type: "UPDATE_TODO_AS_DONE_FAILED", message: e.message
        })
    }
}





export {
    getAllTodosSaga,
    getTodoByIdSaga,
    updateTodoByIdSaga,
    deleteTodoByIdSaga,
    createTodoByListIdSaga,
    updateTodoMarkAsDoneByIdSaga
}