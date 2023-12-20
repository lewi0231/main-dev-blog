import React from 'react';
import * as config from '../config';
import * as styles from '../styles/sidebar.module.css';

const SidebarRight = () => {
    const email = config.default.email

    return (
        <aside className={`${styles.sidebarRight} ${styles.sidebarContainer}`}>
            <div className={styles.wrapper}>
                <a href={`mailto:${email}`} id="">{email}</a>
            </div>
        </aside>
    )
}

export default SidebarRight
