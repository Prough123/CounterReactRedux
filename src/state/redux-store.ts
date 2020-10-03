import {combineReducers,applyMiddleware , createStore} from 'redux';
import {counterReducer} from "./counter-reducer";
import thunk from "redux-thunk";





const reducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(reducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof reducer>

