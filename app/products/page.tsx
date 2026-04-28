"use client";
import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Star, Search } from "lucide-react";

const categories = ["All", "Stickers", "Keyrings", "Smart Watches"];

const categoryMap: Record<string, string> = {
  all: "All",
  stickers: "Stickers",
  keyrings: "Keyrings",
  watches: "Smart Watches",
};

const revCategoryMap: Record<string, string> = {
  "All": "all",
  "Stickers": "stickers",
  "Keyrings": "keyrings",
  "Smart Watches": "watches",
};

const allProducts = [
  { id: "p1", emoji: "🌈", name: "Holographic Sticker Pack", category: "Stickers", price: "$12.99", rating: 4.9, reviews: 248, badge: "Best Seller", badgeColor: "#6c63ff", desc: "Ultra-vivid holographic vinyl stickers." },
  { id: "p2", emoji: "🔑", name: "Premium Leather Keyring", category: "Keyrings", price: "$18.99", rating: 4.8, reviews: 183, badge: "Popular", badgeColor: "#f59e0b", desc: "Genuine leather with custom engraving." },
  { id: "p3", emoji: "⌚", name: "CharmWatch Pro X", category: "Smart Watches", price: "$89.99", rating: 4.9, reviews: 512, badge: "New", badgeColor: "#06b6d4", desc: "AMOLED display, GPS, 7-day battery." },
  { id: "p4", emoji: "✂️", name: "Die-Cut Custom Sticker", category: "Stickers", price: "$8.99", rating: 4.7, reviews: 329, badge: null, badgeColor: "#6c63ff", desc: "Any shape, waterproof vinyl." },
  { id: "p5", emoji: "💎", name: "Acrylic Charm Keyring", category: "Keyrings", price: "$14.99", rating: 4.8, reviews: 156, badge: "Sale", badgeColor: "#ef4444", desc: "Crystal-clear acrylic with photo print." },
  { id: "p6", emoji: "📱", name: "CharmBand Active", category: "Smart Watches", price: "$49.99", rating: 4.6, reviews: 287, badge: null, badgeColor: "#06b6d4", desc: "Slim fitness tracker." },
  { id: "p7", emoji: "🎭", name: "Character Sticker Set", category: "Stickers", price: "$15.99", rating: 4.8, reviews: 94, badge: null, badgeColor: "#6c63ff", desc: "10-pack custom character stickers." },
  { id: "p8", emoji: "⚙️", name: "Metal Logo Keyring", category: "Keyrings", price: "$22.99", rating: 4.9, reviews: 71, badge: "Premium", badgeColor: "#6c63ff", desc: "Laser-etched stainless steel." },
  { id: "p9", emoji: "⌚", name: "CharmWatch Lite", category: "Smart Watches", price: "$39.99", rating: 4.5, reviews: 198, badge: null, badgeColor: "#06b6d4", desc: "Essential smart features, budget price." },
];

function ProductsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");

  const urlCategory = searchParams.get("category");
  const activeCategory = (urlCategory && categoryMap[urlCategory.toLowerCase()]) || "All";

  const handleCategoryChange = (cat: string) => {
    const slug = revCategoryMap[cat];
    if (slug === "all") {
      router.push("/products");
    } else {
      router.push(`/products?category=${slug}`);
    }
  };

  const filtered = allProducts.filter(
    (p) =>
      (activeCategory === "All" || p.category === activeCategory) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center mb-12">
        <h1 className="text-5xl font-black text-white mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
          Our <span className="gradient-text">Products</span>
        </h1>
        <p className="text-[#64748b] text-lg">Discover our full range of custom products and smart wearables.</p>
      </motion.div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748b]" />
          <input
            id="product-search"
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full bg-[#12121e] border border-[#2a2a40] text-white placeholder-[#64748b] focus:outline-none focus:border-[#6c63ff] transition-colors"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-${cat.toLowerCase().replace(" ", "-")}`}
              onClick={() => handleCategoryChange(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#6c63ff] to-[#4f46e5] text-white shadow-lg shadow-[#6c63ff]/30"
                  : "border border-[#2a2a40] text-[#a0a0c0] hover:border-[#6c63ff] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory + search}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="glass-card overflow-hidden group glow-premium"
            >
              <div className="relative h-52 bg-gradient-to-br from-[#1a1a30] to-[#0d0d1e] flex items-center justify-center">
                <motion.div className="text-7xl" whileHover={{ scale: 1.2 }}>{product.emoji}</motion.div>
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#0a0a14]/80 text-xs text-[#a0a0c0] border border-[#2a2a40]">{product.category}</div>
                {product.badge && (
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold text-white" style={{ background: product.badgeColor }}>{product.badge}</div>
                )}
                <div className="absolute inset-0 bg-[#6c63ff]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold mb-1">{product.name}</h3>
                <p className="text-[#64748b] text-xs mb-3">{product.desc}</p>
                <div className="flex items-center gap-1.5 mb-4">
                  <div className="flex">{[...Array(5)].map((_, j) => <Star key={j} className={`w-3.5 h-3.5 ${j < Math.floor(product.rating) ? "text-[#f59e0b] fill-[#f59e0b]" : "text-[#2a2a40]"}`} />)}</div>
                  <span className="text-xs text-[#64748b]">{product.rating} ({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-black gradient-text" style={{ fontFamily: "var(--font-orbitron)" }}>{product.price}</span>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#6c63ff]/20 border border-[#6c63ff]/40 text-[#a29eff] text-sm font-semibold hover:bg-[#6c63ff] hover:text-white transition-all duration-300">
                    <ShoppingCart className="w-3.5 h-3.5" /> Add
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24 text-[#64748b]">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-lg">No products found. Try a different search or filter.</p>
        </motion.div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#0a0a14]">
      <Suspense fallback={<div className="flex items-center justify-center min-h-[50vh]"><div className="w-10 h-10 border-4 border-[#6c63ff]/30 border-t-[#6c63ff] rounded-full animate-spin" /></div>}>
        <ProductsContent />
      </Suspense>
    </div>
  );
}
