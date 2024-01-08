import React from 'react'
import { useMarkdownRemark } from '../../hooks/use-markdown-remark'
import * as styles from '../../styles/articles.module.scss'
import Article from '../Article'

const Articles = () => {
    const articles = useMarkdownRemark()
    console.log(articles)

    return (
        <div id="articles" className={styles.container}>
            <h2>Tutorials.</h2>
            <div className={styles.tutorialsWrapper}>
                {articles.map(article => {
                    return (
                        <Article
                            article={article.frontmatter}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Articles
