"use client";
import { motion } from "framer-motion";
import { Upload, Settings, Truck, CheckCircle } from "lucide-react";

const steps = [
  {
    id: "step-choose",
    icon: CheckCircle,
    step: "01",
    title: "Choose Your Product",
    description: "Select from custom stickers, personalized keyrings, or browse our smart watch collection.",
    color: "#6c63ff",
  },
  {
    id: "step-upload",
    icon: Upload,
    step: "02",
    title: "Upload Your Design",
    description: "Share your artwork, logo, or describe your idea — our team will bring it to life.",
    color: "#f59e0b",
  },
  {
    id: "step-customize",
    icon: Settings,
    step: "03",
    title: "Customize Details",
    description: "Pick size, material, quantity, and finish. We'll send you a proof before production.",
    color: "#06b6d4",
  },
  {
    id: "step-deliver",
    icon: Truck,
    step: "04",
    title: "Fast Delivery",
    description: "We produce and ship your order quickly. Track it every step of the way.",
    color: "#10b981",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#080812] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle, #6c63ff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#fbbf24] text-sm font-medium mb-4 tracking-wider uppercase">
            Simple Process
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            How It <span className="gradient-text-gold">Works</span>
          </h2>
          <p className="text-[#64748b] text-lg max-w-xl mx-auto">
            Getting your custom product is simple and fast. Here&apos;s how:
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#6c63ff] via-[#f59e0b] via-[#06b6d4] to-[#10b981] opacity-30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                id={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative text-center group"
              >
                {/* Step number circle */}
                <div className="relative mx-auto mb-6">
                  <div
                    className="w-16 h-16 rounded-full border-2 flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110"
                    style={{
                      borderColor: step.color,
                      background: `${step.color}15`,
                      boxShadow: `0 0 20px ${step.color}30`,
                    }}
                  >
                    <step.icon className="w-7 h-7" style={{ color: step.color }} />
                  </div>
                  <div
                    className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-white"
                    style={{ background: step.color }}
                  >
                    {step.step}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
