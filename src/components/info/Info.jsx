import React from "react";
import s from './Info.module.scss';
import { Button } from "../button/Button";
export const Info = () => {
  return (
    <div className={s.content}>
      <p>people operations platform</p>
      <h2>For HR people who do everything.</h2>
      <div className={s.button}>
        <Button>request demo</Button>
      </div>

      <div className={s.photos}>
        {
          [...Array(7)].map((el, i) => (
            <div key={i} className={`${s['photos-item']} ${s['item']}`}></div>
          ))
        }
      </div>
    </div>
  )
}