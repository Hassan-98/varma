import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
//= Fonts
import { inter_font, montserrat_font } from '@/utils/fonts';
//= Styles
import classes from './footer.module.scss';

function Footer() {
  return (
    <footer className={`${classes.footer} ${inter_font}`}>
      <div className={classes.content}>
        <div className="container">
          <div className={classes.topbar}>
            <div className={classes.logo}>
              <Link href="/">
                <Image src="/images/logo.svg" width="68" height="68" alt="logo" />
              </Link>
            </div>
            <div className={`${classes.icons} d-none d-md-flex`}>
              <div className={classes.icon}>
                <i className="fa-solid fa-phone"></i>
                <p>(404) 850 - 7080</p>
              </div>
              <div className={classes.icon}>
                <i className="fa-solid fa-at"></i>
                <p>info@varma.com</p>
              </div>
            </div>
          </div>
          <div className={classes.links}>
            <div className="row">
              <div className="col-lg-6 d-none d-lg-block">
                <p className={`${classes.words} ${montserrat_font}`}>“A Simple Story About The Doctorate Medical Center & Health Care Foundation</p>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className={montserrat_font}>Explore</h5>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/team">Team</Link></li>
                  <li><Link href="/faq">FAQ</Link></li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6">
                <h5 className={montserrat_font}>Book an appointment</h5>
                <p>It is a long established fact that a reader will be distracted</p>
                <input type="text" placeholder="your email address" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.copyright}>
        <div className="container">
          <p>Copyright © Varma 2023 | by Hassan Ali </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer