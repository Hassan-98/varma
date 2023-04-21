import React from 'react';
//= Fonts
import { montserrat_font } from '@/utils/fonts';
//= Styles
import classes from './whychoose.module.scss';

function WhyChoose() {
  return (
    <div className={`${classes.whychoose} ${montserrat_font}`}>
      <div className="container">
        <p className={`${classes.sub_title} wow fadeInUp`} data-wow-duration="0.6s">
          WHY CHOOSING VARMA
        </p>
        <p className={`${classes.description} wow fadeInUp`} data-wow-duration="0.6s">
          Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate.
        </p>
        <ul>
          {
            new Array(7).fill(null).map((_, i) => (
              <li key={i} className="wow fadeInUp" data-wow-duration="0.6s" data-wow-delay={`${(i * 0.1) + 0.1}s`}><i className="fa-regular fa-circle-check"></i> Blood clotting disorder</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default WhyChoose