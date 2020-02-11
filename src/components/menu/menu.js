import PropTypes from "prop-types"
import React from "react"
import classnames from 'classnames'
import styles from "./menu.module.scss"
import MenuItem from "../menu-item/menu-item"

function RenderMenu(props) {
  const {menuItems, theme} = props;

  const listItems = menuItems.map((item, key) =>
    <MenuItem key={key} slug={item.slug} title={item.title} theme={theme}/>
  );

  return (
    <>{listItems}</>
  );
}

const Menu = ({ menuItems, theme }) => {
  const menuClass = classnames(styles.menu, {
    [styles.inline]: theme === 'primary',
    [styles[theme]] : true
  });

  return (
    <ul className={ menuClass }>
      <RenderMenu menuItems={menuItems} theme={theme} />
    </ul>
  )
}

Menu.propTypes = {
  menuItems: PropTypes.array,
  theme: PropTypes.string
}

Menu.defaultProps = {
  theme: `primary`
}

export default Menu
