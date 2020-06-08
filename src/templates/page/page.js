import React from 'react';
import App from "../../components/app/app"
import { graphql } from "gatsby"
import Wrapper from '../../components/wrapper/wrapper'
import styles from './page.module.scss'
import PageHeader from '../../components/page-header/page-header';

const PageTemplate = ({ data }) => {
  const content = data.contentfulPage;
  
  return (
    <App>
      <Wrapper className={styles.wrapper}>
        <PageHeader hero={content.hero} title={content.title} />
      </Wrapper>
    </App>
  )
}

export default PageTemplate;

export const pageQuery = graphql`
    query PageQuery($id: String!) {
      contentfulPage(id: {eq: $id}) {
        title
      }
    }
`
