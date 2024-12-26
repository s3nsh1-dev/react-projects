import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";
import { useState } from "react";

export default function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    if (result !== undefined) {
      setImages(result);
    } else {
      // sending [] is important because after getting value of from the
      // user if the next empty input is empty the return value is undefined
      // and the screen will not be refreshed with no image as due to error
      // imagelist is not called with bad input
      setImages([]);
    }
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}
