import React, {ChangeEvent} from 'react';
import {Button, Input} from "@material-ui/core";
import style from './Setup.module.css'

type SetValueType = {
    error: boolean
    onSetMinValue: (e: ChangeEvent<HTMLInputElement>) => void
    onSetMaxValue: (e: ChangeEvent<HTMLInputElement>) => void

    disable: {
        disabledSetValue: boolean
        disabledIncValue: boolean
        disabledDecValue: boolean
        disabledResetValue: boolean
    }
    minValue: number
    maxValue: number
}

export const Setup = React.memo((props: SetValueType) => {

    return (
        <div className={style.container}>
            <div>
                <div>Min</div>
                <Input type="number" value={props.minValue} error={props.disable.disabledSetValue}
                       onChange={props.onSetMinValue}/>
            </div>

            <div>
                <div>Max</div>
                <Input type="number" value={props.maxValue} error={props.disable.disabledSetValue}
                       onChange={props.onSetMaxValue}/>

            </div>
        </div>

    )
})
