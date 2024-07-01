import React from "react";
export default function Component({ title, handle, image, description }) {
  // const title = props.title;
  // const handle = props.handle;
  // both same
  // const { title, handle } = props;
  return (
    <div className='card'>
      <div className='card-image'>
        <figure className='image is-1by1'>
          <img src={image} alt={handle} />
        </figure>
      </div>
      <div className='card-content'>
        <div className='media-content'>
          <p className='title is-4'>{title}</p>
          <p className='subtitle-6'>{handle}</p>
        </div>
        <div className='content'>{description}</div>
      </div>
    </div>
  );
}
