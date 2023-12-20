import { Link } from 'gatsby'
import React from 'react'
import * as styles from '../styles/footer.module.css'

const Footer = () => (
    <footer className={styles.footer}>
        <div>
            <p>
                Inspired by others built by <Link to="#about"><span>me</span></Link>.
            </p>
        </div>
    </footer>
)

export default Footer
