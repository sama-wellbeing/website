import React from "react"
import Image from "../image/image"
import * as PropTypes from "prop-types"
import styles from './hero.module.scss'
import Button from "../button/button"

const Hero = (props) => {
  const {image, title, subtitle, cta} = props;

  return (
    <div className={styles.hero}>
      <div className={styles.image}>
        <Image fluid={image.fluid} />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>

          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          {cta && (
            <div className={styles.cta}>
              <Button
                url={`/${cta.internalUrl.slug}/`}
                internal={true}
                text={cta.text}
              />
            </div>
          )}
        </div>
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
