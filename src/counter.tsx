import React from 'react';
import s from './counter.module.css'
import {Button} from "@material-ui/core";
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import AddIcon from '@material-ui/icons/Add';
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
                            <Button variant={'contained'}
                                    onClick={addNumber}
                                    disabled={disableButton()}
                                    className={s.button}
                            >
                            <AddIcon/>
                            </Button>
                            <Button variant={'contained'}
                                    onClick={removeCounterNumber}
                                    style={{marginLeft: '20px'}}
                                    className={s.button}>
                                <RotateLeftIcon/>
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
    );
};

export default Counter;