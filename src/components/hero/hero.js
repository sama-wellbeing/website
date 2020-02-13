import React from "react"
import Image from "../image/image"
import * as PropTypes from "prop-types"
import styles from './hero.module.scss'

const Hero = (props) => {
  const {image, title, subtitle} = props;

  return (
   <div className={styles.hero}>
     <div className={styles.image}>
      <Image fluid={image.fluid} />
     </div>
     <div className={styles.content}>
       <h2 className={styles.title}>{title}</h2>

       {subtitle &&
        <p className={styles.subtitle}>{subtitle}</p>
       }
     </div>
    </div>
  )
}

export default Hero

Hero.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  cta: PropTypes.object
}
