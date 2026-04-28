"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, ChevronRight, Check, Send } from "lucide-react";

const steps = ["Product Type", "Your Design", "Specifications", "Contact & Submit"];

const productTypes = [
  { id: "sticker", emoji: "🎨", title: "Custom Sticker", desc: "Any shape, size, finish" },
  { id: "keyring", emoji: "🔑", title: "Custom Keyring", desc: "Metal, acrylic, leather" },
];

export default function CustomOrderPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    type: "",
    description: "",
    size: "",
    quantity: "10",
    material: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string, val: string) => setForm((f) => ({ ...f, [field]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 bg-[#0a0a14] flex items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="glass-card p-12 text-center max-w-lg"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6c63ff] to-[#06b6d4] flex items-center justify-center mx-auto mb-6"
          >
            <Check className="w-10 h-10 text-white" />
          </motion.div>
          <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>Order Received!</h2>
          <p className="text-[#64748b] mb-8">Thank you! We&apos;ll review your custom order and get back to you within 24 hours with a quote and design proof.</p>
          <button onClick={() => { setSubmitted(false); setStep(0); setForm({ type: "", description: "", size: "", quantity: "10", material: "", name: "", email: "", phone: "", notes: "" }); }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#6c63ff] to-[#4f46e5] text-white font-semibold hover:scale-105 transition-transform">
            Place Another Order
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#0a0a14]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center mb-12">
          <h1 className="text-5xl font-black text-white mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
            Custom <span className="gradient-text">Order</span>
          </h1>
          <p className="text-[#64748b] text-lg">Tell us what you need and we&apos;ll make it happen.</p>
        </motion.div>

        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-3">
            {steps.map((s, i) => (
              <div key={s} className="flex flex-col items-center gap-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${i < step ? "bg-[#6c63ff] text-white" : i === step ? "bg-gradient-to-br from-[#6c63ff] to-[#4f46e5] text-white shadow-lg shadow-[#6c63ff]/40" : "bg-[#1a1a30] text-[#64748b] border border-[#2a2a40]"}`}>
                  {i < step ? <Check className="w-4 h-4" /> : i + 1}
                </div>
                <span className={`text-xs hidden sm:block ${i === step ? "text-[#a29eff]" : "text-[#64748b]"}`}>{s}</span>
              </div>
            ))}
          </div>
          <div className="h-1.5 bg-[#1a1a30] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#6c63ff] to-[#06b6d4] rounded-full"
              animate={{ width: `${((step) / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Steps */}
        <form onSubmit={handleSubmit}>
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div key="step0" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.3 }}>
                <div className="glass-card p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">What would you like to customize?</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {productTypes.map((pt) => (
                      <button type="button" key={pt.id} onClick={() => update("type", pt.id)}
                        className={`p-6 rounded-2xl border-2 text-left transition-all duration-300 ${form.type === pt.id ? "border-[#6c63ff] bg-[#6c63ff]/10" : "border-[#2a2a40] bg-[#12121e] hover:border-[#6c63ff]/50"}`}>
                        <div className="text-4xl mb-3">{pt.emoji}</div>
                        <div className="font-bold text-white text-lg">{pt.title}</div>
                        <div className="text-[#64748b] text-sm mt-1">{pt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex justify-end mt-6">
                  <button type="button" disabled={!form.type} onClick={() => setStep(1)}
                    className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#6c63ff] to-[#4f46e5] text-white font-semibold disabled:opacity-40 hover:scale-105 transition-transform">
                    Next <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.3 }}>
                <div className="glass-card p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Describe your design</h2>
                  <div className="border-2 border-dashed border-[#2a2a40] rounded-2xl p-8 text-center mb-6 hover:border-[#6c63ff]/60 transition-colors cursor-pointer">
                    <Upload className="w-10 h-10 text-[#64748b] mx-auto mb-3" />
                    <p className="text-white font-medium mb-1">Upload your design</p>
                    <p className="text-[#64748b] text-sm">PNG, JPG, SVG, PDF up to 50MB</p>
                    <div className="mt-4 px-4 py-2 rounded-full bg-[#6c63ff]/20 border border-[#6c63ff]/40 text-[#a29eff] text-sm inline-block">Browse Files</div>
                  </div>
                  <div>
                    <label className="block text-[#a0a0c0] text-sm font-medium mb-2">Or describe your idea</label>
                    <textarea
                      id="design-description"
                      rows={4}
                      value={form.description}
                      onChange={(e) => update("description", e.target.value)}
                      placeholder="Describe your design, colors, text, logo details..."
                      className="w-full px-4 py-3 rounded-xl bg-[#12121e] border border-[#2a2a40] text-white placeholder-[#64748b] focus:outline-none focus:border-[#6c63ff] transition-colors resize-none"
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <button type="button" onClick={() => setStep(0)} className="px-6 py-3 rounded-full border border-[#2a2a40] text-white hover:border-[#6c63ff] transition-colors">Back</button>
                  <button type="button" disabled={!form.description} onClick={() => setStep(2)}
                    className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#6c63ff] to-[#4f46e5] text-white font-semibold disabled:opacity-40 hover:scale-105 transition-transform">
                    Next <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.3 }}>
                <div className="glass-card p-8 space-y-5">
                  <h2 className="text-2xl font-bold text-white mb-6">Specifications</h2>
                  <div>
                    <label className="block text-[#a0a0c0] text-sm font-medium mb-2">Size</label>
                    <select id="spec-size" value={form.size} onChange={(e) => update("size", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#12121e] border border-[#2a2a40] text-white focus:outline-none focus:border-[#6c63ff] transition-colors">
                      <option value="">Select size...</option>
                      <option>Small (5×5 cm)</option>
                      <option>Medium (10×10 cm)</option>
                      <option>Large (15×15 cm)</option>
                      <option>Custom size</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#a0a0c0] text-sm font-medium mb-2">Quantity: <span className="text-[#6c63ff] font-bold">{form.quantity}</span></label>
                    <input id="spec-quantity" type="range" min="1" max="500" value={form.quantity}
                      onChange={(e) => update("quantity", e.target.value)}
                      className="w-full accent-[#6c63ff]" />
                    <div className="flex justify-between text-xs text-[#64748b] mt-1"><span>1</span><span>500</span></div>
                  </div>
                  <div>
                    <label className="block text-[#a0a0c0] text-sm font-medium mb-2">Material / Finish</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {(form.type === "sticker" ? ["Glossy Vinyl", "Matte Vinyl", "Holographic", "Clear", "Kraft Paper"] : ["Acrylic", "Metal", "Leather", "Wood", "Rubber"]).map((m) => (
                        <button type="button" key={m} onClick={() => update("material", m)}
                          className={`py-2.5 px-3 rounded-xl border text-sm font-medium transition-all ${form.material === m ? "border-[#6c63ff] bg-[#6c63ff]/10 text-[#a29eff]" : "border-[#2a2a40] text-[#64748b] hover:border-[#6c63ff]/50"}`}>
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <button type="button" onClick={() => setStep(1)} className="px-6 py-3 rounded-full border border-[#2a2a40] text-white hover:border-[#6c63ff] transition-colors">Back</button>
                  <button type="button" disabled={!form.size || !form.material} onClick={() => setStep(3)}
                    className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#6c63ff] to-[#4f46e5] text-white font-semibold disabled:opacity-40 hover:scale-105 transition-transform">
                    Next <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.3 }}>
                <div className="glass-card p-8 space-y-5">
                  <h2 className="text-2xl font-bold text-white mb-6">Your Contact Details</h2>
                  {[
                    { id: "contact-name", field: "name", label: "Full Name", placeholder: "Your name", type: "text" },
                    { id: "contact-email", field: "email", label: "Email Address", placeholder: "your@email.com", type: "email" },
                    { id: "contact-phone", field: "phone", label: "Phone Number", placeholder: "+880...", type: "tel" },
                  ].map(({ id, field, label, placeholder, type }) => (
                    <div key={id}>
                      <label className="block text-[#a0a0c0] text-sm font-medium mb-2">{label}</label>
                      <input id={id} type={type} placeholder={placeholder} value={form[field as keyof typeof form]}
                        onChange={(e) => update(field, e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#12121e] border border-[#2a2a40] text-white placeholder-[#64748b] focus:outline-none focus:border-[#6c63ff] transition-colors" />
                    </div>
                  ))}
                  <div>
                    <label className="block text-[#a0a0c0] text-sm font-medium mb-2">Additional Notes</label>
                    <textarea id="contact-notes" rows={3} value={form.notes} onChange={(e) => update("notes", e.target.value)}
                      placeholder="Any special requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-[#12121e] border border-[#2a2a40] text-white placeholder-[#64748b] focus:outline-none focus:border-[#6c63ff] transition-colors resize-none" />
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <button type="button" onClick={() => setStep(2)} className="px-6 py-3 rounded-full border border-[#2a2a40] text-white hover:border-[#6c63ff] transition-colors">Back</button>
                  <button type="submit"
                    className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#6c63ff] to-[#4f46e5] text-white font-semibold hover:shadow-lg hover:shadow-[#6c63ff]/40 hover:scale-105 transition-all duration-300">
                    Submit Order <Send className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </div>
  );
}
