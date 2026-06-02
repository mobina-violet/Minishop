import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";import Home from "./pages/Home";
import CartPage from "./features/cart/CartPage";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              search={search}
              setSearch={setSearch}
              category={category}
              setCategory={setCategory}
            />
          }
        />

        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
