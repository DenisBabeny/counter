import React, {FormEvent, useEffect, useState} from 'react';
import s from "./counter.module.css";

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
        setValue(e.currentTarget.valueAsNumber)
        props.errorNumber(e.currentTarget.valueAsNumber < 0)
    }
    const changeMaxValue = (e: FormEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.valueAsNumber)
        props.errorNumber(e.currentTarget.valueAsNumber < 0)
    }
    const setResult = () => {
        props.set(startValue)
        props.setRemoveNumber(startValue)
        props.maxValue(maxValue)
        props.errorNumber(maxValue === startValue || maxValue < startValue)

    }
useEffect(()=>{
    let valueAsString = localStorage.getItem('counterValue')
    if(valueAsString){
        let newValue = JSON.parse(valueAsString)
        setValue(newValue)
    }
    }, [])
useEffect(()=>{
    localStorage.setItem('counterValue', JSON.stringify(startValue))
}, [startValue])
    const disableButton = () => {
        return props.error
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
                    <button className={s.button} onClick={setResult} disabled={disableButton()}>Set
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter2;