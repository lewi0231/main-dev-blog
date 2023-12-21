import React from 'react'
import * as styles from '../../styles/hero.module.css'

const Hero = () => {
    return (
        <section className={styles.content}>
            <p>Hello, I'm</p>
            <h1 className={styles.heroTitle}>Lewis</h1>
            <h1 className={styles.subtitle}>I build websites</h1>
            <p className={styles.mainText}>A software developer with a passion for web development.  Currently utilising React, Shopify, and WordPress to turn your vision into a vibrant digital reality.
            </p>
            <button className={styles.btn}>
                Get in touch
            </button>
        </section>
    )
}

export default Hero
