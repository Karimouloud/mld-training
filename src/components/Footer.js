import React from "react"
import { Nav } from "react-bootstrap"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <Foo>
      <Nav justify>
        <Flex>
          <div className="gatsby-link-bottom-up">
            Contact
          </div>
          <div className="gatsby-link-bottom-up">
            Link
          </div>
          <div className="gatsby-link-bottom-up">
            Link
          </div>
          <div>
            © {new Date().getFullYear()}
          </div>
          <div>
            Built with Gatsby
          </div>
          <div>
            <StaticImage
                href="https://www.gatsbyjs.com"
                className="bio-avatar"
                formats={["auto", "webp", "avif"]}
                src="../images/gatsby-icon.png"            
                placeholder="blurred"
                backgroundColor="purple"
                loading="eager"
                width={50}
                height={50}
                quality={95}
                alt="logo"
            />
          </div>                
        </Flex>
      </Nav>
    </Foo>    
  )
}

export default Footer;

const Foo = styled.footer`
  width: 100%;
  height: auto;
  bottom: 0;
  position: fixed;
  background: #000000;
  z-index: 100;
`
const Flex = styled.div`
  margin: auto;
  color: white;
  width: 50%;
  height: 50px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  >*{
    text-align: center;
    margin: auto;
  }
`
