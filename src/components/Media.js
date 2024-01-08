import React from 'react';
import * as styles from '../styles/media.module.scss';

const Media = ({ path, mediaType, mediaLeft }) => {
    const alignmentClass = mediaLeft ? styles.mediaLeft : styles.mediaRight;

    if (mediaType === 'image') {
        return (<img className={`${styles.media} ${alignmentClass}`} src={path} alt={mediaType} />)
    } else {
        return (<video className={`${styles.media} ${alignmentClass}`} autoPlay muted loop alt={mediaType}>
            <source src={path} type="video/mp4" />
            Your browser does not support this feature.
        </video>)

    }

}

export default Media
