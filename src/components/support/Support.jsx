import React from 'react';
import s from './Support.module.scss';

import comp_1 from '../../assets/img/comp_1.png';
import comp_2 from '../../assets/img/comp_2.png';
import comp_3 from '../../assets/img/comp_3.png';
import comp_4 from '../../assets/img/comp_4.png';
import comp_5 from '../../assets/img/comp_5.png';


export const Support = () => {
  const companies = [comp_1, comp_2, comp_3, comp_4, comp_5];

  return (
    <div className={`${s.content} ${s.wrap} wrap`}>
      <p className={`${s['content-text']}`}>Meet our Customers</p>
      <h2 className={`${s['content-title']}`}>Supporting 9,000 growing companies to manage their HR.</h2>
      <ul className={s.companies}>
        {
          companies.map((el, i) => (
            <li key={i}>
              <img src={el} alt={el} />
            </li>
          ))
        }
      </ul>
    </div>
  )
}