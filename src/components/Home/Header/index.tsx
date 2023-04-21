import React from 'react';
//= Fonts
import { montserrat_font } from '@/utils/fonts';
//= Styles
import classes from './header.module.scss';

function Header() {
  return (
    <header className={`${classes.header} ${montserrat_font}`}>
      <div className="container">
        <p className={`${classes.sub_title} wow fadeInUp`} data-wow-duration="0.6s">MEDICAL PROFESSIONALS</p>
        <h1 className="wow fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.2s">Makes Your Health Better Will Makes Us Better</h1>
        <p className={`${classes.text} wow fadeInUp`} data-wow-duration="0.6s" data-wow-delay="0.3s">Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health quickly and easily.</p>
        <button className="wow fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.4s">Get Started</button>
      </div>
    </header>
  )
}

export default Header