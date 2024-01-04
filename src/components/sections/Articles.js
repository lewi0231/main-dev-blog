import { Link } from 'gatsby'
import React from 'react'
import { useMarkdownRemark } from '../../hooks/use-markdown-remark'
import * as styles from '../../styles/articles.module.scss'
import Article from '../Article'

const Articles = () => {
    const articles = useMarkdownRemark()
    console.log(articles)

    return (
        <div id="articles" className={styles.container}>
            <h1>Articles.</h1>
            <div className={styles.tutorialsWrapper}>
                {articles.map(article => {
                    return (
                        <Link
                            key={article.slug}
                            to={"articles/" + article.frontmatter.slug}
                        >
                            <Article
                                article={article.frontmatter}
                            />
                        </Link>)
                })}
            </div>
        </div>
    )
}

export default Articles
