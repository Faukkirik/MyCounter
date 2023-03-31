import React, {ChangeEvent, useState} from "react";
import {SuperButton} from "./SuperButton";
import s from './SetCounter.module.css'
import {CountType} from "../App";

export type SetCounterType = {
    currentValues: CountType
    countSetValue: () => void
    settingsMin: (min: number)=>void
    settingsMax: (max: number)=>void
    currentSettingValues: SettingCountType

}
export type SettingCountType = {
    minCount: number
    maxCount: number
    status: string
}
export const SetCounter = (props: SetCounterType) => {
    const onChangeMaxCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.settingsMax(JSON.parse(e.currentTarget.value))
    }
    const onChangeStartCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.settingsMin(JSON.parse(e.currentTarget.value))
    }
    const onClickSetCountHandler = () => {
        props.countSetValue()
    }

    return (
        <div className={s.wrapper}>
            <div className={s.block}>
                <div className={s.boxSize}>
                    <div>max value</div>
                    <input
                        className={s.input}
                        type="number"
                        value={props.currentSettingValues.maxCount}
                        onChange={onChangeMaxCountHandler}
                    />
                </div>
                <div className={s.boxSize}>
                    <div>start value</div>
                    <input
                        className={s.input}
                        type="number"
                        value={props.currentSettingValues.minCount}
                        onChange={onChangeStartCountHandler}
                    />
                </div>
            </div>
            <div className={s.flexButton}>
                <SuperButton
                    title={"set"}
                    disable={!props.currentValues.status || props.currentValues.status === "Incorrect value!"}
                    onClickHandler={onClickSetCountHandler}
                />
            </div>
        </div>
    )
}