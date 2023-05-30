import React from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {SetCounter} from "./components/SetCounter";
import {useDispatch, useSelector} from "react-redux";
import {rootStateType} from "./store/store";
import {countSetIncorrectStatusAC, countSetValueAC, increaseCountAC, resetCountAC} from "./store/countReducer";
import {settingsMaxAC, settingsMinAC} from "./store/settingsReducer";

export type CountType = {
    minCount: number
    count: number
    maxCount: number
    status: string
}
//"Enter values and press 'set'" , "Incorrect value!"
function App() {
    const dispatch = useDispatch()
    const countSelector = useSelector<rootStateType, any>(state => state.count)
    const settingsSelector = useSelector<rootStateType,any>(state => state.settings)


    const increaseCount = () => {
        if (countSelector.count < countSelector.maxCount) {
            dispatch(increaseCountAC())
        }
    }
    const resetCount = () => {
        dispatch(resetCountAC())
    }
    const countSetValue = () => {
        dispatch(countSetValueAC(settingsSelector.minCount, settingsSelector.maxCount))
    }

    const settingsMin = (min: number) =>{
        dispatch(settingsMinAC(min))
        if (min < 0 || min >= settingsSelector.maxCount || settingsSelector.maxCount < 0 || settingsSelector.maxCount < min){
            return dispatch(countSetIncorrectStatusAC("Incorrect value!"))
        }
        if (min !== countSelector.minCount){
            return dispatch(countSetIncorrectStatusAC("Enter values and press 'set'"))
        }
    }
    const settingsMax = (max: number) =>{
        dispatch(settingsMaxAC(max))
        if (max < 0 || max <= settingsSelector.minCount || settingsSelector.minCount < 0 || settingsSelector.minCount > max){
            return dispatch(countSetIncorrectStatusAC("Incorrect value!"))
        }
        if (max !== countSelector.maxCount) {
            return dispatch(countSetIncorrectStatusAC("Enter values and press 'set'"))
        }
    }

    return (
        <div className="App">
            <Counter
                count={countSelector}
                increaseCount={increaseCount}
                resetCount={resetCount}
            />
            <SetCounter
                countSetValue={countSetValue}
                currentValues={countSelector}
                currentSettingValues={settingsSelector}
                settingsMin={settingsMin}
                settingsMax={settingsMax}
            />
        </div>
    );
}

export default App;
