import React from 'react';
import s from './Yellow.module.scss';
import { Button } from '../button/Button';

export const Yellow = () => {
  return (
    <div className={`${s.content} ${s.wrap} wrap`}>

      <div className={`${s['content-part']}`}>
        <p className={`${s['content-text']}`}>swingvy is psg approved</p>
        <h2 className={`${s['content-title']}`}>Get up to 80% funding when you choose Swingvy</h2>
        <div className={`${s['content-button']}`}>
        <Button>learn more</Button>
        </div>
      </div>
      <div className={`${s.labels} ${s['content-part']}`}>
        <div className={`${s['labels-one']}`}></div>
        <div className={`${s['labels-two']}`}></div>
      </div>
    </div>

  )
}