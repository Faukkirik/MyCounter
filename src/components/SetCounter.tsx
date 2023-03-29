import React, {ChangeEvent, useState} from "react";
import {SuperButton} from "./SuperButton";
import s from './SetCounter.module.css'
import {CountType} from "../App";

export type SetCounterType = {
    currentValues: CountType
    countSetValue: (minCount: number, maxCount: number) => void
    minCount: ( min: number)=> void
    maxCount: ( max: number)=> void

}
export type SettingCountType = {
    minCount: number
    maxCount: number
}
export const SetCounter = (props: SetCounterType) => {
    const [settingCount, setSettingCount] = useState<SettingCountType>(
        {
            minCount: 0, maxCount: 5
        })


    const onChangeMaxCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSettingCount({...settingCount, maxCount: JSON.parse(e.currentTarget.value)})
        props.maxCount(JSON.parse(e.currentTarget.value))
    }
    const onChangeStartCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSettingCount({...settingCount, minCount: JSON.parse(e.currentTarget.value)})
        props.minCount(JSON.parse(e.currentTarget.value))
    }
    const onClickSetCountHandler = () => {
        let minCount = settingCount.minCount
        let maxCount = settingCount.maxCount
        props.countSetValue(minCount, maxCount)
    }
    return (
        <div className={s.wrapper}>
            <div className={s.block}>
                <div>max value
                    <input
                        type="number"
                        value={settingCount.maxCount}
                        onChange={onChangeMaxCountHandler}
                    />
                </div>
                <div>start value
                    <input
                        type="number"
                        value={settingCount.minCount}
                        onChange={onChangeStartCountHandler}
                    />
                </div>
            </div>
            <div className={s.flexButton}>
                <SuperButton
                    title={"set"}
                    disable={props.currentValues.minCount === settingCount.minCount && props.currentValues.maxCount === settingCount.maxCount || settingCount.minCount >= settingCount.maxCount}
                    onClickHandler={onClickSetCountHandler}
                />
            </div>
        </div>
    )
}