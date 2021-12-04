import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <h1 className="main-heading">404: Not Found</h1>
      <p className="text-align">You just hit a route that doesn&#39;t exist... the sadness.</p>
      <StaticImage
        formats={["auto", "webp", "avif"]}
        src="../images/sad-cat.jpg"      
      />
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
