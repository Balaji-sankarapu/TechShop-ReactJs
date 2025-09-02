import React, { useState } from "react";
import "../modulecss/index.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import Modal from "../pages/Modal";
import data from "../data/data";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Toggle search input visibility
  const handleSearchClick = () => {
    setShowSearch(!showSearch);
    setSearchTerm("");
    setFilteredProducts([]);
  };

  // Handle search input typing
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setFilteredProducts([]);
    } else {
      const results = data.filter((product) =>
        product.title.toLowerCase().startsWith(value.toLowerCase())
      );
      setFilteredProducts(results);
    }
  };

  // Function to highlight matching text
  const highlightText = (text) => {
    const index = text.toLowerCase().indexOf(searchTerm.toLowerCase());
    if (index === -1) return text;

    const beforeMatch = text.slice(0, index);
    const match = text.slice(index, index + searchTerm.length);
    const afterMatch = text.slice(index + searchTerm.length);

    return (
      <>
        {beforeMatch}
        <span style={{ color: "blue", fontWeight: "bold" }}>{match}</span>
        {afterMatch}
      </>
    );
  };

  return (
    <div>
      <header className="md-3">
        {/* <!------------- Navbar CODE Start ------------------> */}
        <div className="main-navbar">
          <Link className="tech-shop" to="/">
            Tech-Shop
          </Link>
          <div className="all-icons">
            {/* Search Icon */}
            <div style={{ position: "relative" }}>
              <span
                className="icon"
                style={{
                  marginRight: "80px",
                  fontSize: "35px",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={handleSearchClick}>
                <IoIosSearch />
              </span>

              {/* Search Input */}
              {showSearch && (
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleInputChange}
                  placeholder="Search products..."
                  style={{
                    position: "absolute",
                    top: "40px",
                    left: "-100px",
                    padding: "8px",
                    width: "300px",
                    borderRadius: "5px",
                    border: "1px solid gray",
                    outline: "none",
                    zIndex: 1000,
                    color: "white",
                  }}
                />
              )}

              {/* Search Results */}
              {showSearch && searchTerm && filteredProducts.length > 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: "80px",
                    left: "-100px",
                    width: "320px",
                    maxHeight: "250px",
                    overflowY: "auto",
                    background: "white",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                    zIndex: 1000,
                  }}>
                  {filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      to={`${product.path}${product.id}`}
                      style={{
                        display: "block",
                        padding: "10px",
                        textDecoration: "none",
                        color: "black",
                        borderBottom: "1px solid #eee",
                      }}
                      onClick={() => {
                        setShowSearch(false);
                        setSearchTerm("");
                      }}>
                      {highlightText(product.title)}
                    </Link>
                  ))}
                </div>
              )}

              {/* No Results Found */}
              {showSearch && searchTerm && filteredProducts.length === 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: "80px",
                    left: "-100px",
                    width: "320px",
                    padding: "10px",
                    background: "white",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                    zIndex: 1000,
                  }}>
                  No products found.
                </div>
              )}
            </div>

            {/* Cart Icon */}
            <Link
              className="icon position-relative"
              style={{
                marginRight: "80px",
                fontSize: "20px",
                color: "white",
                cursor: "pointer",
              }}
              to="/cart">
              <FaShoppingCart />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                4<span className="visually-hidden">unread messages</span>
              </span>
            </Link>

            {/* User Account Modal */}
            <div>
              <Link
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                style={{
                  marginRight: "80px",
                  fontSize: "35px",
                  color: "white",
                  cursor: "pointer",
                }}>
                <MdOutlineAccountCircle />
              </Link>
              <Modal />
            </div>
          </div>
        </div>
        {/* <!------------- Navbar CODE End ------------------> */}
      </header>
    </div>
  );
}
