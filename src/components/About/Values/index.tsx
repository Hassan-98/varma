import React from 'react';
import Image from 'next/image';
//= Fonts
import { montserrat_font } from '@/utils/fonts';
//= Data
import data from './data.json';
//= Styles
import classes from './values.module.scss';

function Values() {
  return (
    <section className={`${classes.values} ${montserrat_font}`}>
      <div className="container">
        <div className={classes.top}>
          <h2 className="wow fadeInUp" data-wow-duration="0.5s">Our values that drive success</h2>
          <p className="wow fadeInUp" data-wow-duration="0.5s">Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health quickly and easily. We thoroughly evaluate & treat all of the contributing factors.</p>
        </div>
        <div className="row g-5 mt-5">
          {
            data.map((item, index) => (
              <div className="col-lg-3 col-md-6 col-12" key={item.id}>
                <div className={`${classes.value} wow zoomIn`} data-wow-duration="0.5s" data-wow-delay={`${(index * 0.1) + 0.2}s`}>
                  <div className={classes.image}>
                    <Image src={item.image} width={40} height={40} alt="value icon" />
                  </div>
                  <p className={classes.title}>{item.title}</p>
                  <p className={classes.text}>{item.text}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Values