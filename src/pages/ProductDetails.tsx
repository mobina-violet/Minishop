import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../servises/api";
import type { Product } from "../types/product";
import Loader from "../components/Loader";
//اطلاعات یک محصول خاص رو از API بگیره و نمایش بده.
function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    api
      .get(`/products/${id}`)
      .then((res: any) => setProduct(res.data))
      .catch(() => setError(true)); // ← اضافه کن
  }, [id]);

  if (error) return <p>Something went wrong!</p>;
  if (!product) {
    return <Loader />;
  }
  //نمایش کامل یک محصول
  return (
    <div className="max-w-6xl mx-auto p-10 grid md:grid-cols-2 gap-10 ">
      <div className="bg-white rounded-3xl p-10">
        <img src={product.image} className="w-full  object-contain" />
      </div>

      <div>
        <h1 className="text-5xl font-bold">{product.title}</h1>

        <p className="text-gray-500 mt-5">{product.description}</p>

        <p className="text-4xl text-violet-600 font-bold mt-8">
          ${product.price}
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;
