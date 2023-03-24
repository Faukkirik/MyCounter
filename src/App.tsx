import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";

function App() {
    const initCount = 0
    const maxInitCount = 5
    const [count, setCount] = useState<number>(initCount)
    const increaseCount = () => {
        if (count < maxInitCount) {
            setCount(count + 1)
        }
    }
    const resetCount = () => {
        setCount(initCount)
    }
    return (
        <div className="App">
            <Counter
            count={count}
            increaseCount={increaseCount}
            resetCount={resetCount}
            initCount={initCount}
            maxInitCount={maxInitCount}
            />
        </div>
    );
}

export default App;
