"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#6c63ff]/20 via-[#4f46e5]/10 to-[#06b6d4]/20" />
      <div className="absolute inset-0 border-y border-[#6c63ff]/20" />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#6c63ff]/10 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute right-1/4 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#f59e0b]/10 blur-3xl pointer-events-none"
      />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#fbbf24] text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" /> Limited Time Offer
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
            Ready to Create <span className="gradient-text">Something Amazing?</span>
          </h2>
          <p className="text-[#8888aa] text-lg mb-10 max-w-2xl mx-auto">
            Start your custom order today and get <span className="text-[#f59e0b] font-semibold">20% off</span> your first order.
            No minimums on stickers and keyrings!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              id="cta-custom-order-btn"
              href="/custom-order"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#6c63ff] to-[#4f46e5] text-white font-bold text-lg hover:shadow-2xl hover:shadow-[#6c63ff]/40 hover:scale-105 transition-all duration-300"
            >
              Start Custom Order <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              id="cta-contact-btn"
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#f59e0b]/40 text-[#fbbf24] font-bold text-lg hover:bg-[#f59e0b]/10 hover:border-[#f59e0b] hover:scale-105 transition-all duration-300"
            >
              Talk to Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
