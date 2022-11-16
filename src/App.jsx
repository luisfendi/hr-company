import React from 'react';
import { CSSTransition } from "react-transition-group";
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import { Info } from './components/info/Info';
import { Options } from './components/options/Options';
import { Slider } from './components/slider/Slider.jsx';

export const App = () => {
  const nav_links = 'products pricing partners company'.split(' ')

  return (
    <>
      <Sidebar nav={nav_links} />
      <div id="detail">
        <Header nav={nav_links} />
        <main>
          <Info />
          <Options />
          <Slider/>
        </main>
      </div>
    </>
  )
}