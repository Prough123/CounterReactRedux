import React, {ChangeEvent} from 'react';
import {Button, Input} from "@material-ui/core";



type SetValueType = {
    error: boolean
    onSetMinValue: (e: ChangeEvent<HTMLInputElement>) => void
    onSetMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeSetValue: () => void
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
        <div>
                <div>
                    <Input  type="number" value={props.minValue} error={props.disable.disabledSetValue} onChange={props.onSetMinValue}/>
                    <span>Min</span>
                </div>
                <Button variant="contained" color="secondary" disabled={props.disable.disabledSetValue}
                        onClick={props.onChangeSetValue}>Set Value</Button>
                <div>

                    <Input type="number" value={props.maxValue} error={props.disable.disabledSetValue}   onChange={props.onSetMaxValue}/>
                    <span>Max</span>
                </div>
        </div>

    )
})
