import React from "react";

function Product({items = [] , onAddToCart}) {
 

  // products was here

  return (
    <section className="bg-green-50 py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Fresh Products Available Now</h2>
        <p className="text-gray-600 mt-2">
          Discover seasonal produce and artisanal goods from trusted local farmers
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
            {/* Image */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                {item.category}
              </span>
            </div>

            {/* Info */}
            <div className="p-4">
              <p className="text-sm text-gray-500 flex items-center gap-1">📍 {item.farm}</p>
              <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>

              {/* Price + Button */}
              <div className="flex items-center justify-between mt-4">
                <span className="text-green-600 font-bold text-lg">{item.price}</span>
                <button
                onClick={()=>onAddToCart(item)}
                 className="bg-green-100 text-green-700 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-green-200">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Product;
