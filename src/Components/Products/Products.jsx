import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../config/axios";

const Products = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Ошибка при загрузке товара:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1e2939] flex items-center justify-center">
        <div className="w-16 h-16 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!product) return <div className="text-white">Товар не найден</div>;

  return (
    <section className="bg-[#1e2939] min-h-screen py-20 px-4 text-white">
      <div className="container max-w-5xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center mb-8 text-blue-400 transition-colors hover:text-blue-300"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to list
        </button>

        <div className="grid grid-cols-1 gap-12 p-8 border border-gray-700 shadow-2xl md:grid-cols-2 bg-gray-800/40 rounded-3xl">
          <div className="flex items-center justify-center bg-white rounded-2xl p-10 h-[400px]">
            <img
              src={product.image}
              alt={product.title}
              className="object-contain max-h-full transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="mb-2 text-sm font-medium tracking-wider text-blue-400 uppercase">
              {product.category}
            </span>
            <h1 className="mb-4 text-3xl font-bold leading-tight md:text-4xl">
              {product.title}
            </h1>

            <div className="flex items-center mb-6">
              <div className="flex items-center px-3 py-1 text-yellow-400 border rounded-full bg-yellow-400/10 border-yellow-400/20">
                <span className="mr-1 text-lg">★</span>
                <span className="font-bold">{product.rating?.rate}</span>
              </div>
              <span className="ml-4 text-sm text-gray-400">
                {product.rating?.count} reviews
              </span>
            </div>

            <p className="mb-8 text-lg leading-relaxed text-gray-300">
              {product.description}
            </p>

            <div className="flex items-center justify-between pt-6 mt-auto border-t border-gray-700">
              <span className="text-4xl font-bold">
                ${product.price?.toFixed(2)}
              </span>
              <button className="px-8 py-4 text-lg font-bold text-white transition-all bg-blue-600 shadow-lg hover:bg-blue-700 rounded-xl shadow-blue-900/20 active:scale-95">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
