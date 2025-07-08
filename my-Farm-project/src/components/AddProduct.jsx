import React, { useState } from "react";

function AddProduct({ onSubmit }) {
  
  const [items, setProduct] = useState({
    
    name: "",
    category: "",
    farm: "",
    price: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setProduct({ ...items, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(items); // ✅ Pass data to App
      // console.log(product)
    }
    alert("✅ Product Added!");
    setProduct({
      name: "",
      category: "",
      farm: "",
      price: "",
      image: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        className="w-full border border-gray-300 rounded px-4 py-2"
        value={items.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        className="w-full border border-gray-300 rounded px-4 py-2"
        value={items.category}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="farm"
        placeholder="Farm Name"
        className="w-full border border-gray-300 rounded px-4 py-2"
        value={items.farm}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        className="w-full border border-gray-300 rounded px-4 py-2"
        value={items.price}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        className="w-full border border-gray-300 rounded px-4 py-2"
        value={items.image}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Product Description"
        className="w-full border border-gray-300 rounded px-4 py-2"
        rows="4"
        value={items.description}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold"
      >
        Add Product
      </button>
    </form>
  );
}

export default AddProduct;
 