import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useEffect } from 'react';
import * as styles from '../styles/navbar.module.scss';
import Logo from './Logo';



export default function Navbar() {

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata

  useEffect(() => {
    const handleCloseMenu = () => {
      console.log("clicked")
      hamburger.classList.remove(styles.active)
      links.classList.remove(styles.active)
    }

    const hamburger = document.querySelector('#hamburger')
    const links = document.getElementById("links")

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle(styles.active)
      links.classList.toggle(styles.active)
    })

    const allLinks = document.querySelectorAll('#link');

    allLinks.forEach(l => l.addEventListener('click', handleCloseMenu));
  
  
  }, [])

  return (
    <nav id='navContainer' className={`${styles.navContainer} `}>
      <Logo/>
      <div className={styles.links} id='links'>
        <Link id='link' to="/">home</Link>
        <Link id='link' to="/#about">about</Link>
        <Link id='link' to="/#tutorials">tutorials</Link>
      </div>
      <button 
        title='mobile nav' 
        id='hamburger' 
        className={styles.hamburger}
        >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </button>
    </nav>
  )
}