export default function ImageList({ images }) {
  images.forEach((element) => {
    console.log(element.urls.full);
  });
  console.log(images[0]);
  return (
    <div>
      Image List
      {/* <img src={images[0].id} alt='imgeez' /> */}
    </div>
  );
}
