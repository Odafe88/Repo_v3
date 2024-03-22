import React from 'react'
import styles from './header.module.scss'
import Link from "next/link"

const Header = () => {
    return (
        <nav className={styles.header_container}>
            <p><Link className={styles.header_link_box} href="/about">/about.</Link></p>
            <p><Link className={styles.header_link_box} href="https://odafe.hashnode.dev/">/blog.</Link></p>
            <p><Link className={styles.header_link_box} href="/projects">/projects.</Link></p>
        </nav>
    )
}

export default Header