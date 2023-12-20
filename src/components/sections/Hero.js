import React from 'react'
import * as styles from '../../styles/hero.module.css'

const Hero = () => {
    return (
        <section className={styles.content}>
            <p>Hi, my name is</p>
            <h1 className={styles.heroTitle}>Paul Lewis</h1>
            <h1 className={styles.subtitle}>I build things for the web.</h1>
            <p className={styles.mainText}>I'm a software engineer who specialises in Shopify development.
            </p>
            <button className={styles.btn}>
                Get in touch
            </button>
        </section>
    )
}

export default Hero
