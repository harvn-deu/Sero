"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Plus, Trash2, Edit2 } from "lucide-react";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  description?: string;
  image_url?: string;
};

export default function Admin() {
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [editing, setEditing] = useState<number | null>(null);

  // Form state
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Manis");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (isAuth) fetchProducts();
  }, [isAuth]);

  const fetchProducts = async () => {
    const { data } = await supabase.from("products").select("*");
    setProducts(data || []);
  };

  const handleLogin = () => {
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setIsAuth(true);
    } else {
      alert("Password salah");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editing) {
      await supabase.from("products").update({
        name, price: Number(price), category, description, image_url: imageUrl
      }).eq("id", editing);
    } else {
      await supabase.from("products").insert([{
        name, price: Number(price), category, description, image_url: imageUrl
      }]);
    }
    resetForm();
    fetchProducts();
  };

  const handleDelete = async (id: number) => {
    if (confirm("Yakin hapus?")) {
      await supabase.from("products").delete().eq("id", id);
      fetchProducts();
    }
  };

  const resetForm = () => {
    setName(""); setPrice(""); setDescription(""); setImageUrl("");
    setEditing(null);
  };

  if (!isAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="bg-white p-12 rounded-3xl shadow-2xl">
          <h2 className="text-4xl font-display mb-8 text-center">Admin Sero Kitchen</h2>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            className="w-80 px-6 py-4 rounded-xl border-2 border-brown text-xl text-center"
          />
          <button
            onClick={handleLogin}
            className="mt-6 w-full bg-brown text-cream py-4 rounded-xl text-xl font-bold hover:bg-brown/90"
          >
            Masuk
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-display text-6xl text-center mb-12">Admin Panel</h1>

        {/* Form Tambah/Edit */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-xl mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <input placeholder="Nama Roti" value={name} onChange={e => setName(e.target.value)} required className="px-6 py-4 rounded-xl border-2" />
            <input placeholder="Harga" type="number" value={price} onChange={e => setPrice(e.target.value)} required className="px-6 py-4 rounded-xl border-2" />
            <select value={category} onChange={e => setCategory(e.target.value)} className="px-6 py-4 rounded-xl border-2">
              <option>Manis</option>
              <option>Asin</option>
              <option>Spesial</option>
            </select>
            <input placeholder="Link Foto (dari imgbb.com)" value={imageUrl} onChange={e => setImageUrl(e.target.value)} className="px-6 py-4 rounded-xl border-2" />
            <textarea placeholder="Deskripsi (opsional)" value={description} onChange={e => setDescription(e.target.value)} className="md:col-span-2 px-6 py-4 rounded-xl border-2" rows={3} />
          </div>
          <div className="mt-8 text-center">
            <button type="submit" className="bg-gold hover:bg-softgold text-brown px-12 py-5 rounded-full text-xl font-bold">
              {editing ? "Update" : "Tambah Roti"}
            </button>
            {editing && <button type="button" onClick={resetForm} className="ml-4 text-red-600">Batal</button>}
          </div>
        </form>

        {/* Daftar Produk */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(p => (
            <div key={p.id} className="bg-white p-6 rounded-2xl shadow-xl">
              {p.image_url && <img src={p.image_url} alt={p.name} className="w-full h-48 object-cover rounded-xl mb-4" />}
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="text-gold font-bold">Rp {p.price.toLocaleString("id-ID")}</p>
              <p className="text-sm text-brown/70">{p.category}</p>
              <div className="mt-4 flex gap-3">
                <button onClick={() => {
                  setEditing(p.id);
                  setName(p.name);
                  setPrice(p.price.toString());
                  setCategory(p.category);
                  setDescription(p.description || "");
                  setImageUrl(p.image_url || "");
                  window.scrollTo(0,0);
                }} className="flex-1 bg-blue-600 text-white py-2 rounded-lg"><Edit2 className="mx-auto" size={20} /></button>
                <button onClick={() => handleDelete(p.id)} className="flex-1 bg-red-600 text-white py-2 rounded-lg"><Trash2 className="mx-auto" size={20} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
      }
