import React from "react"
import Image from "../image/image"
import * as PropTypes from "prop-types"

const Hero = (props) => {
  const {image, title, subtitle} = props;

  return (
   <div className={'hero'}>
     <Image fluid={image.fluid} />
     <h2>{title}</h2>

     {subtitle &&
      <p>{subtitle}</p>
     }
    </div>
  )
}

export default Hero

Hero.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  cta: PropTypes.object
}
