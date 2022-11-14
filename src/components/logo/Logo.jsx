import React from "react";
import s from './Logo.module.scss';
import logo from '../../assets/img/logo.png';
export const Logo = () => {
  return (
    <div className={s.logo}>
      <img src={logo} alt="logo" />
    </div>
  )
}