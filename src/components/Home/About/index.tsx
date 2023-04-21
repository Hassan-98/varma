import React, { useEffect } from 'react';
import Image from 'next/image';
//= Fonts
import { montserrat_font } from '@/utils/fonts';
//= Styles
import classes from './about.module.scss';
import parallaxie from '@/utils/parallaxie';

function About() {
  useEffect(() => {
    parallaxie(`section.${classes.about}`, 0.6);
  }, []);

  return (
    <section className={`${classes.about} ${montserrat_font}`} data-background="/images/about-bg2.jpg">
      <div className="container">
        <div className="d-flex justify-content-end">
          <div className={`${classes.about_box} wow fadeInRight`} data-wow-duration="0.6s">
            <p className={classes.sub_title}>About</p>
            <h3>The Heart And Science Of Medicate Test</h3>
            <p className={classes.text}>
              Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with information highway will close.
            </p>
            <div className="row g-3">
              <div className={`col-md-6 col-12 ${classes.box}`}>
                <div className="row align-items-center">
                  <div className="col-lg-4 col-md-3 col-2">
                    <Image src="/images/icons/about-1.svg" width={60} height={60} alt="icon" />
                  </div>
                  <div className="col-lg-8 col-md-9 col-10">
                    <p className={classes.desc}>Speciality Pharma Treatment</p>
                  </div>
                </div>
              </div>
              <div className={`col-md-6 col-12 ${classes.box}`}>
                <div className="row align-items-center">
                  <div className="col-lg-4 col-md-3 col-2">
                    <Image src="/images/icons/about2.svg" width={60} height={60} alt="icon" />
                  </div>
                  <div className="col-lg-8 col-md-9 col-10">
                    <p className={classes.desc}>24 Hours Medical Service</p>
                  </div>
                </div>
              </div>
            </div>
            <button>More About Us</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About