"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sticker, Key, Watch, ArrowRight } from "lucide-react";

const features = [
  {
    id: "feature-stickers",
    icon: Sticker,
    emoji: "🎨",
    title: "Custom Stickers",
    description:
      "Upload your design or describe your idea — we'll turn it into premium vinyl stickers with vibrant, lasting colors.",
    color: "#6c63ff",
    gradient: "from-[#6c63ff] to-[#8b5cf6]",
    href: "/custom-order?type=sticker",
    features: ["Any shape & size", "Waterproof vinyl", "Bulk discounts", "48hr turnaround"],
  },
  {
    id: "feature-keyrings",
    icon: Key,
    emoji: "🔑",
    title: "Custom Keyrings",
    description:
      "Personalized keyrings made from premium materials — perfect for gifts, promotions, or expressing your style.",
    color: "#f59e0b",
    gradient: "from-[#f59e0b] to-[#ef4444]",
    href: "/custom-order?type=keyring",
    features: ["Metal & acrylic options", "Full color print", "Custom shapes", "Low minimums"],
  },
  {
    id: "feature-watches",
    icon: Watch,
    emoji: "⌚",
    title: "Smart Watches",
    description:
      "Cutting-edge smart watches with health tracking, notifications, and stunning displays at unbeatable prices.",
    color: "#06b6d4",
    gradient: "from-[#06b6d4] to-[#0ea5e9]",
    href: "/products?category=watches",
    features: ["Health monitoring", "GPS tracking", "5-day battery", "Water resistant"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function FeaturesSection() {
  return (
    <section className="py-24 section-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6c63ff]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6c63ff]/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#6c63ff]/10 border border-[#6c63ff]/30 text-[#a29eff] text-sm font-medium mb-4 tracking-wider uppercase">
            What We Do
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Everything You <span className="gradient-text">Need</span>
          </h2>
          <p className="text-[#64748b] text-lg max-w-xl mx-auto">
            From fully custom creations to ready-to-ship smart wearables — all in one place.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              id={feature.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-8 group cursor-pointer relative overflow-hidden"
            >
              {/* Top gradient line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Glow bg */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at 50% 0%, ${feature.color}, transparent 70%)` }}
              />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                style={{ boxShadow: `0 8px 30px ${feature.color}40` }}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-[#64748b] text-sm leading-relaxed mb-6">{feature.description}</p>

              {/* Feature list */}
              <ul className="space-y-2 mb-8">
                {feature.features.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#a0a0c0]">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: feature.color }}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href={feature.href}
                className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all duration-300`}
              >
                Learn More <ArrowRight className="w-4 h-4" style={{ color: feature.color }} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
