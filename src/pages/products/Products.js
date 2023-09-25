import React from "react";
import "./products.scss";
import texts from "../../texts";
import { Carousel } from "react-carousel-minimal";
import { CData } from "../../data";

const Products = () => {
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div className="products">
      <h1>{texts.products.heading}</h1>
      <div style={{ padding: "20px" }}>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={CData}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
