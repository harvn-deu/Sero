"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useCart } from "@/components/CartProvider";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  description?: string;
  image_url?: string;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addItem } = useCart();

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await supabase.from("products").select("*").order("id");
      setProducts(data || []);
      setLoading(false);
    }
    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="text-center py-20">
        <p className="text-xl">Memuat roti segar...</p>
      </div>
    );

  const categories = ["Manis", "Asin", "Spesial"];

  return (
    <section id="products" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="font-display text-5xl md:text-6xl text-center mb-16 text-brown">
        Menu Kami
      </h2>

      {categories.map((cat) => {
        const items = products.filter((p) => p.category === cat);
        if (items.length === 0) return null;

        return (
          <div key={cat} className="mb-20">
            <h3 className="font-display text-4xl text-gold text-center mb-10">
              {cat}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
                >
                  <div className="relative h-64 bg-gray-200">
                    {product.image_url ? (
                      <Image
                        src={product.image_url}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-cream/50">
                        <p className="text-brown/50 text-lg">Foto roti</p>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h4 className="font-display text-2xl mb-2">{product.name}</h4>
                    {product.description && (
                      <p className="text-brown/70 mb-4">{product.description}</p>
                    )}
                    <div className="flex justify-between items-center">
                      <p className="text-2xl font-bold text-gold">
                        Rp {product.price.toLocaleString("id-ID")}
                      </p>
                      <button
                        onClick={() =>
                          addItem({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: product.image_url,
                          })
                        }
                        className="bg-gold hover:bg-softgold text-brown px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition"
                      >
                        <ShoppingCart className="w-rotate-12" size={20} />
                        Tambah
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
