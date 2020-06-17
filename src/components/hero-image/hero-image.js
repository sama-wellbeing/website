import React from "react"
import BackgroundImage from 'gatsby-background-image'
import PropTypes from "prop-types"
import styles from './hero-image.module.scss'
// import classnames from "classnames"
import Image from '../image/image';
import Title from "../title/title";

const HeroImage = (props) => {
  const { image, title, subtitle } = props;

  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Title className={styles.title} type={"h1"}>{title}</Title>
      </div>
      <Image className={styles.image} fluid={image.fluid} />
    </div>
  )
}

export default HeroImage

HeroImage.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}
