"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Check, Clock, MessageSquare } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "hello@motocharm.com", color: "#6c63ff" },
  { icon: Phone, label: "Call Us", value: "+1 (555) 123-4567", color: "#f59e0b" },
  { icon: MapPin, label: "Visit Us", value: "Dhaka, Bangladesh", color: "#06b6d4" },
  { icon: Clock, label: "Working Hours", value: "Sat–Thu, 9AM–7PM", color: "#10b981" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (field: string, val: string) => setForm((f) => ({ ...f, [field]: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSent(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#0a0a14]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#06b6d4]/10 border border-[#06b6d4]/30 text-[#22d3ee] text-sm font-medium mb-4 tracking-wider uppercase">
            Get In Touch
          </span>
          <h1 className="text-5xl font-black text-white mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p className="text-[#64748b] text-lg max-w-xl mx-auto">
            Have a question or ready to start your custom order? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info cards */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-5 flex items-center gap-4 group hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${item.color}20`, border: `1px solid ${item.color}40` }}>
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <div>
                  <p className="text-[#64748b] text-xs mb-0.5 uppercase tracking-wider">{item.label}</p>
                  <p className="text-white font-semibold">{item.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="glass-card overflow-hidden h-44 flex items-center justify-center relative"
            >
              <div className="absolute inset-0 opacity-20"
                style={{ backgroundImage: "linear-gradient(rgba(108,99,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(108,99,255,0.5) 1px,transparent 1px)", backgroundSize: "20px 20px" }} />
              <div className="relative text-center">
                <div className="text-4xl mb-2">📍</div>
                <p className="text-white font-semibold">Dhaka, Bangladesh</p>
                <p className="text-[#64748b] text-sm">Find us on Google Maps</p>
              </div>
            </motion.div>
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8">
              {sent ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6c63ff] to-[#06b6d4] flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                  <p className="text-[#64748b] mb-6">Thanks for reaching out. We&apos;ll reply within 24 hours.</p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-[#6c63ff] to-[#4f46e5] text-white font-semibold hover:scale-105 transition-transform"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageSquare className="w-6 h-6 text-[#6c63ff]" />
                    <h2 className="text-xl font-bold text-white">Send us a message</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#a0a0c0] text-sm font-medium mb-2">Full Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#12121e] border border-[#2a2a40] text-white placeholder-[#64748b] focus:outline-none focus:border-[#6c63ff] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[#a0a0c0] text-sm font-medium mb-2">Email Address</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#12121e] border border-[#2a2a40] text-white placeholder-[#64748b] focus:outline-none focus:border-[#6c63ff] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#a0a0c0] text-sm font-medium mb-2">Subject</label>
                    <select
                      id="contact-subject"
                      value={form.subject}
                      onChange={(e) => update("subject", e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#12121e] border border-[#2a2a40] text-white focus:outline-none focus:border-[#6c63ff] transition-colors"
                    >
                      <option value="">Select a subject...</option>
                      <option>Custom Sticker Order</option>
                      <option>Custom Keyring Order</option>
                      <option>Smart Watch Inquiry</option>
                      <option>Order Status</option>
                      <option>General Question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#a0a0c0] text-sm font-medium mb-2">Message</label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      placeholder="Tell us how we can help..."
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#12121e] border border-[#2a2a40] text-white placeholder-[#64748b] focus:outline-none focus:border-[#6c63ff] transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-full bg-gradient-to-r from-[#6c63ff] to-[#4f46e5] text-white font-bold text-lg hover:shadow-xl hover:shadow-[#6c63ff]/30 transition-shadow disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
