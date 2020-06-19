import React, { useEffect } from 'react';
import App from "../../components/app/app"
import { graphql } from "gatsby"
import Wrapper from '../../components/wrapper/wrapper'
import styles from './page.module.scss'
import PageHeader from '../../components/page-header/page-header';
import { setTheme } from '../../state/ui/ui-action';
import { connect } from 'react-redux';
import { themeMap } from '../../constants/theme';

const PageTemplate = ({ data, dispatch }) => {
  const content = data.contentfulPage;
  const theme = content.theme || themeMap.DEFAULT;

  useEffect(() => {
    dispatch(setTheme(theme))
  });

  return (
    <App>
      <Wrapper className={styles.wrapper}>
        <PageHeader hero={content.hero} title={content.title} />
      </Wrapper>
    </App>
  )
}

export default connect()(PageTemplate)

export const pageQuery = graphql`
    query PageQuery($id: String!) {
      contentfulPage(id: {eq: $id}) {
        title
      }
    }
`
