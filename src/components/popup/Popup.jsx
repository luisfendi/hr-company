import React, { useRef, useState } from "react";
import s from './Popup.module.scss';
import { Button } from "../button/Button";
import { CSSTransition } from 'react-transition-group';
import './appear.scss';
import { Phone } from "./telForm/Phone";

export const Popup = ({ msg, btn, show, close }) => {
  const nodeRef = useRef(null);
  const [request, setRequest] = useState(false)
  return (
    <CSSTransition
      classNames="my-popup"
      nodeRef={nodeRef}
      mountOnEnter={true}
      unmountOnExit={true}
      appear={true}
      in={show}
      timeout={400}
    >
      <div className={s.popup} ref={nodeRef}>
        <h3 className={s.title}>{msg}</h3>
        <div className={`${s.img} popup-image__help`}></div>
        <button
          onClick={close}
          className={s.close}><span></span></button>
        <p>{`${request}`}</p>
        <div className={s.buttons}>
          {
            !request && (<div className={s.btn} onClick={() => setRequest(true)}>
            <Button >{btn}</Button>
          </div>)
          }
          {
            request && (<div className={s.form}>
              <Phone />
            </div>)
          }
        </div>


      </div>
    </CSSTransition>
  )
}


