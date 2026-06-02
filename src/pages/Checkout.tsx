import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import {
  CheckoutSchema,
  type CheckoutFormData,
} from "../schemas/CheckoutSchema";

function Checkout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(CheckoutSchema),
  });

  const items = useSelector((state: RootState) => state.cart.items);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const shipping = totalPrice > 100 ? 0 : 9.99;
  const grandTotal = totalPrice + shipping;

  const onSubmit = (data: CheckoutFormData) => {
    console.log(data);
    alert("Order submitted successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* فرم */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            Shipping Information
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <input
                  {...register("firstName")}
                  placeholder="First Name"
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400"
                />
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName?.message}
                </p>
              </div>

              <div className="flex-1">
                <input
                  {...register("lastName")}
                  placeholder="Last Name"
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400"
                />
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName?.message}
                </p>
              </div>
            </div>

            <div>
              <input
                {...register("email")}
                placeholder="Email"
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400"
              />
              <p className="text-red-500 text-sm mt-1">
                {errors.email?.message}
              </p>
            </div>

            <div>
              <input
                {...register("phone")}
                placeholder="Phone Number"
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400"
              />
              <p className="text-red-500 text-sm mt-1">
                {errors.phone?.message}
              </p>
            </div>

            <div>
              <textarea
                {...register("address")}
                placeholder="Address"
                rows={3}
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400"
              />
              <p className="text-red-500 text-sm mt-1">
                {errors.address?.message}
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-700 transition-colors text-white px-6 py-3 rounded-lg font-medium">
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:w-80">
          <div className="border rounded-xl p-5 bg-gray-50 sticky top-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Order Summary
            </h2>

            {items.length === 0 ? (
              <p className="text-gray-400 text-sm">Your cart is empty.</p>
            ) : (
              <>
                <ul className="space-y-3 mb-4">
                  {items.map((item) => (
                    <li key={item.id} className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 object-contain rounded-lg border bg-white"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-400">
                          x{item.quantity}
                        </p>
                      </div>
                      <span className="text-sm font-medium whitespace-nowrap">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="border-t pt-3 space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span
                      className={
                        shipping === 0 ? "text-green-600 font-medium" : ""
                      }>
                      {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>

                  {shipping === 0 && (
                    <p className="text-xs text-green-600">
                      You qualified for free shipping!
                    </p>
                  )}

                  {shipping > 0 && (
                    <p className="text-xs text-gray-400">
                      Add ${(100 - totalPrice).toFixed(2)} more for free
                      shipping
                    </p>
                  )}
                </div>

                <div className="border-t mt-3 pt-3 flex justify-between font-bold text-gray-800">
                  <span>Total</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
