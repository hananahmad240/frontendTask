import { all } from 'redux-saga/effects';
import userSaga from './userSaga'

import {
    getAllListsSage,
    getListByIdSage,
    updateListByIdSage,
    deleteListByIdSage,
    createListSage
} from './listsSaga'


import {
    getAllTodosSaga,
    getTodoByIdSaga,
    updateTodoByIdSaga,
    deleteTodoByIdSaga,
    createTodoByListIdSaga,
    updateTodoMarkAsDoneByIdSaga
} from './todoSaga'

export default function* rootSage() {
    yield all([
        userSaga(),
        getAllListsSage(),
        getListByIdSage(),
        updateListByIdSage(),
        deleteListByIdSage(),
        createListSage(),

        getAllTodosSaga(),
        getTodoByIdSaga(),
        updateTodoByIdSaga(),
        deleteTodoByIdSaga(),
        createTodoByListIdSaga(),
        updateTodoMarkAsDoneByIdSaga()
    ])
}