import { connect } from "react-redux"
import PropTypes from "prop-types"
import React from "react"
import classnames from 'classnames'
import styles from "./secondary-navigation.module.scss"
import Menu from "../menu/menu"
import Wrapper from "../wrapper/wrapper"
import { MenuKeys } from '../../constants/menus';
import { getActiveTheme } from "../../state/ui/ui-selectors"

const SecondaryNavigation = ({ menuItems, className, activeTheme }) => {
  const themeClean = activeTheme.replace(/\s/g, "");
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
}

export default connect(
  state => ({
    activeTheme: getActiveTheme(state),
  }),
  null
)(SecondaryNavigation)