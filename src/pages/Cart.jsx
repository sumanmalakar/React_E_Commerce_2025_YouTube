import React, { useContext } from "react";
import { Link } from "react-router";
import DataContext from "../context/DataContext";


const Cart = () => {
  const { cart, clearCart } = useContext(DataContext);

  return (
    <div className="container my-5">
      {cart.length === 0 ? (
        <div className="empty-cart text-center">
          <h1>Your Cart is Empty</h1>
          <Link to={"/"} className="btn btn-warning mt-3">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="row d-flex justify-content-center">
            {cart.map((product) => (
              <div key={product.id} className="col-lg-8 col-md-10 my-3">
                <div className="card cart-card">
                  <div className="row g-0 align-items-center">
                    <div className="col-md-4 d-flex justify-content-center">
                      <img
                        src={product.imgSrc}
                        className="cart-img"
                        alt={product.title}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body text-center">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="cart-price">{product.price} ₹</p>
                        <div className="button-group">
                          <button className="btn btn-primary">Buy Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout & Clear Cart Section */}
          <div className="text-center my-5">
            <button className="btn btn-warning mx-3">CheckOut</button>
            <button onClick={clearCart} className="btn btn-danger">
              Clear Cart
            </button>
          </div>
        </>
      )}

    </div>
  );
};

export default Cart;
