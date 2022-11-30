import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Burger from "../burger/Burger";
import s from './Sidebar.module.scss';
import './appear_animation.scss';
import { Link as SidebarLink } from '../links/Link';
import { Button } from "../button/Button";
import { Logo } from "../logo/Logo";
import { Link } from "react-router-dom";

export const Sidebar = ({ nav }) => {
  const [sidebar, setSidebar] = useState(false);
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={sidebar}
      nodeRef={nodeRef}
      timeout={100}
      classNames={'my-node'}
    >
      <div
        id="sidebar"
        className={s.sidebar}
        ref={nodeRef}
        onClick={() => { setSidebar(false) }}
      >
        <div className={`${s['sidebar-content']}`}>
          <div className={s.logo}>
            <Logo />
          </div>
          <ul className={`${s['sidebar-nav']}`}
            onClick={(e) => { e.stopPropagation() }}
          >
            <Burger
              open={sidebar}
              clickBurger={() => { setSidebar(!sidebar) }}
            />
            {
              nav.map((el, i) => (
                <li key={i}>
                  <SidebarLink
                    onClick={(e) => { e.stopPropagation(); setSidebar(false); }}
                    address={`/${el}`}
                  >
                    {el}
                  </SidebarLink>
                </li>
              ))
            }
            <li><Link to='pricing'>pricing</Link></li>
            <li> <Link to='company'>company</Link></li>
          </ul>

          <div className={`${s['sidebar-subBlock']}`}>
            <div className={`${s['sidebar-subBlock--button']} ${s['sidebar-subBlock--button__signIn']}`}>
              <Link to={'/login'}>
                <Button>sign in</Button>
              </Link>
            </div>
            <div className={`${s['sidebar-subBlock--button']} ${s['sidebar-subBlock--button__request']}`}>
              <Link to={'/demo'}>
                <Button>request demo</Button>
              </Link>
            </div>
          </div>
        </div>



      </div>
    </CSSTransition>
  )
}