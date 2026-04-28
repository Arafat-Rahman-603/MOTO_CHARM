"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingCart, Star, Eye } from "lucide-react";

const products = [
  {
    id: "prod-holographic-sticker",
    emoji: "🌈",
    name: "Holographic Sticker Pack",
    category: "Stickers",
    price: "$12.99",
    rating: 4.9,
    reviews: 248,
    badge: "Best Seller",
    badgeColor: "#6c63ff",
    description: "Ultra-vivid holographic vinyl stickers with a prismatic sheen.",
  },
  {
    id: "prod-leather-keyring",
    emoji: "🔑",
    name: "Premium Leather Keyring",
    category: "Keyrings",
    price: "$18.99",
    rating: 4.8,
    reviews: 183,
    badge: "Popular",
    badgeColor: "#f59e0b",
    description: "Genuine leather keyring with custom engraving or full-color print.",
  },
  {
    id: "prod-smart-watch-pro",
    emoji: "⌚",
    name: "CharmWatch Pro X",
    category: "Smart Watches",
    price: "$89.99",
    rating: 4.9,
    reviews: 512,
    badge: "New",
    badgeColor: "#06b6d4",
    description: "Advanced health tracking, GPS, AMOLED display, and 7-day battery.",
  },
  {
    id: "prod-die-cut-sticker",
    emoji: "✂️",
    name: "Die-Cut Custom Sticker",
    category: "Stickers",
    price: "$8.99",
    rating: 4.7,
    reviews: 329,
    badge: null,
    badgeColor: "#6c63ff",
    description: "Precision-cut stickers in any shape. Waterproof and weather resistant.",
  },
  {
    id: "prod-acrylic-keyring",
    emoji: "💎",
    name: "Acrylic Charm Keyring",
    category: "Keyrings",
    price: "$14.99",
    rating: 4.8,
    reviews: 156,
    badge: "Sale",
    badgeColor: "#ef4444",
    description: "Crystal-clear acrylic keyrings with your photo or artwork printed inside.",
  },
  {
    id: "prod-smart-band",
    emoji: "📱",
    name: "CharmBand Active",
    category: "Smart Watches",
    price: "$49.99",
    rating: 4.6,
    reviews: 287,
    badge: null,
    badgeColor: "#06b6d4",
    description: "Slim fitness tracker with heart rate, sleep, and workout monitoring.",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#06b6d4]/10 border border-[#06b6d4]/30 text-[#22d3ee] text-sm font-medium mb-4 tracking-wider uppercase">
            Featured
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
            Popular <span className="gradient-text">Products</span>
          </h2>
          <p className="text-[#64748b] text-lg max-w-xl mx-auto">
            Handpicked favourites loved by thousands of customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              id={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card overflow-hidden group glow-premium"
            >
              <div className="relative h-52 bg-gradient-to-br from-[#1a1a30] to-[#0d0d1e] flex items-center justify-center overflow-hidden">
                <motion.div className="text-7xl" whileHover={{ scale: 1.2 }} transition={{ duration: 0.4 }}>
                  {product.emoji}
                </motion.div>
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#0a0a14]/80 text-xs text-[#a0a0c0] backdrop-blur-sm border border-[#2a2a40]">
                  {product.category}
                </div>
                {product.badge && (
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold text-white" style={{ background: product.badgeColor }}>
                    {product.badge}
                  </div>
                )}
                <div className="absolute inset-0 bg-[#6c63ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Link href="/products" className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold flex items-center gap-2">
                    <Eye className="w-4 h-4" /> Quick View
                  </div>
                </Link>
              </div>

              <div className="p-5">
                <h3 className="text-white font-bold text-base mb-1">{product.name}</h3>
                <p className="text-[#64748b] text-xs mb-3 leading-relaxed">{product.description}</p>
                <div className="flex items-center gap-1.5 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className={`w-3.5 h-3.5 ${j < Math.floor(product.rating) ? "text-[#f59e0b] fill-[#f59e0b]" : "text-[#2a2a40]"}`} />
                    ))}
                  </div>
                  <span className="text-xs text-[#64748b]">{product.rating} ({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-black gradient-text" style={{ fontFamily: "var(--font-orbitron)" }}>
                    {product.price}
                  </span>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#6c63ff]/20 border border-[#6c63ff]/40 text-[#a29eff] text-sm font-semibold hover:bg-[#6c63ff] hover:text-white hover:border-[#6c63ff] transition-all duration-300">
                    <ShoppingCart className="w-3.5 h-3.5" /> Add
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <Link href="/products" className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[#2a2a40] text-white hover:border-[#6c63ff] hover:bg-[#6c63ff]/10 transition-all duration-300 font-semibold">
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
