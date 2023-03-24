import React from 'react';

type SuperButtonType = {
    title: string
    onClickHandler: ()=>void
    disable: boolean
}
export const SuperButton = (props: SuperButtonType) => {
    const onClickHandler =()=>{
        props.onClickHandler()
    }
    return (
        <button onClick={onClickHandler} disabled={props.disable}>{props.title}</button>
    );
};

