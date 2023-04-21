import React from 'react';
import Image from 'next/image';
//= Fonts
import { montserrat_font } from '@/utils/fonts';
//= Data
import partnersData from './data.json';
//= Styles
import classes from './appointment.module.scss';

function Appointment() {
  return (
    <div className={`${classes.appointment} ${montserrat_font}`}>
      <div className="container">
        <div className={classes.partners}>
          {
            partnersData.map((partner, index) => (
              <div className={`${classes.partner} wow fadeInUp`} data-wow-duration="0.6s" data-wow-delay={`${(index * 0.1) + 0.1}s`} key={index}>
                <Image src={partner} width={180} height={35} alt="partner logo" />
              </div>
            ))
          }
        </div>
        <div className={`${classes.schedule}`}>
          <p className="wow pulse" data-wow-duration="0.6s">Schedule an imperson or virtual appointment today</p>
          <button className="wow pulse" data-wow-duration="0.6s">Book an Appointment</button>
        </div>
      </div>
    </div>
  )
}

export default Appointment