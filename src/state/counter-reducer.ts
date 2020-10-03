import {Dispatch} from "react";
import {AppRootStateType} from "./redux-store";

const INCREASE_VALUE = 'INCREASE_VALUE'
const SET_MAX_VALUE = 'SET_MAX_VALUE'
const SET_MIN_VALUE = 'SET_MIN_VALUE'
const DECREASE_VALUE = 'DECREASE_VALUE'
const SET_DISABLE = 'SET_DISABLE'
const SET_ERROR = 'SET_ERROR'
const errorText = 'set value pls'

export type disableType = typeof initialState.disable
export type initialStateType = {
    maxValue: number
    minValue: number
    error: boolean
    currentValue: number
    disable: {
        disabledSetValue: boolean
        disabledIncValue: boolean
        disabledDecValue: boolean
        disabledResetValue: boolean
    }
    setErrorMessage: string
}


const initialState = {
    maxValue: 0,
    minValue: 0,
    disable: {
        disabledSetValue: false,
        disabledIncValue: false,
        disabledDecValue: false,
        disabledResetValue: false,
    },
    setErrorMessage: errorText,
    error: true,
    currentValue: 0,
} as initialStateType

type ActionsType =
    incValueACType
    | decValueACType
    | setMinValueACType
    | setErrorACType
    | setMaxValueACType
    | setDisableACType


export const counterReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'SET_MAX_VALUE': {
            return {
                ...state, maxValue: action.maxValue,
                disable: {
                    ...state.disable,
                    disabledIncValue: state.minValue >= action.maxValue || action.maxValue < 0,
                    disabledSetValue: state.minValue >= action.maxValue || action.maxValue < 0,
                    disabledDecValue: state.minValue >= action.maxValue || action.maxValue < 0,
                    disabledResetValue: state.minValue >= action.maxValue || action.maxValue < 0,
                }
            }
        }
        case 'SET_MIN_VALUE': {
            return {
                ...state, currentValue: action.minValue, minValue: action.minValue,
                disable: {
                    ...state.disable,
                    disabledDecValue: action.minValue >= state.maxValue || action.minValue < 0,
                    disabledSetValue: action.minValue >= state.maxValue || action.minValue < 0,
                    disabledIncValue: action.minValue >= state.maxValue || action.minValue < 0,
                    disabledResetValue: action.minValue >= state.maxValue || action.minValue < 0,
                }
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
            return {...state, setErrorMessage: state.setErrorMessage, error: action.error}
        }
        default: {
            return state
        }
    }
}

export const incValueAC = (): incValueACType => ({type: 'INCREASE_VALUE'})
export type incValueACType = {
    type: typeof INCREASE_VALUE
}


export const decValueAC = (): decValueACType => ({type: 'DECREASE_VALUE'})
export type decValueACType = {
    type: typeof DECREASE_VALUE
}


export const setMinValueAC = (minValue: number): setMinValueACType => ({
    type: 'SET_MIN_VALUE',
    minValue
})

export const setMaxValueAC = (maxValue: number): setMaxValueACType => ({
    type: 'SET_MAX_VALUE',
    maxValue
})
export type setMinValueACType = {
    type: typeof SET_MIN_VALUE
    minValue: number
}
export type setMaxValueACType = {
    type: typeof SET_MAX_VALUE
    maxValue: number
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

export const thunkIncValue = () => (dispatch:Dispatch< ActionsType>, getState:AppRootStateType) => {
    if (getState.counter.currentValue < getState.counter.maxValue) {
        dispatch(incValueAC())
    }
    if (( getState.counter.maxValue - 1) === getState.counter.currentValue) {
        dispatch(setDisableAC(true, true, false, false))
    }
}

export const thunkDecValue = () => (dispatch:Dispatch< ActionsType>, getState:AppRootStateType) => {
    if (getState.counter.currentValue > getState.counter.minValue) {
        dispatch(incValueAC())
    }
    if (( getState.counter.minValue + 1) === getState.counter.currentValue) {
        dispatch(setDisableAC(true, true, false, false))
    }
}


