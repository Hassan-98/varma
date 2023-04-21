import React from 'react';
import Link from 'next/link';
//= Fonts
import { inter_font, montserrat_font } from '@/utils/fonts';
//= Styles
import classes from './notfound.module.scss';

function NotFound() {
  return (
    <section className={`${classes.notfound} ${montserrat_font}`}>
      <div className="container">
        <h2>404</h2>
        <h3>Oops! Page not found</h3>
        <Link href="/">
          <button className={inter_font}>Return to Home</button>
        </Link>
      </div>
    </section>
  )
}

export default NotFound