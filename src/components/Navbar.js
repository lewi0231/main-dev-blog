import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
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

  return (
    <nav className={styles.navContainer}>
      <Logo text="LP" />
      <div className="links">
        <Link to="/">home</Link>
        <Link to="/#about">about</Link>
        <Link to="/#tutorials">tutorials</Link>
      </div>
    </nav>
  )
}