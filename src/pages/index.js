import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  
  return (
    <>
      
      <Layout location={location} title={siteTitle}>
      <Seo title="Mouloud Gym" />
      
      
      <Link to='/cardio'><button>cardio</button></Link>
      <Link to='/muscu'><button>muscu</button></Link>
      <Link to='/articles'><button>articles</button></Link>
      <Bio />
    </Layout>
    
    </>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`