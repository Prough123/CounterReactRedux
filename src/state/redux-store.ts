import {combineReducers, createStore} from 'redux';
import {counterReducer} from "./counter-reducer";




const reducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(reducer);

export type AppRootStateType = ReturnType<typeof reducer>

