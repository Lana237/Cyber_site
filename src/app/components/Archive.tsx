import { motion } from "motion/react";
import { useState } from "react";

export function Archive() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = ["all", "2026", "2025", "2024"];

  const archiveItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1633767448607-64876fa0978e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      year: "2026",
      title: "Neon Genesis",
      category: "Spring"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1777146536285-e70e21c953eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      year: "2026",
      title: "Digital Dreams",
      category: "Winter"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1777146536581-926177e95e48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      year: "2025",
      title: "Cyber Noir",
      category: "Fall"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1580428180098-24b353d7e9d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      year: "2025",
      title: "Tech Luxe",
      category: "Summer"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1610232801646-58c90c3c5355?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      year: "2025",
      title: "Virtual Reality",
      category: "Spring"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1595271444083-08084c6857c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      year: "2024",
      title: "Pixel Perfect",
      category: "Winter"
    }
  ];

  const filteredItems = activeFilter === "all"
    ? archiveItems
    : archiveItems.filter(item => item.year === activeFilter);

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-pink-500 tracking-[0.3em] uppercase mb-4 block" style={{ fontFamily: "Rajdhani, sans-serif" }}>
            Time Machine
          </span>
          <h2
            className="text-6xl md:text-8xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-6"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            Archive
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Journey through our digital fashion history, from past visions to future realities.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-3 rounded-full border transition-all duration-300 cursor-hover uppercase tracking-[0.2em] ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 border-transparent"
                  : "border-pink-500/30 bg-black/40 backdrop-blur-xl hover:border-pink-500/60"
              }`}
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Archive grid with masonry layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid group relative overflow-hidden rounded-3xl cursor-hover"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto group-hover:scale-110 transition-transform duration-700"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-black/40 backdrop-blur-xl border border-pink-500/30 rounded-2xl p-6">
                    <span className="text-pink-400 text-sm tracking-[0.3em] uppercase block mb-2" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                      {item.category} {item.year}
                    </span>
                    <h3 className="text-2xl mb-3" style={{ fontFamily: "Orbitron, sans-serif" }}>
                      {item.title}
                    </h3>
                    <button className="px-6 py-2 border border-pink-500/50 rounded-full text-sm hover:bg-pink-500/10 transition-all cursor-hover">
                      <span className="tracking-wider uppercase" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                        View Details
                      </span>
                    </button>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(236,72,153,0.2)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load more button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="px-12 py-5 border-2 border-pink-500/50 rounded-full hover:bg-pink-500/10 transition-all duration-300 cursor-hover group">
            <span className="tracking-[0.2em] uppercase text-pink-400 flex items-center gap-3" style={{ fontFamily: "Rajdhani, sans-serif" }}>
              Load More
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-pink-500 border-t-transparent rounded-full inline-block"
              />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
