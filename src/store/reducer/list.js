import * as type from '../types'

const initialState = {
    lists: [],
    list: {},
    loading: false,
    error: ""
}


export default function lists(state = initialState, action) {
    switch (action.type) {
        case type.GET_LISTS_REQUESTED:
            return {
                ...state,
                loading: true
            }

        case type.GET_LISTS_SUCCESS:
            return {
                ...state,
                lists: action.payload.lists, loading: false
            }

        case type.GET_LISTS_FAILED:
            return {
                ...state, error: action.payload, loading: false
            }



        case type.GET_LIST_REQUESTED:
            return {
                ...state,
                loading: true
            }

        case type.GET_LIST_SUCCESS:
            console.log("ction.payload.list",action);
            return {
                ...state,
                list: action.payload.list, loading: false
            }

        case type.GET_LIST_FAILED:
            return {
                ...state, error: action.payload, loading: false
            }


        case type.UPDATE_LIST_REQUESTED:
            return {
                ...state,
                loading: true
            }

        case type.UPDATE_LIST_SUCCESS:
            return {
                ...state,
                lists: action.payload.lists, loading: false
            }

        case type.UPDATE_LIST_FAILED:
            return {
                ...state, error: action.payload, loading: false
            }




        case type.DELETE_LIST_REQUESTED:
            return {
                ...state,
                loading: true
            }

        case type.DELETE_LIST_SUCCESS:
            return {
                ...state,
                lists: action.payload.lists, loading: false
            }

        case type.DELETE_LIST_FAILED:
            return {
                ...state, error: action.payload, loading: false
            }


        case type.CREATE_LIST_REQUESTED:
            return {
                ...state,
                loading: true
            }

        case type.CREATE_LIST_SUCCESS:
            console.log("action.payload.lists",action.payload.lists);
            return {
                ...state,
                lists: action.payload.lists, loading: false
            }

        case type.CREATE_LIST_FAILED:
            return {
                ...state, error: action.payload, loading: false
            }
        default:
            return state
    }
}