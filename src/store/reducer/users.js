import * as type from '../types'

const initialState = {
    users: [],
    loading: false,
    error: ""
}


export default function users(state = initialState, action) {
    switch (action.type) {
        case type.GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload
            }

        case type.GET_USERS_REQUESTED:
            return {
                ...state,
                loading:true
            }

        case type.GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
}