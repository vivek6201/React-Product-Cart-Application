import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../Redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const Product = ({ product }) => {
  const cart   = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(product));
    toast.success("Product Added to cart");
  };

  const removeFromCart = () => {
    dispatch(remove(product.id));
    toast.error("Product Removed from cart");
  };

  return (
    <div className="flex flex-col items-center border rounded-lg p-3 gap-y-4 h-full justify-between group cursor-pointer hover:scale-110 hover:shadow-md transition-all duration-200">
      <h1 className="font-semibold text-center">
        {product.title.substring(0, 30)}...
      </h1>
      <p className="text-sm opacity-60 text-center">
        {product.description.substring(0, 50)}...
      </p>
      <img src={product.image} className="w-8/12 aspect-square" />
      <div className="w-full flex justify-between items-center">
        <p className="font-bold text-green-400">$ {Math.floor(product.price)}</p>
        {cart.some((p) => p.id == product.id) ? (
          <button
            className="border-2 rounded-full group-hover:bg-green-600 group-hover:text-white text-sm py-1 px-3 transition-all duration-200"
            onClick={removeFromCart}
          >
            Remove from cart
          </button>
        ) : (
          <button
            className="border-2 rounded-full group-hover:bg-green-600 group-hover:text-white text-sm py-1 px-3 transition-all duration-200"
            onClick={addToCart}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
