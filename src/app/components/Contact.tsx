import { motion } from "motion/react";
import { Mail, Instagram, Twitter, Github, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const socialLinks = [
    { icon: Instagram, label: "Instagram", handle: "@cybervenus" },
    { icon: Twitter, label: "Twitter", handle: "@cybervenus_io" },
    { icon: Github, label: "Github", handle: "cybervenus" }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] animate-pulse" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-pink-500 tracking-[0.3em] uppercase mb-4 block" style={{ fontFamily: "Rajdhani, sans-serif" }}>
              Get In Touch
            </span>
            <h2
              className="text-6xl md:text-8xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-8"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              CONTACT
            </h2>
            <p className="text-xl text-zinc-400 mb-12 leading-relaxed" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Step into the future. Connect with us for collaborations,
              inquiries, or to join our digital fashion revolution.
            </p>

            {/* Contact info */}
            <div className="space-y-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 group cursor-hover"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500 uppercase tracking-wider mb-1" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                    Email
                  </div>
                  <div className="text-lg" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    hello@cybervenus.io
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Social links */}
            <div className="space-y-4">
              <div className="text-sm text-zinc-500 uppercase tracking-[0.3em] mb-6" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                Follow The Signal
              </div>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-4 p-4 border border-pink-500/20 rounded-2xl bg-black/20 backdrop-blur-xl hover:bg-pink-500/5 hover:border-pink-500/40 transition-all duration-300 cursor-hover group"
                >
                  <social.icon className="w-5 h-5 text-pink-500 group-hover:scale-110 transition-transform" />
                  <div className="flex-1">
                    <div className="text-sm text-zinc-500 uppercase tracking-wider" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                      {social.label}
                    </div>
                    <div style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                      {social.handle}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-black/40 backdrop-blur-2xl border border-pink-500/20 rounded-3xl p-8 md:p-12 shadow-[0_0_80px_rgba(236,72,153,0.15)]">
              <form className="space-y-6">
                <div>
                  <label
                    className="block text-sm text-zinc-400 uppercase tracking-[0.2em] mb-3"
                    style={{ fontFamily: "Rajdhani, sans-serif" }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 bg-black/60 border border-pink-500/30 rounded-2xl focus:border-pink-500 focus:outline-none focus:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all text-white cursor-hover"
                    placeholder="Enter your name"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  />
                </div>

                <div>
                  <label
                    className="block text-sm text-zinc-400 uppercase tracking-[0.2em] mb-3"
                    style={{ fontFamily: "Rajdhani, sans-serif" }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 bg-black/60 border border-pink-500/30 rounded-2xl focus:border-pink-500 focus:outline-none focus:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all text-white cursor-hover"
                    placeholder="your@email.com"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  />
                </div>

                <div>
                  <label
                    className="block text-sm text-zinc-400 uppercase tracking-[0.2em] mb-3"
                    style={{ fontFamily: "Rajdhani, sans-serif" }}
                  >
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-6 py-4 bg-black/60 border border-pink-500/30 rounded-2xl focus:border-pink-500 focus:outline-none focus:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all text-white resize-none cursor-hover"
                    placeholder="Tell us about your project..."
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-8 py-5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center gap-3 cursor-hover group shadow-[0_0_30px_rgba(236,72,153,0.4)] hover:shadow-[0_0_50px_rgba(236,72,153,0.6)] transition-all"
                >
                  <span className="tracking-[0.2em] uppercase" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                    Send Message
                  </span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>

              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-[80px]" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-[80px]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
