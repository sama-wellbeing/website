import React from "react"
import classnames from "classnames"
import Title from "../../title/title"
import Image from '../../image/image';
import styles from "./single-image.module.scss"

const SingleImage = ({content}) => {
  const { title, tag, image, imagePosition } = content;

  const imageContainerClass = classnames(styles.image, {
    [styles[`image${imagePosition}`]]: imagePosition,
  });

  return (
    <div className={styles.wrapper}>
      <Image className={imageContainerClass} fluid={image.fluid} />
      <div className={styles.content}>
        <Title className={styles.title} type={tag}>
          {title}
        </Title>
        <div
          dangerouslySetInnerHTML={{
            __html: content.content.childMarkdownRemark.html,
          }}
        />
      </div>
    </div>
  )
}

export default SingleImage;