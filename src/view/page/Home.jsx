import React, { useEffect } from "react";
import ProductGallery from "./ProductGallery";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const error = useSelector((state) => state.fetch.error);
  useEffect(() => {
    const notify = () => toast.error(error);
    if (error !== "") {
      notify();
    }
  }, [error]);

  return (
    <>
      <Toaster />
      {error !== "" && (
        <h1 className="text-center mt-4">No Products Available</h1>
      )}
     
      <ProductGallery />
    </>
  );
};

export default Home;
