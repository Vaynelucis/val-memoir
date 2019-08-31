import React from "react";

export default function Carousel() {
  const baseURI =
    "https://api.unsplash.com/search/photos/?query=valentines&client_id=be54d4e9fcceb88073bfa9cca3bb8679080222872fb3db357bbf3fe738304baa&per_page=8&order_by=latest";
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
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="logo192.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="logo512.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="logo512.png" className="d-block w-100" alt="..." />
          </div>
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
