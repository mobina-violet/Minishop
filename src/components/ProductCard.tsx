import type { Product } from "../types/product";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { addToCart } from "../features/cart/cartSlice";
import { motion } from "framer-motion";

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cart.items);

  const cartItem = cartItems.find((item) => item.id === product.id);

  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        y: -5,
      }}
      transition={{
        duration: 0.2,
      }}
      className="border rounded-xl p-4 shadow hover:shadow-xl flex flex-col bg-white">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain"
      />

      <h2 className="font-bold mt-3">{product.title}</h2>

      <p className="text-xl font-semibold mt-2">${product.price}</p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => dispatch(addToCart(product))}
        className={`mt-auto px-4 py-2 rounded-lg text-white transition-colors duration-300 ${
          cartItem ? "bg-violet-900" : "bg-violet-600"
        }`}>
     {cartItem ? `Added (${cartItem.quantity})` : "Add To Cart"}
      </motion.button>
    </motion.div>
  );
}

export default ProductCard;
