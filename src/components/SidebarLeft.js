import React from 'react';
import config from '../config';
import * as styles from '../styles/sidebar.module.scss';
import Icon from './icons/Icon';

export default function SidebarLeft() {
    const icons = config.socialMedia.map(media => {
        return (
            <div className={styles.iconLinkWrapper} key={media.icon}>
                <a href={media.url} id="" aria-label={media.name}
                    target="_blank" rel='noreferrer'>                    <Icon name={media.icon} /></a>

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
