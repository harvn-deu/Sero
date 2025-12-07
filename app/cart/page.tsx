"use client";

import { useCart } from "@/components/CartProvider";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus } from "lucide-react";

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotalPrice } = useCart();

  if (items.length === 0) {
    return (
      <section className="py-32 px-6 text-center">
        <h2 className="font-display text-5xl mb-8">Keranjang Kosong</h2>
        <Link href="/" className="inline-block bg-gold hover:bg-softgold text-brown px-10 py-4 rounded-full text-xl font-semibold">
          Mulai Belanja
        </Link>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="font-display text-5xl text-center mb-12">Keranjang Belanja</h2>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-6 p-6 border-b">
            <div className="relative w-24 h-24 bg-cream/30 rounded-xl overflow-hidden">
              {item.image ? (
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-brown/40">Foto</div>
              )}
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gold font-bold">Rp {item.price.toLocaleString("id-ID")}</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="p-2 rounded-full bg-cream hover:bg-gold transition"
              >
                <Minus size={18} />
              </button>
              <span className="w-12 text-center text-xl font-bold">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-2 rounded-full bg-cream hover:bg-gold transition"
              >
                <Plus size={18} />
              </button>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              className="p-3 text-red-600 hover:bg-red-50 rounded-full transition"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}

        <div className="p-8 bg-cream/30 text-right">
          <p className="text-3xl font-bold text-brown">
            Total: Rp {getTotalPrice().toLocaleString("id-ID")}
          </p>
          <Link
            href="/checkout"
            className="inline-block mt-6 bg-gold hover:bg-softgold text-brown text-xl font-bold px-12 py-5 rounded-full shadow-lg transition transform hover:scale-105"
          >
            Lanjut ke Checkout
          </Link>
        </div>
      </div>
    </section>
  );
      }
