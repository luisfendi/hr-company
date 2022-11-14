import React from "react";
import s from './Header.module.scss';
import { Logo } from "../logo/Logo";
import { Link as NavbarLink } from '../links/Link';
import { Button } from "../button/Button";

export const Header = ({ nav }) => {
  return (
    <div className={`${s.header} wrap`}>
      <div className={`${s['header-logo']}`}>
        <Logo/>
      </div>
      <ul className={`${s['header-nav']}`}>
        {
          nav.map((el, i) => (
            <li key={i}>
              <NavbarLink
                onClick={(e) => { e.stopPropagation() }}
                address={`/${el}`}
              >
                {el}
              </NavbarLink>
            </li>
          ))
        }
      </ul>
      <div className={`${s['header-subBlock']}`}>
            <div className={`${s['header-subBlock--button']} ${s['header-subBlock--button__signIn']}`}>
              <Button>sign in</Button>
            </div>
            <div className={`${s['header-subBlock--button']} ${s['header-subBlock--button__request']}`}>
              <Button>request demo</Button>
            </div>
          </div>
    </div>
  )
}