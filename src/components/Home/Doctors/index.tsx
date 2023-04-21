import React from 'react';
import Image from 'next/image';
//= Fonts
import { montserrat_font } from '@/utils/fonts';
//= Styles
import classes from './doctors.module.scss';


interface IProps {
  atServicesPage?: boolean;
}

function Doctors({ atServicesPage }: IProps) {
  return (
    <div className={`${classes.doctors} ${montserrat_font}`}>
      <div className="container">
        <div className={classes.head_meta}>
          <p className={classes.sub_title}>{atServicesPage ? 'Team' : 'MEDICAL EXPERTs'}</p>
          <h3>{atServicesPage ? 'The Doctorate Crew' : 'The Professional Doctors'}</h3>
          <button>View All Doctors</button>
        </div>
        <div className="row g-5">
          <div className="col-xl-4 col-md-6 col-12">
            <div className={`${classes.doctor} wow zoomIn`} data-wow-duration="0.6s">
              <Image src="/images/team-1.jpg" width={300} height={350} alt="doctor" />
              <p className={classes.name}>Vanseena Adams</p>
              <p className={classes.position}>Dental Patient</p>
              <div className={classes.icons}>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12">
            <div className={`${classes.doctor} wow zoomIn`} data-wow-duration="0.6s">
              <Image src="/images/team-2.png" width={300} height={350} alt="doctor" />
              <p className={classes.name}>Dr. Helen Wilmore</p>
              <p className={classes.position}>Dental Patient</p>
              <div className={classes.icons}>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12">
            <div className={`${classes.doctor} wow zoomIn`} data-wow-duration="0.6s">
              <Image src="/images/team-3.png" width={300} height={350} alt="doctor" />
              <p className={classes.name}>Dr. Kate Winslot</p>
              <p className={classes.position}>Dental Patient</p>
              <div className={classes.icons}>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.numbers}>
          <div className="row g-5">
            <div className="col">
              <p className={classes.number}>25</p>
              <p className={classes.title}>Years <br /> Experience</p>
            </div>
            <div className="col">
              <p className={classes.number}>893</p>
              <p className={classes.title}>Medicament <br /> Invented</p>
            </div>
            <div className="col">
              <p className={classes.number}>75</p>
              <p className={classes.title}>Awards <br /> Winned</p>
            </div>
            <div className="col">
              <p className={classes.number}>673k</p>
              <p className={classes.title}>Happy <br /> Clients</p>
            </div>
            <div className="col">
              <p className={classes.number}>751</p>
              <p className={classes.title}>Pharmacies <br /> Partners</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctors