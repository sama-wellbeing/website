import PropTypes from "prop-types"
import React from "react"
import classnames from 'classnames'
import styles from "./page-header.module.scss"
import SecondaryNavigation from "../secondary-navigation/secondary-navigation"
import { colours, heroHeights } from '../../constants/theme';
import Hero from '../hero/hero';
import Title from "../title/title"

const PageHeader = ({ menuItems, className, hero, title }) => {
  const pageHeaderClass = classnames(className, styles.pageHeader)

  return (
    <div className={pageHeaderClass}>
      {menuItems && <SecondaryNavigation menuItems={menuItems} />}
      {hero && (
        <Hero
          className={styles.hero}
          size={hero.height ? hero.height : heroHeights.MEDIUM}
          image={hero.image}
          title={hero.title}
          subtitle={hero.subtitle}
          cta={hero.cta}
          backgroundColor={colours.LIGHT_BLUE}
        />
      )}
      {!hero && title && (
        <Title className={styles.title} type={"h1"}>
          {title}
        </Title>
      )}
    </div>
  )
}

PageHeader.propTypes = {
  menuItems: PropTypes.array,
  className: PropTypes.string,
  hero: PropTypes.object
}

export default PageHeader;