import React from 'react'
import styles from "./proj.module.scss"
import { HomeBtn, Footer } from '../../components'
import Link from 'next/link'

const ProjectsPage = () => {
    const projects = [
        {
            name: "GraphBlog",
            excerpt: "A blog site to upload and read stories in real time",
            live: "http://graph-blog-weld.vercel.app/",
            gh: "https://github.com/Odafe88/graph-blog",
            tools: "Next.Js, Tailwindcss, graphql, graphCMS"
        },
        {
            name: "King's CLothing",
            excerpt: "An e-commerce site",
            live: "http://crwn-clothing-odafe88.vercel.app/",
            gh: "https://github.com/Odafe88/crwn-clothing",
            tools: "React, Sass, Redux, React Router"
        },
        {
            name: "WayRance",
            excerpt: "A Waste Management solution built on the toronet blockchain",
            live: "https://way-rance.vercel.app/",
            gh: "https://github.com/Odafe88/WayRance",
            tools: "ReactJS, TailwindCSS, Solidity, Wagmi"
        },
        {
            name: "EazyAsset",
            excerpt: "A Digital asset manager and marketplace Built on the Celo BlockChain",
            live: "https://asset-marketplace.vercel.app/",
            gh: "https://github.com/Odafe88/Asset-marketplace",
            tools: "ReactJS, TailwindCSS, Solidity, Wagmi"
        },
        
    ]
    return (
        <div className={styles.proj_page_container}>
            <HomeBtn />
            <div className={styles.proj_wrapper}>
                <div className={styles.header_cont}>
                    <h1>Projects.</h1>
                    <p>A few noteworthy things I've built:</p>
                </div>
                <div className={styles.proj_cont}>
                    {
                        projects.map((project) => {
                            return (
                                <section key={project.name} className={styles.proj_box}>
                                    <div className={styles.box_intro}>
                                        <div className={styles.proj_ex}>
                                            <h4>{project.name}</h4>
                                            <p>{project.excerpt}</p>
                                        </div>
                                        <div className={styles.proj_links}>
                                            <Link className={styles.link} href={project.live}>Live</Link>
                                            <Link className={styles.link} href={project.gh}>Github</Link>
                                        </div>
                                    </div>
                                    <p><span>Tools:</span> {project.tools}</p>
                                </section>
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default ProjectsPage