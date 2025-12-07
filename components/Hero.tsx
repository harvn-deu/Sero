import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden flex">
      <Image
        src="https://images.unsplash.com/photo-1606890549440-1a3b2e9c8d3c?w=1920&q=80"
        alt="Roti Sero Kitchen"
        fill
        className="object-cover brightness-50"
        priority
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-gold mb-6 drop-shadow-2xl"
        >
          Sero Kitchen
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl md:text-3xl text-cream font-light mb-10 drop-shadow-lg"
        >
          Roti homemade penuh cinta untuk orang tua & keluarga
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a
            href="#products"
            className="inline-block bg-gold hover:bg-softgold text-brown font-semibold text-xl px-12 py-5 rounded-full shadow-xl transition transform hover:scale-105"
          >
            Lihat Menu Kami
          </a>
        </motion.div>
      </div>
    </section>
  );
}
