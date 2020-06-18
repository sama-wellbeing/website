import React from "react"

export default function Layout({ className, children }) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}