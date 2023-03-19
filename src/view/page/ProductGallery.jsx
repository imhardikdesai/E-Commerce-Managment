import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import DummyData from "../../constant/DummyData";
import {
  fetchProduct,
  updateFetchProduct,
} from "../../redux/actions/fetchActions";
import { Pagination } from "react-bootstrap";
import ProductDetail from "../../components/common/ProductDetail";
import Loader from "../../components/common/Loader";

const ProductGallery = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.fetch.productData);
  const total = useSelector((state) => state.fetch.total);
  const skip = useSelector((state) => state.fetch.skip);
  const limit = useSelector((state) => state.fetch.limit);
  const loading = useSelector((state) => state.fetch.loading);
  const [active, setActive] = useState(0);

  useEffect(() => {
    dispatch(fetchProduct(skip, limit));
  }, [dispatch, skip, limit]);

  const handlePageClick = (index) => {
    setActive(index);
    dispatch(updateFetchProduct(index * limit, limit));
  };

  let items = [];
  for (let number = 0; number <= total / limit; number++) {
    items.push(
      <Pagination.Item
        onClick={() => handlePageClick(number)}
        key={number}
        active={active === number}
      >
        {number + 1}
      </Pagination.Item>
    );
  }


  return (
    <>
      {loading && <Loader />}
      <Row>
        {productData.products &&
          !loading &&
          productData.products.map((item) => {
            return <ProductDetail key={`p${item.id}`} {...item} />;
          })}
      </Row>
      <div className="d-flex justify-content-center mt-2 mb-4 pagination-footer">
        <Pagination
          className="flex-wrap justify-content-center pagination-sub"
          size="lg"
        >
          {items}
        </Pagination>
      </div>
    </>
  );
};

export default ProductGallery;
