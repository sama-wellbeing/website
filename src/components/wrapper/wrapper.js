import React from "react"
import PropTypes from "prop-types"
import styles from './wrapper.module.scss'
import classnames from "classnames"

const Wrapper = ({ className, children, width }) => {
  const wrapperClass = classnames(styles.wrapper, className, {
    [styles[width]]: width
  });

  return (
    <div className={wrapperClass}>
      {children}
    </div>
  )
}

export default Wrapper

Wrapper.defaultProps = {
  width: 'medium'
}

Wrapper.propTypes = {
  width: PropTypes.string
}