import React from "react"
import Layout from "./src/components/layout/layout"

export { default as wrapRootElement } from './src/state/redux-wrapper';

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}