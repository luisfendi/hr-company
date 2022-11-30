import React, { useState, useEffect } from "react";
import { Info } from '../../components/info/Info';
import { Options } from '../../components/options/Options';
import { Slider } from '../../components/slider/Slider.jsx';
import { Yellow } from '../../components/yellow/Yellow';
import { Support } from '../../components/support/Support';
import { Mission } from '../../components/mission/Mission';
import { Menegment } from '../../components/menegment/Menegment';
import { Popup } from '../../components/popup/Popup';
import { useInView } from 'react-intersection-observer';
import { Layout } from "../../components/skeleton/Skeleton";
import { Navigation } from "swiper";
import { useLoaderData, useNavigation } from "react-router";

export const loader = async () => {
    // console.log('main loader')
    // const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => response.json())
    // return resp


    return new Promise((res, rej) => {
        setTimeout(() => {
            res()
        }, 500)
    })
}
export const Main = () => {
    const resp = useLoaderData();


    const { ref: popup, inView, entry } = useInView({
        rootMargin: '40px',
        threshold: 0,
        delay: 300,
    });
    const [popup_help, setPopup_help] = useState(true)
    const [loading, setLoading] = useState(true);

    const nav = useNavigation();

    useEffect(() => {
        console.log(nav.state)
        console.log(nav)
        // let timer = setTimeout(() => {
        //     setLoading(false)
        // }, 1200)
        // return () => { clearTimeout(timer) }
    }, [nav.state, nav])



    return (
        <>
            {
                nav.state == 'loading' && <Layout />
            }
            {
                nav.state != 'loading' && (
                    <main>
                        <Info />
                        <Options />
                        <Slider />
                        <Yellow />
                        <Support />
                        <Mission />
                        <div ref={popup}></div>
                        <Menegment />
                        <div className="popup popup__help">
                            <Popup
                                msg={"Заказать звонок помощника"}
                                btn="хочу звонок"
                                show={inView && popup_help}
                                close={() => setPopup_help(false)}
                            />
                        </div>
                    </main>
                )
            }
        </>

    )
}