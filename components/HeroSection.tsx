"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen hero-gradient flex items-center justify-center overflow-hidden pt-16">
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(108,99,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-[#6c63ff]/10 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-10 w-56 h-56 rounded-full bg-[#06b6d4]/10 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#f59e0b]/3 blur-3xl pointer-events-none"
      />

      {/* Floating product badges */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute left-8 top-1/3 hidden lg:block"
      >
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="glass-card px-4 py-3 flex items-center gap-3 glow-primary"
        >
          <span className="text-2xl">🔑</span>
          <div>
            <p className="text-xs text-[#64748b]">Best Seller</p>
            <p className="text-sm font-semibold text-white">Custom Keyrings</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute right-8 top-1/3 hidden lg:block"
      >
        <motion.div
          animate={{ y: [8, -8, 8] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="glass-card px-4 py-3 flex items-center gap-3"
        >
          <span className="text-2xl">⌚</span>
          <div>
            <p className="text-xs text-[#64748b]">New Arrival</p>
            <p className="text-sm font-semibold text-white">Smart Watches</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute right-12 bottom-1/3 hidden lg:block"
      >
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="glass-card px-4 py-3 flex items-center gap-3 glow-secondary"
        >
          <span className="text-2xl">🎨</span>
          <div>
            <p className="text-xs text-[#64748b]">Custom Made</p>
            <p className="text-sm font-semibold text-white">Your Design</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6c63ff]/10 border border-[#6c63ff]/30 text-[#a29eff] text-sm font-medium mb-6"
        >
          <Sparkles className="w-4 h-4" />
          Premium Custom Products
          <Sparkles className="w-4 h-4" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight tracking-tight"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          <span className="gradient-text">Custom Made</span>
          <br />
          <span className="text-white">Your Way</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-[#8888aa] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Premium <span className="text-[#6c63ff] font-semibold">custom stickers</span> &amp;{" "}
          <span className="text-[#f59e0b] font-semibold">personalized keyrings</span> crafted to your exact
          requirements — plus the latest <span className="text-[#06b6d4] font-semibold">smart watches</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            id="hero-custom-order-btn"
            href="/custom-order"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#6c63ff] to-[#4f46e5] text-white font-bold text-lg hover:shadow-2xl hover:shadow-[#6c63ff]/40 hover:scale-105 transition-all duration-300"
          >
            Start Custom Order
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            id="hero-shop-btn"
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#2a2a40] text-white font-bold text-lg hover:border-[#6c63ff] hover:bg-[#6c63ff]/10 hover:scale-105 transition-all duration-300"
          >
            Shop Products
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 flex flex-wrap justify-center gap-10"
        >
          {[
            { value: "5,000+", label: "Happy Customers" },
            { value: "10,000+", label: "Products Delivered" },
            { value: "100%", label: "Custom Made" },
            { value: "4.9★", label: "Average Rating" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="text-center"
            >
              <div
                className="text-2xl font-black gradient-text mb-1"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-[#64748b] tracking-wider uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[#64748b] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-0.5 h-8 bg-gradient-to-b from-[#6c63ff] to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
