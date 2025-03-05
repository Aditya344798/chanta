import ProductCard from "@/components/product-card";
import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products/${productId}`,
    { method: "GET" }
  );
  const product = await response.json();
  return (
    <div className="px-20">
      <ProductCard
        image={product.images?.[0]}
        title={product.title}
        description={product.description}
        price={product.price}
      />
    </div>
  );
}
