import React from 'react'
import * as styles from '../../styles/about.module.css'

const About = () => {
    return (
        <section id='about' className={styles.container}>
            <h2>About me.</h2>
            <p>
                Hi! I transitioned into software engineering after a fulfilling career in human services. This journey was driven by my passion for technology and creation. I cherish the collaborative experiences and skills gained from developing RESTful APIs, conducting performance testing, and working on front-end development.
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
