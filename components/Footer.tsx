import { Facebook, Instagram, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brown text-cream py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl mb-6">Sero Kitchen</h2>
        <p className="text-lg mb-8">Roti homemade dibuat dengan cinta setiap hari</p>

        <div className="flex justify-center gap-8 mb-8">
          <a href="https://wa.me/628123456789" target="_blank" className="flex items-center gap-2 hover:text-gold transition">
            <Phone className="w-5 h-5" />
            <span>0812-3456-789</span>
          </a>
          <a href="https://facebook.com/serokitchen" target="_blank" className="hover:text-gold transition">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="https://instagram.com/serokitchen" target="_blank" className="hover:text-gold transition">
            <Instagram className="w-6 h-6" />
          </a>
        </div>

        <p className="text-sm opacity-80">
          © 2025 Sero Kitchen. Dibuat dengan ❤️ untuk orang tua
        </p>
      </div>
    </footer>
  );
}
