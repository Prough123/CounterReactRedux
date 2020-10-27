import React from 'react'
import {Button} from "@material-ui/core";
import style from "../ResetViewController/ResetViewController.module.css"

type OutputType = {
    onChangeSetValue: () => void

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


}

export const Buttons = React.memo((props: OutputType) => {

    return (
        <div className={style.container}>
            <Button variant="contained" color="secondary" disabled={props.disableBtn.disabledIncValue}
                    onClick={props.incValue}>+</Button>
            <Button variant="contained" color="secondary" disabled={props.disableBtn.disabledSetValue}
                    onClick={props.onChangeSetValue}>Set Value</Button>
            <Button variant="contained" color="secondary" disabled={props.disableBtn.disabledDecValue}
                    onClick={props.decValue}>-</Button>

        </div>
    )

})