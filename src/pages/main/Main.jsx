import React from "react";
import { Info } from '../../components/info/Info';
import { Options } from '../../components/options/Options';
import { Slider } from '../../components/slider/Slider.jsx';
import { Yellow } from '../../components/yellow/Yellow';
import { Support } from '../../components/support/Support';
import { Mission } from '../../components/mission/Mission';
import { Menegment } from '../../components/menegment/Menegment';



export const Main = () => {
    return (
        <main>
            <Info />
            <Options />
            <Slider />
            <Yellow />
            <Support />
            <Mission />
            <Menegment />
        </main>
    )
}