import React from "react";
import s from './Button.module.scss';

export const Button = ({children}) => {
  return (
    <div className={s.button}>
      <button>
        {children}
      </button>
    </div>
  )
}