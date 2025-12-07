"use client";

import { useCart } from "@/components/CartProvider";
import Link from "next/link";
import Image from "next/image";
import { X, Plus, Minus, Trash2 } from "lucide-react";

export default function CartDrawer() {
  const { items, updateQuantity, removeItem, getTotalPrice, getTotalItems } = useCart();

  if (getTotalItems() === 0) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <div className="absolute inset-0 bg-black/50" onClick={() => window.history.back()} />

      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-cream shadow-2xl pointer-events-auto translate-x-0 animate-in slide-in-from-right">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="font-display text-3xl">Keranjang ({getTotalItems()})</h2>
          <Link href="/" className="p-2 hover:bg-brown/10 rounded-full">
            <X size={28} />
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4 max-h-[65vh]">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 bg-white p-4 rounded-2xl shadow">
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-cream/30">
                {item.image ? (
                  <Image src={item.image} alt={item.name} width={80} height={80} className="object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-brown/40 text-xs">Foto</div>
                )}
              </div>

              <div className="flex-1">
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-gold font-bold">Rp {item.price.toLocaleString("id-ID")}</p>
              </div>

              <div className="flex items-center gap-2">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1">
                  <Minus size={18} />
                </button>
                <span className="w-8 text-center font-bold">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1">
                  <Plus size={18} />
                </button>
              </div>

              <button onClick={() => removeItem(item.id)} className="text-red-600">
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>

        <div className="border-t p-6 bg-white">
          <div className="flex justify-between text-2xl font-bold mb-6">
            <span>Total</span>
            <span className="text-gold">Rp {getTotalPrice().toLocaleString("id-ID")}</span>
          </div>
          <Link
            href="/checkout"
            className="block text-center bg-green-600 hover:bg-green-700 text-white py-5 rounded-full text-xl font-bold"
          >
            Checkout via WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
}
