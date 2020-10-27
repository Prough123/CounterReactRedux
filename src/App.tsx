import React, {ChangeEvent, useCallback, useState} from 'react';
import './App.module.css';
import {Setup} from "./componets/Setup/Setup";
import {Buttons} from "./componets/Buttons/Buttons";
import {useDispatch, useSelector} from "react-redux";
import {
    thunkDecValue,
    thunkIncValue,
} from "./state/counter-reducer";
import {selectStateCounter} from "./state/selectors";
import {
    setDisableAC,
    setErrorMessageAC,
    setInterimMaxValueAC,
    setInterimMinValueAC,
    setSettingsAC
} from "./state/actions";
import {Paper} from "@material-ui/core";
import style from "./App.module.css"
import {ResetViewController} from "./componets/ResetViewController/ResetViewController";


function App() {
    // Пока вводим сообщение должны быть задизейблены кнопки INC и Reset и сообщение нажать кнопку Set
    // Если Старт и Макс равны или Макс меньше Старт все кнопки задизейблены и сообщение об ошибке,
    // подсветка инпутов во время ошибки
    // После нажатия Set она дизейблится до начала ввода нового значение
    // Сделать переключатель на ошибку , если ошибка то вывыести сообщение об ошибке , если ошибки нету то вывыести пожалуйста введите значение
    // а если есть значение то показать значение

    const {disable, maxValue, minValue, errorMessage, error, currentValue} = useSelector(selectStateCounter)
    const dispatch = useDispatch()

    const [min, setMin] = useState(minValue)
    const [max, setMax] = useState(maxValue)

    const onChangeSetValue = useCallback(() => {
        setValue(min, max)
    }, [min, max])

    const onSetMinValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setMin(+e.currentTarget.value)
        dispatch(setInterimMinValueAC({min: +e.currentTarget.value}))
    }, [dispatch])

    const onSetMaxValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setMax(+e.currentTarget.value)
        dispatch(setInterimMaxValueAC({max: +e.currentTarget.value}))
    }, [dispatch])

    const setValue = useCallback((minValue: number, maxValue: number) => {
        dispatch(setSettingsAC({minValue: minValue, maxValue: maxValue}))

        dispatch(setErrorMessageAC({error: false}))
    }, [dispatch])

    const increaseValue = useCallback(() => {
        dispatch(thunkIncValue())
    }, [dispatch])

    const decreaseValue = useCallback(() => {
        dispatch(thunkDecValue())
    }, [dispatch])

    const resetValue = useCallback(() => {
        setMax(0)
        setMin(0)
        dispatch(setErrorMessageAC({error: true}))
    }, [dispatch])

    return (
        <div className={style.app}>
            <div className="wrapper">
                <Paper elevation={3}>
                    <Setup error={error} disable={disable}
                           onSetMaxValue={onSetMaxValue} onSetMinValue={onSetMinValue}
                           maxValue={max} minValue={min}/>
                    <Buttons  disableBtn={disable}
                             minValue={min} maxValue={max}
                             onChangeSetValue={onChangeSetValue}
                             incValue={increaseValue}
                             decValue={decreaseValue}/>
                    <ResetViewController error={error} reset={resetValue} disableBtn={disable} textError={errorMessage} currentValue={currentValue}/>
                </Paper>
            </div>
        </div>
    );
}

export default App;
