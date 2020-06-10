import React from "react"
import classnames from "classnames"
import Title from "../../title/title"
import styles from "./centered-content.module.scss"
import Wrapper from "../../wrapper/wrapper";

const CenteredContent = ({content}) => {
  const { title, tag, backgroundColour } = content

  const wrapperContainerClass = classnames(styles.wrapper, {
    [styles[`background${backgroundColour}`]]: backgroundColour,
  })

  const titleClass = classnames(styles.title, {
    [styles.textWhite]: backgroundColour,
  })

  const contentClass = classnames(styles.content, {
    [styles.textWhite]: backgroundColour,
  })

  const contentContainerClass = classnames({
    [styles.contentPadding]: backgroundColour,
  })
  
  return (
    <div className={wrapperContainerClass}>
      <Wrapper className={contentContainerClass}>
        <Title className={titleClass} type={tag}>
          {title}
        </Title>
        <div
          className={contentClass}
          dangerouslySetInnerHTML={{
            __html: content.content.childMarkdownRemark.html,
          }}
        />
      </Wrapper>
    </div>
  )
}

export default CenteredContent