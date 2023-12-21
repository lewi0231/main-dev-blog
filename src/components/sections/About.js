import React from 'react'
import * as styles from '../../styles/about.module.css'

const About = () => {
    return (
        <section id='about' className={styles.container}>
            <h2>A bit <span>about</span> me.</h2>
            <p>
                Hello! After a rewarding and yet ultimately unfullfilling career in the human services domain.  I embarked on a journey into the realm of computing and the web.  There I discovered a passion for web development and now aim to help people achieve their branding and personal goals through web development and design.

                my passion, This journey was driven by my passion for technology and creation. I cherish the collaborative experiences and skills gained from developing RESTful APIs, conducting performance testing, and working on front-end development.
            </p>
            <p>
                I've embraced freelancing to align with my love for flexibility and creativity. It's a path that allows me to engage deeply with each project and continuously explore new challenges.
            </p>

            <p>
                Outside of coding, I'm inspired by nature and music, which influence my approach to technology – thoughtful, user-centric, and innovative.
            </p>
        </section>
    )
}

export default About
