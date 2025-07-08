function Cart({ cartItems }) {
  return (
    <div className="p-4 bg-white rounded shadow mt-6">
      <h2 className="text-xl font-bold mb-4">🛒 Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">No items in cart</p>
      ) : (
        <ul className="space-y-2">
          {cartItems.map((item, i) => (
            <li key={i} className="flex justify-between">
              <span>{item.name}</span>
              <span className="font-semibold text-green-700">{item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Cart;