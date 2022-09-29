import React, {FormEvent, useEffect, useState} from 'react';
import s from "./counter.module.css";
import {Button} from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
export type CounterValueType = {
    counter: number
    set: (startValue: number) => void
    setRemoveNumber: (removeNumber: number) => void
    maxValue: (maxValue: number) => void
    startValue: (starValue: number) => void
    errorNumber: (error: boolean) => void
    error: boolean

}
const Counter2 = (props: CounterValueType) => {
    const [startValue, setValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const ChangeValue = (e: FormEvent<HTMLInputElement>) => {
            props.errorNumber(e.currentTarget.valueAsNumber<0)
            setValue(e.currentTarget.valueAsNumber)
    }
    const changeMaxValue = (e: FormEvent<HTMLInputElement>) => {

            props.errorNumber(e.currentTarget.valueAsNumber<0)
            setMaxValue(e.currentTarget.valueAsNumber)


    }
    const setResult = () => {
        props.set(startValue)
        props.setRemoveNumber(startValue)
        props.maxValue(maxValue)
        props.errorNumber(maxValue === startValue || maxValue < startValue || maxValue<0 || startValue<0)

    }
    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(startValue))
    }, [startValue])
    const disableButton = () => {
           return  props.error
    }
    return (
            <div className={s.content}>
                <div className={s.counter}>
                    <div className={s.inputDiv}>
                        <div className={s.inputText}>
                            <span>max value:</span>
                            <input type={"number"} value={maxValue} onChange={changeMaxValue}
                                   className={props.error ? s.inputActive : s.input}/>
                        </div>

                        <div className={s.inputText}>
                            <span>start value:</span>
                            <input type={"number"} value={startValue} onChange={ChangeValue}
                                   className={props.error ? s.inputActive : s.input}/>
                        </div>


                    </div>
                    <div className={s.buttonDiv}>
                        <Button variant={'contained'} className={s.button} onClick={setResult}
                                disabled={disableButton()}>
                            <SettingsIcon/>
                        </Button>
                    </div>
                </div>
            </div>
    );
};

export default Counter2;