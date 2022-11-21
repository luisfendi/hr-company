import React, {useEffect} from "react";
import s from './Header.module.scss';
import { Logo } from "../logo/Logo";
import { Link as NavbarLink } from '../links/Link';
import { Button } from "../button/Button";
import { drop_menu } from "../../js/dropMenu";

export const Header = ({ nav }) => {

  useEffect(() => {
    drop_menu(s.dropdownItem, `${s['dropdownItem__active']}`)
  })

  return (
    <div className={`${s.header} wrap`}>
      <div className={`${s['header-logo']}`}>
        <Logo />
      </div>
      <ul className={`${s['header-nav']}`}>
        {
          nav.map((el, i) => (
            <li key={i} className={s.dropdownItem}>
                <NavbarLink
                  onClick={(e) => { e.preventDefault(); e.stopPropagation() }}
                  address={`/${el}`}
                >
                  {el}
                </NavbarLink>
              <ul>
                {
                  [...Array(5)].map((item, k) => (
                    <li key={k}><a href="#">{`${el}_${k+1}`}</a></li>
                  ))
                }
              </ul>
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