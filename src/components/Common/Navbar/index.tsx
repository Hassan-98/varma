import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/router";
//= Fonts
import { inter_font } from '@/utils/fonts';
//= Styles
import classes from './navbar.module.scss';

const NavLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Team", path: "/team" },
  { title: "Contact us", path: "/contact" },
]

function Navbar() {
  const router = useRouter();

  function showNavbarLinks() {
    let links = document.querySelector<HTMLDivElement>(`.${classes.links}`)!;
    links.classList.add(classes.show);
  }

  function hideNavbarLinks() {
    let links = document.querySelector<HTMLDivElement>(`.${classes.links}`)!;
    links.classList.remove(classes.show);
  }

  function handleHideMenu() {
    if (window.matchMedia(`(max-width: 992px)`).matches) {
      let links = document.querySelector<HTMLDivElement>(`.${classes.links}`)!;
      links.classList.remove(classes.show);
    }
  }

  return (
    <nav className={`${classes.navbar} ${inter_font}`}>
      <div className="container">
        <div className={classes.content}>
          <div className={classes.logo}>
            <Link href="/">
              <Image src="/images/logo.svg" width="60" height="60" alt="logo" />
            </Link>
          </div>
          <div className={classes.navbar_toggler} onClick={showNavbarLinks}>
            <i className="fa-duotone fa-bars"></i>
          </div>
          <div className={classes.links}>
            <div className={classes.close} onClick={hideNavbarLinks}>
              <i className="fa-solid fa-xmark"></i>
            </div>
            <div className={classes.links_list}>
              <ul>
                {
                  NavLinks.map(link => (
                    <li key={link.path}>
                      <Link href={link.path} className={(link.path === '/' && router.pathname === '/') ? classes.active : link.path !== '/' && router.pathname.includes(link.path) ? classes.active : ''} onClick={handleHideMenu}>{link.title}</Link>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className={classes.button}>
              <Link href="/appointment">
                <button>Appointment</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar