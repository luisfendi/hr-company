import React, { useEffect, useState } from "react";
import s from './Item.module.scss';
import { useLoaderData, useNavigation } from "react-router";
import axios from 'axios';
import { usenav } from "react-router-dom";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Spinner } from '../../components/spinner/Spinner';




export const loader = async ({ params, request }) => {
  const { id, type } = params;
  const url = `https://robohash.org/${type}/${id}`;
  return new Promise(async (res, rej) => {
    const response = await axios.get(url);
    setTimeout(() => {
      res(response)
    }, 200)
  })
    .then((res) => {
      return { id, type, response: res }
    })
  // let response;
  // try {
  //   response = await axios.get(url);
  // }
  // catch {
  //   console.log('error');
  //   throw new Error('что-то при загрузке картинки')
  // }
  // return { id, type, response }
}

export const Item = () => {
  const { type, id, response } = useLoaderData();
  const nav = useNavigation();

  let kind = type == 'products' ?
    'продукт' :
    type == 'partners' ?
      'партнер' : 'no name';


  useEffect(() => {
    // console.log(nav.state)
  }, [id, nav.state]);

  // (
  //   <div>
  //     <Skeleton width={150} />
  //     <Skeleton width={50} />
  //     <Skeleton width={100} height={80} />
  //   </div>
  // )
  return (
    <> {
      nav.state == 'loading' ? <Spinner /> :
        (

          <div className={`${s.item}`}>
            <h1 className={`${s.title}`}>Example</h1>
            <div className={s.img}>
              <img src={response.config.url} alt="" />
            </div>
            <div className={s.text}>
              <h2>{`${kind}: ${id}`}</h2>
              <p className={`${s.description}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nulla officiis libero, excepturi ex soluta?</p>
            </div>
          </div>
        )
    }
    </>
  )
}