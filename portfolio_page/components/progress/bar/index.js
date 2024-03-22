import React from "react"
import styles from "./bar.module.scss"


const Bar = ({ animationDuration, progress }) => {

    return (
        <div className={styles.bar_main}
            style={{
                marginLeft: `${(-1 + progress) * 100}%`,
                transition: `margin-left ${animationDuration}ms linear`,
            }}
        >

        </div>
    )
}

export default Bar;