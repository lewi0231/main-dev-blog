import React from 'react'
import { useSiteMetadata } from '../../hooks/use-site-metadata'
import * as styles from '../../styles/hero.module.scss'
import Button from '../Button'

const Hero = () => {
    const { contact } = useSiteMetadata()

    return (
        <section className={styles.container}>

            <p>Hi, my name is</p>
            <h1 className={styles.heroTitle}>Paul.</h1>
            <h1 className={styles.subtitle}>I'm a Shopify developer</h1>
            <p className={styles.mainText}>...with a passion for web development and making things look good.  Check out some examples of my work here.
            </p>
            <a href={`mailto:${contact}`}>
                <Button
                    buttonText='Get in touch'
                    btnSize='large' />
            </a>

        </section>
    )
}

export default Hero
