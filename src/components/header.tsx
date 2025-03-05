import Image from "next/image";
import React from "react";
import { ShoppingBag, User } from "@deemlol/next-icons";

export default function Header() {
  return (
    <header className="h-16 justify-between flex items-center px-20">
      <Image src={"/zudio.png"} height={24} width={105} alt="Zudio Logo" />

      <div className="flex gap-6 text-sm">
        <a>Shop</a>
        <a>Collections</a>
        <a>Explore</a>
      </div>

      <div className="flex gap-4 text-sm items-center">
        <div className="inline-flex items-center gap-2">
          <ShoppingBag size={18} />
          <span>Cart 0</span>
        </div>
        <div className="inline-flex items-center gap-2">
          <User size={18} />
          <span>My Account</span>
        </div>
      </div>
    </header>
  );
}
