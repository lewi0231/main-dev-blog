import React from "react"
import Layout from "../components/Layout"
import SidebarLeft from "../components/SidebarLeft"
import SidebarRight from "../components/SidebarRight"
import About from "../components/sections/About"
import Hero from "../components/sections/Hero"
import Tutorials from "../components/sections/Tutorials"
import * as styles from '../styles/home.module.css'

export default function Home() {
  return (
    <Layout>
      <SidebarLeft />
      <div className={styles.contentWrapper}>
        <Hero />
        <About />
        <Tutorials />
      </div>
      <SidebarRight />
    </Layout>
  )
}