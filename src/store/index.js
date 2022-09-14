import { createStore, compose, applyMiddleware } from 'redux';
import createSageMiddleware from 'redux-saga'
import rootReducer from './reducer'
import rootSage from './saga'



const sageMiddleware = createSageMiddleware()

const store = compose(
    applyMiddleware(sageMiddleware),
    // window.devToolsExtension && window.devToolsExtension()
)(createStore)(rootReducer);


sageMiddleware.run(rootSage)
export default store;