import React, { useState, useEffect } from "react";
import axios from "axios";
const baseURI =
  "https://api.unsplash.com/search/photos/?query=valentines&client_id=be54d4e9fcceb88073bfa9cca3bb8679080222872fb3db357bbf3fe738304baa&per_page=8&order_by=latest";

export default function Carousel() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(baseURI).then(result => {
      setImages(result.data.results.slice(0, 5));
      setLoading(false);
    });
  }, []);
  console.log(images);

  const loadingImages = (
    <div className="carousel-item active">
      <img src="valentineHeart.png" className="d-block w-100" alt="..." />
    </div>
  );

  const loadedImages = images.map((image, index) => {
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

  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div className="carousel-inner">
          {loading ? loadingImages : loadedImages}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
