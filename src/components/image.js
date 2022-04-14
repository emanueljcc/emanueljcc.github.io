import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "dev_emanuel.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img
          className="avatar d-block mx-auto mx-0"
          fluid={data.placeholderImage.childImageSharp.fluid}
          style={{ width: 170, height: "auto", borderRadius: "50%" }}
        />
}

export default Image
