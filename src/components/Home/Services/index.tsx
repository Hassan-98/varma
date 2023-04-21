import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
//= Fonts
import { montserrat_font, inter_font } from '@/utils/fonts';
//= data
import servicesData from './data.json';
//= Styles
import classes from './services.module.scss';

interface IProps {
  atServicesPage: boolean;
}

function Services({ atServicesPage }: IProps) {
  return (
    <div className={`${classes.services} ${montserrat_font}`}>
      <div className="container">
        {
          !atServicesPage &&
          <>
            <p className={classes.sub_title}>Services</p>
            <h2>Feel Like Home With Best Medical Care</h2>
          </>
        }
        <div className="row g-4 align-items-center">
          {
            servicesData.map((service, index) => (
              <div className={service.image ? 'col-xl-6 col-12 d-flex flex-wrap flex-sm-nowrap wow fadeInUp' : 'col-xl-3 col-lg-6 col-12 wow fadeInUp'} key={service.id} data-wow-duration="0.6s" data-wow-delay={`${(index * 0.1) + 0.1}s`}>
                <div className={classes.service}>
                  <Image src={service.icon} width={54} height={54} alt={service.title} />
                  <p className={classes.title}>{service.title}</p>
                  <p className={classes.description}>
                    Our team of highl professionals uses the latest heal technologies health quickly and easily.
                  </p>
                  <button className={inter_font}><Link href={`/services/${service.title.toLowerCase()}`}>Read More <i className="fa-solid fa-circle-plus"></i></Link></button>
                </div>
                {
                  service.image &&
                  <Image src={service.image} width={400} height={430} alt='image' className={classes.image} />
                }
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Services