export enum ACTIONS_TYPE {
    INCREASE_VALUE = 'INCREASE_VALUE',
    SET_INTERIM_MIN_VALUE = 'SET_INTERIM_MIN_VALUE',
    SET_INTERIM_MAX_VALUE = 'SET_INTERIM_MAX_VALUE',
    DECREASE_VALUE = 'DECREASE_VALUE',
    SET_DISABLE = 'SET_DISABLE',
    SET_SETTINGS = 'SET_SETTINGS',
    SET_ERROR = 'SET_ERROR',
    errorText = 'set value pls',
}

export type setSettingsPayload = {
    minValue: number
    maxValue: number
}
export type setInterimMinValuePayload = {
    min: number
}
export type setInterimMaxValuePayload = {
    max: number
}
export type setDisablePayload = {
    disabledSetValue: boolean,
    disabledIncValue: boolean,
    disabledDecValue: boolean,
    disabledResetValue: boolean
}
export type setErrorMessagePayload = {
    error: boolean
}
export type incValuePayload = {}
export type decValuePayload = {}

const makeActions = <T extends ACTIONS_TYPE, P>(type: T) => (payload: P) => ({type, payload})

export const setSettingsAC = makeActions<ACTIONS_TYPE.SET_SETTINGS, setSettingsPayload>(ACTIONS_TYPE.SET_SETTINGS)
export const incValueAC = makeActions<ACTIONS_TYPE.INCREASE_VALUE, incValuePayload>(ACTIONS_TYPE.INCREASE_VALUE)
export const decValueAC = makeActions<ACTIONS_TYPE.DECREASE_VALUE, decValuePayload>(ACTIONS_TYPE.DECREASE_VALUE)
export const setInterimMinValueAC = makeActions<ACTIONS_TYPE.SET_INTERIM_MIN_VALUE, setInterimMinValuePayload>(ACTIONS_TYPE.SET_INTERIM_MIN_VALUE)
export const setInterimMaxValueAC = makeActions<ACTIONS_TYPE.SET_INTERIM_MAX_VALUE, setInterimMaxValuePayload>(ACTIONS_TYPE.SET_INTERIM_MAX_VALUE)
export const setDisableAC = makeActions<ACTIONS_TYPE.SET_DISABLE, setDisablePayload>(ACTIONS_TYPE.SET_DISABLE)
export const setErrorMessageAC = makeActions<ACTIONS_TYPE.SET_ERROR, setErrorMessagePayload>(ACTIONS_TYPE.SET_ERROR)

interface IStringMap<T> {
    [key: string]: T
}

type IAnyFunction = (...args: any[]) => any

type IActionUnion<A extends IStringMap<IAnyFunction>> = ReturnType<A[keyof A]>

const actions = {
    setSettingsAC, setInterimMinValueAC,
    setInterimMaxValueAC, setDisableAC,
    setErrorMessageAC, incValueAC,
    decValueAC
}

export type ActionsType = IActionUnion<typeof actions>
