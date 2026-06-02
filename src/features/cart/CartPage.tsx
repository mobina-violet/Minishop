import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "../../app/store";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../features/cart/cartSlice";
//aimation
function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      {/* آیکون متحرک */}
      <div
        className="w-28 h-28 rounded-full flex items-center justify-center"
        style={{
          backgroundColor: "#eeee",
          animation: "float 3s ease-in-out infinite",
        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#7F22FE"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ animation: "wobble 2.5s ease-in-out infinite" }}>
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2 -1.61l1.6 -8.39h-15.32" />
        </svg>
      </div>

      {/* چشم‌های چشمک‌زن */}
      <div className="flex gap-3 -mt-2">
        <span
          className="w-2.5 h-2.5 rounded-full block"
          style={{
            backgroundColor: "#7F22FE",
            animation: "blink 3s ease-in-out infinite",
          }}
        />
        <span
          className="w-2.5 h-2.5 rounded-full block"
          style={{
            backgroundColor: "#7F22FE",
            animation: "blink 3s ease-in-out infinite 0.15s",
          }}
        />
      </div>

      {/* متن */}
      <h2 className="text-xl font-semibold mt-1">So empty...</h2>
      <p className="text-gray-500 text-sm text-center max-w-xs leading-relaxed">
        Your cart is waiting for something special. Start exploring!
      </p>

      {/* دکمه */}
      <Link
        to="/"
        className="mt-2 px-7 py-2.5 rounded-lg text-sm font-medium transition-colors"
        style={{ backgroundColor: "#7F22FE", color: "#ffff" }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#7F22FE")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#7F22FE")}>
        Fill me up! →
      </Link>

      {/* نقطه‌های تزئینی */}
      <div className="flex gap-2 mt-1">
        {[0, 200, 400].map((delay) => (
          <span
            key={delay}
            className="w-2 h-2 rounded-full block"
            style={{
              backgroundColor: "#7F22FE",
              animation: `float 1s ease-in-out ${delay}ms infinite alternate`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

//سبد خرید
// سبد خرید
function CartPage() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="max-w-4xl mx-auto min-h-screen p-8">
      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border rounded-lg p-4 mb-4   shadow-sm">
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

            <Link
              to="/checkout"
              className="bg-violet-600 text-white px-6 py-3 rounded-lg">
              Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
