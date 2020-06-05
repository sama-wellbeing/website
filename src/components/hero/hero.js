import React from "react"
import BackgroundImage from 'gatsby-background-image'
import * as PropTypes from "prop-types"
import styles from './hero.module.scss'
import Button from "../button/button"
import classnames from "classnames"

const Hero = (props) => {
  const { image, title, subtitle, cta, backgroundColor, size } = props;
  
  const heroClass = classnames(styles.hero, {
    [styles[size]]: size,
  })

  return (
    <div className={heroClass}>
      <BackgroundImage className={styles.background} fluid={image.fluid} backgroundColor={backgroundColor} />

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
  )
}

export default Hero

Hero.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  cta: PropTypes.object,
  backgroundColor: PropTypes.string,
  size: PropTypes.string
}
