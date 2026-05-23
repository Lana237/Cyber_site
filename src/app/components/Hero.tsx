import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Glow orbs */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[150px] animate-pulse delay-1000" />

      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-block px-6 py-2 rounded-full border border-pink-500/30 bg-black/40 backdrop-blur-xl text-pink-400 tracking-[0.3em] uppercase">
            Digital Fashion 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl md:text-9xl lg:text-[180px] leading-none mb-8"
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          <span className="block bg-gradient-to-r from-pink-500 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(236,72,153,0.8)]">
            CYBER
          </span>
          <span className="block bg-gradient-to-r from-pink-500 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(236,72,153,0.8)]">
            VENUS
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Where fashion transcends reality. Experience the future of digital
          couture in a neon-lit metaverse.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button className="group relative px-12 py-5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full overflow-hidden cursor-hover">
            <span className="relative z-10 tracking-[0.2em] uppercase" style={{ fontFamily: "Rajdhani, sans-serif" }}>
              Explore Collections
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="px-12 py-5 border-2 border-pink-500/50 rounded-full hover:bg-pink-500/10 transition-all duration-300 cursor-hover backdrop-blur-sm">
            <span className="tracking-[0.2em] uppercase text-pink-400" style={{ fontFamily: "Rajdhani, sans-serif" }}>
              Watch Film
            </span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-pink-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
