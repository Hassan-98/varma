import React from 'react';
//= Fonts
import { inter_font } from '@/utils/fonts';
//= Styles
import classes from './topbar.module.scss';

function Topbar() {
  return (
    <div className={`${classes.topbar} ${inter_font}`}>
      <div className="container">
        <div className={classes.content}>
          <div className={`${classes.text} d-none d-lg-block`}>
            <p>Welcome to Varma. We provides medical accessories</p>
          </div>
          <div className={classes.icons}>
            <div className={classes.icon}>
              <i className="fa-light fa-phone"></i>
              <p>(404) 850 - 7080</p>
            </div>
            <div className={classes.icon}>
              <i className="fa-light fa-at"></i>
              <p>info@varma.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar