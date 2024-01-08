import { Link } from 'gatsby';
import React from 'react';
import * as styles from '../styles/article.module.scss';
import Icon from './icons/Icon';

const Article = ({ article }) => {
    const { title, tags, summary, slug, iconLink, iconName } = article;
    console.log(iconLink)
    return (
        <div className={styles.container} key={slug} >
            <div className={styles.iconsHeader}>
                <div className={styles.leftIcon}>
                    <Icon name="folder" />
                </div>
                <div className={styles.rightIcon}>
                    <Icon name={iconName} link={iconLink} />
                </div>
            </div>
            <Link
                to={"articles/" + slug}
            >
                <h3>{title}</h3>
            </Link>
            <Link to={"articles/" + slug}>
                <p>{summary}</p>
            </Link>
            <div className={styles.tags}>
                <span>{tags && tags.join(" ")}</span>
            </div>

        </div>
    )
}

export default Article
