import * as type from '../types';


export function getAllTodosByListId(todos) {
    return {
        type: type.GET_TODOS_REQUESTED,
        payload: todos
    }
}

export function getTodoById(todo) {
    return {
        type: type.GET_TODO_REQUESTED,
        payload: todo
    }
}

export function updateTodoById(todos) {
    return {
        type: type.UPDATE_TODO_REQUESTED,
        payload: todos
    }
}

export function deletTodoById(todos) {
    return {
        type: type.DELETE_TODO_REQUESTED,
        payload: todos
    }
}

export function createTodo(todos) {
    return {
        type: type.CREATE_TODO_REQUESTED,
        payload: todos
    }
}

export function updateTodoMarkAsDone(todos) {
    return {
        type: type.UPDATE_TODO_AS_DONE_REQUESTED,
        payload: todos
    }
}