import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useCallback, useEffect, useState } from 'react';
import * as styles from '../styles/navbar.module.scss';
import Logo from './Logo';



export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos);

    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos])

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
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll])

  return (
    <nav className={`${styles.navContainer} ${visible ? styles.sticky : ''}`}>
      <Logo text="LP" />
      <div className="links">
        <Link to="/">home</Link>
        <Link to="/#about">about</Link>
        <Link to="/#tutorials">tutorials</Link>
      </div>
    </nav>
  )
}