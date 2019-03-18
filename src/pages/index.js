import React from "react"
import First from "../components/firstPage/First.js"
import Second from "../components/secondPage/Second.js"
import Third from "../components/thirdPage/Third.js"

import Intro from '../components/firstPage/intro.js'
import IntroGallery from '../components/firstPage/introGallery.js'
import Links from '../components/firstPage/links.js'
import Github from '../components/secondPage/github.js'
import Projects from '../components/secondPage/projects.js'
import Tools from '../components/secondPage/tools.js'
import About from '../components/thirdPage/about.js'
import Contact from '../components/thirdPage/contact.js'
import Footer from '../components/footer/Footer.js'
// import Headroom from '../components/headroom'

const IndexPage = () => (
  <div>
    {/* <Headroom 
      style={{background:'black',color:'white'}}
      onPin={() => console.log('pinned')}
      onUnpin={() => console.log('unpinned')}
    >
      <h1>Hiiiiii</h1>
    </Headroom> */}
    <First>
      <Intro/>
      <Links/>
      <IntroGallery/>
    </First>
    <Second>
      <Projects/>
      <Github/>
      <Tools/>
    </Second>
    <Third>
      <About/>
      <Contact/>
    </Third>
    <Footer/>
    {/* <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      <Link to='/first/'>Go to First</Link>
    </Layout> */}
  </div>
)

export default IndexPage
