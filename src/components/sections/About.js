import React from 'react'
import * as config from '../../config'
import * as styles from '../../styles/about.module.scss'

const About = () => {
    const spotify = config.default.socialMedia.filter((media) => {
        if (media.name === "Spotify") {
            return true
        }
        return false
    })

    const spotifyUrl = spotify?.[0]?.url


    return (
        <section id='about' className={styles.container}>
            <h2>A bit <span>about</span> me.</h2>
            <p>
                After a rewarding and yet ultimately unfulfilling career in human services, I decided to follow my dream of becoming a software engineer.  This led me to completing a degree in computer science which in turn led me to a role with Fivecast (an Adelaide-based company specialising in open-sourced intelligence). There, I worked with technologies such as Typescript, React, Docker, Java, Spring, PostgreSQL.
            </p>
            <p>
                With a keen spirit for adventure, continuous-learning and creativity I left to explore the realm of freelancing.  Since then I have delved deeper into e-commerce solutions such as Shopify and Medusa.  Click <a href="#articles">here</a> to view some of my shopify-related articles.
            </p>
            <p>
                Outside of coding, I'm inspired by nature and music (you can hear some of my music <a href="https://open.spotify.com/artist/5Sjxm1sfYr74l1iwTGcbJt?si=81K0QaxTSwygKywfZZK5Mg">here</a> - under the pseudonym Decoding Seabirds), which I believe influences my approach to technology.
                
            </p>
        </section>
    )
}

export default About
