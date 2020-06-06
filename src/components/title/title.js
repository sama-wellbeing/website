import PropTypes from "prop-types"
import React from "react"
import classnames from "classnames"
import styles from "./title.module.scss"

const getTitle = (type, titleClasses, children) => {
  let elem

  switch (type) {
    case "h1":
      elem = <h1 className={titleClasses}>{children}</h1>
      break

    case "h3":
      elem = <h3 className={titleClasses}>{children}</h3>
      break

    case "h4":
      elem = <h4 className={titleClasses}>{children}</h4>
      break

    case "h5":
      elem = <h5 className={titleClasses}>{children}</h5>
      break

    case "h6":
      elem = <h6 className={titleClasses}>{children}</h6>
      break

    default:
      elem = <h2 className={titleClasses}>{children}</h2>
      break
  }

  return elem
}

const Title = (props) => {
  const { type, className, children } = props;

  const titleClasses = classnames(className, styles.title, {
    [styles[type]]: type,
  })

  return getTitle(type, titleClasses, children)
}

Title.propTypes = {
  type: PropTypes.string,
}

export default Title
