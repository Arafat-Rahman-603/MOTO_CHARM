"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: "testimonial-1",
    name: "Sarah Ahmed",
    role: "Small Business Owner",
    avatar: "👩‍💼",
    rating: 5,
    text: "The custom stickers Moto Charm made for my cafe are absolutely stunning! The holographic finish makes them pop and customers always ask where I got them.",
  },
  {
    id: "testimonial-2",
    name: "Rafi Islam",
    role: "Freelance Designer",
    avatar: "👨‍🎨",
    rating: 5,
    text: "I ordered custom keyrings for a client event and they exceeded every expectation. The quality, the detail, the packaging — all world-class.",
  },
  {
    id: "testimonial-3",
    name: "Priya Das",
    role: "Tech Enthusiast",
    avatar: "👩‍💻",
    rating: 5,
    text: "The CharmWatch Pro X is incredible value. Tracks everything I need, looks premium, and the battery life is amazing. Highly recommend!",
  },
  {
    id: "testimonial-4",
    name: "Karim Hossain",
    role: "Event Organizer",
    avatar: "🎪",
    rating: 5,
    text: "Ordered 500 custom keyrings for our conference. Fast delivery, perfect print quality, and every single one was flawless. Will order again!",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-24 bg-[#080812] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#6c63ff]/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#fbbf24] text-sm font-medium mb-4 tracking-wider uppercase">
            Reviews
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white" style={{ fontFamily: "var(--font-orbitron)" }}>
            What Customers <span className="gradient-text-gold">Say</span>
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-10 text-center"
            >
              <Quote className="w-10 h-10 text-[#6c63ff]/40 mx-auto mb-6" />
              <p className="text-[#c0c0d8] text-lg leading-relaxed mb-8 italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>
              <div className="flex flex-col items-center gap-2">
                <div className="text-4xl">{testimonials[current].avatar}</div>
                <div className="font-bold text-white">{testimonials[current].name}</div>
                <div className="text-[#64748b] text-sm">{testimonials[current].role}</div>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#f59e0b]">★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              id="testimonial-prev"
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#2a2a40] flex items-center justify-center text-white hover:border-[#6c63ff] hover:bg-[#6c63ff]/20 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-[#6c63ff]" : "bg-[#2a2a40]"}`}
                />
              ))}
            </div>
            <button
              id="testimonial-next"
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#2a2a40] flex items-center justify-center text-white hover:border-[#6c63ff] hover:bg-[#6c63ff]/20 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
