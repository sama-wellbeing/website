import PropTypes from "prop-types"
import React from "react"
import MenuItem from "../menu-item/menu-item"

function RenderMenu(props) {
  const {menuItems} = props;

  const listItems = menuItems.map((item) =>
    <MenuItem slug={item.slug} title={item.title}/>
  );

  return (
    <ul>{listItems}</ul>
  );
}

const Menu = ({ menuItems, classNames }) => (
  <ul className={ classNames }>
    <RenderMenu menuItems={menuItems} />
  </ul>
)

Menu.propTypes = {
  menuItems: PropTypes.object
}

export default Menu
