"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Header component representing the sticky navigation bar. On desktop the
 * navigation items are displayed inline. On smaller screens, a hamburger
 * toggles an off‑canvas menu. The dropdown for "Pages" is rendered as
 * static text with a downward chevron to match the original template.
 */
export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Pages', href: '#', dropdown: true },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent border-b-1 border-l-2 border-gray-400">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:py-5 lg:py-6 lg:px-10 xl:px-10">
        {/* Logo */}
        <Link href="#" className="flex items-center space-x-2 ">
          <Image
            src="https://demo.sociolib.com/mulk/wp-content/uploads/sites/7/2021/10/mulk.png"
            alt="Mulk logo"
            width={120}
            height={40}
            className="w-22 h-3.5 sm:w-32 sm:h-1 md:w-40 md:h-14 lg:w-30 lg:h-5" // Responsive logo size
          />
        </Link>

        {/* Desktop navigation and hamburger */}
        <div className="flex items-center gap-8"> 
          <nav className="hidden gap-8 text-sm font-medium lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative flex items-center gap-1 text-white transition-colors hover:text-primary"
              >
                <span className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[15.2px]">{item.label}</span> {/* Adjusted text size */}
                {item.dropdown && (
                  <ChevronDown className="h-4 w-4 shrink-0" />
                )}
              </Link>
            ))}
          </nav>

          {/* Hamburger menu button (visible on all screens) */}
          <button
            className="flex items-center justify-center p-1 text-white transition-colors hover:text-primary sm:p-2 md:p-3 lg:p-1"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-[20px] w-[20px] sm:h-[23px] sm:w-[24px] md:h-[27px] md:w-[27px] lg:h-[20px] lg:w-[33px]" /> {/* Adjusted icon size */}
          </button>
        </div>

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-sm"
            >
              <div className="flex h-full flex-col justify-between px-6 py-8">
                <div className="flex items-center justify-between">
                  <Link href="#" className="flex items-center space-x-2">
                    <Image
                      src="https://demo.sociolib.com/mulk/wp-content/uploads/sites/7/2021/10/mulk.png"
                      alt="Mulk logo"
                      width={120}
                      height={40}
                    />
                  </Link>
                  <button
                    onClick={() => setOpen(false)}
                    className="rounded-md p-2 text-white hover:text-primary"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <ul className="mt-8 space-y-6 text-2xl font-semibold">
                  {navItems.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between text-white hover:text-primary"
                      >
                        <span>{item.label}</span>
                        {item.dropdown && <ChevronDown className="h-5 w-5" />}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
