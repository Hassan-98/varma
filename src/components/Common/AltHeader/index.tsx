import React from 'react';
//= Fonts
import { montserrat_font } from '@/utils/fonts';
//= Styles
import classes from './altheader.module.scss';

interface IProps {
  pageTitle: string;
}

function Header({ pageTitle }: IProps) {
  return (
    <header className={`${classes.header} ${montserrat_font}`}>
      <div className={classes.content}>
        <div className="container">
          <h1 className="wow fadeInUp" data-wow-duration="0.5s">{pageTitle}</h1>
        </div>
      </div>
    </header>
  )
}

export default Header