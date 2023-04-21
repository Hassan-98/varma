import React from 'react';
import Image from 'next/image';
//= Fonts
import { montserrat_font } from '@/utils/fonts';
//= Styles
import classes from './info.module.scss';

function Info() {
  return (
    <section className={`${classes.info} ${montserrat_font}`}>
      <div className="container">
        <p className={classes.subtitle}>CONTACT US</p>
        <h2>Get In Touch With Us!</h2>
        <div className="row g-5">
          <div className="col-xl-4 col-lg-6 col-12">
            <div className={`${classes.box} wow fadeInUp`} data-wow-duration="0.5s">
              <div className={classes.image}>
                <Image src="/images/icons/address.svg" width={30} height={30} alt="icon" />
              </div>
              <h5>Address</h5>
              <p>209 North Dunbar St. <br /> Santa Monica, CA 90403</p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-12">
            <div className={`${classes.box} wow fadeInUp`} data-wow-duration="0.5s" data-wow-delay="0.2s">
              <div className={classes.image}>
                <Image src="/images/icons/phone.svg" width={30} height={30} alt="icon" />
              </div>
              <h5>Call Us</h5>
              <p>(+22) 123 - 4567 - 900 <br /> (+22) 123 - 4567 - 901</p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-12">
            <div className={`${classes.box} wow fadeInUp`} data-wow-duration="0.5s" data-wow-delay="0.4s">
              <div className={classes.image}>
                <Image src="/images/icons/email.svg" width={30} height={30} alt="icon" />
              </div>
              <h5>E-mail Us </h5>
              <p>support@doctorate.com <br /> yourmail@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info