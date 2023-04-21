import React, { useEffect } from 'react';
//= Fonts
import { montserrat_font } from '@/utils/fonts';
//= Styles
import classes from './working_hours.module.scss';
//= Utils
import parallaxie from '@/utils/parallaxie';

function WorkingHours() {
  useEffect(() => {
    parallaxie(`div.${classes.working_hours}`, 0.6);
  }, []);

  return (
    <section className="container">
      <div className={`${classes.working_hours} ${montserrat_font}`} data-background="/images/working-hours-bg.jpg">
        <div className={classes.box}>
          <p className={classes.sub_title}>TIME</p>
          <h3>Working Hours</h3>
          <p>Sunday To Friday 9.00 am - 10.00 pm Saturday Closed</p>
        </div>
      </div>
    </section>
  )
}

export default WorkingHours