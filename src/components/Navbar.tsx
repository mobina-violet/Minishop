import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

function Navbar() {
  const items = useSelector((state: RootState) => state.cart.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/cart", label: "Cart" },
    { to: "/checkout", label: "Checkout" },
  ];

  return (
    <nav className="bg-[#130615] text-white px-10 py-4 flex justify-between items-center sticky top-0 z-50">
      <Link
        to="/"
        className="text-3xl font-bold text-white tracking-widest uppercase"
        style={{ fontFamily: "Georgia, serif", letterSpacing: "0.2em" }}
      >
        Mini<span className="text-violet-400">Shop</span>
      </Link>

      <div className="flex gap-8 items-center text-sm font-medium tracking-widest uppercase">
        {navLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="relative group transition-colors duration-200 hover:text-violet-400"
            style={{
              color: location.pathname === to ? "#a78bfa" : "white",
            }}
          >
            {label === "Cart" ? (
              <span className="relative">
                Cart
                {totalItems > 0 && (
                  <span className="absolute -top-3 -right-4 bg-violet-500 text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </span>
            ) : (
              label
            )}

            {/* underline animation */}
            <span
              className="absolute -bottom-1 left-0 h-[1.5px] bg-violet-400 transition-all duration-300 w-0 group-hover:w-full"
              style={{
                width: location.pathname === to ? "100%" : undefined,
              }}
            />
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;