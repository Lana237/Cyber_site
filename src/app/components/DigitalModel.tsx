import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function DigitalModel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative py-32 px-6 overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-pink-500 tracking-[0.3em] uppercase mb-4 block" style={{ fontFamily: "Rajdhani, sans-serif" }}>
              Virtual Experience
            </span>
            <h2
              className="text-6xl md:text-8xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-8"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              DIGITAL
              <br />
              MODEL
            </h2>
            <p className="text-xl text-zinc-400 mb-12 leading-relaxed" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Experience fashion in a new dimension. Our AI-powered digital
              models showcase the future of virtual couture with unprecedented
              realism and style.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {[
                { value: "100K+", label: "Virtual Designs" },
                { value: "50+", label: "Digital Models" },
                { value: "24/7", label: "Live Shows" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-pink-500/20 bg-black/40 backdrop-blur-xl rounded-2xl p-6"
                >
                  <div
                    className="text-3xl md:text-4xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2"
                    style={{ fontFamily: "Orbitron, sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-zinc-400 tracking-wider uppercase" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Model showcase */}
          <motion.div
            style={{ y, opacity }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              {/* Main model image */}
              <img
                src="https://images.unsplash.com/photo-1749499070456-dc4c24c99539?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Digital Model"
                className="w-full h-[700px] object-cover"
              />

              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              {/* Floating info card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute top-10 right-10 bg-black/30 backdrop-blur-2xl border border-pink-500/30 rounded-2xl p-6 shadow-[0_0_50px_rgba(236,72,153,0.3)]"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mb-4 animate-pulse" />
                <div className="text-sm text-zinc-400 mb-1" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                  LIVE NOW
                </div>
                <div className="text-xl" style={{ fontFamily: "Orbitron, sans-serif" }}>
                  Venus AI-07
                </div>
              </motion.div>

              {/* Bottom info card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-10 left-10 right-10 bg-black/30 backdrop-blur-2xl border border-pink-500/30 rounded-2xl p-6"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-pink-400 mb-1 tracking-wider uppercase" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                      Collection 01
                    </div>
                    <div className="text-2xl" style={{ fontFamily: "Orbitron, sans-serif" }}>
                      Neon Future
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full cursor-hover">
                    <span className="tracking-wider uppercase" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                      View
                    </span>
                  </button>
                </div>
              </motion.div>

              {/* Scan line effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/10 to-transparent h-32"
                animate={{ y: [0, 700, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
