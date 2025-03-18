import { FaAmazon, FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { useContext, useState } from "react";
import DataContext from "../context/DataContext";
// import './Navbar.css'

const Navbar = () => {
  const navigate = useNavigate();
  const { cart } = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/product/search/${searchTerm}`);
      setSearchTerm(""); // Clear input after search
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-2 sticky-top shadow">
      <div className="container-fluid">
        {/* Left Section - Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <FaAmazon className="text-warning fs-2 me-2" />
          <span className="fs-4 fw-bold">Amazon</span>
        </Link>

        {/* Navbar Content */}
        {/* Search Bar */}
        <form
          className="d-flex mx-auto search-container"
          onSubmit={handleSubmit}
        >
          <input
            className="form-control search-input"
            type="search"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-warning search-button" type="submit">
            <FaSearch />
          </button>
        </form>

        {/* Categories */}
        <ul className="navbar-nav mx-auto d-flex gap-3">
          {["Mobiles", "Laptops", "Tablets", "Watches"].map((category) => (
            <li key={category} className="nav-item">
              <Link
                to={`/product/category/${category}`}
                className="nav-link category-link"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>

        {/* Cart Button */}
        <Link to="/cart" className="btn btn-warning position-relative cart-btn">
          <FaShoppingCart className="fs-4" />
          {cart.length > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
