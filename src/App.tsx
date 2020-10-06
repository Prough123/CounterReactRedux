import React, {ChangeEvent, useCallback} from 'react';
import './App.css';
import {Setup} from "./componets/Setup/Setup";
import {Output} from "./componets/Output/Output";
import {useDispatch, useSelector} from "react-redux";
import {
    disableType,
    setErrorMessage, setMaxValueAC, setMinValueAC, thunkDecValue, thunkIncValue,
} from "./state/counter-reducer";
import {AppRootStateType} from "./state/redux-store";


function App() {

    // Пока вводим сообщение должны быть задизейблены кнопки INC и Reset и сообщение нажать кнопку Set
    // Если Старт и Макс равны или Макс меньше Старт все кнопки задизейблены и сообщение об ошибке,
    // подсветка инпутов во время ошибки
    // После нажатия Set она дизейблится до начала ввода нового значение
    // Сделать переключатель на ошибку , если ошибка то вывыести сообщение об ошибке , если ошибки нету то вывыести пожалуйста введите значение
    // а если есть значение то показать значение

    const disableBtn = useSelector<AppRootStateType, disableType>(state => state.counter.disable)
    const disabledSetValue = useSelector<AppRootStateType, boolean>(state => state.counter.disable.disabledSetValue)
    const currentValue = useSelector<AppRootStateType, number>(state => state.counter.currentValue)
    const valueError = useSelector<AppRootStateType, boolean>(state => state.counter.error)
    const textError = useSelector<AppRootStateType, string>(state => state.counter.setErrorMessage)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const minValue = useSelector<AppRootStateType, number>(state => state.counter.minValue)


    const dispatch = useDispatch()

    const onChangeSetValue =  useCallback(() => {
        setValue(minValue, maxValue)
    },[])

    const onSetMinValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMinValueAC(+e.currentTarget.value))
    },[])

    const onSetMaxValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(+e.currentTarget.value))
    },[])

    const setValue = useCallback((minValue: number, maxValue: number) => {
        dispatch(setMaxValueAC(maxValue))
        dispatch(setMinValueAC(minValue))
        dispatch(setErrorMessage(false))
    },[minValue, maxValue])

    const increaseValue = useCallback(() => {
       dispatch(thunkIncValue())
    },[])

    const decreaseValue = useCallback(() => {
        dispatch(thunkDecValue())
    },[])

    const resetValue = useCallback(() => {
        dispatch(setMaxValueAC(0))
        dispatch(setMinValueAC(0))
    },[])

    return (
        <div className="App">
            <div className="wrapper">
                <Setup error={valueError} disabledSetValue={disabledSetValue}
                       onSetMaxValue={onSetMaxValue} onSetMinValue={onSetMinValue}
                       onChangeSetValue={onChangeSetValue}
                       maxValue={maxValue} minValue={minValue}/>
                <Output textError={textError} error={valueError} reset={resetValue} disableBtn={disableBtn}
                        minValue={minValue} maxValue={maxValue}
                        currentValue={currentValue} incValue={increaseValue}
                        decValue={decreaseValue}/>
            </div>
        </div>
    );
}

export default App;
