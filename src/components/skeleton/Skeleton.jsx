import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './skeleton.scss';
import  {size_detect} from '../slider/size_detect';
import React from 'react';


export const Layout = () => {

  return (
    <div className="skeleton">
      <div className="block skeleton-header">
        <Skeleton width={80} height={30} />
      </div>


      <section className="block">
        <div className="skeleton-main">
          <Skeleton width={'100%'} height="100%" />
        </div>
      </section>

      <section className="block">
        <Skeleton width={200} />
        <Skeleton width={250} />
        <div className="skeleton-main">
          <Skeleton width={'100%'} height="100%" />
        </div>

      </section>

      <section className="block">
        <Skeleton width={200} />
        <Skeleton width={150} />
        <div className="skeleton-slider">
          {
            Array(size_detect()).fill()
              .map((el, i) => (
                <div key={i}>
                  <Skeleton circle={true} width={50} height={50} />
                  <Skeleton width={50} />
                  <Skeleton width={100} />
                  <Skeleton width={100} />
                </div>
              ))
          }
        </div>
      </section>

      <section className="block">
        <div className="skeleton-main">
          <Skeleton width={'100%'} height={'20vh'} />
        </div>
      </section>
    </div>
  )
}