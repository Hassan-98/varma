import React, { useState, useEffect } from 'react';
import ModalVideo from 'react-modal-video'
//= Fonts
import { montserrat_font } from '@/utils/fonts';
//= Styles
import classes from './info.module.scss';
//= Utils
import parallaxie from '@/utils/parallaxie';

function Info() {
  const [isVideoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    parallaxie(`div.${classes.video}`, 0.6);
  }, []);

  return (
    <section className={`${classes.info} ${montserrat_font}`}>
      <div className="container">
        <h2 className="wow fadeInUp" data-wow-duration="0.5s">Our team helps you get your life back on track.</h2>
        <p className={`${classes.subtitle} wow fadeInUp`} data-wow-duration="0.5s">
          Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health quickly and easily. We thoroughly evaluate & treat all of the contributing root factors related to your issue. Includes, but is not limit, your work and home stressors.
        </p>
        <div className={classes.video} onClick={() => setVideoOpen(true)} data-background="/images/video-bg.jpg">
          <span><i className="fa-solid fa-play"></i></span>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className={classes.pane}>
              <p className={`${classes.sub_title} wow fadeInLeft`} data-wow-duration="0.5s">THE LEADERS</p>
              <h3 className="wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay="0.2s">We have the best Pharma & Medical</h3>
              <p className={`${classes.text} wow fadeInLeft`} data-wow-duration="0.5s" data-wow-delay="0.4s">
                Collaboratively administrate empowered markets via plug-and-play networks. users after installed base benefits. Dramatically visualize customer.
              </p>
              <p className={`${classes.text} wow fadeInLeft`} data-wow-duration="0.5s" data-wow-delay="0.6s">
                Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className={classes.pane}>
              <p className={`${classes.sub_title} wow fadeInRight`} data-wow-duration="0.5s">OUR STORY</p>
              <h3 className="wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0.2s">Our mission is to help patients live better.</h3>
              <p className={`${classes.text} wow fadeInRight`} data-wow-duration="0.5s" data-wow-delay="0.4s">
                Collaboratively administrate empowered markets via plug-and-play networks. users after installed base benefits. Dramatically visualize customer.
              </p>
              <ul>
                <li className="wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0.5s">Over 400 leading hospitals and clinics</li>
                <li className="wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0.6s">Trusted doctors across 20+ specialties</li>
                <li className="wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0.7s">Award-winning practice management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo channel='youtube' isOpen={isVideoOpen} videoId="t2dvY86rHyc" onClose={() => setVideoOpen(false)} />
    </section>
  )
}

export default Info