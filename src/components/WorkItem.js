import React from 'react'
import * as styles from "../styles/work-item.module.scss"
import Media from './Media'
import Icon from './icons/Icon'

const WorkItem = ({ mediaPath, mediaLeft = false, tags, content, icons, mediaType, title, href, linkWord }) => {

    const iconsMap = icons.map((icon) => {
        return (
            <Icon name={icon.name} link={icon.url} />
        )
    })

    return (
        <div className={`${styles.container} ${mediaLeft ? "" : styles.reverseRow}`}>
            <Media mediaType={mediaType} path={mediaPath} mediaLeft={mediaLeft} />
            <div className={`${styles.contentContainer} ${mediaLeft ? styles.contentRight : styles.contentLeft}`}>
                <h4>{title}</h4>
                <p className={styles.contentWrapper}>
                    {content}{href && <a href={href}>{linkWord}</a>}
                </p>
                <p className={styles.tags}>{tags.join(' ')}</p>
                <div className={styles.icons} >
                    {iconsMap}
                </div>
            </div>
        </div>
    )
}

export default WorkItem
