import React from 'react';
import s from './Footer.module.scss';
import { Logo } from '../logo/Logo';
import tg from '../../assets/img/tg.png';
import inst from '../../assets/img/inst.png';
import gh from '../../assets/img/gh.png';
import link from '../../assets/img/link.png';
import { List } from './list/List';

export const Footer = () => {
  const social = 'tg inst gh link'
  const imgs = {
    tg,
    inst,
    gh,
    link
  }


  return (
    <div className={`${s.content} ${s.wrap} wrap`}>
      <div className={`${s.block} ${s['block_1']}`}>
        <div className={s.withLogo}>
          <div className={`${s['withLogo-logo']}`}>
            <Logo />
          </div>
          <h2 className={`${s['withLogo-title']}`}>
            People Operations Platform
          </h2>
          <p className={`${s['withLogo-text']}`}>
            The people platform for payroll, benefits, claims and much more.
          </p>
          <div className={`${s['withLogo-labels']}`}>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={s.lists}>
          <div className={`${s['lists-products']}`}>
            <List head={'Products'} items={'HRHub Leave Time claims payroll benefits mobile'} />
          </div>
          <List head={'Resources'} items={'Library blog helpCenter pricing'} />
          <List head={'company'} items={'aboutUs customers contactUs press careers partners'} />
          <List head={'legal'} items={'service privacyPolicy Security'} />
        </div>
      </div>


      <div className={`${s.block} ${s['block_2']}`}>
        <div className={s.country}>
          <h4>country</h4>
          <select name="" id="">
            <option value="" disabled>страна</option>
            <option value="">German</option>
            <option value="">Rus</option>
            <option value="">Ukraine</option>
          </select>
        </div>

        <div className={s.contacts}>
          <h4>Contact us</h4>
          <ul>
            <li><a href="">Contact Sales</a></li>
            <li><a href="">support@swingvy.com</a></li>
            <li><a href="">partnership@swingvy.com</a></li>
          </ul>
        </div>

        <div className={`${s.social}`}>
          <h4>Swingvy © 2020</h4>
          <ul>
            {
              social.split(' ').map((el, i) => (
                <li key={i}>
                  <a href="">
                    <img src={imgs[`${el}`]} alt={el} />
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>


    </div>

  )
}