import React, {useState} from 'react';
import s from './Counter.module.css'
import {SuperButton} from "./SuperButton";
import {CountType} from "../App";

type CounterPropsType = {
    count: CountType
    increaseCount: () => void
    resetCount: () => void
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
            <div className={s.countNumber}>
                <div className={!props.count.status ? s.number : s.status}>
                    { props.count.status ? props.count.status: props.count.count }
                </div>
            </div>
            {error && <div className={s.errorClass}>{props.count.count === props.count.maxCount ? error : ''}</div>}
            <div className={s.flexButton}>
                <SuperButton
                    title={"incr"}
                    onClickHandler={OnClickIncreaseCountHandler}
                    disable={!!props.count.status || props.count.count === props.count.maxCount}
                />
                <SuperButton
                    title={"reset"}
                    onClickHandler={OnClickResetCountHandler}
                    disable={!!props.count.status}
                />
            </div>
        </div>
    );
};