import React from 'react';
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { graphql, Link } from "gatsby"

function RenderPosts(props) {
    const { posts, slug } = props;

    const listItems = posts.map((item, key) =>
        <li key={key}>
            <Link to={`/${slug}/${item.slug}/`} >
                {item.title}
            </Link>
        </li>
    );

    return (
      <ul>{listItems}</ul>
    );
}

const PostsTemplate = ({ data }) => {
    const content = data.contentfulPosts;

    return (
      <Layout>
        <SEO title="Product Page" />
        <h1>
            {content.title}
        </h1>
        <RenderPosts slug={content.slug} posts={content.posts}/>
      </Layout>
    );
}

export default PostsTemplate;

export const pageQuery = graphql`
    query PostsQuery($id: String!) {
      contentfulPosts(id: {eq: $id}) {
        title
        slug
        posts {
            title
            slug
        }
      }
    }
`
