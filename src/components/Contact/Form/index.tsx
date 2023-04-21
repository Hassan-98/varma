import React from 'react';
//= Fonts
import { montserrat_font, inter_font } from '@/utils/fonts';
//= Styles
import classes from './form.module.scss';

function Form() {
  return (
    <section className="container">
      <div className={`${classes.form} ${montserrat_font}`}>
        <form>
          <div className="row g-4">
            <div className="col-lg-6 col-12">
              <div className={`${classes.input}`}>
                <label htmlFor="fullName">Full Name *</label>
                <input type="text" placeholder="John David" id="fullName" className={inter_font} />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className={`${classes.input}`}>
                <label htmlFor="email">Your email *</label>
                <input type="email" placeholder="example@yourmail.com" id="email" className={inter_font} />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className={`${classes.input}`}>
                <label htmlFor="phone">Phone *</label>
                <input type="tel" placeholder="your number here" id="phone" className={inter_font} />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className={`${classes.input}`}>
                <label htmlFor="subject">Subject *</label>
                <input type="text" placeholder="How can we Help" id="subject" className={inter_font} />
              </div>
            </div>
            <div className="col-12">
              <div className={`${classes.input}`}>
                <label htmlFor="message">We can help you?</label>
                <textarea rows={10} placeholder="How can we Help" id="message" className={inter_font}></textarea>
              </div>
            </div>
          </div>
          <button className={inter_font}>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Form