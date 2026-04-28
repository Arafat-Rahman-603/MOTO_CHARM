"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Award, Users, Package, Smile } from "lucide-react";

const stats = [
  { icon: Users, value: 5000, suffix: "+", label: "Happy Customers", color: "#6c63ff" },
  { icon: Package, value: 10000, suffix: "+", label: "Products Delivered", color: "#f59e0b" },
  { icon: Award, value: 3, suffix: " yrs", label: "In Business", color: "#06b6d4" },
  { icon: Smile, value: 99, suffix: "%", label: "Satisfaction Rate", color: "#10b981" },
];

const team = [
  { name: "Arif Rahman", role: "Founder & CEO", emoji: "👨‍💼", bio: "Passionate about turning ideas into tangible products." },
  { name: "Nadia Islam", role: "Head of Design", emoji: "👩‍🎨", bio: "Award-winning designer with 8 years of experience." },
  { name: "Karim Uddin", role: "Production Lead", emoji: "👨‍🔧", bio: "Ensures every product meets our premium quality standards." },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 2000;
          const step = target / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#0a0a14]">
      {/* Hero */}
      <section className="relative py-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(108,99,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(108,99,255,0.3) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#6c63ff]/10 border border-[#6c63ff]/30 text-[#a29eff] text-sm font-medium mb-6 tracking-wider uppercase">Our Story</span>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6" style={{ fontFamily: "var(--font-orbitron)" }}>
              About <span className="gradient-text">Moto Charm</span>
            </h1>
            <p className="text-[#8888aa] text-xl leading-relaxed max-w-2xl mx-auto">
              Born from a love of personalization, Moto Charm started in 2021 with a simple mission: make premium custom products accessible to everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="text-4xl font-black text-white mb-6" style={{ fontFamily: "var(--font-orbitron)" }}>
                Why We <span className="gradient-text">Exist</span>
              </h2>
              <p className="text-[#8888aa] text-lg leading-relaxed mb-6">
                We believe your accessories should tell your story. Whether it&apos;s a business logo on a sticker, a memory captured in a keyring, or a smart watch that fits your lifestyle — Moto Charm is here to make it happen.
              </p>
              <p className="text-[#8888aa] text-lg leading-relaxed mb-8">
                We work with premium materials, cutting-edge printing technology, and a team of passionate designers to ensure every product we deliver exceeds expectations.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Premium Quality", "Fast Turnaround", "Eco-Friendly", "Custom Everything"].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full bg-[#6c63ff]/10 border border-[#6c63ff]/30 text-[#a29eff] text-sm font-medium">{tag}</span>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="glass-card p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#6c63ff]/10 rounded-full blur-2xl" />
              <div className="text-6xl mb-6">🏭</div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Workshop</h3>
              <p className="text-[#64748b] leading-relaxed">
                State-of-the-art production facility in Dhaka, Bangladesh. Every order is hand-checked by our quality team before shipping. We&apos;re proud of our &lt;0.1% defect rate.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#080812]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${stat.color}20`, border: `1px solid ${stat.color}40` }}>
                  <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <div className="text-3xl font-black mb-1" style={{ fontFamily: "var(--font-orbitron)", color: stat.color }}>
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[#64748b] text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
            <h2 className="text-4xl font-black text-white mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="text-[#64748b] text-lg">The people who make Moto Charm magic happen every day.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="glass-card p-8 text-center group">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6c63ff] to-[#06b6d4] flex items-center justify-center mx-auto mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                  {member.emoji}
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-[#6c63ff] text-sm font-medium mb-3">{member.role}</p>
                <p className="text-[#64748b] text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
