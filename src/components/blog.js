import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby" 

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      allPrismicBlogs(sort: { fields: id, order: DESC }) {
        nodes {
          uid
          date: first_publication_date(formatString: "YYYY-MM-DD")
          data {
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
    }
  `)
  return (
    <div className="blogList">
    {data.allPrismicBlogs.nodes.map((blog, index) => {
      return (
        <article className="blogCard">
          <Image fluid={blog.data.image.localFile.childImageSharp.fluid} />
          <h2 className="blogTitle">{blog.data.title.text}</h2>
          <div className="blogFooter">
            <span className="blogAuthor">{blog.data.author.text}</span>
            <span className="blogDate">{blog.date}</span>
          </div>
          <Link to={`blogs/${blog.uid}`}>Read More</Link>
        </article>
      )
    })}
  </div>
  )
}

export default Blog