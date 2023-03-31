import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {SetCounter, SettingCountType} from "./components/SetCounter";

export type CountType = {
    minCount: number
    count: number
    maxCount: number
    status: string
}
//"Enter values and press 'set'" , "Incorrect value!"
function App() {
    const [count, setCount] = useState<CountType>({
        minCount: 0,
        count: 0,
        maxCount: 5,
        status: ""
    })
    const [settingCount, setSettingCount] = useState<SettingCountType>(
        {
            minCount: 0, maxCount: 5, status: ''
        })
     useEffect(() => {
         let get = localStorage.getItem("count")
         let getSet = localStorage.getItem("settingCount")
         if (get) {
             setCount( JSON.parse(get))
         }
         if (getSet) {
             setSettingCount(JSON.parse(getSet))
         }
     },[])
     useEffect(() => {
         localStorage.setItem("count", JSON.stringify(count))
         localStorage.setItem("settingCount", JSON.stringify(settingCount))
     }, [count, settingCount])

    const increaseCount = () => {
        if (count.count < count.maxCount) {
            setCount({...count, count: count.count + 1})
        }
    }
    const resetCount = () => {
        setCount({...count, count: count.minCount})
    }
    const countSetValue = () => {
        setCount({...count, minCount: settingCount.minCount, maxCount: settingCount.maxCount, count: settingCount.minCount, status: ""})
    }

    const settingsMin = (min: number) =>{
        setSettingCount({...settingCount, minCount: min})
        if (min < 0 || min >= settingCount.maxCount || settingCount.maxCount < 0 || settingCount.maxCount < min){
            return setCount({...count, status:  "Incorrect value!"})
        }
        if (min !== count.minCount){
            return setCount({...count, status:  "Enter values and press 'set'"})
        }
    }
    const settingsMax = (max: number) =>{
        setSettingCount({...settingCount, maxCount: max})
        if (max < 0 || max <= settingCount.minCount || settingCount.minCount < 0 || settingCount.minCount > max){
            return setCount({...count, status:  "Incorrect value!"})
        }
        if (max !== count.maxCount) {
            return setCount({...count, status: "Enter values and press 'set'"})
        }
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
                currentSettingValues={settingCount}
                settingsMin={settingsMin}
                settingsMax={settingsMax}
            />
        </div>
    );
}

export default App;
