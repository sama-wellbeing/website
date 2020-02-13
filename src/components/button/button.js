import React from "react"
import * as PropTypes from "prop-types"
import styles from './button.module.scss'
import { Link } from "@reach/router"

const Button = (props) => {
  const {url, text, classname, internal} = props;
  let button;

  if (internal) {
    button = <Link to={url} className={styles.button} title={text}>{text}</Link>
  } else {
    button = <a href={url} className={styles.button} title={text}>{text}</a>
  }
  return (
    <>{button}</>
  );
}

export default Button

Button.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
  classname: PropTypes.string,
  internal: PropTypes.bool
}
