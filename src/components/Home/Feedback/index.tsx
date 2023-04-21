import React from 'react';
import Image from 'next/image';
//= Fonts
import { montserrat_font } from '@/utils/fonts';
//= Styles
import classes from './feedback.module.scss';

function Feedback() {
  return (
    <div className={`${classes.feedback} ${montserrat_font}`}>
      <div className="container">
        <p className={classes.sub_title}>FEEDBACK</p>
        <h3>Feedbacks about our service from the bottom of heart</h3>
        <div className="row g-4">
          <div className="col-lg-6 col-12">
            <div className={classes.item}>
              <i className="fa-solid fa-quote-right"></i>
              <div className={classes.meta}>
                <Image src="/images/testim-1.png" width={68} height={68} alt="feedback picture" />
                <div className={classes.info}>
                  <p className={classes.name}>Robert Davis</p>
                  <p className={classes.position}>Dental Patient</p>
                </div>
              </div>
              <hr />
              <p className={classes.feedback_text}>
                Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate.
              </p>
              <div className={classes.stars}>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className={classes.item}>
              <i className="fa-solid fa-quote-right"></i>
              <div className={classes.meta}>
                <Image src="/images/testim-2.png" width={68} height={68} alt="feedback picture" />
                <div className={classes.info}>
                  <p className={classes.name}>Vanseena Adams</p>
                  <p className={classes.position}>Dental Patient</p>
                </div>
              </div>
              <hr />
              <p className={classes.feedback_text}>
                Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate.
              </p>
              <div className={classes.stars}>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className={classes.item}>
              <i className="fa-solid fa-quote-right"></i>
              <div className={classes.meta}>
                <Image src="/images/testim-3.png" width={68} height={68} alt="feedback picture" />
                <div className={classes.info}>
                  <p className={classes.name}>Mark Brown</p>
                  <p className={classes.position}>Dental Patient</p>
                </div>
              </div>
              <hr />
              <p className={classes.feedback_text}>
                Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate.
              </p>
              <div className={classes.stars}>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className={classes.item}>
              <i className="fa-solid fa-quote-right"></i>
              <div className={classes.meta}>
                <Image src="/images/testim-4.png" width={68} height={68} alt="feedback picture" />
                <div className={classes.info}>
                  <p className={classes.name}>Vanseena Adamss</p>
                  <p className={classes.position}>Dental Patient</p>
                </div>
              </div>
              <hr />
              <p className={classes.feedback_text}>
                Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate.
              </p>
              <div className={classes.stars}>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback