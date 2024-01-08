import React from "react"
import config from '../../config'
import * as styles from '../../styles/work.module.scss'
import WorkItem from "../WorkItem"

const Work = () => {
    const workItems = config.work;
    let mediaLeft = true;


    return (
        <div className={styles.container} id="work">
            <h2>Work.</h2>
            {
                workItems.map((item) => {
                    mediaLeft = !mediaLeft;
                    return <WorkItem key={item.title} {...item} mediaLeft={mediaLeft} />
                })
            }
        </div>
    )
}

export default Work
