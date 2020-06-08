import PropTypes from "prop-types"
import React from "react"
import classnames from 'classnames'
import styles from "./secondary-navigation.module.scss"
import Menu from "../menu/menu"
import Wrapper from "../wrapper/wrapper"
import { MenuKeys } from '../../constants/menus';

const SecondaryNavigation = ({ menuItems, className, theme }) => {
  const themeClean = theme ? theme.replace(/\s/g, "") : theme
  const navigationClass = classnames(className, styles.navigation, {
    [styles[`theme${themeClean}`]]: themeClean,
  })

  return (
    <div className={navigationClass}>
      <Wrapper>
        <Menu theme={MenuKeys.SECONDARY} menuItems={menuItems} inline />
      </Wrapper>
    </div>
  )
}

SecondaryNavigation.propTypes = {
  menuItems: PropTypes.array,
  className: PropTypes.string,
  theme: PropTypes.string
}

export default SecondaryNavigation
