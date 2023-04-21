import React from 'react';
//= Fonts
import { montserrat_font, inter_font } from '@/utils/fonts';
//= Styles
import classes from './consultations.module.scss';

function Consultations() {
  return (
    <div className={`${classes.consultations} ${montserrat_font}`}>
      <div className={`${classes.schedule}`}>
        <p className="wow pulse" data-wow-duration="0.6s">Online consultations with Certified doctors</p>
        <div className={classes.actions}>
          <button className={`${inter_font} wow pulse`} data-wow-duration="0.6s">Book an Appointment</button>
          <span className={inter_font}>(OR)</span>
          <button className={`${inter_font} wow pulse`} data-wow-duration="0.6s">Call: 1-800-123-9999</button>
        </div>
      </div>
    </div>
  )
}

export default Consultations