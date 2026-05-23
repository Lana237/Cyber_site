import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Menu, X } from "lucide-react";
import { CustomCursor } from "./components/CustomCursor";
import { Hero } from "./components/Hero";
import { Collections } from "./components/Collections";
import { DigitalModel } from "./components/DigitalModel";
import { Archive } from "./components/Archive";
import { Contact } from "./components/Contact";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Collections", id: "collections" },
    { label: "Digital Model", id: "model" },
    { label: "Archive", id: "archive" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden" style={{ cursor: "none" }}>
      <CustomCursor />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background:
              "radial-gradient(circle at 20% 30%, rgba(236,72,153,0.22), transparent 35%), radial-gradient(circle at 80% 20%, rgba(168,85,247,0.18), transparent 35%), radial-gradient(circle at 50% 80%, rgba(236,72,153,0.14), transparent 40%), #000",
            backgroundSize: "200% 200%"
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

        {Array.from({ length: 45 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-pink-400 shadow-[0_0_14px_rgba(236,72,153,0.9)]"
            style={{
              width: i % 3 === 0 ? 4 : 2,
              height: i % 3 === 0 ? 4 : 2,
              left: `${(i * 23) % 100}%`,
              bottom: "-20px",
              opacity: i % 2 === 0 ? 0.7 : 0.35
            }}
            animate={{
              y: ["0vh", "-120vh"],
              x: [0, i % 2 === 0 ? 35 : -35],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 8 + (i % 6),
              repeat: Infinity,
              delay: i * 0.25,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-2xl border-b border-pink-500/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-2xl tracking-[0.3em] uppercase cursor-hover"
            style={{ fontFamily: "Orbitron, sans-serif" }}
            onClick={() => scrollToSection("hero")}
          >
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Cyber Venus
            </span>
          </motion.h1>

          <div className="hidden lg:flex gap-10 tracking-[0.25em] uppercase">
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="text-zinc-300 hover:text-pink-400 transition cursor-hover"
                style={{ fontFamily: "Rajdhani, sans-serif" }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden border border-pink-500 px-6 py-3 rounded-full text-pink-400 hover:bg-pink-500/10 transition shadow-[0_0_20px_rgba(236,72,153,0.4)] flex items-center gap-2 cursor-hover"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>

        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          className="lg:hidden overflow-hidden bg-black/95 backdrop-blur-2xl border-t border-pink-500/20"
        >
          <div className="px-6 py-8 space-y-6">
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-xl text-zinc-300 hover:text-pink-400 transition cursor-hover tracking-[0.2em] uppercase"
                style={{ fontFamily: "Rajdhani, sans-serif" }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      <main className="relative z-10">
        <section id="hero">
          <Hero />
        </section>

        <section id="collections">
          <Collections />
        </section>

        <section id="model">
          <DigitalModel />
        </section>

        <section id="archive">
          <Archive />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="relative z-10 border-t border-pink-500/10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 mb-12">
            <div>
              <h4
                className="text-3xl tracking-[0.15em] bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                CYBER VENUS
              </h4>
              <p className="text-zinc-400 leading-7" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                Futuristic neon fashion experience inspired by cyberpunk,
                synthwave and luxury digital aesthetics.
              </p>
            </div>

            <div>
              <h5 className="text-sm text-pink-500 uppercase tracking-[0.3em] mb-6" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                Quick Links
              </h5>
              <div className="space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-zinc-400 hover:text-pink-400 transition cursor-hover"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-sm text-pink-500 uppercase tracking-[0.3em] mb-6" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                Newsletter
              </h5>
              <p className="text-zinc-400 mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                Subscribe for digital fashion updates
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 bg-black/60 border border-pink-500/30 rounded-xl focus:border-pink-500 focus:outline-none text-white cursor-hover"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                />
                <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl cursor-hover">
                  <span className="uppercase tracking-wider" style={{ fontFamily: "Rajdhani, sans-serif" }}>Go</span>
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-pink-500/10 pt-8 text-center text-zinc-500 tracking-widest" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            © 2026 CYBER VENUS — ALL RIGHTS RESERVED
          </div>
        </div>
      </footer>
    </div>
  );
}