import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function Collections() {
  const collections = [
    {
      id: 1,
      title: "NEON DREAMS",
      subtitle: "Spring 2026",
      image: "https://images.unsplash.com/photo-1535467728855-93fe6218a7b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      color: "from-pink-500/20 to-purple-500/20"
    },
    {
      id: 2,
      title: "CYBER NOIR",
      subtitle: "Dark Collection",
      image: "https://images.unsplash.com/photo-1708616748538-bdd66d6a9e25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 3,
      title: "DIGITAL PULSE",
      subtitle: "Limited Edition",
      image: "https://images.unsplash.com/photo-1633767448616-85ff30bdb047?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      color: "from-pink-500/20 to-blue-500/20"
    },
    {
      id: 4,
      title: "TECH LUXURY",
      subtitle: "Premium Line",
      image: "https://images.unsplash.com/photo-1633767448598-977b7eec668c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      color: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-pink-500 tracking-[0.3em] uppercase mb-4 block" style={{ fontFamily: "Rajdhani, sans-serif" }}>
            Featured
          </span>
          <h2
            className="text-6xl md:text-8xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-6"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            Collections
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Explore our latest digital fashion collections where cutting-edge
            design meets neon aesthetics.
          </p>
        </motion.div>
      </div>

      {/* Collections grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {collections.map((collection, index) => (
          <motion.div
            key={collection.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative h-[600px] rounded-3xl overflow-hidden cursor-hover"
          >
            {/* Image */}
            <img
              src={collection.image}
              alt={collection.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${collection.color} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />

            {/* Glassmorphism card */}
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <motion.div
                className="bg-black/30 backdrop-blur-xl border border-pink-500/20 rounded-2xl p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-pink-400 tracking-[0.3em] uppercase text-sm mb-2 block" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                  {collection.subtitle}
                </span>
                <h3
                  className="text-4xl mb-4 tracking-tight"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  {collection.title}
                </h3>
                <div className="flex items-center gap-2 text-pink-400">
                  <span className="tracking-[0.2em] uppercase" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                    Explore
                  </span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </motion.div>
            </div>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_100px_rgba(236,72,153,0.3)]" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
