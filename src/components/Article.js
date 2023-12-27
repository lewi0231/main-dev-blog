import React from 'react';
import * as styles from '../styles/article.module.scss';
import Icon from './icons/Icon';

const Article = ({ article }) => {
    const { title, tags, summary } = article;

    return (
        <div className={styles.container}>
            <div className={styles.iconsHeader}>
                <div className={styles.leftIcon}>
                    <Icon name="folder" />
                </div>
                <div className={styles.rightIcon}>
                    <Icon name="github" />
                </div>
            </div>
            <h3>{title}</h3>
            <p>{summary}</p>
            <div className={styles.tags}>
                <span>{tags && tags.join(" ")}</span>
            </div>
        </div>
    )
}

export default Article
