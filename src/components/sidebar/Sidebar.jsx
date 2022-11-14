import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Burger from "../burger/Burger";
import s from './Sidebar.module.scss';
import './appear_animation.scss';
import { Link as SidebarLink } from '../links/Link';
import { Button } from "../button/Button";
import { Logo } from "../logo/Logo";


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
          </ul>

          <div className={`${s['sidebar-subBlock']}`}>
            <div className={`${s['sidebar-subBlock--button']} ${s['sidebar-subBlock--button__signIn']}`}>
              <Button>sign in</Button>
            </div>
            <div className={`${s['sidebar-subBlock--button']} ${s['sidebar-subBlock--button__request']}`}>
              <Button>request demo</Button>
            </div>
          </div>
        </div>



      </div>
    </CSSTransition>
  )
}