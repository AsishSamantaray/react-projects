import { useState } from "react";
import HiddenImageDiv from "./HiddenImageDiv";

const ImagePreview = (props) => {
  const [images, setImages] = useState(props.images);
  const handleOnClick = (index) => {
    const newImages = [...images];
    newImages[index].isVisible = !newImages[index].isVisible;
    setImages([...newImages]);
  };
  return (
    <>
      {images.map((image, index) => (
        <div key={index} onClick={() => handleOnClick(index)}>
          {image.isVisible ? <h2>{image.name}</h2> : <HiddenImageDiv />}
        </div>
      ))}
      <div>
        <button
          onClick={() =>
            setImages([
              ...images.map((image) => ({ ...image, isVisible: true })),
            ])
          }
        >
          Show All
        </button>
        <button
          onClick={() =>
            setImages([
              ...images.map((image) => ({ ...image, isVisible: false })),
            ])
          }
        >
          Hide All
        </button>
      </div>
    </>
  );
};

export default ImagePreview;
