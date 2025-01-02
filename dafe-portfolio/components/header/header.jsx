import React from 'react'
import styles from './header.module.scss'
import Link from "next/link"

const Header = () => {
    return (
        <header className={styles.header_container}>
            <div className={styles.header_box}>
                <div className={styles.logo_container}>
                    <p>
                        <Link href="/" className={styles.header_logo}>
                            Dafe.
                        </Link>
                    </p>
                </div>
                <ul className={styles.link_container}>
                    <Link className={styles.header_link_box} href="/about"><li>about</li></Link>
                    <Link className={styles.header_link_box} href="https://odafe.hashnode.dev/"><li>blog</li></Link>
                    <Link className={styles.header_link_box} href="/projects"><li>projects</li></Link>
                </ul>
            </div>
        </header>
    )
}

export default Header