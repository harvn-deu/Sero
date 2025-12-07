"use client";

import { useCartItem, useCart} from "@/components/CartProvider";
import { useState } from "react";

export default function Checkout() {
  const { items, getTotalPrice } = useCart();
  const [nama, setNama] = useState("");
  const [wa, setWa] = useState("");
  const [alamat, setAlamat] = useState("");
  const [catatan, setCatatan] = useState("");

  const handleCheckout = () => {
    if (!nama || !wa || !alamat) {
      alert("Isi semua kolom ya kak");
      return;
    }

    let pesan = `*PESANAN BARU - SERO KITCHEN*%0A%0A`;
    pesan += `*Nama:* ${nama}%0A`;
    pesan += `*No. WA:* ${wa}%0A`;
    pesan += `*Alamat:* ${alamat}%0A`;
    if (catatan) pesan += `*Catatan:* ${catatan}%0A`;
    pesan += `%0A*Pesanan:*%0A`;

    items.forEach((item: CartItem) => {
      pesan += `• \( {item.name} × \){item.quantity} = Rp ${(item.price * item.quantity).toLocaleString("id-ID")}%0A`;
    });

    pesan += `%0A*Total: Rp ${getTotalPrice().toLocaleString("id-ID")}*`;

    const waLink = `https://wa.me/628123456789?text=${pesan}`; // ganti 628123456789 dengan nomor WA kamu/orang tua
    window.open(waLink, "_blank");
  };

  return (
    <section className="py-20 px-6 max-w-2xl mx-auto">
      <h2 className="font-display text-5xl text-center mb-12">Checkout</h2>

      <div className="bg-white rounded-2xl shadow-2xl p-8">
        <div className="space-y-6">
          <input
            type="text"
            placeholder="Nama Lengkap"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full px-6 py-4 rounded-xl border-2 border-cream focus:border-gold outline-none text-lg"
          />
          <input
            type="text"
            placeholder="Nomor WhatsApp"
            value={wa}
            onChange={(e) => setWa(e.target.value)}
            className="w-full px-6 py-4 rounded-xl border-2 border-cream focus:border-gold outline-none text-lg"
          />
          <textarea
            placeholder="Alamat Lengkap"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            rows={4}
            className="w-full px-6 py-4 rounded-xl border-2 border-cream focus:border-gold outline-none text-lg resize-none"
          />
          <textarea
            placeholder="Catatan (opsional)"
            value={catatan}
            onChange={(e) => setCatatan(e.target.value)}
            rows={3}
            className="w-full px-6 py-4 rounded-xl border-2 border-cream focus:border-gold outline-none text-lg resize-none"
          />

          <div className="text-center pt-6">
            <p className="text-3xl font-bold text-brown mb-6">
              Total: Rp {getTotalPrice().toLocaleString("id-ID")}
            </p>
            <button
              onClick={handleCheckout}
              className="bg-green-600 hover:bg-green-700 text-white text-2xl font-bold px-16 py-6 rounded-full shadow-xl transition transform hover:scale-105"
            >
              Pesan via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
          }
