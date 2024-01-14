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
                Aside from being a passionate web developer, who would love to help you create your online vision, I love to travel, hike and camp.  I also enjoy writing ambient-electronic music, when inspiration strikes.  You can hear some of my music on Spotify under the pseudonym 'Decoding Seabirds'.
            </p>
            <p>
                Generally, I live a simple life, in which I value minimalism, making time for meditation and exploring creative ideas. You may be interested that I recently learned that my life's purpose should be to live each day more joyfully than the last. Feel free to ask me how I'm going with that one. :)
            </p>

        </section>
    )
}


export default About
