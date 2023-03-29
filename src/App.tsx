import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {SetCounter, SettingCountType} from "./components/SetCounter";

export type CountType = {
    minCount: number
    count: number
    maxCount: number
    message: { set: string, error: string }
}
function App() {
    const [count, setCount] = useState<CountType>({
        minCount: 0,
        count: 0,
        maxCount: 5,
        message: {
            set: "Enter values and press 'set'",
            error: "Incorrect value!"
        }
    })
    // useEffect(() => {
    //     const get = localStorage.getItem("count")
    //     if (get) {
    //         setCount(JSON.parse(get))
    //     }
    // },[])
    // useEffect(() => {
    //     localStorage.setItem("count", JSON.stringify(count))
    // }, [count])

    const increaseCount = () => {
        if (count.count < count.maxCount) {
            setCount({...count, count: count.count + 1})
        }
    }
    const resetCount = () => {
        setCount({...count, count: count.minCount})
    }
    const countSetValue = (minCount: number, maxCount: number) => {
        setCount({...count, minCount: minCount, maxCount: maxCount, count: minCount})
    }
    const settingsMin = (min: number) =>{
        return min
    }
    const settingsMax = (max: number) =>{
        return max
    }

    return (
        <div className="App">
            <Counter
                count={count}
                increaseCount={increaseCount}
                resetCount={resetCount}
            />
            <SetCounter
                countSetValue={countSetValue}
                currentValues={count}
                minCount={settingsMin}
                maxCount={settingsMax}
            />
        </div>
    );
}

export default App;
