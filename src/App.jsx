import React from 'react';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import { Footer } from './components/footer/Footer';
import { Outlet } from 'react-router-dom';

export const App = () => {
  const nav_links = 'products pricing partners company'.split(' ')

  return (
    <>
      <Sidebar nav={nav_links} />

      <div id="detail">
        <Header nav={nav_links} />
          <Outlet />
        <Footer />
      </div>
      <footer>

      </footer>
    </>
  )
}