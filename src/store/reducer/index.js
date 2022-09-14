import { combineReducers } from 'redux';
import users from './users';
import list from './list'
import todo from './todo'


const rootReducer = combineReducers({
    users: users,
    list,
    todo
})

export default rootReducer;