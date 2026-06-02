import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-20 border-t bg-[#130615]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-gray-200"><a href="/">MiniShop</a></h2>
            <p className="mt-3 text-sm text-white">
              Discover products with a simple and modern shopping experience.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-3 font-semibold text-white">Quick Links</h3>

            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <a href="/" className="transition hover:text-gray-300">
                  Home
                </a>
              </li>

              <li>
                <a href="/Checkout" className="transition hover:text-gray-200">
                  Checkout
                </a>
              </li>

              <li>
                <a href="/cart" className="transition hover:text-gray-200">
                  Cart
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-3 font-semibold text-gray-300">Follow Us</h3>

            <div className="flex gap-4 text-2xl text-gray-500">
              <a href="#" className="transition hover:text-gray-200">
                <FaGithub />
              </a>

              <a href="#" className="transition hover:text-gray-200">
                <FaInstagram />
              </a>

              <a href="#" className="transition hover:text-gray-200">
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm text-gray-400">
          © 2026 MiniShop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
