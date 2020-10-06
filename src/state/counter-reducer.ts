import {Dispatch} from "react";
import {AppRootStateType} from "./redux-store";

const INCREASE_VALUE = 'INCREASE_VALUE'
const SET_INTERIM_MIN_VALUE = 'SET_INTERIM_MIN_VALUE'
const SET_INTERIM_MAX_VALUE = 'SET_INTERIM_MAX_VALUE'
const DECREASE_VALUE = 'DECREASE_VALUE'
const SET_DISABLE = 'SET_DISABLE'
const SET_SETTINGS = 'SET_SETTINGS'
const SET_ERROR = 'SET_ERROR'
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


type ActionsType =
    incValueACType
    | decValueACType
    | setErrorACType
    | setDisableACType
    | setInterimMaxValueACType
    | setInterimMinValueACType
| setSettingsACType


export const counterReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "SET_INTERIM_MAX_VALUE": {
            return {
                ...state, interimValueMax: action.max,
                disable: {
                    ...state.disable,
                    disabledIncValue: state.interimValueMin >= action.max || action.max < 0,
                    disabledSetValue: state.interimValueMin >= action.max || action.max < 0,
                    disabledDecValue: state.interimValueMin >= action.max || action.max < 0,
                    disabledResetValue: state.interimValueMin >= action.max || action.max < 0,
                }

            }
        }
        case "SET_INTERIM_MIN_VALUE": {
            return {
                ...state, interimValueMin: action.min,
                disable: {
                    ...state.disable,
                        disabledDecValue: action.min >= state.interimValueMax || action.min < 0,
                        disabledSetValue: action.min >= state.interimValueMax || action.min < 0,
                        disabledIncValue: action.min >= state.interimValueMax || action.min < 0,
                        disabledResetValue: action.min >= state.interimValueMax || action.min < 0,
                }
            }
        }
        case 'SET_SETTINGS': {
            return {
                ...state, maxValue: action.maxValue, minValue: action.minValue, currentValue: action.minValue

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
                    disabledDecValue: action.disabledDecValue,
                    disabledIncValue: action.disabledIncValue,
                    disabledSetValue: action.disabledSetValue,
                    disabledResetValue: action.disabledResetValue
                }
            }
        }
        case 'SET_ERROR': {
            return {...state, errorMessage: state.errorMessage, error: action.error}
        }
        default: {
            return state
        }
    }
}

export const setSettingsAC = (minValue: number, maxValue: number): setSettingsACType => ({
    type: 'SET_SETTINGS',
    minValue, maxValue
})

export type setSettingsACType = {
    type: typeof SET_SETTINGS
    minValue: number
    maxValue: number
}


export const incValueAC = (): incValueACType => ({type: 'INCREASE_VALUE'})
export type incValueACType = {
    type: typeof INCREASE_VALUE
}


export const decValueAC = (): decValueACType => ({type: 'DECREASE_VALUE'})
export type decValueACType = {
    type: typeof DECREASE_VALUE
}


export const setInterimMinValueAC = (min: number): setInterimMinValueACType => ({
    type: 'SET_INTERIM_MIN_VALUE',
    min
})

export type setInterimMinValueACType = {
    type: typeof SET_INTERIM_MIN_VALUE
    min: number
}

export const setInterimMaxValueAC = (max: number): setInterimMaxValueACType => ({
    type: 'SET_INTERIM_MAX_VALUE',
    max
})

export type setInterimMaxValueACType = {
    type: typeof SET_INTERIM_MAX_VALUE
    max: number
}

export const setDisableAC = (disabledSetValue: boolean,
                             disabledIncValue: boolean,
                             disabledDecValue: boolean,
                             disabledResetValue: boolean): setDisableACType => ({
    type: 'SET_DISABLE',
    disabledDecValue,
    disabledIncValue,
    disabledSetValue,
    disabledResetValue,
})
export type setDisableACType = {
    type: typeof SET_DISABLE
    disabledSetValue: boolean
    disabledIncValue: boolean
    disabledDecValue: boolean
    disabledResetValue: boolean
}

export const setErrorMessage = (error: boolean): setErrorACType => ({type: 'SET_ERROR', error})
export type setErrorACType = {
    type: typeof SET_ERROR
    error: boolean
}

//thunk

export const thunkIncValue = () => (dispatch: Dispatch<ActionsType>, getState: () => AppRootStateType) => {
    const state = getState()
    if (state.counter.currentValue < state.counter.maxValue) {
        dispatch(incValueAC())
    }
    if ((state.counter.maxValue - 1) === state.counter.currentValue) {
        dispatch(setDisableAC(true, true, false, false))
    }
}

export const thunkDecValue = () => (dispatch: Dispatch<ActionsType>, getState: () => AppRootStateType) => {
    const state = getState()
    if (state.counter.currentValue > state.counter.minValue) {
        dispatch(decValueAC())
    }
    if ((state.counter.minValue + 1) === state.counter.currentValue) {
        dispatch(setDisableAC(true, false, true, false))
    }
}


