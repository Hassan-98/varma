import React, { useEffect } from 'react';
//= Fonts
import { montserrat_font, inter_font } from '@/utils/fonts';
//= Utils
import parallaxie from '@/utils/parallaxie';
//= Styles
import classes from './form.module.scss';

function Form() {
  useEffect(() => {
    parallaxie(`.${classes.working_hours}`, 0.7);
  }, []);


  return (
    <section className="container">
      <div className={`${classes.form} ${montserrat_font}`}>
        <div className="row g-4">
          <div className="col-xl-7 col-12">
            <div className={classes.form_container}>
              <h3>Book an appoinment</h3>
              <p>Lorem Ipsum is simply dummy text of  printing and typesetting industry standard dummy text the with the release.</p>
              <form>
                <input type="text" placeholder="Name" className={inter_font} />
                <input type="email" placeholder="Email" className={inter_font} />
                <input type="tel" placeholder="Phone" className={inter_font} />
                <input type="text" placeholder="Department" className={inter_font} />
                <input type="datetime-local" placeholder="Date" className={inter_font} />
                <select>
                  <option value="null">Choose Doctor</option>
                  <option value="null">Name 1</option>
                  <option value="null">Name 1</option>
                </select>
                <textarea rows={5} placeholder="Message..." className={inter_font}></textarea>
                <button className={inter_font}>Send Message</button>
              </form>
            </div>
          </div>
          <div className="col-xl-5 col-12">
            <div className={`${classes.working_hours} wow fadeInUp`} data-wow-duration="0.5s" data-background="/images/doctor-timing.jpg">
              <div className={classes.info}>
                <p className={classes.sub_title}>TIME</p>
                <h3>Working Hours</h3>
                <p>Sunday To Friday 9.00 am - 10.00 pm Saturday Closed</p>
              </div>
            </div>
            <div className={classes.question}>
              <p className={`${classes.title} wow fadeInUp`} data-wow-duration="0.5s">Didn’t Find a Question?</p>
              <p className={`${classes.text} wow fadeInUp`} data-wow-duration="0.5s" data-wow-delay="0.2s">Donec efficitur, enim bibendum volutpat dictum, tellus risus porttitor leo.</p>
              <button className={`${inter_font} wow fadeInUp`} data-wow-duration="0.5s" data-wow-delay="0.4s">More Questions</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Form