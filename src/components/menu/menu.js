import PropTypes from "prop-types"
import React from "react"
import MenuItem from "../menu-item/menu-item"

function RenderMenu(props) {
  const {menuItems} = props;

  const listItems = menuItems.map((item, key) =>
    <MenuItem key={key} slug={item.slug} title={item.title}/>
  );

  return (
    <>{listItems}</>
  );
}

const Menu = ({ menuItems, classNames }) => (
  <ul className={ classNames }>
    <RenderMenu menuItems={menuItems} />
  </ul>
)

Menu.propTypes = {
  menuItems: PropTypes.array
}

export default Menu
