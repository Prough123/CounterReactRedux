import {Dispatch} from "react";
import {AppRootStateType} from "./redux-store";
import {ActionsType, decValueAC, incValueAC, setDisableAC} from "./actions";


const errorText = 'set value pls'

export type disableType = typeof initialState.disable

const initialState = {
    interimValueMin: 0,
    interimValueMax: 0,
    maxValue: 0,
    minValue: 0,
    disable: {
        disabledSetValue: false,
        disabledIncValue: false,
        disabledDecValue: false,
        disabledResetValue: false,
    },
    errorMessage: errorText,
    error: true,
    currentValue: 0,
}

export type initialStateType = typeof initialState


export const counterReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "SET_INTERIM_MAX_VALUE": {
            return {
                ...state, interimValueMax: action.payload.max,
                disable: {
                    ...state.disable,
                    disabledIncValue: state.interimValueMin >= action.payload.max || action.payload.max < 0,
                    disabledSetValue: state.interimValueMin >= action.payload.max || action.payload.max < 0,
                    disabledDecValue: state.interimValueMin >= action.payload.max || action.payload.max < 0,
                    disabledResetValue: state.interimValueMin >= action.payload.max || action.payload.max < 0,
                }

            }
        }
        case "SET_INTERIM_MIN_VALUE": {
            return {
                ...state, interimValueMin: action.payload.min,
                disable: {
                    ...state.disable,
                    disabledDecValue: action.payload.min >= state.interimValueMax || action.payload.min < 0,
                    disabledSetValue: action.payload.min >= state.interimValueMax || action.payload.min < 0,
                    disabledIncValue: action.payload.min >= state.interimValueMax || action.payload.min < 0,
                    disabledResetValue: action.payload.min >= state.interimValueMax || action.payload.min < 0,
                }
            }
        }
        case 'SET_SETTINGS': {
            return {
                ...state,
                maxValue: action.payload.maxValue,
                minValue: action.payload.minValue,
                currentValue: action.payload.minValue

            }
        }
        case 'INCREASE_VALUE': {
            return {
                ...state,
                currentValue: state.currentValue + 1
            }
        }
        case 'DECREASE_VALUE': {
            return {
                ...state,
                currentValue: state.currentValue - 1
            }
        }
        case 'SET_DISABLE': {
            return {
                ...state, disable: {
                    ...state.disable,
                    disabledDecValue: action.payload.disabledDecValue,
                    disabledIncValue: action.payload.disabledIncValue,
                    disabledSetValue: action.payload.disabledSetValue,
                    disabledResetValue: action.payload.disabledResetValue
                }
            }
        }
        case 'SET_ERROR': {
            return {...state, errorMessage: state.errorMessage, error: action.payload.error}
        }
        default: {
            return state
        }
    }
}
export const thunkIncValue = () => (dispatch: Dispatch<ActionsType>, getState: () => AppRootStateType) => {
    const state = getState()
    if (state.counter.currentValue < state.counter.maxValue) {
        dispatch(incValueAC({}))
    }
    if ((state.counter.maxValue - 1) === state.counter.currentValue) {
        dispatch(setDisableAC({
            disabledDecValue: false,
            disabledIncValue: true,
            disabledResetValue: false,
            disabledSetValue: true
        }))
    }
}

export const thunkDecValue = () => (dispatch: Dispatch<ActionsType>, getState: () => AppRootStateType) => {
    const state = getState()
    if (state.counter.currentValue > state.counter.minValue) {
        dispatch(decValueAC({}))
    }
    if ((state.counter.minValue + 1) === state.counter.currentValue) {
        dispatch(setDisableAC({
            disabledSetValue: true,
            disabledResetValue: false,
            disabledIncValue: false,
            disabledDecValue: true
        }))
    }
}


