import React from "react"
import classnames from "classnames"
import * as PropTypes from "prop-types"
import styles from "./col.module.scss"
import { GridSize } from '../../../constants/grid';

const Col = props => {
  const { className, children, size } = props
  const colClass = classnames(className, styles.col, {
    [styles[size]]: size,
  });

  return <div className={colClass}>{children}</div>
}

export default Col

Col.defaultProps = {
  size: GridSize.MEDIUM
}

Col.propTypes = {
  classname: PropTypes.string,
  size: PropTypes.string
}
