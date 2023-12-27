import { graphql } from 'gatsby'
import React from 'react'
import Button from '../components/Button'
import Layout from '../components/Layout'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import * as styles from '../styles/tutorial-details.module.scss'


const TutorialDetails = ({ data, children }) => {
    const { title } = data.mdx.frontmatter

    const tableOfContents = data.mdx.tableOfContents.items

    const {contact} = useSiteMetadata()

    return (
        <Layout>
            <div className={styles.container}>
                <h2>{title}</h2>
                <div className={styles.mainContent}>
                    <div className={styles.details}>
                        <div>
                            {children}
                        </div>
                    </div>
                    <div className={styles.sidebar}>
                        <h3>TABLE OF CONTENTS</h3>
                        <ul className={styles.tableOfContents}>
                            {tableOfContents.map((item, index) => (
                                <li key={index}>
                                    <a href={item.url}>{item.title}</a>
                                </li>
                            ))}
                        </ul>
                        <a href={`mailto:${contact}`}>
                            <Button buttonText="Need help?" btnSize='small' leftAlign="true" />   
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query TutorialInfo($slug: String) {
        mdx(frontmatter: {slug: {eq: $slug}}) {
            frontmatter {
            title
            tags
            summary
            slug
            }
            internal {
            contentFilePath
            }
            tableOfContents
            body
        }
    }
`

export default TutorialDetails
