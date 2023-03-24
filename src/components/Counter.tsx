import React, {useState} from 'react';
import s from './Counter.module.css'
import {SuperButton} from "./SuperButton";

type CounterPropsType = {
    count: number
    increaseCount: () => void
    resetCount: () => void
    initCount: number
    maxInitCount: number
}
export const Counter = (props: CounterPropsType) => {
    const [error, setError] = useState<string | null>(null)
    const OnClickIncreaseCountHandler = () => {
        if (props.count === props.maxInitCount){
            setError("Please reset your counter")
        } else {props.increaseCount()}
    }
    const OnClickResetCountHandler = () => {
        props.resetCount()
        setError(null)
    }
    return (
        <div className={s.counterBox}>
            <div>
                {props.count}
            </div>
            <div>
                {error}
            </div>
            <SuperButton
            title={"incr"}
            onClickHandler={OnClickIncreaseCountHandler}
            disable={props.count === props.maxInitCount}
            />
            <SuperButton
            title={"reset"}
            onClickHandler={OnClickResetCountHandler}
            disable={props.count === props.initCount}
            />
        </div>
    );
};

{/*<button onClick={OnClickIncreaseCountHandler}>incr</button>*/}
{/*<button onClick={OnClickResetCountHandler}>reset</button>*/}