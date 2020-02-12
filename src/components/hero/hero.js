import { Link } from "gatsby"
import React from "react"
import Image from "../image/image"
import * as PropTypes from "prop-types"

const Hero = (props) => {
  const {imageSrc} = props;

  return (
   <>
     <Image src={imageSrc} />
     </>
  )
}

export default Hero

{/*<Link*/}
{/*to={`/`}*/}
{/*className={ brand }*/}
{/*>*/}
{/*<div className={ brandInner } dangerouslySetInnerHTML={{ __html: svg.content }} />*/}
{/*</Link>*/}

Hero.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  cta: PropTypes.object
}
