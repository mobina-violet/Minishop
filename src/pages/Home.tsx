import { useState, useEffect } from "react";
import type { Product } from "../types/product";
import { api } from "../servises/api";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";
import SearchFilterBar from "../components/SearchFilterBar";
type HomeProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

function Home({ search, setSearch, category, setCategory }: HomeProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.get("/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" ||
      product.category.toLowerCase() === category.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Hero />
      <SearchFilterBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />
      <div className="max-w-7xl mx-auto p-6">
        <div className="rounded-3xl p-10 flex items-center justify-between mb-10">
          <div>
            <h1 className="text-5xl font-bold">Welcome to MiniShop</h1>

            <p className="text-gray-600 mt-4 text-lg">
              Discover amazing products at great prices
            </p>

          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            No products found.
          </p>
        ) : (
          <div id="products" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
