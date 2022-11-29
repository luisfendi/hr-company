import React from "react";
import s from './Spinner.module.scss';

export const Spinner = () => {
    return (
        <div className={s.loader}>
            <div className={`${s['loader-spiner']}`}></div>
        </div>
    )
}