import React from "react";

export default function LoadedImages(props) {
  const loadedImages = props.images.map((image, index) => {
    if (index === 0) {
      return (
        <div key={index} className="carousel-item active">
          <img src={image.urls.regular} className="d-block w-100" alt="..." />
        </div>
      );
    } else {
      return (
        <div key={index} className="carousel-item">
          <img src={image.urls.regular} className="d-block w-100" alt="..." />
        </div>
      );
    }
  });
  return loadedImages;
}
