import React from "react";

function Header({ onAddClick, onCartClick }) {
  return (
    <header className="flex items-center justify-between px-6 mt-1 bg-white shadow">
      {/* Left: Logo and Title */}
      <div className="fleax items-center gap-3">
        <div className="bg-[url('logo1.png')] bg-cover p-7 w-5 bg-center">
          <span className="text-white text-xl"></span>
        </div>
        <div>
          <h1 className="text-xl font-bold font-serif  text-gray-800">
            FarmMarket
          </h1>
          {/* <p className="text-sm text-gray-500">Fresh & Local</p> */}
        </div>
      </div>

      {/* Center: Navigation */}
      <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
        <a href="#" className="hover:text-green-600">
          Products
        </a>
        <a href="#" className="hover:text-green-600">
          Farmers
        </a>
        <a href="#" className="hover:text-green-600">
          About
        </a>
        <a href="#" className="hover:text-green-600">
          Contact
        </a>
      </nav>

      {/* Right: Add Product + Profile + Logout */}
      <div className="flex items-center gap-6">
        <button
          onClick={onCartClick}
          className="bg-grey-600 hover:bg-blue-600 hover:text-white text-black shadow px-4 py-2 rounded-lg"
        >
          🛒 Cart
        </button>

        <button
          onClick={onAddClick}
          className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          <span className="text-xl">＋</span>
          <span>Add Product</span>
        </button>

        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-4 py-2 rounded-lg shadow">
          Login
        </button>
      </div>
    </header>
  );
}
export default Header;
