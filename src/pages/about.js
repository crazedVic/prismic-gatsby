import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { RichText } from "prismic-reactjs"

const about = ({ data }) => {
    return (
      <Layout>
        <div className="aboutPage">
          <h1 className="aboutUs-title">
            {data.allPrismicAboutPage.nodes[0].data.header_title.text}
          </h1>
          <Image
            fluid={
              data.allPrismicAboutPage.nodes[0].data.header_image.localFile
                .childImageSharp.fluid
            }
          />
          <RichText
            render={data.allPrismicAboutPage.nodes[0].data.about_us.raw}
          />
        </div>
      </Layout>
    )
  }

  export default about

  export const query = graphql`
  {
    allPrismicAboutPage {
      nodes {
        data {
          about_us {
            text
            raw
          }
          header_title {
            text
          }
          header_image {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`