import React from 'react';
import App from "../../components/app/app"
import { graphql, Link } from "gatsby"
import Wrapper from '../../components/wrapper/wrapper';

function RenderPosts(props) {
    // const { posts, slug } = props;

    // const listItems = posts.map((item, key) =>
    //     <li key={key}>
    //         <Link to={`/${slug}/${item.slug}/`} >
    //             {item.title}
    //         </Link>
    //     </li>
    // );

    // return (
    //   <ul>{listItems}</ul>
    // );
  
  return <></>
}

const PostsTemplate = ({ data }) => {
  const content = data.contentfulPosts;
  
  console.log(content);

  return (
    <App theme={content.theme ? content.theme : null}>
      <Wrapper>
        <h1>{content.title}</h1>
      </Wrapper>
      <RenderPosts slug={content.slug} posts={content.posts} />
    </App>
  )
};

export default PostsTemplate;

export const pageQuery = graphql`
  query PostsQuery($id: String!) {
    contentfulPosts(id: {eq: $id}) {
      title
      slug
      theme
      categories {
        title
        slug
      }
    }
  }
`
