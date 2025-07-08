import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Product from "./components/Product";
import AddProduct from "./components/AddProduct";
import Cart from "./components/Cart";


const initialProducts = JSON.parse(localStorage.getItem("products")) || [
  {
    id: 1,
    name: "Organic Tomatoes",
    category: "Vegetables",
    farm: "Green Valley Farm",
    price: "$4.99",
    image: "/tomato.jpeg",
    description: "Fresh, juicy organic tomatoes grown with care",
  },
  {
    id: 2,
    name: "Fresh Apples",
    category: "Fruits",
    farm: "Orchard Hills",
    price: "$3.49",
    image: "/apple.jpeg",
    description: "Crisp and sweet apples, perfect for snacking",
  },
  {
    id: 3,
    name: "Farm Eggs",
    category: "Dairy & Eggs",
    farm: "Sunrise Poultry",
    price: "$5.99",
    image: "/egg.jpeg",
    description: "Free-range eggs from happy chickens",
  },
  {
    id: 4,
    name: "Honey",
    category: "Pantry",
    farm: "Bee Happy Farms",
    price: "$8.99",
    image: "/honey.jpeg",
    description: "Pure, raw honey straight from the hive",
  },
];

function App() {
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState(initialProducts);
  const [carts, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // ✅ Save to localStorage whenever products change
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleAddProduct = (newProduct) => {
    const productWithId = {
      ...newProduct,
      id: Date.now(),
    };
    setProducts([...products, productWithId]);
    setShowForm(false); 
  };

  const handleAddToCart = (product) => {
    setCart([...carts, product]);
  };

  return (
    <div className="relative">
      <Header
        onAddClick={() => setShowForm(true)}
        onCartClick={() => setShowCart(true)}
      />
      <Hero />
      <Product items={products} onAddToCart={handleAddToCart} />
      <Footer />

      {/* Add Product Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-3 text-gray-600 hover:text-red-600 text-xl"
            >
              ✖
            </button>
            <AddProduct onSubmit={handleAddProduct} />
          </div>
        </div>
      )}

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative">
            <button
              onClick={() => setShowCart(false)}
              className="absolute top-2 right-3 text-gray-600 hover:text-red-600 text-xl"
            >
              ✖
            </button>
            <Cart cartItems={carts} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
