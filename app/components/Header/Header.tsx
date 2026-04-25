"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { title: "Início", href: "/" },
  { title: "A Paróquia", href: "/padroeira" },
  { title: "Horários", href: "/horarios" },
  { title: "Sacramentos", href: "/sacramentos" },
  { title: "Dízimo", href: "/dizimo" },
  { title: "Contato", href: "/contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const sidebarVariants = {
    closed: {
      x: "100%",
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
    open: {
      x: 0,
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
  };

  const linkVariants = {
    closed: { x: 20, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-zinc-950 shadow-2xl border-b border-zinc-800 py-4"
            : "bg-gradient-to-b from-zinc-950/90 to-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <Link
            href="/"
            className="font-serif text-2xl text-zinc-100 z-50 flex items-center gap-2 group"
          >
            <span className="font-light">Paróquia</span>
            <span className="text-amber-200 italic">Boa Vista</span>
          </Link>

          <button
            onClick={() => setIsOpen(true)}
            className="p-2 md:hidden active:scale-95 transition-transform z-40 text-zinc-100 bg-white/5 rounded-full hover:bg-white/10 border border-white/10"
          >
            <Menu className="w-5 h-5" />
          </button>

          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-300 hover:text-amber-400 transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-zinc-950/80 backdrop-blur-sm z-40 md:hidden"
            />

            <motion.div
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 w-[85%] max-w-sm h-full bg-zinc-950 border-l border-zinc-900 z-50 shadow-2xl flex flex-col p-8 md:hidden overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none"></div>

              <div className="flex justify-between items-center mb-12 relative z-10">
                <span className="font-serif text-xl text-zinc-100">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-white/5 rounded-full active:scale-95 transition-transform text-zinc-400 hover:text-amber-400 hover:bg-white/10 border border-white/5"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-6 relative z-10">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.title}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="font-serif text-3xl text-zinc-300 hover:text-amber-300 transition-colors block border-b border-zinc-800/50 pb-4"
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
