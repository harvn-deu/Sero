import { Phone, Facebook, Instagram, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-brown text-cream">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-display text-5xl md:text-6xl mb-12">Hubungi Kami</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <a href="https://wa.me/628123456789" className="flex flex-col items-center gap-4 hover:text-gold transition">
            <Phone className="w-12 h-12" />
            <p className="text-2xl">0812-3456-789</p>
            <p className="text-sm opacity-80">Order & Tanya via WhatsApp</p>
          </a>

          <a href="https://facebook.com/serokitchen" className="flex flex-col items-center gap-4 hover:text-gold transition">
            <Facebook className="w-12 h-12" />
            <p className="text-2xl">Facebook</p>
          </a>

          <a href="https://instagram.com/serokitchen" className="flex flex-col items-center gap-4 hover:text-gold transition">
            <Instagram className="w-12 h-12" />
            <p className="text-2xl">Instagram</p>
          </a>
        </div>

        <div className="h-96 rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12d106.816666!3d-6.200000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAiUyAxMDbCsDQ5JzAwIkU!5e0!3m2!1sid!2sid!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <p className="mt-12 text-lg opacity-80">
          Jl. Contoh No.123, Jakarta │ Buka setiap hari 07:00–20:00
        </p>
      </div>
    </section>
  );
}
