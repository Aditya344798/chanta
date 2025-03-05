import Image from "next/image";
import React from "react";

export default function ProductCard({
  title,
  description,
  price,
  image,
}: {
  title: string;
  description: string;
  price: string;
  image: string;
}) {
  return (
    <div>
      <div className="w-full relative h-80 bg-gray-200 rounded-sm">
        <Image alt={title} src={image} objectFit="cover" fill />
      </div>
      <div className="space-y-4 py-4">
        <div>
          <h1 className=" font-bold">{title}</h1>
          <p className="text-sm">{description.substring(0, 60)}</p>
        </div>
        <span className="text-xl font-bold">$ {price}</span>
      </div>
    </div>
  );
}
