import React from 'react'
import {Button} from "@material-ui/core";


type OutputType = {
    currentValue: number
    incValue: () => void
    decValue: () => void
    maxValue: number
    minValue: number
    disableBtn: {
        disabledSetValue: boolean
        disabledIncValue: boolean
        disabledDecValue: boolean
        disabledResetValue: boolean
    }
    reset: () => void
    error: boolean
    textError: string
}

export const Output = (props: OutputType) => {

    return (
        <div>
            {props.error ?
                <span>{props.textError}</span>
                : <span>{props.currentValue}</span>
            }
            {/*<span>{props.currentValue}</span>*/}
            <Button variant="contained" color="secondary" disabled={props.disableBtn.disabledIncValue}
                    onClick={props.incValue}>+</Button>
            <Button variant="contained" color="secondary" disabled={props.disableBtn.disabledDecValue}
                    onClick={props.decValue}>-</Button>
            <Button variant="contained" color="secondary" disabled={props.disableBtn.disabledResetValue} onClick={props.reset}>reset</Button>
        </div>
    )

}