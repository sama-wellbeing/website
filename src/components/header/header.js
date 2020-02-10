import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types";
import React from "react";
import Menu from "../menu/menu"
// import { getMenuPrimaryData } from "../../hooks/get-menu"

const Header = ({ siteTitle }) => {
  // const menuItems = getMenuPrimaryData();
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulMenu(
          filter: { menuId: { eq: "primary-menu" } }
        ) {
          nodes {
            menuItems {
              ... on ContentfulPage {
                slug
                title
              }
              ... on ContentfulPosts {
                slug
                title
              }
              ... on ContentfulProductCollections {
                slug
                title
              }
            }
          }
        }
      }
    `
  );

  const menuItems = data.allContentfulMenu.nodes[0].menuItems;

  console.log(data.allContentfulMenu.nodes[0]);
  // data
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <Menu menuItems={menuItems} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
