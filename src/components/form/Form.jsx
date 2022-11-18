import React from "react";
import s from './Form.module.scss';
import { Button } from "../button/Button";

export const Form = () => {
  return (
    <div className={s.form}>
      <h2>Help us get to know you better </h2>
      <form action="#">
        <input type="text" name="" id="" placeholder="Full Name" />
        <input type="text" name="" id="" placeholder="Work email" />
        <input type="text" name="" id="" placeholder="Phone Number" />
        <input type="text" name="" id="" placeholder="Company" />
        <input type="text" name="" id="" placeholder="Company Size" />
        <div className={s.button}>
          <Button>Request demo</Button>
        </div>
      </form>
    </div>
  )
}