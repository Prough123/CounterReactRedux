import React from 'react'
import {Button} from "@material-ui/core";
import style from './ResetViewController.module.css'
export type OutputValueType = {
    error: boolean
    textError: string
    currentValue: number
    disableBtn: {
        disabledResetValue: boolean
    }
    reset: () => void
}

export const ResetViewController = (props: OutputValueType) => {
    return (
        <div>
            <div className={style.container}>
                {props.error ?
                    <span>{props.textError}</span>
                    : <span>{props.currentValue}</span>
                }
            </div>

            <div className={style.container}>
                <Button variant="contained" color="secondary" disabled={props.disableBtn.disabledResetValue}
                        onClick={props.reset}>reset</Button>
            </div>

        </div>
    )
}