import React from 'react';
import s from './Counter.module.css'

type SuperButtonType = {
    title: string
    onClickHandler: () => void
    disable: boolean
}
export const SuperButton = (props: SuperButtonType) => {
    const onClickHandler = () => {
        props.onClickHandler()
    }
    const style = props.disable ? s.countDisabled : s.count
    return (
        <button
            onClick={onClickHandler}
            disabled={props.disable}
            className={style}
        >
            {props.title}
        </button>
    );
};

