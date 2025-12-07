import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-cream/50">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-5xl md:text-6xl text-brown mb-8">
            Tentang Sero Kitchen
          </h2>
          <p className="text-lg text-brown/80 leading-relaxed mb-6">
            Sero Kitchen lahir dari cinta seorang anak kepada orang tuanya. 
            Setiap roti dibuat sendiri di rumah dengan bahan-bahan terbaik, tanpa pengawet, 
            dan penuh kasih sayang.
          </p>
          <p className="text-lg text-brown/80 leading-relaxed">
            Dari dapur kecil kami langsung ke meja makan keluarga Anda. 
            Roti hangat, lembut, dan selalu fresh dari oven setiap hari.
          </p>
        </div>

        <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1576618148400-fc1a75be8f09?w=800&q=80"
            alt="Dapur Sero Kitchen"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
