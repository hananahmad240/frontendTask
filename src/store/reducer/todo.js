import * as type from '../types'

const initialState = {
    todos: [],
    todo: {},
    loading: false,
    error: ""
}


export default function todos(state = initialState, action) {
    switch (action.type) {
        case type.GET_TODOS_REQUESTED:
            return {
                ...state,
                loading: true
            }

        case type.GET_TODOS_SUCCESS:
            return {
                ...state,
                todos: action.payload.todos, loading: false
            }

        case type.GET_TODOS_FAILED:
            return {
                ...state, error: action.payload, loading: false
            }



        case type.GET_TODO_REQUESTED:
            return {
                ...state,
                loading: true
            }

        case type.GET_TODO_SUCCESS:
            return {
                ...state,
                todo: action.payload.todo, loading: false
            }

        case type.GET_TODO_FAILED:
            return {
                ...state, error: action.payload, loading: false
            }


        case type.UPDATE_TODO_REQUESTED:
            return {
                ...state,
                loading: true
            }

        case type.UPDATE_TODO_SUCCESS:
            return {
                ...state,
                todos: action.payload.todos, loading: false
            }

        case type.UPDATE_TODO_FAILED:
            return {
                ...state, error: action.payload, loading: false
            }




        case type.DELETE_TODO_REQUESTED:
            return {
                ...state,
                loading: true
            }

        case type.DELETE_TODO_SUCCESS:
            return {
                ...state,
                todos: action.payload.todos, loading: false
            }

        case type.DELETE_TODO_FAILED:
            return {
                ...state, error: action.payload, loading: false
            }


        case type.CREATE_TODO_REQUESTED:
            return {
                ...state,
                loading: true
            }

        case type.CREATE_TODO_SUCCESS:
            return {
                ...state,
                todos: action.payload.todos, loading: false
            }

        case type.CREATE_TODO_FAILED:
            return {
                ...state, error: action.payload, loading: false
            }


        case type.UPDATE_TODO_AS_DONE_REQUESTED:
            return {
                ...state,
                loading: true
            }

        case type.UPDATE_TODO_AS_DONE_SUCCESS:
            
            return {
                ...state,
                todos: action.payload.todos, loading: false
            }

        case type.UPDATE_TODO_AS_DONE_FAILED:
            return {
                ...state, error: action.payload, loading: false
            }
        default:
            return state
    }
}