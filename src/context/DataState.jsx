import React, { useState } from "react";
import DataContext from "./DataContext";
import { items } from "./Data";
import { ToastContainer, toast, Bounce } from "react-toastify";

const DataState = (props) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(items);

  const addToCart = (id, title, price, imgSrc) => {
    const obj = {
      id,
      title,
      price,
      imgSrc,
    };
    toast.success("Item Added Into The Cart", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    setCart([...cart, obj]);
  };

  const clearCart = () => {
    toast.success("Cart has been cleared...!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    
    setCart([]);
  };


  return (
    <DataContext.Provider
      value={{
        cart,
        setCart,
        products,
        setProducts,
        addToCart,
        clearCart,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
