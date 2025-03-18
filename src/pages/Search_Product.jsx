import React from "react";
import { Link, useParams } from "react-router";
import { items } from "../context/data";
import Products from "../components/Products";

const Search_Product = () => {
  const { term } = useParams();
  const searchProducts = items.filter((pro) =>
    pro.title.toLowerCase().includes(term.toLowerCase())
  );

  return (
    <>
      {searchProducts.length == 0 ? (
        <>
          <div className="container text-center my-5">
            <h1>No Product Find</h1>

            <Link to={"/"} className="btn btn-lg btn-warning">
              Continue Shopping
            </Link>
          </div>
        </>
      ) : (
        <Products items={searchProducts} />
      )}
    </>
  );
};

export default Search_Product;
