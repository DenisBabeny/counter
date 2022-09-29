import React, {useState} from 'react';
import './App.css';
import Counter from "./counter";
import Counter2 from "./Counter2";


function App() {
    const [counter, setCounter] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [error, setError] = useState<boolean>(false)
    const addTask = () => {
        setCounter(counter + 1)
    }
    const removeTask = () => {
        setCounter(startValue)
    }
    return (
        <div className="App">
                    <Counter2
                        counter={counter}
                        set={setCounter}
                        setRemoveNumber={setStartValue}
                        maxValue={setMaxValue}
                        errorNumber={setError}
                        error={error}
                        startValue={setStartValue}
                    />

                    <Counter
                        addTask={addTask}
                        counter={counter}
                        removeTask={removeTask}
                        error={error}
                        maxValue={maxValue}
                        startValue={startValue}
                    />
        </div>
    );
}

export default App;
