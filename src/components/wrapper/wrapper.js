import React from "react"
import { wrapper } from './wrapper.module.scss'

const Wrapper = ({ children }) => {
  return (
    <div className={wrapper}>
      {children}
    </div>
  )
}

export default Wrapper
