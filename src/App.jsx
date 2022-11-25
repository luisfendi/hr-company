import React, { useRef, useEffect, useState } from 'react';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import { Info } from './components/info/Info';
import { Options } from './components/options/Options';
import { Slider } from './components/slider/Slider.jsx';
import { Yellow } from './components/yellow/Yellow';
import { Support } from './components/support/Support';
import { Mission } from './components/mission/Mission';
import { Menegment } from './components/menegment/Menegment';
import { Footer } from './components/footer/Footer';
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
          <Sidebar nav={nav_links} />
          <div id="detail">
            <Header nav={nav_links} />
            <main>
              <Info />
              <Options />
              <Slider />
              <Yellow />
              <div ref={popup}>
                <Support />
              </div>
              <Mission />
              <Menegment />
            </main>
            <footer>
              <Footer />
            </footer>
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
        </>)
      }
    </>


  )
}