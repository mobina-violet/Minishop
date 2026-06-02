import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../app/store";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../features/cart/cartSlice";

//سبد خرید
function CartPage() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border rounded-lg p-4 mb-4 shadow-sm">
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain"
                />

                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-gray-500">${item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className="bg-gray-200 px-3 py-1 rounded">
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className="bg-gray-200 px-3 py-1 rounded">
                  +
                </button>
              </div>

              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="bg-gray-500 text-white px-3 py-2 rounded">
                Remove
              </button>
            </div>
          ))}

          <div className="mt-6 border-t pt-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">
              Total: ${totalPrice.toFixed(2)}
            </h2>

            <button className="bg-violet-600 text-white px-6 py-3 rounded-lg">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
