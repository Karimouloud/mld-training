import * as React from "react"
import { Link } from "gatsby"
import NavBar from "./Navbar"
import Footer from "./Footer"
import { StaticImage } from "gatsby-plugin-image"
import CarouSel from "./Carousel "

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <>
      <NavBar/>
      <StaticImage src="../images/background.jpg" className="background" />
      <div className="global-wrapper relative" data-is-root-path={isRootPath}>
                
        <header className="global-header">{header}</header>
        <CarouSel />
        <main>{children}</main>
        <footer>
          
        </footer>
      </div>
      <Footer/>
    </>    
  )
}

export default Layout
