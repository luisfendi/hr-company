import React, { useState } from "react";
import s from './Select.module.scss';
import russia from '../../assets/img/russia.png';
import usa from '../../assets/img/usa.png';
import canada from '../../assets/img/canada.png';
import germany from '../../assets/img/germany.png';


export const Select = ({ options }) => {
  const [current, setCurrent] = useState('выбрать страну')
  const [open, setOpen] = useState(false)
  const countries = {russia, usa, canada, germany}
  return (
    <div className={`${s.block} ${open ? s['block__open'] : ''}`}>
      <div className={s.firstRow}>
        <h4 className={s['block-current']}>{current}
          
        </h4>
        <span className={s['block-icon']} style={{backgroundImage: `url(${countries[current.toLowerCase()]})`}}> 
        </span>
        <button className={s['block-btn']} type='button' onClick={() => setOpen(!open)}>
          <span >
          </span>
        </button>
      </div>
      <ul className={s['block-select']}>
        {
          options.split(' ').map((option, i) => (
            <li
              value={option}
              key={i}
              onClick={() => { setCurrent(option); setOpen(false) }}
            >{option}</li>
          ))
        }
      </ul>
    </div>

  )
}