import React from 'react'
import Link from 'next/link'
import styles from "./home_btn.module.scss"
import { HiArrowLeft } from "react-icons/hi"

const HomeBtn = () => {
    return (
        <div className={styles.btn_cont}>
            <button className={styles.button_box}>
                <Link className={styles.link_box} href="/">
                    <HiArrowLeft /> Home
                </Link>
            </button>
        </div>
    )
}

export default HomeBtn