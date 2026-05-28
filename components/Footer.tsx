"use client";

import Link from "next/link";
import { Zap, Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const footerLinks = {
  Products: [
    { label: "Smart Watches", href: "/products?category=watches" },
    { label: "Custom Stickers", href: "/products?category=stickers" },
    { label: "Custom Keyrings", href: "/products?category=keyrings" },
    { label: "All Products", href: "/products" },
  ],

  Company: [
    { label: "About Us", href: "/about" },
    { label: "Custom Order", href: "/custom-order" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#070710] border-t border-[#1a1a30] pt-16 pb-8 overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#6c63ff]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[#f59e0b]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6c63ff] to-[#06b6d4] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-4 h-4 text-white" />
              </div>

              <span
                className="text-xl font-black tracking-widest gradient-text"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                MOTO<span className="text-[#f59e0b]">CHARM</span>
              </span>
            </Link>

            <p className="text-[#64748b] text-sm leading-relaxed max-w-xs mb-8">
              Premium custom stickers, personalized keyrings, and cutting-edge
              smart watches. Your vision, our craft.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                {
                  Icon: FaInstagram,
                  href: "https://instagram.com",
                  label: "Instagram",
                },
                {
                  Icon: FaFacebookF,
                  href: "https://facebook.com",
                  label: "Facebook",
                },
                {
                  Icon: FaTwitter,
                  href: "https://twitter.com",
                  label: "Twitter",
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-[#1a1a30] border border-[#2a2a40] flex items-center justify-center text-[#64748b] hover:text-white hover:border-[#6c63ff] hover:bg-[#6c63ff]/10 hover:shadow-lg hover:shadow-[#6c63ff]/20 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-bold text-xs mb-6 tracking-[0.2em] uppercase">
                {title}
              </h4>

              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#64748b] hover:text-[#6c63ff] text-sm transition-all duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6c63ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1a1a30] pt-10 mt-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-[#64748b] text-sm">

            <span className="flex items-center gap-3 group cursor-pointer hover:text-white transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[#6c63ff]/10 flex items-center justify-center group-hover:bg-[#6c63ff]/20 transition-colors">
                <Mail className="w-4 h-4 text-[#6c63ff]" />
              </div>

              hello@motocharm.com
            </span>

            <span className="flex items-center gap-3 group cursor-pointer hover:text-white transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[#6c63ff]/10 flex items-center justify-center group-hover:bg-[#6c63ff]/20 transition-colors">
                <Phone className="w-4 h-4 text-[#6c63ff]" />
              </div>

              +1 (555) 123-4567
            </span>

            <span className="flex items-center gap-3 group cursor-pointer hover:text-white transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[#6c63ff]/10 flex items-center justify-center group-hover:bg-[#6c63ff]/20 transition-colors">
                <MapPin className="w-4 h-4 text-[#6c63ff]" />
              </div>

              Dhaka, Bangladesh
            </span>
          </div>

          <p className="text-[#4b5563] text-xs font-medium">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#64748b]">MotoCharm</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}