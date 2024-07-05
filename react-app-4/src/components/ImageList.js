import ImageShow from "./ImageShow";
import "./ImageList.css";

export default function ImageList({ images }) {
  const renderedImage = images.map((image) => {
    /*correct way to assign key*/
    return (
      <ImageShow
        key={image.id}
        image={image.urls.raw}
        alt={image.alt_description}
      />
    );
  });
  return renderedImage.length <= 0 ? (
    <div>NO IMAGE TO SHOW</div>
  ) : (
    <div className='image-list'>{renderedImage}</div>
  );
}
