import _ from "lodash"
import React from "react"
// import { content } from './wrapper.module.scss'
import classnames from "classnames"
import { FC_KEY, FC_TEMPLATES } from '../../constants/flexible-content';
import CenteredContent from './centered-content/centered-content';
import SingleImage from "./single-image/single-image";
import GalleryRow from "./gallery-row/gallery-row";

const Content = (props) => {
  const { content } = props;
  const items = [];

  _.each(content, (item, key) => {
    const type = item.internal.type;
    
    // console.log(type);

    switch (type) {
      case `${FC_KEY}${FC_TEMPLATES.CENTERED_TEXT}`:
        items.push(<CenteredContent key={key} content={item} />)
        break
      case `${FC_KEY}${FC_TEMPLATES.SINGLE_IMAGE}`:
        items.push(<SingleImage key={key} content={item} />)
        break
      case `${FC_KEY}${FC_TEMPLATES.GALLERY_ROW}`:
        items.push(<GalleryRow key={key} images={item.images} />)
        break
      default:
      // code block
    }
  });

  return items;
};

const FlexibleContent = ({ className, content }) => {
  const wrapperClass = classnames(content, className);

  return (
    <div className={wrapperClass}>
      <Content content={content} />
    </div>
  )
}

export default FlexibleContent
