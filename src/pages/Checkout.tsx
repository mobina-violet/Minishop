import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
  const onSubmit = (data: CheckoutFormData) => {
    console.log(data);

    alert("Order submitted successfully!");
  };
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register("firstName")}
            placeholder="First Name"
            className="w-full border p-3 rounded-lg"
          />

          <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
        </div>

        <div>
          <input
            {...register("lastName")}
            placeholder="Last Name"
            className="w-full border p-3 rounded-lg"
          />

          <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
        </div>

        <div>
          <input
            {...register("email")}
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
          />

          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>

        <div>
          <input
            {...register("phone")}
            placeholder="Phone Number"
            className="w-full border p-3 rounded-lg"
          />

          <p className="text-red-500 text-sm">{errors.phone?.message}</p>
        </div>

        <div>
          <textarea
            {...register("address")}
            placeholder="Address"
            className="w-full border p-3 rounded-lg"
          />

          <p className="text-red-500 text-sm">{errors.address?.message}</p>
        </div>

        <button
          type="submit"
          className="bg-violet-600 text-white px-6 py-3 rounded-lg">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;
