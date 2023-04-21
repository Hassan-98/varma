import React from 'react';
import Image from 'next/image';
//= Fonts
import { montserrat_font } from '@/utils/fonts';
//= Styles
import classes from './specialcare.module.scss';

function SpecialCare() {
  return (
    <div className={`${classes.specialcare} ${montserrat_font}`}>
      <div className="container">
        <div className="row g-5 g-lg-0">
          <div className="col-lg-6 col-12">
            <div className={classes.info}>
              <p className={`${classes.sub_title} wow fadeInLeft`} data-wow-duration="0.6s">SPEACIAL CARE</p>
              <h3 className="wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay="0.1s">We provide a best care for your health with specialist</h3>
              <p className="wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay="0.2s">Collaboratively administrate empowered markets via plug-and-play networks. <strong>Dynamically procrastinate B2C</strong> users after installed base benefits. Dramatically visualize customer.</p>
              <p className="wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay="0.13s">Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate.</p>
              <ul>
                <li className="wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay="0.4s"><i className="fa-solid fa-badge-check"></i> 20+ years of excellence</li>
                <li className="wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay="0.5s"><i className="fa-solid fa-badge-check"></i> Professional Experts</li>
              </ul>
              <button className="wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay="0.6s">Discover Now</button>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className={`${classes.images} wow fadeInUp`} data-wow-duration="0.6s">
              <Image src="/images/doctor-2.png" width={270} height={550} alt="doctor" />
              <Image src="/images/doctor-1.png" width={270} height={550} alt="doctor" />
              <div className={classes.doc_name}>
                <p>Mark Broownn</p>
                <span>Multispecialist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialCare