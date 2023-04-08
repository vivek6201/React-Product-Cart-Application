import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartProduct = ({ product }) => {

  const dispatch = useDispatch();
  const [itemCount,setItemCount] = useState(1);

  const removeFromCart = () => {
    dispatch(remove(product.id));
    toast.error("Product Removed from cart");
  }

  return (
    <div className="flex md:flex-row flex-col w-full py-3 px-5 rounded-xl border xs:h-[400px] sm:h-[500px] md:h-[350px]">
      <div className="flex items-center h-full justify-center w-full md:w-4/12">
        <img src={product.image} className="w-5/12 md:w-8/12 object-contain aspect-square"/>
      </div>
      <div className="md:p-5 p-2 flex flex-col justify-between w-full md:w-8/12 gap-y-3">
        <p className="text-base lg:text-xl font-bold">{product.title}</p>
        <p className="opacity-70 text-sm">{product.description.substring(0,100)}</p>
        <p className="font-bold text-green-400">${product.price}</p>

        <div className="w-full flex lg:flex-row flex-col gap-4 my-4 justify-between items-center">
          <label className="flex gap-x-4">
            <p>Item Count</p>
            <select name="itemCount" className="w-14 text-center" onChange={(e) => setItemCount(e.target.value)} value={itemCount}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>

          <button className="rounded-full bg-green-600 sm:text-sm text-white py-2 px-4" onClick={removeFromCart}>Remove From Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
