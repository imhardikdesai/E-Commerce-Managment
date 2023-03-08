import React from "react";
import { Row } from "react-bootstrap";
import DummyData from "../../constant/DummyData";
import ProductDetail from "../common/ProductDetail";

const ProductGallery = () => {
  return (
    <>
      <Row>
        {DummyData.products.map((item) => {
          return <ProductDetail key={`p${item.id}`} {...item} />;
        })}
      </Row>
    </>
  );
};

export default ProductGallery;
