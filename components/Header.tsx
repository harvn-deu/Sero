import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/components/CartProvider";

export default function Header() {
  const { items } = useCart();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-brown/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-display text-3xl font-bold text-brown">
            Sero Kitchen
          </Link>

          <nav className="hidden md:flex gap-8">
            <Link href="#products" className="text-brown hover:text-gold transition">
              Menu
            </Link>
            <Link href="#about" className="text-brown hover:text-gold transition">
              Tentang
            </Link>
            <Link href="#contact" className="text-brown hover:text-gold transition">
              Kontak
            </Link>
          </nav>

          <Link
            href="/cart"
            className="relative p-3 bg-gold/20 rounded-full hover:bg-gold/30 transition"
          >
            <ShoppingCart className="w-6 h-6 text-brown" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-brown text-cream text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </header>
      <div className="h-20" /> {/* spacer */}
    </>
  );
}
