import React from "react"

import App from "../components/app/app"
import { graphql, useStaticQuery } from "gatsby"
import Wrapper from "../components/wrapper/wrapper"
import { headerHeights, heroHeights } from '../constants/theme';
import ThumbnailNavigation from "../components/thumbnail-navigation/thumbnail-navigation"
import PostsLists from "../components/posts-list/posts-list"
import PageHeader from "../components/page-header/page-header"

const IndexPage = () => {
  let data = useStaticQuery(
    graphql`
      query {
        allContentfulHomePage(
          filter: { id: { eq: "2d016566-5546-5b12-80b1-d15a60ca62a7" } }
        ) {
          edges {
            node {
              id
              seoMetaData {
                title
                metaDescription {
                  content {
                    content {
                      value
                    }
                  }
                }
              }
              hero {
                title
                subtitle
                image {
                  fluid(maxWidth: 3000, quality: 90) {
                    ...GatsbyContentfulFluid_withWebp
                  }
                }
                cta {
                  internalUrl {
                    slug
                  }
                  text
                }
              }
              contentCategories {
                title
                slug
                teaserImage {
                  fluid(maxWidth: 1000, quality: 90) {
                    ...GatsbyContentfulFluid_withWebp
                  }
                }
              }
              posts {
                slug
                title
                teaserText {
                  childMarkdownRemark {
                    excerpt(truncate: true, pruneLength: 350)
                  }
                }
                teaserImage {
                  fluid(maxWidth: 1000, quality: 90) {
                    ...GatsbyContentfulFluid_withWebp
                  }
                }
                contentfulparent {
                  slug
                  contentfulparent {
                    title
                    theme {
                      theme
                    }
                    slug
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  data = data.allContentfulHomePage.edges[0].node;

  const hero = data.hero;
  const seo = data.seoMetaData;

  hero.height = heroHeights.SMALL;
  
  return (
    <App seo={seo} headerSize={headerHeights.LARGE}>
      <PageHeader hero={hero} />

      <Wrapper>
        <ThumbnailNavigation thumbnails={data.contentCategories} />
        <PostsLists posts={data.posts} useActiveTheme={false} />
      </Wrapper>
    </App>
  )
}


export default IndexPage