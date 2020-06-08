import PropTypes from "prop-types"
import React from "react"
import classnames from 'classnames'
import styles from "./menu.module.scss"
import MenuItem from "../menu-item/menu-item"

const MenuItems = (props) => {
  const {menuItems, theme} = props;

  return menuItems.map((item, key) => (
    <MenuItem
      key={key}
      slug={item.slug}
      title={item.title}
      theme={theme}
      menuItems={item.menuItems}
      parent={item.contentfulparent}
    />
  ))
}

const Menu = ({ menuItems, className, theme, inline }) => {
  const menuClass = classnames(className, styles.menu, {
    [styles.inline]: inline,
  });

  return (
    <ul className={ menuClass }>
      <MenuItems menuItems={menuItems} theme={theme} />
    </ul>
  )
}

Menu.propTypes = {
  menuItems: PropTypes.array,
}

export default Menu
