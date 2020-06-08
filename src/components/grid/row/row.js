import React from "react"
import classnames from "classnames"
import * as PropTypes from "prop-types"
import styles from "./row.module.scss"
import { GridSize } from '../../../constants/grid';

const Row = props => {
  const { className, children, size } = props
  const rowClass = classnames(className, styles.row, {
    [styles[size]]: size
  });

  return <div className={rowClass}>{children}</div>
}

export default Row

Row.defaultProps = {
  size: GridSize.MEDIUM
}

Row.propTypes = {
  classname: PropTypes.string,
  size: PropTypes.string
}
