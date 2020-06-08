import { useStaticQuery, graphql } from "gatsby"

export const getMenuPrimaryData = () => {
  const { allContentfulMenu } = useStaticQuery(
    graphql`
      query {
        allContentfulMenu(
          filter: { id: { eq: "primary-menu" } }
        ) {
          nodes {
            id
            title
            menuId
          }
        }
      }
    `
  );

  return allContentfulMenu.node;
};
