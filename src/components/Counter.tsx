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
    const error = "Pleas, reset counter!"
    const OnClickIncreaseCountHandler = () => {
        props.increaseCount()
    }
    const OnClickResetCountHandler = () => {
        props.resetCount()
    }
    return (
        <div className={s.wrapper}>
            <div className={s.countNumber}>{props.count}</div>
            {error && <div className={s.errorClass}>{props.count === props.maxInitCount ? error : ''}</div>}
            <div className={s.flexButton}>
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
        </div>
    );
};