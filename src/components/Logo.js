import { Link } from 'gatsby'
import React from 'react'
import config from '../config'
import * as styles from '../styles/logo.module.scss'

const Logo = () => {
    const path = config.logoPath;

    return (
        <Link to="/">
            <img src={path} className={styles.img} />
        </Link>
    )
}

export default Logo
