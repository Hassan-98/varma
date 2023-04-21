import React from 'react';
import Image from 'next/image';
//= Fonts
import { montserrat_font } from '@/utils/fonts';
//= Styles
import classes from './crew.module.scss';

function Crew() {
  return (
    <section className={`${classes.crew} ${montserrat_font}`}>
      <div className="container">
        <div className="row g-5">
          <div className="col-xl-4 col-md-6 col-12">
            <div className={`${classes.doctor} wow zoomIn`} data-wow-duration="0.6s">
              <Image src="/images/team-4.jpg" width={280} height={350} alt="doctor" />
              <p className={classes.name}>Dr Adams Will</p>
              <p className={classes.position}>Stuff Nurse</p>
              <div className={classes.icons}>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12">
            <div className={`${classes.doctor} wow zoomIn`} data-wow-duration="0.6s">
              <Image src="/images/team-3.png" width={280} height={350} alt="doctor" />
              <p className={classes.name}>Dr. Kate Winslot</p>
              <p className={classes.position}>Dental Specialist</p>
              <div className={classes.icons}>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12">
            <div className={`${classes.doctor} wow zoomIn`} data-wow-duration="0.6s">
              <Image src="/images/team-6.jpg" width={280} height={350} alt="doctor" />
              <p className={classes.name}>Dr. Sonia	Cameron</p>
              <p className={classes.position}>Dental Expert</p>
              <div className={classes.icons}>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12">
            <div className={`${classes.doctor} wow zoomIn`} data-wow-duration="0.6s">
              <Image src="/images/team-3.png" width={280} height={350} alt="doctor" />
              <p className={classes.name}>Dr. Simon	Smith</p>
              <p className={classes.position}>Dental Specialist</p>
              <div className={classes.icons}>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12">
            <div className={`${classes.doctor} wow zoomIn`} data-wow-duration="0.6s">
              <Image src="/images/team-2.png" width={280} height={350} alt="doctor" />
              <p className={classes.name}>Dr. John	Bell</p>
              <p className={classes.position}>Stuff Nurse</p>
              <div className={classes.icons}>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12">
            <div className={`${classes.doctor} wow zoomIn`} data-wow-duration="0.6s">
              <Image src="/images/team-5.jpg" width={280} height={350} alt="doctor" />
              <p className={classes.name}>Dr. Helen Wilmore</p>
              <p className={classes.position}>Surgery Expert</p>
              <div className={classes.icons}>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Crew