import React from "react"
import Layout from "../components/Layout"
import Seo from '../components/Seo'
import SidebarLeft from "../components/SidebarLeft"
import About from "../components/sections/About"
import Articles from '../components/sections/Articles'
import Contact from "../components/sections/Contact"
import Hero from "../components/sections/Hero"
import Work from '../components/sections/Work'
import * as styles from '../styles/home.module.css'

export default function Home() {
  return (
    <Layout>
      <SidebarLeft />
      <div className={styles.contentWrapper}>
        <Hero />
        <About />
        <Articles />
        <Work />
        <Contact />
      </div>
      {/* <SidebarRight /> */}
    </Layout>
  )
}

export const Head = () => (
  <Seo />
)