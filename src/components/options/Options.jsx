import React, { useState } from "react";
import s from './Options.module.scss';
import { optimize } from "../../js/optimizePhoto";
//photos
import hRHub from '../../assets/img/hRHub.svg';
import leave from '../../assets/img/leave.svg';
import claims from '../../assets/img/claims.svg';
import payroll from '../../assets/img/payroll.svg';
import benefits from '../../assets/img/benefits.svg';
import mobile from '../../assets/img/mobile.svg';
import time from '../../assets/img/time.svg';
import business_hRHub from '../../assets/img/business_hRHub.jpg';
import business_leave from '../../assets/img/business_leave.jpg';
import business_claims from '../../assets/img/business_claims.jpg';
import business_payroll from '../../assets/img/business_payroll.jpg';
import business_benefits from '../../assets/img/business-benefits.jpg';
import business_mobile from '../../assets/img/business_mobile.jpg';
import business_time from '../../assets/img/business_mobile.jpg';



export const Options = () => {
  const [theme, setTheme] = useState('hRHub')

  const map = {
    hRHub: [hRHub, '#EAF3FF', business_hRHub],
    mobile: [mobile, '#EAF3FF', business_mobile],
    leave: [leave, '#FFF8E4', business_leave],
    time: [time, '#FFF3EF', business_time],
    claims: [claims, '#E2FBF2', business_claims],
    payroll: [payroll, '#F1F1FC', business_payroll],
    benefits: [benefits, '#F3E5F5', business_benefits],
  };

  function Build() {
    optimize(`.${s['bild-image']}`, 'optimize')
    // optimize(`.image`, 'optimize')
    return (
      <>
        <h1>{theme}</h1>
        <div 
        className={`${s['bild-image']} image`}
        // style={{backgroundImage: `url(${map[theme][2]})`}}  
        >
          <img src={`${map[theme][2]}`} alt="" />
        </div>
      </>

    )
  }

  return (
    <div className={`${s.content} ${s.wrap} wrap`}>
      <p>people operations platform</p>
      <h2>Swingvy makes it easy to onboard, play, insure and support.</h2>
      <ul className={s.list}>
        {
          Object.keys(map).map((el, i) => (
            <li
              onClick={() => { setTheme(el) }}
              key={i}
              style={{ backgroundColor: `${map[el][1]}` }}>
              <span style={{ backgroundImage: `url(${map[el][0]})` }}></span>
              <p>{el}</p>
            </li>
          ))
        }
      </ul>
      <div
        className={s.bild}
        style={{ backgroundColor: `${map[theme][1]}` }}>
        <Build />
      </div>
    </div>
  )
}