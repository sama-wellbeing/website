import React from "react"
import { wrapper } from './wrapper.module.scss'
import classnames from "classnames"

const Wrapper = ({ className, children }) => {
  const wrapperClass = classnames(wrapper, className);
  return (
    <div className={wrapperClass}>
      {children}
    </div>
  )
}

export default Wrapper
