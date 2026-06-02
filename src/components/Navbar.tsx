
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";


function Navbar() {
  const items = useSelector((state: RootState) => state.cart.items);

  return (
    <nav className="bg-[#130615] text-white px-10 py-5 flex justify-between items-center">
      <Link to="/" className="text-4xl font-bold text-white tracking-widest ">
        MiniShop
      </Link>

      <div className="flex gap-6 items-center text-xl">
        
        <Link to="/checkout">Checkout</Link>
        <Link to="/">Home</Link>
        <Link to="/cart" className="relative">
          cart

          <span className="absolute -top-3 -right-3 bg-violet-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {items.length}
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
