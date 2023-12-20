import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/tutorial-details.module.css'


const TutorialDetails = ({ data, children }) => {
    const { title } = data.mdx.frontmatter

    const tableOfContents = data.mdx.tableOfContents.items
    console.log(tableOfContents);

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.details}>
                    <h2>{title}</h2>
                    <div>
                        <h3>Table of Contents</h3>
                        <ul className={styles.tableOfContents}>
                            {tableOfContents.map((item, index) => (
                                <li key={index}>
                                    <a href={item.url}>{item.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div itemProp="articleBody">
                        {children}
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
