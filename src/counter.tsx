import React from 'react';
import s from './counter.module.css'

export type CounterType = {
    addTask: () => void
    counter: number
    removeTask: (counter: number) => void
    error: boolean
    maxValue: number
    startValue: number
}

const Counter = (props: CounterType) => {
    const addNumber = () => {
        props.addTask()
    }
    const removeCounterNumber = () => {
        props.removeTask(props.counter)
    }
    const disableButton = () => {
        return props.maxValue === props.counter || props.error
    }
    const result = props.counter
    const errorValue =
        props.maxValue === 0 && props.startValue === 0 ? <span className={s.number}>set value</span>
            : props.maxValue <= props.startValue || props.error ? <span className={s.number}>error value</span>
                : <div className={s.number}>
                    <span className={props.counter === props.maxValue ? 'red' : 'black'}>{result}</span>
                </div>

    return (
        <div>
            <div className={s.content}>
                <div className={s.counter}>
                    {errorValue}
                    <div className={s.buttonDiv}>
                        <button onClick={addNumber} className={s.button}
                                disabled={disableButton()}>inc
                        </button>
                        <button onClick={removeCounterNumber} className={s.button}>reset
                        </button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Counter;