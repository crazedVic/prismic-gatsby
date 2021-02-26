import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"
import { RichText } from "prismic-reactjs" 

const BlogTemplate = ({ data }) => {
    return (
      <Layout>
        <article className="singleBlog">
          <h1 className="singleBlog-title">
            {data.prismicBlogs.data.title.text}
          </h1>
  
          <span>By: {data.prismicBlogs.data.author.text}</span>
          <Image
            fluid={data.prismicBlogs.data.image.localFile.childImageSharp.fluid}
          />
          <RichText render={data.prismicBlogs.data.article.raw} /> 
        </article>
      </Layout>
    )
  }

export default BlogTemplate

export const query = graphql`
  query GetBlog($slug: String!) {
    prismicBlogs(uid: { eq: $slug }) {
      data {
        article {
          text
	  raw
        }
        author {
          text
        }
        image {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        title {
          text
        }
      }
    }
  }
` 