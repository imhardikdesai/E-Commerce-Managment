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

  const maxVisiblePages = 3;

  let items = [];

  let startPage = Math.max(0, active - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(
    Math.ceil(total / limit) - 1,
    startPage + maxVisiblePages - 1
  );

  while (endPage - startPage < maxVisiblePages - 1) {
    if (startPage > 0) {
      startPage--;
    } else if (endPage < Math.ceil(total / limit) - 1) {
      endPage++;
    }
  }

  items.push(
    <Pagination.Item
      onClick={() => handlePageClick(0)}
      key={0}
      active={active === 0}
    >
      1
    </Pagination.Item>
  );

  if (startPage > 1) {
    items.push(
      <Pagination.Ellipsis key="ellipsis-start" />
    );
  }


  for (let number = startPage + 1; number <= endPage - 1; number++) {
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

  if (endPage < Math.ceil(total / limit) - 2) {
    items.push(
      <Pagination.Ellipsis key="ellipsis-end" />
    );
  }

  items.push(
    <Pagination.Item
      onClick={() => handlePageClick(Math.ceil(total / limit) - 1)}
      key={Math.ceil(total / limit) - 1}
      active={active === Math.ceil(total / limit) - 1}
    >
      {Math.ceil(total / limit)}
    </Pagination.Item>
  );


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
           <Pagination.First onClick={() => handlePageClick(0)} />
          <Pagination.Prev onClick={() => handlePageClick(active - 1)} />
          {items}
          <Pagination.Next onClick={() => handlePageClick(active + 1)} />
          <Pagination.Last onClick={() => handlePageClick(Math.ceil(total / limit) - 1)}>
         
          </Pagination.Last>
          </Pagination>
      </div>
    </>
  );
};

export default ProductGallery;
