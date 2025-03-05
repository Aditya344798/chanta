import ProductCard from "@/components/product-card";
import Link from "next/link";

export default async function Home() {
  const response = await fetch("https://api.escuelajs.co/api/v1/products", {
    method: "GET",
  });
  const data = await response.json();

  return (
    <div className="px-20 space-y-8 py-10">
      <div className="space-y-4">
        <h1 className="text-6xl  font-bold">Get Inspired</h1>
        <p className="w-1/2">
          Browsing for your next long-haul trip, everyday journey, or just fancy
          a look at what's new?
        </p>
      </div>

      <div className="grid gap-4 grid-cols-4">
        {data.map((product: any) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <ProductCard
              image={product.images?.[0]}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
