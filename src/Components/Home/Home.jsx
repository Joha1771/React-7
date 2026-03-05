import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import api from "../../config/axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/products");
        setProducts(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    })();
  }, []);

  return (
    <>
      <section className="bg-[#1e2939]">
        <div className="container flex flex-col items-center justify-center gap-10 py-20 mx-auto max-w-300 ">
          <h1 className="text-4xl font-bold">Product list</h1>
          <div className="grid grid-cols-3 ">
            {products.map((item) => (
              <Card key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
