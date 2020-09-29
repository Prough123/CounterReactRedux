import React, {ChangeEvent} from 'react';
import './App.css';
import {Setup} from "./componets/Setup/Setup";
import {Output} from "./componets/Output/Output";
import {useDispatch, useSelector} from "react-redux";
import {
    decValueAC,
    disableType,
    incValueAC, setDisableAC,
    setErrorMessage, setMaxValueAC, setMinValueAC,
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

    const onChangeSetValue = () => {
        setValue(minValue, maxValue)
    }

    const onSetMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMinValueAC(+e.currentTarget.value))
        // if (minValue > maxValue || minValue < 0) {
        //     dispatch(setErrorMessage(true))
        //     dispatch(setDisableAC(true, true, true))
        // } else {
        //     dispatch(setErrorMessage(false))
        //     dispatch(setDisableAC(false, false, false))
        // }
    }

    const onSetMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(+e.currentTarget.value))
        // if (minValue > maxValue || 0 > maxValue ) {
        //     dispatch(setErrorMessage(true))
        //     dispatch(setDisableAC(true, true, true))
        // } else {
        //     dispatch(setErrorMessage(true))
        //     dispatch(setDisableAC(false, false, false))
        // }
    }

    const setValue = (minValue: number, maxValue: number) => {
        dispatch(setMaxValueAC(maxValue))
        dispatch(setMinValueAC(minValue))
        dispatch(setErrorMessage(false))
    }

    const increaseValue = () => {
        if (currentValue < maxValue) {
            dispatch(incValueAC())
        }
        if ((maxValue - 1) === currentValue) {
            dispatch(setDisableAC(true, true, false, false))
        }
    }

    const decreaseValue = () => {
        if (currentValue > minValue) {
            dispatch(decValueAC())
        }
        if ((minValue + 1) === currentValue) {
            dispatch(setDisableAC(true, false, true, false))
        }
    }

    const resetValue = () => {
        dispatch(setMaxValueAC(0))
        dispatch(setMinValueAC(0))
    }

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
