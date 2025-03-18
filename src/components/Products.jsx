import { Link, useLocation } from "react-router";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import DataContext from "../context/DataContext";
import ShopByCategory from "./ShopByCategory";


const Products = ({ items }) => {
  const { addToCart } = useContext(DataContext);
  const location = useLocation();

  return (
    <>
      <ToastContainer />
      {location.pathname === "/" && <ShopByCategory />}

      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          {items.map((product) => (
            <div
              key={product.id}
              className="col-lg-4 col-md-6 my-3 d-flex justify-content-center"
            >
              <div className="card product-card" style={{width:'18rem'}}>
                <Link to={`/product/${product.id}`} className="image-container">
                  <img
                    src={product.imgSrc}
                    className="card-img-top"
                    alt={product.title}
                  />
                </Link>
                <div className="card-body text-center">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="product-price">{product.price} ₹</p>
                  <div className="button-container">
                    <button
                      onClick={() =>
                        addToCart(
                          product.id,
                          product.title,
                          product.price,
                          product.imgSrc
                        )
                      }
                      className="btn add-to-cart"
                    >
                      🛒 Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
