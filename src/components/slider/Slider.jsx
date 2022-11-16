import React, { useEffect } from "react";
import s from './Slider.module.scss';
// import { add_script} from "./add_script";
// import { start_slider } from "./start_slider";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import grandma from '../../assets/img/grandma.png';
import gray_girl from '../../assets/img/gray_girl.png';
import muslim from '../../assets/img/muslim.png';
import red_girl from '../../assets/img/red_girl.png';
import smile_man from '../../assets/img/smile_man.png';
import smile_girl from '../../assets/img/smile-girl.png';
import blue_man from '../../assets/img/blue_man.png';

export const Slider = () => {
  const people = [
    grandma, gray_girl, muslim, red_girl, smile_girl, smile_man, blue_man
  ]
  const targets = 'ceo hr employees softdevelopment recrouter ui ux'.split(' ')

  function SliderItem({ src, target, text }) {
    return (
      <div className={`${s.item}`}>
        <div className={`${s['item-image']}`}>
          <img src={src} alt="avatar" />
        </div>
        <h5>
          for {target}
        </h5>
        <p>
          {text}
        </p>
      </div>
    )
  }

  const props = {
    emulateTouch: true
  }

  return (
    <div className={`${s.content} wrap`}>
      <p className={`${s['content-text']}`}>people central</p>
      <h2 className={`${s['content-title']}`}>Bring your people together in one place.</h2>
      {/* <div className={s.slider}> */}
      <Carousel {...props}>
        {
          people.map((el, i) => (
            <div key={i}>
              <SliderItem src={el} target={targets[i]} />
            </div>
          ))
        }
      </Carousel>
      {/* </div> */}
    </div>
  )
}