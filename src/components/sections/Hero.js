import React from 'react'
import { useSiteMetadata } from '../../hooks/use-site-metadata'
import * as styles from '../../styles/hero.module.scss'
import Button from '../Button'

const Hero = () => {
    const {contact} = useSiteMetadata()

    return (
        <section className={styles.container}>

            <p>Hello, I'm</p>
            <h1 className={styles.heroTitle}>Lewis</h1>
            <h1 className={styles.subtitle}>I build websites</h1>
            <p className={styles.mainText}>A software developer with a passion for web development.  Currently utilising React, Shopify, and WordPress to turn your vision into a vibrant digital reality.
            </p>
            <a href={`mailto:${contact}`}>
                <Button
                    className={styles.btn}
                    buttonText='Get in touch'
                    btnSize='large' />
            </a>

        </section>
    )
}

export default Hero
