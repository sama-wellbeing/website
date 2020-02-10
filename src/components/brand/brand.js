import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { brand, brandInner } from './brand.module.scss';

const Brand = () => {
  const data = useStaticQuery(
    graphql`
      query {
        contentfulSettings {
          brandLogo {
            svg {
              content
            }
          }
        }
      }
    `
  );

  const svg = data.contentfulSettings.brandLogo.svg;

  return (
    <Link
      to={`/`}
      className={ brand }
    >
      <div className={ brandInner } dangerouslySetInnerHTML={{ __html: svg.content }} />
    </Link>
  )
}

export default Brand
