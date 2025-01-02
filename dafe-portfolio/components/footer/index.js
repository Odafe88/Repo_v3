import React from 'react'
import styles from "./footer.module.scss"
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={styles.footer_container}>
            <p>
                Made with &#129293; by <Link className={styles.footer_link} href="https://github.com/Odafe88">Odafe88</Link>
            </p>
        </footer>
    )
}

export default Footer