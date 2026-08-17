"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const page = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);
  return (
    <>
      <h1 className="text-2xl font-bold p-4">All products list here</h1>
      <div>
        {products.map((product) => (
          <div className="border p-4 m-4" key={product.id}>
            {/* <Image src={product.image} alt={product.title} width={200} height={200} /> */}
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
