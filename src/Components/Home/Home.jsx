import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import SkeletonCard from "../SkeletonCard/SkeletonCard";
import api from "../../config/axios";
import Pagination from "../Pagination/Pagination";

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await api.get("/products");
        setAllProducts(res.data);
      } catch (err) {
        console.error("Ошибка загрузки:", err);
      } finally {
        setTimeout(() => setLoading(false), 500);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const totalPages = Math.ceil(allProducts.length / itemsPerPage);

  const indexOfLastProduct = page * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = allProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const nextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <section className="bg-[#1e2939] min-h-screen text-white transition-colors duration-300">
      <div className="container flex flex-col items-center justify-center max-w-6xl gap-10 px-4 py-20 mx-auto">
        <h1 className="text-4xl font-bold tracking-tight">Product List</h1>

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {loading
            ? Array(itemsPerPage)
                .fill(0)
                .map((_, index) => <SkeletonCard key={index} />)
            : currentProducts.map((item) => (
                <Card key={item.id} product={item} />
              ))}
        </div>

        {!loading && allProducts.length > 0 && (
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            nextPage={nextPage}
            prevPage={prevPage}
            setPage={setPage}
          />
        )}
      </div>
    </section>
  );
};

export default Home;
