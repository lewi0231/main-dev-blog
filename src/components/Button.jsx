import React from 'react'
import * as styles from '../styles/button.module.scss'

const Button = ({ buttonText, btnSize = "large", leftAlign = "false" }) => {

    return (
        <div>
            <button className={`${styles.btn} ${btnSize === "small" ? styles.small : styles.large} ${leftAlign === "true" ? styles.leftAlign : ''}`}>
                {buttonText}
            </button>
        </div>
    )
}

export default Button
