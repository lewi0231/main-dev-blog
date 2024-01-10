import React from 'react'
import { useSiteMetadata } from '../../hooks/use-site-metadata'
import * as styles from '../../styles/contact.module.scss'
import Button from '../Button'

const Contact = () => {
    const { contact } = useSiteMetadata()

    return (
        <div id='contact' className={styles.container}>
            <h2>Get In Touch</h2>
            <p>Whether you are looking for some help customizing your Shopify store, would like a website built from the ground up, or you'd just like to say hi, I'd love to hear from you!</p>
            <a href={`mailto:${contact}`} >
                <Button buttonText="Say Hi!" />
            </a>
        </div>
    )
}

export default Contact
