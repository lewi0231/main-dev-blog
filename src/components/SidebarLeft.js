import { Link } from 'gatsby';
import React from 'react';
import config from '../config';
import * as styles from '../styles/sidebar.module.css';
import Icon from './icons/Icon';

export default function SidebarLeft() {
    const icons = config.socialMedia.map(media => {
        return (
            <div className={styles.iconLinkWrapper} key={media.icon}>
                <Link
                    to={media.url}
                    aria-label={media.name}
                    target="_blank">
                    <Icon name={media.icon} />
                </Link>
            </div>
        )
    })


    return (
        <aside className={`${styles.sidebarContainer} ${styles.sidebarLeft}`}>
            <div className={styles.wrapper}>
                {icons}
            </div>
        </aside>
    )
}
