import { Link } from 'gatsby'
import React from 'react'
import { useMarkdownRemark } from '../../hooks/use-markdown-remark'
import * as styles from '../../styles/tutorials.module.css'
import Tutorial from '../Tutorial'

const Tutorials = () => {
    const tutorials = useMarkdownRemark()
    console.log(tutorials)

    return (

        <div id="tutorials" className={styles.tutorialsContainer}>
            <h1>Tutorials.</h1>
            <div className={styles.tutorialsWrapper}>
                {tutorials.map(tutorial => {
                    return <Link key={tutorial.slug} to={"tutorials/" + tutorial.frontmatter.slug}> <Tutorial tutorial={tutorial.frontmatter} /></Link>
                })}
            </div>
        </div>
    )
}

export default Tutorials
