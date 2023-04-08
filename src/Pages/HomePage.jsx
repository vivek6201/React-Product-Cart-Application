import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiUrl } from "../apiUrl";
import Product from "../Components/Product";
import { RingLoader } from "react-spinners";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchProducts = async () => {
    setloading(true);
    let data = {};
    try {
      data = await axios.get(apiUrl);
      setProducts(data.data);
    } catch (error) {
      console.log(error);
      if (data.status === 404) {
        console.log("page not Found");
      }
    }
    setloading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div className="w-full">
      {loading ? (
        <div className="flex justify-center items-center w-full h-screen -translate-y-20 relative">
          <RingLoader />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-11/12 h-full place-content-center max-w-[1080px] mx-auto gap-x-5 gap-y-10 my-10">
          {products.length > 0 ? (
            products.map((product) => {
              return <Product product={product} key={product.id} />;
            })
          ) : (
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] font-bold uppercase">No Product Available</div>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
