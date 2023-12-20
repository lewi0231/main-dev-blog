import { Link } from 'gatsby'
import React from 'react'
import * as styles from '../styles/logo.module.css'

const Logo = ({ text }) => {
    return (
        <Link to="/">
            <div className={styles.container}>
                <span className={styles.textWrapper}>
                    lp<span className={styles.period}>.</span>
                </span>
            </div>
        </Link>
    )
}

export default Logo
