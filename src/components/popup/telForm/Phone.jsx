import React from "react";
import s from './Phone.module.scss';

export const Phone = () => {
  return (
    <form action="#" className={s.form}>
      <input type="tel" />
      <button type="submit"></button>
    </form>
  )
}