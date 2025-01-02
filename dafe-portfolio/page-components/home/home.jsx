import ThreeScene from "@/components/Three"
import styles from "./home.module.scss"
import { Suspense } from "react"



const HomePage = () => {
    
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <section className={styles.home_container}>
                <ThreeScene />
            </section>
        </Suspense>
    )
}

export default HomePage