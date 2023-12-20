import React from 'react';
import * as styles from '../styles/tutorial.module.css';
import Icon from './icons/Icon';

const Tutorial = ({ tutorial }) => {
    const { title, tags, summary } = tutorial;
    console.log(tutorial);
    return (
        <div className={styles.tutorialContainer}>
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

export default Tutorial
