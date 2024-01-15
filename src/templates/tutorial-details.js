import { graphql } from 'gatsby'
import React from 'react'
import Button from '../components/Button'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import * as styles from '../styles/tutorial-details.module.scss'



const TutorialDetails = ({ data, children }) => {
    const { title, author, date } = data.mdx.frontmatter
    const tableOfContents = data.mdx.tableOfContents.items

    const authorDate = new Date(date);

    const { contact } = useSiteMetadata()

    return (
        <Layout>
            <div className={styles.container}>
                <h3>{title}</h3>
                <div>
                    <p>Written by {author}</p>
                    <p>{authorDate.toISOString().substring(0, 10)}</p>
                </div>
                <div className={styles.mainContent}>
                    <div className={styles.details}>
                        <div>
                            {children}
                        </div>
                    </div>
                    <div className={styles.sidebar}>
                        <h5>TABLE OF CONTENTS</h5>
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
            date
            author
            }
            internal {
            contentFilePath
            }
            tableOfContents
            body
        }
    }
`

export const Head = ({ data }) => {
    const { title, summary } = data.mdx.frontmatter
    console.log(title)
    console.log(summary)
    return (
        <Seo title={title} description={summary} />
    )
}


export default TutorialDetails
