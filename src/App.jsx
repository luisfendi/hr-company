import React, { useRef, useEffect, useState } from 'react';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import { Footer } from './components/footer/Footer';

import { Outlet } from 'react-router-dom';

import { useInView } from 'react-intersection-observer';
// import { HelpPopup } from './components/popup/HelpPopup.jsx/Popup';
import { Popup } from './components/popup/Popup';
import { Layout } from './components/skeleton/Skeleton';
// import HeadBodyGrid from './components/skeleton/HeadBodyGrid';


export const App = () => {
  const nav_links = 'products pricing partners company'.split(' ')
  const { ref: popup, inView, entry } = useInView({
    rootMargin: '40px',
    threshold: 0,
    delay: 300,
  });


  //skeleton prop
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    let timer = setTimeout(() => {
      // setLoading(false)
    }, 3000)
    return () => { clearTimeout(timer) }
  }, [])

  const [popup_help, setPopup_help] = useState(true)

  return (
    <>
      {
        loading && <Layout />
      }
      {
        !loading && (<>
         <div id="detail">
        <Header nav={nav_links} />
          <Outlet />
        <Footer />
        <div className="popup popup__help">
              <Popup
                msg={"Заказать звонок помощника"}
                btn="хочу звонок"
                show={inView && popup_help}
                // show={ popup_help}
                close={() => setPopup_help(false)}
              />
         </div>
      </div>
          </div>
        </>)
      }
    </>


  )
}