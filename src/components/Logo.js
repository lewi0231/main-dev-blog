import { Link } from 'gatsby'
import React from 'react'
import * as styles from '../styles/logo.module.scss'

const Logo = () => {

    return (
        <Link to="/">
            <div className={styles.container}>
                <div className={styles.box}>
                </div>
            </div>
        </Link>
    )
}

export default Logo
