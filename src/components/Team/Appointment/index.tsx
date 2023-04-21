import React from 'react';
import Image from 'next/image';
//= Fonts
import { montserrat_font, inter_font } from '@/utils/fonts';
//= Styles
import classes from './appointment.module.scss';

function Appointment() {
  return (
    <div className={`${classes.appointment} ${montserrat_font}`}>
      <div className="row g-0">
        <div className="col-xl-8 col-12">
          <div className={`${classes.schedule}`}>
            <p className={`${classes.sub_title} wow pulse`} data-wow-duration="0.6s">BOOK AN APPOINTMENT</p>
            <p className="wow pulse" data-wow-duration="0.6s">Our Medical Team is Ready to Help You.</p>
            <div className={classes.actions}>
              <button className={`${inter_font} wow pulse`} data-wow-duration="0.6s">Book an Appointment</button>
              <span className={inter_font}>(OR)</span>
              <button className={`${inter_font} wow pulse`} data-wow-duration="0.6s">Call: 1-800-123-9999</button>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-12">
          <div className={classes.image}>
            <Image src="/images/appointment.jpg" width={600} height={575} alt="operation" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointment